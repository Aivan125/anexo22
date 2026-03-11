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

const simuladorCaso2: SimuladorCaso = {
  casoId: "caso-2",
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
          value: "III",
          label:
            "III – Grasas y aceites, animales, vegetales o de origen microbiano",
        },
        {
          value: "IV",
          label: "IV – Alimentos preparados; bebidas",
        },
      ],
      correcta: "III",
      explicacion:
        "Correcto: es un aceite vegetal de semillas oleaginosas; corresponde a grasas y aceites (Sección III).",
      pista:
        "El producto es aceite obtenido de semillas; no es animal ni alimento preparado.",
    },
    {
      id: "paso-2",
      tipo: "capitulo",
      titulo: "Determina el Capítulo",
      instruccion:
        "Elige el Capítulo correcto considerando la naturaleza del aceite.",
      opciones: [
        { value: "10", label: "10 – Cereales" },
        { value: "11", label: "11 – Productos de la molinería" },
        { value: "15", label: "15 – Grasas y aceites animales o vegetales" },
        { value: "19", label: "19 – Preparaciones a base de cereales" },
      ],
      correcta: "15",
      explicacion:
        "Correcto: el Capítulo 15 agrupa grasas y aceites vegetales.",
      pista:
        "El aceite de soya es grasa/aceite vegetal, no cereal ni preparación.",
    },
    {
      id: "paso-3",
      tipo: "partida",
      titulo: "Elige la partida (RGI 1)",
      instruccion:
        "Selecciona la partida que describe expresamente la mercancía.",
      opciones: [
        { value: "15.01", label: "15.01 – Grasa de cerdo y grasa de ave" },
        { value: "15.07", label: "15.07 – Aceite de soya" },
        { value: "15.08", label: "15.08 – Aceite de cacahuate" },
        { value: "15.09", label: "15.09 – Aceite de oliva" },
      ],
      correcta: "15.07",
      explicacion:
        "Correcto: la partida 15.07 comprende el aceite de soya incluso refinado (RGI 1).",
      pista:
        "El producto es aceite de Glycine max (soya), no de oliva ni cacahuate.",
    },
    {
      id: "paso-4",
      tipo: "subpartida",
      titulo: "Subpartida (RGI 6)",
      instruccion:
        "¿Es aceite en bruto o refinado? Elige la subpartida correcta.",
      opciones: [
        {
          value: "1507.10",
          label: "1507.10 – Aceite en bruto, incluso desgomado",
        },
        { value: "1507.90", label: "1507.90 – Los demás" },
      ],
      correcta: "1507.90",
      explicacion:
        "Correcto: el aceite refinado, desodorizado y filtrado no es en bruto; entra en Los demás.",
      pista:
        "El producto está refinado, desodorizado y filtrado; no es aceite en bruto.",
    },
    {
      id: "paso-5",
      tipo: "fraccion",
      titulo: "Fracción/NICO (México)",
      instruccion:
        "Selecciona la fracción nacional que mejor encaje con el producto.",
      opciones: [
        {
          value: "1507.90.99.00",
          label: "1507.90.99.00 – Aceite de soya refinado (Los demás)",
        },
        {
          value: "1507.90.99.01",
          label: "1507.90.99.01 – Aceite de soya - para uso industrial",
        },
        {
          value: "1507.90.99.99",
          label: "1507.90.99.99 – Aceite de soya - los demás",
        },
      ],
      correcta: "1507.90.99.00",
      explicacion:
        "Correcto: aceite de soya refinado según Nota 1 Cap. 15 (aceites refinados de semillas oleaginosas).",
      pista:
        "El producto es refinado; la subpartida 1507.90 corresponde a Los demás.",
    },
    {
      id: "paso-6",
      tipo: "notas",
      titulo: "Validación legal (Notas)",
      instruccion:
        "Selecciona la nota que confirma que los aceites refinados permanecen en el Capítulo 15.",
      opciones: [
        {
          value: "NL15-1",
          label:
            "NL15-1 – Nota Legal Cap.15: comprende aceites de semillas oleaginosas incluso refinados",
        },
        {
          value: "NL15-2",
          label:
            "NL15-2 – Nota Legal Cap.15: excluye aceites modificados químicamente",
        },
      ],
      correcta: "NL15-1",
      explicacion:
        "Correcto: la Nota 1 del Capítulo 15 incluye aceites de semillas oleaginosas incluso refinados.",
      pista:
        "La nota correcta confirma que los aceites refinados siguen en el Capítulo 15.",
    },
  ],
};

