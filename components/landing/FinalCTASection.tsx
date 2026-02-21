"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants/constants";

export function FinalCTASection() {
  return (
    <section
      className="relative overflow-hidden py-32 lg:py-40 bg-slate-950"
      aria-labelledby="cta-heading"
    >
      {/* Aurora / Resplandor */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden
      />

      {/* Patrón tech */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-[5]"
        aria-hidden
      />

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        <h2
          id="cta-heading"
          className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white"
        >
          ¿Listo para{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
            dominar
          </span>{" "}
          el comercio exterior?
        </h2>

        <p className="text-slate-400 text-xl lg:text-2xl max-w-2xl mx-auto mb-12 font-light">
          Gana la seguridad y el conocimiento para optimizar cada operación
          aduanera.
        </p>

        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-5 text-secondary font-bold text-xl shadow-[0_0_40px_-10px_oklch(0.55_0.15_180_/_0.5)] hover:scale-105 hover:bg-primary/90 transition-all duration-300 motion-reduce:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Sí, Quiero Inscribirme Ahora
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" />
        </Link>

        <p className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-sm">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden />
          Cupos limitados por generación. Pago 100% seguro.
        </p>
      </div>
    </section>
  );
}
