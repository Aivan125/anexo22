"use client";

import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";
import {
  markStageCompleteAction,
  patchSimulatorProgressAction,
} from "@/lib/actions/customsSimulatorProgress";
import { verifyExampleSimulatorAnswerAction } from "@/lib/actions/customsSimulatorExampleFeedback";
import type { SimulatorStepSlug } from "@/lib/customs-simulator/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Calculator, Check, Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { toast } from "sonner";

type FormField = CaseBundle["pedimentoFields"][number];

type FormStageSlug = Extract<SimulatorStepSlug, "pedimento" | "contribuciones">;

type ExampleFormSection = "pedimento" | "tax";

type FieldFeedback = {
  correct: boolean;
  wrongHint?: string;
  correctNote?: string;
};

function stringFromInitial(raw: unknown): string {
  if (typeof raw === "number" && Number.isFinite(raw)) return String(raw);
  if (typeof raw === "string") return raw;
  return "";
}

function valuesFromInitial(
  fields: FormField[],
  initialAnswers: Record<string, unknown>,
): Record<string, string> {
  const m: Record<string, string> = {};
  for (const f of fields) {
    m[f.id] = stringFromInitial(initialAnswers[f.id]);
  }
  return m;
}

function fieldValueForVerify(
  f: FormField,
  raw: string,
): string | number | undefined {
  const t = raw.trim();
  if (t === "") return undefined;
  if (f.type === "number") {
    const n = Number(String(raw).replace(",", "."));
    return Number.isFinite(n) ? n : t;
  }
  return t;
}

