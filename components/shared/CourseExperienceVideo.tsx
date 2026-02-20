"use client";

import Link from "next/link";
import { Users, Target, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const BENEFITS = [
  {
    icon: Users,
    text: "Networking con profesionales del sector.",
  },
  {
    icon: Target,
    text: "Casos prácticos y reales.",
  },
  {
    icon: Coffee,
    text: "Ambiente dinámico y coffee break.",
  },
] as const;

export function CourseExperienceVideo() {
  const videoId = "K0dY1qxZaqs";
  const videoTitle =
    "Experiencia del Curso de Llenado de Pedimento de Anexo 22";

  return (
    <section className="py-24 px-4 sm:px-6 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda: contenido y texto */}
          <div className="order-1">
            <span
              className="inline-block rounded-full px-4 py-1.5 bg-primary/10 text-accent-foreground font-medium text-sm w-fit mb-4"
              aria-hidden
            >
              La Experiencia
            </span>
            <h2
              className="text-foreground font-extrabold text-4xl lg:text-5xl tracking-tight leading-tight font-sans"
              id="course-experience-heading"
            >
              Vive el Curso de Llenado de Pedimento
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Descubre cómo vivieron nuestros estudiantes esta experiencia
              formativa única en el dominio del Anexo 22 y pedimentos aduaneros.
            </p>

            <ul className="mt-6 space-y-3">
              {BENEFITS.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <item.icon
                    className="h-5 w-5 flex-shrink-0 text-primary"
                    aria-hidden
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha: contenedor del video vertical */}
          <div className="order-2 relative">
            {/* Blob de acento visual */}
            <div
              className="absolute -z-10 -right-10 top-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />

            {/* Mockup container - estilo teléfono vertical */}
            <div className="relative mx-auto w-full max-w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-foreground/5">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={videoTitle}
                className="absolute inset-0 w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
