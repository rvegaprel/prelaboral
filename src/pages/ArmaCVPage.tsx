import React, { useState, useEffect } from 'react';
import { auth, firestore, storage } from '../../firebase';
import { doc, setDoc, getDoc, getDocs, collection, DocumentReference } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import Select, { SingleValue, MultiValue } from 'react-select';
import Spinner from '../components/Others/Spinner.tsx';
import SaveModal from '../components/Forms/SaveModal.tsx';
import CVPreview from '../components/Others/CVPreview';
import ProgressBar from '../components/Others/ProgressBar.tsx';
import CVBuilderModal from '../components/Modals/CVBuilderModal';
import { FaPlus, FaTrash, FaPaperclip } from 'react-icons/fa';

interface Option {
  value: string;
  label: string;
}

interface Study {
  nivel?: Option;
  institucion?: Option | string;
  carrera?: Option | string;
  estado?: Option;
  fechaTitulacion?: string;
  certificado?: string;
}

interface Certification {
  titulo?: string;
  institucion?: string;
  fecha?: string;
  certificado?: string;
}

interface Language {
  idioma?: Option;
  nivel?: Option;
  certificado?: string;
}

interface Experience {
  empresa?: string;
  cargo?: string;
  ubicacion?: string;
  tipo?: Option;
  fechaInicio?: string;
  fechaFin?: string | null;
  actualmenteTrabajando?: boolean;
  descripcion?: string;
  certificado?: string;
}

// Se añade un index signature para permitir el acceso dinámico
interface FormDataInterface {
  [key: string]: any;
  nombre: string;
  apellido: string;
  region?: Option;
  comuna?: Option;
  industrias: MultiValue<Option>;
  areas: MultiValue<Option>;
  estudios: Study[];
  certificaciones: Certification[];
  idiomas: Language[];
  experiencia: Experience[];
  licenciaConducir?: Option;
  disponibilidadChile?: Option;
}

interface UserData {
  [key: string]: any;
}

const industryOptions: Option[] = [
  { value: 'mineria', label: 'Minería' },
  { value: 'construccion', label: 'Construcción' },
  { value: 'tecnologia', label: 'Tecnología' },
];

const areaOptions: Option[] = [
  { value: 'marketing', label: 'Marketing' },
  { value: 'ventas', label: 'Ventas' },
  { value: 'rrhh', label: 'RR.HH' },
];

const languageOptions: Option[] = [
  { value: 'ingles', label: 'Inglés' },
  { value: 'espanol', label: 'Español' },
  { value: 'frances', label: 'Francés' },
  { value: 'aleman', label: 'Alemán' },
  { value: 'mandarin', label: 'Mandarín' },
];

const ArmaCVPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
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
  const [loading, setLoading] = useState(true);
  const [saveModal, setSaveModal] = useState({
    isOpen: false,
    success: true,
    message: '',
  });
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const user = auth.currentUser;
        if (!user) {
          console.error('No hay usuario autenticado');
          navigate('/login');
          return;
        }

        const userDocRef = doc(firestore, 'usuarios', user.uid) as DocumentReference<UserData>;
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setFormData(prev => ({ ...prev, ...userDoc.data() }));
        }

        const [regionSnapshot, comunaSnapshot, universidadSnapshot, carreraSnapshot] = await Promise.all([
          getDocs(collection(firestore, 'regiones')),
          getDocs(collection(firestore, 'comunas')),
          getDocs(collection(firestore, 'casaEstudios')),
          getDocs(collection(firestore, 'carreras')),
        ]);

        setRegionOptions(regionSnapshot.docs.map(doc => ({ value: doc.id, label: doc.data().nombre as string })));
        setComunaOptions(comunaSnapshot.docs.map(doc => ({ value: doc.id, label: doc.data().nombre as string })));
        setUniversidadOptions(universidadSnapshot.docs.map(doc => ({ value: doc.id, label: doc.data().nombre as string })));
        setCarreraOptions(carreraSnapshot.docs.map(doc => ({ value: doc.id, label: doc.data().nombre as string })));
      } catch (error: any) {
        console.error('Error al cargar datos:', error);
        alert(`Error al cargar datos: ${error.message || 'Intenta de nuevo.'}`);
      } finally {
        setLoading(false);
      }
      setShowCVModal(true);
    };

    fetchData();
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section?: string, index?: number) => {
    const { name, value } = e.target;
    if (section && index !== undefined) {
      const updatedSection = [...(formData[section] as any[])];
      updatedSection[index] = { ...updatedSection[index], [name]: value };
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (option: SingleValue<Option> | MultiValue<Option>, field: string, section?: string, index?: number) => {
    if (section && index !== undefined) {
      const updatedSection = [...(formData[section] as any[])];
      updatedSection[index] = { ...updatedSection[index], [field]: option };
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({ ...formData, [field]: option });
    }
  };

  const handleAddEntry = (field: string) => {
    setFormData({
      ...formData,
      [field]: [...(formData[field] as any[]), {}],
    });
  };

  const handleRemoveEntry = (field: string, index: number) => {
    setFormData({
      ...formData,
      [field]: (formData[field] as any[]).filter((_: any, i: number) => i !== index),
    });
  };

  const handleFileUpload = async (file: File, section: string, index: number) => {
    try {
      console.log('Iniciando subida de archivo:', file.name);
      const user = auth.currentUser;
      if (!user) {
        console.error('Usuario no autenticado');
        alert('Debes iniciar sesión para subir archivos.');
        return;
      }

      const storageRef = ref(storage, `usuarios/${user.uid}/${section}/${Date.now()}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progreso de subida: ${progress}%`);
          setUploadProgress((prev) => ({
            ...prev,
            [`${section}-${index}`]: progress,
          }));
        },
        (error: any) => {
          console.error('Error durante la subida:', error);
          setUploadProgress((prev) => ({
            ...prev,
            [`${section}-${index}`]: 0,
          }));
          alert(`Error al subir el archivo: ${error.message || 'Intenta de nuevo.'}`);
        },
        async () => {
          const fileURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('URL generada:', fileURL);

          const updatedSection = [...(formData[section] as any[])];
          updatedSection[index] = { ...updatedSection[index], certificado: fileURL };
          setFormData({ ...formData, [section]: updatedSection });
          setUploadProgress((prev) => ({
            ...prev,
            [`${section}-${index}`]: 100,
          }));

          setTimeout(() => {
            setUploadProgress((prev) => {
              const newProgress = { ...prev };
              delete newProgress[`${section}-${index}`];
              return newProgress;
            });
          }, 2000);
        }
      );
    } catch (error: any) {
      console.error('Error al iniciar la subida:', error);
      alert(`Error al subir el archivo: ${error.message || 'Intenta de nuevo.'}`);
    }
  };

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const userDocRef = doc(firestore, 'usuarios', user.uid) as DocumentReference<UserData>;
      await setDoc(userDocRef, {
        ...formData,
        updatedAt: new Date().toISOString(),
      }, { merge: true });
      setSaveModal({
        isOpen: true,
        success: true,
        message: '¡CV guardado con éxito!',
      });
    } catch (error: any) {
      console.error('Error al guardar:', error);
      setSaveModal({
        isOpen: true,
        success: false,
        message: 'Error al guardar el CV.',
      });
    }
  };

  const closeSaveModal = () => {
    setSaveModal({ isOpen: false, success: true, message: '' });
    if (saveModal.success) {
      navigate('/aprendamos');
    }
  };

  const [showCVModal, setShowCVModal] = useState(false);

  const steps = [
    { title: 'Información Personal', fields: ['nombre', 'apellido', 'region', 'comuna', 'licenciaConducir', 'disponibilidadChile'] },
    { title: 'Intereses', fields: ['industrias', 'areas'] },
    { title: 'Estudios', fields: ['estudios'] },
    { title: 'Certificaciones', fields: ['certificaciones'] },
    { title: 'Idiomas', fields: ['idiomas'] },
    { title: 'Experiencia Laboral', fields: ['experiencia'] },
  ];

  if (loading) return <Spinner />;

  return (
    <section className="min-h-screen p-4">



{showCVModal && <CVBuilderModal onClose={() => setShowCVModal(false)} />}


      <div className="max-w-4xl mx-auto">
        <div className="shadow-lg rounded-lg p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Empecemos a armar tu <span className="text-blue-500">CV</span>
          </h1>
          <p className="text-gray-600 text-center text-sm md:text-base mb-4">
            Esta es la primera versión basada en tu información. En el transcurso de tu viaje por Prelaboral, iremos construyendo tu perfil descubriendo tus talentos y preferencias.
          </p>

          {/* Barra de progreso */}
          <div className="flex justify-between mb-4">
            {steps.map((s, index) => (
              <div key={index} className="flex-1 text-center">
                <div className={`w-6 h-6 md:w-8 md:h-8 mx-auto rounded-full flex items-center justify-center ${step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-blue-500' : 'bg-gray-300'} text-white text-xs md:text-sm`}>
                  {index + 1}
                </div>
                <p className="text-xs md:text-sm mt-1 text-gray-600">{s.title}</p>
              </div>
            ))}
          </div>

          {/* Contenido responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Formulario */}
            <div className="space-y-4">
              {step === 1 && (
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-sm md:text-base font-medium">Nombre</label>
                  <input name="nombre" value={formData.nombre} onChange={(e) => handleInputChange(e)} placeholder="Nombre" className="border p-2 md:p-3 rounded-lg text-sm md:text-base" />
                  
                  <label className="text-sm md:text-base font-medium">Apellido</label>
                  <input name="apellido" value={formData.apellido} onChange={(e) => handleInputChange(e)} placeholder="Apellido" className="border p-2 md:p-3 rounded-lg text-sm md:text-base" />
                  
                  <label className="text-sm md:text-base font-medium">Región</label>
                  <Select<Option, false>
                    options={regionOptions}
                    value={formData.region as SingleValue<Option>}
                    onChange={(opt) => handleSelectChange(opt, 'region')}
                    placeholder="Región"
                    className="text-sm md:text-base"
                    classNamePrefix="react-select"
                  />
                  
                  <label className="text-sm md:text-base font-medium">Comuna</label>
                  <Select<Option, false>
                    options={comunaOptions}
                    value={formData.comuna as SingleValue<Option>}
                    onChange={(opt) => handleSelectChange(opt, 'comuna')}
                    placeholder="Comuna"
                    className="text-sm md:text-base"
                    classNamePrefix="react-select"
                  />
                  
                  <label className="text-sm md:text-base font-medium">¿Tienes licencia de conducir?</label>
                  <Select<Option, false>
                    options={[
                      { value: 'no', label: 'No tengo licencia' },
                      { value: 'clase_a1', label: 'Clase A1' },
                      { value: 'clase_a2', label: 'Clase A2' },
                      { value: 'clase_a3', label: 'Clase A3' },
                      { value: 'clase_a4', label: 'Clase A4' },
                      { value: 'clase_a5', label: 'Clase A5' },
                      { value: 'clase_b', label: 'Clase B' },
                      { value: 'clase_c', label: 'Clase C' },
                      { value: 'clase_d', label: 'Clase D' },
                      { value: 'clase_e', label: 'Clase E' },
                      { value: 'clase_f', label: 'Clase F' },
                    ]}
                    value={formData.licenciaConducir as SingleValue<Option>}
                    onChange={(opt) => handleSelectChange(opt, 'licenciaConducir')}
                    placeholder="¿Tienes licencia de conducir?"
                    className="text-sm md:text-base"
                    classNamePrefix="react-select"
                  />
                  
                  <label className="text-sm md:text-base font-medium">¿Disponibilidad en todo Chile?</label>
                  <Select<Option, false>
                    options={[{ value: 'si', label: 'Sí' }, { value: 'no', label: 'No' }]}
                    value={formData.disponibilidadChile as SingleValue<Option>}
                    onChange={(opt) => handleSelectChange(opt, 'disponibilidadChile')}
                    placeholder="¿Disponibilidad en todo Chile?"
                    className="text-sm md:text-base"
                    classNamePrefix="react-select"
                  />
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-sm md:text-base font-medium">¿En qué áreas te gustaría trabajar?</label>
                  <Select<Option, true>
                    isMulti
                    options={areaOptions}
                    value={formData.areas as MultiValue<Option>}
                    onChange={(opt) => handleSelectChange(opt, 'areas')}
                    placeholder="Áreas de interés (Máximo 3)"
                    className="text-sm md:text-base"
                    classNamePrefix="react-select"
                  />
                  
                  <label className="text-sm md:text-base font-medium">¿Qué industrias te interesan?</label>
                  <Select<Option, true>
                    isMulti
                    options={industryOptions}
                    value={formData.industrias as MultiValue<Option>}
                    onChange={(opt) => handleSelectChange(opt, 'industrias')}
                    placeholder="Industrias de interés (Máximo 3)"
                    className="text-sm md:text-base"
                    classNamePrefix="react-select"
                  />
                </div>
              )}

              {step === 3 && (
                <div>
                  <button onClick={() => handleAddEntry('estudios')} className="flex items-center text-blue-500 mb-3 text-sm md:text-base">
                    <FaPlus className="mr-1" /> Agregar Estudio
                  </button>
                  {formData.estudios.map((estudio: Study, index: number) => (
                    <div key={index} className="border p-3 md:p-4 rounded-lg mb-3 md:mb-4 shadow-sm">
                      <label className="text-sm md:text-base font-medium">Nivel de estudios</label>
                      <Select<Option, false>
                        options={[
                          { value: 'basica', label: 'Básica' },
                          { value: 'secundaria', label: 'Secundaria' },
                          { value: 'tecnica', label: 'Técnica Profesional' },
                          { value: 'universitaria', label: 'Universitaria Pregrado' },
                          { value: 'diplomado', label: 'Diplomado' },
                          { value: 'magister', label: 'Magíster' },
                          { value: 'doctorado', label: 'Doctorado' },
                        ]}
                        value={estudio.nivel as SingleValue<Option>}
                        onChange={(opt) => handleSelectChange(opt, 'nivel', 'estudios', index)}
                        placeholder="Nivel de estudios"
                        className="text-sm md:text-base mb-2 md:mb-3"
                        classNamePrefix="react-select"
                      />
                      {estudio.nivel?.value === 'universitaria' ? (
                        <>
                          <label className="text-sm md:text-base font-medium">Institución</label>
                          <Select<Option, false>
                            options={universidadOptions}
                            value={estudio.institucion as SingleValue<Option>}
                            onChange={(opt) => handleSelectChange(opt, 'institucion', 'estudios', index)}
                            placeholder="Institución"
                            className="text-sm md:text-base mb-2 md:mb-3"
                            classNamePrefix="react-select"
                          />
                        </>
                      ) : (
                        <>
                          <label className="text-sm md:text-base font-medium">Nombre de la institución</label>
                          <input
                            name="institucion"
                            value={typeof estudio.institucion === 'string' ? estudio.institucion : ''}
                            onChange={(e) => handleInputChange(e, 'estudios', index)}
                            placeholder="Nombre de la institución"
                            className="border p-2 md:p-3 rounded-lg text-sm md:text-base mb-2 md:mb-3 w-full"
                          />
                        </>
                      )}
                      {estudio.nivel?.value === 'universitaria' ? (
                        <>
                          <label className="text-sm md:text-base font-medium">Carrera</label>
                          <Select<Option, false>
                            options={carreraOptions}
                            value={estudio.carrera as SingleValue<Option>}
                            onChange={(opt) => handleSelectChange(opt, 'carrera', 'estudios', index)}
                            placeholder="Carrera"
                            className="text-sm md:text-base mb-2 md:mb-3"
                            classNamePrefix="react-select"
                          />
                        </>
                      ) : (
                        <>
                          <label className="text-sm md:text-base font-medium">Nombre de la carrera</label>
                          <input
                            name="carrera"
                            value={typeof estudio.carrera === 'string' ? estudio.carrera : ''}
                            onChange={(e) => handleInputChange(e, 'estudios', index)}
                            placeholder="Nombre de la carrera"
                            className="border p-2 md:p-3 rounded-lg text-sm md:text-base mb-2 md:mb-3 w-full"
                          />
                        </>
                      )}
                      <label className="text-sm md:text-base font-medium">Estado</label>
                      <Select<Option, false>
                        options={[
                          { value: 'completada', label: 'Completada' },
                          { value: 'en_curso', label: 'En Curso' },
                          { value: 'incompleta', label: 'Incompleta' },
                        ]}
                        value={estudio.estado as SingleValue<Option>}
                        onChange={(opt) => handleSelectChange(opt, 'estado', 'estudios', index)}
                        placeholder="Estado"
                        className="text-sm md:text-base mb-2 md:mb-3"
                        classNamePrefix="react-select"
                      />
                      <label className="text-sm md:text-base font-medium">Fecha de titulación</label>
                      <input
                        name="fechaTitulacion"
                        type="date"
                        value={estudio.fechaTitulacion || ''}
                        onChange={(e) => handleInputChange(e, 'estudios', index)}
                        className="border p-2 md:p-3 rounded-lg text-sm md:text-base mb-2 md:mb-3 w-full"
                      />
                      <div className="mt-2">
                        <label 
                          htmlFor={`file-input-estudios-${index}`} 
                          className="text-blue-500 text-sm md:text-base cursor-pointer flex items-center gap-2"
                        >
                          <FaPaperclip /> Adjuntar título
                        </label>
                        <input 
                          id={`file-input-estudios-${index}`} 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(file, 'estudios', index);
                          }} 
                        />
                        {uploadProgress[`estudios-${index}`] > 0 && (
                          <ProgressBar progress={uploadProgress[`estudios-${index}`] || 0} />
                        )}
                        {estudio.certificado && (
                          <a 
                            href={estudio.certificado} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 text-sm md:text-base underline block mt-2"
                          >
                            Ver título
                          </a>
                        )}
                      </div>
                      <button onClick={() => handleRemoveEntry('estudios', index)} className="text-red-500 text-sm md:text-base mt-2">
                        <FaTrash /> Eliminar
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {step === 4 && (
                <div>
                  <button onClick={() => handleAddEntry('certificaciones')} className="flex items-center text-blue-500 mb-3 text-sm md:text-base">
                    <FaPlus className="mr-1" /> Agregar Certificación
                  </button>
                  {formData.certificaciones.map((cert: Certification, index: number) => (
                    <div key={index} className="border p-3 md:p-4 rounded-lg mb-3 md:mb-4 shadow-sm">
                      <label className="text-sm md:text-base font-medium">Nombre de la certificación</label>
                      <input name="titulo" value={cert.titulo || ''} onChange={(e) => handleInputChange(e, 'certificaciones', index)} placeholder="Nombre de la certificación" className="border p-2 md:p-3 rounded-lg text-sm md:text-base w-full mb-2 md:mb-3" />
                      <label className="text-sm md:text-base font-medium">Institución</label>
                      <input name="institucion" value={cert.institucion || ''} onChange={(e) => handleInputChange(e, 'certificaciones', index)} placeholder="Institución" className="border p-2 md:p-3 rounded-lg text-sm md:text-base w-full mb-2 md:mb-3" />
                      <label className="text-sm md:text-base font-medium">Fecha</label>
                      <input name="fecha" type="date" value={cert.fecha || ''} onChange={(e) => handleInputChange(e, 'certificaciones', index)} className="border p-2 md:p-3 rounded-lg text-sm md:text-base w-full mb-2 md:mb-3" />
                      <div className="mt-2">
                        <label 
                          htmlFor={`file-input-certificaciones-${index}`} 
                          className="text-blue-500 text-sm md:text-base cursor-pointer flex items-center gap-2"
                        >
                          <FaPaperclip /> Adjuntar certificado
                        </label>
                        <input 
                          id={`file-input-certificaciones-${index}`} 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(file, 'certificaciones', index);
                          }} 
                        />
                        {uploadProgress[`certificaciones-${index}`] > 0 && (
                          <ProgressBar progress={uploadProgress[`certificaciones-${index}`] || 0} />
                        )}
                        {cert.certificado && (
                          <a 
                            href={cert.certificado} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 text-sm md:text-base underline block mt-2"
                          >
                            Ver certificado
                          </a>
                        )}
                      </div>
                      <button onClick={() => handleRemoveEntry('certificaciones', index)} className="text-red-500 text-sm md:text-base mt-2">
                        <FaTrash /> Eliminar
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {step === 5 && (
                <div>
                  <button onClick={() => handleAddEntry('idiomas')} className="flex items-center text-blue-500 mb-3 text-sm md:text-base">
                    <FaPlus className="mr-1" /> Agregar Idioma
                  </button>
                  {formData.idiomas.map((idioma: Language, index: number) => (
                    <div key={index} className="border p-3 md:p-4 rounded-lg mb-3 md:mb-4 shadow-sm">
                      <label className="text-sm md:text-base font-medium">Idioma</label>
                      <Select<Option, false>
                        options={languageOptions}
                        value={idioma.idioma as SingleValue<Option>}
                        onChange={(opt) => handleSelectChange(opt, 'idioma', 'idiomas', index)}
                        placeholder="Idioma"
                        className="text-sm md:text-base mb-2 md:mb-3"
                        classNamePrefix="react-select"
                      />
                      <label className="text-sm md:text-base font-medium">Nivel</label>
                      <Select<Option, false>
                        options={[
                          { value: 'Básico', label: 'Básico' },
                          { value: 'Intermedio', label: 'Intermedio' },
                          { value: 'Avanzado', label: 'Avanzado' },
                          { value: 'Nativo', label: 'Nativo' },
                        ]}
                        value={idioma.nivel as SingleValue<Option>}
                        onChange={(opt) => handleSelectChange(opt, 'nivel', 'idiomas', index)}
                        placeholder="Nivel"
                        className="text-sm md:text-base mb-2 md:mb-3"
                        classNamePrefix="react-select"
                      />
                      <div className="mt-2">
                        <label 
                          htmlFor={`file-input-idiomas-${index}`} 
                          className="text-blue-500 text-sm md:text-base cursor-pointer flex items-center gap-2"
                        >
                          <FaPaperclip /> Adjuntar certificado
                        </label>
                        <input 
                          id={`file-input-idiomas-${index}`} 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(file, 'idiomas', index);
                          }} 
                        />
                        {uploadProgress[`idiomas-${index}`] > 0 && (
                          <ProgressBar progress={uploadProgress[`idiomas-${index}`] || 0} />
                        )}
                        {idioma.certificado && (
                          <a 
                            href={idioma.certificado} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 text-sm md:text-base underline block mt-2"
                          >
                            Ver certificado
                          </a>
                        )}
                      </div>
                      <button onClick={() => handleRemoveEntry('idiomas', index)} className="text-red-500 text-sm md:text-base mt-2">
                        <FaTrash /> Eliminar
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {step === 6 && (
                <div>
                  <button onClick={() => handleAddEntry('experiencia')} className="flex items-center text-blue-500 mb-3 text-sm md:text-base">
                    <FaPlus className="mr-1" /> Agregar Experiencia
                  </button>
                  {formData.experiencia.map((exp: Experience, index: number) => (
                    <div key={index} className="border p-3 md:p-4 rounded-lg mb-3 md:mb-4 shadow-sm">
                      <label className="text-sm md:text-base font-medium">Nombre de la empresa</label>
                      <input name="empresa" value={exp.empresa || ''} onChange={(e) => handleInputChange(e, 'experiencia', index)} placeholder="Nombre de la empresa" className="border p-2 md:p-3 rounded-lg text-sm md:text-base w-full mb-2 md:mb-3" />
                      <label className="text-sm md:text-base font-medium">Cargo</label>
                      <input name="cargo" value={exp.cargo || ''} onChange={(e) => handleInputChange(e, 'experiencia', index)} placeholder="Cargo" className="border p-2 md:p-3 rounded-lg text-sm md:text-base w-full mb-2 md:mb-3" />
                      <label className="text-sm md:text-base font-medium">Ubicación</label>
                      <input name="ubicacion" value={exp.ubicacion || ''} onChange={(e) => handleInputChange(e, 'experiencia', index)} placeholder="Ubicación" className="border p-2 md:p-3 rounded-lg text-sm md:text-base w-full mb-2 md:mb-3" />
                      <label className="text-sm md:text-base font-medium">Tipo de empleo</label>
                      <Select<Option, false>
                        options={[
                          { value: 'tiempo_completo', label: 'Tiempo Completo' },
                          { value: 'medio_tiempo', label: 'Medio Tiempo' },
                          { value: 'freelance', label: 'Freelance' },
                          { value: 'practica', label: 'Práctica' },
                        ]}
                        value={exp.tipo as SingleValue<Option>}
                        onChange={(opt) => handleSelectChange(opt, 'tipo', 'experiencia', index)}
                        placeholder="Tipo de empleo"
                        className="text-sm md:text-base mb-2 md:mb-3"
                        classNamePrefix="react-select"
                      />
                      <label className="text-sm md:text-base font-medium">Fecha de inicio</label>
                      <input name="fechaInicio" type="date" value={exp.fechaInicio || ''} onChange={(e) => handleInputChange(e, 'experiencia', index)} className="border p-2 md:p-3 rounded-lg text-sm md:text-base w-full mb-2 md:mb-3" />
                      <label className="text-sm md:text-base font-medium">Fecha de fin</label>
                      <input
                        name="fechaFin"
                        type="date"
                        value={exp.fechaFin || ''}
                        disabled={exp.actualmenteTrabajando}
                        onChange={(e) => handleInputChange(e, 'experiencia', index)}
                        className="border p-2 md:p-3 rounded-lg text-sm md:text-base w-full mb-2 md:mb-3"
                      />
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        <input
                          type="checkbox"
                          checked={exp.actualmenteTrabajando || false}
                          onChange={(e) => {
                            const updatedExp = [...(formData.experiencia as any[])];
                            updatedExp[index] = { ...updatedExp[index], actualmenteTrabajando: e.target.checked };
                            if (e.target.checked) updatedExp[index].fechaFin = null;
                            setFormData({ ...formData, experiencia: updatedExp });
                          }}
                        />
                        <label className="text-sm md:text-base">Actualmente trabajando aquí</label>
                      </div>
                      <label className="text-sm md:text-base font-medium">Descripción de responsabilidades</label>
                      <textarea
                        name="descripcion"
                        value={exp.descripcion || ''}
                        onChange={(e) => handleInputChange(e, 'experiencia', index)}
                        placeholder="Descripción de responsabilidades"
                        className="border p-2 md:p-3 rounded-lg text-sm md:text-base w-full mb-2 md:mb-3"
                        rows={3}
                      />
                      <div className="mt-2">
                        <label 
                          htmlFor={`file-input-experiencia-${index}`} 
                          className="text-blue-500 text-sm md:text-base cursor-pointer flex items-center gap-2"
                        >
                          <FaPaperclip /> Adjuntar certificado
                        </label>
                        <input 
                          id={`file-input-experiencia-${index}`} 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(file, 'experiencia', index);
                          }} 
                        />
                        {uploadProgress[`experiencia-${index}`] > 0 && (
                          <ProgressBar progress={uploadProgress[`experiencia-${index}`] || 0} />
                        )}
                        {exp.certificado && (
                          <a 
                            href={exp.certificado} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 text-sm md:text-base underline block mt-2"
                          >
                            Ver certificado
                          </a>
                        )}
                      </div>
                      <button onClick={() => handleRemoveEntry('experiencia', index)} className="text-red-500 text-sm md:text-base mt-2">
                        <FaTrash /> Eliminar
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Vista previa en desktop */}
            <div className="hidden md:block">
              <CVPreview data={formData} />
            </div>
          </div>

          {/* Navegación entre pasos */}
          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="bg-gray-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base hover:bg-gray-600">
                Anterior
              </button>
            )}
            {step < steps.length ? (
              <button onClick={() => setStep(step + 1)} className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base hover:bg-blue-600">
                Siguiente
              </button>
            ) : (
              <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base hover:bg-green-600">
                Guardar y Finalizar
              </button>
            )}
          </div>
        </div>
      </div>

      <SaveModal
        isOpen={saveModal.isOpen}
        onClose={closeSaveModal}
        success={saveModal.success}
        message={saveModal.message}
      />
    </section>
  );
};

export default ArmaCVPage;