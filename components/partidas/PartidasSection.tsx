// src/components/pedimento/PartidasSection.tsx
"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { PartidaRow } from "./PartidaRow";
import { partidaDefaultValues } from "@/types/pedimento";
import { useFormMode } from "@/context/FormModeContext";

export function PartidasSection() {
  const { mode } = useFormMode();
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "partidas",
  });

  return (
    <div className="bg-white p-2 border-2 border-black mt-4">
      <h2 className="bg-gray-600 text-primary-foreground text-center font-bold text-sm p-3">
        PARTIDAS
      </h2>

      <div className="space-y-2">
        {fields.map((field, index) => (
          <PartidaRow key={field.id} index={index} remove={remove} />
        ))}
      </div>

      {mode === "editing" && (
        <div className="mt-4">
          <Button
            type="button"
            onClick={() =>
              append({ ...partidaDefaultValues, sec: fields.length + 1 })
            }
            className="w-full mt-1 bg-muted-foreground/90 text-primary-foreground hover:bg-muted-foreground hover:text-primary-foreground"
          >
            Añadir Partida
          </Button>
        </div>
      )}
    </div>
  );
}
