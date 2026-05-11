"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  patchSimulatorProgressAction,
  resetSimulatorProgressAction,
} from "@/lib/actions/customsSimulatorProgress";

export type ExpedienteSmokeSnapshot = {
  currentStepSlug: string;
  answersKeyCount: number;
  journeyResolvedCount: number;
  completedStagesCount: number;
  hasEvaluation: boolean;
};

type Props = {
  caseKey: string;
  snapshot: ExpedienteSmokeSnapshot;
};

export function ExpedienteProgressSmoke({ caseKey, snapshot }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function onSaveSmoke() {
    startTransition(async () => {
      const res = await patchSimulatorProgressAction({
        caseKey,
        answersPatch: { _smoke: new Date().toISOString() },
      });
      if (!res.ok) {
        toast.error(res.message);
        return;
      }
      toast.success("Progreso de prueba guardado (F5 debe persistir)");
      router.refresh();
    });
  }

  function onReset() {
    startTransition(async () => {
      await resetSimulatorProgressAction({ caseKey });
    });
  }

  function confirmReset() {
    if (
      !window.confirm(
        "¿Reiniciar este caso? Se borrarán respuestas, eventos y etapas completadas en esta práctica.",
      )
    ) {
      return;
    }
    onReset();
  }

  return (
    <section
      className="rounded-xl border border-border bg-card text-card-foreground p-5 shadow-sm space-y-4"
      aria-labelledby="progress-smoke-heading"
    >
      <h2 id="progress-smoke-heading" className="text-lg font-semibold">
        Persistencia (Fase 3)
      </h2>
      <dl className="grid gap-2 text-sm sm:grid-cols-2">
        <div className="flex justify-between gap-2 border-b border-border/80 pb-1">
          <dt className="text-muted-foreground">Etapa guardada</dt>
          <dd className="font-medium">{snapshot.currentStepSlug}</dd>
        </div>
        <div className="flex justify-between gap-2 border-b border-border/80 pb-1">
          <dt className="text-muted-foreground">Claves en answers</dt>
          <dd className="font-medium">{snapshot.answersKeyCount}</dd>
        </div>
        <div className="flex justify-between gap-2 border-b border-border/80 pb-1">
          <dt className="text-muted-foreground">Eventos journey</dt>
          <dd className="font-medium">{snapshot.journeyResolvedCount}</dd>
        </div>
        <div className="flex justify-between gap-2 border-b border-border/80 pb-1">
          <dt className="text-muted-foreground">Etapas completadas</dt>
          <dd className="font-medium">{snapshot.completedStagesCount}</dd>
        </div>
      </dl>
      {snapshot.hasEvaluation ? (
        <p className="text-xs text-amber-600 dark:text-amber-400">
          Hay resultado guardado; Reiniciar lo borrará.
        </p>
      ) : null}
      <div className="flex flex-wrap gap-3">
        <Button
          type="button"
          variant="secondary"
          disabled={pending}
          onClick={onSaveSmoke}
        >
          Guardar prueba
        </Button>
        <Button
          type="button"
          variant="destructive"
          disabled={pending}
          onClick={confirmReset}
        >
          Reiniciar simulador
        </Button>
      </div>
    </section>
  );
}
