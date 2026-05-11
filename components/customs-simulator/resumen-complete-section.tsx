"use client";

import { markStageCompleteAction } from "@/lib/actions/customsSimulatorProgress";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

export function ResumenCompleteSection({
  caseKey,
  resumenMarkedComplete,
  scorePercent,
}: {
  caseKey: string;
  resumenMarkedComplete: boolean;
  scorePercent: number | null;
}) {
  const router = useRouter();
  const [pending, start] = useTransition();

  return (
    <div className="rounded-xl border bg-card px-6 py-6 space-y-4 mt-10">
      <h2 className="text-lg font-semibold">Cierre del resumen</h2>
      {typeof scorePercent === "number" ? (
        <p className="text-sm text-muted-foreground">
          Puntuación registrada para este intento:{" "}
          <span className="font-mono font-medium text-foreground">
            {scorePercent}%
          </span>
          .
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          No hay puntuación asociada; vuelve a Resultado si falta calificar.
        </p>
      )}
      {resumenMarkedComplete ? (
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          Etapa Resumen marcada como completa — recorrido del pipeline cerrado en el servidor.
        </p>
      ) : (
        <Button
          type="button"
          disabled={pending}
          variant="secondary"
          onClick={() => {
            start(async () => {
              const res = await markStageCompleteAction({
                caseKey,
                stepSlug: "resumen",
              });
              if (!res.ok) {
                toast.error(res.message);
                return;
              }
              toast.success("Resumen cerrado.");
              router.refresh();
            });
          }}
        >
          {pending ? (
            <Loader2 className="h-4 w-4 animate-spin shrink-0 mr-2" aria-hidden />
          ) : null}
          Marcar resumen como completo
        </Button>
      )}
    </div>
  );
}
