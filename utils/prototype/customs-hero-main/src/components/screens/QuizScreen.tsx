import { useSimulator } from "@/lib/simulator-context";
import { Button } from "@/components/ui/button";
import type { QuizQuestion } from "@/lib/simulator-data";
import ConceptHover from "@/components/ConceptHover";
import { CONCEPTS } from "@/lib/concepts";
import { Check, X, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  questions: QuizQuestion[];
  onNext: () => void;
  onBack: () => void;
}

// Términos en preguntas que deben mostrar tooltip al pasar el mouse
function highlightConceptsInText(text: string) {
  // Encuentra términos del diccionario presentes en el texto
  const terms = Object.keys(CONCEPTS).sort((a, b) => b.length - a.length);
  const parts: (string | { term: string })[] = [text];

  for (const term of terms) {
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      if (typeof p !== "string") continue;
      const idx = p.toLowerCase().indexOf(term.toLowerCase());
      if (idx === -1) continue;
      const before = p.slice(0, idx);
      const match = p.slice(idx, idx + term.length);
      const after = p.slice(idx + term.length);
      parts.splice(i, 1, before, { term: match }, after);
      i += 2;
    }
  }

  return parts.filter((p) => p !== "").map((p, i) =>
    typeof p === "string" ? (
      <span key={i}>{p}</span>
    ) : (
      <ConceptHover key={i} term={Object.keys(CONCEPTS).find((k) => k.toLowerCase() === p.term.toLowerCase()) ?? p.term}>
        {p.term}
      </ConceptHover>
    )
  );
}

export default function QuizScreen({ title, subtitle, questions, onNext, onBack }: Props) {
  const { answers, setAnswer, isAnswerCorrect } = useSimulator();
  const allAnswered = questions.every((q) => answers[q.id]);

  return (
    <div className="animate-fade-in space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-primary">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="hidden items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium text-foreground sm:inline-flex">
          <Lightbulb className="h-3.5 w-3.5 text-accent" />
          Pasa el cursor sobre los términos subrayados
        </div>
      </div>

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
              {highlightConceptsInText(q.text)}
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt;
                const isCorrectOpt = opt === q.correctAnswer;
                const showFeedback = selected;
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
                    <span className="flex-1">
                      {CONCEPTS[opt] ? <ConceptHover term={opt}>{opt}</ConceptHover> : opt}
                    </span>
                    {showFeedback && isCorrectOpt && <Check className="h-4 w-4 shrink-0 text-success" />}
                    {showFeedback && !isCorrectOpt && <X className="h-4 w-4 shrink-0 text-destructive" />}
                  </button>
                );
              })}
            </div>

            {correctness === false && (
              <div className="mt-3 rounded-md border border-accent/30 bg-accent/5 p-2.5 text-xs text-foreground">
                <strong className="text-accent">Pista:</strong>{" "}
                Revisa el concepto «<ConceptHover term={q.correctAnswer}>{q.correctAnswer}</ConceptHover>».
              </div>
            )}
          </div>
        );
      })}

      <div className="flex justify-between pt-2">
        <Button variant="outline" onClick={onBack}>← Atrás</Button>
        <Button onClick={onNext} disabled={!allAnswered} className="bg-accent text-accent-foreground hover:bg-accent/90">
          Continuar →
        </Button>
      </div>
    </div>
  );
}
