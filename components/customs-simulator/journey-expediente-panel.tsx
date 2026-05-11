"use client";

import type { JourneyEventPublic } from "@/lib/data/customs-simulator/schemas";
import { submitJourneyChoiceAction } from "@/lib/actions/customsSimulatorProgress";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { LucideIcon } from "lucide-react";
import { Loader2 } from "lucide-react";
import * as Lucide from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { toast } from "sonner";

function JourneyEventIcon({ name }: { name?: string }) {
  const Icon = (
    name
      ? (Lucide as unknown as Record<string, LucideIcon | undefined>)[name] ??
        Lucide.CircleDot
      : Lucide.CircleDot
  ) satisfies LucideIcon;
  return <Icon className="h-5 w-5 text-primary shrink-0" aria-hidden />;
}

export function JourneyExpedientePanel({
  caseKey,
  events,
  resolvedIds,
}: {
  caseKey: string;
  events: JourneyEventPublic[];
  resolvedIds: string[];
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [choice, setChoice] = useState<string>("");
  const [pending, startTransition] = useTransition();

  const resolvedSet = useMemo(() => new Set(resolvedIds), [resolvedIds]);

  function openFor(id: string) {
    const ev = events.find((e) => e.id === id);
    if (!ev) return;
    setActiveId(ev.id);
    setChoice(ev.options[0]?.label ?? "");
    setOpen(true);
  }

  function onOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setActiveId(null);
      setChoice("");
    }
  }

  const pendingEvent = activeId
    ? events.find((e) => e.id === activeId)
    : undefined;

  const nextUnresolved =
    events.find((e) => !resolvedSet.has(e.id))?.id ?? null;

  const allResolved =
    events.length > 0 && events.every((e) => resolvedSet.has(e.id));

  function onSubmit() {
    if (!pendingEvent || !choice.trim()) return;
    startTransition(async () => {
      const res = await submitJourneyChoiceAction({
        caseKey,
        eventId: pendingEvent.id,
        chosenLabel: choice,
      });
      if (!res.ok) {
        toast.error(res.message);
        return;
      }
      toast.success("Evento registrado en el expediente");
      onOpenChange(false);
      router.refresh();
    });
  }

  return (
    <>
      <section
        aria-labelledby="journey-actions-heading"
        className="rounded-xl border border-border bg-muted/40 px-6 py-5 mt-6"
      >
        <h4 id="journey-actions-heading" className="text-sm font-semibold mb-4">
          Eventos del expediente · journey
        </h4>

        <ol className="space-y-4">
          {events.map((ev) => {
            const done = resolvedSet.has(ev.id);
            return (
              <li
                key={ev.id}
                className={`flex gap-4 p-4 rounded-lg border bg-card ${
                  done ? "border-emerald-500/40 opacity-95" : "border-border"
                }`}
              >
                <div className="pt-1">
                  <JourneyEventIcon name={ev.iconName} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium text-sm">{ev.title}</p>
                    {done ? (
                      <span className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400 tracking-wide bg-emerald-500/15 px-2 py-0.5 rounded-full">
                        Resuelto
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 leading-snug">
                    {ev.scenario}
                  </p>
                  {!done ? (
                    <Button
                      type="button"
                      variant="secondary"
                      className="mt-3"
                      onClick={() => openFor(ev.id)}
                    >
                      Tomar decisión
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground mt-2">
                      Completaste este hito registrado ante la autoridad.
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        {!allResolved && nextUnresolved ? (
          <div className="mt-6 flex flex-wrap gap-3 items-center justify-between border-t pt-5 border-border/70">
            <p className="text-sm text-muted-foreground max-w-xl">
              Resolver en orden recomendado: la siguiente pendiente marca el siguiente
              hito marítimo.
            </p>
            <Button type="button" onClick={() => openFor(nextUnresolved)}>
              Resolver siguiente evento pendiente
            </Button>
          </div>
        ) : null}
      </section>

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-lg [&]:max-h-[85vh] overflow-y-auto gap-6">
          {pendingEvent ? (
            <>
              <DialogHeader className="text-left">
                <div className="flex items-start gap-2">
                  <JourneyEventIcon name={pendingEvent.iconName} />
                  <DialogTitle>{pendingEvent.title}</DialogTitle>
                </div>
                <DialogDescription className="text-left">
                  Elige una sola opción. La validación del expediente usa datos sólo servidor.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground leading-snug px-4 border-l-4 border-primary/70">
                  {pendingEvent.scenario}
                </p>
                <fieldset className="space-y-2">
                  <legend className="sr-only">Opciones de decisión para el equipo aduanero</legend>
                  <p className="text-sm font-medium mb-4" aria-hidden="true">
                    ¿Qué hace el equipo aduanero?
                  </p>
                  <RadioGroup
                    value={choice}
                    onValueChange={(v: string) => setChoice(v)}
                    className="gap-5"
                  >
                    {pendingEvent.options.map((opt, oi) => {
                      const htmlId = `exp-${pendingEvent.id}-opt-${oi}`;
                      return (
                        <div
                          key={`${pendingEvent.id}-${oi}`}
                          className="flex items-start gap-3 rounded-lg border border-border px-3 py-2 has-[[data-state=checked]]:border-primary bg-background"
                        >
                          <RadioGroupItem id={htmlId} value={opt.label} />
                          <Label
                            className="text-sm cursor-pointer leading-snug font-normal pb-0"
                            htmlFor={htmlId}
                          >
                            {opt.label}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </fieldset>
              </div>
              <DialogFooter className="sm:justify-end gap-2">
                <Button
                  variant="outline"
                  type="button"
                  disabled={pending}
                  onClick={() => onOpenChange(false)}
                >
                  Cancelar
                </Button>
                <Button
                  type="button"
                  disabled={pending || !choice}
                  onClick={() => void onSubmit()}
                >
                  {pending ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  ) : (
                    "Confirmar y registrar evento"
                  )}
                </Button>
              </DialogFooter>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
