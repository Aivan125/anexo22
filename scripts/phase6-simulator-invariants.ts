/**
 * Smoke de invariantes Fase 6 (sin DB): scoring servidor, reglas `validationRules`,
 * acotamiento de porcentaje. Ejecutar tras cambios en `simulator-scoring` o bundles.
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { caseBundleSchema } from "../lib/data/customs-simulator/schemas";
import {
  evaluateBundleValidationRules,
  getSimulatorScoreSectionBreakdown,
  scoreSimulatorBundleAgainstAnswers,
} from "../lib/customs-simulator/simulator-scoring";

const CASE_PATH = join(
  process.cwd(),
  "lib/data/customs-simulator/cases/maritimo_ejemplo.json",
);

function loadPilotBundle() {
  const raw = JSON.parse(readFileSync(CASE_PATH, "utf8"));
  return caseBundleSchema.parse(raw);
}

function main() {
  const bundle = loadPilotBundle();
  const empty: Record<string, unknown> = {};

  const scored = scoreSimulatorBundleAgainstAnswers(bundle, empty);
  assert(scored.percent >= 0 && scored.percent <= 100, "percent clamped 0-100");

  const sections = getSimulatorScoreSectionBreakdown(bundle, empty);
  assert(sections.length === 5, "five score sections");
  assert(sections.every((s) => s.max >= 0 && s.earned >= 0 && s.earned <= s.max));

  const alertsEmpty = evaluateBundleValidationRules(bundle, empty);
  assert(Array.isArray(alertsEmpty));

  const fullAnswers: Record<string, unknown> = {};
  for (const q of bundle.analysisQuestions) {
    fullAnswers[q.id] = q.correctAnswer;
  }
  for (const q of bundle.decisionQuestions) {
    fullAnswers[q.id] = q.correctAnswer;
  }
  for (const q of bundle.controversyQuestions) {
    fullAnswers[q.id] = q.correctAnswer;
  }
  for (const f of bundle.pedimentoFields) {
    fullAnswers[f.id] = String(f.expected);
  }
  for (const f of bundle.taxFields) {
    fullAnswers[f.id] = String(f.expected);
  }

  const scoredFull = scoreSimulatorBundleAgainstAnswers(bundle, fullAnswers);
  assert(scoredFull.percent >= 0 && scoredFull.percent <= 100);
  const alertsFull = evaluateBundleValidationRules(bundle, fullAnswers);
  assert(
    alertsFull.length === 0,
    `expected no validation alerts with full correct answers, got ${alertsFull.length}`,
  );

  console.log("phase6-simulator-invariants: OK");
}

main();
