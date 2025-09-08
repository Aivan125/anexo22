// /src/hooks/useOnlineStatus.ts
"use client";

import { useState, useEffect } from "react";

/**
 * Un hook de React que rastrea el estado de la conexión a internet del navegador.
 * @returns {boolean} - `true` si el navegador está en línea, `false` si está fuera de línea.
 */
export function useOnlineStatus(): boolean {
  // Inicializa el estado con el valor actual de navigator.onLine
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    // Si estamos en el servidor (SSR), no hacer nada.
    if (typeof window === "undefined") {
      return;
    }

    // Funciones para actualizar el estado
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Añade los event listeners al objeto window
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Función de limpieza: se ejecuta cuando el componente que usa el hook se desmonta.
    // Es CRUCIAL para evitar fugas de memoria.
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // El array vacío asegura que el efecto solo se ejecute al montar y desmontar.

  return isOnline;
}
