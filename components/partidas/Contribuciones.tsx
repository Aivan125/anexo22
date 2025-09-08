// /src/components/pedimento/Contribuciones.tsx (Versión Final)
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormMode } from "@/context/FormModeContext";
import { Trash2 } from "lucide-react";
import {
  ControllerRenderProps,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { PedimentoField } from "../pedimento/PedimentoField";

// TODO: Crear estos textos en drawer-content.ts y los catálogos correspondientes
const conDrawer = "Clave de la contribución (Apéndice 12).";
const tasaDrawer = "Tasa aplicable a la contribución.";
const ttDrawer = "Tipo de Tasa (Apéndice 18).";
const fpDrawer = "Forma de Pago (Apéndice 13).";
const importeDrawer = "Importe total de la contribución.";

const fieldBaseStyle =
  "bg-white w-full h-8 text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-1";
const fieldNumericStyle = "text-right";

interface ContribucionesProps {
  partidaIndex: number;
}

export function Contribuciones({ partidaIndex }: ContribucionesProps) {
  const { control } = useFormContext();
  const { mode } = useFormMode();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `partidas.${partidaIndex}.contribuciones`,
  });

  return (
    <div className="col-span-5 border-l border-gray-400">
      <div className="grid grid-cols-5 text-center font-bold text-xs bg-gray-300">
        <div className="border-b border-r border-gray-400 p-1">CON</div>
        <div className="border-b border-r border-gray-400 p-1">TASA</div>
        <div className="border-b border-r border-gray-400 p-1">T.T.</div>
        <div className="border-b border-r border-gray-400 p-1">F.P.</div>
        <div className="border-b border-gray-400 p-1">IMPORTE</div>
      </div>

      {fields.map((fieldItem, contribIndex) => (
        <div key={fieldItem.id} className="grid grid-cols-5 relative group">
          {/* Aquí los campos son Inputs, pero podrían ser Selects si tuvieras los catálogos */}
          <PedimentoField
            label="CON"
            name={`partidas.${partidaIndex}.contribuciones.${contribIndex}.con`}
            control={control}
            drawerContent={conDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Input
                {...field}
                value={field.value ?? ""}
                className={fieldBaseStyle}
                disabled={disabled}
              />
            )}
          </PedimentoField>
          <PedimentoField
            label="TASA"
            name={`partidas.${partidaIndex}.contribuciones.${contribIndex}.tasa`}
            control={control}
            drawerContent={tasaDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Input
                {...field}
                type="number"
                value={field.value ?? ""}
                className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                disabled={disabled}
              />
            )}
          </PedimentoField>
          <PedimentoField
            label="T.T."
            name={`partidas.${partidaIndex}.contribuciones.${contribIndex}.tt`}
            control={control}
            drawerContent={ttDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Input
                {...field}
                value={field.value ?? ""}
                className={fieldBaseStyle}
                disabled={disabled}
              />
            )}
          </PedimentoField>
          <PedimentoField
            label="F.P."
            name={`partidas.${partidaIndex}.contribuciones.${contribIndex}.fp`}
            control={control}
            drawerContent={fpDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Input
                {...field}
                value={field.value ?? ""}
                className={fieldBaseStyle}
                disabled={disabled}
              />
            )}
          </PedimentoField>
          <PedimentoField
            label="IMPORTE"
            name={`partidas.${partidaIndex}.contribuciones.${contribIndex}.importe`}
            control={control}
            drawerContent={importeDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Input
                {...field}
                type="number"
                value={field.value ?? ""}
                className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                disabled={disabled}
              />
            )}
          </PedimentoField>

          {mode === "editing" && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 -top-2 bg-red-100 text-red-500 size-6 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-700"
              onClick={() => remove(contribIndex)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          )}
        </div>
      ))}

      {mode === "editing" && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-1 w-full bg-muted-foreground/90 text-primary-foreground hover:bg-muted-foreground hover:text-primary-foreground"
          onClick={() =>
            append({ con: "", tasa: null, tt: "", fp: "", importe: null })
          }
        >
          Añadir Contribución
        </Button>
      )}
    </div>
  );
}
