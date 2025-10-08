"use client";

import { useFormContext, ControllerRenderProps } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  valSegurosDrawer,
  segurosDrawer,
  fletesDrawer,
  embalajesDrawer,
  otrosIncrementablesDrawer,
  acuseElectronicoDrawer,
  claveSeccionAduaneraDrawer,
  marcasBultosDrawer,
} from "@/lib/data/drawer-content";
import { PedimentoField } from "../pedimento/PedimentoField";

const fieldBaseStyle =
  "bg-white w-full h-8 text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-1";
const fieldNumericStyle = "text-right";
const titleCellStyle =
  "bg-gray-600 text-primary-foreground text-center font-bold text-sm p-3 border-b border-gray-400";

export function IncrementablesSection() {
  const { control } = useFormContext();

  return (
    <div>
      <div className={titleCellStyle}>IMPORTE DE LOS INCREMENTABLES</div>
      <div className="grid grid-cols-5 gap-0 border-l border-b border-gray-400">
        <PedimentoField
          label="VAL. SEGUROS"
          name="incrementables.valSeguros"
          control={control}
          drawerContent={valSegurosDrawer}
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
          label="SEGUROS"
          name="incrementables.seguros"
          control={control}
          drawerContent={segurosDrawer}
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
          label="FLETES"
          name="incrementables.fletes"
          control={control}
          drawerContent={fletesDrawer}
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
          label="EMBALAJES"
          name="incrementables.embalajes"
          control={control}
          drawerContent={embalajesDrawer}
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
          label="OTROS INCREMENTABLES"
          name="incrementables.otros"
          control={control}
          drawerContent={otrosIncrementablesDrawer}
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

      <div className="grid grid-cols-12 gap-0 border-l border-b border-gray-400">
        <div className="col-span-4">
          <PedimentoField
            label="ACUSE ELECTRONICO DE VALIDACION"
            name="acuseValidacion.electronico"
            control={control}
            drawerContent={acuseElectronicoDrawer}
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

        <div className="col-span-2 flex items-center justify-center p-2 border-r border-gray-400 relative">
          {/* Espacio para el código de barras */}
          <Image
            src="/codigo-barras.jpeg"
            alt="Código de barras"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>

        <div className="col-span-6 grid grid-rows-2">
          <PedimentoField
            label="CLAVE DE LA SECCION ADUANERA DE DESPACHO"
            name="seccionAduanera.clave"
            control={control}
            drawerContent={claveSeccionAduaneraDrawer}
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

      <div className="border-l border-b border-r border-gray-400">
        <PedimentoField
          label="MARCAS, NUMERO Y TOTAL DE BULTOS:"
          name="marcasBultos"
          control={control}
          drawerContent={marcasBultosDrawer}
        >
          {(field: ControllerRenderProps, disabled) => (
            <Textarea
              {...field}
              disabled={disabled}
              value={field.value ?? ""}
              className="bg-white border-none focus-visible:ring-0 text-xs h-12"
            />
          )}
        </PedimentoField>
      </div>
    </div>
  );
}
