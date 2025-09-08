// /src/components/pedimento/TransporteSection.tsx (Versión Refactorizada)
"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as D from "@/lib/data/catalogs";
import {
  transporteArriboDrawer,
  transporteEntradaSalidaDrawer,
  transporteSalidaDrawer,
  valorAduanaDrawer,
  valorComercialDrawer,
  valorDolaresDrawer,
} from "@/lib/data/drawer-content";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { PedimentoField } from "./PedimentoField";

const fieldBaseStyle =
  "bg-white w-full h-full text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-1";
const fieldNumericStyle = "text-right";
// Movimos los bordes del título aquí para tener un solo estilo
const titleCellStyle =
  "bg-gray-600 text-primary-foreground text-center font-bold text-sm flex items-center justify-center p-3";

export function TransporteSection() {
  const { control } = useFormContext();

  return (
    // Definimos un grid real de 2 columnas. La altura de las filas será automática.
    // La primera columna es 2/3 del ancho, la segunda 1/3.
    <div className="grid grid-cols-[2fr_1fr] border-t border-l border-r border-gray-400">
      {/* --- Fila 1: Títulos --- */}
      <div className={cn(titleCellStyle, "border-b border-r border-gray-400")}>
        <p>MEDIOS DE TRANSPORTE</p>
      </div>
      <div className={cn(titleCellStyle, "border-b border-gray-400")}>
        <p>VALORES</p>
      </div>

      {/* --- Fila 2: ENTRADA/SALIDA y VALOR DÓLARES --- */}
      <PedimentoField
        label="ENTRADA/SALIDA"
        name="transporteEntradaSalida"
        control={control}
        drawerContent={transporteEntradaSalidaDrawer}
        className="border-b border-r border-gray-400"
      >
        {(field, disabled) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={disabled}
          >
            <SelectTrigger className={fieldBaseStyle}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {D.MEDIOS_TRANSPORTE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </PedimentoField>
      <PedimentoField
        label="VALOR DÓLARES:"
        name="valorDolares"
        control={control}
        drawerContent={valorDolaresDrawer}
        className="border-b border-gray-400"
      >
        {(field, disabled) => (
          <Input
            {...field}
            type="number"
            disabled={disabled}
            value={field.value !== null ? +field.value : ""}
            className={`${fieldBaseStyle} ${fieldNumericStyle}`}
            onChange={(e) => {
              const value = e.target.value;
              field.onChange(value === "" ? null : parseFloat(value));
            }}
          />
        )}
      </PedimentoField>

      {/* --- Fila 3: ARRIBO y VALOR ADUANA --- */}
      <PedimentoField
        label="ARRIBO"
        name="transporteArribo"
        control={control}
        drawerContent={transporteArriboDrawer}
        className="border-b border-r border-gray-400"
      >
        {(field, disabled) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={disabled}
          >
            <SelectTrigger className={fieldBaseStyle}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {D.MEDIOS_TRANSPORTE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </PedimentoField>
      <PedimentoField
        label="VALOR ADUANA:"
        name="valorAduana"
        control={control}
        drawerContent={valorAduanaDrawer}
        className="border-b border-gray-400"
      >
        {(field, disabled) => (
          <Input
            {...field}
            type="number"
            disabled={disabled}
            value={field.value ?? ""}
            className={`${fieldBaseStyle} ${fieldNumericStyle}`}
            onChange={(e) => {
              const value = e.target.value;
              field.onChange(value === "" ? null : parseFloat(value));
            }}
          />
        )}
      </PedimentoField>

      {/* --- Fila 4: SALIDA y PRECIO PAGADO --- */}
      <PedimentoField
        label="SALIDA"
        name="transporteSalida"
        control={control}
        drawerContent={transporteSalidaDrawer}
        className="border-b border-r border-gray-400"
      >
        {(field, disabled) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={disabled}
          >
            <SelectTrigger className={fieldBaseStyle}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {D.MEDIOS_TRANSPORTE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </PedimentoField>
      <PedimentoField
        label="PRECIO PAGADO/VALOR COMERCIAL"
        name="valorComercial"
        control={control}
        drawerContent={valorComercialDrawer}
        className="border-b border-gray-400"
      >
        {(field, disabled) => (
          <Input
            {...field}
            type="number"
            disabled={disabled}
            value={field.value ?? ""}
            onChange={(e) => {
              const value = e.target.value;
              field.onChange(value === "" ? null : parseFloat(value));
            }}
            className={`${fieldBaseStyle} ${fieldNumericStyle}`}
          />
        )}
      </PedimentoField>
    </div>
  );
}
