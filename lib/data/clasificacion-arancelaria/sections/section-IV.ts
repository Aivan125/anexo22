import type { Section } from "@/types/clasificacion-arancelaria";

export const sectionIV: Section = {
  code: "IV",
  title:
    "Productos de las industrias alimentarias; bebidas, líquidos alcohólicos y vinagre; tabaco y sucedáneos del tabaco elaborados; productos, incluso con nicotina, destinados para la inhalación sin combustión; otros productos que contengan nicotina destinados para la absorción de nicotina en el cuerpo humano",
  notes: {
    legales: [
      {
        id: "NL-SEC04-1",
        text: "En esta Sección, el término pellets designa los productos en forma de cilindro, bolita, etc., aglomerados por simple presión o con adición de un aglutinante en proporción inferior o igual al 3% en peso.",
      },
    ],
    nacionales: [],
    explicativas: [],
  },
  chapters: [
    {
      code: "16",
      title:
        "Preparaciones de carne, pescado, crustáceos, moluscos o demás invertebrados acuáticos, o de insectos",
      notes: {
        legales: [
          {
            id: "NL-CAP16-1",
            text: "Este Capítulo no comprende la carne, despojos, pescado, crustáceos, moluscos y demás invertebrados acuáticos, así como los insectos, preparados o conservados por los procedimientos citados en los Capítulos 02 y 03, en la Nota 6 del Capítulo 04 o en la partida 05.04.",
          },
          {
            id: "NL-CAP16-2",
            text: "Las preparaciones alimenticias se clasifican en este Capítulo siempre que contengan una proporción superior al 20% en peso de embutidos, carne, despojos, sangre, insectos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, o de una combinación de estos productos.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "16.01",
          title:
            "Embutidos y productos similares de carne, despojos, sangre o de insectos; preparaciones alimenticias a base de estos productos.",
          subheadings: [
            {
              code: "1601.00",
              title:
                "Embutidos y productos similares de carne, despojos, sangre o de insectos; preparaciones alimenticias a base de estos productos.",
              classifications: [
                {
                  code: "1601.00.03",
                  title:
                    "De aves de la especie Gallus domesticus o pavo (gallipavo).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "PACIC", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De aves de la especie Gallus domesticus o pavo (gallipavo).",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "16.02",
          title:
            "Las demás preparaciones y conservas de carne, despojos, sangre o de insectos.",
          subheadings: [
            {
              code: "1602.10",
              title: "Preparaciones homogeneizadas.",
              classifications: [
                {
                  code: "1602.10.02",
                  title: "Preparaciones homogeneizadas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [
                    { code: "00", title: "Preparaciones homogeneizadas." },
                  ],
                },
              ],
            },
            {
              code: "1602.20",
              title: "De hígado de cualquier animal.",
              classifications: [
                {
                  code: "1602.20.02",
                  title: "De hígado de cualquier animal.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [
                    { code: "00", title: "De hígado de cualquier animal." },
                  ],
                },
              ],
            },
            {
              code: "1602.31",
              title: "De pavo (gallipavo).",
              classifications: [
                {
                  code: "1602.31.01",
                  title: "De pavo (gallipavo).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "De pavo (gallipavo)." }],
                },
              ],
            },
            {
              code: "1602.32",
              title: "De aves de la especie Gallus domesticus.",
              classifications: [
                {
                  code: "1602.32.01",
                  title: "De aves de la especie Gallus domesticus.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "De aves de la especie Gallus domesticus.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1602.39",
              title: "Las demás.",
              classifications: [
                {
                  code: "1602.39.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "1602.41",
              title: "Jamones y trozos de jamón.",
              classifications: [
                {
                  code: "1602.41.01",
                  title: "Jamones y trozos de jamón.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Jamones y trozos de jamón." }],
                },
              ],
            },
            {
              code: "1602.42",
              title: "Paletas y trozos de paleta.",
              classifications: [
                {
                  code: "1602.42.01",
                  title: "Paletas y trozos de paleta.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Paletas y trozos de paleta." }],
                },
              ],
            },
            {
              code: "1602.49",
              title: "Las demás, incluidas las mezclas.",
              classifications: [
                {
                  code: "1602.49.91",
                  title: "Las demás, incluidas las mezclas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [
                    { code: "00", title: "Las demás, incluidas las mezclas." },
                  ],
                },
              ],
            },
            {
              code: "1602.50",
              title: "De la especie bovina.",
              classifications: [
                {
                  code: "1602.50.02",
                  title: "De la especie bovina.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "De la especie bovina." }],
                },
              ],
            },
            {
              code: "1602.90",
              title:
                "Las demás, incluidas las preparaciones de sangre de cualquier animal.",
              classifications: [
                {
                  code: "1602.90.91",
                  title:
                    "Las demás, incluidas las preparaciones de sangre de cualquier animal.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [
                    { code: "01", title: "Extractos y jugos de carne." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "16.03",
          title:
            "Extractos y jugos de carne, pescado o de crustáceos, moluscos o demás invertebrados acuáticos.",
          subheadings: [
            {
              code: "1603.00",
              title:
                "Extractos y jugos de carne, pescado o de crustáceos, moluscos o demás invertebrados acuáticos.",
              classifications: [
                {
                  code: "1603.00.01",
                  title: "Extractos de carne.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "SAL"],
                  nicos: [{ code: "00", title: "Extractos de carne." }],
                },
                {
                  code: "1603.00.02",
                  title:
                    "Extractos y jugos de pescado, crustáceos, moluscos o demás invertebrados acuáticos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Extractos y jugos de pescado, crustáceos, moluscos o demás invertebrados acuáticos.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "16.04",
          title:
            "Preparaciones y conservas de pescado; caviar y sus sucedáneos preparados con huevas de pescado.",
          subheadings: [
            {
              code: "1604.11",
              title: "Salmones.",
              classifications: [
                {
                  code: "1604.11.01",
                  title: "Salmones.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Salmones." }],
                },
              ],
            },
            {
              code: "1604.12",
              title: "Arenques.",
              classifications: [
                {
                  code: "1604.12.01",
                  title: "Arenques.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "EMB", "SAL"],
                  nicos: [{ code: "00", title: "Arenques." }],
                },
              ],
            },
            {
              code: "1604.13",
              title: "Sardinas, sardinelas y espadines.",
              classifications: [
                {
                  code: "1604.13.01",
                  title: "Sardinas, sardinelas y espadines.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "EMB", "SAL"],
                  nicos: [
                    { code: "00", title: "Sardinas, sardinelas y espadines." },
                  ],
                },
              ],
            },
            {
              code: "1604.14",
              title: "Atunes, listados y bonitos (Sarda spp.).",
              classifications: [
                {
                  code: "1604.14.01",
                  title: "Atunes, listados y bonitos (Sarda spp.).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "EMB", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title: "Atunes, listados y bonitos (Sarda spp.).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1604.15",
              title: "Caballas.",
              classifications: [
                {
                  code: "1604.15.01",
                  title: "Caballas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "EMB", "SAL"],
                  nicos: [{ code: "00", title: "Caballas." }],
                },
              ],
            },
            {
              code: "1604.16",
              title: "Anchoas.",
              classifications: [
                {
                  code: "1604.16.01",
                  title: "Anchoas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "EMB", "SAL"],
                  nicos: [{ code: "00", title: "Anchoas." }],
                },
              ],
            },
            {
              code: "1604.17",
              title: "Anguilas.",
              classifications: [
                {
                  code: "1604.17.01",
                  title: "Anguilas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL", "SEM"],
                  nicos: [{ code: "00", title: "Anguilas." }],
                },
              ],
            },
            {
              code: "1604.18",
              title: "Aletas de tiburón.",
              classifications: [
                {
                  code: "1604.18.01",
                  title: "Aletas de tiburón.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "EMB", "SAL", "SEM"],
                  nicos: [{ code: "00", title: "Aletas de tiburón." }],
                },
              ],
            },
            {
              code: "1604.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "1604.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "EMB", "SAL", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1604.20",
              title: "Las demás preparaciones y conservas de pescado.",
              classifications: [
                {
                  code: "1604.20.99",
                  title: "Las demás preparaciones y conservas de pescado.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "EMB", "SAL", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Las demás preparaciones y conservas de pescado.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1604.31",
              title: "Caviar.",
              classifications: [
                {
                  code: "1604.31.01",
                  title: "Caviar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL", "SEM"],
                  nicos: [{ code: "00", title: "Caviar." }],
                },
              ],
            },
            {
              code: "1604.32",
              title: "Sucedáneos del caviar.",
              classifications: [
                {
                  code: "1604.32.01",
                  title: "Sucedáneos del caviar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAL"],
                  nicos: [{ code: "00", title: "Sucedáneos del caviar." }],
                },
              ],
            },
          ],
        },
        {
          code: "16.05",
          title:
            "Crustáceos, moluscos y demás invertebrados acuáticos, preparados o conservados.",
          subheadings: [
            {
              code: "1605.10",
              title: "Cangrejos (excepto macruros).",
              classifications: [
                {
                  code: "1605.10.02",
                  title: "Cangrejos (excepto macruros).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [
                    { code: "01", title: "Centollas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "1605.21",
              title: "Presentados en envases no herméticos.",
              classifications: [
                {
                  code: "1605.21.01",
                  title: "Presentados en envases no herméticos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title: "Presentados en envases no herméticos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1605.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "1605.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1605.30",
              title: "Bogavantes.",
              classifications: [
                {
                  code: "1605.30.01",
                  title: "Bogavantes.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAL"],
                  nicos: [{ code: "00", title: "Bogavantes." }],
                },
              ],
            },
            {
              code: "1605.40",
              title: "Los demás crustáceos.",
              classifications: [
                {
                  code: "1605.40.91",
                  title: "Los demás crustáceos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Los demás crustáceos." }],
                },
              ],
            },
            {
              code: "1605.51",
              title: "Ostras.",
              classifications: [
                {
                  code: "1605.51.01",
                  title: "Ostras.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Ostras." }],
                },
              ],
            },
            {
              code: "1605.52",
              title: "Vieiras, volandeiras y demás moluscos.",
              classifications: [
                {
                  code: "1605.52.01",
                  title: "Vieiras, volandeiras y demás moluscos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title: "Vieiras, volandeiras y demás moluscos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1605.53",
              title: "Mejillones.",
              classifications: [
                {
                  code: "1605.53.01",
                  title: "Mejillones.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Mejillones." }],
                },
              ],
            },
            {
              code: "1605.54",
              title: "Sepias (jibias), globitos, calamares y potas.",
              classifications: [
                {
                  code: "1605.54.01",
                  title: "Sepias (jibias), globitos, calamares y potas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title: "Sepias (jibias), globitos, calamares y potas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1605.55",
              title: "Pulpos.",
              classifications: [
                {
                  code: "1605.55.01",
                  title: "Pulpos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Pulpos." }],
                },
              ],
            },
            {
              code: "1605.56",
              title: "Almejas, berberechos y arcas.",
              classifications: [
                {
                  code: "1605.56.01",
                  title: "Almejas, berberechos y arcas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL", "SEM"],
                  nicos: [
                    { code: "00", title: "Almejas, berberechos y arcas." },
                  ],
                },
              ],
            },
            {
              code: "1605.57",
              title: "Abulones u orejas de mar.",
              classifications: [
                {
                  code: "1605.57.01",
                  title: "Abulones u orejas de mar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Abulones u orejas de mar." }],
                },
              ],
            },
            {
              code: "1605.58",
              title: "Caracoles, excepto los de mar.",
              classifications: [
                {
                  code: "1605.58.01",
                  title: "Caracoles, excepto los de mar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [
                    { code: "00", title: "Caracoles, excepto los de mar." },
                  ],
                },
              ],
            },
            {
              code: "1605.59",
              title: "Los demás.",
              classifications: [
                {
                  code: "1605.59.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1605.61",
              title: "Pepinos de mar.",
              classifications: [
                {
                  code: "1605.61.01",
                  title: "Pepinos de mar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL", "SEM"],
                  nicos: [{ code: "00", title: "Pepinos de mar." }],
                },
              ],
            },
            {
              code: "1605.62",
              title: "Erizos de mar.",
              classifications: [
                {
                  code: "1605.62.01",
                  title: "Erizos de mar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Erizos de mar." }],
                },
              ],
            },
            {
              code: "1605.63",
              title: "Medusas.",
              classifications: [
                {
                  code: "1605.63.01",
                  title: "Medusas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Medusas." }],
                },
              ],
            },
            {
              code: "1605.69",
              title: "Los demás.",
              classifications: [
                {
                  code: "1605.69.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "17",
      title: "Azúcares y artículos de confitería",
      notes: {
        legales: [
          {
            id: "NL-CAP17-1",
            text: "Este Capítulo no comprende: a) los artículos de confitería que contengan cacao (partida 18.06); b) los azúcares químicamente puros (excepto la sacarosa, lactosa, maltosa, glucosa y fructosa (levulosa)) y demás productos de la partida 29.40; c) los medicamentos y demás productos del Capítulo 30.",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP17-1",
            text: "Para los efectos de este Capítulo, los términos, con aromatizante(s), aromatizado(s) y aromatizada(s) significan: con adición de sabor.",
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "17.01",
          title:
            "Azúcar de caña o de remolacha y sacarosa químicamente pura, en estado sólido.",
          subheadings: [
            {
              code: "1701.12",
              title: "De remolacha.",
              classifications: [
                {
                  code: "1701.12.05",
                  title: "De remolacha.",
                  umt: "Kg",
                  importDuty: "AE",
                  exportDuty: 0,
                  regimenes: ["PS4", "IM_PR", "IM_SEN"],
                  nicos: [{ code: "00", title: "De remolacha." }],
                },
              ],
            },
            {
              code: "1701.13",
              title:
                "Azúcar de caña mencionado en la Nota 2 de subpartida de este Capítulo.",
              classifications: [
                {
                  code: "1701.13.01",
                  title:
                    "Azúcar de caña mencionado en la Nota 2 de subpartida de este Capítulo.",
                  umt: "Kg",
                  importDuty: "AE",
                  exportDuty: 0,
                  regimenes: ["PS4", "IM_PR", "IM_SEN"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Azúcar de caña mencionado en la Nota 2 de subpartida de este Capítulo.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1701.14",
              title: "Los demás azúcares de caña.",
              classifications: [
                {
                  code: "1701.14.91",
                  title: "Los demás azúcares de caña.",
                  umt: "Kg",
                  importDuty: "AE",
                  exportDuty: 0,
                  regimenes: ["PERM", "AZU", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Azúcar cuyo contenido en peso de sacarosa, en estado seco, tenga una polarización igual o superior a 99.2 pero inferior a 99.5 grados.",
                    },
                    {
                      code: "02",
                      title:
                        "Azúcar cuyo contenido en peso de sacarosa, en estado seco, tenga una polarización inferior a 99.2 grados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1701.91",
              title: "Con adición de aromatizante o colorante.",
              classifications: [
                {
                  code: "1701.91.01",
                  title: "Con adición de aromatizante o colorante.",
                  umt: "Kg",
                  importDuty: "AE",
                  exportDuty: 0,
                  regimenes: ["PS4", "IM_PR", "IM_SEN", "PERM", "AZU", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Con adición de aromatizante o colorante.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1701.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "1701.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: "AE",
                  exportDuty: 0,
                  regimenes: ["PS4", "IM_PR", "IM_SEN", "PERM", "AZU", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "17.02",
          title:
            "Los demás azúcares, incluidas la lactosa, maltosa, glucosa y fructosa (levulosa) químicamente puras, en estado sólido; jarabe de azúcar sin adición de aromatizante ni colorante; sucedáneos de la miel, incluso mezclados con miel natural; azúcar y melaza caramelizados.",
          subheadings: [
            {
              code: "1702.11",
              title:
                "Con un contenido de lactosa superior o igual al 99% en peso, expresado en lactosa anhidra, calculado sobre producto seco.",
              classifications: [
                {
                  code: "1702.11.01",
                  title:
                    "Con un contenido de lactosa superior o igual al 99% en peso, expresado en lactosa anhidra, calculado sobre producto seco.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Con un contenido de lactosa superior o igual al 99% en peso, expresado en lactosa anhidra, calculado sobre producto seco.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1702.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "1702.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1702.20",
              title: "Azúcar y jarabe de arce (maple).",
              classifications: [
                {
                  code: "1702.20.01",
                  title: "Azúcar y jarabe de arce (maple).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Azúcar y jarabe de arce (maple)." },
                  ],
                },
              ],
            },
            {
              code: "1702.30",
              title:
                "Glucosa y jarabe de glucosa, sin fructosa o con un contenido de fructosa, calculado sobre producto seco, inferior al 20% en peso.",
              classifications: [
                {
                  code: "1702.30.01",
                  title:
                    "Glucosa y jarabe de glucosa, sin fructosa o con un contenido de fructosa, calculado sobre producto seco, inferior al 20% en peso.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Glucosa y jarabe de glucosa, sin fructosa o con un contenido de fructosa, calculado sobre producto seco, inferior al 20% en peso.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1702.40",
              title:
                "Glucosa y jarabe de glucosa, con un contenido de fructosa, calculado sobre producto seco, superior o igual al 20% pero inferior al 50% en peso, excepto el azúcar invertido (o azúcar inverso).",
              classifications: [
                {
                  code: "1702.40.01",
                  title:
                    "Glucosa y jarabe de glucosa, con un contenido de fructosa, calculado sobre producto seco, superior o igual al 20% pero inferior al 50% en peso, excepto el azúcar invertido (o azúcar inverso).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Glucosa y jarabe de glucosa, con un contenido de fructosa, calculado sobre producto seco, superior o igual al 20% pero inferior al 50% en peso, excepto el azúcar invertido (o azúcar inverso).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1702.50",
              title: "Fructosa químicamente pura.",
              classifications: [
                {
                  code: "1702.50.01",
                  title: "Fructosa químicamente pura.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "CUP"],
                  nicos: [{ code: "00", title: "Fructosa químicamente pura." }],
                },
              ],
            },
            {
              code: "1702.60",
              title:
                "Las demás fructosas y jarabe de fructosa, con un contenido de fructosa, calculado sobre producto seco, superior al 50% en peso.",
              classifications: [
                {
                  code: "1702.60.01",
                  title:
                    "Las demás fructosas y jarabe de fructosa, con un contenido de fructosa, calculado sobre producto seco, superior al 50% en peso.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Las demás fructosas y jarabe de fructosa, con un contenido de fructosa, calculado sobre producto seco, superior al 50% en peso.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1702.90",
              title:
                "Los demás, incluido el azúcar invertido (o azúcar inverso) y demás azúcares y jarabes de azúcar, con un contenido de fructosa, calculado sobre producto seco, de 50% en peso.",
              classifications: [
                {
                  code: "1702.90.99",
                  title:
                    "Los demás, incluido el azúcar invertido (o azúcar inverso) y demás azúcares y jarabes de azúcar, con un contenido de fructosa, calculado sobre producto seco, de 50% en peso.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Los demás, incluido el azúcar invertido (o azúcar inverso) y demás azúcares y jarabes de azúcar, con un contenido de fructosa, calculado sobre producto seco, de 50% en peso.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "17.03",
          title:
            "Melaza procedente de la extracción o del refinado del azúcar.",
          subheadings: [
            {
              code: "1703.10",
              title: "Melaza de caña.",
              classifications: [
                {
                  code: "1703.10.01",
                  title: "Melaza de caña.",
                  umt: "Kg",
                  importDuty: 50,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Melaza de caña." }],
                },
              ],
            },
            {
              code: "1703.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1703.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 50,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "17.04",
          title:
            "Artículos de confitería sin cacao (incluido el chocolate blanco).",
          subheadings: [
            {
              code: "1704.10",
              title:
                "Chicles y demás gomas de mascar, incluso recubiertos de azúcar.",
              classifications: [
                {
                  code: "1704.10.01",
                  title:
                    "Chicles y demás gomas de mascar, incluso recubiertos de azúcar.",
                  umt: "Kg",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Chicles y demás gomas de mascar, incluso recubiertos de azúcar.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1704.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1704.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "PERM", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "18",
      title: "Cacao y sus preparaciones",
      notes: {
        legales: [
          {
            id: "NL-CAP18-1",
            text: "Este Capítulo no comprende las preparaciones de las partidas 04.03, 19.01, 19.04, 19.05, 21.05, 22.02, 22.08, 30.03 o 30.04.",
          },
          {
            id: "NL-CAP18-2",
            text: "La partida 18.06 comprende los artículos de confitería que contengan cacao y, salvo lo dispuesto en la Nota 1 de este Capítulo, las demás preparaciones alimenticias que contengan cacao.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "18.01",
          title: "Cacao en grano, entero o partido, crudo o tostado.",
          subheadings: [
            {
              code: "1801.00",
              title: "Cacao en grano, entero o partido, crudo o tostado.",
              classifications: [
                {
                  code: "1801.00.02",
                  title: "Cacao Grijalva.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Cacao Grijalva." }],
                },
                {
                  code: "1801.00.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "18.02",
          title: "Cáscara, películas y demás residuos de cacao.",
          subheadings: [
            {
              code: "1802.00",
              title: "Cáscara, películas y demás residuos de cacao.",
              classifications: [
                {
                  code: "1802.00.01",
                  title: "Cáscara, películas y demás residuos de cacao.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Cáscara, películas y demás residuos de cacao.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "18.03",
          title: "Pasta de cacao, incluso desgrasada.",
          subheadings: [
            {
              code: "1803.10",
              title: "Sin desgrasar.",
              classifications: [
                {
                  code: "1803.10.01",
                  title: "Sin desgrasar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [{ code: "00", title: "Sin desgrasar." }],
                },
              ],
            },
            {
              code: "1803.20",
              title: "Desgrasada total o parcialmente.",
              classifications: [
                {
                  code: "1803.20.01",
                  title: "Desgrasada total o parcialmente.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    { code: "00", title: "Desgrasada total o parcialmente." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "18.04",
          title: "Manteca, grasa y aceite de cacao.",
          subheadings: [
            {
              code: "1804.00",
              title: "Manteca, grasa y aceite de cacao.",
              classifications: [
                {
                  code: "1804.00.01",
                  title: "Manteca, grasa y aceite de cacao.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    { code: "00", title: "Manteca, grasa y aceite de cacao." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "18.05",
          title: "Cacao en polvo sin adición de azúcar ni otro edulcorante.",
          subheadings: [
            {
              code: "1805.00",
              title:
                "Cacao en polvo sin adición de azúcar ni otro edulcorante.",
              classifications: [
                {
                  code: "1805.00.01",
                  title:
                    "Cacao en polvo sin adición de azúcar ni otro edulcorante.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cacao en polvo sin adición de azúcar ni otro edulcorante.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "18.06",
          title:
            "Chocolate y demás preparaciones alimenticias que contengan cacao.",
          subheadings: [
            {
              code: "1806.10",
              title: "Cacao en polvo con adición de azúcar u otro edulcorante.",
              classifications: [
                {
                  code: "1806.10.01",
                  title:
                    "Con un contenido de azúcar superior o igual al 90%, en peso.",
                  umt: "Kg",
                  importDuty: "AE",
                  exportDuty: 0,
                  regimenes: ["IM_SEN", "PERM", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Con un contenido de azúcar superior o igual al 90%, en peso.",
                    },
                  ],
                },
                {
                  code: "1806.10.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1806.20",
              title:
                "Las demás preparaciones, en bloques, tabletas o barras con peso superior a 2 kg o en forma líquida, pastosa o en polvo, gránulos o formas similares, en recipientes o en envases inmediatos, con un contenido superior a 2 kg.",
              classifications: [
                {
                  code: "1806.20.99",
                  title: "Las demás preparaciones.",
                  umt: "Kg",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "NOM"],
                  nicos: [{ code: "00", title: "Las demás preparaciones." }],
                },
              ],
            },
            {
              code: "1806.31",
              title: "Rellenos.",
              classifications: [
                {
                  code: "1806.31.01",
                  title: "Rellenos.",
                  umt: "Kg",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Rellenos." }],
                },
              ],
            },
            {
              code: "1806.32",
              title: "Sin rellenar.",
              classifications: [
                {
                  code: "1806.32.01",
                  title: "Sin rellenar.",
                  umt: "Kg",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: ["PS4", "PERM", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Sin rellenar." }],
                },
              ],
            },
            {
              code: "1806.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1806.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: ["PS4", "PERM", "NOM", "SAL"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Preparaciones alimenticias de productos de las partidas 04.01 a 04.04, que contengan polvo de cacao en una proporción, calculada sobre una base totalmente desgrasada, superior al 5% en peso.",
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
      code: "19",
      title:
        "Preparaciones a base de cereales, harina, almidón, fécula o leche; productos de pastelería",
      notes: {
        legales: [
          {
            id: "NL-CAP19-1",
            text: "Este Capítulo no comprende: a) las preparaciones alimenticias que contengan una proporción superior al 20% en peso de embutidos, carne, despojos, sangre, insectos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, o de una combinación de estos productos (Capítulo 16), excepto los productos rellenos de la partida 19.02; b) los productos a base de harina, almidón o fécula (galletas, etc.) especialmente preparados para la alimentación de los animales (partida 23.09); c) los medicamentos y demás productos del Capítulo 30.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "19.01",
          title:
            "Extracto de malta; preparaciones alimenticias de harina, grañones, sémola, almidón, fécula o extracto de malta.",
          subheadings: [
            {
              code: "1901.10",
              title:
                "Preparaciones para la alimentación de lactantes o niños de corta edad, acondicionadas para la venta al por menor.",
              classifications: [
                {
                  code: "1901.10.02",
                  title:
                    "Preparaciones para la alimentación de lactantes o niños de corta edad, acondicionadas para la venta al por menor.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Preparaciones para la alimentación de lactantes o niños de corta edad, acondicionadas para la venta al por menor.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1901.20",
              title:
                "Mezclas y pastas para la preparación de productos de panadería, pastelería o galletería, de la partida 19.05.",
              classifications: [
                {
                  code: "1901.20.01",
                  title:
                    "Mezclas y pastas para la preparación de productos de panadería, pastelería o galletería, de la partida 19.05.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Mezclas y pastas para la preparación de productos de panadería, pastelería o galletería, de la partida 19.05.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1901.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1901.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "19.02",
          title:
            "Pastas alimenticias, incluso cocidas o rellenas (de carne u otras sustancias) o preparadas de otra forma, tales como espaguetis, fideos, macarrones, tallarines, lasañas, ñoquis, ravioles, canelones; cuscús, incluso preparado.",
          subheadings: [
            {
              code: "1902.11",
              title: "Que contengan huevo.",
              classifications: [
                {
                  code: "1902.11.01",
                  title: "Que contengan huevo.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Que contengan huevo." }],
                },
              ],
            },
            {
              code: "1902.19",
              title: "Las demás.",
              classifications: [
                {
                  code: "1902.19.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "1902.20",
              title:
                "Pastas alimenticias rellenas, incluso cocidas o preparadas de otra forma.",
              classifications: [
                {
                  code: "1902.20.01",
                  title:
                    "Pastas alimenticias rellenas, incluso cocidas o preparadas de otra forma.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Pastas alimenticias rellenas, incluso cocidas o preparadas de otra forma.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1902.30",
              title: "Las demás pastas alimenticias.",
              classifications: [
                {
                  code: "1902.30.99",
                  title: "Las demás pastas alimenticias.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    { code: "00", title: "Las demás pastas alimenticias." },
                  ],
                },
              ],
            },
            {
              code: "1902.40",
              title: "Cuscús.",
              classifications: [
                {
                  code: "1902.40.01",
                  title: "Cuscús.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Cuscús." }],
                },
              ],
            },
          ],
        },
        {
          code: "19.03",
          title:
            "Tapioca y sus sucedáneos preparados con fécula, en copos, grumos, granos perlados, cerniduras o formas similares.",
          subheadings: [
            {
              code: "1903.00",
              title:
                "Tapioca y sus sucedáneos preparados con fécula, en copos, grumos, granos perlados, cerniduras o formas similares.",
              classifications: [
                {
                  code: "1903.00.01",
                  title:
                    "Tapioca y sus sucedáneos preparados con fécula, en copos, grumos, granos perlados, cerniduras o formas similares.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Tapioca y sus sucedáneos preparados con fécula, en copos, grumos, granos perlados, cerniduras o formas similares.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "19.04",
          title:
            "Productos a base de cereales obtenidos por inflado o tostado; cereales (excepto el maíz) en grano o en forma de copos u otro grano trabajado (excepto la harina, grañones y sémola), precocidos o preparados de otro modo, no expresados ni comprendidos en otra parte.",
          subheadings: [
            {
              code: "1904.10",
              title:
                "Productos a base de cereales obtenidos por inflado o tostado.",
              classifications: [
                {
                  code: "1904.10.01",
                  title:
                    "Productos a base de cereales obtenidos por inflado o tostado.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Productos a base de cereales obtenidos por inflado o tostado.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1904.20",
              title:
                "Preparaciones alimenticias obtenidas con copos de cereales sin tostar o con mezclas de copos de cereales sin tostar y copos de cereales tostados o cereales inflados.",
              classifications: [
                {
                  code: "1904.20.01",
                  title:
                    "Preparaciones alimenticias obtenidas con copos de cereales sin tostar o con mezclas de copos de cereales sin tostar y copos de cereales tostados o cereales inflados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Preparaciones alimenticias obtenidas con copos de cereales sin tostar o con mezclas de copos de cereales sin tostar y copos de cereales tostados o cereales inflados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1904.30",
              title: "Bulgur de trigo.",
              classifications: [
                {
                  code: "1904.30.01",
                  title: "Bulgur de trigo.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Bulgur de trigo." }],
                },
              ],
            },
            {
              code: "1904.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1904.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "19.05",
          title:
            "Productos de panadería, pastelería o galletería, incluso con adición de cacao; hostias, sellos vacíos de los tipos utilizados para medicamentos, obleas para sellar, pastas secas de harina, almidón o fécula, en hojas, y productos similares.",
          subheadings: [
            {
              code: "1905.10",
              title: "Pan crujiente llamado «Knäckebrot».",
              classifications: [
                {
                  code: "1905.10.01",
                  title: "Pan crujiente llamado Knäckebrot.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [
                    { code: "00", title: "Pan crujiente llamado Knäckebrot." },
                  ],
                },
              ],
            },
            {
              code: "1905.20",
              title: "Pan de especias.",
              classifications: [
                {
                  code: "1905.20.01",
                  title: "Pan de especias.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [{ code: "00", title: "Pan de especias." }],
                },
              ],
            },
            {
              code: "1905.31",
              title: "Galletas dulces (con adición de edulcorante).",
              classifications: [
                {
                  code: "1905.31.01",
                  title: "Galletas dulces (con adición de edulcorante).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Galletas dulces (con adición de edulcorante).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1905.32",
              title:
                "Barquillos y obleas, incluso rellenos (gaufrettes, wafers) y waffles (gaufres).",
              classifications: [
                {
                  code: "1905.32.01",
                  title:
                    "Barquillos y obleas, incluso rellenos (gaufrettes, wafers) y waffles (gaufres).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Barquillos y obleas, incluso rellenos (gaufrettes, wafers) y waffles (gaufres).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1905.40",
              title: "Pan tostado, productos tostados similares y crutones.",
              classifications: [
                {
                  code: "1905.40.01",
                  title:
                    "Pan tostado, productos tostados similares y crutones.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Pan tostado, productos tostados similares y crutones.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1905.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1905.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "20",
      title:
        "Preparaciones de hortalizas, frutas u otros frutos o demás partes de plantas",
      notes: {
        legales: [
          {
            id: "NL-CAP20-1",
            text: "Este Capítulo no comprende: a) las hortalizas y frutas u otros frutos preparados o conservados por los procedimientos citados en los Capítulos 07, 08 u 11; b) las preparaciones alimenticias que contengan una proporción superior al 20% en peso de embutidos, carne, despojos, sangre, insectos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, o de una combinación de estos productos (Capítulo 16); c) las preparaciones de harina, sémola, almidón, fécula o extracto de malta (partida 19.01) y las preparaciones alimenticias de productos de las partidas 04.01 a 04.04 que contengan cacao en una proporción superior al 5% en peso (partida 19.01).",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "20.01",
          title:
            "Hortalizas, frutas u otros frutos y demás partes comestibles de plantas, preparados o conservados en vinagre o en ácido acético.",
          subheadings: [
            {
              code: "2001.10",
              title: "Pepinos y pepinillos.",
              classifications: [
                {
                  code: "2001.10.01",
                  title: "Pepinos y pepinillos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [{ code: "00", title: "Pepinos y pepinillos." }],
                },
              ],
            },
            {
              code: "2001.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2001.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "20.02",
          title:
            "Tomates preparados o conservados (excepto en vinagre o en ácido acético).",
          subheadings: [
            {
              code: "2002.10",
              title: "Tomates enteros o en trozos.",
              classifications: [
                {
                  code: "2002.10.01",
                  title: "Tomates enteros o en trozos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "PACIC"],
                  nicos: [
                    { code: "00", title: "Tomates enteros o en trozos." },
                  ],
                },
              ],
            },
            {
              code: "2002.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2002.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "20.03",
          title:
            "Hongos y trufas, preparados o conservados (excepto en vinagre o en ácido acético).",
          subheadings: [
            {
              code: "2003.10",
              title: "Hongos del género Agaricus.",
              classifications: [
                {
                  code: "2003.10.01",
                  title: "Hongos del género Agaricus.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Hongos del género Agaricus." }],
                },
              ],
            },
            {
              code: "2003.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2003.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "20.04",
          title:
            "Las demás hortalizas preparadas o conservadas (excepto en vinagre o en ácido acético), congeladas, excepto los productos de la partida 20.06.",
          subheadings: [
            {
              code: "2004.10",
              title: "Papas (patatas).",
              classifications: [
                {
                  code: "2004.10.01",
                  title: "Papas (patatas).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "PACIC"],
                  nicos: [{ code: "00", title: "Papas (patatas)." }],
                },
              ],
            },
            {
              code: "2004.90",
              title: "Las demás hortalizas y las mezclas de hortalizas.",
              classifications: [
                {
                  code: "2004.90.91",
                  title: "Las demás hortalizas y las mezclas de hortalizas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Las demás hortalizas y las mezclas de hortalizas.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "20.05",
          title:
            "Las demás hortalizas preparadas o conservadas (excepto en vinagre o en ácido acético), sin congelar, excepto los productos de la partida 20.06.",
          subheadings: [
            {
              code: "2005.10",
              title: "Hortalizas homogeneizadas.",
              classifications: [
                {
                  code: "2005.10.01",
                  title: "Hortalizas homogeneizadas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAL"],
                  nicos: [{ code: "00", title: "Hortalizas homogeneizadas." }],
                },
              ],
            },
            {
              code: "2005.20",
              title: "Papas (patatas).",
              classifications: [
                {
                  code: "2005.20.01",
                  title: "Papas (patatas).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "PACIC"],
                  nicos: [{ code: "00", title: "Papas (patatas)." }],
                },
              ],
            },
            {
              code: "2005.40",
              title: "Chícharos (arvejas, guisantes) (Pisum sativum).",
              classifications: [
                {
                  code: "2005.40.01",
                  title: "Chícharos (arvejas, guisantes) (Pisum sativum).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Chícharos (arvejas, guisantes) (Pisum sativum).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2005.51",
              title: "Desvainados.",
              classifications: [
                {
                  code: "2005.51.01",
                  title: "Desvainados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAL"],
                  nicos: [{ code: "00", title: "Desvainados." }],
                },
              ],
            },
            {
              code: "2005.59",
              title: "Los demás.",
              classifications: [
                {
                  code: "2005.59.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2005.60",
              title: "Espárragos.",
              classifications: [
                {
                  code: "2005.60.01",
                  title: "Espárragos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Espárragos." }],
                },
              ],
            },
            {
              code: "2005.70",
              title: "Aceitunas.",
              classifications: [
                {
                  code: "2005.70.01",
                  title: "Aceitunas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [{ code: "00", title: "Aceitunas." }],
                },
              ],
            },
            {
              code: "2005.80",
              title: "Maíz dulce (Zea mays var. saccharata).",
              classifications: [
                {
                  code: "2005.80.01",
                  title: "Maíz dulce (Zea mays var. saccharata).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title: "Maíz dulce (Zea mays var. saccharata).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2005.91",
              title: "Brotes de bambú.",
              classifications: [
                {
                  code: "2005.91.01",
                  title: "Brotes de bambú.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Brotes de bambú." }],
                },
              ],
            },
            {
              code: "2005.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "2005.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["CHT", "NOM", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "20.06",
          title:
            "Hortalizas, frutas u otros frutos o sus cortezas y demás partes de plantas, confitados con azúcar (almibarados, glaseados o escarchados).",
          subheadings: [
            {
              code: "2006.00",
              title:
                "Hortalizas, frutas u otros frutos o sus cortezas y demás partes de plantas, confitados con azúcar (almibarados, glaseados o escarchados).",
              classifications: [
                {
                  code: "2006.00.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["CHT", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "20.07",
          title:
            "Confituras, jaleas y mermeladas, purés y pastas de frutas u otros frutos, obtenidos por cocción, incluso con adición de azúcar u otro edulcorante.",
          subheadings: [
            {
              code: "2007.10",
              title: "Preparaciones homogeneizadas.",
              classifications: [
                {
                  code: "2007.10.01",
                  title: "Preparaciones homogeneizadas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAL"],
                  nicos: [
                    { code: "00", title: "Preparaciones homogeneizadas." },
                  ],
                },
              ],
            },
            {
              code: "2007.91",
              title: "De agrios (cítricos).",
              classifications: [
                {
                  code: "2007.91.01",
                  title: "De agrios (cítricos).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAL"],
                  nicos: [{ code: "00", title: "De agrios (cítricos)." }],
                },
              ],
            },
            {
              code: "2007.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "2007.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["CHT", "NOM", "SAL"],
                  nicos: [
                    { code: "01", title: "Mermeladas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "20.08",
          title:
            "Frutas u otros frutos y demás partes comestibles de plantas, preparados o conservados de otro modo, incluso con adición de azúcar u otro edulcorante o alcohol, no expresados ni comprendidos en otra parte.",
          subheadings: [
            {
              code: "2008.11",
              title: "Manteca (mantequilla) de maní (cacahuate, cacahuete).",
              classifications: [
                {
                  code: "2008.11.01",
                  title:
                    "Manteca (mantequilla) de maní (cacahuate, cacahuete).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Manteca (mantequilla) de maní (cacahuate, cacahuete).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2008.19",
              title: "Los demás, incluidas las mezclas.",
              classifications: [
                {
                  code: "2008.19.99",
                  title: "Los demás, incluidas las mezclas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    { code: "00", title: "Los demás, incluidas las mezclas." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "20.09",
          title:
            "Jugos de frutas u otros frutos (incluido el mosto de uva y el agua de coco) o de hortalizas, sin fermentar y sin adición de alcohol, incluso con adición de azúcar u otro edulcorante.",
          subheadings: [
            {
              code: "2009.11",
              title: "Congelado.",
              classifications: [
                {
                  code: "2009.11.01",
                  title: "Congelado.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Congelado." }],
                },
              ],
            },
            {
              code: "2009.12",
              title: "Sin congelar, de valor Brix inferior o igual a 20.",
              classifications: [
                {
                  code: "2009.12.02",
                  title: "Sin congelar, de valor Brix inferior o igual a 20.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Sin congelar, de valor Brix inferior o igual a 20.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2009.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "2009.19.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2009.21",
              title: "De valor Brix inferior o igual a 20.",
              classifications: [
                {
                  code: "2009.21.01",
                  title: "De valor Brix inferior o igual a 20.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "De valor Brix inferior o igual a 20.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2009.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "2009.29.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2009.31",
              title: "De valor Brix inferior o igual a 20.",
              classifications: [
                {
                  code: "2009.31.02",
                  title: "De valor Brix inferior o igual a 20.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "De valor Brix inferior o igual a 20.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2009.39",
              title: "Los demás.",
              classifications: [
                {
                  code: "2009.39.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2009.41",
              title: "De valor Brix inferior o igual a 20.",
              classifications: [
                {
                  code: "2009.41.02",
                  title: "De valor Brix inferior o igual a 20.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "De valor Brix inferior o igual a 20.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2009.49",
              title: "Los demás.",
              classifications: [
                {
                  code: "2009.49.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2009.50",
              title: "Jugo de tomate.",
              classifications: [
                {
                  code: "2009.50.01",
                  title: "Jugo de tomate.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Jugo de tomate." }],
                },
              ],
            },
            {
              code: "2009.61",
              title: "De valor Brix inferior o igual a 30.",
              classifications: [
                {
                  code: "2009.61.01",
                  title: "De valor Brix inferior o igual a 30.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "De valor Brix inferior o igual a 30.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2009.69",
              title: "Los demás.",
              classifications: [
                {
                  code: "2009.69.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2009.71",
              title: "De valor Brix inferior o igual a 20.",
              classifications: [
                {
                  code: "2009.71.01",
                  title: "De valor Brix inferior o igual a 20.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "De valor Brix inferior o igual a 20.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2009.79",
              title: "Los demás.",
              classifications: [
                {
                  code: "2009.79.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2009.81",
              title:
                "Jugo de arándanos agrios, trepadores o palustres (Vaccinium macrocarpon, Vaccinium oxycoccos); jugo de arándanos rojos o encarnados (Vaccinium vitis-idaea).",
              classifications: [
                {
                  code: "2009.81.01",
                  title:
                    "Jugo de arándanos agrios, trepadores o palustres (Vaccinium macrocarpon, Vaccinium oxycoccos); jugo de arándanos rojos o encarnados (Vaccinium vitis-idaea).",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["CHT", "NOM"],
                  nicos: [{ code: "00", title: "Jugo de arándanos." }],
                },
              ],
            },
            {
              code: "2009.89",
              title: "Los demás.",
              classifications: [
                {
                  code: "2009.89.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["CHT", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2009.90",
              title: "Mezclas de jugos.",
              classifications: [
                {
                  code: "2009.90.02",
                  title: "Mezclas de jugos.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Mezclas de jugos." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "21",
      title: "Preparaciones alimenticias diversas",
      notes: {
        legales: [
          {
            id: "NL-CAP21-1",
            text: "Este Capítulo no comprende: las mezclas de hortalizas de la partida 07.12; los sucedáneos del café tostados que contengan café en cualquier proporción (partida 09.01); el té aromatizado (partida 09.02); las especias y demás productos de las partidas 09.04 a 09.10; las preparaciones alimenticias que contengan una proporción superior al 20% en peso de embutidos, carne, despojos, sangre, insectos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, o de una combinación de estos productos (Capítulo 16), excepto los productos descritos en las partidas 21.03 o 21.04.",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP21-1",
            text: "Para los efectos de este Capítulo, los términos, con aromatizante(s), aromatizado(s) y aromatizada(s) significan: con adición de sabor.",
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "21.01",
          title:
            "Extractos, esencias y concentrados de café, té o yerba mate y preparaciones a base de estos productos o a base de café, té o yerba mate; achicoria tostada y demás sucedáneos del café tostados y sus extractos, esencias y concentrados.",
          subheadings: [
            {
              code: "2101.11",
              title: "Extractos, esencias y concentrados.",
              classifications: [
                {
                  code: "2101.11.01",
                  title: "Extractos, esencias y concentrados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Extractos, esencias y concentrados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2101.12",
              title:
                "Preparaciones a base de extractos, esencias o concentrados o a base de café.",
              classifications: [
                {
                  code: "2101.12.01",
                  title:
                    "Preparaciones a base de extractos, esencias o concentrados o a base de café.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Preparaciones a base de extractos, esencias o concentrados o a base de café.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2101.20",
              title:
                "Extractos, esencias y concentrados de té o de yerba mate y preparaciones a base de estos extractos, esencias o concentrados o a base de té o de yerba mate.",
              classifications: [
                {
                  code: "2101.20.01",
                  title:
                    "Extractos, esencias y concentrados de té o de yerba mate y preparaciones a base de estos extractos, esencias o concentrados o a base de té o de yerba mate.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Extractos, esencias y concentrados de té o de yerba mate y preparaciones a base de estos extractos, esencias o concentrados o a base de té o de yerba mate.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2101.30",
              title:
                "Achicoria tostada y demás sucedáneos del café tostados y sus extractos, esencias y concentrados.",
              classifications: [
                {
                  code: "2101.30.01",
                  title:
                    "Achicoria tostada y demás sucedáneos del café tostados y sus extractos, esencias y concentrados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Achicoria tostada y demás sucedáneos del café tostados y sus extractos, esencias y concentrados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "21.02",
          title:
            "Levaduras (vivas o muertas); los demás microorganismos monocelulares muertos (excepto las vacunas de la partida 30.02); polvos preparados para esponjar masas.",
          subheadings: [
            {
              code: "2102.10",
              title: "Levaduras vivas.",
              classifications: [
                {
                  code: "2102.10.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "2102.20",
              title:
                "Levaduras muertas; los demás microorganismos monocelulares muertos.",
              classifications: [
                {
                  code: "2102.20.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2102.30",
              title: "Polvos preparados para esponjar masas.",
              classifications: [
                {
                  code: "2102.30.01",
                  title: "Polvos preparados para esponjar masas.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Polvos preparados para esponjar masas.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "21.03",
          title:
            "Preparaciones para salsas y salsas preparadas; condimentos y sazonadores, compuestos; harina de mostaza y mostaza preparada.",
          subheadings: [
            {
              code: "2103.10",
              title: "Salsa de soja (soya).",
              classifications: [
                {
                  code: "2103.10.01",
                  title: "Salsa de soja (soya).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Salsa de soja (soya)." }],
                },
              ],
            },
            {
              code: "2103.20",
              title: "Kétchup y demás salsas de tomate.",
              classifications: [
                {
                  code: "2103.20.02",
                  title: "Kétchup y demás salsas de tomate.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    { code: "01", title: "Kétchup." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "2103.30",
              title: "Harina de mostaza y mostaza preparada.",
              classifications: [
                {
                  code: "2103.30.02",
                  title: "Harina de mostaza y mostaza preparada.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT"],
                  nicos: [
                    { code: "01", title: "Harina de mostaza." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "2103.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2103.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "21.04",
          title:
            "Preparaciones para sopas, potajes o caldos; sopas, potajes o caldos, preparados; preparaciones alimenticias compuestas homogeneizadas.",
          subheadings: [
            {
              code: "2104.10",
              title:
                "Preparaciones para sopas, potajes o caldos; sopas, potajes o caldos, preparados.",
              classifications: [
                {
                  code: "2104.10.01",
                  title:
                    "Preparaciones para sopas, potajes o caldos; sopas, potajes o caldos, preparados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAL", "PACIC"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Preparaciones para sopas, potajes o caldos; sopas, potajes o caldos, preparados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2104.20",
              title: "Preparaciones alimenticias compuestas homogeneizadas.",
              classifications: [
                {
                  code: "2104.20.01",
                  title:
                    "Preparaciones alimenticias compuestas homogeneizadas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Preparaciones alimenticias compuestas homogeneizadas.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "21.05",
          title: "Helados, incluso con cacao.",
          subheadings: [
            {
              code: "2105.00",
              title: "Helados, incluso con cacao.",
              classifications: [
                {
                  code: "2105.00.01",
                  title: "Helados, incluso con cacao.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Helados, incluso con cacao." }],
                },
              ],
            },
          ],
        },
        {
          code: "21.06",
          title:
            "Preparaciones alimenticias no expresadas ni comprendidas en otra parte.",
          subheadings: [
            {
              code: "2106.10",
              title:
                "Concentrados de proteínas y sustancias proteicas texturadas.",
              classifications: [
                {
                  code: "2106.10.01",
                  title:
                    "Concentrados de proteínas y sustancias proteicas texturadas.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Concentrados de proteínas y sustancias proteicas texturadas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2106.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "2106.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "22",
      title: "Bebidas, líquidos alcohólicos y vinagre",
      notes: {
        legales: [
          {
            id: "NL-CAP22-1",
            text: "Este Capítulo no comprende: a) los productos de este Capítulo (excepto los de la partida 22.09) preparados para uso culinario de tal forma que resulten impropios para el consumo como bebidas (generalmente partida 21.03); b) el agua de mar (partida 25.01); c) el agua destilada, de conductibilidad o del mismo grado de pureza (partida 28.53); d) las disoluciones acuosas con un contenido de ácido acético superior al 10% en peso (partida 29.15); e) los medicamentos de las partidas 30.03 o 30.04; f) los productos de perfumería o de tocador (Capítulo 33).",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "22.01",
          title:
            "Agua, incluidas el agua mineral natural o artificial y la gaseada, sin adición de azúcar u otro edulcorante ni aromatizada; hielo y nieve.",
          subheadings: [
            {
              code: "2201.10",
              title: "Agua mineral y agua gaseada.",
              classifications: [
                {
                  code: "2201.10.01",
                  title: "Agua mineral y agua gaseada.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    { code: "00", title: "Agua mineral y agua gaseada." },
                  ],
                },
              ],
            },
            {
              code: "2201.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2201.90.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "22.02",
          title:
            "Agua, incluidas el agua mineral y la gaseada, con adición de azúcar u otro edulcorante o aromatizada, y demás bebidas no alcohólicas, excepto los jugos de frutas u otros frutos o de hortalizas de la partida 20.09.",
          subheadings: [
            {
              code: "2202.10",
              title:
                "Agua, incluidas el agua mineral y la gaseada, con adición de azúcar u otro edulcorante o aromatizada.",
              classifications: [
                {
                  code: "2202.10.01",
                  title:
                    "Agua, incluidas el agua mineral y la gaseada, con adición de azúcar u otro edulcorante o aromatizada.",
                  umt: "L",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Agua, incluidas el agua mineral y la gaseada, con adición de azúcar u otro edulcorante o aromatizada.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2202.91",
              title: "Cerveza sin alcohol.",
              classifications: [
                {
                  code: "2202.91.01",
                  title: "Cerveza sin alcohol.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [{ code: "00", title: "Cerveza sin alcohol." }],
                },
              ],
            },
            {
              code: "2202.99",
              title: "Las demás.",
              classifications: [
                {
                  code: "2202.99.99",
                  title: "Las demás.",
                  umt: "L",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "22.03",
          title: "Cerveza de malta.",
          subheadings: [
            {
              code: "2203.00",
              title: "Cerveza de malta.",
              classifications: [
                {
                  code: "2203.00.01",
                  title: "Cerveza de malta.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [{ code: "00", title: "Cerveza de malta." }],
                },
              ],
            },
          ],
        },
        {
          code: "22.04",
          title:
            "Vino de uvas frescas, incluso encabezado; mosto de uva, excepto el de la partida 20.09.",
          subheadings: [
            {
              code: "2204.10",
              title: "Vino espumoso.",
              classifications: [
                {
                  code: "2204.10.02",
                  title: "Vino espumoso.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [{ code: "00", title: "Vino espumoso." }],
                },
              ],
            },
            {
              code: "2204.21",
              title: "En recipientes con capacidad inferior o igual a 2 l.",
              classifications: [
                {
                  code: "2204.21.04",
                  title: "En recipientes con capacidad inferior o igual a 2 l.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Vinos, cuya graduación alcohólica sea mayor de 14 grados centesimales Gay-Lussac pero menor o igual a 20 grados centesimales Gay-Lussac, a la temperatura de 15°C.",
                    },
                    {
                      code: "02",
                      title:
                        "Vinos tinto, rosado, clarete o blanco, cuya graduación alcohólica sea hasta 14 grados centesimales Gay-Lussac, a la temperatura de 15°C.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2204.22",
              title:
                "En recipientes con capacidad superior a 2 l pero inferior o igual a 10 l.",
              classifications: [
                {
                  code: "2204.22.01",
                  title:
                    "En recipientes con capacidad superior a 2 l pero inferior o igual a 10 l.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "En recipientes con capacidad superior a 2 l pero inferior o igual a 10 l.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2204.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "2204.29.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2204.30",
              title: "Los demás mostos de uva.",
              classifications: [
                {
                  code: "2204.30.91",
                  title: "Los demás mostos de uva.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Los demás mostos de uva." }],
                },
              ],
            },
          ],
        },
        {
          code: "22.05",
          title:
            "Vermut y demás vinos de uvas frescas preparados con plantas o sustancias aromáticas.",
          subheadings: [
            {
              code: "2205.10",
              title: "En recipientes con capacidad inferior o igual a 2 l.",
              classifications: [
                {
                  code: "2205.10.02",
                  title: "En recipientes con capacidad inferior o igual a 2 l.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "En recipientes con capacidad inferior o igual a 2 l.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2205.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2205.90.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "22.06",
          title:
            "Las demás bebidas fermentadas (por ejemplo: sidra, perada, aguamiel, sake); mezclas de bebidas fermentadas y mezclas de bebidas fermentadas y bebidas no alcohólicas, no expresadas ni comprendidas en otra parte.",
          subheadings: [
            {
              code: "2206.00",
              title: "Las demás bebidas fermentadas.",
              classifications: [
                {
                  code: "2206.00.99",
                  title: "Las demás bebidas fermentadas.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [
                    { code: "00", title: "Las demás bebidas fermentadas." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "22.07",
          title:
            "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico superior o igual al 80% vol; alcohol etílico y aguardiente desnaturalizados, de cualquier graduación.",
          subheadings: [
            {
              code: "2207.10",
              title:
                "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico superior o igual al 80% vol.",
              classifications: [
                {
                  code: "2207.10.01",
                  title:
                    "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico superior o igual al 80% vol.",
                  umt: "L",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "IM_PR"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico superior o igual al 80% vol.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2207.20",
              title:
                "Alcohol etílico y aguardiente desnaturalizados, de cualquier graduación.",
              classifications: [
                {
                  code: "2207.20.01",
                  title:
                    "Alcohol etílico y aguardiente desnaturalizados, de cualquier graduación.",
                  umt: "L",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Alcohol etílico y aguardiente desnaturalizados, de cualquier graduación.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "22.08",
          title:
            "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico inferior al 80% vol; aguardientes, licores y demás bebidas espirituosas.",
          subheadings: [
            {
              code: "2208.20",
              title: "Aguardiente de vino o de orujo de uvas.",
              classifications: [
                {
                  code: "2208.20.03",
                  title:
                    "Destilados puros de uva, cuya graduación alcohólica sea superior o igual a 80 grados centesimales Gay-Lussac, a la temperatura de 15°C, a granel.",
                  umt: "L",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Destilados puros de uva, cuya graduación alcohólica sea superior o igual a 80 grados centesimales Gay-Lussac, a la temperatura de 15°C, a granel.",
                    },
                  ],
                },
                {
                  code: "2208.20.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2208.30",
              title: "Whisky.",
              classifications: [
                {
                  code: "2208.30.05",
                  title: "Whisky.",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title: "Whisky canadiense (Canadian whiskey).",
                    },
                    {
                      code: "02",
                      title:
                        "Whisky cuya graduación alcohólica sea mayor de 53 grados centesimales Gay-Lussac a la temperatura de 15°C, a granel.",
                    },
                    {
                      code: "03",
                      title:
                        "Whisky o Whiskey cuya graduación alcohólica sea igual o superior a 40 grados centesimales Gay-Lussac, destilado a menos de 94.8% vol.",
                    },
                    { code: "04", title: "Whisky Tennessee o whisky Bourbon." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2208.40",
              title:
                "Ron y demás aguardientes procedentes de la destilación, previa fermentación, de productos de la caña de azúcar.",
              classifications: [
                {
                  code: "2208.40.02",
                  title:
                    "Ron y demás aguardientes procedentes de la destilación, previa fermentación, de productos de la caña de azúcar.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [
                    { code: "01", title: "Ron." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2208.50",
              title: "Gin y ginebra.",
              classifications: [
                {
                  code: "2208.50.01",
                  title: "Gin y ginebra.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [{ code: "00", title: "Gin y ginebra." }],
                },
              ],
            },
            {
              code: "2208.60",
              title: "Vodka.",
              classifications: [
                {
                  code: "2208.60.01",
                  title: "Vodka.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [{ code: "00", title: "Vodka." }],
                },
              ],
            },
            {
              code: "2208.70",
              title: "Licores.",
              classifications: [
                {
                  code: "2208.70.03",
                  title: "Licores.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "De más de 14 grados sin exceder de 23 grados centesimales Gay-Lussac a la temperatura de 15°C, en vasijería de barro, loza o vidrio.",
                    },
                    {
                      code: "02",
                      title:
                        "Licores que contengan aguardiente, o destilados, de agave.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2208.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2208.90.01",
                  title: "Alcohol etílico.",
                  umt: "L",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "IM_PR"],
                  nicos: [{ code: "00", title: "Alcohol etílico." }],
                },
                {
                  code: "2208.90.02",
                  title: "Bacanora.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Bacanora." }],
                },
                {
                  code: "2208.90.03",
                  title: "Tequila.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Tequila contenido en envases con capacidad inferior o igual a 5 litros.",
                    },
                    { code: "91", title: "Los demás tequilas." },
                  ],
                },
                {
                  code: "2208.90.04",
                  title: "Sotol.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Sotol." }],
                },
                {
                  code: "2208.90.05",
                  title: "Mezcal.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB"],
                  nicos: [{ code: "00", title: "Mezcal." }],
                },
                {
                  code: "2208.90.06",
                  title: "Charanda.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Charanda." }],
                },
                {
                  code: "2208.90.07",
                  title: "Raicilla.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Raicilla." }],
                },
                {
                  code: "2208.90.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["IM_PR", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "91",
                      title:
                        "Las demás bebidas alcohólicas que contengan aguardiente, o destilados, de agave.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "22.09",
          title:
            "Vinagre y sucedáneos del vinagre obtenidos a partir del ácido acético.",
          subheadings: [
            {
              code: "2209.00",
              title:
                "Vinagre y sucedáneos del vinagre obtenidos a partir del ácido acético.",
              classifications: [
                {
                  code: "2209.00.01",
                  title:
                    "Vinagre y sucedáneos del vinagre obtenidos a partir del ácido acético.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Vinagre y sucedáneos del vinagre obtenidos a partir del ácido acético.",
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
      code: "23",
      title:
        "Residuos y desperdicios de las industrias alimentarias; alimentos preparados para animales",
      notes: {
        legales: [
          {
            id: "NL-CAP23-1",
            text: "Se incluyen en la partida 23.09 los productos de los tipos utilizados para la alimentación de los animales, no expresados ni comprendidos en otra parte, obtenidos por tratamiento de materias vegetales o animales y que, por este hecho, hayan perdido las características esenciales de la materia originaria, excepto los desperdicios vegetales, residuos y subproductos vegetales procedentes de estos tratamientos.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "23.01",
          title:
            "Harina, polvo y pellets, de carne, despojos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, impropios para la alimentación humana; chicharrones.",
          subheadings: [
            {
              code: "2301.10",
              title:
                "Harina, polvo y pellets, de carne o despojos; chicharrones.",
              classifications: [
                {
                  code: "2301.10.02",
                  title:
                    "Harina, polvo y pellets, de carne o despojos; chicharrones.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC"],
                  nicos: [
                    { code: "01", title: "Harina." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2301.20",
              title:
                "Harina, polvo y pellets, de pescado o de crustáceos, moluscos o demás invertebrados acuáticos.",
              classifications: [
                {
                  code: "2301.20.01",
                  title:
                    "Harina, polvo y pellets, de pescado o de crustáceos, moluscos o demás invertebrados acuáticos.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Harina, polvo y pellets, de pescado o de crustáceos, moluscos o demás invertebrados acuáticos.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "23.02",
          title:
            "Salvados, moyuelos y demás residuos del cernido, de la molienda o de otros tratamientos de los cereales o de las leguminosas, incluso en pellets.",
          subheadings: [
            {
              code: "2302.10",
              title: "De maíz.",
              classifications: [
                {
                  code: "2302.10.01",
                  title: "De maíz.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "CUP"],
                  nicos: [{ code: "00", title: "De maíz." }],
                },
              ],
            },
            {
              code: "2302.30",
              title: "De trigo.",
              classifications: [
                {
                  code: "2302.30.01",
                  title: "De trigo.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "De trigo." }],
                },
              ],
            },
            {
              code: "2302.40",
              title: "De los demás cereales.",
              classifications: [
                {
                  code: "2302.40.91",
                  title: "De los demás cereales.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC"],
                  nicos: [
                    { code: "01", title: "De arroz." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2302.50",
              title: "De leguminosas.",
              classifications: [
                {
                  code: "2302.50.01",
                  title: "De leguminosas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "De leguminosas." }],
                },
              ],
            },
          ],
        },
        {
          code: "23.03",
          title:
            "Residuos de la industria del almidón y residuos similares, pulpa de remolacha, bagazo de caña de azúcar y demás desperdicios de la industria azucarera, heces y desperdicios de cervecería o de destilería, incluso en pellets.",
          subheadings: [
            {
              code: "2303.10",
              title:
                "Residuos de la industria del almidón y residuos similares.",
              classifications: [
                {
                  code: "2303.10.01",
                  title:
                    "Residuos de la industria del almidón y residuos similares.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PACIC"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Residuos de la industria del almidón y residuos similares.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2303.20",
              title:
                "Pulpa de remolacha, bagazo de caña de azúcar y demás desperdicios de la industria azucarera.",
              classifications: [
                {
                  code: "2303.20.01",
                  title:
                    "Pulpa de remolacha, bagazo de caña de azúcar y demás desperdicios de la industria azucarera.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Pulpa de remolacha, bagazo de caña de azúcar y demás desperdicios de la industria azucarera.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2303.30",
              title: "Heces y desperdicios de cervecería o de destilería.",
              classifications: [
                {
                  code: "2303.30.01",
                  title: "Heces y desperdicios de cervecería o de destilería.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Heces y desperdicios de cervecería o de destilería.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "23.04",
          title:
            "Tortas y demás residuos sólidos de la extracción del aceite de soja (soya), incluso molidos o en pellets.",
          subheadings: [
            {
              code: "2304.00",
              title:
                "Tortas y demás residuos sólidos de la extracción del aceite de soja (soya), incluso molidos o en pellets.",
              classifications: [
                {
                  code: "2304.00.01",
                  title:
                    "Tortas y demás residuos sólidos de la extracción del aceite de soja (soya), incluso molidos o en pellets.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Tortas y demás residuos sólidos de la extracción del aceite de soja (soya), incluso molidos o en pellets.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "23.05",
          title:
            "Tortas y demás residuos sólidos de la extracción del aceite de cacahuate (cacahuete, maní), incluso molidos o en pellets.",
          subheadings: [
            {
              code: "2305.00",
              title:
                "Tortas y demás residuos sólidos de la extracción del aceite de cacahuate (cacahuete, maní), incluso molidos o en pellets.",
              classifications: [
                {
                  code: "2305.00.01",
                  title:
                    "Tortas y demás residuos sólidos de la extracción del aceite de cacahuate (cacahuete, maní), incluso molidos o en pellets.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Tortas y demás residuos sólidos de la extracción del aceite de cacahuate (cacahuete, maní), incluso molidos o en pellets.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "23.06",
          title:
            "Tortas y demás residuos sólidos de la extracción de grasas o aceites vegetales o de origen microbiano, incluso molidos o en pellets, excepto los de las partidas 23.04 o 23.05.",
          subheadings: [
            {
              code: "2306.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2306.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "23.07",
          title: "Lías o heces de vino; tártaro bruto.",
          subheadings: [
            {
              code: "2307.00",
              title: "Lías o heces de vino; tártaro bruto.",
              classifications: [
                {
                  code: "2307.00.01",
                  title: "Lías o heces de vino; tártaro bruto.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Lías o heces de vino; tártaro bruto.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "23.08",
          title:
            "Materias vegetales y desperdicios vegetales, residuos y subproductos vegetales, incluso en pellets, de los tipos utilizados para la alimentación de los animales, no expresados ni comprendidos en otra parte.",
          subheadings: [
            {
              code: "2308.00",
              title:
                "Materias vegetales y desperdicios vegetales, residuos y subproductos vegetales, incluso en pellets, de los tipos utilizados para la alimentación de los animales, no expresados ni comprendidos en otra parte.",
              classifications: [
                {
                  code: "2308.00.02",
                  title:
                    "Materias vegetales y desperdicios vegetales, residuos y subproductos vegetales, incluso en pellets, de los tipos utilizados para la alimentación de los animales, no expresados ni comprendidos en otra parte.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    { code: "01", title: "Hojas de maíz." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "23.09",
          title:
            "Preparaciones de los tipos utilizados para la alimentación de los animales.",
          subheadings: [
            {
              code: "2309.10",
              title:
                "Alimentos para perros o gatos, acondicionados para la venta al por menor.",
              classifications: [
                {
                  code: "2309.10.01",
                  title:
                    "Alimentos para perros o gatos, acondicionados para la venta al por menor.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "PACIC"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Alimentos para perros o gatos, acondicionados para la venta al por menor.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2309.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "2309.90.04",
                  title:
                    "Mezclas, preparaciones o productos de origen orgánico para la alimentación de peces de ornato.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Mezclas, preparaciones o productos de origen orgánico para la alimentación de peces de ornato.",
                    },
                  ],
                },
                {
                  code: "2309.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Con un contenido de sólidos lácteos superior al 10%, pero inferior o igual al 50%, en peso.",
                    },
                    {
                      code: "02",
                      title:
                        "Alimentos preparados con un contenido de sólidos lácteos superior al 50%, en peso.",
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "24",
      title:
        "Tabaco y sucedáneos del tabaco elaborados; productos, incluso con nicotina, destinados para la inhalación sin combustión; otros productos que contengan nicotina destinados para la absorción de nicotina en el cuerpo humano",
      notes: {
        legales: [
          {
            id: "NL-CAP24-1",
            text: "Este Capítulo no comprende los cigarrillos medicinales (Capítulo 30).",
          },
          {
            id: "NL-CAP24-2",
            text: "Cualquier producto susceptible de clasificarse en la partida 24.04 y en otra partida de este Capítulo, se clasifica en la partida 24.04.",
          },
          {
            id: "NL-CAP24-3",
            text: "En la partida 24.04, se entiende por inhalación sin combustión, la inhalación a través de calentamiento u otros medios, sin combustión.",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP24-1",
            text: "En la partida 24.04 se clasifican los productos que contengan tabaco, tabaco reconstituido, nicotina o sucedáneos del tabaco o de nicotina, destinados para la inhalación sin combustión; otros productos que contengan nicotina destinados para la absorción de nicotina en el cuerpo humano.",
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "24.01",
          title: "Tabaco en rama o sin elaborar; desperdicios de tabaco.",
          subheadings: [
            {
              code: "2401.10",
              title: "Tabaco sin desvenar o desnervar.",
              classifications: [
                {
                  code: "2401.10.02",
                  title: "Tabaco sin desvenar o desnervar.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["IM_SEN", "PERM"],
                  nicos: [
                    { code: "01", title: "Tabaco para envoltura." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2401.20",
              title: "Tabaco total o parcialmente desvenado o desnervado.",
              classifications: [
                {
                  code: "2401.20.03",
                  title: "Tabaco total o parcialmente desvenado o desnervado.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["IM_SEN"],
                  nicos: [
                    { code: "01", title: "Tabaco rubio, Burley o Virginia." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2401.30",
              title: "Desperdicios de tabaco.",
              classifications: [
                {
                  code: "2401.30.01",
                  title: "Desperdicios de tabaco.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["IM_SEN"],
                  nicos: [{ code: "00", title: "Desperdicios de tabaco." }],
                },
              ],
            },
          ],
        },
        {
          code: "24.02",
          title:
            "Cigarros (puros) (incluso despuntados), cigarritos (puritos) y cigarrillos, de tabaco o de sucedáneos del tabaco.",
          subheadings: [
            {
              code: "2402.10",
              title:
                "Cigarros (puros) (incluso despuntados) y cigarritos (puritos), que contengan tabaco.",
              classifications: [
                {
                  code: "2402.10.01",
                  title:
                    "Cigarros (puros) (incluso despuntados) y cigarritos (puritos), que contengan tabaco.",
                  umt: "Pza",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["PERM", "NOM", "EMB", "SAL", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cigarros (puros) (incluso despuntados) y cigarritos (puritos), que contengan tabaco.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2402.20",
              title: "Cigarrillos que contengan tabaco.",
              classifications: [
                {
                  code: "2402.20.01",
                  title: "Cigarrillos que contengan tabaco.",
                  umt: "Kg",
                  importDuty: 67,
                  exportDuty: 0,
                  regimenes: ["PS4", "PERM", "NOM", "EMB", "SAL"],
                  nicos: [
                    { code: "00", title: "Cigarrillos que contengan tabaco." },
                  ],
                },
              ],
            },
            {
              code: "2402.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2402.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 67,
                  exportDuty: 0,
                  regimenes: ["IM_SEN", "PERM", "NOM", "EMB", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "24.03",
          title:
            "Los demás tabacos y sucedáneos del tabaco, elaborados; tabaco homogeneizado o reconstituido; extractos y jugos de tabaco.",
          subheadings: [
            {
              code: "2403.11",
              title:
                "Tabaco para pipa de agua mencionado en la Nota 1 de subpartida de este Capítulo.",
              classifications: [
                {
                  code: "2403.11.01",
                  title:
                    "Tabaco para pipa de agua mencionado en la Nota 1 de subpartida de este Capítulo.",
                  umt: "Kg",
                  importDuty: 67,
                  exportDuty: 0,
                  regimenes: ["PS4", "IM_SEN", "PERM", "NOM", "EMB", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Tabaco para pipa de agua mencionado en la Nota 1 de subpartida de este Capítulo.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2403.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "2403.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 67,
                  exportDuty: 0,
                  regimenes: ["PS4", "IM_SEN", "PERM", "NOM", "EMB", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2403.91",
              title: "Tabaco homogeneizado o reconstituido.",
              classifications: [
                {
                  code: "2403.91.02",
                  title: "Tabaco homogeneizado o reconstituido.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["IM_SEN", "PERM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Tabaco del tipo utilizado para envoltura de tabaco.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2403.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "2403.99.01",
                  title: "Rapé húmedo oral.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["IM_SEN", "NOM", "EMB", "SAL"],
                  nicos: [{ code: "00", title: "Rapé húmedo oral." }],
                },
                {
                  code: "2403.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["PERM", "NOM", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "24.04",
          title:
            "Productos que contengan tabaco, tabaco reconstituido, nicotina o sucedáneos del tabaco o de nicotina, destinados para la inhalación sin combustión; otros productos que contengan nicotina destinados para la absorción de nicotina en el cuerpo humano.",
          subheadings: [
            {
              code: "2404.11",
              title: "Que contengan tabaco o tabaco reconstituido.",
              classifications: [
                {
                  code: "2404.11.01",
                  title: "Que contengan tabaco o tabaco reconstituido.",
                  umt: "Kg",
                  importDuty: "Prohibida",
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Que contengan tabaco o tabaco reconstituido.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2404.12",
              title: "Los demás, que contengan nicotina.",
              classifications: [
                {
                  code: "2404.12.01",
                  title: "Los demás, que contengan nicotina.",
                  umt: "Kg",
                  importDuty: "Prohibida",
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Los demás, que contengan nicotina." },
                  ],
                },
              ],
            },
            {
              code: "2404.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "2404.19.01",
                  title:
                    "De los diseñados para lo comprendido en la fracción arancelaria 8543.40.01.",
                  umt: "Kg",
                  importDuty: "Prohibida",
                  exportDuty: 0,
                  regimenes: ["IM_SEN"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De los diseñados para lo comprendido en la fracción arancelaria 8543.40.01.",
                    },
                  ],
                },
                {
                  code: "2404.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["PERM", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2404.91",
              title: "Para administrarse por vía oral.",
              classifications: [
                {
                  code: "2404.91.01",
                  title: "Para administrarse por vía oral.",
                  umt: "Kg",
                  importDuty: "AMX",
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Para administrarse por vía oral." },
                  ],
                },
              ],
            },
            {
              code: "2404.92",
              title: "Para administrarse por vía transdérmica.",
              classifications: [
                {
                  code: "2404.92.01",
                  title: "Para administrarse por vía transdérmica.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Para administrarse por vía transdérmica.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2404.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "2404.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
