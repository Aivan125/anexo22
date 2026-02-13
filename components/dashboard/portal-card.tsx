"use client";

import {
  FileText,
  Search,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Search,
};

interface PortalCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  iconName: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  delay?: number;
}

export function PortalCard({
  title,
  description,
  features,
  href,
  iconName,
  gradientFrom,
  gradientTo,
  glowColor,
  delay = 0,
}: PortalCardProps) {
  const Icon = iconMap[iconName] ?? FileText;
  return (
    <Link
      href={href}
      className="block group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <div
        className={cn(
          "relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 transition-[transform,border-color,box-shadow] duration-500",
          "hover:scale-105 motion-reduce:hover:scale-100 hover:border-white/20 hover:shadow-2xl",
          "animate-in fade-in slide-in-from-bottom-4 motion-reduce:animate-none",
          "overflow-hidden",
        )}
        style={{
          animationDelay: `${delay}ms`,
          boxShadow: `0 0 0 0 ${glowColor}20`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 40px ${glowColor}40, 0 0 80px ${glowColor}20`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 0 ${glowColor}20`;
        }}
      >
        {/* Background gradient overlay */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div className="mb-4 sm:mb-6">
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
              }}
            >
              <Icon
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Title with gradient */}
          <h3
            className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features checklist */}
          <div className="flex-1 space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-white/80"
              >
                <div
                  className="mt-0.5 sm:mt-1 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                >
                  <Check
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                    aria-hidden="true"
                  />
                </div>
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            className={cn(
              "w-full sm:w-auto group-hover:shadow-lg transition-[box-shadow,background] duration-300",
              "bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40",
              "text-white font-semibold",
            )}
            style={{
              background: `linear-gradient(135deg, ${gradientFrom}40, ${gradientTo}40)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${gradientFrom}40, ${gradientTo}40)`;
            }}
          >
            Ingresar
            <ArrowRight
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </Link>
  );
}
