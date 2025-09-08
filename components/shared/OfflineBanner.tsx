// /src/components/ui/OfflineBanner.tsx
"use client";

import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { WifiOff } from "lucide-react";
import { useEffect, useState } from "react";

export function OfflineBanner() {
  const isOnline = useOnlineStatus();
  const [isClient, setIsClient] = useState(false);

  // useEffect solo se ejecuta en el cliente, después del primer render.
  useEffect(() => {
    setIsClient(true);
  }, []); // El array vacío asegura que solo se ejecute una vez.

  // 1. Si no estamos en el cliente todavía, O si estamos en línea, no renderizamos nada.
  //    Esto garantiza que el renderizado inicial del cliente coincida con el del servidor.
  if (!isClient || isOnline) {
    return null;
  }

  // Si estamos fuera de línea, mostramos la barra de alerta.
  return (
    <div
      role="status"
      className="fixed top-20 left-0 right-0 z-50 bg-red-600 text-white text-sm font-semibold p-2 flex items-center justify-center shadow-lg"
    >
      <WifiOff className="mr-2 h-4 w-4" />
      Estás sin conexión. Es posible que tus cambios no se guarden.
    </div>
  );
}
