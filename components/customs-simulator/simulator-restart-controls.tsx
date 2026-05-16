"use client";

import { useState, useTransition } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { resetSimulatorProgressAction } from "@/lib/actions/customsSimulatorProgress";

type Props = {
  caseKey: string;
  /** Si hay calificación guardada; mostramos un aviso breve sobre borrado del resultado */
  hasEvaluation?: boolean;
};

export function SimulatorRestartControls({
  caseKey,
  hasEvaluation = false,
}: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  function onRestart() {
    startTransition(async () => {
      await resetSimulatorProgressAction({ caseKey });
    });
  }

  return (
    <>
      <section
        className="mt-10 rounded-xl border border-border bg-card text-card-foreground p-5 shadow-sm space-y-4"
        aria-labelledby="simulator-restart-heading"
      >
        <div className="space-y-1">
          <h2 id="simulator-restart-heading" className="text-base font-semibold">
            Reiniciar práctica
          </h2>
          <p className="text-sm text-muted-foreground">
            Borra todo el progreso de este caso en el simulador y te lleva de nuevo al expediente.
          </p>
          {hasEvaluation ? (
            <p className="text-xs text-amber-600 dark:text-amber-400">
              Tienes un resultado guardado; al reiniciar también se borrará.
            </p>
          ) : null}
        </div>
        <Button
          type="button"
          variant="destructive"
          disabled={pending}
          onClick={() => setDialogOpen(true)}
          className="min-h-[44px] sm:min-h-10"
        >
          Reiniciar simulador
        </Button>
      </section>

      <AlertDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          if (!open && pending) return;
          setDialogOpen(open);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Reiniciar este caso?</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  Se borrarán las respuestas, los eventos y las etapas completadas. Volverás al
                  expediente para empezar de nuevo.
                </p>
                {hasEvaluation ? (
                  <p className="text-amber-600 dark:text-amber-400">
                    Tienes un resultado guardado; al reiniciar también se borrará.
                  </p>
                ) : null}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={pending}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              disabled={pending}
              onClick={onRestart}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {pending ? "Reiniciando…" : "Sí, reiniciar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
