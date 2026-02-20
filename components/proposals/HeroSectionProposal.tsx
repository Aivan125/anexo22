"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants/constants";
import { cn } from "@/lib/utils";

export function HeroSectionProposal() {
  const scrollToSimuladores = () => {
    const el = document.getElementById("simuladores");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full overflow-hidden flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-12 bg-slate-900"
      aria-labelledby="hero-heading"
    >
      {/* Background ambient elements */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"
        aria-hidden
      />
      <div
        className="absolute -top-[300px] right-[10%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-start space-y-8">
            <div
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 shadow-[0_0_15px_rgba(20,184,166,0.15)]",
                "animate-in fade-in slide-in-from-bottom-4 duration-500 motion-reduce:animate-none",
              )}
            >
              <Globe className="w-4 h-4 text-cyan-400" aria-hidden />
              <span className="text-xs font-medium tracking-wide text-teal-200 uppercase">
                ANMIN-CADISA
              </span>
            </div>

            <div
              className={cn(
                "space-y-6",
                "animate-in fade-in slide-in-from-bottom-4 duration-600 delay-100 motion-reduce:animate-none",
              )}
            >
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] tracking-tight text-white"
              >
                Formación práctica para profesionales del{" "}
                <br className="hidden md:block" />
                <span className="text-gradient">comercio exterior.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                Domina la normativa aduanera con simuladores que replican la
                realidad. Capacitación, herramientas y consultoría para tu éxito
                profesional.
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4",
                "animate-in fade-in slide-in-from-bottom-4 duration-600 delay-200 motion-reduce:animate-none",
              )}
            >
              <Button
                size="lg"
                onClick={scrollToSimuladores}
                aria-label="Ir a la sección de simuladores"
                className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-medium transition-all duration-300 btn-glow flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Conocer simuladores
                <ArrowDown className="w-4 h-4" aria-hidden />
              </Button>
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 hover:bg-slate-800/50 text-white rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Contactar
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Abstract Representation */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
            {/* Abstract Network/Globe Base */}
            <div
              className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in duration-1000 motion-reduce:animate-none"
              aria-hidden
            >
              <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] border border-slate-700/50 rounded-full absolute animate-spin-60s" />
              <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] border border-teal-500/20 rounded-full absolute border-dashed animate-spin-40s-reverse" />
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] bg-gradient-to-tr from-teal-600/20 to-cyan-400/20 rounded-full absolute blur-xl" />

              {/* Connecting Nodes */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M20,50 L50,20 L80,50 L50,80 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-teal-400"
                />
                <path
                  d="M10,30 L50,50 L90,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                  className="text-cyan-400"
                />
                <circle
                  cx="50"
                  cy="20"
                  r="1"
                  fill="currentColor"
                  className="text-cyan-400"
                />
                <circle
                  cx="80"
                  cy="50"
                  r="1"
                  fill="currentColor"
                  className="text-teal-400"
                />
                <circle
                  cx="50"
                  cy="80"
                  r="1"
                  fill="currentColor"
                  className="text-cyan-400"
                />
                <circle
                  cx="20"
                  cy="50"
                  r="1"
                  fill="currentColor"
                  className="text-teal-400"
                />
              </svg>
            </div>

            {/* Floating Glass Cards */}
            <div
              className={cn(
                "absolute top-[10%] right-[0%] sm:right-[5%] md:right-[15%] z-20",
                "animate-in fade-in slide-in-from-right duration-800 delay-300 motion-reduce:animate-none",
              )}
            >
              <div className="glass-card rounded-2xl p-4 flex items-center gap-4 border-t-white/20">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                  <ArrowDown className="w-5 h-5 text-teal-400" aria-hidden />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-white tracking-tight">
                    Simuladores
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    Prácticos
                  </p>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "absolute bottom-[15%] left-[0%] sm:left-[5%] md:left-[10%] z-20",
                "animate-in fade-in slide-in-from-left duration-800 delay-400 motion-reduce:animate-none",
              )}
            >
              <div className="glass-card rounded-2xl p-4 flex items-center gap-4 border-t-white/20">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck
                    className="w-5 h-5 text-emerald-400"
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-white tracking-tight">
                    100%
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    Normativa Aduanera
                  </p>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "absolute bottom-[0%] right-[5%] sm:right-[10%] z-10 hidden md:flex",
                "animate-in fade-in slide-in-from-bottom-4 duration-800 delay-500 motion-reduce:animate-none",
              )}
            >
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 border-t-white/10 bg-slate-900/60">
                <div
                  className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"
                  aria-hidden
                />
                <p className="text-sm font-medium text-slate-300">
                  Clasificación arancelaria actualizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
