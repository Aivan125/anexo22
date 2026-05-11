/**
 * Pipeline oficial del simulador (§6.4 refactor). Usar para defaults y guards futuros.
 */
export const SIMULATOR_STEP_SLUGS = [
  "expediente",
  "analisis",
  "decisiones",
  "pedimento",
  "contribuciones",
  "controversia",
  "resultado",
  "resumen",
] as const;

export type SimulatorStepSlug = (typeof SIMULATOR_STEP_SLUGS)[number];

export const INITIAL_SIMULATOR_STEP: SimulatorStepSlug = "expediente";

/**
 * Última etapa con ruta Next implementada en Fase 5 (pipeline §6.4).
 * resultado/resumen existen pero `resumen` requiere calificación válida §6.10 para acceso efectivo en guards.
 */
export const LAST_IMPLEMENTED_SIMULATOR_ROUTE_SLUG: SimulatorStepSlug =
  "resumen";

export const LAST_IMPLEMENTED_SIMULATOR_ROUTE_INDEX =
  SIMULATOR_STEP_SLUGS.indexOf(LAST_IMPLEMENTED_SIMULATOR_ROUTE_SLUG);

/** @deprecated usar LAST_IMPLEMENTED_SIMULATOR_ROUTE_SLUG (Fase 5) */
export const LAST_ROUTE_PHASE4: SimulatorStepSlug = "analisis";

/** @deprecated usar LAST_IMPLEMENTED_SIMULATOR_ROUTE_INDEX */
export const LAST_ROUTE_PHASE4_INDEX = SIMULATOR_STEP_SLUGS.indexOf(
  LAST_ROUTE_PHASE4,
);

export const SIMULATOR_STEP_LABELS: Record<SimulatorStepSlug, string> = {
  expediente: "Expediente",
  analisis: "Análisis",
  decisiones: "Decisiones",
  pedimento: "Pedimento",
  contribuciones: "Contribuciones",
  controversia: "Controversia",
  resultado: "Resultado",
  resumen: "Resumen",
};
