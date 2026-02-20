"use client";

import { GraduationCap, Monitor, ShieldCheck, BookOpen } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const SERVICIOS = [
  {
    icon: GraduationCap,
    title: "Capacitación práctica",
    description:
      "Cursos y talleres diseñados para que apliques de inmediato lo aprendido. Modalidad híbrida con acceso a grabaciones y material de apoyo.",
  },
  {
    icon: Monitor,
    title: "Simuladores interactivos",
    description:
      "Herramientas que replican procesos reales: llenado de pedimentos, clasificación arancelaria y más. Practica sin riesgo antes de operar.",
  },
  {
    icon: ShieldCheck,
    title: "Consultoría en comercio exterior",
    description:
      "Asesoría especializada en normativa aduanera, clasificación arancelaria y estrategias de operación para empresas e instituciones.",
  },
  {
    icon: BookOpen,
    title: "Formación en normativa",
    description:
      "Dominio del Anexo 22, LIGIE, VUCEM y legislación vigente. Conocimiento actualizado para tomar decisiones con confianza.",
  },
] as const;

export function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 py-20 px-4 sm:px-6 bg-background"
      aria-labelledby="servicios-heading"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            aria-hidden
          >
            Nuestros Servicios
          </span>
          <h2
            id="servicios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground text-balance mb-4"
          >
            Qué hacemos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Formación y herramientas para profesionales que operan en comercio
            exterior y aduanas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SERVICIOS.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-[transform,box-shadow] duration-300 h-full hover:-translate-y-1 hover:shadow-elegant motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-soft">
                <div
                  className="mb-4 inline-flex rounded-xl p-3 bg-primary/10 text-primary w-fit transition-colors group-hover:bg-primary/20"
                  aria-hidden
                >
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
