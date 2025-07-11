import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { registerUser, UserData } from '../../services/authService.tsx';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebase.ts';
import { useNavigate } from 'react-router-dom';

type OptionType = {
  value: string;
  label: string;
};

type RegisterFormState = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string; // siempre en formato internacional +56...
  carrera: OptionType | null;
  casaEstudio: OptionType | null;
  representante: string;
  direccion: string;
  rut: string;
  razonSocial: string;
  isFirstLogin?: boolean;
  password: string;
};

const initialState: RegisterFormState = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  carrera: null,
  casaEstudio: null,
  representante: '',
  direccion: '',
  rut: '',
  razonSocial: '',
  isFirstLogin: true,
  password: '',
};

// ---------------------------
// Componente
// ---------------------------
const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const [isPostulante, setIsPostulante] = useState(true);
  const [formData, setFormData] = useState<RegisterFormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sectorOptions, setSectorOptions] = useState<OptionType[]>([]);
  const [carreraOptions, setCarreraOptions] = useState<OptionType[]>([]);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // ---------------------------
  // Carga de combos
  // ---------------------------
  useEffect(() => {
    const loadCasasEstudio = async () => {
      const qs = await getDocs(collection(firestore, 'casaEstudios'));
      setSectorOptions(
        qs.docs.map((d) => ({ value: d.id, label: d.data().nombre }))
      );
    };
    const loadCarreras = async () => {
      const qs = await getDocs(collection(firestore, 'carreras'));
      setCarreraOptions(
        qs.docs.map((d) => ({ value: d.id, label: d.data().nombre }))
      );
    };

    loadCasasEstudio();
    loadCarreras();
  }, []);

  // ---------------------------
  // Helpers de validación
  // ---------------------------
  const validateRUT = (rut: string) => {
    const rutRegex = /^[0-9]+-[0-9kK]{1}$/;
    if (!rutRegex.test(rut)) return false;
    const [numberPart, checkDigit] = rut.split('-');
    let total = 0;
    let multiplier = 2;
    for (let i = numberPart.length - 1; i >= 0; i--) {
      total += Number(numberPart[i]) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    const calculated = 11 - (total % 11);
    const dv = calculated === 10 ? 'K' : calculated === 11 ? '0' : String(calculated);
    return dv.toUpperCase() === checkDigit.toUpperCase();
  };

  const validatePhone = (phone: string) => {
    try {
      const pn = parsePhoneNumberFromString(`+${phone}`); // react-phone-input-2 entrega sin +
      return pn?.isValid() ?? false;
    } catch {
      return false;
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre) newErrors.nombre = 'Nombre es requerido';
    if (!formData.apellido) newErrors.apellido = 'Apellido es requerido';
    if (!formData.email) newErrors.email = 'Correo electrónico es requerido';
    if (!formData.telefono) newErrors.telefono = 'Teléfono es requerido';
    else if (!validatePhone(formData.telefono)) newErrors.telefono = 'Teléfono no válido';
    if (!formData.password || formData.password.length < 6)
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';

    if (isPostulante) {
      if (!formData.carrera) newErrors.carrera = 'Carrera es requerida';
      if (!formData.casaEstudio) newErrors.casaEstudio = 'Casa de Estudio es requerida';
    } else {
      if (!formData.representante) newErrors.representante = 'Nombre del Representante es requerido';
      if (!formData.direccion) newErrors.direccion = 'Dirección de la Empresa es requerida';
      if (!formData.rut) newErrors.rut = 'RUT de la Empresa es requerido';
      else if (!validateRUT(formData.rut)) newErrors.rut = 'El RUT no es válido';
      if (!formData.razonSocial) newErrors.razonSocial = 'Razón Social es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------------------
  // Handlers
  // ---------------------------
  const handleContinue = async () => {
    if (!validateForm()) return;

    const userData: UserData = {
      ...formData,
      tipoUsuario: isPostulante ? 'postulante' : 'empresa',
      carrera: formData.carrera
        ? { id: formData.carrera.value, nombre: formData.carrera.label }
        : null,
      casaEstudio: formData.casaEstudio
        ? { id: formData.casaEstudio.value, nombre: formData.casaEstudio.label }
        : null,
    } as unknown as UserData; // cast porque formData incluye campos extra

    const result = await registerUser(formData.email, formData.password, userData);
    if (result.success) navigate('/home');
    else {
      setErrorMessage(result.error);
      setShowErrorModal(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (option: OptionType | null, field: keyof RegisterFormState) => {
    setFormData((prev) => ({ ...prev, [field]: option }));
  };

  return (
    <section className="flex justify-center items-center py-16">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Bienvenido a Prelaboral</h1>
        <p className="text-center mb-6">
          Registra tus datos para crear tu cuenta y seguir <br /> aprendiendo en Prelaboral, tu sitio de preparación laboral
        </p>

        {/* Selector Perfil */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsPostulante(true)}
            className={`px-4 py-2 mx-2 font-semibold text-gray-700 border-b-2 ${
              isPostulante ? 'border-blue-500' : 'border-transparent hover:border-gray-300'
            }`}
          >
            Postulantes
          </button>
          <button
            onClick={() => setIsPostulante(false)}
            className={`px-4 py-2 mx-2 font-semibold text-gray-700 border-b-2 ${
              !isPostulante ? 'border-blue-500' : 'border-transparent hover:border-gray-300'
            }`}
          >
            Empresa
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 items-start justify-items-center">
          {isPostulante ? (
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Datos personales</h2>

              {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
              <input
                name="nombre"
                placeholder="Nombre"
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />

              {errors.apellido && <p className="text-red-500">{errors.apellido}</p>}
              <input
                name="apellido"
                placeholder="Apellido"
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />

              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <input
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />

              {errors.password && <p className="text-red-500">{errors.password}</p>}
              <input
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />

              {errors.telefono && <p className="text-red-500">{errors.telefono}</p>}
              <PhoneInput
                  country={'cl'}
                  value={formData.telefono}
                  onChange={(value) => setFormData({ ...formData, telefono: value })}
                  placeholder="Teléfono"
                  containerClass="w-full mb-4"
                  inputClass="!w-full !p-2 !border !border-gray-300 !rounded focus:!outline-none focus:!ring-2 focus:!ring-blue-500"
                  buttonClass="!border !border-r-0 !border-gray-300 !bg-white"
                />

              {errors.carrera && <p className="text-red-500">{errors.carrera}</p>}
              <Select
                options={carreraOptions}
                placeholder="Carrera"
                onChange={(o) => handleSelectChange(o, 'carrera')}
                className="w-full mb-4"
              />

              {errors.casaEstudio && <p className="text-red-500">{errors.casaEstudio}</p>}
              <Select
                options={sectorOptions}
                placeholder="Casa de Estudios"
                onChange={(o) => handleSelectChange(o, 'casaEstudio')}
                className="w-full mb-4"
              />
            </div>
          ) : (
            <>
              <div className="p-8 rounded-lg flex flex-col items-center">
                <img src="/recursos_graficos/Empresa.png" alt="Empresa" className="h-30 w-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Con el perfil Empresa</h3>
                <p className="text-gray-700 mb-6">Encuentra los profesionales y potencia tu marca</p>
                <ul className="text-gray-600 text-sm list-disc list-inside mb-8">
                  <li>Publica ofertas laborales</li>
                  <li>Selecciona candidatos</li>
                  <li>Publicita tu marca</li>
                </ul>
              </div>

              <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Datos de la Empresa</h2>

                {errors.rut && <p className="text-red-500">{errors.rut}</p>}
                <input
                  name="rut"
                  placeholder="RUT de la Empresa: 76123456-9"
                  value={formData.rut}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                {errors.razonSocial && <p className="text-red-500">{errors.razonSocial}</p>}
                <input
                  name="razonSocial"
                  placeholder="Razón Social"
                  value={formData.razonSocial}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                {errors.direccion && <p className="text-red-500">{errors.direccion}</p>}
                <input
                  name="direccion"
                  placeholder="Dirección de la Empresa"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                {errors.representante && <p className="text-red-500">{errors.representante}</p>}
                <input
                  name="representante"
                  placeholder="Nombre del Representante"
                  value={formData.representante}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <input
                  name="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                {errors.password && <p className="text-red-500">{errors.password}</p>}
                <input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />

                {errors.telefono && <p className="text-red-500">{errors.telefono}</p>}
                <PhoneInput
                  country={'cl'}
                  value={formData.telefono}
                  onChange={(value) => setFormData({ ...formData, telefono: value })}
                  placeholder="Teléfono"
                  containerClass="w-full mb-4"
                  inputClass="!w-full !p-2 !border !border-gray-300 !rounded focus:!outline-none focus:!ring-2 focus:!ring-blue-500"
                  buttonClass="!border !border-r-0 !border-gray-300 !bg-white"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleContinue}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Continuar
          </button>
        </div>

        <div className="text-center mt-4">
          <p>
            ¿Ya tienes cuenta?{' '}
            <span
              onClick={() => navigate('/login')}
              className="text-blue-500 font-semibold hover:underline cursor-pointer"
            >
              Inicia Sesión aquí
            </span>
          </p>
        </div>

        {showErrorModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg text-center w-full max-w-sm">
              <h2 className="text-lg font-semibold text-red-600">Error en el Registro</h2>
              <p className="text-gray-700">{errorMessage}</p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="bg-red-500 text-white px-6 py-3 mt-4 rounded-full"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegisterForm;
