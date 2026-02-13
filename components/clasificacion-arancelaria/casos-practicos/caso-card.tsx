import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ChevronRight } from "lucide-react";
import type { CasoPractico } from "@/types/clasificacion-arancelaria";
import Link from "next/link";

interface CasoCardProps {
  caso: CasoPractico;
}

function getDifficultyColor(dificultad: string) {
  switch (dificultad) {
    case "basico":
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
    case "intermedio":
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
    case "avanzado":
      return "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20";
    default:
      return "bg-muted text-muted-foreground";
  }
}

export function CasoCard({ caso }: CasoCardProps) {
  return (
    <Card className="transition-all duration-300 hover:border-primary/50 hover:shadow-md cursor-pointer">
      <Link href={`/clasificacion-arancelaria/casos-practicos/${caso.id}`}>
        <CardHeader className="pb-3 p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span className="text-[10px] sm:text-xs font-medium text-primary">
                  Sección {caso.seccion} • Cap. {caso.capitulo_aproximado}
                </span>
              </div>
              <CardTitle className="text-sm sm:text-base font-semibold mb-2">
                {caso.titulo}
              </CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                {caso.producto.nombre_comercial}
              </p>
            </div>
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0 mt-1" />
          </div>
        </CardHeader>
        <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
          <Badge
            variant="outline"
            className={getDifficultyColor(caso.nivel_dificultad)}
          >
            {caso.nivel_dificultad.charAt(0).toUpperCase() +
              caso.nivel_dificultad.slice(1)}
          </Badge>
        </CardContent>
      </Link>
    </Card>
  );
}
