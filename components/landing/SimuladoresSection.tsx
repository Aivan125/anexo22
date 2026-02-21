"use client";

import { SimulatorCard } from "./SimulatorCard";
import { ScrollReveal } from "./ScrollReveal";

const SIMULATORS = [
  {
    title: "Simulador de Llenado de Pedimento",
    description:
      "Domina el Anexo 22 y aprende a llenar correctamente cada campo del pedimento aduanero. Practica con casos reales y presenta tus operaciones con total confianza.",
    tags: ["Anexo 22", "Pedimento", "Práctica"],
    imageSrc: "/photo1.jpg",
    href: "/anexo22",
    comingSoon: false,
    imageAlt: "Persona llenando documento de pedimento aduanero",
    imagePosition: "left" as const,
  },
  {
    title: "Clasificación Arancelaria",
    description:
      "Explora la LIGIE y aprende clasificación arancelaria con casos reales de empresas. Ejercicios prácticos con contexto empresarial y soluciones detalladas.",
    tags: ["LIGIE", "Arancel", "Casos prácticos"],
    imageSrc: "/comercio-exterior.jpg",
    href: "/clasificacion-arancelaria",
    comingSoon: false,
    imageAlt: "Explorador de clasificación arancelaria LIGIE",
    imagePosition: "right" as const,
  },
  {
    title: "Introducción práctica al comercio exterior",
    description:
      "Fundamentos prácticos del comercio exterior para quienes inician en el sector. Conoce los conceptos clave y la normativa básica.",
    tags: ["Próximamente"],
    imageSrc: undefined,
    href: undefined,
    comingSoon: true,
    imageAlt: "Introducción al comercio exterior",
    imagePosition: "left" as const,
  },
] as const;

export function SimuladoresSection() {
  return (
    <section
      id="simuladores"
      className="scroll-mt-24 py-20 px-4 sm:px-6 bg-card"
      aria-labelledby="simuladores-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="simuladores-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-balance mb-4"
          >
            Nuestros Simuladores
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Herramientas prácticas que simulan la realidad aduanera para que
            domines cada proceso con confianza.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10">
          {SIMULATORS.map((sim, index) => (
            <ScrollReveal key={sim.title} delay={index * 150}>
              <SimulatorCard
                title={sim.title}
                description={sim.description}
                tags={sim.tags}
                imageSrc={sim.imageSrc}
                href={sim.href}
                comingSoon={sim.comingSoon}
                imageAlt={sim.imageAlt}
                imagePosition={sim.imagePosition}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