const simuladorCaso3: SimuladorCaso = {
  casoId: "caso-3",
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
          value: "III",
          label:
            "III – Grasas y aceites, animales, vegetales o de origen microbiano",
        },
        {
          value: "IV",
          label: "IV – Productos de las industrias alimentarias; bebidas",
        },
      ],
      correcta: "IV",
      explicacion:
        "Correcto: es un producto alimenticio preparado (botana lista para consumo); corresponde a la Sección IV.",
      pista:
        "El producto es una botana lista para consumo, no cereal en grano ni materia prima.",
    },
    {
      id: "paso-2",
      tipo: "capitulo",
      titulo: "Determina el Capítulo",
      instruccion:
        "Elige el Capítulo correcto considerando que el producto es una preparación a base de cereales.",
      opciones: [
        { value: "10", label: "10 – Cereales" },
        { value: "11", label: "11 – Productos de la molinería" },
        { value: "16", label: "16 – Preparaciones de carne, pescado, etc." },
        { value: "19", label: "19 – Preparaciones a base de cereales" },
      ],
      correcta: "19",
      explicacion:
        "Correcto: el Capítulo 19 agrupa preparaciones a base de cereales.",
      pista:
        "El producto es maíz expandido y sazonado; ya no es cereal en grano (Cap. 10).",
    },
    {
      id: "paso-3",
      tipo: "partida",
      titulo: "Elige la partida (RGI 1)",
      instruccion:
        "Selecciona la partida que describe expresamente la mercancía.",
      opciones: [
        {
          value: "19.01",
          label:
            "19.01 – Extracto de malta; preparaciones de harina, almidón, etc.",
        },
        {
          value: "19.02",
          label: "19.02 – Pastas alimenticias",
        },
        {
          value: "19.04",
          label:
            "19.04 – Productos a base de cereales obtenidos por inflado o tostado",
        },
        {
          value: "19.05",
          label: "19.05 – Productos de panadería, pastelería o galletería",
        },
      ],
      correcta: "19.04",
      explicacion:
        "Correcto: la partida 19.04 comprende productos a base de cereales obtenidos por inflado o tostado (RGI 1).",
      pista:
        "Las palomitas son maíz inflado por expansión térmica; la partida 19.04 incluye maíz inflado.",
    },
    {
      id: "paso-4",
      tipo: "subpartida",
      titulo: "Subpartida (RGI 6)",
      instruccion:
        "Elige la subpartida que corresponde a productos obtenidos por inflado.",
      opciones: [
        {
          value: "1904.10",
          label:
            "1904.10 – Productos a base de cereales obtenidos por inflado o tostado",
        },
        {
          value: "1904.20",
          label:
            "1904.20 – Preparaciones con copos de cereales sin tostar o mezclas",
        },
        {
          value: "1904.30",
          label: "1904.30 – Bulgur de trigo",
        },
        {
          value: "1904.90",
          label: "1904.90 – Los demás",
        },
      ],
      correcta: "1904.10",
      explicacion:
        "Correcto: la subpartida 1904.10 comprende productos obtenidos por inflado; las palomitas son maíz inflado.",
      pista:
        "El producto fue sometido a expansión térmica (inflado); no es copos sin tostar ni bulgur.",
    },
    {
      id: "paso-5",
      tipo: "fraccion",
      titulo: "Fracción/NICO (México)",
      instruccion:
        "Selecciona la fracción nacional que mejor encaje con el producto.",
      opciones: [
        {
          value: "1904.10.01.00",
          label: "1904.10.01.00 – Productos por inflado o tostado (palomitas)",
        },
        {
          value: "1904.10.01.01",
          label:
            "1904.10.01.01 – Productos por inflado o tostado - para uso industrial",
        },
        {
          value: "1904.10.01.99",
          label: "1904.10.01.99 – Productos por inflado o tostado - los demás",
        },
      ],
      correcta: "1904.10.01.00",
      explicacion:
        "Correcto: palomitas de maíz preparadas según Nota 1 Cap. 19 y Nota Explicativa SA (maíz inflado).",
      pista:
        "El producto es maíz expandido (inflado) sazonado; la subpartida 1904.10 corresponde a productos por inflado.",
    },
    {
      id: "paso-6",
      tipo: "notas",
      titulo: "Validación legal (Notas)",
      instruccion:
        "Selecciona la nota que confirma que las preparaciones a base de cereales se clasifican en el Capítulo 19.",
      opciones: [
        {
          value: "NL19-1",
          label:
            "NL19-1 – Nota Legal Cap.19: comprende preparaciones alimenticias obtenidas a partir de cereales",
        },
        {
          value: "NL19-2",
          label:
            "NL19-2 – Nota Legal Cap.19: excluye preparaciones con más de 20% de carne o pescado",
        },
      ],
      correcta: "NL19-1",
      explicacion:
        "Correcto: la Nota 1 del Capítulo 19 comprende preparaciones alimenticias obtenidas a partir de cereales; las palomitas son maíz inflado.",
      pista:
        "La nota correcta incluye las preparaciones a base de cereales; el producto es maíz expandido (cereal).",
    },
  ],
};

