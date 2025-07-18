// Shared type definitions for CV builder components
// --------------------------------------------------
// Coloca en este archivo todos los tipos que comparten ArmaCVPage y CVBuilderModal
// para poder importarlos desde un único lugar.

import { MultiValue } from 'react-select';

export interface Option {
  value: string;
  label: string;
}

export interface Study {
  nivel?: Option;
  institucion?: Option | string;
  carrera?: Option | string;
  estado?: Option;
  fechaTitulacion?: string;
  certificado?: string;
}

export interface Certification {
  titulo?: string;
  institucion?: string;
  fecha?: string;
  certificado?: string;
}

export interface Language {
  idioma?: Option;
  nivel?: Option;
  certificado?: string;
}

export interface Experience {
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

// Index signature para permitir acceso dinámico a las claves
export interface FormDataInterface {
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

// Tipo genérico para documentos de usuario en Firestore
export interface UserData {
  [key: string]: any;
}

export const industryOptions: Option[] = [
  { value: 'arteDiseno', label: 'Arte y Diseño' },
  { value: 'cienciasSociales', label: 'Ciencias Sociales' },
  { value: 'construccion', label: 'Construcción' },
  { value: 'educacion', label: 'Educación' },
  { value: 'ingenieria', label: 'Ingeniería' },
  { value: 'mineria', label: 'Minería' },
  { value: 'salud', label: 'Salud' },
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