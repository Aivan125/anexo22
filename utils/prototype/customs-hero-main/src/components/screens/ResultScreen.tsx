import { useSimulator } from "@/lib/simulator-context";
import { SCORE_BANDS } from "@/lib/simulator-data";
import { CheckCircle2, XCircle, AlertTriangle, Trophy, RotateCcw, BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ResultScreen() {
  const { studentName, group, score, validationMessages, scoreBandLabel, resetSimulator, goToScreen } = useSimulator();

  const band = SCORE_BANDS.find((b) => score >= b.min && score <= b.max);
  const isPass = score >= 70;

  return (
    <div className="animate-fade-in space-y-6">
      <div className={cn(
        "rounded-2xl border p-8 text-center shadow-sm",
        isPass ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"
      )}>
        <Trophy className={cn("mx-auto mb-3 h-10 w-10", isPass ? "text-success" : "text-destructive")} />
        <p className="text-sm font-medium text-muted-foreground">Calificación obtenida</p>
        <p className="font-mono text-5xl font-bold text-foreground">
          {score}<span className="text-2xl text-muted-foreground">/100</span>
        </p>
        <p className={cn("mt-2 text-sm font-semibold", isPass ? "text-success" : "text-destructive")}>
          {scoreBandLabel || band?.label}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{studentName} {group && `— Grupo ${group}`}</p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <Button onClick={() => goToScreen("summary")} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <BookOpenCheck className="mr-2 h-4 w-4" />
            Ver resumen integral del caso
          </Button>
          <Button onClick={resetSimulator} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Practicar de nuevo
          </Button>
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">
          Revisa el resumen integral para entender la operación aduanera completa con respuestas correctas.
        </p>
      </div>

      {validationMessages.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Observaciones de validación</h3>
          {validationMessages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-3 text-sm",
                m.severity === "high"
                  ? "border-destructive/40 bg-destructive/5"
                  : "border-warning/40 bg-warning/5"
              )}
            >
              {m.severity === "high" ? (
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
              ) : (
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              )}
              <span className="text-foreground">{m.message}</span>
            </div>
          ))}
        </div>
      )}

      {validationMessages.length === 0 && (
        <div className="flex items-center gap-3 rounded-lg border border-success/40 bg-success/5 p-4">
          <CheckCircle2 className="h-5 w-5 text-success" />
          <span className="text-sm font-medium text-foreground">Todos los campos fueron validados correctamente.</span>
        </div>
      )}
    </div>
  );
}