const simuladorCaso4: SimuladorCaso = {
  casoId: "caso-4",
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
          value: "III",
          label:
            "III – Grasas y aceites, animales, vegetales o de origen microbiano",
        },
        {
          value: "IV",
          label: "IV – Productos de las industrias alimentarias; bebidas",
        },
        {
          value: "V",
          label: "V – Productos minerales",
        },
      ],
      correcta: "V",
      explicacion:
        "Correcto: es un producto mineral (sal extraída de depósitos naturales); corresponde a la Sección V.",
      pista:
        "El producto es sal de origen mineral; no es animal, vegetal ni alimento preparado.",
    },
    {
      id: "paso-2",
      tipo: "capitulo",
      titulo: "Determina el Capítulo",
      instruccion:
        "Elige el Capítulo correcto considerando que el producto es un mineral.",
      opciones: [
        { value: "10", label: "10 – Cereales" },
        { value: "11", label: "11 – Productos de la molinería" },
        { value: "15", label: "15 – Grasas y aceites animales o vegetales" },
        { value: "19", label: "19 – Preparaciones a base de cereales" },
        { value: "25", label: "25 – Sal; azufre; tierras y piedras" },
      ],
      correcta: "25",
      explicacion:
        "Correcto: el Capítulo 25 agrupa sal, azufre y tierras; la sal mineral se clasifica aquí.",
      pista: "El producto es sal; el Capítulo 25 comprende la sal.",
    },
    {
      id: "paso-3",
      tipo: "partida",
      titulo: "Elige la partida (RGI 1)",
      instruccion:
        "Selecciona la partida que describe expresamente la mercancía.",
      opciones: [
        { value: "25.01", label: "25.01 – Sal" },
        { value: "25.02", label: "25.02 – Piritas de hierro sin tostar" },
        { value: "25.03", label: "25.03 – Azufre" },
        { value: "25.05", label: "25.05 – Arenas naturales" },
      ],
      correcta: "25.01",
      explicacion:
        "Correcto: la partida 25.01 comprende la sal incluso triturada (RGI 1).",
      pista: "El producto es sal mineral; no es azufre, piritas ni arena.",
    },
    {
      id: "paso-4",
      tipo: "subpartida",
      titulo: "Subpartida (RGI 6)",
      instruccion: "Elige la subpartida que corresponde a la sal.",
      opciones: [
        { value: "2501.00", label: "2501.00 – Sal" },
        { value: "2502.00", label: "2502.00 – Piritas de hierro sin tostar" },
        { value: "2503.00", label: "2503.00 – Azufre" },
        { value: "2505.10", label: "2505.10 – Arenas silíceas" },
      ],
      correcta: "2501.00",
      explicacion:
        "Correcto: la subpartida 2501.00 comprende la sal (incluidas la de mesa y la desnaturalizada).",
      pista:
        "El producto es sal mineral; la subpartida 2501.00 corresponde a la sal.",
    },
    {
      id: "paso-5",
      tipo: "fraccion",
      titulo: "Fracción/NICO (México)",
      instruccion:
        "Selecciona la fracción nacional que mejor encaje con el producto.",
      opciones: [
        {
          value: "2501.00.99.00",
          label: "2501.00.99.00 – Sal mineral",
        },
        {
          value: "2501.00.99.01",
          label: "2501.00.99.01 – Sal - para uso industrial",
        },
        {
          value: "2501.00.99.99",
          label: "2501.00.99.99 – Sal - los demás",
        },
      ],
      correcta: "2501.00.99.00",
      explicacion:
        "Correcto: sal mineral según Nota del Cap. 25 (sal natural incluso triturada).",
      pista:
        "El producto es sal mineral natural extraída de depósitos; la fracción 2501.00.99 corresponde a sal mineral.",
    },
    {
      id: "paso-6",
      tipo: "notas",
      titulo: "Validación legal (Notas)",
      instruccion:
        "Selecciona la nota que confirma que la sal natural triturada permanece en el Capítulo 25.",
      opciones: [
        {
          value: "NL25-1",
          label:
            "NL25-1 – Nota Legal Cap.25: comprende la sal natural incluso triturada",
        },
        {
          value: "NL25-2",
          label:
            "NL25-2 – Nota Legal Cap.25: excluye productos tostados o calcinados",
        },
      ],
      correcta: "NL25-1",
      explicacion:
        "Correcto: la Nota del Capítulo 25 comprende la sal natural incluso triturada.",
      pista:
        "La nota correcta confirma que la sal natural triturada se clasifica en el Capítulo 25.",
    },
  ],
};

