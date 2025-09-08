// src/hooks/useAutosave.ts (Versión Corregida y Optimizada)

import { useEffect, useRef } from "react";
import { UseFormWatch, FieldValues } from "react-hook-form";

type AutosaveProps<T extends FieldValues> = {
  watch: UseFormWatch<T>;
  onSave: (data: T) => Promise<void>;
  debounceMs?: number;
};

export function useAutosave<T extends FieldValues>({
  watch,
  onSave,
  debounceMs = 2000, // Por defecto, 2 segundos
}: AutosaveProps<T>) {
  // Ref para almacenar el ID del timer del debounce.
  // Esto es clave para poder cancelarlo.
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Ref para controlar si es el montaje inicial.
  // Evita que se guarde al cargar los datos por primera vez.
  const isMountedRef = useRef(false);

  useEffect(() => {
    // Suscribirse a los cambios de todos los campos del formulario.
    // Esta suscripción NO causa re-renders en el componente que usa el hook.
    const subscription = watch((value) => {
      // Si el componente aún no se ha "montado" completamente (primer render),
      // no hagas nada.
      if (!isMountedRef.current) {
        return;
      }

      // 1. Si ya existe un timer pendiente, límpialo.
      // Esto es el corazón del debounce.
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // 2. Crea un nuevo timer.
      timeoutRef.current = setTimeout(() => {
        // Cuando el timer se complete, ejecuta la función de guardado.
        onSave(value as T);
      }, debounceMs);
    });

    // Un segundo useEffect para marcar el componente como "montado"
    // DESPUÉS del primer render. Esto es más limpio que usar setTimeout(..., 0).
    const mountTimeout = setTimeout(() => {
      isMountedRef.current = true;
    }, 100); // Un pequeño delay para asegurar que todo esté cargado.

    // Función de limpieza: se ejecuta cuando el componente se desmonta.
    return () => {
      subscription.unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Limpia cualquier timer pendiente al salir
      }
      clearTimeout(mountTimeout);
    };
  }, [watch, onSave, debounceMs]); // Las dependencias del useEffect
}
