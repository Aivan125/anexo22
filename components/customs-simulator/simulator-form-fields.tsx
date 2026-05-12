"use client";

import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";
import {
  markStageCompleteAction,
  patchSimulatorProgressAction,
} from "@/lib/actions/customsSimulatorProgress";
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
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { toast } from "sonner";

type FormField = CaseBundle["pedimentoFields"][number];

type FormStageSlug = Extract<SimulatorStepSlug, "pedimento" | "contribuciones">;

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
}) {
  const router = useRouter();
  const [values, setValues] = useState(() =>
    valuesFromInitial(fields, initialAnswers),
  );
  const [endPending, startEnd] = useTransition();

  const allFilled = useMemo(
    () =>
      fields.every((f) => {
        const v = (values[f.id] ?? "").trim();
        return v !== "";
      }),
    [fields, values],
  );

  function persistField(fieldId: string, value: string | number) {
    if (stageComplete) return;
    const patch =
      typeof value === "number"
        ? { [fieldId]: value }
        : { [fieldId]: value.trim() };
    setValues((prev) => ({
      ...prev,
      [fieldId]: typeof value === "number" ? String(value) : value.trim(),
    }));
    void patchSimulatorProgressAction({
      caseKey,
      answersPatch: patch,
      answerEditSourceStage,
    }).then((res) => {
      if (!res.ok) toast.error(res.message);
      router.refresh();
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
        <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">{lead}</p>
      </div>

      <div className="space-y-8">
        {fields.map((f) => (
          <div
            key={f.id}
            className="rounded-xl border bg-card px-5 py-5 space-y-3"
          >
            <Label htmlFor={f.id} className="text-sm font-medium">
              {f.label}
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
                <SelectTrigger id={f.id} className="max-w-md">
                  <SelectValue placeholder="Elige una opción" />
                </SelectTrigger>
                <SelectContent>
                  {f.selectOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
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
                onBlur={() => persistField(f.id, values[f.id] ?? "")}
                disabled={stageComplete}
                className="max-w-md"
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
                className="max-w-md"
              />
            ) : null}
            {f.formula ? (
              <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed border-t border-border pt-3 mt-2">
                <span className="font-medium text-foreground">{f.formula.title}</span>
                {": "}
                {f.formula.expression}
                {" — "}
                {f.formula.explanation}
              </p>
            ) : null}
          </div>
        ))}
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