const simuladorCaso5: SimuladorCaso = {
  casoId: "caso-5",
  pasos: [
    {
      id: "paso-1",
      tipo: "seccion",
      titulo: "Identifica la Sección",
      instruccion:
        "Con base en la naturaleza del producto, elige la Sección del SA/TIGIE.",
      opciones: [
        {
          value: "III",
          label:
            "III – Grasas y aceites, animales, vegetales o de origen microbiano",
        },
        {
          value: "IV",
          label: "IV – Productos de las industrias alimentarias; bebidas",
        },
        {
          value: "V",
          label: "V – Productos minerales",
        },
        {
          value: "VI",
          label: "VI – Productos de las industrias químicas",
        },
        {
          value: "VII",
          label: "VII – Plástico y sus manufacturas; caucho y sus manufacturas",
        },
      ],
      correcta: "VII",
      explicacion:
        "Correcto: es un artículo de plástico (envase HDPE); corresponde a la Sección VII.",
      pista:
        "El producto es una manufactura de plástico; no es alimento, mineral ni producto químico en bruto.",
    },
    {
      id: "paso-2",
      tipo: "capitulo",
      titulo: "Determina el Capítulo",
      instruccion:
        "Elige el Capítulo correcto considerando que el producto es una manufactura de plástico.",
      opciones: [
        { value: "25", label: "25 – Sal; azufre; tierras y piedras" },
        { value: "39", label: "39 – Plástico y sus manufacturas" },
        { value: "40", label: "40 – Caucho y sus manufacturas" },
        { value: "42", label: "42 – Manufacturas de cuero" },
        { value: "48", label: "48 – Papel y cartón" },
      ],
      correcta: "39",
      explicacion:
        "Correcto: el Capítulo 39 agrupa plástico y sus manufacturas; el envase es una manufactura de plástico.",
      pista:
        "El producto es de plástico (polietileno); el Capítulo 39 comprende las manufacturas de plástico.",
    },
    {
      id: "paso-3",
      tipo: "partida",
      titulo: "Elige la partida (RGI 1)",
      instruccion:
        "Selecciona la partida que describe expresamente la mercancía.",
      opciones: [
        {
          value: "39.01",
          label: "39.01 – Polímeros de etileno en formas primarias",
        },
        {
          value: "39.20",
          label: "39.20 – Placas, láminas, hojas y tiras de plástico",
        },
        {
          value: "39.23",
          label: "39.23 – Artículos para el transporte o envasado, de plástico",
        },
        {
          value: "39.24",
          label: "39.24 – Vajilla, artículos de cocina o de uso doméstico",
        },
        {
          value: "39.26",
          label: "39.26 – Las demás manufacturas de plástico",
        },
      ],
      correcta: "39.23",
      explicacion:
        "Correcto: la partida 39.23 comprende artículos para transporte o envasado de plástico (RGI 1).",
      pista:
        "El producto es un envase para almacenar alimentos; la partida 39.23 comprende artículos para envasado.",
    },
    {
      id: "paso-4",
      tipo: "subpartida",
      titulo: "Subpartida (RGI 6)",
      instruccion:
        "Elige la subpartida que corresponde a botellas, frascos y recipientes similares.",
      opciones: [
        {
          value: "3923.10",
          label: "3923.10 – Cajas, cajones, jaulas y artículos similares",
        },
        {
          value: "3923.21",
          label: "3923.21 – De polímeros de etileno (sacos y bolsas)",
        },
        {
          value: "3923.30",
          label: "3923.30 – Bombonas, botellas, frascos y artículos similares",
        },
        {
          value: "3923.40",
          label: "3923.40 – Bobinas, carretes, canillas y soportes similares",
        },
        {
          value: "3923.90",
          label: "3923.90 – Los demás",
        },
      ],
      correcta: "3923.30",
      explicacion:
        "Correcto: la subpartida 3923.30 comprende bombonas, botellas, frascos y artículos similares; el envase de 1 litro es un recipiente similar.",
      pista:
        "El producto es un recipiente para envasar; la subpartida 3923.30 corresponde a botellas, frascos y recipientes similares.",
    },
    {
      id: "paso-5",
      tipo: "fraccion",
      titulo: "Fracción/NICO (México)",
      instruccion:
        "Selecciona la fracción nacional que mejor encaje con el producto.",
      opciones: [
        {
          value: "3923.30.99.00",
          label: "3923.30.99.00 – Envases de plástico",
        },
        {
          value: "3923.30.99.01",
          label: "3923.30.99.01 – Envases de plástico - para uso industrial",
        },
        {
          value: "3923.30.99.99",
          label: "3923.30.99.99 – Envases de plástico - los demás",
        },
      ],
      correcta: "3923.30.99.00",
      explicacion:
        "Correcto: envase de plástico según Nota 1 Cap. 39 (manufacturas obtenidas por moldeo).",
      pista:
        "El producto es un envase alimenticio de HDPE; la fracción 3923.30.99 corresponde a envases de plástico.",
    },
    {
      id: "paso-6",
      tipo: "notas",
      titulo: "Validación legal (Notas)",
      instruccion:
        "Selecciona la nota que confirma que los artículos de plástico obtenidos por moldeo se clasifican en el Capítulo 39.",
      opciones: [
        {
          value: "NL39-1",
          label:
            "NL39-1 – Nota Legal Cap.39: comprende las materias plásticas y sus manufacturas obtenidas por moldeo",
        },
        {
          value: "NL39-2",
          label:
            "NL39-2 – Nota Legal Cap.39: excluye manufacturas de cuero (Cap. 42)",
        },
      ],
      correcta: "NL39-1",
      explicacion:
        "Correcto: la Nota 1 del Capítulo 39 comprende las materias plásticas y sus manufacturas obtenidas por moldeo, colada, extrusión, etc.",
      pista:
        "La nota correcta confirma que las manufacturas de plástico obtenidas por moldeo se clasifican en el Capítulo 39.",
    },
  ],
};

