"use client";

import Image from "next/image";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "Formación Académica de Alto Nivel",
    description:
      "Doctorado, Maestría y Licenciatura en Relaciones Internacionales, con especialización en Comercio Exterior.",
  },
  {
    icon: Award,
    title: "Certificaciones Clave",
    description:
      "Certificado en Normativa Aduanera, VUCEM y estándar CONOCER para impartición de cursos y consultoría.",
  },
  {
    icon: Briefcase,
    title: "Experiencia Práctica",
    description:
      "Experto en clasificación arancelaria, legislación aduanera y estratega de operaciones de comercio exterior.",
  },
] as const;

export function InstructorSection() {
  return (
    <section
      id="instructor"
      className="scroll-mt-24 py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-card"
      aria-labelledby="instructor-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Columna izquierda: imagen con marco offset */}
          <ScrollReveal delay={0} className="lg:col-span-5">
            <div className="relative">
              {/* Marco offset */}
              <div
                className="absolute -z-10 w-full h-full rounded-[2.5rem] translate-x-4 translate-y-4 bg-primary/5"
                aria-hidden
              />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/foto-perfil.jpeg"
                  alt="Dr. Luis Alejandro Rodríguez Cruz"
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={false}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Columna derecha: contenido */}
          <ScrollReveal delay={100} className="lg:col-span-7">
            <span
              className="inline-block rounded-full px-4 py-1.5 bg-primary/10 text-accent-foreground font-semibold text-sm mb-6"
              aria-hidden
            >
              Conoce a tu Instructor
            </span>
            <h2
              id="instructor-heading"
              className="text-foreground font-extrabold text-4xl lg:text-5xl leading-tight mb-4 font-display"
            >
              Dr. Luis Alejandro Rodríguez Cruz
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
              Fundador de <strong>ANMIN-CADISA</strong> y diseñador académico
              apasionado por el comercio exterior. Con una sólida trayectoria
              desde la Licenciatura hasta el Doctorado en Relaciones
              Internacionales, el Dr. Rodríguez ha dedicado su carrera a dominar
              y enseñar las complejidades de la legislación aduanera con un
              enfoque 100% práctico.
            </p>

            <ul className="flex flex-col gap-6">
              {CREDENTIALS.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div
                    className="inline-flex shrink-0 rounded-xl bg-primary/10 p-3 text-primary"
                    aria-hidden
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
