"use client";

import { MessageSquare } from "lucide-react";

interface PreguntaRespuestaCardProps {
  pregunta: string;
  respuesta: string;
  numero: number;
}

export function PreguntaRespuestaCard({
  pregunta,
  respuesta,
  numero,
}: PreguntaRespuestaCardProps) {
  return (
    <article
      className="group relative rounded-lg border border-[var(--turquoise)]/20 bg-[var(--turquoise)]/5 pl-4 sm:pl-5 pr-4 sm:pr-5 py-4 sm:py-5 transition-all duration-200 hover:border-[var(--turquoise)]/30 hover:shadow-sm hover:shadow-[var(--turquoise)]/5"
      style={{ borderLeftWidth: "4px", borderLeftColor: "var(--turquoise)" }}
    >
      <div className="flex gap-3 sm:gap-4">
        <div className="flex-shrink-0 mt-0.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--turquoise)]/15">
            <MessageSquare
              className="h-4 w-4 text-[var(--turquoise)]"
              aria-hidden
            />
          </div>
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex items-start gap-2">
            <span className="flex-shrink-0 text-xs font-semibold text-[var(--turquoise)] tabular-nums">
              {numero}.
            </span>
            <p className="text-sm sm:text-base font-semibold text-foreground leading-snug">
              {pregunta}
            </p>
          </div>
          <div className="pl-5 sm:pl-6">
            <p className="text-sm sm:text-base text-[var(--turquoise)] leading-relaxed">
              {respuesta}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
