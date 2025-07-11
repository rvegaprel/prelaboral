import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { auth, firestore } from '../../firebase';
import Select from 'react-select';
import Spinner from '../components/Others/Spinner.tsx';

type OptionType = {
  value: string;
  label: string;
};

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [sectorOptions, setSectorOptions] = useState<OptionType[]>([]);
  const [carreraOptions, setCarreraOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDoc = await getDoc(doc(firestore, 'usuarios', currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
          setFormData(userDoc.data());
        }
      }
    };

    const loadOptions = async () => {
      const casasSnapshot = await getDocs(collection(firestore, 'casaEstudios'));
      const carrerasSnapshot = await getDocs(collection(firestore, 'carreras'));

      setSectorOptions(
        casasSnapshot.docs.map((doc) => ({ value: doc.id, label: doc.data().nombre }))
      );

      setCarreraOptions(
        carrerasSnapshot.docs.map((doc) => ({ value: doc.id, label: doc.data().nombre }))
      );
    };

    fetchUserData();
    loadOptions();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (selectedOption: OptionType | null, field: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: selectedOption ? { id: selectedOption.value, nombre: selectedOption.label } : null,
    }));
  };

  const handleSave = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      await updateDoc(doc(firestore, 'usuarios', currentUser.uid), formData);
      setUserData(formData);
      setIsEditing(false);
    }
  };

  if (!userData) {
    return <Spinner />;
  }

  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-8 bg-white">
      {/* Texto */}
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a tu perfil en <span className="text-blue-500">PreLaboral</span></h1>
        <p className="mb-4">¡Hola, <strong>{formData.nombre}!</strong> Aquí puedes gestionar la información de tu perfil.</p>
        <p className="mb-4">Actualiza tus datos personales, preferencias y asegúrate de que toda tu información esté al día.</p>
        <p className="mb-8">Recuerda que mantener tu perfil actualizado te ayudará a conectar mejor con oportunidades laborales y formativas.</p>
      </div>

      {/* Formulario - Derecha */}
      <div className="w-full md:w-1/2 bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Tu Información con nosotros</h2>
        <div className="grid grid-cols-1 gap-6">
          <input
            name="nombre"
            value={formData.nombre || ''}
            onChange={handleInputChange}
            placeholder="Nombre"
            className="border border-gray-300 p-4 rounded-lg"
            disabled={!isEditing}
          />
          <input
            name="apellido"
            value={formData.apellido || ''}
            onChange={handleInputChange}
            placeholder="Apellido"
            className="border border-gray-300 p-4 rounded-lg"
            disabled={!isEditing}
          />
          <input
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            placeholder="Email"
            className="border border-gray-300 p-4 rounded-lg"
            disabled
          />
          <input
            name="telefono"
            value={formData.telefono || ''}
            onChange={handleInputChange}
            placeholder="Teléfono"
            className="border border-gray-300 p-4 rounded-lg"
            disabled={!isEditing}
          />
          {userData.tipoUsuario === 'postulante' && (
            <>
              <Select
                options={carreraOptions}
                placeholder="Carrera"
                value={
                  formData.carrera
                    ? { value: formData.carrera.id, label: formData.carrera.nombre }
                    : null
                }
                onChange={(option) => handleSelectChange(option, 'carrera')}
                isDisabled={!isEditing}
              />
              <Select
                options={sectorOptions}
                placeholder="Casa de Estudio"
                value={
                  formData.casaEstudio
                    ? { value: formData.casaEstudio.id, label: formData.casaEstudio.nombre }
                    : null
                }
                onChange={(option) => handleSelectChange(option, 'casaEstudio')}
                isDisabled={!isEditing}
              />
            </>
          )}
        </div>
        <div className="mt-6">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Editar
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Guardar
            </button>
          )}
        </div>
      </div>

      

    </section>
  );
};

export default ProfilePage;