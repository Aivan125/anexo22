"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { PedimentoField } from "../pedimento/PedimentoField";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, PlusCircle, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import * as D from "@/lib/data/catalogs";
import { tasaNivelPedimentoDefault, fechaDefault } from "@/types/pedimento";
import {
  contribucionTasaDrawer,
  cveTTasaDrawer,
  tasaDrawer,
} from "@/lib/data/drawer-content";
import { useFormMode } from "@/context/FormModeContext";

const fieldBaseStyle =
  "bg-white w-full h-8 text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-1";
const titleCellStyle =
  "bg-gray-600 text-primary-foreground text-center font-bold text-sm p-3 border-b border-gray-400";
const fieldNumericStyle = "text-left";
const tipoFechaDrawer =
  "Seleccione el tipo de fecha a declarar, conforme al instructivo.";
const fechaDrawer = "Seleccione la fecha correspondiente al tipo seleccionado.";

export function FechasTasasSection() {
  const { control } = useFormContext();
  const { mode } = useFormMode();

  const {
    fields: fechaFields,
    append: appendFecha,
    remove: removeFecha,
  } = useFieldArray({ control, name: "fechas" });
  const {
    fields: tasaFields,
    append: appendTasa,
    remove: removeTasa,
  } = useFieldArray({ control, name: "tasasNivelPedimento" });

  return (
    <div>
      <div className="grid grid-cols-12 gap-0 border-l border-b border-r border-gray-400">
        {/* --- Títulos --- */}
        <div
          className={cn(titleCellStyle, "col-span-5 border-r border-gray-400")}
        >
          FECHAS
        </div>
        <div className={cn(titleCellStyle, "col-span-7")}>
          TASA A NIVEL PEDIMENTO
        </div>
      </div>

      {/* --- Contenido de Filas Dinámicas --- */}
      <div className="grid grid-cols-12 gap-0 border-l border-b border-r border-gray-400">
        {/* Columna Izquierda para Fechas */}
        <div className="col-span-5 border-r border-gray-400">
          {fechaFields.map((fieldItem, index) => (
            <div
              key={fieldItem.id}
              className="grid grid-cols-2  relative group "
            >
              <PedimentoField
                label="TIPO"
                name={`fechas.${index}.tipo`}
                control={control}
                drawerContent={tipoFechaDrawer}
              >
                {(field, disabled) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={disabled}
                  >
                    <SelectTrigger className={fieldBaseStyle}>
                      <SelectValue placeholder="Tipo..." />
                    </SelectTrigger>
                    <SelectContent>
                      {D.TIPOS_FECHA_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </PedimentoField>
              <PedimentoField
                label="FECHA"
                name={`fechas.${index}.fecha`}
                control={control}
                drawerContent={fechaDrawer}
                className={"h-full min-w-0 pr-8"}
              >
                {(field, disabled) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        disabled={disabled}
                        className={cn(
                          " w-full h-full bg-red-500 justify-start text-left font-normal",
                          !field.value && "text-muted-foreground",
                          fieldBaseStyle
                        )}
                      >
                        <CalendarIcon className="mr-2 size-4" />
                        {field.value ? (
                          format(new Date(field.value), "dd/MM/yyyy")
                        ) : (
                          <span>Seleccione</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              </PedimentoField>
              {mode === "editing" && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 -top-2 bg-red-100 text-red-500 size-6 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-700"
                  onClick={() => removeFecha(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          {fechaFields.length < 3 && mode === "editing" && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => appendFecha(fechaDefault)}
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Añadir Fecha
            </Button>
          )}
        </div>

        {/* Columna Derecha para Tasas */}
        <div className="col-span-7 p-2 space-y-2 ">
          {tasaFields.map((fieldItem, index) => (
            <div
              key={fieldItem.id}
              className="grid grid-cols-1  relative group"
            >
              <PedimentoField
                label="CONTRIB"
                name={`tasasNivelPedimento.${index}.contrib`}
                control={control}
                drawerContent={contribucionTasaDrawer}
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
                      {D.APENDIX_12.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </PedimentoField>
              <PedimentoField
                label="CVE. T.TASA"
                name={`tasasNivelPedimento.${index}.cveTTasa`}
                control={control}
                drawerContent={cveTTasaDrawer}
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
                      {D.APENDIX_18.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </PedimentoField>
              <PedimentoField
                label="TASA"
                name={`tasasNivelPedimento.${index}.tasa`}
                control={control}
                drawerContent={tasaDrawer}
              >
                {(field, disabled) => (
                  <Input
                    {...field}
                    disabled={disabled}
                    type="number"
                    value={field.value ?? ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === "" ? null : parseFloat(value));
                    }}
                    className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                  />
                )}
              </PedimentoField>
              {mode === "editing" && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 -top-2 bg-red-100 text-red-500 size-6 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-700"
                  onClick={() => removeTasa(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          {tasaFields.length < 5 && mode === "editing" && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-1/2 mt-1 bg-muted-foreground/90 text-primary-foreground hover:bg-muted-foreground hover:text-primary-foreground"
              onClick={() => appendTasa(tasaNivelPedimentoDefault)}
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Añadir Tasa
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
