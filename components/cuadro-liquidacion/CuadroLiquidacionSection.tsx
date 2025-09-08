"use client";

import {
  useFormContext,
  useFieldArray,
  ControllerRenderProps,
} from "react-hook-form";
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
import { PlusCircle, Trash2 } from "lucide-react";
import { liquidacionDefault } from "@/types/pedimento";
import * as D from "@/lib/data/catalogs";
import {
  liquidacionConceptoDrawer,
  liquidacionFpDrawer,
  liquidacionImporteDrawer,
  totalesEfectivoDrawer,
  totalesOtrosDrawer,
  totalesTotalDrawer,
} from "@/lib/data/drawer-content";
import { cn } from "@/lib/utils";
import { useFormMode } from "@/context/FormModeContext";

const fieldBaseStyle =
  "bg-white w-full  text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-1";
const titleCellStyle =
  "bg-gray-600 text-primary-foreground text-center font-bold text-sm p-3";
const fieldNumericStyle = "text-right";

export function CuadroLiquidacionSection() {
  const { mode } = useFormMode();
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "cuadroLiquidacion",
  });

  return (
    <div>
      <div className={cn(titleCellStyle, "border-b border-t border-gray-400")}>
        CUADRO DE LIQUIDACION
      </div>
      <div className="grid grid-cols-12 gap-0 border-l border-gray-400">
        {/* --- Tabla Dinámica de Liquidación --- */}
        <div className="col-span-9 border-r border-gray-400">
          <div className="grid grid-cols-6 text-center font-bold text-xs bg-gray-200">
            <div className="col-span-2 p-1 border-r border-b border-gray-400">
              CONCEPTO
            </div>
            <div className="col-span-2 p-1 border-r border-b border-gray-400">
              F.P.
            </div>
            <div className="col-span-2 p-1 border-b border-gray-400">
              IMPORTE
            </div>
          </div>
          <div className="mb-2 flex flex-col items-center justify-center">
            {fields.map((fieldItem, index) => (
              <div
                key={fieldItem.id}
                className="grid grid-cols-6 w-full relative group"
              >
                <div className="col-span-2">
                  <PedimentoField
                    label="CONCEPTO"
                    name={`cuadroLiquidacion.${index}.concepto`}
                    control={control}
                    drawerContent={liquidacionConceptoDrawer}
                    className="pr-10"
                  >
                    {(field: ControllerRenderProps, disabled) => (
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
                </div>
                <div className="col-span-2">
                  <PedimentoField
                    label="F.P."
                    name={`cuadroLiquidacion.${index}.fp`}
                    control={control}
                    drawerContent={liquidacionFpDrawer}
                    className="pr-10"
                  >
                    {(field: ControllerRenderProps, disabled) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disabled}
                      >
                        <SelectTrigger className={fieldBaseStyle}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {D.APENDIX_13.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </PedimentoField>
                </div>
                <div className="col-span-2">
                  <PedimentoField
                    label="IMPORTE"
                    name={`cuadroLiquidacion.${index}.importe`}
                    control={control}
                    drawerContent={liquidacionImporteDrawer}
                  >
                    {(field: ControllerRenderProps, disabled) => (
                      <Input
                        {...field}
                        disabled={disabled}
                        type="number"
                        value={field.value ?? ""}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(
                            value === "" ? null : parseFloat(value)
                          );
                        }}
                        className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                      />
                    )}
                  </PedimentoField>
                </div>
                {mode === "editing" && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 -top-2 bg-red-100 text-red-500 size-6 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-700"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            {fields.length < 5 && mode === "editing" && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-1/2 mt-1 bg-muted-foreground/90 text-primary-foreground hover:bg-muted-foreground hover:text-primary-foreground"
                onClick={() => append(liquidacionDefault)}
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Añadir Concepto
              </Button>
            )}
          </div>
        </div>

        {/* --- Sección de Totales --- */}
        <div className="col-span-3">
          <div
            className={cn(titleCellStyle, "border-b border-r border-gray-400")}
          >
            TOTALES
          </div>
          <PedimentoField
            label="EFECTIVO"
            name="totales.efectivo"
            control={control}
            drawerContent={totalesEfectivoDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
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
          <PedimentoField
            label="OTROS"
            name="totales.otros"
            control={control}
            drawerContent={totalesOtrosDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
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
          <PedimentoField
            label="TOTAL"
            name="totales.total"
            control={control}
            drawerContent={totalesTotalDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
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
        </div>
      </div>
    </div>
  );
}

{
  /* <Button
type="button"
variant="ghost"
size="icon"
className="absolute right-0 -top-2 bg-red-100 text-red-500 size-6 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-700"
onClick={() => remove(index)}
>
<Trash2 className="h-4 w-4" />
</Button> */
}
