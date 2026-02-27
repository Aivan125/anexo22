"use client";

import { TestimonialCard } from "./TestimonialCard";
import {
  TESTIMONIALS_MOCK,
  SUPPLEMENT_MOCK,
} from "@/lib/data/testimonials-mock";
import type { TestimonialDisplay } from "@/lib/types/testimonial";

interface TestimonialsSectionProps {
  testimonials?: TestimonialDisplay[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const items =
    testimonials && testimonials.length > 0
      ? [...testimonials, ...SUPPLEMENT_MOCK].slice(0, 10)
      : TESTIMONIALS_MOCK;
  const row = [...items, ...items];

  return (
    <section
      id="testimonios"
      className="relative py-24 px-4 sm:px-6 bg-slate-900 overflow-x-hidden overflow-y-visible"
      aria-labelledby="testimonios-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="testimonios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-4"
          >
            Nuestros alumnos ya están{" "}
            <span className="text-gradient">dominando la aduana</span>
          </h2>
        </div>

        {/* Marquee container - una sola fila, full width, fade edges, pt-2 para espacio del hover */}
        <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-visible pt-2 group">
          <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-row flex-nowrap gap-6 pt-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
              {row.map((t, i) => (
                <div
                  key={`${t.id}-${i}`}
                  className="min-w-[350px] shrink-0 relative hover:z-10"
                >
                  <TestimonialCard
                    text={t.text}
                    rating={t.rating}
                    authorName={t.authorName}
                    authorInitial={t.authorInitial}
                    courseName={t.courseName}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
