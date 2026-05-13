// Tipos compartidos + alias retro-compatibles que ahora apuntan al caso ejemplo.
// Las pantallas ya consumen los datos vía useSimulator() (caseData), por lo que
// estos exports se mantienen únicamente para tipado y compatibilidad.

import { CASES, getCaseByKey, totalPointsOf } from "./cases";

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  points: number;
}

export interface FormField {
  id: string;
  label: string;
  type: "text" | "number" | "select";
  expected: string | number;
  expectedContains?: string;
  tolerance?: number;
  points: number;
  selectOptions?: string[];
  formula?: { title: string; expression: string; explanation: string; example?: string };
}

export interface ValidationRule {
  ifField: string;
  notEquals?: string;
  notInToleranceOf?: number;
  message: string;
  severity: "high" | "medium" | "low";
}

// Caso por defecto = ejemplo (compatibilidad con código previo).
const DEFAULT = CASES[0];

export const CASE = DEFAULT.case;
export const ANALYSIS_QUESTIONS = DEFAULT.analysisQuestions;
export const DECISION_QUESTIONS = DEFAULT.decisionQuestions;
export const CONTROVERSY_QUESTIONS = DEFAULT.controversyQuestions;
export const PEDIMENTO_FIELDS = DEFAULT.pedimentoFields;
export const TAX_FIELDS = DEFAULT.taxFields;
export const VALIDATION_RULES = DEFAULT.validationRules;
export const TOTAL_POINTS = totalPointsOf(DEFAULT);

export const SCORE_BANDS = [
  { min: 90, max: 100, label: "Excelente desempeño operativo" },
  { min: 80, max: 89, label: "Buen dominio del proceso" },
  { min: 70, max: 79, label: "Desempeño suficiente con áreas de mejora" },
  { min: 0, max: 69, label: "Requiere reforzar operación aduanera" },
];

export const SCREEN_IDS = [
  "welcome",
  "case_file",
  "analysis",
  "decisions",
  "pedimento_capture",
  "taxes",
  "controversy",
  "validation",
  "summary",
] as const;
export type ScreenId = (typeof SCREEN_IDS)[number];

export const SCREEN_TITLES: Record<ScreenId, string> = {
  welcome: "Bienvenida",
  case_file: "Expediente del caso",
  analysis: "Análisis documental",
  decisions: "Toma de decisiones",
  pedimento_capture: "Captura del pedimento",
  taxes: "Cálculo de contribuciones",
  controversy: "Controversia aduanera",
  validation: "Resultado",
  summary: "Resumen del caso",
};

export { getCaseByKey, totalPointsOf };