const simuladorCaso6: SimuladorCaso = {
  casoId: "caso-6",
  pasos: [
    {
      id: "paso-1",
      tipo: "seccion",
      titulo: "Identifica la Sección",
      instruccion:
        "Con base en la naturaleza del producto, elige la Sección del SA/TIGIE.",
      opciones: [
        {
          value: "V",
          label: "V – Productos minerales",
        },
        {
          value: "VI",
          label: "VI – Productos de las industrias químicas",
        },
        {
          value: "VII",
          label: "VII – Plástico y sus manufacturas; caucho y sus manufacturas",
        },
        {
          value: "VIII",
          label: "VIII – Pieles, cueros y manufacturas",
        },
        {
          value: "IX",
          label:
            "IX – Madera, carbón vegetal y manufacturas de madera; corcho y sus manufacturas",
        },
      ],
      correcta: "IX",
      explicacion:
        "Correcto: es madera aserrada; corresponde a la Sección IX (Madera).",
      pista: "El producto es madera; no es mineral, plástico ni cuero.",
    },
    {
      id: "paso-2",
      tipo: "capitulo",
      titulo: "Determina el Capítulo",
      instruccion:
        "Elige el Capítulo correcto considerando que el producto es madera.",
      opciones: [
        { value: "39", label: "39 – Plástico y sus manufacturas" },
        {
          value: "44",
          label: "44 – Madera, carbón vegetal y manufacturas de madera",
        },
        { value: "45", label: "45 – Corcho y sus manufacturas" },
        { value: "48", label: "48 – Papel y cartón" },
      ],
      correcta: "44",
      explicacion:
        "Correcto: el Capítulo 44 agrupa madera y sus manufacturas; las tablas de madera aserrada se clasifican aquí.",
      pista:
        "El producto es madera aserrada; el Capítulo 44 comprende la madera.",
    },
    {
      id: "paso-3",
      tipo: "partida",
      titulo: "Elige la partida (RGI 1)",
      instruccion:
        "Selecciona la partida que describe expresamente la mercancía.",
      opciones: [
        {
          value: "44.01",
          label: "44.01 – Leña; madera en plaquitas o partículas",
        },
        {
          value: "44.03",
          label: "44.03 – Madera en bruto",
        },
        {
          value: "44.07",
          label: "44.07 – Madera aserrada o desbastada longitudinalmente",
        },
        {
          value: "44.09",
          label: "44.09 – Madera perfilada",
        },
        {
          value: "44.18",
          label: "44.18 – Manufacturas de madera",
        },
      ],
      correcta: "44.07",
      explicacion:
        "Correcto: la partida 44.07 comprende madera aserrada o desbastada longitudinalmente (RGI 1).",
      pista:
        "El producto es madera cortada en tablas por aserrado; la partida 44.07 comprende madera aserrada.",
    },
    {
      id: "paso-4",
      tipo: "subpartida",
      titulo: "Subpartida (RGI 6)",
      instruccion:
        "Elige la subpartida que corresponde a madera de coníferas (pino).",
      opciones: [
        {
          value: "4407.10",
          label: "4407.10 – De coníferas",
        },
        {
          value: "4407.21",
          label: "4407.21 – De roble",
        },
        {
          value: "4407.25",
          label: "4407.25 – De castaño",
        },
        {
          value: "4407.29",
          label: "4407.29 – Los demás (no coníferas)",
        },
      ],
      correcta: "4407.10",
      explicacion:
        "Correcto: la subpartida 4407.10 comprende madera de coníferas; el pino es una conífera.",
      pista:
        "El producto es madera de pino; el pino pertenece a las coníferas.",
    },
    {
      id: "paso-5",
      tipo: "fraccion",
      titulo: "Fracción/NICO (México)",
      instruccion:
        "Selecciona la fracción nacional que mejor encaje con el producto.",
      opciones: [
        {
          value: "4407.10.99.00",
          label: "4407.10.99.00 – Madera aserrada de coníferas",
        },
        {
          value: "4407.10.99.01",
          label: "4407.10.99.01 – Madera aserrada - para uso industrial",
        },
        {
          value: "4407.10.99.99",
          label: "4407.10.99.99 – Madera aserrada - los demás",
        },
      ],
      correcta: "4407.10.99.00",
      explicacion:
        "Correcto: madera aserrada de coníferas según partida 44.07 (madera aserrada longitudinalmente).",
      pista:
        "El producto es tablas de madera de pino; la fracción 4407.10.99 corresponde a madera aserrada de coníferas.",
    },
    {
      id: "paso-6",
      tipo: "notas",
      titulo: "Validación legal (Notas)",
      instruccion:
        "Selecciona la nota que confirma que la madera aserrada longitudinalmente se clasifica en la partida 44.07.",
      opciones: [
        {
          value: "NL44-1",
          label:
            "NL44-1 – Partida 44.07: incluye madera aserrada longitudinalmente",
        },
        {
          value: "NL44-2",
          label:
            "NL44-2 – Nota Legal Cap.44: excluye bambú para cestería (partida 14.01)",
        },
      ],
      correcta: "NL44-1",
      explicacion:
        "Correcto: la partida 44.07 comprende madera aserrada o desbastada longitudinalmente, cortada o desenrollada.",
      pista:
        "La nota correcta confirma que la madera aserrada longitudinalmente se clasifica en la partida 44.07.",
    },
  ],
};

