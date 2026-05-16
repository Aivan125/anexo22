"use client";

import {
  markStageCompleteAction,
  patchSimulatorProgressAction,
} from "@/lib/actions/customsSimulatorProgress";
import { verifyExampleSimulatorAnswerAction } from "@/lib/actions/customsSimulatorExampleFeedback";
import type { SimulatorStepSlug } from "@/lib/customs-simulator/constants";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check, Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
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

type ExampleQuizSection = "analysis" | "decision" | "controversy";

type QuestionFeedback = {
  correct: boolean;
  wrongHint?: string;
  correctNote?: string;
  modelAnswer?: string;
};

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
  exampleMode = false,
  exampleQuizSection,
}: {
  caseKey: string;
  questions: StageQuizQuestionStub[];
  initialAnswers: Record<string, unknown>;
  stageComplete: boolean;
  answerEditSourceStage: QuizStageSlug;
  markCompleteSlug: QuizStageSlug;
  heading: string;
  lead?: string;
  completeCta: string;
  /** Retroalimentación inmediata reservada para `bundle.isExample`. */
  exampleMode?: boolean;
  exampleQuizSection?: ExampleQuizSection;
}) {
  const router = useRouter();
  const [selections, setSelections] = useState(() =>
    answersFromPlain(initialAnswers, questions),
  );
  const [feedbackByQuestion, setFeedbackByQuestion] = useState<
    Record<string, QuestionFeedback | undefined>
  >({});
  const [endPending, startEnd] = useTransition();
  const examplePrefetchDone = useRef(false);

  const allFilled = useMemo(
    () => questions.every((q) => (selections[q.id] ?? "").trim() !== ""),
    [questions, selections],
  );

  function applyQuizFeedback(
    questionId: string,
    res: Awaited<ReturnType<typeof verifyExampleSimulatorAnswerAction>>,
  ) {
    if (!res.ok) return;
    setFeedbackByQuestion((prev) => ({
      ...prev,
      [questionId]: {
        correct: res.correct,
        wrongHint: res.wrongHint,
        correctNote: res.correctNote,
        modelAnswer: res.modelAnswer,
      },
    }));
  }

  useEffect(() => {
    if (!exampleMode || !exampleQuizSection || examplePrefetchDone.current) return;
    examplePrefetchDone.current = true;
    const map = answersFromPlain(initialAnswers, questions);
    for (const q of questions) {
      const v = (map[q.id] ?? "").trim();
      if (!v) continue;
      void verifyExampleSimulatorAnswerAction({
        kind: "quiz",
        caseKey,
        section: exampleQuizSection,
        questionId: q.id,
        value: v,
      }).then((res) => applyQuizFeedback(q.id, res));
    }
    // Sólo rehidratar feedback desde props iniciales (evita fugas y bucles por cambios locales).
     
  }, [caseKey, exampleMode, exampleQuizSection, initialAnswers, questions]);

  function patchAnswer(questionId: string, value: string) {
    if (stageComplete) return;
    setSelections((prev) => ({ ...prev, [questionId]: value }));
    void patchSimulatorProgressAction({
      caseKey,
      answersPatch: { [questionId]: value },
      answerEditSourceStage,
    }).then((res) => {
      if (!res.ok) toast.error(res.message);
      else router.refresh();
    });

    if (exampleMode && exampleQuizSection && value.trim() !== "") {
      void verifyExampleSimulatorAnswerAction({
        kind: "quiz",
        caseKey,
        section: exampleQuizSection,
        questionId,
        value,
      }).then((r) => applyQuizFeedback(questionId, r));
    } else {
      setFeedbackByQuestion((prev) => {
        const next = { ...prev };
        delete next[questionId];
        return next;
      });
    }
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
        {lead ? (
          <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
            {lead}
          </p>
        ) : null}
      </div>

      <ol className="space-y-8">
        {questions.map((q, qi) => {
          const fb = feedbackByQuestion[q.id];
          return (
            <li
              key={q.id}
              className={cn(
                "rounded-xl border bg-card px-5 py-5 transition-colors",
                exampleMode && fb?.correct === true && "border-emerald-500/50 bg-emerald-500/5",
                exampleMode && fb?.correct === false && "border-destructive/50 bg-destructive/5",
              )}
            >
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
                className="gap-3 mt-4"
                aria-required
              >
                {q.options.map((opt, oi) => {
                  const hid = `${q.id}-opt-${oi}`;
                  const isModelReveal =
                    exampleMode &&
                    fb &&
                    !fb.correct &&
                    fb.modelAnswer !== undefined &&
                    opt === fb.modelAnswer;
                  const selected = selections[q.id] === opt;
                  return (
                    <div
                      key={`${q.id}-opt-${oi}`}
                      className={cn(
                        "flex items-start gap-3 rounded-lg border px-3 py-2 bg-background transition-colors",
                        "has-[[data-state=checked]]:border-primary",
                        !isModelReveal && "border-border",
                        isModelReveal &&
                          "border-emerald-600/70 bg-emerald-500/10 ring-1 ring-emerald-600/40",
                        exampleMode &&
                          selected &&
                          fb?.correct === true &&
                          "border-emerald-600 bg-emerald-500/15",
                        exampleMode &&
                          selected &&
                          fb?.correct === false &&
                          "border-destructive bg-destructive/10",
                      )}
                    >
                      <RadioGroupItem id={hid} value={opt} />
                      <Label
                        className="text-sm cursor-pointer leading-snug font-normal flex-1 flex items-start justify-between gap-2"
                        htmlFor={hid}
                      >
                        <span>{opt}</span>
                        {exampleMode && selected && fb?.correct === true ? (
                          <Check
                            className="h-4 w-4 shrink-0 text-emerald-600"
                            aria-hidden
                          />
                        ) : null}
                        {exampleMode && selected && fb?.correct === false ? (
                          <X className="h-4 w-4 shrink-0 text-destructive" aria-hidden />
                        ) : null}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>

              {exampleMode && fb ? (
                <>
                  <p className="sr-only" aria-live="polite">
                    {fb.correct
                      ? "Respuesta correcta."
                      : "Respuesta incorrecta."}
                  </p>
                  {fb.correct && fb.correctNote ? (
                    <div className="mt-3 rounded-md border border-emerald-500/30 bg-emerald-500/5 px-3 py-2.5 text-xs text-foreground leading-relaxed">
                      <span className="font-semibold text-emerald-800 dark:text-emerald-300">
                        Por qué acierta:{" "}
                      </span>
                      {fb.correctNote}
                    </div>
                  ) : null}
                  {!fb.correct ? (
                    <div className="mt-3 space-y-2">
                      {fb.wrongHint ? (
                        <div className="rounded-md border border-amber-500/35 bg-amber-500/5 px-3 py-2.5 text-xs text-foreground leading-relaxed">
                          <span className="font-semibold text-amber-900 dark:text-amber-200">
                            Pista:{" "}
                          </span>
                          {fb.wrongHint}
                        </div>
                      ) : null}
                      {fb.modelAnswer ? (
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">
                            Respuesta modelo:{" "}
                          </span>
                          {fb.modelAnswer}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </>
              ) : null}
            </li>
          );
        })}
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
