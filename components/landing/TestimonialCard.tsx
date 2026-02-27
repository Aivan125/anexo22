import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  text: string;
  rating: number;
  authorName: string;
  authorInitial: string;
  courseName: string;
}

export function TestimonialCard({
  text,
  rating,
  authorName,
  authorInitial,
  courseName,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex-shrink-0 w-[340px] sm:w-[380px] rounded-2xl border border-white/10 bg-slate-800/40 backdrop-blur-md p-6",
        "transition-all duration-300",
        "hover:-translate-y-2 hover:border-teal-500/30 hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)]",
      )}
    >
      {/* Quote icon - decorative */}
      <div className="relative mb-4">
        <Quote className="h-10 w-10 text-teal-500/30 -rotate-12" aria-hidden />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3" aria-label={`${rating} de 5 estrellas`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating
                ? "fill-teal-400 text-teal-400"
                : "fill-slate-600 text-slate-600",
            )}
            aria-hidden
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 line-clamp-4">
        {text}
      </p>

      {/* Footer: avatar, name, role, badge */}
      <div className="flex items-center gap-3 flex-wrap">
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm"
          aria-hidden
        >
          {authorInitial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-white text-sm truncate">
            {authorName}
          </p>
          <span
            className="inline-flex items-center rounded-md bg-slate-900/50 px-2 py-0.5 text-xs font-medium text-teal-300 ring-1 ring-teal-500/20"
            aria-label={`Curso: ${courseName}`}
          >
            {courseName}
          </span>
        </div>
      </div>
    </div>
  );
}