const simuladorCaso7: SimuladorCaso = {
  casoId: "caso-7",
  pasos: [
    {
      id: "paso-1",
      tipo: "seccion",
      titulo: "Identifica la Sección",
      instruccion:
        "Con base en la naturaleza del producto, elige la Sección del SA/TIGIE.",
      opciones: [
        {
          value: "VI",
          label: "VI – Productos de las industrias químicas",
        },
        {
          value: "VII",
          label: "VII – Plástico y sus manufacturas; caucho y sus manufacturas",
        },
        {
          value: "VIII",
          label:
            "VIII – Pieles, cueros, peletería y manufacturas de estas materias",
        },
        {
          value: "IX",
          label:
            "IX – Madera, carbón vegetal y manufacturas de madera; corcho y sus manufacturas",
        },
        {
          value: "X",
          label: "X – Pastas de madera; papel y cartón",
        },
      ],
      correcta: "VIII",
      explicacion:
        "Correcto: es una manufactura de cuero (billetera); corresponde a la Sección VIII.",
      pista:
        "El producto es un artículo de marroquinería de cuero; no es plástico, madera ni papel.",
    },
    {
      id: "paso-2",
      tipo: "capitulo",
      titulo: "Determina el Capítulo",
      instruccion:
        "Elige el Capítulo correcto considerando que el producto es una manufactura terminada de cuero.",
      opciones: [
        { value: "41", label: "41 – Pieles y cueros (materia prima)" },
        { value: "42", label: "42 – Manufacturas de cuero" },
        { value: "43", label: "43 – Peletería y manufacturas de peletería" },
        { value: "64", label: "64 – Calzado" },
      ],
      correcta: "42",
      explicacion:
        "Correcto: el Capítulo 42 agrupa manufacturas de cuero; el producto no es cuero en bruto (41) sino artículo terminado.",
      pista:
        "El producto no es cuero curtido sin transformar; es un artículo terminado de marroquinería.",
    },
    {
      id: "paso-3",
      tipo: "partida",
      titulo: "Elige la partida (RGI 1)",
      instruccion:
        "Selecciona la partida que describe expresamente la mercancía.",
      opciones: [
        {
          value: "41.11",
          label: "41.11 – Cuero y piel curtidos de bovino",
        },
        {
          value: "42.01",
          label: "42.01 – Artículos de talabartería o guarnicionería",
        },
        {
          value: "42.02",
          label: "42.02 – Baúles, maletas, bolsos y artículos similares",
        },
        {
          value: "42.03",
          label: "42.03 – Artículos de vestir de cuero",
        },
        {
          value: "43.03",
          label: "43.03 – Artículos de vestir de peletería",
        },
      ],
      correcta: "42.02",
      explicacion:
        "Correcto: la partida 42.02 comprende billeteras, bolsos de mano y artículos similares (RGI 1).",
      pista:
        "El producto es una billetera; la partida 42.02 incluye expresamente billeteras y portamonedas.",
    },
    {
      id: "paso-4",
      tipo: "subpartida",
      titulo: "Subpartida (RGI 6)",
      instruccion:
        "Elige la subpartida que corresponde a artículos de bolsillo con superficie exterior de cuero.",
      opciones: [
        {
          value: "4202.11",
          label: "4202.11 – Maletas, portafolios: con cuero natural",
        },
        {
          value: "4202.21",
          label: "4202.21 – Bolsos de mano: con cuero natural",
        },
        {
          value: "4202.31",
          label: "4202.31 – Artículos de bolsillo o bolso: con cuero natural",
        },
        {
          value: "4202.32",
          label:
            "4202.32 – Artículos de bolsillo: con plástico o materia textil",
        },
        {
          value: "4202.39",
          label: "4202.39 – Artículos de bolsillo: los demás",
        },
      ],
      correcta: "4202.31",
      explicacion:
        "Correcto: la subpartida 4202.31 comprende artículos de bolsillo o de bolso de mano con superficie exterior de cuero natural o cuero regenerado.",
      pista:
        "El producto es una billetera (artículo de bolsillo) con superficie exterior de cuero bovino.",
    },
    {
      id: "paso-5",
      tipo: "fraccion",
      titulo: "Fracción/NICO (México)",
      instruccion:
        "Selecciona la fracción nacional que mejor encaje con el producto.",
      opciones: [
        {
          value: "4202.31.99.00",
          label: "4202.31.99.00 – Billeteras de cuero",
        },
        {
          value: "4202.31.99.01",
          label: "4202.31.99.01 – Artículos de bolsillo - para uso industrial",
        },
        {
          value: "4202.31.99.99",
          label: "4202.31.99.99 – Artículos de bolsillo - los demás",
        },
      ],
      correcta: "4202.31.99.00",
      explicacion:
        "Correcto: billetera de cuero según Nota 2 Cap. 42 (artículos de bolsillo con cuero natural).",
      pista:
        "El producto es una billetera de cuero bovino; la fracción 4202.31.99 corresponde a billeteras de cuero.",
    },
    {
      id: "paso-6",
      tipo: "notas",
      titulo: "Validación legal (Notas)",
      instruccion:
        "Selecciona la nota que confirma que los artículos de bolsillo elaborados con cuero natural se clasifican en la partida 42.02.",
      opciones: [
        {
          value: "NL42-1",
          label:
            "NL42-1 – Nota Legal Cap.42: comprende artículos de bolsillo elaborados con cuero natural",
        },
        {
          value: "NL42-2",
          label:
            "NL42-2 – Nota Legal Cap.42: excluye bolsas de plástico no concebidas para uso prolongado (partida 39.23)",
        },
      ],
      correcta: "NL42-1",
      explicacion:
        "Correcto: la partida 42.02 comprende billeteras y artículos de bolsillo; la Nota 1 del Capítulo 42 define cuero natural.",
      pista:
        "La nota correcta confirma que los artículos de bolsillo elaborados con cuero natural se clasifican en la partida 42.02.",
    },
  ],
};

