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
      id: "caso-2",
      titulo: "Exportación de aceite vegetal de soya a Estados Unidos",
      seccion: "III",
      capitulo_aproximado: "15",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "ANMINCADISA (Michoacán, México). Operaciones agrícolas y exportación de aceites vegetales. Exportación de aceite vegetal a la industria alimentaria en Estados Unidos. Determinar la correcta fracción arancelaria, ya que el producto puede clasificarse dentro de diferentes categorías dependiendo de su grado de refinación. La empresa ha comenzado a exportar aceite vegetal obtenido de la molienda y prensado de semillas oleaginosas cultivadas en la región del Bajío. El producto se obtiene mediante un proceso mecánico de extracción en frío, seguido de filtración para eliminar residuos sólidos, sin aplicación de procesos químicos ni hidrogenación. El aceite es destinado principalmente a la industria alimentaria en Estados Unidos, donde será utilizado para la preparación de alimentos y como ingrediente base en productos procesados.",
      producto: {
        nombre_comercial: "Aceite vegetal comestible de soya",
        descripcion_detallada:
          "Aceite vegetal comestible de soya (Glycine max), refinado, desodorizado y filtrado. Presentación en botellas PET de 1 litro. Origen: cultivo nacional, región Bajío. Proceso productivo: prensado, refinado, filtración y embotellado. Composición: 100% aceite vegetal. No contiene aditivos ni mezclas con otros aceites.",
        uso_previsto: "Ingrediente alimenticio para cocción y fritura",
        presentacion: "Botellas PET de 1 litro",
      },
      datos_relevantes: [
        "Nombre comercial: Aceite vegetal comestible de soya",
        "Nombre técnico: Aceite obtenido de Glycine max",
        "Presentación: Botellas PET de 1 litro",
        "Tratamiento: Aceite refinado, desodorizado y filtrado",
        "Uso principal: Ingrediente alimenticio para cocción y fritura",
        "Origen: Cultivo nacional, región Bajío",
        "Proceso productivo: Prensado, refinado, filtración y embotellado",
        "Composición: 100% aceite vegetal",
        "Destino aduanal: Estados Unidos de América",
        "Observaciones: No contiene aditivos ni mezclas con otros aceites",
      ],
      // Inferido: no existen en el markdown; guían hacia sección, capítulo, partida y subpartida
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican las grasas y aceites vegetales?",
        "Dentro del Capítulo 15, ¿qué partida corresponde al aceite de soya?",
        "¿El aceite refinado permanece en el Capítulo 15 o se reclasifica?",
        "¿Es necesario aplicar la Regla 6 para determinar la subpartida específica?",
      ],
      // Inferido: no existen en el markdown; apuntan a Sección III, Cap. 15 y partida 15.07
      pistas: [
        "Dirígete a la Sección III (Grasas y aceites) y localiza el Capítulo 15.",
        "La Nota 1 del Capítulo 15 comprende aceites de semillas oleaginosas incluso refinados.",
        "La partida 15.07 comprende el aceite de soya incluso refinado.",
      ],
      respuesta_esperada: {
        fraccion: "1507.90.99",
        nico: "00",
        descripcion_fraccion: "Aceite de soya refinado",
        justificacion_resumida:
          "Se clasifica conforme al texto de la partida 15.07 (RGI 1). El producto es aceite de soya refinado; la Nota 1 del Capítulo 15 comprende aceites de semillas oleaginosas incluso refinados. La partida 15.07 comprende el aceite de soya incluso refinado. RGI 6 aplicada para la subpartida 1507.90 (Los demás).",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "caso-3",
      titulo: "Exportación de palomitas de maíz a Canadá",
      seccion: "IV",
      capitulo_aproximado: "19",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "ANMINCADISA Foods, ubicada en Guadalajara, produce botanas listas para consumo elaboradas a base de granos de maíz que han sido sometidos a un proceso de expansión térmica industrial. Posteriormente se les agrega sal y aceite vegetal para mejorar su sabor y textura. El producto se comercializa ampliamente en cadenas de autoservicio en México y recientemente se ha negociado su exportación a Canadá.",
      producto: {
        nombre_comercial: "Palomitas de maíz listas para consumo",
        descripcion_detallada:
          "Palomitas de maíz listas para consumo (maíz expandido sazonado). Presentación en bolsa aluminizada 100 g. Origen: México. Proceso productivo: expansión térmica, sazonado y empaque. Composición: maíz expandido, aceite vegetal, sal. Producto listo para consumo.",
        uso_previsto: "Botana lista para consumo",
        presentacion: "Bolsa aluminizada 100 g",
      },
      datos_relevantes: [
        "Nombre comercial: Palomitas de maíz listas para consumo",
        "Nombre técnico: Maíz expandido sazonado",
        "Presentación: Bolsa aluminizada 100 g",
        "Tratamiento: Expansión térmica, adición de sal y aceite",
        "Uso principal: Botana lista para consumo",
        "Origen: México",
        "Proceso productivo: Expansión térmica, sazonado y empaque",
        "Composición: Maíz expandido, aceite vegetal, sal",
        "Destino aduanal: Canadá",
        "Observaciones: Producto listo para consumo",
      ],
      // Inferido: no existen en el markdown; guían hacia sección, capítulo, partida y subpartida
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican los productos alimenticios preparados?",
        "Dentro del Capítulo 19, ¿qué partida corresponde a productos a base de cereales por inflado o tostado?",
        "¿El maíz expandido (palomitas) sigue siendo cereal en grano o es preparación?",
        "¿Qué subpartida comprende los productos obtenidos por inflado?",
      ],
      // Inferido: no existen en el markdown; apuntan a Sección IV, Cap. 19 y partida 19.04
      pistas: [
        "Dirígete a la Sección IV (Productos alimenticios preparados) y localiza el Capítulo 19.",
        "La Nota 1 del Capítulo 19 comprende preparaciones alimenticias obtenidas a partir de cereales.",
        "La partida 19.04 comprende productos a base de cereales obtenidos por inflado o tostado; incluye maíz inflado (palomitas).",
      ],
      respuesta_esperada: {
        fraccion: "1904.10.01",
        nico: "00",
        descripcion_fraccion: "Palomitas de maíz preparadas",
        justificacion_resumida:
          "Se clasifica conforme al texto de la partida 19.04 (RGI 1). El producto ya no es cereal en grano; ha sido expandido y preparado. La subpartida 1904.10 comprende productos a base de cereales obtenidos por inflado. La Nota 1 del Capítulo 19 incluye preparaciones alimenticias a partir de cereales; la Nota Explicativa SA incluye maíz inflado (palomitas).",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "caso-4",
      titulo: "Exportación de sal mineral natural a Estados Unidos",
      seccion: "V",
      capitulo_aproximado: "25",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "ANMINCADISA Industrial, dedicada al suministro de insumos para la industria de la construcción, comercializa sal mineral extraída de depósitos naturales en el estado de Coahuila. El producto se presenta en forma cristalina y se exporta principalmente a empresas del sector alimentario y químico en Estados Unidos.",
      producto: {
        nombre_comercial: "Sal mineral natural",
        descripcion_detallada:
          "Sal mineral natural (cloruro de sodio cristalino). Presentación en sacos de 25 kg. Origen: depósitos naturales en Coahuila, México. Proceso productivo: extracción minera, trituración, secado y molienda. Composición: cloruro de sodio > 97%. Producto sin aditivos. Uso industrial y alimentario.",
        uso_previsto: "Uso industrial y alimentario",
        presentacion: "Sacos de 25 kg",
      },
      datos_relevantes: [
        "Nombre comercial: Sal mineral natural",
        "Nombre técnico: Cloruro de sodio cristalino",
        "Presentación: Sacos de 25 kg",
        "Tratamiento: Trituración y secado",
        "Uso principal: Uso industrial y alimentario",
        "Origen: México",
        "Proceso productivo: Extracción minera y molienda",
        "Composición: Cloruro de sodio > 97%",
        "Destino aduanal: Estados Unidos",
        "Observaciones: Producto sin aditivos",
      ],
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican los productos minerales?",
        "Dentro del Capítulo 25, ¿qué partida corresponde a la sal?",
        "¿La sal triturada permanece en el Capítulo 25 o se reclasifica?",
        "¿Qué nota legal confirma que la sal natural triturada se clasifica en el Capítulo 25?",
      ],
      pistas: [
        "Dirígete a la Sección V (Productos minerales) y localiza el Capítulo 25.",
        "La Nota del Capítulo 25 comprende la sal natural incluso triturada.",
        "La partida 25.01 comprende la sal.",
      ],
      respuesta_esperada: {
        fraccion: "2501.00.99",
        nico: "00",
        descripcion_fraccion: "Sal mineral",
        justificacion_resumida:
          "Se clasifica conforme al texto de la partida 25.01 (RGI 1). El producto es sal mineral natural extraída de depósitos, sometida a trituración y secado. La Nota del Capítulo 25 comprende la sal natural incluso triturada. La Nota Explicativa SA incluye sal de origen mineral.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "caso-5",
      titulo: "Exportación de envase plástico HDPE a Estados Unidos",
      seccion: "VII",
      capitulo_aproximado: "39",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "ANMINCADISA Packaging produce envases plásticos utilizados para el almacenamiento de productos alimenticios. El envase está fabricado mediante moldeo por inyección utilizando polietileno de alta densidad (HDPE) y se exporta a Estados Unidos.",
      producto: {
        nombre_comercial: "Envase plástico HDPE",
        descripcion_detallada:
          "Recipiente de polietileno de alta densidad (HDPE). Presentación: capacidad 1 litro. Origen: México. Proceso productivo: moldeo por inyección. Composición: polietileno alta densidad. Uso: envase alimenticio. Destino: Estados Unidos.",
        uso_previsto: "Envase alimenticio",
        presentacion: "Capacidad 1 litro",
      },
      datos_relevantes: [
        "Nombre comercial: Envase plástico HDPE",
        "Nombre técnico: Recipiente de polietileno",
        "Presentación: Capacidad 1 litro",
        "Tratamiento: Moldeo por inyección",
        "Uso principal: Envase alimenticio",
        "Origen: México",
        "Proceso productivo: Moldeo plástico",
        "Composición: Polietileno alta densidad",
        "Destino aduanal: Estados Unidos",
      ],
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican los artículos de plástico?",
        "Dentro del Capítulo 39, ¿qué partida corresponde a artículos para transporte o envasado?",
        "¿El envase de plástico obtenido por moldeo se clasifica en el Capítulo 39?",
        "¿Qué subpartida comprende botellas, frascos y recipientes similares?",
      ],
      pistas: [
        "Dirígete a la Sección VII (Plásticos) y localiza el Capítulo 39.",
        "La Nota 1 del Capítulo 39 comprende las materias plásticas y sus manufacturas obtenidas por moldeo.",
        "La partida 39.23 comprende artículos para el transporte o envasado de plástico; la subpartida 3923.30 incluye botellas, frascos y recipientes similares.",
      ],
      respuesta_esperada: {
        fraccion: "3923.30.99",
        nico: "00",
        descripcion_fraccion: "Envases de plástico",
        justificacion_resumida:
          "Se clasifica conforme al texto de la partida 39.23 (RGI 1). El producto es un artículo de plástico para envasado, fabricado por moldeo por inyección con HDPE. La subpartida 3923.30 comprende bombonas, botellas, frascos y artículos similares. La Nota 1 del Capítulo 39 incluye manufacturas obtenidas por moldeo; la Nota Explicativa SA incluye envases y botellas.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "caso-6",
      titulo: "Exportación de tablas de madera de pino para construcción",
      seccion: "IX",
      capitulo_aproximado: "44",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "ANMINCADISA Forestal exporta madera de pino cortada en tablas para uso en construcción. El producto se obtiene mediante aserrado y secado al horno, con origen en Durango.",
      producto: {
        nombre_comercial: "Tablas de madera de pino",
        descripcion_detallada:
          "Madera aserrada de pino (Pinus spp.). Presentación: tablas 2 m. Origen: Durango, México. Proceso productivo: aserrado y secado al horno. Uso: construcción.",
        uso_previsto: "Construcción",
        presentacion: "Tablas 2 m",
      },
      datos_relevantes: [
        "Nombre comercial: Tablas de madera de pino",
        "Nombre técnico: Madera aserrada",
        "Presentación: Tablas 2 m",
        "Tratamiento: Secado al horno",
        "Uso principal: Construcción",
        "Origen: Durango",
        "Proceso productivo: Aserrado",
      ],
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican la madera y sus manufacturas?",
        "Dentro del Capítulo 44, ¿qué partida corresponde a madera aserrada?",
        "¿La madera aserrada longitudinalmente se clasifica en la partida 44.07?",
        "¿Qué subpartida comprende la madera de coníferas (pino)?",
      ],
      pistas: [
        "Dirígete a la Sección IX (Madera) y localiza el Capítulo 44.",
        "La partida 44.07 comprende madera aserrada o desbastada longitudinalmente.",
        "La subpartida 4407.10 comprende madera de coníferas; el pino es una conífera.",
      ],
      respuesta_esperada: {
        fraccion: "4407.10.99",
        nico: "00",
        descripcion_fraccion: "Madera aserrada de coníferas",
        justificacion_resumida:
          "Se clasifica conforme al texto de la partida 44.07 (RGI 1). El producto es madera de pino (conífera) aserrada en tablas. La partida 44.07 comprende madera aserrada o desbastada longitudinalmente; la subpartida 4407.10 comprende madera de coníferas. La Nota Explicativa SA incluye madera aserrada longitudinalmente.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "caso-7",
      titulo: "Exportación de billetera de cuero bovino a Estados Unidos",
      seccion: "VIII",
      capitulo_aproximado: "42",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "ANMINCADISA Leather Solutions, ubicada en León, Guanajuato, se especializa en la fabricación de accesorios de lujo elaborados con cuero bovino curtido. Uno de sus productos más demandados es una billetera de cuero natural diseñada para el mercado estadounidense. El producto se elabora a partir de cuero curtido vegetal, cortado y cosido mediante procesos industriales especializados. No contiene materiales textiles predominantes ni componentes electrónicos, y su función principal es el almacenamiento de dinero y tarjetas. El área de comercio exterior debe identificar la fracción arancelaria correcta, considerando que el cuero puede clasificarse tanto como materia prima (Cap. 41) como manufactura terminada (Cap. 42).",
      producto: {
        nombre_comercial: "Billetera de cuero bovino",
        descripcion_detallada:
          "Artículo de marroquinería elaborado con cuero curtido. Presentación: caja individual de cartón. Origen: México. Proceso productivo: curtido, corte, costura y ensamblado. Composición: cuero bovino curtido 95% / hilo y broches metálicos 5%. Uso: almacenamiento de billetes y tarjetas. Destino: Estados Unidos. Artículo terminado de marroquinería.",
        uso_previsto: "Almacenamiento de billetes y tarjetas",
        presentacion: "Caja individual de cartón",
      },
      datos_relevantes: [
        "Nombre comercial: Billetera de cuero bovino",
        "Nombre técnico: Artículo de marroquinería elaborado con cuero curtido",
        "Presentación: Caja individual de cartón",
        "Tratamiento: Corte, costura y acabado manual",
        "Uso principal: Almacenamiento de billetes y tarjetas",
        "Origen: México",
        "Proceso productivo: Curtido, corte, costura y ensamblado",
        "Composición: Cuero bovino curtido 95% / hilo y broches metálicos 5%",
        "Destino aduanal: Estados Unidos",
        "Observaciones: Artículo terminado de marroquinería",
      ],
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican las manufacturas de cuero?",
        "¿El producto es cuero en bruto (Cap. 41) o manufactura terminada (Cap. 42)?",
        "Dentro del Capítulo 42, ¿qué partida corresponde a billeteras y artículos de bolsillo?",
        "¿Qué subpartida comprende los artículos de bolsillo con superficie exterior de cuero natural?",
      ],
      pistas: [
        "Dirígete a la Sección VIII (Pieles y cueros) y localiza el Capítulo 42.",
        "El producto no es cuero en bruto ni curtido sin transformar; es un artículo terminado de marroquinería.",
        "La partida 42.02 comprende baúles, maletas, bolsos, billeteras y artículos similares; la subpartida 4202.31 comprende artículos de bolsillo con superficie exterior de cuero natural.",
      ],
      respuesta_esperada: {
        fraccion: "4202.31.99",
        nico: "00",
        descripcion_fraccion: "Billeteras de cuero",
        justificacion_resumida:
          "Se clasifica conforme al texto de la partida 42.02 (RGI 1). El producto no es cuero en bruto ni curtido sin transformar; es un artículo terminado de marroquinería. La partida 42.02 comprende billeteras; la subpartida 4202.31 comprende artículos de bolsillo con superficie exterior de cuero natural o cuero regenerado. La Nota 2 del Capítulo 42 comprende artículos de bolsillo elaborados con cuero natural; la Nota Explicativa SA incluye billeteras y carteras de cuero.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "caso-8",
      titulo: "Exportación de papel kraft industrial a Estados Unidos",
      seccion: "X",
      capitulo_aproximado: "48",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "ANMINCADISA PaperTech produce papel kraft utilizado en la fabricación de bolsas industriales y empaques ecológicos. El producto es un papel sin estucar, elaborado a partir de pasta química de madera y presentado en rollos de gran formato destinados a procesos industriales. Se exporta a Estados Unidos.",
      producto: {
        nombre_comercial: "Papel kraft industrial",
        descripcion_detallada:
          "Papel obtenido de pasta química de madera. Presentación: rollos de 500 kg. Origen: México. Proceso productivo: producción de pasta, prensado y secado. Composición: fibras de celulosa. Uso: fabricación de bolsas y empaques. Destino: Estados Unidos. Papel sin recubrimiento.",
        uso_previsto: "Fabricación de bolsas y empaques",
        presentacion: "Rollos de 500 kg",
      },
      datos_relevantes: [
        "Nombre comercial: Papel kraft industrial",
        "Nombre técnico: Papel obtenido de pasta química de madera",
        "Presentación: Rollos de 500 kg",
        "Tratamiento: Secado y prensado industrial",
        "Uso principal: Fabricación de bolsas y empaques",
        "Origen: México",
        "Proceso productivo: Producción de pasta, prensado y secado",
        "Composición: Fibras de celulosa",
        "Destino aduanal: Estados Unidos",
        "Observaciones: Papel sin recubrimiento",
      ],
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican el papel y el cartón?",
        "Dentro del Capítulo 48, ¿qué partida corresponde a papel kraft sin estucar?",
        "¿El papel kraft para sacos se clasifica en la partida 48.04?",
        "¿Qué subpartida comprende el papel kraft para sacos industriales?",
      ],
      pistas: [
        "Dirígete a la Sección X (Pasta de madera y papel) y localiza el Capítulo 48.",
        "La partida 48.04 comprende papel y cartón Kraft sin estucar ni recubrir.",
        "La subpartida 4804.11 comprende papel kraft para sacos; el producto se destina a fabricación de bolsas industriales.",
      ],
      respuesta_esperada: {
        fraccion: "4804.11.99",
        nico: "00",
        descripcion_fraccion: "Papel kraft para sacos",
        justificacion_resumida:
          "Se clasifica conforme al texto de la partida 48.04 (RGI 1). El producto es papel kraft sin estucar, elaborado a partir de pasta química de madera, presentado en rollos. La subpartida 4804.11 comprende papel kraft para sacos. El Capítulo 48 comprende papel obtenido de pasta de madera; la Nota Explicativa SA incluye papel kraft utilizado para sacos industriales.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "caso-9",
      titulo: "Exportación de camiseta de algodón a Estados Unidos",
      seccion: "XI",
      capitulo_aproximado: "61",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "ANMINCADISA Textiles produce camisetas de algodón destinadas al mercado norteamericano. Las prendas se fabrican mediante tejido de punto utilizando hilo de algodón peinado. El producto se exporta a Estados Unidos.",
      producto: {
        nombre_comercial: "Camiseta de algodón",
        descripcion_detallada:
          "Prenda de vestir de tejido de punto. Presentación: bolsa plástica individual. Origen: México. Proceso productivo: tejido, corte y costura. Composición: 100% algodón. Uso: prenda de vestir. Destino: Estados Unidos.",
        uso_previsto: "Prenda de vestir",
        presentacion: "Bolsa plástica individual",
      },
      datos_relevantes: [
        "Nombre comercial: Camiseta de algodón",
        "Nombre técnico: Prenda de vestir de tejido de punto",
        "Presentación: Bolsa plástica individual",
        "Tratamiento: Corte y confección",
        "Uso principal: Prenda de vestir",
        "Origen: México",
        "Proceso productivo: Tejido, corte y costura",
        "Composición: 100% algodón",
        "Destino aduanal: Estados Unidos",
      ],
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican las materias textiles y prendas de vestir?",
        "Dentro del Capítulo 61, ¿qué partida corresponde a camisetas?",
        "¿El producto de tejido de punto se clasifica en el Capítulo 61 o 62?",
        "¿Qué subpartida comprende las camisetas de algodón?",
      ],
      pistas: [
        "Dirígete a la Sección XI (Materias textiles) y localiza el Capítulo 61.",
        "La partida 61.09 comprende camisetas (T-shirts) de punto.",
        "La subpartida 6109.10 comprende camisetas de algodón; el producto es 100% algodón.",
      ],
      respuesta_esperada: {
        fraccion: "6109.10.99",
        nico: "00",
        descripcion_fraccion: "Camisetas de algodón",
        justificacion_resumida:
          "Se clasifica conforme al texto de la partida 61.09 (RGI 1). El producto es una camiseta elaborada por tejido de punto con hilo de algodón peinado. La subpartida 6109.10 comprende camisetas de algodón. El Capítulo 61 comprende prendas de vestir de punto; la Nota Explicativa SA incluye camisetas de punto.",
      },
      tipo_actividad: "caso_practico",
    },
    {
      id: "CASO_SEC2_006",
      titulo: "Exportación de maíz palomero a Estados Unidos",
      seccion: "II",
      capitulo_aproximado: "10",
      nivel_dificultad: "intermedio",
      contexto_empresarial:
        "ANMINCADISA (Sinaloa, México) es una empresa dedicada a la producción, selección y empaque de granos de maíz agrícolas. Su objetivo es exportar a mercados de Norteamérica (EE. UU.). Necesita identificar la fracción arancelaria para cumplimiento regulatorio, tarifas preferenciales y normativas sanitarias. El producto estrella es un grano seco de origen vegetal, cáscara dura y forma redondeada, conocido por su capacidad de expansión (palomitas de maíz), utilizado en cines y autoservicios tras expansión térmica.",
      producto: {
        nombre_comercial:
          "Grano expandible de endospermo vítreo (variedad híbrida)",
        descripcion_detallada:
          "Zea mays var. everta – grano íntegro, deshidratado. 100% grano entero con contenido natural de almidón vítreo y humedad <14%. Grano crudo, sin cocción, sin molienda, sin aditivos ni condimentos. No contiene sal, grasa, saborizantes ni ingredientes añadidos.",
        uso_previsto:
          "Consumo humano tras expansión térmica (proceso doméstico o industrial). Destino: cines y autoservicios.",
        presentacion:
          "Bolsa plástica grado alimenticio de 1 kg, al vacío. Origen: cultivo nacional, zona centro-norte de Sinaloa.",
      },
      datos_relevantes: [
        "Nombre técnico: Zea mays var. everta – grano íntegro, deshidratado.",
        "Tratamiento: grano crudo, sin cocción, sin molienda, sin aditivos ni condimentos.",
        "Composición: 100% grano entero, almidón vítreo, humedad <14%.",
        "Proceso productivo: selección, secado, calibración y empaque.",
        "No se presenta como alimento listo para consumo.",
        "Destino aduanal: Estados Unidos de América.",
      ],
      preguntas_analisis: [
        "¿En qué sección de la LIGIE se clasifican los cereales en grano?",
        "Dentro del Capítulo 10, ¿qué partida corresponde al maíz?",
        "¿El producto es maíz para siembra o entra en 'Los demás'?",
        "Dentro de 1005.90, ¿cómo se distingue entre maíz blanco, amarillo y palomero?",
        "¿Es necesario aplicar la Regla 6 para la subpartida específica?",
      ],
      pistas: [
        "Inicia en la Sección II (Productos del reino vegetal) y revisa el Capítulo 10 (Cereales).",
        "La Nota 1 del Capítulo 10 excluye cereales cocidos o preparados (partida 19.04).",
        "La Nota Nacional 2 del Capítulo 10 define el grano de maíz palomero.",
      ],
      respuesta_esperada: {
        fraccion: "1005.90.99",
        nico: "01",
        descripcion_fraccion: "Maíz, los demás (Palomero).",
        justificacion_resumida:
          "Se clasifica en Sección II, Capítulo 10 (Cereales), partida 10.05 (Maíz). No es para siembra; entra en 1005.90 (Los demás). El producto es grano íntegro, sin cocción ni aditivos, destinado a expansión térmica, conforme a la Nota Nacional 2 del Capítulo 10. RGI 1 y 6 aplicadas.",
      },
      tipo_actividad: "caso_practico",
    },
  ],
};
