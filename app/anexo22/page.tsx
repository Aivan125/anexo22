import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getAllCaseStudies, getUser } from "@/lib/helpers-server";
import { ArrowRight, FileText, Package, Shield } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import type React from "react";
import { CourseMaterial } from "@/components/shared/CourseMaterial";

export default async function Anexo22Page() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const caseStudies = getAllCaseStudies();

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 max-w-7xl relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-4">
            Casos Prácticos Disponibles
          </h1>
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Anexo 22 - Formularios de Pedimento
          </div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Selecciona un caso práctico para comenzar el llenado del formulario
            de pedimento aduanero.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((caseStudy, index) => (
            <Card
              key={caseStudy.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-white/50 overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-primary/80 rounded-xl text-white shadow-lg">
                    <Package className="h-6 w-6" />{" "}
                    {/* Icono genérico por ahora */}
                  </div>
                  <div className="text-2xl font-bold text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {caseStudy.title} {/* <-- Usa el título real del JSON */}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {caseStudy.description}{" "}
                  {/* <-- Usa la descripción real del JSON */}
                </CardDescription>
              </CardHeader>

              {/* He simplificado el CardContent para enfocarnos en lo esencial */}
              <CardContent className="relative flex-grow">
                <p className="text-sm text-slate-500">
                  Haz clic en “Iniciar Llenado” para comenzar a trabajar en este
                  caso práctico.
                </p>
              </CardContent>

              <CardFooter className="relative mt-auto">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href={`/anexo22/${caseStudy.id}`}>
                    <span>Iniciar Llenado</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <CourseMaterial />
        </div>
      </div>
    </div>
  );
}
