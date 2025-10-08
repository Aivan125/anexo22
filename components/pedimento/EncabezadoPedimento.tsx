"use client";

import { useFormContext } from "react-hook-form";
import { PedimentoField } from "./PedimentoField";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandList,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import * as D from "@/lib/data/catalogs";
import {
  numPedimentoContent,
  tOperContent,
  cvePedimentoContent,
  regimenContent,
  destinoContent,
  tipoCambioContent,
  pesoBrutoContent,
  aduanaContent,
} from "@/lib/data/drawer-content";
import React from "react";
import { SelectViewport } from "@radix-ui/react-select";

const fieldBaseStyle =
  "bg-white w-full h-8 text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 truncate text-left";

const titleCellStyle =
  "bg-gray-600 text-primary-foreground text-center  font-bold text-sm p-3 border-b border-gray-400";

function EncabezadoPedimentoComponent() {
  const { control, setValue } = useFormContext();

  return (
    <div className="bg-white pb-2 border border-black">
      <h2 className={titleCellStyle}>PEDIMENTO</h2>
      <div className="grid grid-cols-24 gap-0 border-collapse">
        {/* Fila 1 */}
        <PedimentoField
          label="NUM. PEDIMENTO"
          name="numPedimento"
          control={control}
          drawerContent={numPedimentoContent}
          className="col-span-5"
        >
          {(field, disabled) => (
            <Input {...field} disabled={disabled} className={fieldBaseStyle} />
          )}
        </PedimentoField>
        <PedimentoField
          label="T.OPER"
          name="tipoOperacion"
          control={control}
          drawerContent={tOperContent}
          className="col-span-6"
        >
          {(field, disabled) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}
            >
              <SelectTrigger className={fieldBaseStyle}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {D.T_OPER_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </PedimentoField>
        <PedimentoField
          label="CVE. PEDIMENTO"
          name="clavePedimento"
          control={control}
          drawerContent={cvePedimentoContent}
          className="col-span-6"
        >
          {(field, disabled) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}
            >
              <SelectTrigger className={fieldBaseStyle}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectViewport>
                  {D.APENDIX_2.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectViewport>
              </SelectContent>
            </Select>
          )}
        </PedimentoField>
        <PedimentoField
          label="REGIMEN"
          name="regimen"
          control={control}
          drawerContent={regimenContent}
          className="col-span-7"
        >
          {(field, disabled) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}
            >
              <SelectTrigger className={fieldBaseStyle}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {D.APENDIX_16.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </PedimentoField>

        {/* Fila 2 */}
        <PedimentoField
          label="DESTINO"
          name="destino"
          control={control}
          drawerContent={destinoContent}
          className="col-span-12"
        >
          {(field, disabled) => (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}
            >
              <SelectTrigger className={fieldBaseStyle}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {D.APENDIX_15.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </PedimentoField>
        <PedimentoField
          label="TIPO DE CAMBIO"
          name="tipoCambio"
          control={control}
          drawerContent={tipoCambioContent}
          className="col-span-6"
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
              className={cn(fieldBaseStyle, "font-bold text-right pr-2")}
            />
          )}
        </PedimentoField>
        <PedimentoField
          label="PESO BRUTO"
          name="pesoBruto"
          control={control}
          drawerContent={pesoBrutoContent}
          className="col-span-6"
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
              className={cn(fieldBaseStyle, "text-right pr-2")}
            />
          )}
        </PedimentoField>
        <PedimentoField
          label="ADUANA"
          name="aduana"
          control={control}
          drawerContent={aduanaContent}
          className="col-span-12"
        >
          {(field, disabled) => (
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between font-normal",
                      fieldBaseStyle
                    )}
                    disabled={disabled}
                  >
                    {field.value
                      ? D.APENDIX_1.find((a) => a.value === field.value)?.label
                      : "Seleccione aduana..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0 max-h-[60vh]">
                  <Command>
                    <CommandInput placeholder="Buscar aduana..." />
                    <CommandList className="max-h-[50vh] overflow-y-auto">
                      <CommandEmpty>No se encontró la aduana.</CommandEmpty>

                      <CommandGroup>
                        {D.APENDIX_1.map((aduana) => (
                          <CommandItem
                            key={aduana.value}
                            value={aduana.label}
                            onSelect={() => {
                              setValue("aduana", aduana.value, {
                                shouldValidate: true,
                              });
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                aduana.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {aduana.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </PedimentoField>
      </div>
    </div>
  );
}

const EncabezadoPedimento = React.memo(EncabezadoPedimentoComponent);

export default EncabezadoPedimento;
