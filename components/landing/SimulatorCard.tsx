"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SimulatorCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  imageSrc?: string;
  href?: string;
  comingSoon?: boolean;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export function SimulatorCard({
  title,
  description,
  tags,
  imageSrc,
  href,
  comingSoon = false,
  imageAlt,
  imagePosition = "left",
}: SimulatorCardProps) {
  const content = (
    <div
      className={cn(
        "group flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-[transform,box-shadow] duration-300",
        imagePosition === "right" && "sm:flex-row-reverse",
        !comingSoon &&
          "hover:-translate-y-1 hover:shadow-primary-hover hover:border-primary/20 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-soft",
        comingSoon && "opacity-90",
      )}
    >
      {/* Image section */}
      <div className="relative w-full sm:w-[40%] min-h-[200px] sm:min-h-0 sm:aspect-[4/3] flex-shrink-0 sm:max-w-[320px]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-3",
              "bg-[var(--simulator-coming-bg)] pattern-grid text-border opacity-60",
            )}
            aria-hidden
          >
            <Lock
              className="h-12 w-12 sm:h-14 sm:w-14"
              style={{ color: "var(--muted-icon)" }}
              aria-hidden
            />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--muted-icon)" }}
            >
              En construcción
            </span>
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col p-6 sm:p-8 justify-between">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full bg-primary/10 text-accent-foreground font-medium hover:bg-primary/15"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground text-balance leading-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6">
          {comingSoon ? (
            <Button
              variant="outline"
              disabled
              className="cursor-not-allowed opacity-70"
            >
              Notificarme cuando esté disponible
            </Button>
          ) : href ? (
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90">
              Ver más
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                aria-hidden
              />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );

  if (href && !comingSoon) {
    return (
      <Link
        href={href}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-3xl"
      >
        {content}
      </Link>
    );
  }

  return content;
}
