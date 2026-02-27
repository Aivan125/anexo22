"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
}

export function StarRating({
  value,
  onChange,
  readOnly = false,
}: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const displayValue = hoverValue ?? value;

  const handleClick = (rating: number) => {
    if (!readOnly && onChange) {
      onChange(rating);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, rating: number) => {
    if (readOnly) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange?.(rating);
    }
  };

  return (
    <div
      className="flex gap-1"
      role={readOnly ? "img" : "radiogroup"}
      aria-label={readOnly ? `${value} de 5 estrellas` : "Calificación"}
      onMouseLeave={() => !readOnly && setHoverValue(null)}
    >
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          type="button"
          disabled={readOnly}
          onClick={() => handleClick(rating)}
          onMouseEnter={() => !readOnly && setHoverValue(rating)}
          onKeyDown={(e) => handleKeyDown(e, rating)}
          className={cn(
            "p-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
            !readOnly && "cursor-pointer hover:scale-110 transition-transform",
          )}
          aria-label={readOnly ? undefined : `Dar ${rating} estrellas`}
          aria-pressed={!readOnly && value === rating}
        >
          <Star
            className={cn(
              "h-6 w-6 transition-colors",
              rating <= displayValue
                ? "fill-teal-400 text-teal-400"
                : "fill-slate-600 text-slate-600",
            )}
            aria-hidden
          />
        </button>
      ))}
    </div>
  );
}
