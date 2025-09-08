"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-pink-100/20 blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="relative mb-8">
          <Image
            src="/logo/ANMIN-CADISA_sin_fondo.png"
            alt="Ilustración de error"
            className="mx-auto h-80 w-80 object-contain drop-shadow-lg"
            width={500}
            height={500}
          />
        </div>

        {/* Contenido del error */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-6xl font-bold text-transparent">
              ¡Oops!
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              Algo salió mal
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-600">
              Hemos encontrado un error inesperado. Nuestro equipo ha sido
              notificado.
            </p>

            <div className="rounded-2xl border border-pink-200/50 bg-white/60 p-6 shadow-lg backdrop-blur-sm">
              {isDevelopment && (
                <div className="mb-4 text-left">
                  <p className="mb-1 font-mono text-sm text-gray-500">
                    Mensaje de Error (solo para desarrollo):
                  </p>
                  <pre className="rounded-md bg-rose-50 p-2 font-mono text-xs whitespace-pre-wrap text-rose-800">
                    <code>{error.message}</code>
                  </pre>
                </div>
              )}

              <p className="text-sm text-gray-500">
                ID de Referencia: {error.digest || "N/A"}
              </p>

              <p className="mt-4 text-gray-700">
                Puedes intentar recargar la página o volver al inicio.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <Button
              onClick={() => reset()}
              className="transform rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-rose-600 hover:shadow-xl"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Intentar de nuevo
            </Button>

            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")}
              className="rounded-full border-2 border-pink-300 px-8 py-3 font-medium text-pink-700 transition-all duration-300 hover:border-pink-400 hover:bg-pink-50"
            >
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-gray-500">
              ¿Necesitas ayuda? Contáctanos en{" "}
              <a
                href="mailto:pimefy@gmail.com"
                className="font-medium text-pink-600 underline decoration-pink-300 transition-colors hover:text-pink-700 hover:decoration-pink-500"
              >
                pimefy@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-20 h-3 w-3 animate-pulse rounded-full bg-pink-400"></div>
      <div className="absolute top-40 right-32 h-2 w-2 animate-pulse rounded-full bg-rose-400 delay-1000"></div>
      <div className="absolute bottom-32 left-40 h-4 w-4 animate-pulse rounded-full bg-pink-300 delay-500"></div>
      <div className="absolute right-20 bottom-20 h-2 w-2 animate-pulse rounded-full bg-rose-300 delay-700"></div>
    </div>
  );
}