const simuladorCaso8: SimuladorCaso = {
  casoId: "caso-8",
  pasos: [
    {
      id: "paso-1",
      tipo: "seccion",
      titulo: "Identifica la Sección",
      instruccion:
        "Con base en la naturaleza del producto, elige la Sección del SA/TIGIE.",
      opciones: [
        {
          value: "VII",
          label: "VII – Plástico y sus manufacturas; caucho y sus manufacturas",
        },
        {
          value: "VIII",
          label:
            "VIII – Pieles, cueros, peletería y manufacturas de estas materias",
        },
        {
          value: "IX",
          label:
            "IX – Madera, carbón vegetal y manufacturas de madera; corcho y sus manufacturas",
        },
        {
          value: "X",
          label: "X – Pasta de madera; papel y cartón",
        },
        {
          value: "XI",
          label: "XI – Materias textiles y sus manufacturas",
        },
      ],
      correcta: "X",
      explicacion:
        "Correcto: el papel kraft se clasifica en la Sección X (Pasta de madera y papel).",
      pista:
        "El producto es papel obtenido de pasta de madera; corresponde a la Sección X.",
    },
    {
      id: "paso-2",
      tipo: "capitulo",
      titulo: "Determina el Capítulo",
      instruccion:
        "Elige el Capítulo correcto considerando que el producto es papel kraft.",
      opciones: [
        { value: "44", label: "44 – Madera, carbón vegetal" },
        { value: "47", label: "47 – Pastas de madera" },
        { value: "48", label: "48 – Papel y cartón" },
        { value: "49", label: "49 – Libros, periódicos e impresos" },
      ],
      correcta: "48",
      explicacion:
        "Correcto: el Capítulo 48 agrupa papel y cartón; el producto es papel kraft, no pasta de madera (47) ni madera (44).",
      pista:
        "El producto es papel elaborado, no pasta de madera en bruto; corresponde al Capítulo 48.",
    },
    {
      id: "paso-3",
      tipo: "partida",
      titulo: "Elige la partida (RGI 1)",
      instruccion:
        "Selecciona la partida que describe expresamente la mercancía.",
      opciones: [
        {
          value: "47.01",
          label: "47.01 – Pastas químicas de madera de coníferas",
        },
        {
          value: "48.01",
          label: "48.01 – Papel de periódico",
        },
        {
          value: "48.04",
          label: "48.04 – Papel y cartón Kraft, sin estucar ni recubrir",
        },
        {
          value: "48.05",
          label: "48.05 – Papel y cartón multicapa",
        },
        {
          value: "48.10",
          label: "48.10 – Papel y cartón estucados",
        },
      ],
      correcta: "48.04",
      explicacion:
        "Correcto: la partida 48.04 comprende papel y cartón Kraft sin estucar ni recubrir, en rollos o hojas.",
      pista:
        "El producto es papel kraft sin estucar, presentado en rollos; la partida 48.04 lo describe expresamente.",
    },
    {
      id: "paso-4",
      tipo: "subpartida",
      titulo: "Subpartida (RGI 6)",
      instruccion:
        "Elige la subpartida que corresponde a papel kraft para sacos industriales.",
      opciones: [
        {
          value: "4804.11",
          label: "4804.11 – Papel kraft para sacos (Kraftliner)",
        },
        {
          value: "4804.19",
          label: "4804.19 – Kraftliner: Los demás",
        },
        {
          value: "4804.21",
          label: "4804.21 – Papel Kraft para sacos: Crudo",
        },
        {
          value: "4804.29",
          label: "4804.29 – Papel Kraft para sacos: Los demás",
        },
        {
          value: "4804.39",
          label: "4804.39 – Los demás papeles Kraft ≤150 g/m²: Los demás",
        },
      ],
      correcta: "4804.11",
      explicacion:
        "Correcto: la subpartida 4804.11 comprende papel kraft para sacos (Kraftliner); el producto se destina a fabricación de bolsas industriales.",
      pista:
        "El producto se destina a fabricación de bolsas y empaques; corresponde a papel kraft para sacos.",
    },
    {
      id: "paso-5",
      tipo: "fraccion",
      titulo: "Fracción/NICO (México)",
      instruccion:
        "Selecciona la fracción nacional que mejor encaje con el producto.",
      opciones: [
        {
          value: "4804.11.99.00",
          label: "4804.11.99.00 – Papel kraft para sacos",
        },
        {
          value: "4804.11.99.01",
          label: "4804.11.99.01 – Papel kraft para sacos - uso especial",
        },
        {
          value: "4804.11.99.99",
          label: "4804.11.99.99 – Papel kraft para sacos - los demás",
        },
      ],
      correcta: "4804.11.99.00",
      explicacion:
        "Correcto: papel kraft para sacos según la subpartida 4804.11.",
      pista:
        "El producto es papel kraft industrial para fabricación de bolsas y empaques.",
    },
    {
      id: "paso-6",
      tipo: "notas",
      titulo: "Validación legal (Notas)",
      instruccion:
        "Selecciona la nota que confirma que el papel obtenido de pasta de madera se clasifica en el Capítulo 48.",
      opciones: [
        {
          value: "NL48-1",
          label:
            "NL48-1 – Nota Legal Cap.48: comprende papel obtenido de pasta de madera",
        },
        {
          value: "NL48-2",
          label:
            "NL48-2 – Nota Legal Cap.48: excluye papel estucado (partida 48.10)",
        },
      ],
      correcta: "NL48-1",
      explicacion:
        "Correcto: el Capítulo 48 comprende papel obtenido de pasta de madera; el producto es papel kraft elaborado a partir de pasta química.",
      pista:
        "La nota correcta confirma que el papel obtenido de pasta de madera se clasifica en el Capítulo 48.",
    },
  ],
};

