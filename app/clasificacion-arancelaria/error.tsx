"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error en clasificación arancelaria:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <CardTitle className="text-xl sm:text-2xl">Algo salió mal</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Ocurrió un error al cargar esta página. Por favor, intenta
            nuevamente.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          <Button onClick={reset} className="w-full min-h-[44px]">
            Intentar de nuevo
          </Button>
          <Button variant="outline" asChild className="w-full min-h-[44px]">
            <Link href="/clasificacion-arancelaria">Volver al inicio</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
