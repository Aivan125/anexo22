import type { SimuladorCaso } from "@/types/clasificacion-arancelaria";

const simuladorCASO_SEC2_006: SimuladorCaso = {
  casoId: "CASO_SEC2_006",
  pasos: [
    {
      id: "paso-1",
      tipo: "seccion",
      titulo: "Identifica la Sección",
      instruccion:
        "Con base en la naturaleza del producto, elige la Sección del SA/TIGIE.",
      opciones: [
        {
          value: "I",
          label: "I – Animales vivos y productos del reino animal",
        },
        {
          value: "II",
          label: "II – Productos del reino vegetal",
        },
        {
          value: "IV",
          label: "IV – Alimentos preparados; bebidas",
        },
      ],
      correcta: "II",
      explicacion:
        "Correcto: es un producto vegetal (cereal en grano) sin preparación.",
      pista:
        "Revisa si es animal, vegetal o alimento preparado. El maíz palomero es un grano de origen vegetal.",
    },
    {
      id: "paso-2",
      tipo: "capitulo",
      titulo: "Determina el Capítulo",
      instruccion:
        "Elige el Capítulo correcto considerando estado físico y proceso.",
      opciones: [
        { value: "10", label: "10 – Cereales" },
        { value: "11", label: "11 – Productos de la molinería" },
        { value: "19", label: "19 – Preparaciones a base de cereales" },
      ],
      correcta: "10",
      explicacion:
        "Correcto: es cereal en grano, no molido (11) ni preparado (19).",
      pista:
        "¿Está molido/triturado (Cap.11) o preparado/cocido (Cap.19)? El producto es grano íntegro, crudo.",
    },
    {
      id: "paso-3",
      tipo: "partida",
      titulo: "Elige la partida (RGI 1)",
      instruccion:
        "Selecciona la partida que describe expresamente la mercancía.",
      opciones: [
        { value: "10.01", label: "10.01 – Trigo y morcajo" },
        { value: "10.05", label: "10.05 – Maíz" },
        {
          value: "19.04",
          label:
            "19.04 – Productos a base de cereales obtenidos por inflado o tostado",
        },
      ],
      correcta: "10.05",
      explicacion: "Correcto: la partida 10.05 comprende el maíz en grano.",
      pista:
        "Descartar trigo, arroz; el producto es maíz. La partida 19.04 es para productos ya inflados o tostados.",
    },
    {
      id: "paso-4",
      tipo: "subpartida",
      titulo: "Subpartida (RGI 6)",
      instruccion:
        "¿Es maíz para siembra? Si no, elige la subpartida correcta.",
      opciones: [
        { value: "1005.10", label: "1005.10 – Maíz para siembra" },
        { value: "1005.90", label: "1005.90 – Los demás" },
      ],
      correcta: "1005.90",
      explicacion: "Correcto: no es para siembra; entra en Los demás.",
      pista:
        "El producto es para consumo (expansión en cines/autoservicios), no siembra.",
    },
    {
      id: "paso-5",
      tipo: "fraccion",
      titulo: "Fracción/NICO (México)",
      instruccion:
        "Selecciona la fracción nacional que mejor encaje con el producto.",
      opciones: [
        {
          value: "1005.90.99.01",
          label: "1005.90.99.01 – Maíz - Los demás - Palomero",
        },
        {
          value: "1005.90.01.00",
          label: "1005.90.01.00 – Maíz blanco (harinero)",
        },
        {
          value: "1005.90.02.00",
          label: "1005.90.02.00 – Maíz amarillo",
        },
      ],
      correcta: "1005.90.99.01",
      explicacion:
        "Correcto: maíz palomero según Nota Nacional 2 del Capítulo 10.",
      pista:
        "Revisa la Nota Nacional 2: grano íntegro, sin cocción, destinado a expansión por calentamiento.",
    },
    {
      id: "paso-6",
      tipo: "notas",
      titulo: "Validación legal (Notas)",
      instruccion:
        "Selecciona la nota que descarta 19.04 (preparados) en este caso.",
      opciones: [
        {
          value: "NL10-1",
          label:
            "NL10-1 – Nota Legal 1 Cap.10: excluye cereales cocidos o preparados (19.04)",
        },
        {
          value: "NL19-1",
          label: "NL19-1 – Nota Legal 1 Cap.19: incluye maíz en grano",
        },
      ],
      correcta: "NL10-1",
      explicacion:
        "Correcto: la Nota 1 del Capítulo 10 excluye cereales cocidos o preparados (partida 19.04).",
      pista:
        "La nota correcta excluye explícitamente la partida 19.04. El producto no está cocido ni preparado.",
    },
  ],
};

const simuladoresMap: Record<string, SimuladorCaso> = {
  CASO_SEC2_006: simuladorCASO_SEC2_006,
};

export function getSimuladorByCasoId(
  casoId: string,
): SimuladorCaso | undefined {
  return simuladoresMap[casoId];
}
