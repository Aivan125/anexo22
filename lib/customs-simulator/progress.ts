import "server-only";

import { cache } from "react";
import type { CustomsSimulatorProgress, Prisma } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { isPublishedCaseKey } from "@/lib/data/customs-simulator/load";
import { loadCaseBundle } from "@/lib/data/customs-simulator/load";
import { inferAnswerEditSourceStage } from "@/lib/customs-simulator/answer-edit-source";
import {
  INITIAL_SIMULATOR_STEP,
  SIMULATOR_STEP_SLUGS,
  type SimulatorStepSlug,
} from "@/lib/customs-simulator/constants";

export type CustomsProgressRow = CustomsSimulatorProgress;

/** JSON `answers`: clave plana → valor (strings en MVP smoke; ampliable después). */
export function answersAsPlainObject(
  value: Prisma.JsonValue,
): Record<string, unknown> {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value)
  ) {
    return {};
  }
  return { ...(value as Record<string, unknown>) };
}

/** `journeyResolved` en MVP = array JSON de ids string. */
export function journeyResolvedAsArray(value: Prisma.JsonValue): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((x): x is string => typeof x === "string");
}

/** `completedStages`: array de slugs persistido como JSON. */
export function completedStagesAsArray(value: Prisma.JsonValue): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((x): x is string => typeof x === "string");
}

/**
 * Merge superficial de answers: nuevo mapa pisando sólo las claves enviadas
 * sobre el objeto existente (MVP §6 LWW; sin merge profundo anidado).
 */
function mergeAnswersJson(
  current: Prisma.JsonValue,
  patch: Record<string, unknown> | undefined,
): Prisma.InputJsonValue {
  if (!patch || Object.keys(patch).length === 0) {
    return current as Prisma.InputJsonValue;
  }
  const base = answersAsPlainObject(current);
  return { ...base, ...patch } as Prisma.InputJsonValue;
}

async function getOrCreateProgressImpl(
  profileId: string,
  caseKey: string,
): Promise<CustomsProgressRow> {
  if (!isPublishedCaseKey(caseKey)) {
    throw new Error("INVALID_CASE_KEY");
  }

  const existing = await prisma.customsSimulatorProgress.findUnique({
    where: {
      profileId_caseKey: { profileId, caseKey },
    },
  });

  if (existing) return existing;

  return prisma.customsSimulatorProgress.create({
    data: {
      profileId,
      caseKey,
      currentStepSlug: INITIAL_SIMULATOR_STEP,
      answers: {},
      journeyResolved: [],
      completedStages: [],
    },
  });
}

export const getOrCreateProgress = cache(getOrCreateProgressImpl);

export type ProgressPatchInput = {
  answersPatch?: Record<string, unknown>;
  /** Si se omite se conserva lo actual. Envío lista completa nueva (reemplazo). */
  journeyResolved?: string[];
  completedStages?: SimulatorStepSlug[];
  currentStepSlug?: SimulatorStepSlug;
  /** §6.9: cuando hay answersPatch puede forzar etapa fuente si la inferencia no basta */
  answerEditSourceStage?: SimulatorStepSlug;
  /** Escrituras internas (ej. markStageComplete) omiten truncado §6.9 */
  skipCompletionQueueInvalidation?: boolean;
  scorePercent?: number | null;
  evaluatedAt?: Date | null;
};

function truncateCompletedAfterEditStage(
  completed: SimulatorStepSlug[],
  sourceStage: SimulatorStepSlug,
): SimulatorStepSlug[] {
  const sIdx = SIMULATOR_STEP_SLUGS.indexOf(sourceStage);
  if (sIdx < 0) return completed;
  return completed.filter((slug) => SIMULATOR_STEP_SLUGS.indexOf(slug) <= sIdx);
}

