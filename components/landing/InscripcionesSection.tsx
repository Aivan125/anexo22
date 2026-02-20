"use client";

import Link from "next/link";
import {
  Monitor,
  Repeat,
  Clock,
  LockOpen,
  Zap,
  ArrowRight,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants/constants";

const INFO_ITEMS = [
  {
    icon: Monitor,
    label: "Modalidad",
    value: "Híbrido",
  },
  {
    icon: Repeat,
    label: "Generaciones",
    value: "Cada 6 semanas",
  },
  {
    icon: Clock,
    label: "Duración",
    value: "8 horas (2 sesiones)",
  },
  {
    icon: LockOpen,
    label: "Acceso",
    value: "1 mes a grabaciones",
  },
] as const;

export function InscripcionesSection() {
  return (
    <section
      id="inscripciones"
      className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 bg-card"
      aria-labelledby="inscripciones-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-gradient-to-br from-secondary via-secondary to-secondary/90">
          {/* Glow effect */}
          <div
            className="absolute -top-10 -right-10 w-96 h-96 bg-primary/20 blur-3xl rounded-full opacity-50 pointer-events-none -z-10"
            aria-hidden
          />

          <div className="flex flex-col items-center text-center p-10 lg:p-16">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full bg-primary/20 text-primary font-semibold px-4 py-1.5 text-sm mb-6"
              aria-hidden
            >
              <Zap className="h-4 w-4" />
              Próxima Generación
            </span>

            {/* Title */}
            <h2
              id="inscripciones-heading"
              className="text-white font-extrabold text-4xl lg:text-5xl tracking-tight mb-12"
            >
              Inscríbete a la Próxima Generación
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mb-12 text-left">
              {INFO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div
                    className="inline-flex shrink-0 rounded-xl bg-white/10 p-3 text-primary"
                    aria-hidden
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-medium text-sm mb-1 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold text-lg">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <div className="flex flex-col items-center gap-6 mt-4 w-full">
              <p className="text-slate-300 text-lg max-w-xl text-center">
                Los detalles de precio y fechas exactas se publicarán pronto.
                ¡Asegura tu lugar!
              </p>
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-secondary font-bold text-lg shadow-lg hover:bg-primary/90 hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary motion-reduce:hover:translate-y-0"
              >
                Inscríbete Ahora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