export function SimulatorFormFieldsSection({
  caseKey,
  fields,
  initialAnswers,
  stageComplete,
  answerEditSourceStage,
  markCompleteSlug,
  heading,
  lead,
  completeCta,
  exampleMode = false,
  exampleFormSection,
}: {
  caseKey: string;
  fields: FormField[];
  initialAnswers: Record<string, unknown>;
  stageComplete: boolean;
  answerEditSourceStage: FormStageSlug;
  markCompleteSlug: FormStageSlug;
  heading: string;
  lead: string;
  completeCta: string;
  exampleMode?: boolean;
  exampleFormSection?: ExampleFormSection;
}) {
  const router = useRouter();
  const [values, setValues] = useState(() =>
    valuesFromInitial(fields, initialAnswers),
  );
  const [feedbackByField, setFeedbackByField] = useState<
    Record<string, FieldFeedback | undefined>
  >({});
  const [endPending, startEnd] = useTransition();
  const exampleFormPrefetchDone = useRef(false);

  const allFilled = useMemo(
    () =>
      fields.every((f) => {
        const v = (values[f.id] ?? "").trim();
        return v !== "";
      }),
    [fields, values],
  );

  function applyFieldFeedback(
    fieldId: string,
    res: Awaited<ReturnType<typeof verifyExampleSimulatorAnswerAction>>,
  ) {
    if (!res.ok) return;
    setFeedbackByField((prev) => ({
      ...prev,
      [fieldId]: {
        correct: res.correct,
        wrongHint: res.wrongHint,
        correctNote: res.correctNote,
      },
    }));
  }

  useEffect(() => {
    if (!exampleMode || !exampleFormSection || exampleFormPrefetchDone.current)
      return;
    exampleFormPrefetchDone.current = true;

    const map = valuesFromInitial(fields, initialAnswers);
    for (const f of fields) {
      const v = fieldValueForVerify(f, map[f.id] ?? "");
      if (v === undefined) continue;
      void verifyExampleSimulatorAnswerAction({
        kind: "form",
        caseKey,
        section: exampleFormSection,
        fieldId: f.id,
        value: v,
      }).then((res) => applyFieldFeedback(f.id, res));
    }
     
  }, [caseKey, exampleMode, exampleFormSection, fields, initialAnswers]);

  function verifyField(fieldId: string, payload: string | number) {
    if (!exampleMode || !exampleFormSection) return;
    void verifyExampleSimulatorAnswerAction({
      kind: "form",
      caseKey,
      section: exampleFormSection,
      fieldId,
      value: payload,
    }).then((res) => applyFieldFeedback(fieldId, res));
  }

  function persistField(fieldId: string, value: string | number) {
    if (stageComplete) return;
    const patch =
      typeof value === "number"
        ? { [fieldId]: value }
        : { [fieldId]: value.trim() };
    setValues((prev) => ({
      ...prev,
      [fieldId]:
        typeof value === "number" ? String(value) : value.trim(),
    }));
    void patchSimulatorProgressAction({
      caseKey,
      answersPatch: patch,
      answerEditSourceStage,
    }).then((res) => {
      if (!res.ok) {
        toast.error(res.message);
        return;
      }
      router.refresh();
      const field = fields.find((x) => x.id === fieldId);
      if (!field || !exampleMode) return;

      if (typeof value === "string" && value.trim() === "") {
        setFeedbackByField((prev) => {
          const next = { ...prev };
          delete next[fieldId];
          return next;
        });
        return;
      }

      verifyField(fieldId, value);
    });
  }

  function buildAnswersSnapshot(): Record<string, string | number | boolean> {
    const snapshot: Record<string, string | number | boolean> = {};
    for (const f of fields) {
      const raw = (values[f.id] ?? "").trim();
      if (f.type === "number") {
        const n = Number(String(values[f.id]).replace(",", "."));
        snapshot[f.id] = Number.isFinite(n) ? n : raw;
        continue;
      }
      snapshot[f.id] = raw;
    }
    return snapshot;
  }

  function onFinalize() {
    startEnd(async () => {
      const snapshot = buildAnswersSnapshot();
      const res = await markStageCompleteAction({
        caseKey,
        stepSlug: markCompleteSlug,
        answersPatch: snapshot,
      });
      if (!res.ok) {
        toast.error(res.message);
        return;
      }
      toast.success("Etapa completada.");
      router.refresh();
    });
  }

  return (
    <section className="mt-10 space-y-10" aria-labelledby="form-fields-heading">
      <Separator />
      <div>
        <h2 id="form-fields-heading" className="text-xl font-semibold">
          {heading}
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
          {lead}
        </p>
      </div>

      <div className="space-y-8">
        {fields.map((f) => {
          const fb = feedbackByField[f.id];
          return (
            <div
              key={f.id}
              className={cn(
                "rounded-xl border bg-card px-5 py-5 space-y-3 transition-colors",
                exampleMode && fb?.correct === true && "border-emerald-500/45 bg-emerald-500/[0.04]",
                exampleMode && fb?.correct === false && "border-destructive/45 bg-destructive/5",
              )}
            >
              <Label htmlFor={f.id} className="text-sm font-medium inline-flex flex-wrap items-center gap-2">
                <span>{f.label}</span>
                {exampleMode && f.formula ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/12 text-primary hover:bg-primary/20"
                        aria-label={`Ver fórmula: ${f.formula.title}`}
                      >
                        <Calculator className="h-3.5 w-3.5" aria-hidden />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="max-w-xs space-y-2 rounded-lg p-4 text-left text-popover-foreground"
                      side="top"
                      sideOffset={6}
                    >
                      <p className="text-sm font-semibold leading-snug text-foreground">
                        {f.formula.title}
                      </p>
                      <p className="rounded-md bg-muted px-2.5 py-1.5 font-mono text-[11px] leading-relaxed text-foreground">
                        {f.formula.expression}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {f.formula.explanation}
                      </p>
                      {f.formula.example ? (
                        <p className="border-t border-border pt-3 text-xs leading-relaxed">
                          <span className="mr-1.5 font-semibold text-foreground">
                            Ejemplo:
                          </span>
                          <span className="font-mono tabular-nums text-foreground">
                            {f.formula.example}
                          </span>
                        </p>
                      ) : null}
                    </TooltipContent>
                  </Tooltip>
                ) : null}
                {exampleMode && fb?.correct === true ? (
                  <Check className="h-4 w-4 text-emerald-600" aria-label="Valor correcto" />
                ) : null}
                {exampleMode && fb?.correct === false ? (
                  <X className="h-4 w-4 text-destructive" aria-label="Valor incorrecto" />
                ) : null}
              </Label>
              {f.type === "select" && f.selectOptions?.length ? (
                <Select
                  value={(() => {
                    const v = (values[f.id] ?? "").trim();
                    return v === "" ? undefined : v;
                  })()}
                  onValueChange={(v) => persistField(f.id, v)}
                  disabled={stageComplete}
                >
                  <SelectTrigger
                    id={f.id}
                    className={cn(
                      "max-w-md",
                      exampleMode &&
                        fb?.correct === true &&
                        "border-emerald-600 focus:ring-emerald-600",
                      exampleMode &&
                        fb?.correct === false &&
                        "border-destructive focus:ring-destructive",
                    )}
                  >
                    <SelectValue placeholder="Elige una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    {f.selectOptions.map((opt, i) => (
                      <SelectItem key={`${f.id}-${i}`} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : null}
              {f.type === "text" ? (
                <Input
                  id={f.id}
                  value={values[f.id] ?? ""}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, [f.id]: e.target.value }))
                  }
                  onBlur={() => {
                    const vs = values[f.id] ?? "";
                    persistField(f.id, vs);
                  }}
                  disabled={stageComplete}
                  className={cn(
                    "max-w-md",
                    exampleMode &&
                      fb?.correct === true &&
                      "border-emerald-600 focus-visible:ring-emerald-600",
                    exampleMode &&
                      fb?.correct === false &&
                      "border-destructive focus-visible:ring-destructive",
                  )}
                />
              ) : null}
              {f.type === "number" ? (
                <Input
                  id={f.id}
                  type="number"
                  step="any"
                  value={values[f.id] ?? ""}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, [f.id]: e.target.value }))
                  }
                  onBlur={() => {
                    const n = Number(String(values[f.id]).replace(",", "."));
                    if (Number.isFinite(n)) persistField(f.id, n);
                    else persistField(f.id, values[f.id] ?? "");
                  }}
                  disabled={stageComplete}
                  className={cn(
                    "max-w-md",
                    exampleMode &&
                      fb?.correct === true &&
                      "border-emerald-600 focus-visible:ring-emerald-600",
                    exampleMode &&
                      fb?.correct === false &&
                      "border-destructive focus-visible:ring-destructive",
                  )}
                />
              ) : null}
              {f.formula ? (
                <p
                  className={cn(
                    "text-xs text-muted-foreground max-w-2xl leading-relaxed border-t border-border pt-3 mt-2",
                    exampleMode && "sr-only",
                  )}
                >
                  <span className="font-medium text-foreground">{f.formula.title}</span>
                  {": "}
                  {f.formula.expression}
                  {" — "}
                  {f.formula.explanation}
                </p>
              ) : null}
              {exampleMode && fb ? (
                <>
                  <p className="sr-only" aria-live="polite">
                    {fb.correct ? "Captura correcta." : "Captura incorrecta."}
                  </p>
                  {fb.correctNote ? (
                    <div className="rounded-md border border-emerald-500/30 bg-emerald-500/5 px-3 py-2 text-xs leading-relaxed text-foreground">
                      <span className="font-semibold text-emerald-800 dark:text-emerald-300">
                        Correcto:{" "}
                      </span>
                      {fb.correctNote}
                    </div>
                  ) : null}
                  {!fb.correct && fb.wrongHint ? (
                    <div className="rounded-md border border-amber-500/35 bg-amber-500/5 px-3 py-2 text-xs leading-relaxed text-foreground">
                      <span className="font-semibold text-amber-900 dark:text-amber-200">
                        Pista:{" "}
                      </span>
                      {fb.wrongHint}
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>
          );
        })}
      </div>

      {stageComplete ? (
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          Etapa completada.
        </p>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3">
          <Button
            size="lg"
            type="button"
            disabled={endPending || !allFilled}
            onClick={() => void onFinalize()}
            className="inline-flex gap-5 items-center"
          >
            {endPending ? (
              <Loader2 className="h-5 w-5 animate-spin shrink-0" aria-hidden />
            ) : null}
            <span>{endPending ? "Marcando..." : completeCta}</span>
          </Button>
          {!allFilled ? (
            <p className="text-sm text-muted-foreground">
              Completa todos los campos; el servidor valida contra el caso al cerrar.
            </p>
          ) : null}
        </div>
      )}
    </section>
  );
}