export async function patchProgress(
  profileId: string,
  caseKey: string,
  patch: ProgressPatchInput,
): Promise<CustomsProgressRow> {
  await getOrCreateProgress(profileId, caseKey);

  const refreshed = await prisma.customsSimulatorProgress.findUnique({
    where: {
      profileId_caseKey: { profileId, caseKey },
    },
  });
  if (!refreshed) {
    throw new Error("PROGRESS_MISSING");
  }

  const answers = mergeAnswersJson(refreshed.answers, patch.answersPatch);

  let journeyResolvedOut: Prisma.InputJsonValue =
    refreshed.journeyResolved as Prisma.InputJsonValue;
  if (patch.journeyResolved !== undefined) {
    journeyResolvedOut = patch.journeyResolved;
  }

  let completedSlugs = parsedCompletedStages(refreshed);
  let currentStepSlugOut =
    (patch.currentStepSlug as string | undefined) ?? refreshed.currentStepSlug;

  let wipedEvaluationFromEdit = false;

  const answersKeys = patch.answersPatch
    ? Object.keys(patch.answersPatch)
    : [];

  if (
    !patch.skipCompletionQueueInvalidation &&
    answersKeys.length > 0 &&
    !answersKeys.every((k) => k.startsWith("_"))
  ) {
    const bundle = loadCaseBundle(caseKey);
    const sourceStage =
      patch.answerEditSourceStage ??
      inferAnswerEditSourceStage(bundle, answersKeys);
    if (sourceStage) {
      wipedEvaluationFromEdit = true;
      completedSlugs = truncateCompletedAfterEditStage(completedSlugs, sourceStage);
      currentStepSlugOut = sourceStage;
    }
  }

  if (patch.skipCompletionQueueInvalidation) {
    if (patch.completedStages !== undefined) {
      completedSlugs = patch.completedStages;
    }
    if (patch.currentStepSlug !== undefined) {
      currentStepSlugOut = patch.currentStepSlug;
    }
  }

  const data: Prisma.CustomsSimulatorProgressUpdateInput = {
    answers,
    journeyResolved: journeyResolvedOut,
    completedStages: completedSlugs as Prisma.InputJsonValue,
    currentStepSlug: currentStepSlugOut,
  };

  if (patch.scorePercent !== undefined) {
    data.scorePercent = patch.scorePercent;
  } else if (wipedEvaluationFromEdit) {
    data.scorePercent = null;
  }

  if (patch.evaluatedAt !== undefined) {
    data.evaluatedAt = patch.evaluatedAt;
  } else if (wipedEvaluationFromEdit) {
    data.evaluatedAt = null;
  }

  return prisma.customsSimulatorProgress.update({
    where: {
      profileId_caseKey: { profileId, caseKey },
    },
    data,
  });
}

/**
 * §12.3: elimina progreso huérfano cuando el `caseKey` deja de estar publicado.
 * Idempotente si no existe la fila.
 */
export async function deleteSimulatorProgressIfExists(
  profileId: string,
  caseKey: string,
): Promise<void> {
  await prisma.customsSimulatorProgress.deleteMany({
    where: { profileId, caseKey },
  });
}

/** Reinicio total del caso §6.3 (misma fila). */
export async function resetSimulatorProgress(
  profileId: string,
  caseKey: string,
): Promise<void> {
  if (!isPublishedCaseKey(caseKey)) {
    throw new Error("INVALID_CASE_KEY");
  }

  await getOrCreateProgress(profileId, caseKey);

  await prisma.customsSimulatorProgress.update({
    where: {
      profileId_caseKey: { profileId, caseKey },
    },
    data: {
      answers: {},
      journeyResolved: [],
      completedStages: [],
      currentStepSlug: INITIAL_SIMULATOR_STEP,
      scorePercent: null,
      evaluatedAt: null,
    },
  });
}

/** Lectura sólo servidor para UI smoke (métricas agregadas, no correctas ocultas). */
export function progressSnapshot(progress: CustomsProgressRow) {
  return {
    currentStepSlug: progress.currentStepSlug,
    answersKeyCount: Object.keys(answersAsPlainObject(progress.answers)).length,
    journeyResolvedCount: journeyResolvedAsArray(progress.journeyResolved).length,
    completedStagesCount: completedStagesAsArray(progress.completedStages).length,
    hasEvaluation: progress.evaluatedAt != null || progress.scorePercent != null,
  };
}

/** Slugs válidos respecto al orden oficial (ignora entradas corruptas). */
export function parsedCompletedStages(
  progress: CustomsProgressRow,
): SimulatorStepSlug[] {
  const arr = completedStagesAsArray(progress.completedStages);
  return arr.filter((s): s is SimulatorStepSlug =>
    (SIMULATOR_STEP_SLUGS as readonly string[]).includes(s),
  );
}

/** Añade un id en `journeyResolved` si no existe (idempotente). */
export async function appendJourneyResolved(
  profileId: string,
  caseKey: string,
  eventId: string,
): Promise<CustomsProgressRow> {
  const row = await getOrCreateProgress(profileId, caseKey);
  const id = eventId.trim();
  if (!id) {
    throw new Error("INVALID_EVENT_ID");
  }
  const existing = journeyResolvedAsArray(row.journeyResolved);
  const next = [...new Set([...existing, id])];
  return patchProgress(profileId, caseKey, { journeyResolved: next });
}
