"use client";

import {
  markStageCompleteAction,
  patchSimulatorProgressAction,
} from "@/lib/actions/customsSimulatorProgress";
import type { SimulatorStepSlug } from "@/lib/customs-simulator/constants";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { toast } from "sonner";

export type StageQuizQuestionStub = {
  id: string;
  text: string;
  options: string[];
};

type QuizStageSlug = Extract<
  SimulatorStepSlug,
  "analisis" | "decisiones" | "controversia"
>;

function answersFromPlain(
  initialAnswers: Record<string, unknown>,
  questions: StageQuizQuestionStub[],
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const q of questions) {
    const raw = initialAnswers[q.id];
    map[q.id] = typeof raw === "string" ? raw : "";
  }
  return map;
}

export function SimulatorStageQuiz({
  caseKey,
  questions,
  initialAnswers,
  stageComplete,
  answerEditSourceStage,
  markCompleteSlug,
  heading,
  lead,
  completeCta,
}: {
  caseKey: string;
  questions: StageQuizQuestionStub[];
  initialAnswers: Record<string, unknown>;
  stageComplete: boolean;
  answerEditSourceStage: QuizStageSlug;
  markCompleteSlug: QuizStageSlug;
  heading: string;
  lead: string;
  completeCta: string;
}) {
  const router = useRouter();
  const [selections, setSelections] = useState(() =>
    answersFromPlain(initialAnswers, questions),
  );
  const [endPending, startEnd] = useTransition();

  const allFilled = useMemo(
    () => questions.every((q) => (selections[q.id] ?? "").trim() !== ""),
    [questions, selections],
  );

  function patchAnswer(questionId: string, value: string) {
    if (stageComplete) return;
    setSelections((prev) => ({ ...prev, [questionId]: value }));
    void patchSimulatorProgressAction({
      caseKey,
      answersPatch: { [questionId]: value },
      answerEditSourceStage,
    }).then((res) => {
      if (!res.ok) toast.error(res.message);
      router.refresh();
    });
  }

  function onFinalize() {
    startEnd(async () => {
      const res = await markStageCompleteAction({
        caseKey,
        stepSlug: markCompleteSlug,
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
    <section className="mt-10 space-y-10" aria-labelledby="stage-quiz-heading">
      <Separator />
      <div>
        <h2 id="stage-quiz-heading" className="text-xl font-semibold">
          {heading}
        </h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
          {lead}
        </p>
      </div>

      <ol className="space-y-8">
        {questions.map((q, qi) => (
          <li key={q.id} className="rounded-xl border bg-card px-5 py-5">
            <p className="text-sm font-medium leading-snug flex gap-2">
              <span className="text-muted-foreground font-mono w-14 shrink-0">
                {qi + 1}.
              </span>
              <span>{q.text}</span>
            </p>
            <RadioGroup
              value={selections[q.id] ?? ""}
              onValueChange={(v) => patchAnswer(q.id, v)}
              disabled={stageComplete}
              className="gap-10 mt-4"
              aria-required
            >
              {q.options.map((opt, oi) => {
                const hid = `${q.id}-opt-${oi}`;
                return (
                  <div
                    key={`${q.id}-opt-${oi}`}
                    className="flex items-start gap-3 rounded-lg border border-border px-3 py-2 has-[[data-state=checked]]:border-primary bg-background"
                  >
                    <RadioGroupItem id={hid} value={opt} />
                    <Label
                      className="text-sm cursor-pointer leading-snug font-normal"
                      htmlFor={hid}
                    >
                      {opt}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </li>
        ))}
      </ol>

      {stageComplete ? (
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          Etapa completada. Avanza desde el paso superior o revisa rutas siguientes si aún están
          visibles como bloqueadas.
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
            <span>
              {endPending ? "Marcando..." : completeCta}
            </span>
          </Button>
          {!allFilled ? (
            <p className="text-sm text-muted-foreground">
              Responde todas las preguntas para cerrar la etapa en el servidor.
            </p>
          ) : null}
        </div>
      )}
    </section>
  );
}
