import { Section } from "@/types/clasificacion-arancelaria";

export const sectionX: Section = {
  code: "X",
  title:
    "PASTA DE MADERA O DE LAS DEMÁS MATERIAS FIBROSAS CELULÓSICAS; PAPEL O CARTÓN PARA RECICLAR (DESPERDICIOS Y DESECHOS); PAPEL O CARTÓN Y SUS APLICACIONES",
  notes: {
    legales: [],
    nacionales: [],
    explicativas: [],
  },
  chapters: [
    {
      code: "46",
      title: "Manufacturas de espartería o cestería",
      notes: {
        legales: [
          {
            id: "NL-CAP46-1",
            text: "En este Capítulo, la expresión materia trenzable se refiere a materias en un estado o forma tales que puedan trenzarse, entrelazarse o trabajarse de modo análogo. Se consideran como tales, por ejemplo: la paja, mimbre, sauce, bambú, ratán (roten), junco, caña, cintas de madera, tiras de otros vegetales (por ejemplo: tiras de corteza, hojas estrechas y rafia u otras tiras obtenidas de hojas anchas), fibras textiles naturales sin hilar, monofilamentos, tiras y formas similares de plástico y tiras de papel, pero no las tiras de cuero o piel preparados o de cuero regenerado, de fieltro o tela sin tejer, ni el cabello, crin, mechas e hilados de materia textil ni monofilamentos, tiras y formas similares del Capítulo 54.",
          },
          {
            id: "NL-CAP46-2",
            text: "Este Capítulo no comprende: a) los revestimientos de paredes de la partida 48.14; b) los cordeles, cuerdas y cordajes, trenzados o no (partida 56.07); c) el calzado y los sombreros, demás tocados, y sus partes, de los Capítulos 64 y 65; d) los vehículos y las cajas para vehículos, de cestería (Capítulo 87); e) los artículos del Capítulo 94 (por ejemplo: muebles, luminarias y aparatos de alumbrado).",
          },
          {
            id: "NL-CAP46-3",
            text: "En la partida 46.01, se consideran materia trenzable, trenzas y artículos similares de materia trenzable, paralelizados, los artículos constituidos por materia trenzable, trenzas o artículos similares de materia trenzable, yuxtapuestos formando napas por medio de ligaduras, aunque estas últimas sean de materia textil hilada.",
          },
        ],
        subpartida: [],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "46.01",
          title:
            "Trenzas y artículos similares, de materia trenzable, incluso ensamblados en tiras; materia trenzable, trenzas y artículos similares de materia trenzable, tejidos o paralelizados, en forma plana, incluso terminados (por ejemplo: esterillas, esteras, cañizos).",
          subheadings: [
            {
              code: "4601.21",
              title: "De bambú.",
              classifications: [
                {
                  code: "4601.21.01",
                  title: "De bambú.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "SEM"],
                  nicos: [{ code: "00", title: "De bambú." }],
                },
              ],
            },
            {
              code: "4601.22",
              title: "De ratán (roten).",
              classifications: [
                {
                  code: "4601.22.01",
                  title: "De ratán (roten).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [{ code: "00", title: "De ratán (roten)." }],
                },
              ],
            },
            {
              code: "4601.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "4601.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4601.92",
              title: "De bambú.",
              classifications: [
                {
                  code: "4601.92.01",
                  title:
                    "Trenzas y artículos similares, incluso ensamblados en tiras.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Trenzas y artículos similares, incluso ensamblados en tiras.",
                    },
                  ],
                },
                {
                  code: "4601.92.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4601.93",
              title: "De ratán (roten).",
              classifications: [
                {
                  code: "4601.93.02",
                  title: "De ratán (roten).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS5", "PS4", "SEM"],
                  nicos: [{ code: "00", title: "De ratán (roten)." }],
                },
              ],
            },
            {
              code: "4601.94",
              title: "De las demás materias vegetales.",
              classifications: [
                {
                  code: "4601.94.01",
                  title:
                    "Trenzas y artículos similares, incluso ensamblados en tiras.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Trenzas y artículos similares, incluso ensamblados en tiras.",
                    },
                  ],
                },
                {
                  code: "4601.94.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS5", "PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4601.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "4601.99.01",
                  title:
                    "Trenzas y artículos similares, incluso ensamblados en tiras.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Trenzas y artículos similares, incluso ensamblados en tiras.",
                    },
                  ],
                },
                {
                  code: "4601.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "46.02",
          title:
            'Artículos de cestería obtenidos directamente en su forma con materia trenzable o confeccionados con artículos de la partida 46.01; manufacturas de esponja vegetal (paste o "lufa").',
          subheadings: [
            {
              code: "4602.11",
              title: "De bambú.",
              classifications: [
                {
                  code: "4602.11.01",
                  title: "De bambú.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS5", "PS4", "SEM"],
                  nicos: [{ code: "00", title: "De bambú." }],
                },
              ],
            },
            {
              code: "4602.12",
              title: "De ratán (roten).",
              classifications: [
                {
                  code: "4602.12.01",
                  title: "De ratán (roten).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "SEM"],
                  nicos: [{ code: "00", title: "De ratán (roten)." }],
                },
              ],
            },
            {
              code: "4602.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "4602.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS5", "PS4", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4602.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4602.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "47",
      title:
        "Pasta de madera o de las demás materias fibrosas celulósicas; papel o cartón para reciclar (desperdicios y desechos)",
      notes: {
        legales: [
          {
            id: "NL-CAP47-1",
            text: "En la partida 47.02, se entiende por pasta química de madera para disolver la pasta química cuya fracción de pasta insoluble después de una hora en una disolución al 18% de hidróxido de sodio (NaOH) a 20°C, sea superior o igual al 92% en peso en la pasta de madera a la sosa (soda) o al sulfato o superior o igual al 88% en peso en la pasta de madera al sulfito, siempre que en este último caso el contenido de cenizas sea inferior o igual al 0.15% en peso.",
          },
        ],
        subpartida: [],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "47.01",
          title: "Pasta mecánica de madera.",
          subheadings: [
            {
              code: "4701.00",
              title: "Pasta mecánica de madera.",
              classifications: [
                {
                  code: "4701.00.01",
                  title: "Pasta mecánica de madera.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Pasta mecánica de madera." }],
                },
              ],
            },
          ],
        },
        {
          code: "47.02",
          title: "Pasta química de madera para disolver.",
          subheadings: [
            {
              code: "4702.00",
              title: "Pasta química de madera para disolver.",
              classifications: [
                {
                  code: "4702.00.02",
                  title: "Pasta química de madera para disolver.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Pasta química de la alfacelulosa grado para disolver, con una viscosidad intrínseca de 3 a 4.5 y una concentración de 90 al 95% de alfacelulosa regenerable en sosa al 10%.",
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "47.03",
          title:
            "Pasta química de madera a la sosa (soda) o al sulfato, excepto la pasta para disolver.",
          subheadings: [
            {
              code: "4703.11",
              title: "De coníferas.",
              classifications: [
                {
                  code: "4703.11.03",
                  title: "De coníferas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Al sulfato, excepto que se destinen a la fabricación de papel prensa, o de cartón Kraft, para envases desechables, para leche.",
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "4703.19",
              title: "Distinta de la de coníferas.",
              classifications: [
                {
                  code: "4703.19.03",
                  title: "Distinta de la de coníferas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Distinta de la de coníferas." },
                  ],
                },
              ],
            },
            {
              code: "4703.21",
              title: "De coníferas.",
              classifications: [
                {
                  code: "4703.21.03",
                  title: "De coníferas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "Al sulfato." },
                    { code: "02", title: "A la sosa (soda)." },
                  ],
                },
              ],
            },
            {
              code: "4703.29",
              title: "Distinta de la de coníferas.",
              classifications: [
                {
                  code: "4703.29.03",
                  title: "Distinta de la de coníferas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "Al sulfato." },
                    { code: "02", title: "A la sosa (soda)." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "47.04",
          title:
            "Pasta química de madera al sulfito, excepto la pasta para disolver.",
          subheadings: [
            {
              code: "4704.11",
              title: "De coníferas.",
              classifications: [
                {
                  code: "4704.11.01",
                  title: "De coníferas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "De coníferas." }],
                },
              ],
            },
            {
              code: "4704.19",
              title: "Distinta de la de coníferas.",
              classifications: [
                {
                  code: "4704.19.01",
                  title: "Distinta de la de coníferas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Distinta de la de coníferas." },
                  ],
                },
              ],
            },
            {
              code: "4704.21",
              title: "De coníferas.",
              classifications: [
                {
                  code: "4704.21.01",
                  title: "De coníferas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "De coníferas." }],
                },
              ],
            },
            {
              code: "4704.29",
              title: "Distinta de la de coníferas.",
              classifications: [
                {
                  code: "4704.29.01",
                  title: "Distinta de la de coníferas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Distinta de la de coníferas." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "47.05",
          title:
            "Pasta de madera obtenida por la combinación de procedimientos mecánico y químico.",
          subheadings: [
            {
              code: "4705.00",
              title:
                "Pasta de madera obtenida por la combinación de procedimientos mecánico y químico.",
              classifications: [
                {
                  code: "4705.00.01",
                  title:
                    "Pasta de madera obtenida por la combinación de procedimientos mecánico y químico.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Pasta de madera obtenida por la combinación de procedimientos mecánico y químico.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "47.06",
          title:
            "Pasta de fibras obtenidas de papel o cartón reciclado (desperdicios y desechos) o de las demás materias fibrosas celulósicas.",
          subheadings: [
            {
              code: "4706.10",
              title: "Pasta de línter de algodón.",
              classifications: [
                {
                  code: "4706.10.01",
                  title: "Pasta de línter de algodón.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Pasta de línter de algodón." }],
                },
              ],
            },
            {
              code: "4706.20",
              title:
                "Pasta de fibras obtenidas de papel o cartón reciclado (desperdicios y desechos).",
              classifications: [
                {
                  code: "4706.20.01",
                  title:
                    "Pasta de fibras obtenidas de papel o cartón reciclado (desperdicios y desechos).",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Pasta de fibras obtenidas de papel o cartón reciclado (desperdicios y desechos).",
                    },
                  ],
                },
              ],
            },
            {
              code: "4706.30",
              title: "Las demás, de bambú.",
              classifications: [
                {
                  code: "4706.30.91",
                  title: "Las demás, de bambú.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Las demás, de bambú." }],
                },
              ],
            },
            {
              code: "4706.91",
              title: "Mecánicas.",
              classifications: [
                {
                  code: "4706.91.01",
                  title: "Mecánicas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Mecánicas." }],
                },
              ],
            },
            {
              code: "4706.92",
              title: "Químicas.",
              classifications: [
                {
                  code: "4706.92.01",
                  title: "Químicas.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Químicas." }],
                },
              ],
            },
            {
              code: "4706.93",
              title:
                "Obtenidas por la combinación de procedimientos mecánico y químico.",
              classifications: [
                {
                  code: "4706.93.01",
                  title:
                    "Obtenidas por la combinación de procedimientos mecánico y químico.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Obtenidas por la combinación de procedimientos mecánico y químico.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "47.07",
          title: "Papel o cartón para reciclar (desperdicios y desechos).",
          subheadings: [
            {
              code: "4707.10",
              title: "Papel o cartón Kraft crudo o papel o cartón corrugado.",
              classifications: [
                {
                  code: "4707.10.01",
                  title:
                    "Papel o cartón Kraft crudo o papel o cartón corrugado.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Papel o cartón Kraft crudo o papel o cartón corrugado.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4707.20",
              title:
                "Los demás papeles o cartones obtenidos principalmente a partir de pasta química blanqueada sin colorear en la masa.",
              classifications: [
                {
                  code: "4707.20.91",
                  title:
                    "Los demás papeles o cartones obtenidos principalmente a partir de pasta química blanqueada sin colorear en la masa.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Los demás papeles o cartones obtenidos principalmente a partir de pasta química blanqueada sin colorear en la masa.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4707.30",
              title:
                "Papel o cartón obtenido principalmente a partir de pasta mecánica (por ejemplo: diarios, periódicos e impresos similares).",
              classifications: [
                {
                  code: "4707.30.01",
                  title:
                    "Papel o cartón obtenido principalmente a partir de pasta mecánica (por ejemplo: diarios, periódicos e impresos similares).",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Papel o cartón obtenido principalmente a partir de pasta mecánica (por ejemplo: diarios, periódicos e impresos similares).",
                    },
                  ],
                },
              ],
            },
            {
              code: "4707.90",
              title:
                "Los demás, incluidos los desperdicios y desechos sin clasificar.",
              classifications: [
                {
                  code: "4707.90.91",
                  title:
                    "Los demás, incluidos los desperdicios y desechos sin clasificar.",
                  umt: "Kg",
                  importDuty: "Ex",
                  exportDuty: "Ex",
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Los demás, incluidos los desperdicios y desechos sin clasificar.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "48",
      title:
        "Papel y cartón; manufacturas de pasta de celulosa, de papel o cartón",
      notes: {
        legales: [
          {
            id: "NL-CAP48-1",
            text: "En este Capítulo, salvo disposición en contrario, toda referencia a papel incluye también al cartón, sin que se tenga en cuenta el espesor o el peso por m2.",
          },
          {
            id: "NL-CAP48-2",
            text: "Este Capítulo no comprende: a) los artículos del Capítulo 30; b) las hojas para el marcado a fuego de la partida 32.12; c) los papeles perfumados y los papeles impregnados o recubiertos de cosméticos (Capítulo 33); d) el papel y la guata de celulosa impregnados, recubiertos o revestidos de jabón o de detergentes (partida 34.01), o de cremas, encáusticos, abrillantadores (lustres) o preparaciones similares (partida 34.05); e) el papel y cartón sensibilizados de las partidas 37.01 a 37.04; f) el papel impregnado con reactivos de diagnóstico o de laboratorio (partida 38.22); g) el plástico estratificado con papel o cartón, los productos constituidos por una capa de papel o cartón recubiertos o revestidos de una capa de plástico cuando el espesor de esta última sea superior a la mitad del espesor total, y las manufacturas de estas materias, excepto los revestimientos para paredes de la partida 48.14 (Capítulo 39); h) los artículos de la partida 42.02 (por ejemplo, artículos de viaje); ij) los artículos del Capítulo 46 (manufacturas de espartería o cestería); k) los hilados de papel y los artículos textiles de hilados de papel (Sección XI); l) los artículos de los Capítulos 64 o 65; m) los artículos del Capítulo 67; n) las joyas (Capítulo 71); o) los tubos, elementos de tubería, depósitos, cubas, cisternas y continentes similares, de papel o cartón, utilizados para el transporte o envasado de mercancías en bloque (partida 73.10); p) los sombreros, demás tocados, y sus partes, del Capítulo 65; q) los artículos del Capítulo 94 (por ejemplo, muebles); r) los artículos del Capítulo 95 (por ejemplo, juguetes, juegos, artefactos deportivos); s) los artículos del Capítulo 96 (por ejemplo, cepillos).",
          },
          {
            id: "NL-CAP48-3",
            text: "Sin perjuicio de lo dispuesto en la Nota 2, las partidas 48.01 a 48.05 comprenden sólo el papel y cartón, en bobinas (rollos) o en hojas: a) de forma cuadrada o rectangular, con una dimensión por lo menos superior a 36 cm; o b) de forma cuadrada o rectangular, con dos dimensiones por lo menos superiores a 15 cm, siendo una dimensión superior a 36 cm.",
          },
          {
            id: "NL-CAP48-4",
            text: "La partida 48.06 comprende el papel y cartón sulfurizados, de pergamino vegetal, de papel cristal y demás papeles calandrados transparentes o translúcidos, en bobinas (rollos) o en hojas. Se aplica cualquiera que sea el tamaño. Excepto el papel de la partida 48.03.",
          },
          {
            id: "NL-CAP48-5",
            text: "En la partida 48.07, los términos papel y cartón multicapa no recubiertos comprenden el papel y cartón en los que una o más capas se han unido mediante un adhesivo.",
          },
          {
            id: "NL-CAP48-6",
            text: "Se aplica también a los papeles y cartones con las caras coloreadas, marmoleadas o impresas (por ejemplo, papeles para envolver regalos).",
          },
          {
            id: "NL-CAP48-7",
            text: "La partida 48.08 comprende, siempre que no hayan sido recubiertos, impregnados o revestidos, el papel y cartón ondulados, el papel y cartón gofrados, repujados, plegados, rizados o perforados, en bobinas (rollos) o en hojas, excepto el papel del tipo utilizado para papel higiénico de la partida 48.03.",
          },
          {
            id: "NL-CAP48-8",
            text: "La partida 48.09 comprende el papel carbón, el papel autocopia y demás papeles para copiar o transferir (incluidos los estucados, recubiertos o impregnados para duplicar), estén o no impresos, en bobinas (rollos) o en hojas.",
          },
          {
            id: "NL-CAP48-9",
            text: "La partida 48.10 comprende el papel y cartón estucados, por una o ambas caras, con caolín u otras sustancias inorgánicas, con o sin aglutinante, y sin otro recubrimiento, en bobinas (rollos) o en hojas.",
          },
          {
            id: "NL-CAP48-10",
            text: "La partida 48.14 no comprende: a) el papel y cartón para revestimiento de suelos, con soporte de papel o cartón (partida 48.21); b) el papel y cartón con grabados o relieves con un motivo o dibujo, cuando el papel o cartón sea la parte visible; c) el papel y cartón con recubrimientos o revestimientos de un espesor superior a 0.5 mm de materias plásticas.",
          },
          {
            id: "NL-CAP48-11",
            text: "Se clasifican, entre otros, en la partida 48.23, el papel y cartón perforados para mecanismos Jacquard o similares y los encajes de papel.",
          },
          {
            id: "NL-CAP48-12",
            text: "El papel, cartón, guata de celulosa y las manufacturas de estas materias, con impresiones o ilustraciones que no sean accesorias en relación con su utilización principal se clasifican en el Capítulo 49, excepto los artículos de las partidas 48.14 y 48.21.",
          },
        ],
        subpartida: [
          {
            id: "NS-CAP48-1",
            text: "En las subpartidas 4804.11 y 4804.19, se considera papel y cartón para caras (cubiertas) (“Kraftliner”), el papel y cartón alisados en ambas caras o satinados en una cara, presentados en bobinas (rollos) en los que el contenido de fibras de madera obtenidas por el procedimiento químico al sulfato o a la sosa (soda) sea superior o igual al 80% en peso del contenido total de fibra, de peso superior a 115 g/m² y con una resistencia mínima al estallido Mullen igual a los valores indicados en el cuadro siguiente o, para cualquier otro peso, sus equivalentes interpolados o extrapolados linealmente. Peso Resistencia mínima al estallido Mullen g/m² kPa 115 393 125 417 200 637 300 824 400 961",
          },
          {
            id: "NS-CAP48-2",
            text: "En las subpartidas 4804.21 y 4804.29, se considera papel Kraft para sacos (bolsas) el papel alisado en ambas caras, presentado en bobinas (rollos), en el que el contenido de fibras de madera obtenidas por el procedimiento químico al sulfato o a la sosa (soda) sea superior o igual al 80% en peso del contenido total de fibra, de peso superior o igual a 70 g/m² pero inferior o igual a 115 g/m² y con una resistencia mínima al estallido Mullen superior o igual a 2.5 kPa·m2/g.",
          },
          {
            id: "NS-CAP48-3",
            text: "En la subpartida 4805.11, se entiende por papel semiquímico para acanalar el papel presentado en bobinas (rollos), en el que el contenido de fibras crudas de madera de frondosas obtenidas por la combinación de procedimientos mecánico y químico sea superior o igual al 65% en peso del contenido total de fibra y con una resistencia al aplastamiento según el método CMT 30 (Corrugated Medium Test con 30 minutos de acondicionamiento) superior a 1.8 newtons/g/m2 para una humedad relativa de 50%, a una temperatura de 23ºC.",
          },
          {
            id: "NS-CAP48-4",
            text: "La subpartida 4805.12 comprende el papel en bobinas (rollos), compuesto principalmente de pasta de paja obtenida por la combinación de procedimientos mecánico y químico, de peso superior o igual a 130g/m2 y con una resistencia al aplastamiento según el método CMT 30 (Corrugated Medium Test con 30 minutos de acondicionamiento) superior a 1.4 newtons/g/m2 para una humedad relativa de 50%, a una temperatura de 23ºC.",
          },
          {
            id: "NS-CAP48-5",
            text: "Las subpartidas 4805.24 y 4805.25 comprenden el papel y cartón compuestos exclusiva o principalmente de pasta de papel o cartón reciclado (de desperdicios y desechos). El papel “Testliner” puede igualmente tener una capa superficial de papel coloreado o compuesto de pasta blanqueada o cruda, sin reciclar. Estos productos tienen un índice de estallido Mullen superior o igual a 2 kPa·m2/g.",
          },
          {
            id: "NS-CAP48-6",
            text: "En la subpartida 4805.30, se entiende por papel sulfito para envolver, el papel satinado en una cara en el que el contenido de fibras de madera obtenidas por el procedimiento químico al sulfito sea superior al 40% en peso del contenido total de fibra, con un contenido de cenizas inferior o igual al 8% y con un índice de estallido Mullen superior o igual a 1.47 kPa·m2/g.",
          },
          {
            id: "NS-CAP48-7",
            text: "En la subpartida 4810.22, se entiende por papel estucado o cuché ligero (liviano) (“L.W.C.”) (“light-weight coated”), el papel estucado en las dos caras, de peso inferior o igual a 72 g/m², con un peso de la capa de estucado inferior o igual a 15 g/m² por cada cara, con un soporte constituido por fibras de madera obtenidas por procedimiento mecánico, cuyo contenido sea superior o igual al 50% en peso del contenido total de fibra.",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP48-1",
            text: "En este Capítulo, la expresión papel y cartón estucados se aplica por igual a los papeles y cartones que han sido recubiertos, en una o ambas caras, con sustancias orgánicas o inorgánicas.",
          },
        ],
        explicativas: [],
      },

      headings: [
        {
          code: "48.01",
          title: "Papel prensa en bobinas (rollos) o en hojas.",
          subheadings: [
            {
              code: "4801.00",
              title: "Papel prensa en bobinas (rollos) o en hojas.",
              classifications: [
                {
                  code: "4801.00.01",
                  title: "Papel prensa en bobinas (rollos) o en hojas.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Papel prensa en bobinas (rollos) o en hojas.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "48.02",
          title:
            "Papel y cartón, sin estucar ni recubrir, de los tipos utilizados para escribir, imprimir u otros fines gráficos y papel y cartón para tarjetas o cintas para perforar (sin perforar), en bobinas (rollos) o en hojas de forma cuadrada o rectangular, de cualquier tamaño, excepto el papel de las partidas 48.01 o 48.03; papel y cartón hechos a mano (hoja a hoja).",
          subheadings: [
            {
              code: "4802.10",
              title: "Papel y cartón hechos a mano (hoja a hoja).",
              classifications: [
                {
                  code: "4802.10.01",
                  title: "Papel y cartón hechos a mano (hoja a hoja).",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Papel y cartón hechos a mano (hoja a hoja).",
                    },
                  ],
                },
              ],
            },

            {
              code: "4802.20",
              title:
                "Papel y cartón soporte para papel o cartón fotosensibles, termosensibles o electrosensibles.",
              classifications: [
                {
                  code: "4802.20.03",
                  title:
                    "Papel y cartón soporte para papel o cartón fotosensibles, termosensibles o electrosensibles.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Papel y cartón soporte para papel o cartón fotosensibles, termosensibles o electrosensibles.",
                    },
                  ],
                },
              ],
            },

            {
              code: "4802.40",
              title: "Papel soporte para papeles de decorar paredes.",
              classifications: [
                {
                  code: "4802.40.01",
                  title: "Papel soporte para papeles de decorar paredes.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Papel soporte para papeles de decorar paredes.",
                    },
                  ],
                },
              ],
            },

            {
              code: "4802.54",
              title:
                "Los demás papeles y cartones, sin fibras obtenidas por procedimiento mecánico o químico-mecánico o con un contenido total de estas fibras inferior o igual al 10% en peso del contenido total de fibra: De peso inferior a 40 g/m2.",
              classifications: [
                {
                  code: "4802.54.04",
                  title:
                    "Para la impresión de billetes de banco, cuando se importe o exporte por el Banco de México.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Para la impresión de billetes de banco, cuando se importe o exporte por el Banco de México.",
                    },
                  ],
                },
                {
                  code: "4802.54.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4"],
                  nicos: [
                    { code: "01", title: "Papel para dibujo." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },

            {
              code: "4802.55",
              title:
                "Los demás papeles y cartones, sin fibras obtenidas por procedimiento mecánico o químico-mecánico o con un contenido total de estas fibras inferior o igual al 10% en peso del contenido total de fibra: De peso superior o igual a 40 g/m2 pero inferior o igual a 150 g/m2, en bobinas (rollos).",
              classifications: [
                {
                  code: "4802.55.02",
                  title:
                    "Papel utilizado en máquinas copiadoras o reproductoras y cuyo revelado se hace por la acción del calor.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Papel utilizado en máquinas copiadoras o reproductoras y cuyo revelado se hace por la acción del calor.",
                    },
                  ],
                },
                {
                  code: "4802.55.03",
                  title:
                    "Para la impresión de billetes de banco cuando se importe o exporte por el Banco de México.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Para la impresión de billetes de banco cuando se importe o exporte por el Banco de México.",
                    },
                  ],
                },
                {
                  code: "4802.55.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 30,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "CC"],
                  nicos: [
                    { code: "01", title: "Bond o ledger." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },

            {
              code: "4802.56",
              title:
                "Los demás papeles y cartones, sin fibras obtenidas por procedimiento mecánico o químico-mecánico o con un contenido total de estas fibras inferior o igual al 10% en peso del contenido total de fibra: De peso superior o igual a 40 g/m2 pero inferior o igual a 150 g/m2, en hojas en las que un lado sea inferior o igual a 435 mm y el otro sea inferior o igual a 297 mm, medidos sin plegar.",
              classifications: [
                {
                  code: "4802.56.02",
                  title:
                    "Para la impresión de billetes de banco cuando se importe o exporte por el Banco de México.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Para la impresión de billetes de banco cuando se importe o exporte por el Banco de México.",
                    },
                  ],
                },
                {
                  code: "4802.56.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 30,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "CC"],
                  nicos: [
                    { code: "01", title: "Bond o ledger." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },

            {
              code: "4802.57",
              title:
                "Los demás papeles y cartones, sin fibras obtenidas por procedimiento mecánico o químico-mecánico o con un contenido total de estas fibras inferior o igual al 10% en peso del contenido total de fibra: Los demás, de peso superior o igual a 40 g/m2 pero inferior o igual a 150 g/m2.",
              classifications: [
                {
                  code: "4802.57.91",
                  title:
                    "Los demás, de peso superior o igual a 40 g/m2 pero inferior o igual a 150 g/m2.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Los demás, de peso superior o igual a 40 g/m2 pero inferior o igual a 150 g/m2.",
                    },
                  ],
                },
              ],
            },

            {
              code: "4802.58",
              title:
                "Los demás papeles y cartones, sin fibras obtenidas por procedimiento mecánico o químico-mecánico o con un contenido total de estas fibras inferior o igual al 10% en peso del contenido total de fibra: De peso superior a 150 g/m2.",
              classifications: [
                {
                  code: "4802.58.04",
                  title: "De peso superior a 150 g/m2.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    { code: "00", title: "De peso superior a 150 g/m2." },
                  ],
                },
              ],
            },

            {
              code: "4802.61",
              title:
                "Los demás papeles y cartones, con un contenido total de fibras obtenidas por procedimiento mecánico o químico-mecánico superior al 10% en peso del contenido total de fibra: En bobinas (rollos).",
              classifications: [
                {
                  code: "4802.61.03",
                  title: "En bobinas (rollos).",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Papel soporte para papel carbón (carbónico), excepto multiusos, teñido, cuyo peso sea hasta de 20 g/m².",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },

            {
              code: "4802.62",
              title:
                "Los demás papeles y cartones, con un contenido total de fibras obtenidas por procedimiento mecánico o químico-mecánico superior al 10% en peso del contenido total de fibra: En hojas en las que un lado sea inferior o igual a 435 mm y el otro sea inferior o igual a 297 mm, medidos sin plegar.",
              classifications: [
                {
                  code: "4802.62.03",
                  title:
                    "En hojas en las que un lado sea inferior o igual a 435 mm y el otro sea inferior o igual a 297 mm, medidos sin plegar.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "En hojas en las que un lado sea inferior o igual a 435 mm y el otro sea inferior o igual a 297 mm, medidos sin plegar.",
                    },
                  ],
                },
              ],
            },

            {
              code: "4802.69",
              title:
                "Los demás papeles y cartones, con un contenido total de fibras obtenidas por procedimiento mecánico o químico-mecánico superior al 10% en peso del contenido total de fibra: Los demás.",
              classifications: [
                {
                  code: "4802.69.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },

        {
          code: "48.03",
          title:
            'Papel del tipo utilizado para papel higiénico, toallitas para desmaquillar, toallas, servilletas o papeles similares de uso doméstico, de higiene o tocador, guata de celulosa y napa de fibras de celulosa, incluso rizados ("crepés"), plisados, gofrados, estampados, perforados, coloreados o decorados en la superficie o impresos, en bobinas (rollos) o en hojas.',
          subheadings: [
            {
              code: "4803.00",
              title:
                'Papel del tipo utilizado para papel higiénico, toallitas para desmaquillar, toallas, servilletas o papeles similares de uso doméstico, de higiene o tocador, guata de celulosa y napa de fibras de celulosa, incluso rizados ("crepés"), plisados, gofrados, estampados, perforados, coloreados o decorados en la superficie o impresos, en bobinas (rollos) o en hojas.',
              classifications: [
                {
                  code: "4803.00.04",
                  title:
                    'Papel del tipo utilizado para papel higiénico, toallitas para desmaquillar, toallas, servilletas o papeles similares de uso doméstico, de higiene o tocador, guata de celulosa y napa de fibras de celulosa, incluso rizados ("crepés"), plisados, gofrados, estampados, perforados, coloreados o decorados en la superficie o impresos, en bobinas (rollos) o en hojas.',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "Guata de celulosa." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "48.04",
          title:
            "Papel y cartón Kraft, sin estucar ni recubrir, en bobinas (rollos) o en hojas, excepto el de las partidas 48.02 o 48.03.",
          subheadings: [
            {
              code: "4804.11",
              title:
                'Papel y cartón para caras (cubiertas) ("Kraftliner"): Crudos.',
              classifications: [
                {
                  code: "4804.11.01",
                  title: "Crudos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Crudos." }],
                },
              ],
            },
            {
              code: "4804.19",
              title:
                'Papel y cartón para caras (cubiertas) ("Kraftliner"): Los demás.',
              classifications: [
                {
                  code: "4804.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Papel Kraft a base de celulosa semiblanqueada, con peso inferior o igual a 160 g/m².",
                    },
                    {
                      code: "02",
                      title:
                        "Cartón Kraft, a base de celulosa semiblanqueada, con peso superior a 160 g/m² sin exceder de 500 g/m².",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },

            {
              code: "4804.21",
              title: "Papel Kraft para sacos (bolsas): Crudo.",
              classifications: [
                {
                  code: "4804.21.01",
                  title: "Crudo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Crudo." }],
                },
              ],
            },
            {
              code: "4804.29",
              title: "Papel Kraft para sacos (bolsas): Los demás.",
              classifications: [
                {
                  code: "4804.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },

            {
              code: "4804.31",
              title:
                "Los demás papeles y cartones Kraft, de peso inferior o igual a 150 g/m²: Crudos.",
              classifications: [
                {
                  code: "4804.31.05",
                  title: "Crudos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Para soporte de papel carbón, de color café y peso inferior o igual a 20 g/m².",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4804.39",
              title:
                "Los demás papeles y cartones Kraft, de peso inferior o igual a 150 g/m²: Los demás.",
              classifications: [
                {
                  code: "4804.39.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 30,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "A base de celulosa semiblanqueada." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },

            {
              code: "4804.41",
              title:
                "Los demás papeles y cartones Kraft, de peso superior a 150 g/m² pero inferior a 225 g/m²: Crudos.",
              classifications: [
                {
                  code: "4804.41.01",
                  title: "Crudos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Crudos." }],
                },
              ],
            },
            {
              code: "4804.42",
              title:
                "Los demás papeles y cartones Kraft, de peso superior a 150 g/m² pero inferior a 225 g/m²: Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra.",
              classifications: [
                {
                  code: "4804.42.01",
                  title:
                    "Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4804.49",
              title:
                "Los demás papeles y cartones Kraft, de peso superior a 150 g/m² pero inferior a 225 g/m²: Los demás.",
              classifications: [
                {
                  code: "4804.49.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },

            {
              code: "4804.51",
              title:
                "Los demás papeles y cartones Kraft, de peso superior o igual a 225 g/m²: Crudos.",
              classifications: [
                {
                  code: "4804.51.02",
                  title: "Crudos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Con peso superior a 600 g/m² sin exceder de 4,000 g/m², cuyo espesor sea inferior o igual a 4 mm, con resistencia dieléctrica.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4804.52",
              title:
                "Los demás papeles y cartones Kraft, de peso superior o igual a 225 g/m²: Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra.",
              classifications: [
                {
                  code: "4804.52.01",
                  title:
                    "Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4804.59",
              title:
                "Los demás papeles y cartones Kraft, de peso superior o igual a 225 g/m²: Los demás.",
              classifications: [
                {
                  code: "4804.59.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "A base de celulosa semiblanqueada con peso por metro cuadrado hasta 500 g.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "48.05",
          title:
            "Los demás papeles y cartones, sin estucar ni recubrir, en bobinas (rollos) o en hojas, que no hayan sido sometidos a trabajos complementarios o tratamientos distintos de los especificados en la Nota 3 de este Capítulo.",
          subheadings: [
            {
              code: "4805.11",
              title: "Papel para acanalar: Papel semiquímico para acanalar.",
              classifications: [
                {
                  code: "4805.11.01",
                  title: "Papel semiquímico para acanalar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Papel semiquímico para acanalar." },
                  ],
                },
              ],
            },
            {
              code: "4805.12",
              title: "Papel para acanalar: Papel paja para acanalar.",
              classifications: [
                {
                  code: "4805.12.01",
                  title: "Papel paja para acanalar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Papel paja para acanalar." }],
                },
              ],
            },
            {
              code: "4805.19",
              title: "Papel para acanalar: Los demás.",
              classifications: [
                {
                  code: "4805.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },

            {
              code: "4805.24",
              title:
                '"Testliner" (de fibras recicladas): De peso inferior o igual a 150 g/m2.',
              classifications: [
                {
                  code: "4805.24.02",
                  title: "De peso inferior o igual a 150 g/m2.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "Multicapas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4805.25",
              title:
                '"Testliner" (de fibras recicladas): De peso superior a 150 g/m2.',
              classifications: [
                {
                  code: "4805.25.02",
                  title: "De peso superior a 150 g/m2.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "Multicapas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },

            {
              code: "4805.30",
              title: "Papel sulfito para envolver.",
              classifications: [
                {
                  code: "4805.30.01",
                  title: "Papel sulfito para envolver.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Papel sulfito para envolver." },
                  ],
                },
              ],
            },
            {
              code: "4805.40",
              title: "Papel y cartón filtro.",
              classifications: [
                {
                  code: "4805.40.01",
                  title: "Papel y cartón filtro.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Papel y cartón filtro." }],
                },
              ],
            },
            {
              code: "4805.50",
              title: "Papel y cartón fieltro, papel y cartón lana.",
              classifications: [
                {
                  code: "4805.50.01",
                  title: "Papel y cartón fieltro, papel y cartón lana.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Papel y cartón fieltro, papel y cartón lana.",
                    },
                  ],
                },
              ],
            },

            {
              code: "4805.91",
              title: "Los demás: De peso inferior o igual a 150 g/m².",
              classifications: [
                {
                  code: "4805.91.01",
                  title: "De peso inferior o igual a 150 g/m².",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "De peso inferior o igual a 150 g/m².",
                    },
                  ],
                },
              ],
            },
            {
              code: "4805.92",
              title:
                "Los demás: De peso superior a 150 g/m² pero inferior a 225 g/m².",
              classifications: [
                {
                  code: "4805.92.01",
                  title:
                    "De peso superior a 150 g/m² pero inferior a 225 g/m².",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De peso superior a 150 g/m² pero inferior a 225 g/m².",
                    },
                  ],
                },
              ],
            },
            {
              code: "4805.93",
              title: "Los demás: De peso superior o igual a 225 g/m².",
              classifications: [
                {
                  code: "4805.93.01",
                  title: "De peso superior o igual a 225 g/m².",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "De peso superior o igual a 225 g/m².",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "48.06",
          title:
            "Papel y cartón sulfurizados, papel resistente a las grasas, papel vegetal, papel cristal y demás papeles calandrados transparentes o traslúcidos, en bobinas (rollos) o en hojas.",
          subheadings: [
            {
              code: "4806.10",
              title: "Papel y cartón sulfurizados (pergamino vegetal).",
              classifications: [
                {
                  code: "4806.10.01",
                  title: "Papel y cartón sulfurizados (pergamino vegetal).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Papel y cartón sulfurizados (pergamino vegetal).",
                    },
                  ],
                },
              ],
            },
            {
              code: "4806.20",
              title: 'Papel resistente a las grasas ("greaseproof").',
              classifications: [
                {
                  code: "4806.20.01",
                  title: 'Papel resistente a las grasas ("greaseproof").',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: 'Papel resistente a las grasas ("greaseproof").',
                    },
                  ],
                },
              ],
            },
            {
              code: "4806.30",
              title: "Papel vegetal (papel calco).",
              classifications: [
                {
                  code: "4806.30.01",
                  title: "Papel vegetal (papel calco).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Papel vegetal (papel calco)." },
                  ],
                },
              ],
            },
            {
              code: "4806.40",
              title:
                "Papel cristal y demás papeles calandrados transparentes o traslúcidos.",
              classifications: [
                {
                  code: "4806.40.01",
                  title:
                    "Papel cristal y demás papeles calandrados transparentes o traslúcidos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Papel cristal y demás papeles calandrados transparentes o traslúcidos.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "48.07",
          title:
            "Papel y cartón obtenidos por pegado de hojas planas, sin estucar ni recubrir en la superficie y sin impregnar, incluso reforzados interiormente, en bobinas (rollos) o en hojas.",
          subheadings: [
            {
              code: "4807.00",
              title:
                "Papel y cartón obtenidos por pegado de hojas planas, sin estucar ni recubrir en la superficie y sin impregnar, incluso reforzados interiormente, en bobinas (rollos) o en hojas.",
              classifications: [
                {
                  code: "4807.00.03",
                  title:
                    "Papel y cartón obtenidos por pegado de hojas planas, sin estucar ni recubrir en la superficie y sin impregnar, incluso reforzados interiormente, en bobinas (rollos) o en hojas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Papel y cartón obtenidos por pegado de hojas planas, sin estucar ni recubrir en la superficie y sin impregnar, incluso reforzados interiormente, en bobinas (rollos) o en hojas.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "48.08",
          title:
            'Papel y cartón corrugados (incluso revestidos por encolado), rizados ("crepés"), plisados, gofrados, estampados o perforados, en bobinas (rollos) o en hojas, excepto el papel de los tipos descritos en el texto de la partida 48.03.',
          subheadings: [
            {
              code: "4808.10",
              title: "Papel y cartón corrugados, incluso perforados.",
              classifications: [
                {
                  code: "4808.10.01",
                  title: "Papel y cartón corrugados, incluso perforados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Papel y cartón corrugados, incluso perforados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4808.40",
              title:
                'Papel Kraft rizado ("crepé") o plisado, incluso gofrado, estampado o perforado.',
              classifications: [
                {
                  code: "4808.40.04",
                  title:
                    'Papel Kraft rizado ("crepé") o plisado, incluso gofrado, estampado o perforado.',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Papel Kraft rizado ("crepé") o plisado, incluso gofrado, estampado o perforado.',
                    },
                  ],
                },
              ],
            },
            {
              code: "4808.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4808.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: 'Rizados ("crepés").' },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        // 48.09

        {
          code: "48.09",
          title:
            'Papel carbón (carbónico), papel autocopia y demás papeles para copiar o transferir (incluido el estucado o cuché, recubierto o impregnado, para clisés de mimeógrafo ("stencils") o para planchas offset), incluso impresos, en bobinas (rollos) o en hojas.',
          subheadings: [
            {
              code: "4809.20",
              title: "Papel autocopia.",
              classifications: [
                {
                  code: "4809.20.01",
                  title: "Papel autocopia.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Papel autocopia." }],
                },
              ],
            },
            {
              code: "4809.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4809.90.02",
                  title: "Papel carbón (carbónico) y papeles similares.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Papel carbón (carbónico) y papeles similares.",
                    },
                  ],
                },
                {
                  code: "4809.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "Reactivos a la temperatura." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "48.10",
          title:
            "Papel y cartón estucados por una o las dos caras con caolín u otras sustancias inorgánicas, con aglutinante o sin él, con exclusión de cualquier otro estucado o recubrimiento, incluso coloreados o decorados en la superficie o impresos, en bobinas (rollos) o en hojas de forma cuadrada o rectangular, de cualquier tamaño.",
          subheadings: [
            {
              code: "4810.13",
              title: "En bobinas (rollos).",
              classifications: [
                {
                  code: "4810.13.07",
                  title: "En bobinas (rollos).",
                  umt: "Kg",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Estucados, recubiertos o pintados por una o ambas caras, satinados o abrillantados.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4810.14",
              title:
                "En hojas en las que un lado sea inferior o igual a 435 mm y el otro sea inferior o igual a 297 mm, medidos sin plegar.",
              classifications: [
                {
                  code: "4810.14.07",
                  title:
                    "En hojas en las que un lado sea inferior o igual a 435 mm y el otro sea inferior o igual a 297 mm, medidos sin plegar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Estucados, recubiertos o pintados por una o ambas caras, satinados o abrillantados.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4810.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "4810.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Los demás",
                    },
                  ],
                },
              ],
            },
            {
              code: "4810.22",
              title: 'Papel estucado o cuché ligero (liviano) ("L.W.C.").',
              classifications: [
                {
                  code: "4810.22.02",
                  title: 'Papel estucado o cuché ligero (liviano) ("L.W.C.").',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Papel cuché o tipo cuché, blanco o de color, mate o brillante, esmaltado o recubierto en ambas caras de una mezcla de sustancias minerales, propio para impresión fina.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4810.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "4810.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Cuché o tipo cuché, blancos o de color, mate o brillante, esmaltados o recubiertos por una o ambas caras de una mezcla de sustancias minerales, propios para impresión fina, con peso superior a 72 g/m².",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4810.31",
              title:
                "Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra, de peso inferior o igual a 150 g/m².",
              classifications: [
                {
                  code: "4810.31.01",
                  title:
                    "Estucados, pintados o recubiertos por una o ambas caras, satinados o abrillantados, con peso superior o igual a 74 g/m².",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Estucados, pintados o recubiertos por una o ambas caras, satinados o abrillantados, con peso superior o igual a 74 g/m².",
                    },
                  ],
                },
                {
                  code: "4810.31.02",
                  title:
                    "Coloreados por ambas caras con peso inferior o igual a 120 g/m², excepto lo comprendido en la fracción arancelaria 4810.31.01.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Coloreados por ambas caras con peso inferior o igual a 120 g/m², excepto lo comprendido en la fracción arancelaria 4810.31.01.",
                    },
                  ],
                },
                {
                  code: "4810.31.03",
                  title:
                    "Coloreados o decorados por una cara, excepto lo comprendido en la fracción arancelaria 4810.31.01.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Coloreados o decorados por una cara, excepto lo comprendido en la fracción arancelaria 4810.31.01.",
                    },
                  ],
                },
                {
                  code: "4810.31.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4810.32",
              title:
                "Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra, de peso superior a 150 g/m².",
              classifications: [
                {
                  code: "4810.32.01",
                  title:
                    "Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra, de peso superior a 150 g/m².",
                  umt: "Kg",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Blanqueados uniformemente en la masa y con un contenido de fibras de madera obtenidas por procedimiento químico superior al 95% en peso del contenido total de fibra, de peso superior a 150 g/m².",
                    },
                  ],
                },
              ],
            },
            {
              code: "4810.39",
              title: "Los demás.",
              classifications: [
                {
                  code: "4810.39.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4810.92",
              title: "Multicapas.",
              classifications: [
                {
                  code: "4810.92.01",
                  title: "Multicapas.",
                  umt: "Kg",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Multicapas." }],
                },
              ],
            },
            {
              code: "4810.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "4810.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "48.11",
          title:
            "Papel, cartón, guata de celulosa y napa de fibras de celulosa, estucados, recubiertos, impregnados o revestidos, coloreados o decorados en la superficie o impresos, en bobinas (rollos) o en hojas de forma cuadrada o rectangular, de cualquier tamaño, excepto los productos de los tipos descritos en el texto de las partidas 48.03, 48.09 o 48.10.",
          subheadings: [
            {
              code: "4811.10",
              title: "Papel y cartón alquitranados, embetunados o asfaltados.",
              classifications: [
                {
                  code: "4811.10.02",
                  title:
                    "Cubresuelos con soporte de papel o cartón, incluso recortados.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cubresuelos con soporte de papel o cartón, incluso recortados.",
                    },
                  ],
                },
                {
                  code: "4811.10.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "Papel kraft." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4811.41",
              title: "Autoadhesivos.",
              classifications: [
                {
                  code: "4811.41.01",
                  title:
                    "Autoadhesivos, excepto los comprendidos en la fracción arancelaria 4811.41.02.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Autoadhesivos, excepto los comprendidos en la fracción arancelaria 4811.41.02.",
                    },
                  ],
                },
                {
                  code: "4811.41.02",
                  title: "En tiras o en bobinas (rollos).",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    { code: "00", title: "En tiras o en bobinas (rollos)." },
                  ],
                },
              ],
            },
            {
              code: "4811.49",
              title: "Los demás.",
              classifications: [
                {
                  code: "4811.49.01",
                  title: "En tiras o en bobinas (rollos).",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    { code: "00", title: "En tiras o en bobinas (rollos)." },
                  ],
                },
                {
                  code: "4811.49.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4811.51",
              title: "Blanqueados, de peso superior a 150 g/m².",
              classifications: [
                {
                  code: "4811.51.01",
                  title:
                    'Recubiertos por una de sus caras, con una película de materia plástica artificial, aun cuando también lleven recubrimiento de otros materiales, excepto papel milimétrico recubierto por una cara, con una película de materia plástica artificial "laminene-milimétrico".',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Recubiertos por una de sus caras, con una película de materia plástica artificial, aun cuando también lleven recubrimiento de otros materiales, excepto papel milimétrico recubierto por una cara, con una película de materia plástica artificial "laminene-milimétrico".',
                    },
                  ],
                },
                {
                  code: "4811.51.02",
                  title:
                    "Recubiertos con caolín y resinas sintéticas, repelentes a películas vinílicas, resistentes a la tensión así como a temperaturas iguales o superiores a 210°C, con peso superior a 100 g/m².",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Recubiertos con caolín y resinas sintéticas, repelentes a películas vinílicas, resistentes a la tensión así como a temperaturas iguales o superiores a 210°C, con peso superior a 100 g/m².",
                    },
                  ],
                },
                {
                  code: "4811.51.04",
                  title:
                    "Filtro, impregnados de resinas sintéticas, aun cuando estén coloreados o acanalados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Filtro, impregnados de resinas sintéticas, aun cuando estén coloreados o acanalados.",
                    },
                  ],
                },
                {
                  code: "4811.51.05",
                  title:
                    'De fibras de algodón, con un contenido de algodón "transparentizado" del 100%, impregnado con resinas sintéticas.',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'De fibras de algodón, con un contenido de algodón "transparentizado" del 100%, impregnado con resinas sintéticas.',
                    },
                  ],
                },
                {
                  code: "4811.51.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4811.59",
              title: "Los demás.",
              classifications: [
                {
                  code: "4811.59.07",
                  title:
                    "Cubresuelos con soporte de papel o cartón, incluso recortados.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cubresuelos con soporte de papel o cartón, incluso recortados.",
                    },
                  ],
                },
                {
                  code: "4811.59.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Recubiertos por una de sus caras, con una película de materia plástica artificial, aun cuando también lleven recubrimiento de otros materiales.",
                    },
                    {
                      code: "02",
                      title:
                        "Filtro, impregnados de resinas sintéticas, aun cuando estén coloreados o acanalados.",
                    },
                    {
                      code: "03",
                      title:
                        "Papel imitación madera, en rollos, de ancho igual o superior a 120 cm pero inferior o igual a 155 cm, con un peso igual o superior a 130 Kg pero inferior o igual a 170 Kg.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4811.60",
              title:
                "Papel y cartón recubiertos, impregnados o revestidos de cera, parafina, estearina, aceite o glicerol.",
              classifications: [
                {
                  code: "4811.60.03",
                  title:
                    "Papel y cartón recubiertos, impregnados o revestidos de cera, parafina, estearina, aceite o glicerol.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    { code: "01", title: "Parafinados o encerados." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4811.90",
              title:
                "Los demás papeles, cartones, guata de celulosa y napa de fibras de celulosa.",
              classifications: [
                {
                  code: "4811.90.10",
                  title:
                    "Cubresuelos con soporte de papel o cartón, incluso recortados.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cubresuelos con soporte de papel o cartón, incluso recortados.",
                    },
                  ],
                },
                {
                  code: "4811.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title: "Recubiertos por una de sus caras con látex.",
                    },
                    { code: "02", title: "Glassine." },
                    {
                      code: "03",
                      title:
                        "Impregnados con látex acrilonitrilo-butadieno, recubiertos por una de sus caras con látex tipo acrilonitrilo y por la otra del mismo látex con partículas de dióxido de silicio coloidal y/o impregnados con látex estireno-butadieno, recubiertos por una de sus caras con resinas de estireno-butadieno.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "48.12",
          title: "Bloques y placas, filtrantes, de pasta de papel.",
          subheadings: [
            {
              code: "4812.00",
              title: "Bloques y placas, filtrantes, de pasta de papel.",
              classifications: [
                {
                  code: "4812.00.01",
                  title: "Bloques y placas, filtrantes, de pasta de papel.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Bloques y placas, filtrantes, de pasta de papel.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "48.13",
          title:
            "Papel de fumar, incluso cortado al tamaño adecuado, en librillos o en tubos.",
          subheadings: [
            {
              code: "4813.10",
              title: "En librillos o en tubos.",
              classifications: [
                {
                  code: "4813.10.01",
                  title: "En librillos o en tubos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "En librillos o en tubos." }],
                },
              ],
            },
            {
              code: "4813.20",
              title: "En bobinas (rollos) de anchura inferior o igual a 5 cm.",
              classifications: [
                {
                  code: "4813.20.01",
                  title:
                    "En bobinas (rollos) de anchura inferior o igual a 5 cm.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "En bobinas (rollos) de anchura inferior o igual a 5 cm.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4813.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4813.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "48.14",
          title:
            "Papel para decorar y revestimientos similares de paredes; papel para vidrieras.",
          subheadings: [
            {
              code: "4814.20",
              title:
                "Papel para decorar y revestimientos similares de paredes, constituidos por papel recubierto o revestido, en la cara vista, con una capa de plástico graneada, gofrada, coloreada, impresa con motivos o decorada de otro modo.",
              classifications: [
                {
                  code: "4814.20.01",
                  title:
                    "Papel para decorar y revestimientos similares de paredes, constituidos por papel recubierto o revestido, en la cara vista, con una capa de plástico graneada, gofrada, coloreada, impresa con motivos o decorada de otro modo.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Papel para decorar y revestimientos similares de paredes, constituidos por papel recubierto o revestido, en la cara vista, con una capa de plástico graneada, gofrada, coloreada, impresa con motivos o decorada de otro modo.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4814.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4814.90.02",
                  title: 'Papel granito ("ingrain").',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: 'Papel granito ("ingrain").' }],
                },
                {
                  code: "4814.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "48.16",
          title:
            'Papel carbón (carbónico), papel autocopia y demás papeles para copiar o transferir (excepto los de la partida 48.09), clisés de mimeógrafo ("stencils") completos y planchas offset, de papel, incluso acondicionados en cajas.',
          subheadings: [
            {
              code: "4816.20",
              title: "Papel autocopia.",
              classifications: [
                {
                  code: "4816.20.01",
                  title: "Papel autocopia.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4"],
                  nicos: [{ code: "00", title: "Papel autocopia." }],
                },
              ],
            },
            {
              code: "4816.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4816.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title: "Papel carbón (carbónico) y papeles similares.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "48.17",
          title:
            "Sobres, sobres carta, tarjetas postales sin ilustrar y tarjetas para correspondencia, de papel o cartón; cajas, bolsas y presentaciones similares, de papel o cartón, con un surtido de artículos de correspondencia.",
          subheadings: [
            {
              code: "4817.10",
              title: "Sobres.",
              classifications: [
                {
                  code: "4817.10.01",
                  title: "Sobres.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [{ code: "00", title: "Sobres." }],
                },
              ],
            },
            {
              code: "4817.20",
              title:
                "Sobres carta, tarjetas postales sin ilustrar y tarjetas para correspondencia.",
              classifications: [
                {
                  code: "4817.20.01",
                  title:
                    "Sobres carta, tarjetas postales sin ilustrar y tarjetas para correspondencia.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Sobres carta, tarjetas postales sin ilustrar y tarjetas para correspondencia.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4817.30",
              title:
                "Cajas, bolsas y presentaciones similares de papel o cartón, con un surtido de artículos de correspondencia.",
              classifications: [
                {
                  code: "4817.30.01",
                  title:
                    "Cajas, bolsas y presentaciones similares de papel o cartón, con un surtido de artículos de correspondencia.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cajas, bolsas y presentaciones similares de papel o cartón, con un surtido de artículos de correspondencia.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        // 48.18
        {
          code: "48.18",
          title:
            "Papel del tipo utilizado para papel higiénico y papeles similares, guata de celulosa o napa de fibras de celulosa, de los tipos utilizados para fines domésticos o sanitarios, en bobinas (rollos) de una anchura inferior o igual a 36 cm o cortados en formato; pañuelos, toallitas de desmaquillar, toallas, manteles, servilletas, sábanas y artículos similares para uso doméstico, de tocador, higiénico o de hospital, prendas y complementos (accesorios), de vestir, de pasta de papel, papel, guata de celulosa o napa de fibras de celulosa.",
          subheadings: [
            {
              code: "4818.10",
              title: "Papel higiénico.",
              classifications: [
                {
                  code: "4818.10.01",
                  title: "Papel higiénico.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "PACIC"],
                  nicos: [{ code: "00", title: "Papel higiénico." }],
                },
              ],
            },
            {
              code: "4818.20",
              title: "Pañuelos, toallitas de desmaquillar y toallas.",
              classifications: [
                {
                  code: "4818.20.01",
                  title: "Pañuelos, toallitas de desmaquillar y toallas.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Pañuelos, toallitas de desmaquillar y toallas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4818.30",
              title: "Manteles y servilletas.",
              classifications: [
                {
                  code: "4818.30.01",
                  title: "Manteles y servilletas.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "PACIC"],
                  nicos: [{ code: "00", title: "Manteles y servilletas." }],
                },
              ],
            },
            {
              code: "4818.50",
              title: "Prendas y complementos (accesorios), de vestir.",
              classifications: [
                {
                  code: "4818.50.01",
                  title: "Prendas y complementos (accesorios), de vestir.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Prendas y complementos (accesorios), de vestir.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4818.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4818.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "48.19",
          title:
            "Cajas, sacos (bolsas), bolsitas, cucuruchos y demás envases de papel, cartón, guata de celulosa o napa de fibras de celulosa; cartonajes de oficina, tienda o similares.",
          subheadings: [
            {
              code: "4819.10",
              title: "Cajas de papel o cartón corrugado.",
              classifications: [
                {
                  code: "4819.10.01",
                  title: "Cajas de papel o cartón corrugado.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Cajas de papel o cartón corrugado." },
                  ],
                },
              ],
            },
            {
              code: "4819.20",
              title:
                "Cajas y cartonajes, plegables, de papel o cartón, sin corrugar.",
              classifications: [
                {
                  code: "4819.20.02",
                  title:
                    "Cajas y cartonajes, plegables, de papel o cartón, sin corrugar.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Envases de cartón impresos, coextruidos únicamente con una o varias películas de materia plástica unidas entre sí, destinados exclusivamente a contener productos no aptos para el consumo humano.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4819.30",
              title:
                "Sacos (bolsas) con una anchura en la base superior o igual a 40 cm.",
              classifications: [
                {
                  code: "4819.30.01",
                  title:
                    "Sacos (bolsas) con una anchura en la base superior o igual a 40 cm.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Sacos (bolsas) con una anchura en la base superior o igual a 40 cm.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4819.40",
              title: "Los demás sacos (bolsas); bolsitas y cucuruchos.",
              classifications: [
                {
                  code: "4819.40.91",
                  title: "Los demás sacos (bolsas); bolsitas y cucuruchos.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Los demás sacos (bolsas); bolsitas y cucuruchos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4819.50",
              title: "Los demás envases, incluidas las fundas para discos.",
              classifications: [
                {
                  code: "4819.50.91",
                  title: "Los demás envases, incluidas las fundas para discos.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Los demás envases, incluidas las fundas para discos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4819.60",
              title: "Cartonajes de oficina, tienda o similares.",
              classifications: [
                {
                  code: "4819.60.01",
                  title: "Cartonajes de oficina, tienda o similares.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Cartonajes de oficina, tienda o similares.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "48.20",
          title:
            'Libros registro, libros de contabilidad, talonarios (de notas, pedidos o recibos), agendas, bloques memorandos, bloques de papel de cartas y artículos similares, cuadernos, carpetas de mesa, clasificadores, encuadernaciones (de hojas móviles u otras), carpetas y cubiertas para documentos y demás artículos escolares, de oficina o de papelería, incluso los formularios en paquetes o plegados ("manifold"), aunque lleven papel carbón (carbónico), de papel o cartón; álbumes para muestras o para colecciones y cubiertas para libros, de papel o cartón.',
          subheadings: [
            {
              code: "4820.10",
              title:
                "Libros registro, libros de contabilidad, talonarios (de notas, pedidos o recibos), bloques memorandos, bloques de papel de cartas, agendas y artículos similares.",
              classifications: [
                {
                  code: "4820.10.02",
                  title:
                    "Libros registro, libros de contabilidad, talonarios (de notas, pedidos o recibos), bloques memorandos, bloques de papel de cartas, agendas y artículos similares.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Agendas o librillos para direcciones o teléfonos.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4820.20",
              title: "Cuadernos.",
              classifications: [
                {
                  code: "4820.20.01",
                  title: "Cuadernos.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [{ code: "00", title: "Cuadernos." }],
                },
              ],
            },
            {
              code: "4820.30",
              title:
                "Clasificadores, encuadernaciones (excepto las cubiertas para libros), carpetas y cubiertas para documentos.",
              classifications: [
                {
                  code: "4820.30.01",
                  title:
                    "Clasificadores, encuadernaciones (excepto las cubiertas para libros), carpetas y cubiertas para documentos.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Clasificadores, encuadernaciones (excepto las cubiertas para libros), carpetas y cubiertas para documentos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4820.40",
              title:
                'Formularios en paquetes o plegados ("manifold"), aunque lleven papel carbón (carbónico).',
              classifications: [
                {
                  code: "4820.40.01",
                  title:
                    'Formularios en paquetes o plegados ("manifold"), aunque lleven papel carbón (carbónico).',
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Formularios en paquetes o plegados ("manifold"), aunque lleven papel carbón (carbónico).',
                    },
                  ],
                },
              ],
            },
            {
              code: "4820.50",
              title: "Álbumes para muestras o para colecciones.",
              classifications: [
                {
                  code: "4820.50.01",
                  title: "Álbumes para muestras o para colecciones.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Álbumes para muestras o para colecciones.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4820.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4820.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "48.21",
          title:
            "Etiquetas de todas clases, de papel o cartón, incluso impresas.",
          subheadings: [
            {
              code: "4821.10",
              title: "Impresas.",
              classifications: [
                {
                  code: "4821.10.01",
                  title: "Impresas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Impresas." }],
                },
              ],
            },
            {
              code: "4821.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "4821.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "48.22",
          title:
            "Carretes, bobinas, canillas y soportes similares, de pasta de papel, papel o cartón, incluso perforados o endurecidos.",
          subheadings: [
            {
              code: "4822.10",
              title:
                "De los tipos utilizados para el bobinado de hilados textiles.",
              classifications: [
                {
                  code: "4822.10.01",
                  title:
                    "De los tipos utilizados para el bobinado de hilados textiles.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De los tipos utilizados para el bobinado de hilados textiles.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4822.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4822.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "48.23",
          title:
            "Los demás papeles, cartones, guata de celulosa y napa de fibras de celulosa, cortados en formato; los demás artículos de pasta de papel, papel, cartón, guata de celulosa o napa de fibras de celulosa.",
          subheadings: [
            {
              code: "4823.20",
              title: "Papel y cartón filtro.",
              classifications: [
                {
                  code: "4823.20.02",
                  title: "Papel y cartón filtro.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Papel filtro, con peso hasta 100 g/m², en bobinas de ancho igual o inferior a 105 mm.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4823.40",
              title:
                "Papel diagrama para aparatos registradores, en bobinas (rollos), hojas o discos.",
              classifications: [
                {
                  code: "4823.40.01",
                  title:
                    "Papel diagrama para aparatos registradores, en bobinas (rollos), hojas o discos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Papel diagrama para aparatos registradores, en bobinas (rollos), hojas o discos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4823.61",
              title: "De bambú.",
              classifications: [
                {
                  code: "4823.61.01",
                  title: "De bambú.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [{ code: "00", title: "De bambú." }],
                },
              ],
            },
            {
              code: "4823.69",
              title: "Los demás.",
              classifications: [
                {
                  code: "4823.69.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4823.70",
              title: "Artículos moldeados o prensados, de pasta de papel.",
              classifications: [
                {
                  code: "4823.70.03",
                  title: "Empaquetaduras.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Empaquetaduras." }],
                },
                {
                  code: "4823.70.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title: "Charolas moldeadas con oquedades, para empaques.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4823.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4823.90.01",
                  title: "Para usos dieléctricos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Para usos dieléctricos." }],
                },
                {
                  code: "4823.90.02",
                  title:
                    '"Crepé" en bandas, excepto lo comprendido en la fracción arancelaria 4823.90.01.',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        '"Crepé" en bandas, excepto lo comprendido en la fracción arancelaria 4823.90.01.',
                    },
                  ],
                },
                {
                  code: "4823.90.05",
                  title:
                    "Recubierto con resinas plásticas, con ancho superior o igual a 9 mm.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Recubierto con resinas plásticas, con ancho superior o igual a 9 mm.",
                    },
                  ],
                },
                {
                  code: "4823.90.10",
                  title: "Semiconos de papel filtro.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Semiconos de papel filtro." }],
                },
                {
                  code: "4823.90.11",
                  title: "Para protección de películas fotográficas.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Para protección de películas fotográficas.",
                    },
                  ],
                },
                {
                  code: "4823.90.12",
                  title:
                    'Cartón de pasta teñida en la masa, superficie jaspeada con peso superior a 500 g/m² sin exceder de 900 g/m² ("pressboard").',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Cartón de pasta teñida en la masa, superficie jaspeada con peso superior a 500 g/m² sin exceder de 900 g/m² ("pressboard").',
                    },
                  ],
                },
                {
                  code: "4823.90.17",
                  title:
                    "Cubresuelos con soporte de papel o cartón, incluso recortados.",
                  umt: "Kg",
                  importDuty: 7,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cubresuelos con soporte de papel o cartón, incluso recortados.",
                    },
                  ],
                },
                {
                  code: "4823.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS5", "PS4", "NOM", "CC"],
                  nicos: [
                    { code: "01", title: "Parafinado o encerado." },
                    {
                      code: "02",
                      title: "Autoadhesivo, en tiras o en bobinas (rollos).",
                    },
                    {
                      code: "03",
                      title:
                        "Papel engomado o adhesivo, excepto lo comprendido en el número de identificación comercial 4823.90.99.02.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "49",
      title:
        "Productos editoriales, de la prensa y de las demás industrias gráficas; textos manuscritos o mecanografiados y planos",
      notes: {
        legales: [
          {
            id: "NL-CAP49-1",
            text: "Este Capítulo no comprende: a) los negativos y positivos fotográficos con soporte transparente (Capítulo 37); b) los mapas, planos y esferas, en relieve, incluso impresos (partida 90.23); c) los naipes y demás artículos del Capítulo 95; d) los grabados, estampas y litografías originales (partida 97.02), los sellos (estampillas) de correo, timbres fiscales, marcas postales, sobres primer día, enteros postales, demás artículos franqueados y análogos de la partida 97.04, las antigüedades de más de cien años y demás artículos del Capítulo 97.",
          },
          {
            id: "NL-CAP49-2",
            text: "En el Capítulo 49, el término impreso significa también reproducido con copiadora, obtenido por un procedimiento controlado por una máquina automática para tratamiento o procesamiento de datos, por estampado en relieve, fotografía, fotocopia, termocopia o mecanografiado.",
          },
          {
            id: "NL-CAP49-3",
            text: "Los diarios y publicaciones periódicas encuadernados, así como las colecciones de diarios o de publicaciones periódicas presentadas bajo una misma cubierta, se clasifican en la partida 49.01, aunque contengan publicidad.",
          },
          {
            id: "NL-CAP49-4",
            text: "También se clasifican en la partida 49.01: a) las colecciones de grabados, de reproducciones de obras de arte, de dibujos, etc., que constituyan obras completas, paginadas y susceptibles de formar un libro, cuando los grabados estén acompañados de un texto referido a las obras o a sus autores; b) las láminas ilustradas que se presenten al mismo tiempo que un libro y como complemento de éste; c) los libros presentados en fascículos o en hojas separadas, de cualquier formato, que constituyan una obra completa o parte de una obra para encuadernar en rústica o de otra forma. Sin embargo, los grabados e ilustraciones, que no tengan texto y se presenten en hojas separadas de cualquier formato, se clasifican en la partida 49.11.",
          },
          {
            id: "NL-CAP49-5",
            text: "Salvo lo dispuesto en la Nota 3 de este Capítulo, la partida 49.01 no comprende las publicaciones consagradas fundamentalmente a la publicidad (por ejemplo: folletos, prospectos, catálogos comerciales, anuarios publicados por asociaciones comerciales, propaganda turística). Estas publicaciones se clasifican en la partida 49.11.",
          },
          {
            id: "NL-CAP49-6",
            text: "En la partida 49.03, se consideran álbumes o libros de estampas para niños los álbumes o libros para niños cuyas ilustraciones sean el atractivo principal y cuyos textos solo tengan un interés secundario.",
          },
        ],
        subpartida: [],
        nacionales: [
          {
            id: "NN-CAP49-1",
            text: "Para los efectos de la partida 49.01, la expresión “Obras de la Literatura Universal” se aplica a las obras impresas de cualquier género literario (incluso religiosas o litúrgicas, libros de cuentos, libros para la enseñanza de idiomas, etc.) aunque sus autores, vivos o muertos, no hayan sido reconocidos a nivel mundial, así como a los manuales, los libros para trabajos escolares y demás libros para niños, con excepción de los libros infantiles para colorear o que contengan rudimentos del lenguaje (partida 49.03) y los juguetes de papel o cartón (Capítulo 95).",
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "49.01",
          title:
            "Libros, folletos e impresos similares, incluso en hojas sueltas.",
          subheadings: [
            {
              code: "4901.10",
              title: "En hojas sueltas, incluso plegadas.",
              classifications: [
                {
                  code: "4901.10.01",
                  title:
                    "Obras de la literatura universal y libros técnicos, científicos o de arte, incluso los de carácter biográfico.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Obras de la literatura universal y libros técnicos, científicos o de arte, incluso los de carácter biográfico.",
                    },
                  ],
                },
                {
                  code: "4901.10.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "CE", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4901.91",
              title: "Diccionarios y enciclopedias, incluso en fascículos.",
              classifications: [
                {
                  code: "4901.91.04",
                  title: "Diccionarios y enciclopedias, incluso en fascículos.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "Imresos y publicados en México." },
                    {
                      code: "02",
                      title:
                        "Impresos en español, excepto impresos en relieve para uso de ciegos y lo comprendido en el número de identificación comercial 4901.91.04.01.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4901.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "4901.99.01",
                  title: "Impresos y publicado en México.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Impresos y publicado en México." },
                  ],
                },
                {
                  code: "4901.99.02",
                  title: "Para la enseñanza primaria.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Para la enseñanza primaria." }],
                },
                {
                  code: "4901.99.03",
                  title:
                    "Anuarios científicos o técnicos, excepto lo comprendido en la fracción arancelaria 4901.99.01.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Anuarios científicos o técnicos, excepto lo comprendido en la fracción arancelaria 4901.99.01.",
                    },
                  ],
                },
                {
                  code: "4901.99.04",
                  title:
                    "Obras de la literatura universal, libros o fascículos técnicos, científicos o de arte, incluso los de carácter biográfico, impresos en español, aunque contengan otros idiomas, excepto lo comprendido en las fracciones arancelarias 4901.99.01, 4901.99.02 y 4901.99.05.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Obras de la literatura universal, libros o fascículos técnicos, científicos o de arte, incluso los de carácter biográfico, impresos en español, aunque contengan otros idiomas, excepto lo comprendido en las fracciones arancelarias 4901.99.01, 4901.99.02 y 4901.99.05.",
                    },
                  ],
                },
                {
                  code: "4901.99.05",
                  title: "Impresos en relieve para uso de ciegos.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Impresos en relieve para uso de ciegos.",
                    },
                  ],
                },
                {
                  code: "4901.99.91",
                  title:
                    "Las demás obras de la literatura universal, libros o fascículos técnicos, científicos o de arte, incluso los de carácter biográfico, excepto lo comprendido en las fracciones arancelarias 4901.99.01, 4901.99.02, 4901.99.04 y 4901.99.05.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Las demás obras de la literatura universal, libros o fascículos técnicos, científicos o de arte, incluso los de carácter biográfico, excepto lo comprendido en las fracciones arancelarias 4901.99.01, 4901.99.02, 4901.99.04 y 4901.99.05.",
                    },
                  ],
                },
                {
                  code: "4901.99.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS5", "PS4", "CE", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "49.02",
          title:
            "Diarios y publicaciones periódicas, impresos, incluso ilustrados o con publicidad.",
          subheadings: [
            {
              code: "4902.10",
              title: "Que se publiquen cuatro veces por semana como mínimo.",
              classifications: [
                {
                  code: "4902.10.02",
                  title:
                    "Que se publiquen cuatro veces por semana como mínimo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Que se publiquen cuatro veces por semana como mínimo.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4902.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4902.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Diarios y publicaciones periódicas impresos en español.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "49.03",
          title:
            "Álbumes o libros de estampas y cuadernos para dibujar o colorear, para niños.",
          subheadings: [
            {
              code: "4903.00",
              title:
                "Álbumes o libros de estampas y cuadernos para dibujar o colorear, para niños.",
              classifications: [
                {
                  code: "4903.00.01",
                  title: "Álbumes o libros de estampas.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Álbumes o libros de estampas." },
                  ],
                },
                {
                  code: "4903.00.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "49.04",
          title:
            "Música manuscrita o impresa, incluso con ilustraciones o encuadernada.",
          subheadings: [
            {
              code: "4904.00",
              title:
                "Música manuscrita o impresa, incluso con ilustraciones o encuadernada.",
              classifications: [
                {
                  code: "4904.00.01",
                  title:
                    "Música manuscrita o impresa, incluso con ilustraciones o encuadernada.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Música manuscrita o impresa, incluso con ilustraciones o encuadernada.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "49.05",
          title:
            "Manufacturas cartográficas de todas clases, incluidos los mapas murales, planos topográficos y esferas, impresos.",
          subheadings: [
            {
              code: "4905.20",
              title: "En forma de libros o folletos.",
              classifications: [
                {
                  code: "4905.20.01",
                  title:
                    "Cartas geográficas, topográficas o náuticas; mapas murales.",
                  umt: "Pza",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cartas geográficas, topográficas o náuticas; mapas murales.",
                    },
                  ],
                },
                {
                  code: "4905.20.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4905.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4905.90.01",
                  title: "Esferas.",
                  umt: "Pza",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Esferas." }],
                },
                {
                  code: "4905.90.02",
                  title:
                    "Cartas geográficas, topográficas o náuticas; mapas murales.",
                  umt: "Pza",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cartas geográficas, topográficas o náuticas; mapas murales.",
                    },
                  ],
                },
                {
                  code: "4905.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "49.06",
          title:
            "Planos y dibujos originales hechos a mano, de arquitectura, ingeniería, industriales, comerciales, topográficos o similares; textos manuscritos; reproducciones fotográficas sobre papel sensibilizado y copias con papel carbón (carbónico), de los planos, dibujos o textos antes mencionados.",
          subheadings: [
            {
              code: "4906.00",
              title:
                "Planos y dibujos originales hechos a mano, de arquitectura, ingeniería, industriales, comerciales, topográficos o similares; textos manuscritos; reproducciones fotográficas sobre papel sensibilizado y copias con papel carbón (carbónico), de los planos, dibujos o textos antes mencionados.",
              classifications: [
                {
                  code: "4906.00.01",
                  title:
                    "Planos y dibujos originales hechos a mano, de arquitectura, ingeniería, industriales, comerciales, topográficos o similares; textos manuscritos; reproducciones fotográficas sobre papel sensibilizado y copias con papel carbón (carbónico), de los planos, dibujos o textos antes mencionados.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["PS4", "CE", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Planos y dibujos originales hechos a mano, de arquitectura, ingeniería, industriales, comerciales, topográficos o similares; textos manuscritos; reproducciones fotográficas sobre papel sensibilizado y copias con papel carbón (carbónico), de los planos, dibujos o textos antes mencionados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "49.07",
          title:
            "Sellos (estampillas) de correos, timbres fiscales y análogos, sin obliterar, que tengan o estén destinados a tener curso legal en el país en el que su valor facial sea reconocido; papel timbrado; billetes de banco; cheques; títulos de acciones u obligaciones y títulos similares.",
          subheadings: [
            {
              code: "4907.00",
              title:
                "Sellos (estampillas) de correos, timbres fiscales y análogos, sin obliterar, que tengan o estén destinados a tener curso legal en el país en el que su valor facial sea reconocido; papel timbrado; billetes de banco; cheques; títulos de acciones u obligaciones y títulos similares.",
              classifications: [
                {
                  code: "4907.00.03",
                  title: "Billetes de Banco; cheques de viajero.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "01", title: "Billetes de Banco." },
                    { code: "02", title: "Cheques de viajero." },
                  ],
                },
                {
                  code: "4907.00.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "49.08",
          title: "Calcomanías de cualquier clase.",
          subheadings: [
            {
              code: "4908.10",
              title: "Calcomanías vitrificables.",
              classifications: [
                {
                  code: "4908.10.01",
                  title:
                    "Calcomanías vitrificables policromas, elaboradas con pigmentos metálicos, sobre soportes de papel para ser fijadas a temperaturas mayores de 500°C, diseñadas exclusivamente para ser aplicadas a loza, cerámica, porcelana y vidrio.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Calcomanías vitrificables policromas, elaboradas con pigmentos metálicos, sobre soportes de papel para ser fijadas a temperaturas mayores de 500°C, diseñadas exclusivamente para ser aplicadas a loza, cerámica, porcelana y vidrio.",
                    },
                  ],
                },
                {
                  code: "4908.10.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "4908.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "4908.90.02",
                  title: "Para estampar tejidos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS5", "PS4"],
                  nicos: [{ code: "00", title: "Para estampar tejidos." }],
                },
                {
                  code: "4908.90.03",
                  title:
                    "Calcomanías adheribles por calor, diseñadas exclusivamente para ser aplicadas en materiales plásticos y caucho.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Calcomanías adheribles por calor, diseñadas exclusivamente para ser aplicadas en materiales plásticos y caucho.",
                    },
                  ],
                },
                {
                  code: "4908.90.05",
                  title:
                    'Impresas a colores o en blanco y negro, presentadas para su venta en sobres o paquetes, aun cuando incluyan goma de mascar, dulces o cualquier otro tipo de artículos, conteniendo dibujos, figuras o ilustraciones que representen a la niñez de manera denigrante o ridícula, en actitudes de incitación a la violencia, a la autodestrucción o en cualquier otra forma de comportamiento antisocial, conocidas como "Garbage Pail Kids", por ejemplo, impresas por cualquier empresa o denominación comercial.',
                  umt: "Prohibida",
                  importDuty: "Prohibida",
                  exportDuty: "Prohibida",
                  regimenes: ["Prohibida"],
                  nicos: [],
                },
                {
                  code: "4908.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS5", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Calcomanías transferibles sin calor, susceptibles de ser usadas en cualquier superficie, excepto lo comprendido en el número de identificación comercial 4908.90.99.02.",
                    },
                    {
                      code: "02",
                      title:
                        "Franjas o láminas adheribles decorativas para carrocería de vehículos, recortadas a tamaños determinados.",
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "49.09",
          title:
            "Tarjetas postales impresas o ilustradas; tarjetas impresas con felicitaciones o comunicaciones personales, incluso con ilustraciones, adornos o aplicaciones, o con sobres.",
          subheadings: [
            {
              code: "4909.00",
              title:
                "Tarjetas postales impresas o ilustradas; tarjetas impresas con felicitaciones o comunicaciones personales, incluso con ilustraciones, adornos o aplicaciones, o con sobres.",
              classifications: [
                {
                  code: "4909.00.01",
                  title:
                    "Tarjetas postales impresas o ilustradas; tarjetas impresas con felicitaciones o comunicaciones personales, incluso con ilustraciones, adornos o aplicaciones, o con sobres.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Tarjetas postales impresas o ilustradas; tarjetas impresas con felicitaciones o comunicaciones personales, incluso con ilustraciones, adornos o aplicaciones, o con sobres.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "49.10",
          title:
            "Calendarios de cualquier clase impresos, incluidos los tacos de calendario.",
          subheadings: [
            {
              code: "4910.00",
              title:
                "Calendarios de cualquier clase impresos, incluidos los tacos de calendario.",
              classifications: [
                {
                  code: "4910.00.01",
                  title:
                    "Calendarios de cualquier clase impresos, incluidos los tacos de calendario.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Calendarios de cualquier clase impresos, incluidos los tacos de calendario.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "49.11",
          title:
            "Los demás impresos, incluidas las estampas, grabados y fotografías.",
          subheadings: [
            {
              code: "4911.10",
              title:
                "Impresos publicitarios, catálogos comerciales y similares.",
              classifications: [
                {
                  code: "4911.10.01",
                  title:
                    "Catálogos en idioma distinto del español, cuando se importen asignados en cantidad no mayor de 3 ejemplares por destinatarios.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Catálogos en idioma distinto del español, cuando se importen asignados en cantidad no mayor de 3 ejemplares por destinatarios.",
                    },
                  ],
                },
                {
                  code: "4911.10.02",
                  title:
                    "Guías, horarios o demás impresos relativos a servicios de transporte de compañías que operen en el extranjero.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Guías, horarios o demás impresos relativos a servicios de transporte de compañías que operen en el extranjero.",
                    },
                  ],
                },
                {
                  code: "4911.10.03",
                  title: "Folletos o publicaciones turísticas.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: "Folletos o publicaciones turísticas.",
                    },
                  ],
                },
                {
                  code: "4911.10.04",
                  title:
                    "Figuras o paisajes, impresos o fotografiados sobre tejidos.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Figuras o paisajes, impresos o fotografiados sobre tejidos.",
                    },
                  ],
                },
                {
                  code: "4911.10.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4911.91",
              title: "Estampas, grabados y fotografías.",
              classifications: [
                {
                  code: "4911.91.01",
                  title:
                    "Estampas, dibujos, fotografías, sobre papel o cartón para la edición de libros o colecciones de carácter educativo o cultural.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Estampas, dibujos, fotografías, sobre papel o cartón para la edición de libros o colecciones de carácter educativo o cultural.",
                    },
                  ],
                },
                {
                  code: "4911.91.03",
                  title:
                    "Terapéutico-pedagógicos, reconocibles como diseñados exclusivamente para instituciones de educación especial o similares.",
                  umt: "Kg",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Terapéutico-pedagógicos, reconocibles como diseñados exclusivamente para instituciones de educación especial o similares.",
                    },
                  ],
                },
                {
                  code: "4911.91.05",
                  title:
                    'Impresas a colores o en blanco y negro, presentadas para su venta en sobres o paquetes, aun cuando incluyan goma de mascar, dulces o cualquier otro tipo de artículos, conteniendo dibujos, figuras o ilustraciones que representen a la niñez de manera denigrante o ridícula, en actitudes de incitación a la violencia, a la autodestrucción o en cualquier otra forma de comportamiento antisocial, conocidas como "Garbage Pail Kids", por ejemplo, impresas por cualquier empresa o denominación comercial.',
                  umt: "Prohibida",
                  importDuty: "Prohibida",
                  exportDuty: "Prohibida",
                  regimenes: ["Prohibida"],
                  nicos: [],
                },
                {
                  code: "4911.91.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "FR_II", "CHT", "PS4", "NOM"],
                  nicos: [
                    { code: "01", title: "Fotografías a colores." },
                    {
                      code: "02",
                      title:
                        "Figuras o paisajes, impresos o fotografiados sobre tejidos.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4911.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "4911.99.01",
                  title: "Cuadros murales para escuelas.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Cuadros murales para escuelas." },
                  ],
                },
                {
                  code: "4911.99.06",
                  title:
                    "Terapéutico-pedagógicos, reconocibles como diseñados exclusivamente para instituciones de educación especial o similares.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Terapéutico-pedagógicos, reconocibles como diseñados exclusivamente para instituciones de educación especial o similares.",
                    },
                  ],
                },
                {
                  code: "4911.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "CE", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Boletos o billetes de rifas, loterías, espectáculos, ferrocarriles u otros servicios de transporte.",
                    },
                    { code: "02", title: "Impresos con claros para escribir." },
                    {
                      code: "03",
                      title:
                        "Tarjetas plásticas para identificación y para crédito, sin cinta magnética.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
