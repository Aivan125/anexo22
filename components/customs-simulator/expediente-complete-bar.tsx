"use client";

import {
  markStageCompleteAction,
} from "@/lib/actions/customsSimulatorProgress";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export function ExpedienteCompleteBar({
  caseKey,
  allEventsResolved,
  expedienteMarkedComplete,
}: {
  caseKey: string;
  allEventsResolved: boolean;
  expedienteMarkedComplete: boolean;
}) {
  const [pending, startTransition] = useTransition();

  if (expedienteMarkedComplete) {
    return null;
  }

  function onClose() {
    startTransition(async () => {
      const res = await markStageCompleteAction({
        caseKey,
        stepSlug: "expediente",
      });
      if (!res.ok) {
        toast.error(res.message);
        return;
      }
      toast.success("Expediente cerrado — pasando al análisis");
    });
  }

  return (
    <div className="mt-8 rounded-xl border border-dashed border-primary/35 bg-primary/5 px-6 py-5">
      <h4 className="text-sm font-semibold text-foreground">
        Cierre de etapa expediente
      </h4>
      <p className="text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
        Cierra sólo después de resolver todos los eventos. El servidor verifica antes de marcar §6.5 continua hacia{" "}
        <span className="text-foreground font-medium">Análisis</span>.
      </p>
      <Button
        type="button"
        size="lg"
        className="mt-5 inline-flex items-center gap-2"
        disabled={pending || !allEventsResolved}
        onClick={() => void onClose()}
      >
        {pending ? (
          <Loader2 className="h-4 w-4 animate-spin shrink-0" aria-hidden />
        ) : null}
        <span>{pending ? "Cerrando…" : "Cerrar expediente y continuar"}</span>
      </Button>
      {!allEventsResolved ? (
        <p className="text-xs text-muted-foreground mt-6">
          Se habilitará cuando cada evento quede registrado como resuelto (k=N).
        </p>
      ) : null}
    </div>
  );
}
