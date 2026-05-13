import { useSimulator } from "@/lib/simulator-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, X, Calculator } from "lucide-react";
import type { FormField } from "@/lib/simulator-data";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface Props {
  title: string;
  fields: FormField[];
  onNext: () => void;
  onBack: () => void;
  nextLabel?: string;
}

export default function FormScreen({ title, fields, onNext, onBack, nextLabel = "Continuar →" }: Props) {
  const { answers, setAnswer, isFieldCorrect } = useSimulator();

  return (
    <div className="animate-fade-in space-y-5">
      <h2 className="text-xl font-bold text-primary">{title}</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => {
          const correctness = isFieldCorrect(f.id);
          return (
            <div key={f.id} className="space-y-1.5">
              <Label htmlFor={f.id} className="flex items-center gap-1.5 text-sm font-medium">
                {f.label}
                <span className="text-xs text-muted-foreground">({f.points} pts)</span>
                {f.formula && (
                  <HoverCard openDelay={120} closeDelay={80}>
                    <HoverCardTrigger asChild>
                      <button
                        type="button"
                        aria-label={`Ver fórmula de ${f.label}`}
                        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors hover:bg-accent/25"
                      >
                        <Calculator className="h-3 w-3" />
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent side="top" className="w-80 border-accent/30 bg-popover shadow-lg">
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary">{f.formula.title}</p>
                        <div className="rounded-md bg-primary/5 px-3 py-2 font-mono text-xs text-primary">
                          {f.formula.expression}
                        </div>
                        <p className="text-xs leading-relaxed text-muted-foreground">{f.formula.explanation}</p>
                        {f.formula.example && (
                          <div className="rounded-md border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs">
                            <span className="font-semibold text-accent">Ejemplo: </span>
                            <span className="font-mono text-foreground">{f.formula.example}</span>
                          </div>
                        )}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                )}
                {correctness === true && <Check className="h-3.5 w-3.5 text-success" />}
                {correctness === false && <X className="h-3.5 w-3.5 text-destructive" />}
              </Label>
              {f.type === "select" ? (
                <select
                  id={f.id}
                  className={cn(
                    "flex h-10 w-full rounded-md border bg-card px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    correctness === true && "border-success",
                    correctness === false && "border-destructive",
                    correctness === null && "border-input"
                  )}
                  value={answers[f.id] ?? ""}
                  onChange={(e) => setAnswer(f.id, e.target.value)}
                >
                  <option value="">Seleccionar…</option>
                  {f.selectOptions?.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <Input
                  id={f.id}
                  type={f.type === "number" ? "number" : "text"}
                  step={f.type === "number" ? "any" : undefined}
                  placeholder={f.type === "number" ? "0.00" : ""}
                  value={answers[f.id] ?? ""}
                  onChange={(e) => setAnswer(f.id, e.target.value)}
                  className={cn(
                    correctness === true && "border-success focus-visible:ring-success",
                    correctness === false && "border-destructive focus-visible:ring-destructive"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between pt-2">
        <Button variant="outline" onClick={onBack}>← Atrás</Button>
        <Button onClick={onNext} className="bg-accent text-accent-foreground hover:bg-accent/90">
          {nextLabel}
        </Button>
      </div>
    </div>
  );
}
