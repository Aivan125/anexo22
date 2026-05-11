"use client";

import { finalizeSimulatorAttemptAction } from "@/lib/actions/customsSimulatorProgress";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export function FinalizeResultButton({
  caseKey,
  disabled,
}: {
  caseKey: string;
  disabled?: boolean;
}) {
  const [pending, start] = useTransition();

  return (
    <Button
      size="lg"
      type="button"
      disabled={disabled || pending}
      onClick={() => {
        start(async () => {
          const res = await finalizeSimulatorAttemptAction({ caseKey });
          if (res && !res.ok) {
            toast.error(res.message);
          }
        });
      }}
      className="inline-flex gap-3 items-center"
    >
      {pending ? (
        <Loader2 className="h-5 w-5 animate-spin shrink-0" aria-hidden />
      ) : null}
      {pending ? "Calificando..." : "Calificar intento"}
    </Button>
  );
}
