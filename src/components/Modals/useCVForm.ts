// -----------------------------------------------------------------------------
// useCVForm.ts  ─  Hook que encapsula toda la lógica de construcción del CV
// -----------------------------------------------------------------------------
import { useEffect, useState } from 'react';
import { auth, firestore, storage } from '../../../firebase'; // Asegúrate de importar correctamente tu configuración de Firebase
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  DocumentReference,
} from 'firebase/firestore';
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { MultiValue, SingleValue } from 'react-select';
import {
  Option,
  FormDataInterface,
  UserData,
} from './types';

// Catálogos estáticos que no dependen de Firestore
export const industryOptions: Option[] = [
  { value: 'mineria', label: 'Minería' },
  { value: 'construccion', label: 'Construcción' },
  { value: 'tecnologia', label: 'Tecnología' },
];

export const areaOptions: Option[] = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'ventas', label: 'Ventas' },
  { value: 'rrhh', label: 'RR.HH' },
];

export const languageOptions: Option[] = [
  { value: 'ingles', label: 'Inglés' },
  { value: 'espanol', label: 'Español' },
  { value: 'frances', label: 'Francés' },
  { value: 'aleman', label: 'Alemán' },
  { value: 'mandarin', label: 'Mandarín' },
];

interface UseCVFormReturn {
  formData: FormDataInterface;
  setFormData: React.Dispatch<React.SetStateAction<FormDataInterface>>;
  regionOptions: Option[];
  comunaOptions: Option[];
  universidadOptions: Option[];
  carreraOptions: Option[];
  uploadProgress: Record<string, number>;
  loading: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section?: string,
    index?: number,
  ) => void;
  handleSelectChange: (
    option: SingleValue<Option> | MultiValue<Option>,
    field: string,
    section?: string,
    index?: number,
  ) => void;
  handleAddEntry: (field: keyof FormDataInterface) => void;
  handleRemoveEntry: (field: keyof FormDataInterface, index: number) => void;
  handleFileUpload: (file: File, section: string, index: number) => Promise<void>;
  handleSave: () => Promise<void>;
}

export const useCVForm = (): UseCVFormReturn => {
  const [formData, setFormData] = useState<FormDataInterface>({
    nombre: '',
    apellido: '',
    region: undefined,
    comuna: undefined,
    industrias: [],
    areas: [],
    estudios: [],
    certificaciones: [],
    idiomas: [],
    experiencia: [],
    licenciaConducir: undefined,
    disponibilidadChile: undefined,
  });

  const [regionOptions, setRegionOptions] = useState<Option[]>([]);
  const [comunaOptions, setComunaOptions] = useState<Option[]>([]);
  const [universidadOptions, setUniversidadOptions] = useState<Option[]>([]);
  const [carreraOptions, setCarreraOptions] = useState<Option[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  // --------------------------------------------------
  // Carga inicial de datos de usuario y catálogos
  // --------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const user = auth.currentUser;
        if (!user) return;

        // Datos previos del usuario
        const userDocRef = doc(firestore, 'usuarios', user.uid) as DocumentReference<UserData>;
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          setFormData(prev => ({ ...prev, ...(userSnap.data() as FormDataInterface) }));
        }

        // Catálogos
        const [regiones, comunas, universidades, carreras] = await Promise.all([
          getDocs(collection(firestore, 'regiones')),
          getDocs(collection(firestore, 'comunas')),
          getDocs(collection(firestore, 'casaEstudios')),
          getDocs(collection(firestore, 'carreras')),
        ]);

        setRegionOptions(regiones.docs.map(d => ({ value: d.id, label: d.data().nombre as string })));
        setComunaOptions(comunas.docs.map(d => ({ value: d.id, label: d.data().nombre as string })));
        setUniversidadOptions(universidades.docs.map(d => ({ value: d.id, label: d.data().nombre as string })));
        setCarreraOptions(carreras.docs.map(d => ({ value: d.id, label: d.data().nombre as string })));
      } catch (err) {
        console.error('Error cargando catálogos/usuario', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --------------------------------------------------
  // Handlers genéricos
  // --------------------------------------------------
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section?: string,
    index?: number,
  ) => {
    const { name, value } = e.target;
    if (section && index !== undefined) {
      const updatedSection = [...(formData[section] as any[])];
      updatedSection[index] = { ...updatedSection[index], [name]: value };
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (
    option: SingleValue<Option> | MultiValue<Option>,
    field: string,
    section?: string,
    index?: number,
  ) => {
    if (section && index !== undefined) {
      const updatedSection = [...(formData[section] as any[])];
      updatedSection[index] = { ...updatedSection[index], [field]: option };
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({ ...formData, [field]: option });
    }
  };

  const handleAddEntry = (field: keyof FormDataInterface) => {
    setFormData({
      ...formData,
      [field]: [...(formData[field] as any[]), {}],
    });
  };

  const handleRemoveEntry = (field: keyof FormDataInterface, index: number) => {
    setFormData({
      ...formData,
      [field]: (formData[field] as any[]).filter((_, i) => i !== index),
    });
  };

  const handleFileUpload = async (file: File, section: string, index: number) => {
    const user = auth.currentUser;
    if (!user) return;

    const refPath = `usuarios/${user.uid}/${section}/${Date.now()}_${file.name}`;
    const task = uploadBytesResumable(storageRef(storage, refPath), file);

    task.on(
      'state_changed',
      snap => {
        const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        setUploadProgress(prev => ({ ...prev, [`${section}-${index}`]: progress }));
      },
      err => {
        console.error('Upload error', err);
        setUploadProgress(prev => ({ ...prev, [`${section}-${index}`]: 0 }));
      },
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        const updated = [...(formData[section] as any[])];
        updated[index] = { ...updated[index], certificado: url };
        setFormData({ ...formData, [section]: updated });
        setUploadProgress(prev => ({ ...prev, [`${section}-${index}`]: 100 }));
        setTimeout(() => setUploadProgress(prev => {
          const n = { ...prev }; delete n[`${section}-${index}`]; return n;
        }), 2000);
      },
    );
  };

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;
    try {
      const ref = doc(firestore, 'usuarios', user.uid);
      await setDoc(ref, { ...formData, updatedAt: new Date().toISOString() }, { merge: true });
    } catch (err) {
      console.error('Error guardando CV', err);
      throw err;
    }
  };

  return {
    formData,
    setFormData,
    regionOptions,
    comunaOptions,
    universidadOptions,
    carreraOptions,
    uploadProgress,
    loading,
    handleInputChange,
    handleSelectChange,
    handleAddEntry,
    handleRemoveEntry,
    handleFileUpload,
    handleSave,
  };
};
