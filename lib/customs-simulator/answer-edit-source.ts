import "server-only";

import type { SimulatorStepSlug } from "@/lib/customs-simulator/constants";
import { SIMULATOR_STEP_SLUGS } from "@/lib/customs-simulator/constants";
import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";

/** Devuelve en qué etapa cae cada clave plana del mapa answers (primer match). */
function stagesForAnswerKey(bundle: CaseBundle, key: string): SimulatorStepSlug[] {
  const out: SimulatorStepSlug[] = [];
  if (bundle.analysisQuestions.some((q) => q.id === key))
    out.push("analisis");
  if (bundle.decisionQuestions.some((q) => q.id === key))
    out.push("decisiones");
  if (bundle.controversyQuestions.some((q) => q.id === key))
    out.push("controversia");
  if (bundle.pedimentoFields.some((f) => f.id === key))
    out.push("pedimento");
  if (bundle.taxFields.some((f) => f.id === key))
    out.push("contribuciones");
  return out;
}

/**
 * Obtiene la etapa §6 más "aguas arriba" entre las tocadas por el patch
 * para aplicar truncado de completedStages §6.9 (la etapa menor índice gana).
 */
export function inferAnswerEditSourceStage(
  bundle: CaseBundle,
  patchKeys: string[],
): SimulatorStepSlug | undefined {
  let minIdx = Number.POSITIVE_INFINITY;
  let slug: SimulatorStepSlug | undefined;
  for (const key of patchKeys) {
    for (const s of stagesForAnswerKey(bundle, key)) {
      const i = SIMULATOR_STEP_SLUGS.indexOf(s);
      if (i >= 0 && i < minIdx) {
        minIdx = i;
        slug = s;
      }
    }
  }
  return Number.isFinite(minIdx) ? slug : undefined;
}
