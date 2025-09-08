"use client";

import { cn } from "@/lib/utils";

interface LoadingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dots" | "bounce" | "pulse" | "spin";
}

export default function Loading({
  className,
  size = "md",
  variant = "dots",
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const containerSizes = {
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
  };

  if (variant === "dots") {
    return (
      <div
        className={cn(
          "flex items-center justify-center",
          containerSizes[size],
          className
        )}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "rounded-full bg-primary animate-bounce",
              sizeClasses[size]
            )}
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: "0.8s",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "bounce") {
    return (
      <div
        className={cn(
          "flex items-center justify-center",
          containerSizes[size],
          className
        )}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "rounded-full bg-gradient-to-r from-primary to-chart-1 animate-pulse",
              sizeClasses[size]
            )}
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: "1.2s",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <div className="relative">
          <div
            className={cn(
              "rounded-full bg-primary/20 animate-ping",
              size === "sm"
                ? "w-8 h-8"
                : size === "md"
                ? "w-12 h-12"
                : "w-16 h-16"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 rounded-full bg-primary animate-pulse",
              sizeClasses[size],
              "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            )}
          />
        </div>
      </div>
    );
  }

  // variant === 'spin'
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <div
          className={cn(
            "rounded-full border-2 border-muted animate-spin",
            size === "sm"
              ? "w-8 h-8"
              : size === "md"
              ? "w-12 h-12"
              : "w-16 h-16"
          )}
        >
          <div
            className={cn(
              "absolute top-0 left-0 rounded-full border-2 border-primary border-r-transparent animate-spin",
              size === "sm"
                ? "w-8 h-8"
                : size === "md"
                ? "w-12 h-12"
                : "w-16 h-16"
            )}
            style={{ animationDuration: "0.75s" }}
          />
        </div>
      </div>
    </div>
  );
}

// Componente de página completa de loading
export function FullPageLoading({
  message = "Cargando...",
  variant = "dots",
}: {
  message?: string;
  variant?: LoadingProps["variant"];
}) {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <Loading variant={variant} size="lg" />
      <p className="text-muted-foreground font-medium text-balance text-center">
        {message}
      </p>
    </div>
  );
}
