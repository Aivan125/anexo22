import { useSimulator } from "@/lib/simulator-context";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ShieldAlert, Gavel, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ControversyScreen() {
  const { answers, setAnswer, isAnswerCorrect, submitExam, goBack, caseData } = useSimulator();
  const c = caseData.case;
  const questions = caseData.controversyQuestions;
  const allAnswered = questions.every((q) => answers[q.id]);

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-xl font-bold text-primary">Controversia aduanera</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Durante el reconocimiento aduanero se detectó una irregularidad. Analiza el riesgo, la
          infracción y la sanción, y responde las preguntas para evaluar tu criterio jurídico.
        </p>
      </div>

      {/* Paneles informativos — solo contexto, sin revelar respuestas */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
          <div className="mb-3 flex items-center gap-2 border-b border-destructive/20 pb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-destructive/15">
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-destructive">
              Contexto del riesgo
            </p>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">{c.risk.description}</p>
        </div>

        <div className="rounded-xl border border-accent/40 bg-accent/5 p-4">
          <div className="mb-3 flex items-center gap-2 border-b border-accent/20 pb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/15">
              <ShieldAlert className="h-4 w-4 text-accent" />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-accent">
              Contexto de la infracción
            </p>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">{c.infraction.description}</p>
        </div>

        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
          <div className="mb-3 flex items-center gap-2 border-b border-primary/20 pb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15">
              <Gavel className="h-4 w-4 text-primary" />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              Contexto de la sanción
            </p>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            La autoridad aduanera puede imponer consecuencias económicas y administrativas al
            importador derivadas de la irregularidad detectada durante el despacho. Analiza qué
            tipo de sanción corresponde conforme a la Ley Aduanera.
          </p>
        </div>
      </div>

      {/* Preguntas */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Evaluación de la controversia
        </h3>

        {questions.map((q, qi) => {
          const correctness = isAnswerCorrect(q.id);
          return (
            <div
              key={q.id}
              className={cn(
                "rounded-xl border bg-card p-4 transition-all",
                correctness === true && "border-success/40 bg-success/5",
                correctness === false && "border-destructive/40 bg-destructive/5"
              )}
            >
              <p className="mb-3 text-sm font-medium text-foreground">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {qi + 1}
                </span>
                {q.text}
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                {q.options.map((opt) => {
                  const selected = answers[q.id] === opt;
                  const isCorrectOpt = opt === q.correctAnswer;
                  return (
                    <button
                      key={opt}
                      onClick={() => setAnswer(q.id, opt)}
                      className={cn(
                        "flex items-center justify-between gap-2 rounded-lg border px-4 py-2.5 text-left text-sm transition-all",
                        !selected && "border-border bg-card text-muted-foreground hover:border-primary/40 hover:bg-muted",
                        selected && isCorrectOpt && "border-success bg-success/10 font-medium text-foreground",
                        selected && !isCorrectOpt && "border-destructive bg-destructive/10 font-medium text-foreground"
                      )}
                    >
                      <span className="flex-1">{opt}</span>
                      {selected && isCorrectOpt && <Check className="h-4 w-4 shrink-0 text-success" />}
                      {selected && !isCorrectOpt && <X className="h-4 w-4 shrink-0 text-destructive" />}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between pt-2">
        <Button variant="outline" onClick={goBack}>← Atrás</Button>
        <Button
          onClick={submitExam}
          disabled={!allAnswered}
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Calificar simulador ✓
        </Button>
      </div>
    </div>
  );
}
