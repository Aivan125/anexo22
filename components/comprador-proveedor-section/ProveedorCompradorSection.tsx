"use client";

import { useFormContext, ControllerRenderProps } from "react-hook-form";

import { Input } from "@/components/ui/input";
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
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import * as D from "@/lib/data/catalogs";
import {
  idFiscalDrawer,
  nombreProveedorDrawer,
  domicilioProveedorDrawer,
  vinculacionDrawer,
  numFacturaDrawer,
  fechaFacturaDrawer,
  incotermDrawer,
  monedaDrawer,
  valMonFactDrawer,
  factorMonFactDrawer,
  valDolaresFacturaDrawer,
  transporteIdDrawer,
  transportePaisDrawer,
  transportistaNombreDrawer,
  transportistaRfcDrawer,
  transportistaCurpDrawer,
  transportistaDomicilioDrawer,
  noCandadoDrawer,
  contenedorNumeroDrawer,
  contenedorTipoDrawer,
} from "@/lib/data/drawer-content";
import { PedimentoField } from "../pedimento/PedimentoField";

const fieldBaseStyle =
  "bg-white w-full h-8 text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-1";
const fieldNumericStyle = "text-right";
const titleCellStyle = (className?: string) =>
  cn(
    "bg-gray-600 text-primary-foreground text-center font-bold text-sm p-3",
    className
  );

export function ProveedorCompradorSection() {
  const { control } = useFormContext();

  return (
    <div>
      <div className={titleCellStyle()}>DATOS DEL PROVEEDOR O COMPRADOR</div>

      <div className="grid grid-cols-12 gap-0 border-l border-b border-gray-400">
        <PedimentoField
          label="ID. FISCAL"
          name="proveedorComprador.idFiscal"
          control={control}
          drawerContent={idFiscalDrawer}
          className="col-span-2"
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
        <PedimentoField
          label="NOMBRE, DENOMINACION O RAZON SOCIAL"
          name="proveedorComprador.nombre"
          control={control}
          drawerContent={nombreProveedorDrawer}
          className="col-span-5"
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
        <PedimentoField
          label="DOMICILIO"
          name="proveedorComprador.domicilio"
          control={control}
          drawerContent={domicilioProveedorDrawer}
          className="col-span-4"
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
        <PedimentoField
          label="VINCULACION"
          name="proveedorComprador.vinculacion"
          control={control}
          drawerContent={vinculacionDrawer}
          className="col-span-1"
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
                {D.VINCULACION_SI_NO_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </PedimentoField>
      </div>

      <div className="grid grid-cols-4 gap-0 border-l border-b border-gray-400">
        <PedimentoField
          label="NUM. FACTURA"
          name="facturas.numero"
          control={control}
          drawerContent={numFacturaDrawer}
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
          label="FECHA"
          name="facturas.fecha"
          control={control}
          className="pr-10"
          drawerContent={fechaFacturaDrawer}
        >
          {(field, disabled) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  disabled={disabled}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground",
                    fieldBaseStyle
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    format(field.value, "dd/MM/yyyy")
                  ) : (
                    <span>Seleccione</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          )}
        </PedimentoField>
        <PedimentoField
          label="INCOTERM"
          name="facturas.incoterm"
          control={control}
          drawerContent={incotermDrawer}
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
                {D.APENDIX_14.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </PedimentoField>
        <PedimentoField
          label="MONEDA"
          name="facturas.moneda"
          control={control}
          drawerContent={monedaDrawer}
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
                {D.APENDIX_5.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </PedimentoField>
        <PedimentoField
          label="VAL. MON. FACT"
          name="facturas.valMonFact"
          control={control}
          drawerContent={valMonFactDrawer}
        >
          {(field, disabled) => (
            <Input
              {...field}
              disabled={disabled}
              type="number"
              value={field.value ?? ""}
              className={`${fieldBaseStyle} ${fieldNumericStyle}`}
              onChange={(e) => {
                const value = e.target.value;
                field.onChange(value === "" ? null : parseFloat(value));
              }}
            />
          )}
        </PedimentoField>
        <PedimentoField
          label="FACTOR MON. FACT"
          name="facturas.factorMonFact"
          control={control}
          drawerContent={factorMonFactDrawer}
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
        <PedimentoField
          label="VAL. DOLARES"
          name="facturas.valDolares"
          control={control}
          drawerContent={valDolaresFacturaDrawer}
          className="col-span-2"
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
      </div>

      <div className={titleCellStyle("border-b border-gray-400")}>
        TRANSPORTE
      </div>
      <div className="grid grid-cols-12 gap-0 border-l border-b border-gray-400">
        <PedimentoField
          label="IDENTIFICACION:"
          name="transporte.identificacion"
          control={control}
          drawerContent={transporteIdDrawer}
          className="col-span-3"
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
          label="PAIS:"
          name="transporte.pais"
          control={control}
          drawerContent={transportePaisDrawer}
          className="col-span-2"
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
                {D.APENDIX_4.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </PedimentoField>
        <PedimentoField
          label="TRANSPORTISTA"
          name="transporte.transportistaNombre"
          control={control}
          drawerContent={transportistaNombreDrawer}
          className="col-span-3"
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
          label="RFC"
          name="transporte.rfc"
          control={control}
          drawerContent={transportistaRfcDrawer}
          className="col-span-2"
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
          name="transporte.curp"
          control={control}
          drawerContent={transportistaCurpDrawer}
          className="col-span-2"
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

      <div className="grid grid-cols-4 gap-0 border-l border-b border-r border-gray-400">
        <PedimentoField
          label="DOMICILIO"
          name="transporte.domicilio"
          control={control}
          drawerContent={transportistaDomicilioDrawer}
          className="col-span-2"
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
          label="NO. DE CANDADO:"
          name="candadosContenedores.noCandado"
          control={control}
          drawerContent={noCandadoDrawer}
          className="col-span-2"
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
          label="NUMERO / TIPO DE CONTENEDOR:"
          name="candadosContenedores.numeroContenedor"
          control={control}
          drawerContent={contenedorNumeroDrawer}
          className="col-span-2"
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
          label="TIPO CONTENEDOR"
          name="candadosContenedores.tipoContenedor"
          control={control}
          drawerContent={contenedorTipoDrawer}
          className="col-span-2"
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
                {D.APENDIX_10.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </PedimentoField>
      </div>
    </div>
  );
}
