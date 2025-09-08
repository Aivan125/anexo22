// /src/components/pedimento/DatosImportadorExportadorSection.tsx
"use client";

import { useFormContext, ControllerRenderProps } from "react-hook-form";
import { PedimentoField } from "@/components/pedimento/PedimentoField";
import { Input } from "@/components/ui/input";
import {
  rfcDrawer,
  curpDrawer,
  nombreDrawer,
  domicilioDrawer,
} from "@/lib/data/drawer-content";

const fieldBaseStyle =
  "bg-white w-full h-8 text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-1";
const titleCellStyle =
  "bg-gray-600 text-primary-foreground text-center font-bold text-sm p-3 border-b border-gray-400";

export function DatosImportadorExportadorSection() {
  const { control } = useFormContext();

  return (
    <div>
      <div className={titleCellStyle}>
        <p>DATOS DEL IMPORTADOR/EXPORTADOR</p>
      </div>
      <div className="grid grid-cols-12 grid-rows-3 gap-0 border-l border-gray-400">
        {/* Fila 1 */}
        <div className="col-span-3">
          <PedimentoField
            label="RFC"
            name="datosImportadorExportador.rfc"
            control={control}
            drawerContent={rfcDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Input
                {...field}
                disabled={disabled}
                value={field.value ?? ""}
                className={fieldBaseStyle}
              />
            )}
          </PedimentoField>
        </div>
        <div className="col-span-9">
          <PedimentoField
            label="NOMBRE, DENOMINACION O RAZON SOCIAL"
            name="datosImportadorExportador.nombre"
            control={control}
            drawerContent={nombreDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Input
                {...field}
                disabled={disabled}
                value={field.value ?? ""}
                className={fieldBaseStyle}
              />
            )}
          </PedimentoField>
        </div>

        {/* Fila 2 */}
        <div className="col-span-12">
          <PedimentoField
            label="CURP"
            name="datosImportadorExportador.curp"
            control={control}
            drawerContent={curpDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Input
                {...field}
                disabled={disabled}
                value={field.value ?? ""}
                className={fieldBaseStyle}
              />
            )}
          </PedimentoField>
        </div>

        {/* Fila 3 */}
        <div className="col-span-12">
          <PedimentoField
            label="DOMICILIO"
            name="datosImportadorExportador.domicilio"
            control={control}
            drawerContent={domicilioDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
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
    </div>
  );
}
