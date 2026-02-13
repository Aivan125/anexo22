// Tipos para el sistema de clasificación arancelaria

export interface Note {
  id: string;
  text: string;
}

export interface Notes {
  legales?: Note[];
  nacionales?: Note[];
  subpartida?: Note[];
  explicativas?: Note[];
}

export interface NICO {
  code: string;
  title: string;
}

export interface Classification {
  code: string;
  title: string;
  umt: string;
  importDuty: number | string;
  exportDuty: number | string;
  regimenes: string[];
  nicos: NICO[];
}

export interface Subheading {
  code: string;
  title: string;
  classifications?: Classification[];
}

export interface Heading {
  code: string;
  title: string;
  notes?: Notes;
  subheadings?: Subheading[];
}

export interface Chapter {
  code: string;
  title: string;
  notes?: Notes;
  headings: Heading[];
}

export interface Section {
  code: string;
  title: string;
  notes?: Notes;
  chapters: Chapter[];
}

export interface TariffData {
  sections: Section[];
}

// Tipos para casos prácticos (re-exportados desde casos-data.ts)
export interface Producto {
  nombre_comercial: string;
  descripcion_detallada: string;
  uso_previsto: string;
  presentacion: string;
}

export interface RespuestaEsperada {
  fraccion: string;
  nico: string;
  descripcion_fraccion: string;
  justificacion_resumida: string;
}

export interface CasoPractico {
  id: string;
  titulo: string;
  seccion: string;
  capitulo_aproximado: string;
  nivel_dificultad: "basico" | "intermedio" | "avanzado";
  contexto_empresarial: string;
  producto: Producto;
  datos_relevantes: string[];
  preguntas_analisis: string[];
  pistas: string[];
  respuesta_esperada: RespuestaEsperada;
  tipo_actividad: string;
}

export interface ModuloCasos {
  modulo: string;
  descripcion_modulo: string;
  casos: CasoPractico[];
}
