"use client";

import { cn } from "@/lib/utils";
import {
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CheckCircle2, HelpCircle, XCircle } from "lucide-react";
import React from "react";
import {
  type Control,
  type ControllerRenderProps,
  type FieldValues,
} from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { useFormMode } from "@/context/FormModeContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate } from "date-fns";

interface PedimentoFieldProps {
  label: string;
  name: string;
  control: Control<FieldValues>;
  drawerContent: string;
  className?: string;
  children: (
    field: ControllerRenderProps,
    disabled: boolean
  ) => React.ReactNode;
}

type FormValue =
  | string
  | number
  | boolean
  | Date
  | null
  | undefined
  | FormValue[]
  | { [key: string]: FormValue };

type Indexable = { [key: string]: FormValue };

export function getValueByPath(obj: object, path: string): FormValue {
  const keys = path.split(".");

  return keys.reduce((currentValue: FormValue, currentKey: string) => {
    // Verificación de seguridad en cada paso:
    // 1. Si el valor actual no es un objeto, no podemos seguir navegando.
    if (typeof currentValue !== "object" || currentValue === null) {
      return undefined;
    }

    // 2. Aserción de tipo segura: Le decimos a TypeScript que trate
    //    'currentValue' como un objeto indexable.
    const currentObj = currentValue as Indexable;

    // 3. Verificamos si la clave actual existe en el objeto actual de forma segura.
    if (!Object.prototype.hasOwnProperty.call(currentObj, currentKey)) {
      return undefined;
    }

    // Si todas las comprobaciones pasan, devolvemos el siguiente valor en la cadena.
    return currentObj[currentKey];
  }, obj as FormValue);
}

export function PedimentoField({
  label,
  name,
  control,
  drawerContent,
  className,
  children,
}: PedimentoFieldProps) {
  const { mode, evaluationResult, correctAnswers } = useFormMode();
  const isReviewing = mode === "reviewing";

  const result = evaluationResult
    ? evaluationResult[name as keyof typeof evaluationResult]
    : undefined;
  return (
    <div
      className={cn(
        "relative border border-gray-500 p-2 flex items-center bg-gray-200",
        className
      )}
    >
      <span className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-gray-700 font-bold tracking-wider">
        {label}
      </span>
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <HelpCircle className="h-4 w-4 text-gray-500 hover:text-blue-600 cursor-pointer flex-shrink-0 mr-1" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{label}</DrawerTitle>
            <div className="text-left prose prose-sm max-w-none px-4 text-sm text-muted-foreground">
              <ReactMarkdown>{drawerContent}</ReactMarkdown>
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>

      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full flex items-center gap-2 min-w-0">
            {/* Le pasamos el estado 'disabled' al hijo */}
            <FormControl className="flex-grow min-w-0">
              {children(field, isReviewing)}
            </FormControl>

            {/* LÓGICA PARA MOSTRAR ÍCONOS DE RESULTADO */}
            {isReviewing && (
              <div className="flex-shrink-0">
                {result === true && (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                )}
                {result === false && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <XCircle className="size-5 text-red-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tu respuesta: {field.value || "Vacío"}</p>
                        <p>
                          Respuesta correcta:{" "}
                          {(() => {
                            if (!correctAnswers) return "N/A";

                            // 'answer' ahora es de tipo 'unknown'
                            const answer = getValueByPath(correctAnswers, name);

                            // --- VERIFICACIÓN DE TIPO ---
                            if (answer === undefined) {
                              return "N/A";
                            }

                            // Si es un objeto (pero no una fecha), lo convertimos a string
                            if (
                              typeof answer === "object" &&
                              answer !== null &&
                              !(answer instanceof Date)
                            ) {
                              return JSON.stringify(answer);
                            }

                            // Si es una fecha, la formateamos
                            if (answer instanceof Date) {
                              // Importa 'format' de 'date-fns' si no lo tienes ya
                              // import { format } from "date-fns";
                              return formatDate(answer, "dd/MM/yyyy");
                            }

                            // Para cualquier otro tipo (string, number, boolean), lo convertimos a string
                            return String(answer);
                          })()}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            )}

            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </div>
  );
}
