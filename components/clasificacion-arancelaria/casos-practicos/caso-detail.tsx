"use client";

import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CasoPractico } from "@/types/clasificacion-arancelaria";
import Link from "next/link";

interface CasoDetailProps {
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

export function CasoDetail({ caso }: CasoDetailProps) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <Button variant="ghost" asChild className="mb-4 -ml-2 min-h-[44px]">
            <Link href="/clasificacion-arancelaria/casos-practicos">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a casos
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">
                  Sección {caso.seccion} • Capítulo {caso.capitulo_aproximado}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                {caso.titulo}
              </h1>
              <Badge
                variant="outline"
                className={`text-xs ${getDifficultyColor(caso.nivel_dificultad)}`}
              >
                {caso.nivel_dificultad.charAt(0).toUpperCase() +
                  caso.nivel_dificultad.slice(1)}
              </Badge>
            </div>
            <Button
              onClick={() => setShowSolution(!showSolution)}
              variant={showSolution ? "secondary" : "default"}
              className="flex items-center gap-2 min-h-[44px] w-full sm:w-auto"
            >
              <CheckCircle2 className="h-4 w-4" />
              {showSolution ? "Ocultar solución" : "Ver solución"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Contexto Empresarial */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Contexto Empresarial
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {caso.contexto_empresarial}
              </p>
            </CardContent>
          </Card>

          {/* Producto */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">
                Información del Producto
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground mb-1">
                  Nombre Comercial
                </h4>
                <p className="text-sm sm:text-base text-foreground">
                  {caso.producto.nombre_comercial}
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground mb-1">
                  Descripción Detallada
                </h4>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {caso.producto.descripcion_detallada}
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground mb-1">
                  Uso Previsto
                </h4>
                <p className="text-sm sm:text-base text-foreground/90">
                  {caso.producto.uso_previsto}
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground mb-1">
                  Presentación
                </h4>
                <p className="text-sm sm:text-base text-foreground/90">
                  {caso.producto.presentacion}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tabs para análisis */}
          <Tabs defaultValue="datos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
              <TabsTrigger
                value="datos"
                className="text-xs sm:text-sm py-2 sm:py-3"
              >
                Datos Relevantes
              </TabsTrigger>
              <TabsTrigger
                value="preguntas"
                className="text-xs sm:text-sm py-2 sm:py-3"
              >
                Preguntas
              </TabsTrigger>
              <TabsTrigger
                value="pistas"
                className="text-xs sm:text-sm py-2 sm:py-3"
              >
                Pistas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="datos" className="mt-4">
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-sm sm:text-base">
                    Datos Relevantes
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2">
                    {caso.datos_relevantes.map((dato, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-foreground/90">
                          {dato}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preguntas" className="mt-4">
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Preguntas de Análisis
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {caso.preguntas_analisis.map((pregunta, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="font-semibold text-primary flex-shrink-0 text-xs sm:text-sm">
                          {index + 1}.
                        </span>
                        <span className="text-xs sm:text-sm text-foreground/90">
                          {pregunta}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pistas" className="mt-4">
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                    <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Pistas para la Resolución
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2">
                    {caso.pistas.map((pista, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-foreground/90">
                          {pista}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Solución */}
          {showSolution && (
            <Card className="border-primary/50 bg-primary/5">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Respuesta Esperada
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground mb-1">
                      Fracción Arancelaria
                    </h4>
                    <p className="text-base sm:text-lg font-bold text-primary">
                      {caso.respuesta_esperada.fraccion}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground mb-1">
                      NICO
                    </h4>
                    <p className="text-base sm:text-lg font-bold text-primary">
                      {caso.respuesta_esperada.nico}
                    </p>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground mb-1">
                    Descripción
                  </h4>
                  <p className="text-sm sm:text-base text-foreground">
                    {caso.respuesta_esperada.descripcion_fraccion}
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground mb-2">
                    Justificación
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    {caso.respuesta_esperada.justificacion_resumida}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
