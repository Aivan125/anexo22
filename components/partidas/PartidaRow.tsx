"use client";

import { useFormContext, ControllerRenderProps } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from "lucide-react";
import * as D from "@/lib/data/catalogs";
import {
  secDrawer,
  fraccionDrawer,
  subdDrawer,
  vincDrawer,
  metValDrawer,
  umcDrawer,
  cantUmcDrawer,
  umtDrawer,
  cantUmtDrawer,
  pvcDrawer,
  podDrawer,
  descDrawer,
  valAduUsdDrawer,
  impPrecioPagDrawer,
  precioUnitDrawer,
  valAgregDrawer,
  permisoDrawer,
  numPermisoDrawer,
  firmaPermisoDrawer,
  valComDlsDrawer,
  cantidadUmtPermisoDrawer,
  identifDrawer,
  complemento1Drawer,
  complemento2Drawer,
  observacionesDrawer,
} from "@/lib/data/drawer-content";
import { Contribuciones } from "./Contribuciones";
import { useFormMode } from "@/context/FormModeContext";

const fieldBaseStyle =
  "bg-white w-full h-8 text-xs border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-1";
const fieldNumericStyle = "text-right";

interface PartidaRowProps {
  index: number;
  remove: (index: number) => void;
}

export function PartidaRow({ index, remove }: PartidaRowProps) {
  const { control } = useFormContext();
  const { mode } = useFormMode();

  return (
    <div className="border border-gray-400 p-2 bg-gray-50">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-gray-500">Partida #{index + 1}</span>
        {mode === "editing" && (
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="h-6 w-6"
            onClick={() => remove(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-12 gap-x-2">
        {/* --- Columna Izquierda: Datos de la Partida (ocupa 7 de 12 columnas) --- */}
        <div className="col-span-7 flex flex-col gap-px">
          {/* --- Grupo 1: Identificación Principal --- */}
          <div className="grid grid-cols-12 gap-px">
            <PedimentoField
              label="SEC"
              name={`partidas.${index}.sec`}
              control={control}
              drawerContent={secDrawer}
            >
              {(field: ControllerRenderProps) => (
                <Input
                  {...field}
                  value={index + 1}
                  disabled
                  className={fieldBaseStyle}
                />
              )}
            </PedimentoField>
            <PedimentoField
              label="FRACCIÓN"
              name={`partidas.${index}.fraccion`}
              control={control}
              drawerContent={fraccionDrawer}
              className="col-span-2"
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
              label="SUBD."
              name={`partidas.${index}.subd`}
              control={control}
              drawerContent={subdDrawer}
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
              label="VINC"
              name={`partidas.${index}.vinc`}
              control={control}
              drawerContent={vincDrawer}
              className="col-span-3"
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
                    {D.VINCULACION_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </PedimentoField>
            <PedimentoField
              label="MET VAL"
              name={`partidas.${index}.metVal`}
              control={control}
              drawerContent={metValDrawer}
              className="col-span-3"
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
                    {D.APENDIX_11.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </PedimentoField>
            <PedimentoField
              label="UMC"
              name={`partidas.${index}.umc`}
              control={control}
              drawerContent={umcDrawer}
              className="col-span-2"
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
                    {D.APENDIX_7.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </PedimentoField>
          </div>

          <div className="grid grid-cols-12 gap-px">
            <PedimentoField
              label="CANT UMC"
              name={`partidas.${index}.cantUmc`}
              control={control}
              drawerContent={cantUmcDrawer}
              className="col-span-2"
            >
              {(field: ControllerRenderProps, disabled) => (
                <Input
                  {...field}
                  type="number"
                  disabled={disabled}
                  value={field.value ?? ""}
                  className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                />
              )}
            </PedimentoField>
            <PedimentoField
              label="UMT"
              name={`partidas.${index}.umt`}
              control={control}
              drawerContent={umtDrawer}
              className="col-span-2"
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
                    {D.APENDIX_7.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </PedimentoField>
            <PedimentoField
              label="CANT UMT"
              name={`partidas.${index}.cantUmt`}
              control={control}
              drawerContent={cantUmtDrawer}
              className="col-span-2"
            >
              {(field: ControllerRenderProps, disabled) => (
                <Input
                  {...field}
                  type="number"
                  disabled={disabled}
                  value={field.value ?? ""}
                  className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                />
              )}
            </PedimentoField>
            <PedimentoField
              label="P.V/C"
              name={`partidas.${index}.pvc`}
              control={control}
              drawerContent={pvcDrawer}
              className="col-span-3"
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
              label="P.O/D"
              name={`partidas.${index}.pod`}
              control={control}
              drawerContent={podDrawer}
              className="col-span-3"
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
                    {D.APENDIX_4.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </PedimentoField>
          </div>

          {/* --- GRUPO 2: Descripción y Valores --- */}
          <PedimentoField
            label="DESCRIPCIÓN"
            name={`partidas.${index}.descripcion`}
            control={control}
            drawerContent={descDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Textarea
                {...field}
                value={field.value ?? ""}
                disabled={disabled}
                className="bg-white border-none focus-visible:ring-0 text-xs h-16"
              />
            )}
          </PedimentoField>
          <div className="grid grid-cols-4 gap-px">
            <PedimentoField
              label="VAL. ADU./USD"
              name={`partidas.${index}.valAduUsd`}
              control={control}
              drawerContent={valAduUsdDrawer}
            >
              {(field: ControllerRenderProps, disabled) => (
                <Input
                  {...field}
                  type="number"
                  disabled={disabled}
                  value={field.value ?? ""}
                  className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                />
              )}
            </PedimentoField>
            <PedimentoField
              label="IMP. PRECIO PAG."
              name={`partidas.${index}.impPrecioPag`}
              control={control}
              drawerContent={impPrecioPagDrawer}
            >
              {(field: ControllerRenderProps, disabled) => (
                <Input
                  {...field}
                  type="number"
                  disabled={disabled}
                  value={field.value ?? ""}
                  className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                />
              )}
            </PedimentoField>
            <PedimentoField
              label="PRECIO UNIT."
              name={`partidas.${index}.precioUnit`}
              control={control}
              drawerContent={precioUnitDrawer}
            >
              {(field: ControllerRenderProps, disabled) => (
                <Input
                  {...field}
                  type="number"
                  disabled={disabled}
                  value={field.value ?? ""}
                  className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                />
              )}
            </PedimentoField>
            <PedimentoField
              label="VAL. AGREG."
              name={`partidas.${index}.valAgreg`}
              control={control}
              drawerContent={valAgregDrawer}
            >
              {(field: ControllerRenderProps, disabled) => (
                <Input
                  {...field}
                  type="number"
                  disabled={disabled}
                  value={field.value ?? ""}
                  className={`${fieldBaseStyle} ${fieldNumericStyle}`}
                />
              )}
            </PedimentoField>
          </div>

          {/* --- GRUPO 3: Permisos e Identificadores --- */}
          <div className="grid grid-cols-5 gap-px">
            <PedimentoField
              label="PERMISO"
              name={`partidas.${index}.permiso`}
              control={control}
              drawerContent={permisoDrawer}
            >
              {(field: ControllerRenderProps, disabled) => (
                <Input
                  {...field}
                  value={field.value ?? ""}
                  disabled={disabled}
                  className={fieldBaseStyle}
                />
              )}
            </PedimentoField>
            <PedimentoField
              label="NÚMERO DE PERMISO"
              name={`partidas.${index}.numPermiso`}
              control={control}
              drawerContent={numPermisoDrawer}
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
              label="FIRMA DE PERMISO"
              name={`partidas.${index}.firmaPermiso`}
              control={control}
              drawerContent={firmaPermisoDrawer}
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
              label="VAL. COM. DLS"
              name={`partidas.${index}.valComDls`}
              control={control}
              drawerContent={valComDlsDrawer}
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
              label="CANTIDAD UMT"
              name={`partidas.${index}.cantidadUmtPermiso`}
              control={control}
              drawerContent={cantidadUmtPermisoDrawer}
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
          </div>

          <div className="grid grid-cols-3 gap-px">
            <PedimentoField
              label="IDENTIF."
              name={`partidas.${index}.identif`}
              control={control}
              drawerContent={identifDrawer}
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
                    {D.APENDIX_8.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </PedimentoField>
            <PedimentoField
              label="COMPLEMENTO 1"
              name={`partidas.${index}.complemento1`}
              control={control}
              drawerContent={complemento1Drawer}
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
              label="COMPLEMENTO 2"
              name={`partidas.${index}.complemento2`}
              control={control}
              drawerContent={complemento2Drawer}
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
          </div>

          {/* --- GRUPO 4: Observaciones --- */}
          <PedimentoField
            label="OBSERVACIONES A NIVEL PARTIDA"
            name={`partidas.${index}.observaciones`}
            control={control}
            drawerContent={observacionesDrawer}
          >
            {(field: ControllerRenderProps, disabled) => (
              <Textarea
                {...field}
                value={field.value ?? ""}
                className="bg-white border-none focus-visible:ring-0 text-xs h-12"
                disabled={disabled}
              />
            )}
          </PedimentoField>
        </div>

        {/* --- Columna Derecha: Contribuciones (ocupa 5 de 12 columnas) --- */}
        <div className="col-span-5">
          <Contribuciones partidaIndex={index} />
        </div>
      </div>
    </div>
  );
}
