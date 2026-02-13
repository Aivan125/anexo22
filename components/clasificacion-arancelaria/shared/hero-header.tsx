"use client";

import Image from "next/image";
import { TariffSearch } from "../explorador-ligie/tariff-search";
import { useState } from "react";

interface HeroHeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

export function HeroHeader({
  searchQuery: initialQuery,
  onSearchChange,
}: HeroHeaderProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery || "");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };
  return (
    <header
      className="border-b border-border/50 shadow-md"
      style={{
        background:
          "linear-gradient(to right, rgb(0, 92, 116), rgb(0, 162, 148))",
      }}
    >
      <div className="container mx-auto px-4 pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
            <Image
              src="/logos/anmincadisa-logo.png"
              alt="ANMINCADISA Logo"
              width={96}
              height={96}
              className="h-16 w-auto sm:h-20 md:h-24"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight">
            Simulador de Clasificación Arancelaria
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-foreground/95">
            ANMINCADISA
          </p>
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/85 max-w-2xl mx-auto italic">
            Donde empieza tu futuro en comercio exterior
          </p>
          {/* <div className="pt-4">
            <TariffSearch value={searchQuery} onChange={handleSearchChange} />
          </div> */}
        </div>
      </div>
    </header>
  );
}
