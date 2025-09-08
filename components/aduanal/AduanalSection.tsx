// /src/components/pedimento/PieDePaginaSection.tsx
"use client";

import { useFormContext } from "react-hook-form";
import { PedimentoField } from "@/components/pedimento/PedimentoField";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  agenteNombreDrawer,
  agenteRfcDrawer,
  agenteCurpDrawer,
  mandatarioNombreDrawer,
  mandatarioRfcDrawer,
  mandatarioCurpDrawer,
  patenteDrawer,
} from "@/lib/data/drawer-content";

const fieldBaseStyle =
  "bg-white w-full h-8 text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-1";
const titleCellStyle = (className?: string) =>
  cn("bg-gray-300 text-left font-bold text-sm p-1", className);

export default function AduanalSection() {
  const { control } = useFormContext();

  return (
    <div className="grid grid-cols-12 gap-0 border-t border-gray-400">
      {/* --- Columna Izquierda: Datos del Agente y Mandatario --- */}
      <div className="col-span-6 border-r border-gray-400">
        <div className={titleCellStyle()}>
          AGENTE ADUANAL, APODERADO ADUANAL O EL ALMACEN
        </div>
        <PedimentoField
          label="NOMBRE O RAZ. SOC:"
          name="agenteAduanal.nombreRazonSocial"
          control={control}
          drawerContent={agenteNombreDrawer}
        >
          {(field, disabled) => (
            <Input
              {...field}
              disabled={disabled}
              value={field.value ?? ""}
              className={fieldBaseStyle}
            />
          )}
        </PedimentoField>
        <div className="grid grid-cols-2 gap-px">
          <PedimentoField
            label="RFC"
            name="agenteAduanal.rfc"
            control={control}
            drawerContent={agenteRfcDrawer}
          >
            {(field, disabled) => (
              <Input
                {...field}
                disabled={disabled}
                value={field.value ?? ""}
                className={fieldBaseStyle}
              />
            )}
          </PedimentoField>
          <PedimentoField
            label="CURP"
            name="agenteAduanal.curp"
            control={control}
            drawerContent={agenteCurpDrawer}
          >
            {(field, disabled) => (
              <Input
                {...field}
                disabled={disabled}
                value={field.value ?? ""}
                className={fieldBaseStyle}
              />
            )}
          </PedimentoField>
        </div>

        <div className={titleCellStyle("mt-px")}>
          MANDATARIO / PERSONA AUTORIZADA
        </div>
        <PedimentoField
          label="NOMBRE"
          name="mandatario.nombre"
          control={control}
          drawerContent={mandatarioNombreDrawer}
        >
          {(field, disabled) => (
            <Input
              {...field}
              disabled={disabled}
              value={field.value ?? ""}
              className={fieldBaseStyle}
            />
          )}
        </PedimentoField>
        <div className="grid grid-cols-2 gap-px">
          <PedimentoField
            label="RFC"
            name="mandatario.rfc"
            control={control}
            drawerContent={mandatarioRfcDrawer}
          >
            {(field, disabled) => (
              <Input
                {...field}
                disabled={disabled}
                value={field.value ?? ""}
                className={fieldBaseStyle}
              />
            )}
          </PedimentoField>
          <PedimentoField
            label="CURP"
            name="mandatario.curp"
            control={control}
            drawerContent={mandatarioCurpDrawer}
          >
            {(field, disabled) => (
              <Input
                {...field}
                disabled={disabled}
                value={field.value ?? ""}
                className={fieldBaseStyle}
              />
            )}
          </PedimentoField>
        </div>
      </div>

      {/* --- Columna Derecha: Declaración y Firma --- */}
      <div className="col-span-6 flex flex-col">
        <div className={cn(titleCellStyle(), "text-center")}>
          DECLARO BAJO PROTESTA DE DECIR VERDAD, EN LOS TERMINOS DE LO DISPUESTO
          POR EL ARTICULO 81 DE LA LEY ADUANERA:
        </div>
        <PedimentoField
          label="PATENTE"
          name="patente"
          control={control}
          drawerContent={patenteDrawer}
        >
          {(field, disabled) => (
            <Input
              {...field}
              disabled={disabled}
              value={field.value ?? ""}
              className={fieldBaseStyle}
            />
          )}
        </PedimentoField>
        <div className="flex-grow p-4 flex flex-col items-center justify-center border-t border-gray-400 bg-gray-50">
          <div className="w-full text-center border-b-2 border-dashed border-gray-400 py-4">
            <p className="text-sm font-semibold text-gray-700">
              FIRMA AUTÓGRAFA
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            (Este espacio es solo representativo y no es editable)
          </p>
        </div>
      </div>
    </div>
  );
}
