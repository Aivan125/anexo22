import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";

function numberFromAnswer(raw: unknown): number | null {
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw !== "string") return null;
  const t = raw.trim().replace(",", ".");
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

function stringFromAnswer(raw: unknown): string {
  return typeof raw === "string" ? raw.trim() : String(raw ?? "").trim();
}

function normalizeComparableString(value: string): string {
  try {
    return value.normalize("NFC").trim();
  } catch {
    return value.trim();
  }
}

/**
 * ¿El alumno dejó una captura no vacía y coherente con las opciones del caso?
 * Cerrar pedimento/contribuciones no debe bloquearse por responder distinto del pedimento modelo:
 * la corrección frente a `expected` sólo ocurre en `scoreSimulatorBundleAgainstAnswers` / Resultado.
 */
export function simulatorFormFieldCaptureComplete(
  field: CaseBundle["pedimentoFields"][number] | CaseBundle["taxFields"][number],
  raw: unknown,
): boolean {
  const v = answersValueForField(raw);
  if (field.type === "select") {
    if (v === undefined) return false;
    const opts = field.selectOptions;
    if (opts === undefined || opts.length === 0) return false;
    const nv = normalizeComparableString(v);
    return opts.some((o) => normalizeComparableString(o) === nv);
  }
  if (field.type === "text") {
    return v !== undefined && v.trim() !== "";
  }
  if (field.type === "number") {
    return numberFromAnswer(raw) !== null;
  }
  return false;
}

/** Comparación contra la respuesta correcta del caso (score y feedback en Resultado). */
export function fieldMatchesExpected(
  field: CaseBundle["pedimentoFields"][number] | CaseBundle["taxFields"][number],
  raw: unknown,
): boolean {
  const v = answersValueForField(raw);
  if (v === undefined || v === "") return false;
  if (field.type === "select") {
    return normalizeComparableString(v) === normalizeComparableString(String(field.expected));
  }
  if (field.type === "text") {
    const nv = normalizeComparableString(v);
    if (field.expectedContains) {
      return nv
        .toLowerCase()
        .includes(normalizeComparableString(field.expectedContains).toLowerCase());
    }
    return nv === normalizeComparableString(String(field.expected));
  }
  if (field.type === "number") {
    const n = numberFromAnswer(raw);
    if (n === null) return false;
    const exp =
      typeof field.expected === "number" ? field.expected : Number(field.expected);
    if (!Number.isFinite(exp)) return false;
    const tol = field.tolerance ?? 0;
    return Math.abs(n - exp) <= tol;
  }
  return false;
}

function answersValueForField(raw: unknown): string | undefined {
  if (typeof raw === "boolean") return raw ? "true" : "false";
  if (typeof raw === "number" && Number.isFinite(raw)) return String(raw);
  if (typeof raw === "string") {
    const s = raw.trim();
    return s === "" ? undefined : s;
  }
  return undefined;
}

function quizEarned(
  questions: CaseBundle["analysisQuestions"],
  answers: Record<string, unknown>,
): { earned: number; max: number } {
  let earned = 0;
  let max = 0;
  for (const q of questions) {
    max += q.points;
    const a = answers[q.id];
    if (typeof a === "string" && a === q.correctAnswer) {
      earned += q.points;
    }
  }
  return { earned, max };
}

/** Puntaje agregado servidor (quizzes + pedimento + contribuciones por expected). */
export function scoreSimulatorBundleAgainstAnswers(
  bundle: CaseBundle,
  answers: Record<string, unknown>,
): { earned: number; max: number; percent: number } {
  const a = quizEarned(bundle.analysisQuestions, answers);
  const d = quizEarned(bundle.decisionQuestions, answers);
  const c = quizEarned(bundle.controversyQuestions, answers);

  let fe = 0;
  let fm = 0;
  for (const f of bundle.pedimentoFields) {
    fm += f.points;
    if (fieldMatchesExpected(f, answers[f.id])) fe += f.points;
  }
  for (const f of bundle.taxFields) {
    fm += f.points;
    if (fieldMatchesExpected(f, answers[f.id])) fe += f.points;
  }

  const earned = a.earned + d.earned + c.earned + fe;
  const max = a.max + d.max + c.max + fm;
  const percent =
    max > 0
      ? Math.min(100, Math.max(0, Math.round((earned / max) * 100)))
      : 0;
  return { earned, max, percent };
}

export type ScoreSectionBreakdown = {
  id: string;
  label: string;
  earned: number;
  max: number;
};

/**
 * Desglose agregado para UI post-Calificar (§6.5): no expone respuestas correctas
 * por ítem, sólo totales por bloque.
 */
export function getSimulatorScoreSectionBreakdown(
  bundle: CaseBundle,
  answers: Record<string, unknown>,
): ScoreSectionBreakdown[] {
  const analysis = quizEarned(bundle.analysisQuestions, answers);
  const decisions = quizEarned(bundle.decisionQuestions, answers);
  const controversy = quizEarned(bundle.controversyQuestions, answers);

  let pe = 0;
  let pm = 0;
  for (const f of bundle.pedimentoFields) {
    pm += f.points;
    if (fieldMatchesExpected(f, answers[f.id])) pe += f.points;
  }
  let te = 0;
  let tm = 0;
  for (const f of bundle.taxFields) {
    tm += f.points;
    if (fieldMatchesExpected(f, answers[f.id])) te += f.points;
  }

  return [
    { id: "analisis", label: "Análisis", earned: analysis.earned, max: analysis.max },
    {
      id: "decisiones",
      label: "Decisiones",
      earned: decisions.earned,
      max: decisions.max,
    },
    {
      id: "pedimento",
      label: "Pedimento",
      earned: pe,
      max: pm,
    },
    {
      id: "contribuciones",
      label: "Contribuciones",
      earned: te,
      max: tm,
    },
    {
      id: "controversia",
      label: "Controversia",
      earned: controversy.earned,
      max: controversy.max,
    },
  ];
}

export type ValidationRuleAlert = {
  message: string;
  severity: "high" | "medium" | "low";
};

function roughlyEqualMoney(a: number, b: number, absTol = 0.5): boolean {
  return Math.abs(a - b) <= absTol;
}

/**
 * §6.5 / §8: reglas declarativas del bundle (mensajes editoriales), evaluadas en servidor
 * tras conocer respuestas — coherentes con la pantalla resultado.
 */
export function evaluateBundleValidationRules(
  bundle: CaseBundle,
  answers: Record<string, unknown>,
): ValidationRuleAlert[] {
  const alerts: ValidationRuleAlert[] = [];

  for (const rule of bundle.validationRules) {
    const raw = answers[rule.ifField];
    let violated = false;

    if (rule.notEquals !== undefined) {
      const v = stringFromAnswer(raw);
      violated = v !== rule.notEquals;
    } else if (rule.notInToleranceOf !== undefined) {
      const n = numberFromAnswer(raw);
      const exp = rule.notInToleranceOf;
      violated =
        n === null ||
        !Number.isFinite(n) ||
        !roughlyEqualMoney(n, exp);
    }

    if (violated) {
      alerts.push({ message: rule.message, severity: rule.severity });
    }
  }

  return alerts;
}

export { stringFromAnswer };
