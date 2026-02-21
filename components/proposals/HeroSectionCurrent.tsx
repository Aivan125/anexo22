"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import heroImage from "@/public/photo1.jpg";
import { WHATSAPP_LINK } from "@/lib/constants/constants";
import { cn } from "@/lib/utils";

export function HeroSectionCurrent() {
  const scrollToSimuladores = () => {
    const el = document.getElementById("simuladores");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden />
      {/* Background: subtle gradient + geometric accent */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,oklch(0.55_0.12_75/0.08),transparent)]"
        aria-hidden
      />
      <div
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      {/* Decorative diagonal shape */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-5"
        style={{
          background:
            "linear-gradient(135deg, transparent 50%, var(--primary) 50%)",
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary font-semibold px-4 py-1.5 animate-in fade-in slide-in-from-bottom-4 duration-500 motion-reduce:animate-none"
            >
              ANMIN-CADISA
            </Badge>

            <div
              className={cn(
                "space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 motion-reduce:animate-none",
              )}
            >
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-balance leading-[1.1] tracking-tight"
              >
                Formación práctica para profesionales del{" "}
                <span className="text-primary">comercio exterior</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
                Domina la normativa aduanera con simuladores que replican la
                realidad. Capacitación, herramientas y consultoría para tu éxito
                profesional.
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 motion-reduce:animate-none",
              )}
            >
              <Button
                size="lg"
                onClick={scrollToSimuladores}
                aria-label="Ir a la sección de simuladores"
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-300 hover:shadow-[0_0_30px_-5px_var(--primary)] motion-reduce:hover:shadow-none"
              >
                Conocer simuladores
                <ArrowDown className="h-5 w-5" aria-hidden />
              </Button>
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-transparent px-8 py-6 text-lg font-semibold transition-colors hover:border-accent hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Contactar
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div
            className={cn(
              "relative animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 motion-reduce:animate-none",
              "lg:translate-x-8 lg:-mr-8",
            )}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-dramatic border border-border/50 bg-card">
              <div className="aspect-[4/3] sm:aspect-video relative">
                <Image
                  src={heroImage}
                  alt="Profesional del comercio exterior trabajando con documentación aduanera"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
