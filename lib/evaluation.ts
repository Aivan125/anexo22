import isEqual from "lodash/isEqual";
import { PedimentoFormValues, EvaluationResult } from "@/types/pedimento";
import { format, isValid } from "date-fns";

// Usaremos 'unknown' para máxima seguridad y flexibilidad en la recursión.
type FormValue = unknown;
type Indexable = Record<string, FormValue>;

export function compareAnswers(
  userAnswers: PedimentoFormValues,
  correctAnswers: PedimentoFormValues
): EvaluationResult {
  const result: EvaluationResult = {};

  const traverseAndCompare = (
    userValue: FormValue,
    correctValue: FormValue,
    path: string
  ) => {
    // REGLA DE NEGOCIO: No evaluar la clave 'partidas'.
    // Esto se maneja ahora dentro de la recursión para cubrir todos los niveles.
    if (path.endsWith("partidas")) {
      return;
    }

    // --- MANEJO DE ARRAYS ---
    if (Array.isArray(correctValue)) {
      const userArray = Array.isArray(userValue) ? userValue : [];
      correctValue.forEach((correctItem, index) => {
        // --- ¡CORRECCIÓN CLAVE AQUÍ! ---
        // Volvemos a usar la notación de punto para los índices.
        const itemPath = `${path}.${index}`;
        traverseAndCompare(userArray[index], correctItem, itemPath);
      });
      return;
    }

    // --- MANEJO DE OBJETOS ---
    if (
      typeof correctValue === "object" &&
      correctValue !== null &&
      !(correctValue instanceof Date)
    ) {
      const userObj =
        typeof userValue === "object" && userValue !== null ? userValue : {};
      for (const key in correctValue) {
        if (Object.prototype.hasOwnProperty.call(correctValue, key)) {
          const newPath = path ? `${path}.${key}` : key;
          // Aserción segura a Indexable para acceder a las claves.
          traverseAndCompare(
            (userObj as Indexable)[key],
            (correctValue as Indexable)[key],
            newPath
          );
        }
      }
      return;
    }

    // --- MANEJO DE VALORES PRIMITIVOS Y FECHAS ---
    if (path.endsWith(".fecha")) {
      // El valor del usuario es un objeto Date o un string ISO
      const userDate = userValue ? new Date(userValue as string | Date) : null;
      // El valor correcto ahora es un string 'YYYY-MM-DD' del JSON
      const correctDateString = correctValue as string | null;

      // Comprobamos que ambos valores sean válidos para comparar
      if (isValid(userDate) && correctDateString) {
        // Formateamos la fecha del usuario al mismo formato 'yyyy-MM-dd'
        const userDateString = format(userDate as Date, "yyyy-MM-dd");

        // Comparamos los dos strings directamente. Esto ignora la zona horaria.
        result[path as keyof EvaluationResult] =
          userDateString === correctDateString;
      } else {
        // Si uno o ambos no son válidos, usamos isEqual para la comparación (ej. null === null)
        result[path as keyof EvaluationResult] = isEqual(
          userValue,
          correctValue
        );
      }
    } else {
      // Para todos los demás campos, usamos la lógica de comparación profunda por defecto.
      result[path as keyof EvaluationResult] = isEqual(userValue, correctValue);
    }
  };

  // --- PUNTO DE ENTRADA ---
  // Aserción de tipo en el inicio: le decimos a TS que trate los objetos
  // del formulario como 'unknown' para que la función recursiva los acepte.
  traverseAndCompare(userAnswers as unknown, correctAnswers as unknown, "");

  return result;
}
