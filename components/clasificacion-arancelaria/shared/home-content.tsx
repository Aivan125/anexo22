"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Search, GraduationCap } from "lucide-react";
import Link from "next/link";
import { SearchResults } from "./search-results";
import { searchClassifications } from "@/lib/data/clasificacion-arancelaria/helpers";
import { HeroHeader } from "./hero-header";

export function HomeContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchClassifications(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <HeroHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
        {searchQuery.trim() ? (
          <SearchResults results={searchResults} query={searchQuery} />
        ) : (
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-[var(--turquoise)] bg-gradient-to-br from-card to-card/80 group">
              <Link href="/clasificacion-arancelaria/explorador">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 sm:p-3 bg-[var(--turquoise)]/10 rounded-lg group-hover:bg-[var(--turquoise)]/20 transition-colors">
                      <Search className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--turquoise)] transition-colors" />
                    </div>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">
                    Módulo Explorador LIGIE
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Navega por las secciones, capítulos, partidas y fracciones
                    arancelarias de la Ley de los Impuestos Generales de
                    Importación y Exportación
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Secciones disponibles</span>
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-[var(--turquoise)] bg-gradient-to-br from-card to-card/80 group">
              <Link href="/clasificacion-arancelaria/casos-practicos">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 sm:p-3 bg-[var(--turquoise)]/10 rounded-lg group-hover:bg-[var(--turquoise)]/20 transition-colors">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--turquoise)] transition-colors" />
                    </div>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">
                    Casos Prácticos
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Aprende a clasificar productos con casos reales de empresas.
                    Ejercicios prácticos con contexto empresarial y soluciones
                    detalladas
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>6 casos prácticos disponibles</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        )}
      </main>
    </>
  );
}