const simuladorCaso9: SimuladorCaso = {
  casoId: "caso-9",
  pasos: [
    {
      id: "paso-1",
      tipo: "seccion",
      titulo: "Identifica la Sección",
      instruccion:
        "Con base en la naturaleza del producto, elige la Sección del SA/TIGIE.",
      opciones: [
        {
          value: "VII",
          label: "VII – Plástico y sus manufacturas; caucho y sus manufacturas",
        },
        {
          value: "VIII",
          label:
            "VIII – Pieles, cueros, peletería y manufacturas de estas materias",
        },
        {
          value: "IX",
          label:
            "IX – Madera, carbón vegetal y manufacturas de madera; corcho y sus manufacturas",
        },
        {
          value: "X",
          label: "X – Pasta de madera; papel y cartón",
        },
        {
          value: "XI",
          label: "XI – Materias textiles y sus manufacturas",
        },
        {
          value: "XII",
          label: "XII – Calzado, sombreros y demás tocados",
        },
      ],
      correcta: "XI",
      explicacion:
        "Correcto: las prendas de vestir textiles se clasifican en la Sección XI (Materias textiles).",
      pista:
        "El producto es una prenda de vestir elaborada con materia textil (algodón); corresponde a la Sección XI.",
    },
    {
      id: "paso-2",
      tipo: "capitulo",
      titulo: "Determina el Capítulo",
      instruccion:
        "Elige el Capítulo correcto considerando que el producto es una prenda de vestir de tejido de punto.",
      opciones: [
        { value: "60", label: "60 – Tejidos de punto" },
        { value: "61", label: "61 – Prendas de vestir, de punto" },
        { value: "62", label: "62 – Prendas de vestir, excepto de punto" },
        { value: "63", label: "63 – Artículos textiles confeccionados" },
      ],
      correcta: "61",
      explicacion:
        "Correcto: el Capítulo 61 agrupa prendas de vestir de punto; el producto es una camiseta elaborada por tejido de punto, no tejido en bruto (60) ni prenda de tela (62).",
      pista:
        "El producto es una prenda terminada de tejido de punto; corresponde al Capítulo 61.",
    },
    {
      id: "paso-3",
      tipo: "partida",
      titulo: "Elige la partida (RGI 1)",
      instruccion:
        "Selecciona la partida que describe expresamente la mercancía.",
      opciones: [
        {
          value: "61.01",
          label: "61.01 – Abrigos, impermeables y similares, de punto",
        },
        {
          value: "61.05",
          label: "61.05 – Camisetas, polos y similares, de punto",
        },
        {
          value: "61.09",
          label: "61.09 – Camisetas",
        },
        {
          value: "61.10",
          label: "61.10 – Jerséis, rebecas y artículos similares, de punto",
        },
        {
          value: "62.05",
          label: "62.05 – Camisas de punto",
        },
      ],
      correcta: "61.09",
      explicacion:
        "Correcto: la partida 61.09 comprende camisetas (T-shirts) de punto; el producto es una camiseta de algodón.",
      pista:
        "El producto es una camiseta; la partida 61.09 incluye expresamente camisetas de punto.",
    },
    {
      id: "paso-4",
      tipo: "subpartida",
      titulo: "Subpartida (RGI 6)",
      instruccion:
        "Elige la subpartida que corresponde a camisetas de algodón.",
      opciones: [
        {
          value: "6109.10",
          label: "6109.10 – De algodón",
        },
        {
          value: "6109.90",
          label: "6109.90 – Los demás",
        },
        {
          value: "6105.10",
          label: "6105.10 – Camisetas de algodón",
        },
        {
          value: "6110.20",
          label: "6110.20 – Jerséis de algodón",
        },
        {
          value: "6205.30",
          label: "6205.30 – Camisas de algodón (tela, no punto)",
        },
      ],
      correcta: "6109.10",
      explicacion:
        "Correcto: la subpartida 6109.10 comprende camisetas de algodón; el producto es 100% algodón.",
      pista:
        "El producto es 100% algodón; la subpartida 6109.10 corresponde a camisetas de algodón.",
    },
    {
      id: "paso-5",
      tipo: "fraccion",
      titulo: "Fracción/NICO (México)",
      instruccion:
        "Selecciona la fracción nacional que mejor encaje con el producto.",
      opciones: [
        {
          value: "6109.10.99.00",
          label: "6109.10.99.00 – Camisetas de algodón",
        },
        {
          value: "6109.10.99.01",
          label: "6109.10.99.01 – Camisetas de algodón - uso especial",
        },
        {
          value: "6109.10.99.99",
          label: "6109.10.99.99 – Camisetas de algodón - los demás",
        },
      ],
      correcta: "6109.10.99.00",
      explicacion: "Correcto: camiseta de algodón según la subpartida 6109.10.",
      pista:
        "El producto es una camiseta de algodón de tejido de punto para prenda de vestir.",
    },
    {
      id: "paso-6",
      tipo: "notas",
      titulo: "Validación legal (Notas)",
      instruccion:
        "Selecciona la nota que confirma que las prendas de vestir de punto se clasifican en el Capítulo 61.",
      opciones: [
        {
          value: "NL61-1",
          label:
            "NL61-1 – Nota Legal Cap.61: comprende prendas de vestir de punto",
        },
        {
          value: "NL61-2",
          label:
            "NL61-2 – Nota Legal Cap.61: excluye prendas de tela (Capítulo 62)",
        },
      ],
      correcta: "NL61-1",
      explicacion:
        "Correcto: el Capítulo 61 comprende prendas de vestir de punto; el producto es una camiseta elaborada por tejido de punto.",
      pista:
        "La nota correcta confirma que las prendas de vestir de punto se clasifican en el Capítulo 61.",
    },
  ],
};

const simuladoresMap: Record<string, SimuladorCaso> = {
  "caso-2": simuladorCaso2,
  "caso-3": simuladorCaso3,
  "caso-4": simuladorCaso4,
  "caso-5": simuladorCaso5,
  "caso-6": simuladorCaso6,
  "caso-7": simuladorCaso7,
  "caso-8": simuladorCaso8,
  "caso-9": simuladorCaso9,
  CASO_SEC2_006: simuladorCASO_SEC2_006,
};

export function getSimuladorByCasoId(
  casoId: string,
): SimuladorCaso | undefined {
  return simuladoresMap[casoId];
}
