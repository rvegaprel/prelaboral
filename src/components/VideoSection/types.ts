//import { ReactNode, CSSProperties } from "react";

export interface Question {
  question: string;
  type: 'checkbox' | 'radio';
  options: string[];
  correct?: string[] | string;
}

export interface Area {
  id: string;
  name: string;
  order: number;
  videos: Video[];
}

export interface Video {
  title: string;
  videoUrl: string;
  //icon: keyof typeof iconMap;
  order: number;
  duration?: string;
  exitTestQuestions?: Question[]; // Lista de preguntas con `correct` o `type`
  passingScore?: number; // Puntaje necesario para aprobar (opcional, solo para evaluaciones numericas)
}

export interface SelectedArea {
  id: string;
  name: string;
  videos: Video[];
  relatorName?: string;
  relatorExperience?: string;
  linkedinUrl?: string;
  complementaryMaterials?: string[];
}
