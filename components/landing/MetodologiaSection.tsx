"use client";

import { BookOpen, Target, ShieldCheck, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

const METODOLOGIA = [
  {
    step: "01",
    icon: BookOpen,
    title: "Teoría fundamentada",
    description:
      "Contenido basado en normativa vigente: Anexo 22, LIGIE, legislación aduanera. Sin teoría obsoleta.",
  },
  {
    step: "02",
    icon: Target,
    title: "Casos reales",
    description:
      "Ejercicios con escenarios de importación y exportación que enfrentan las empresas día a día.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Práctica simulada",
    description:
      "Simuladores que replican VUCEM, pedimentos y clasificación. Valida antes de operar en vivo.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Validación y confianza",
    description:
      "Aprende a detectar errores comunes, evitar multas y presentar operaciones con seguridad.",
  },
] as const;

export function MetodologiaSection() {
  return (
    <section
      id="metodologia"
      className="scroll-mt-24 py-20 px-4 sm:px-6 bg-background"
      aria-labelledby="metodologia-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block rounded-full px-4 py-1.5 bg-primary/10 text-accent-foreground font-medium text-sm mb-4"
            aria-hidden
          >
            Metodología
          </span>
          <h2
            id="metodologia-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground text-balance mb-4"
          >
            Cómo trabajamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Teoría + práctica + validación. Una metodología probada para que
            domines cada proceso.
          </p>
        </div>

        <div className="relative">
          {/* Conector visual - línea punteada que conecta los 4 pasos */}
          <div
            className="absolute left-0 right-0 top-[72px] hidden lg:block pointer-events-none z-0 border-t-2 border-dashed border-muted-foreground/30"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {METODOLOGIA.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 100}>
                <div
                  className={cn(
                    "group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft",
                    "transition-[transform,box-shadow] duration-300",
                    "hover:-translate-y-2 hover:shadow-primary-hover",
                    "motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-soft",
                  )}
                >
                  {/* Indicador de paso dual: icono + etiqueta */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors duration-300",
                        "group-hover:bg-primary/15 group-hover:text-primary",
                      )}
                      aria-hidden
                    >
                      <item.icon
                        className="h-6 w-6 sm:h-8 sm:w-8"
                        aria-hidden
                      />
                    </div>
                    <span
                      className={cn(
                        "font-semibold tracking-wider uppercase text-xs transition-colors duration-300",
                        "text-[var(--muted-icon)] group-hover:text-primary",
                      )}
                      aria-hidden
                    >
                      Paso {item.step}
                    </span>
                  </div>

                  <h3 className="text-foreground font-bold text-lg font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
