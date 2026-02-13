import type {
  Producto,
  RespuestaEsperada,
  CasoPractico,
  ModuloCasos,
} from "@/types/clasificacion-arancelaria";

export const casosData: ModuloCasos = {
  modulo: "casos_practicos_secciones_1_5",
  descripcion_modulo:
    "Módulo de casos prácticos empresariales para aplicar la clasificación arancelaria en las Secciones I a V de la LIGIE.",
  casos: [
    {
      id: "CASO_SEC1_001",
      titulo: "Importación de pollitos de un día para integración avícola",
      seccion: "I",
      capitulo_aproximado: "01",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "Avícola del Norte, S.A. de C.V., es una empresa regiomontana que busca integrar su cadena de suministro desde la etapa de crianza. Actualmente importa pollitos vivos de un día de nacidos desde Brasil para engorda en sus granjas ubicadas en el norte de México. El área de comercio exterior debe determinar la fracción arancelaria correcta para estimar impuestos, revisar regulaciones no arancelarias aplicables y alimentar su sistema de costos por lote de importación.",
      producto: {
        nombre_comercial: "Pollitos de un día para engorda",
        descripcion_detallada:
          "Pollitos vivos de un día de nacidos, especie Gallus domesticus, destinados a engorda en granjas avícolas. Se transportan por vía aérea en cajas ventiladas especiales, con control de temperatura, sin vacunas aplicadas de origen.",
        uso_previsto: "Cría y engorda para producción de carne de pollo.",
        presentacion: "Cajas ventiladas con 100 pollitos vivos por caja.",
      },
      datos_relevantes: [
        "Especie: Gallus domesticus (aves de corral).",
        "Edad: 1 día de nacidos.",
        "Condición: animales vivos.",
        "Destino: engorda en granjas avícolas.",
        "Medio de transporte: aéreo, en cajas especiales.",
      ],
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican los animales vivos?",
        "Dentro del Capítulo 01, ¿qué partida corresponde específicamente a las aves de corral?",
        "¿Qué subpartida hace referencia a los pollitos de un día de nacidos?",
        "¿Es necesario aplicar la Regla 2 o alguna otra, o basta la aplicación de la Regla 1 (texto de partida y notas legales)?",
      ],
      pistas: [
        "Inicia tu análisis en la Sección I y revisa el Capítulo 01.",
        "Verifica si hay una subpartida que mencione explícitamente 'pollitos de un día'.",
        "Recuerda que la clasificación se basa en la mercancía tal como se presenta en el momento de la importación.",
      ],
      respuesta_esperada: {
        fraccion: "0105.11.01",
        nico: "00",
        descripcion_fraccion: "Pollitos de un día de nacidos.",
        justificacion_resumida:
          "Se trata de animales vivos (Sección I), aves de corral (Capítulo 01), específicamente pollitos de un día de nacidos, por lo que la fracción específica es 0105.11.01 con NICO 00.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "CASO_SEC2_002",
      titulo: "Exportación de aguacate Hass fresco a la Unión Europea",
      seccion: "II",
      capitulo_aproximado: "08",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "Agroexportadora Michoacana del Pacífico, S. de R.L., es una empresa mexicana que ha cerrado un contrato de suministro de aguacate Hass fresco con una cadena de supermercados en España. Para negociar adecuadamente precios y condiciones de entrega, así como para gestionar posibles preferencias arancelarias, el área de comercio exterior debe confirmar la fracción arancelaria correcta y el NICO aplicable.",
      producto: {
        nombre_comercial: "Aguacate Hass fresco",
        descripcion_detallada:
          "Fruto fresco de aguacate variedad Hass, grado de madurez comercial, lavado, seleccionado por calibre, sin pelar ni deshuesar, sin congelar ni procesar. Empacado en cajas de cartón de 4 kg.",
        uso_previsto: "Consumo humano directo como fruta fresca.",
        presentacion:
          "Cajas de cartón con fruta fresca, listas para exportación.",
      },
      datos_relevantes: [
        "Producto vegetal fresco, no procesado.",
        "No congelado, no deshidratado, no en trozos.",
        "Se trata de una fruta comestible.",
        "Variedad Hass, muy utilizada para exportación.",
      ],
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican los productos del reino vegetal?",
        "¿Qué capítulo agrupa las frutas comestibles?",
        "¿Existe una subpartida específica para el aguacate dentro de dicho capítulo?",
        "¿Es relevante el hecho de que el producto esté fresco y no congelado para determinar la fracción?",
      ],
      pistas: [
        "Revisa la Sección II y enfócate en el Capítulo 08.",
        "Busca si el término 'aguacates' aparece como partida o subpartida específica.",
        "Ten en cuenta la condición de 'fresco' del producto.",
      ],
      respuesta_esperada: {
        fraccion: "0804.40.01",
        nico: "00",
        descripcion_fraccion: "Aguacates.",
        justificacion_resumida:
          "El aguacate Hass fresco es un producto del reino vegetal (Sección II), fruta comestible (Capítulo 08) y se clasifica en la subpartida específica para aguacates, fracción 0804.40.01 con NICO 00.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "CASO_SEC3_003",
      titulo: "Aceite de oliva virgen extra para línea gourmet",
      seccion: "III",
      capitulo_aproximado: "15",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "Alimentos Mediterráneos de México, S.A. de C.V., es una empresa que importa aceite de oliva virgen extra desde España para comercializarlo en una línea gourmet de supermercados en México. El área de compras negocia con el proveedor, pero el área de comercio exterior necesita tener clara la fracción arancelaria para estimar el impacto fiscal y revisar si hay preferencias derivadas de tratados comerciales.",
      producto: {
        nombre_comercial: "Aceite de oliva virgen extra",
        descripcion_detallada:
          "Aceite de oliva virgen extra obtenido de la primera presión en frío de aceitunas, sin mezclar con otros aceites, apto para consumo humano. Envasado en botellas de vidrio de 1 litro con etiqueta gourmet.",
        uso_previsto:
          "Uso alimenticio para consumo directo y preparación de alimentos.",
        presentacion:
          "Botellas de vidrio de 1 L, empacadas en cajas de 12 unidades.",
      },
      datos_relevantes: [
        "Aceite de origen vegetal (oliva).",
        "Virgen extra, primera presión.",
        "No mezclado con otros aceites.",
        "Uso alimenticio.",
        "Envasado para venta al por menor.",
      ],
      preguntas_analisis: [
        "¿En qué sección se ubican las grasas y aceites de origen animal o vegetal?",
        "¿Qué capítulo corresponde específicamente a las grasas y aceites vegetales?",
        "¿La especificidad del aceite de oliva virgen extra ayuda a descartar otras subpartidas?",
        "¿Es necesario considerar mezclas u otros aceites de la Regla 3, o se clasifica directamente por la descripción específica de la partida?",
      ],
      pistas: [
        "Dirígete a la Sección III y localiza el Capítulo 15.",
        "Identifica si existe una subpartida exclusiva para aceite de oliva.",
        "Observa si la condición de 'virgen' aparece en la descripción de la subpartida.",
      ],
      respuesta_esperada: {
        fraccion: "1509.10.01",
        nico: "00",
        descripcion_fraccion: "Aceite de oliva virgen.",
        justificacion_resumida:
          "Se clasifica como grasa/aceite vegetal (Sección III), aceite de oliva (Capítulo 15), virgen y sin mezclar, en la fracción 1509.10.01 con NICO 00.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "CASO_SEC4_004",
      titulo: "Galletas dulces tipo María para cadena de autoservicio",
      seccion: "IV",
      capitulo_aproximado: "19",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "Dulce Trigo, S. de R.L. de C.V., es una empresa que importa galletas dulces tipo María desde España para comercializarlas bajo marca propia en una importante cadena de autoservicio en México. El área de logística y comercio exterior debe definir la fracción arancelaria correcta para calcular el IGI, DTA y otros costos asociados, así como validar si existe alguna regulación sanitaria adicional.",
      producto: {
        nombre_comercial: "Galletas dulces tipo María",
        descripcion_detallada:
          "Galletas dulces horneadas a base de harina de trigo, azúcar, grasa vegetal y otros ingredientes menores (sal, lecitina, saborizantes). Empaque individual de 200 g en envoltura plástica, con diseño para venta al detalle.",
        uso_previsto: "Consumo humano como producto de panificación y snack.",
        presentacion:
          "Paquetes de 200 g, empacados en cajas de cartón de 24 paquetes.",
      },
      datos_relevantes: [
        "Alimento procesado a base de harina de trigo.",
        "Producto de panadería/pastelería (galletas).",
        "Contiene azúcar (galleta dulce).",
        "Producto horneado.",
        "Empaque para venta al detalle.",
      ],
      preguntas_analisis: [
        "¿En qué sección se clasifican los productos alimenticios preparados?",
        "¿Qué capítulo agrupa las preparaciones a base de cereales y productos de panadería?",
        "¿La descripción 'galletas dulces' aparece de forma específica en alguna subpartida?",
        "¿Qué elementos ayudan a diferenciar galletas dulces de otros productos de panadería dentro del mismo capítulo?",
      ],
      pistas: [
        "Revisa la Sección IV y busca el Capítulo 19.",
        "En el Capítulo 19, identifica la partida relativa a productos de panadería.",
        "Dentro de esa partida, localiza la subpartida que menciona 'galletas'.",
      ],
      respuesta_esperada: {
        fraccion: "1905.31.01",
        nico: "00",
        descripcion_fraccion: "Galletas dulces.",
        justificacion_resumida:
          "El producto es una preparación alimenticia (Sección IV), producto de panadería a base de harina de trigo (Capítulo 19), específicamente galletas dulces, clasificándose en la fracción 1905.31.01 con NICO 00.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "CASO_SEC5_005",
      titulo: "Arena sílica para planta de fabricación de vidrio",
      seccion: "V",
      capitulo_aproximado: "25",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "Vidrio Industrial del Bajío, S.A. de C.V., es una empresa que produce envases de vidrio para la industria alimenticia y farmacéutica. Para disminuir costos, decide importar arena sílica de alta pureza desde Estados Unidos como materia prima principal. El área de supply chain requiere conocer la fracción arancelaria y NICO para modelar los costos de importación y analizar la viabilidad del nuevo proveedor.",
      producto: {
        nombre_comercial: "Arena sílica para uso industrial",
        descripcion_detallada:
          "Arena silícea (cuarzo molido) con pureza aproximada del 95% de dióxido de silicio (SiO2), granulometría controlada, destinada a la fabricación de vidrio. No está coloreada, no aglomerada y se presenta en sacos industriales de 25 kg.",
        uso_previsto:
          "Materia prima para la fabricación de envases y láminas de vidrio.",
        presentacion: "Sacos de 25 kg, paletizados para transporte a granel.",
      },
      datos_relevantes: [
        "Producto mineral natural.",
        "Arena silícea con alto contenido de SiO2 (>85%).",
        "No coloreada ni aglomerada.",
        "Uso industrial (fabricación de vidrio).",
        "Presentación a granel en sacos industriales.",
      ],
      preguntas_analisis: [
        "¿En qué sección se encuentran los productos minerales en la LIGIE?",
        "¿Qué capítulo agrupa las arenas y piedras de origen natural?",
        "¿Es relevante la pureza de la sílice para la clasificación arancelaria?",
        "¿Qué diferencia a esta mercancía de otros minerales procesados o manufacturas de piedra?",
      ],
      pistas: [
        "Dirígete a la Sección V y localiza el Capítulo 25.",
        "Dentro del capítulo, identifica si hay una partida específica para 'arenas'.",
        "Verifica si la descripción de la subpartida hace referencia a 'arenas silíceas'.",
      ],
      respuesta_esperada: {
        fraccion: "2505.10.01",
        nico: "00",
        descripcion_fraccion: "Arenas silíceas.",
        justificacion_resumida:
          "La mercancía es un producto mineral (Sección V), arena natural (Capítulo 25), específicamente arena silícea con alto contenido de sílice, por lo que se clasifica en la fracción 2505.10.01 con NICO 00.",
      },
      tipo_actividad: "caso_practico",
    },
  ],
};
