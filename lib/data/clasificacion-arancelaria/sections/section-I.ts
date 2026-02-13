import type { Section } from "@/types/clasificacion-arancelaria";

export const sectionI: Section = {
  code: "I",
  title: "Animales vivos y productos del reino animal",
  notes: {
    legales: [
      {
        id: "NL-SEC01-1",
        text: "En esta Sección, cualquier referencia a un género o a una especie determinada de un animal se aplica también, salvo disposición en contrario, a los animales jóvenes de ese género o de esa especie.",
      },
      {
        id: "NL-SEC01-2",
        text: "Salvo disposición en contrario, cualquier referencia en la Nomenclatura a productos secos o desecados alcanza también a los productos deshidratados, evaporados o liofilizados.",
      },
    ],
    nacionales: [
      {
        id: "NN-SEC01-1",
        text: 'Salvo disposición en contrario, cualquier referencia en la Nomenclatura al término "comestible" o "alimento apto para el consumo humano" se refiere a aquel que sea seguro al ser consumido, esto es, que no se encuentre contaminado, putrefacto, deteriorado o descompuesto y tal consumo, no resulte nocivo para la salud.',
      },
    ],
    explicativas: [],
  },
  chapters: [
    {
      code: "01",
      title: "Animales vivos",
      notes: {
        legales: [
          {
            id: "NL-CAP01-1",
            text: "Este Capítulo comprende todos los animales vivos, excepto: a) los peces, los crustáceos, moluscos y demás invertebrados acuáticos, de las partidas 03.01, 03.06, 03.07 o 03.08; b) los cultivos de microorganismos y demás productos de la partida 30.02; c) los animales de la partida 95.08.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "01.01",
          title: "Caballos, asnos, mulos y burdéganos, vivos.",
          subheadings: [
            {
              code: "0101.21",
              title: "Reproductores de raza pura.",
              classifications: [
                {
                  code: "0101.21.01",
                  title: "Reproductores de raza pura.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["FR_I", "FR_II", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Reproductores de raza pura." }],
                },
              ],
            },
            {
              code: "0101.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "0101.29.02",
                  title: "Sin pedigree, para reproducción.",
                  umt: "Pza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    { code: "00", title: "Sin pedigree, para reproducción." },
                  ],
                },
                {
                  code: "0101.29.03",
                  title:
                    "Para abasto, cuando la importación la realicen empacadoras Tipo Inspección Federal.",
                  umt: "Pza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Para abasto, cuando la importación la realicen empacadoras Tipo Inspección Federal.",
                    },
                  ],
                },
                {
                  code: "0101.29.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    { code: "01", title: "Para saltos o carreras." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0101.30",
              title: "Asnos.",
              classifications: [
                {
                  code: "0101.30.01",
                  title: "Asnos.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Asnos." }],
                },
              ],
            },
            {
              code: "0101.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0101.90.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "01.02",
          title: "Animales vivos de la especie bovina.",
          subheadings: [
            {
              code: "0102.21",
              title: "Reproductores de raza pura.",
              classifications: [
                {
                  code: "0102.21.01",
                  title: "Reproductores de raza pura.",
                  umt: "Cbza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Reproductores de raza pura." }],
                },
              ],
            },
            {
              code: "0102.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "0102.29.01",
                  title: "Vacas lecheras.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Vacas lecheras." }],
                },
                {
                  code: "0102.29.02",
                  title:
                    "Con pedigree o certificado de alto registro, excepto lo comprendido en la fracción arancelaria 0102.29.01.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Con pedigree o certificado de alto registro, excepto lo comprendido en la fracción arancelaria 0102.29.01.",
                    },
                  ],
                },
                {
                  code: "0102.29.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SEM", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0102.31",
              title: "Reproductores de raza pura.",
              classifications: [
                {
                  code: "0102.31.01",
                  title: "Reproductores de raza pura.",
                  umt: "Cbza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Reproductores de raza pura." }],
                },
              ],
            },
            {
              code: "0102.39",
              title: "Los demás.",
              classifications: [
                {
                  code: "0102.39.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0102.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0102.90.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "01.03",
          title: "Animales vivos de la especie porcina.",
          subheadings: [
            {
              code: "0103.10",
              title: "Reproductores de raza pura.",
              classifications: [
                {
                  code: "0103.10.01",
                  title: "Reproductores de raza pura.",
                  umt: "Cbza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [{ code: "00", title: "Reproductores de raza pura." }],
                },
              ],
            },
            {
              code: "0103.91",
              title: "De peso inferior a 50 kg.",
              classifications: [
                {
                  code: "0103.91.01",
                  title: "Con pedigree o certificado de alto registro.",
                  umt: "Cbza",
                  importDuty: 9,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Con pedigree o certificado de alto registro.",
                    },
                  ],
                },
                {
                  code: "0103.91.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0103.92",
              title: "De peso superior o igual a 50 kg.",
              classifications: [
                {
                  code: "0103.92.01",
                  title: "Con pedigree o certificado de alto registro.",
                  umt: "Cbza",
                  importDuty: 9,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Con pedigree o certificado de alto registro.",
                    },
                  ],
                },
                {
                  code: "0103.92.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "01.04",
          title: "Animales vivos de las especies ovina o caprina.",
          subheadings: [
            {
              code: "0104.10",
              title: "De la especie ovina.",
              classifications: [
                {
                  code: "0104.10.01",
                  title: "Con pedigree o certificado de alto registro.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Con pedigree o certificado de alto registro.",
                    },
                  ],
                },
                {
                  code: "0104.10.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    { code: "01", title: "Para abasto." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0104.20",
              title: "De la especie caprina.",
              classifications: [
                {
                  code: "0104.20.01",
                  title: "Con pedigree o certificado de alto registro.",
                  umt: "Cbza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Con pedigree o certificado de alto registro.",
                    },
                  ],
                },
                {
                  code: "0104.20.02",
                  title: "Borrego cimarrón.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Borrego cimarrón." }],
                },
                {
                  code: "0104.20.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "01.05",
          title:
            "Gallos, gallinas, patos, gansos, pavos (gallipavos) y pintadas, de las especies domésticas, vivos.",
          subheadings: [
            {
              code: "0105.11",
              title: "Aves de la especie Gallus domesticus.",
              classifications: [
                {
                  code: "0105.11.03",
                  title: "Recién nacidos, de tres días o menos.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "01",
                      title: "Aves reproductoras de la línea de postura.",
                    },
                    {
                      code: "02",
                      title: "Aves reproductoras de la línea de engorda.",
                    },
                    {
                      code: "03",
                      title: "Aves progenitoras de la línea de engorda.",
                    },
                    { code: "91", title: "Las demás de postura." },
                    { code: "92", title: "Las demás de engorda." },
                  ],
                },
                {
                  code: "0105.11.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0105.12",
              title: "Pavos (gallipavos).",
              classifications: [
                {
                  code: "0105.12.01",
                  title: "Pavos (gallipavos).",
                  umt: "Pza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Pavos (gallipavos)." }],
                },
              ],
            },
            {
              code: "0105.13",
              title: "Patos.",
              classifications: [
                {
                  code: "0105.13.01",
                  title: "Patos.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Patos." }],
                },
              ],
            },
            {
              code: "0105.14",
              title: "Gansos.",
              classifications: [
                {
                  code: "0105.14.01",
                  title: "Gansos.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Gansos." }],
                },
              ],
            },
            {
              code: "0105.15",
              title: "Pintadas.",
              classifications: [
                {
                  code: "0105.15.01",
                  title: "Pintadas.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Pintadas." }],
                },
              ],
            },
            {
              code: "0105.94",
              title: "Aves de la especie Gallus domesticus.",
              classifications: [
                {
                  code: "0105.94.01",
                  title: "Gallos de pelea.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Gallos de pelea." }],
                },
                {
                  code: "0105.94.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0105.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "0105.99.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "01.06",
          title: "Los demás animales vivos.",
          subheadings: [
            {
              code: "0106.11",
              title: "Primates.",
              classifications: [
                {
                  code: "0106.11.01",
                  title: "Macacus rhesus o Macacus cercophitecus.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Macacus rhesus o Macacus cercophitecus.",
                    },
                  ],
                },
                {
                  code: "0106.11.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0106.12",
              title:
                "Ballenas, delfines y marsopas; manatíes y dugones; otarios y focas, leones marinos y morsas.",
              classifications: [
                {
                  code: "0106.12.01",
                  title:
                    "Ballenas, delfines y marsopas; manatíes y dugones; otarios y focas, leones marinos y morsas.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Ballenas, delfines y marsopas; manatíes y dugones; otarios y focas, leones marinos y morsas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0106.13",
              title: "Camellos y demás camélidos (Camelidae).",
              classifications: [
                {
                  code: "0106.13.01",
                  title: "Camellos y demás camélidos (Camelidae).",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Camellos y demás camélidos (Camelidae).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0106.14",
              title: "Conejos y liebres.",
              classifications: [
                {
                  code: "0106.14.01",
                  title: "Conejos y liebres.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Conejos y liebres." }],
                },
              ],
            },
            {
              code: "0106.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "0106.19.02",
                  title: "Venado rojo (Cervus elaphus); gamo (Dama dama).",
                  umt: "Cbza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Venado rojo (Cervus elaphus); gamo (Dama dama).",
                    },
                  ],
                },
                {
                  code: "0106.19.99",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0106.20",
              title: "Reptiles (incluidas las serpientes y tortugas de mar).",
              classifications: [
                {
                  code: "0106.20.04",
                  title:
                    "Reptiles (incluidas las serpientes y tortugas de mar).",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Reptiles (incluidas las serpientes y tortugas de mar).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0106.31",
              title: "Aves de rapiña.",
              classifications: [
                {
                  code: "0106.31.01",
                  title: "Aves de rapiña.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aves de rapiña." }],
                },
              ],
            },
            {
              code: "0106.32",
              title:
                "Psitaciformes (incluidos los loros, guacamayos, cacatúas y demás papagayos).",
              classifications: [
                {
                  code: "0106.32.01",
                  title:
                    "Psitaciformes (incluidos los loros, guacamayos, cacatúas y demás papagayos).",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Psitaciformes (incluidos los loros, guacamayos, cacatúas y demás papagayos).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0106.33",
              title: "Avestruces; emúes (Dromaius novaehollandiae).",
              classifications: [
                {
                  code: "0106.33.01",
                  title: "Avestruces; emúes (Dromaius novaehollandiae).",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Avestruces; emúes (Dromaius novaehollandiae).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0106.39",
              title: "Las demás.",
              classifications: [
                {
                  code: "0106.39.99",
                  title: "Las demás.",
                  umt: "Cbza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "0106.41",
              title: "Abejas.",
              classifications: [
                {
                  code: "0106.41.01",
                  title: "Abejas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Abejas." }],
                },
              ],
            },
            {
              code: "0106.49",
              title: "Los demás.",
              classifications: [
                {
                  code: "0106.49.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0106.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0106.90.02",
                  title: "Lombriz Rebellus (Lumbricus rubellus).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Lombriz Rebellus (Lumbricus rubellus).",
                    },
                  ],
                },
                {
                  code: "0106.90.03",
                  title: "Lombriz acuática.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Lombriz acuática." }],
                },
                {
                  code: "0106.90.04",
                  title: "Ácaros Phytoseiulus persimilis.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    { code: "00", title: "Ácaros Phytoseiulus persimilis." },
                  ],
                },
                {
                  code: "0106.90.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "02",
      title: "Carne y despojos comestibles",
      notes: {
        legales: [
          {
            id: "NL-CAP02-1",
            text: "Este Capítulo no comprende: a) respecto de las partidas 02.01 a 02.08 y 02.10, los productos impropios para la alimentación humana; b) los insectos comestibles, sin vida (partida 04.10); c) las tripas, vejigas y estómagos de animales (partida 05.04), ni la sangre animal (partidas 05.11 o 30.02); d) las grasas animales, excepto los productos de la partida 02.09 (Capítulo 15).",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP02-1",
            text: 'En este Capítulo, se entiende por "Carcasa(s) de ave", la caja torácica del animal desprovista de las alas, sin vísceras y sin la masa muscular de la pechuga, y que puede incluir vértebras cervicales y piel.',
          },
          {
            id: "NN-CAP02-2",
            text: '"Mecánicamente deshuesados" significa carne en forma de pasta semisólida comestible y apta para consumo humano, la cual es obtenida de la molienda de la carne originalmente adherida a las carcasas o sus partes, que ha sido separada del hueso por medios mecánicos y/o separación a alta presión. La carne mecánicamente deshuesada (pasta) es comúnmente usada para la fabricación de embutidos y todo tipo de carnes frías.',
          },
          {
            id: "NN-CAP02-3",
            text: "Las pieles de cerdo, enteras o en recortes, se clasificarán como sigue: a) En las subpartidas 0206.30 o 0206.49, según los casos, cuando se presenten libres de tejido adiposo, o el espesor de la capa de tejido adiposo adherido a cualquier parte de la piel sea inferior a 2 mm; b) En la partida 02.09, cuando el espesor de la capa de tejido adiposo adherido a cualquier parte de la piel sea igual o superior a 2 mm.",
          },
          {
            id: "NN-CAP02-4",
            text: 'Para efectos de las subpartidas 0207.13 y 0207.14, la expresión "Piernas, muslos o piernas unidas al muslo" significa la parte del ave que comprende el fémur y la tibia con la masa muscular, y que pueden estar unidas de manera incidental con partes de otras piezas del pollo, por ejemplo, la parte posterior del tronco y/o la rabadilla. Los cuartos de pierna también pueden llevar algo de grasa abdominal y un máximo de dos costillas. La pierna y muslo constituyen los denominados cuartos traseros del pollo.',
          },
          {
            id: "NN-CAP02-5",
            text: "Para efectos de la partida 02.09, se considera tocino el tejido adiposo situado entre la carne y la piel del cerdo.",
          },
          {
            id: "NN-CAP02-6",
            text: "La subpartida 0210.99 comprende, entre otros: a) Carne y despojos de aves, salados: la carne o los despojos impregnados con cloruro de sodio (sal común) en toda la masa muscular. El contenido de sal común en la carne o los despojos, libres de piel y hueso, debe ser igual o superior al 1.94% pero inferior al 3.0% en peso; b) Carne y despojos de aves, en salmuera: la carne o los despojos impregnados con una solución de agua y cloruro de sodio (sal común), en toda la masa muscular; dichos productos pueden presentarse inyectados o sumergidos en la solución salina. El contenido de sal común en la carne o los despojos, libres de piel y hueso, debe ser igual o superior al 1.94% pero inferior al 3.0% en peso.",
          },
          {
            id: "NN-CAP02-7",
            text: "La subpartida 0210.99 no comprende las carnes y despojos de aves impregnados de cloruro de sodio (sal común), con un contenido de sal común inferior al 1.94% en peso de la carne o los despojos, libres de piel y hueso, ni la carne o los despojos que se presenten simplemente espolvoreados con sal (en ambos casos partida 02.07, generalmente).",
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "02.01",
          title:
            "Carne de animales de la especie bovina, fresca o refrigerada.",
          subheadings: [
            {
              code: "0201.10",
              title: "En canales o medias canales.",
              classifications: [
                {
                  code: "0201.10.01",
                  title: "En canales o medias canales.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [
                    { code: "00", title: "En canales o medias canales." },
                  ],
                },
              ],
            },
            {
              code: "0201.20",
              title: "Los demás cortes (trozos) sin deshuesar.",
              classifications: [
                {
                  code: "0201.20.91",
                  title: "Los demás cortes (trozos) sin deshuesar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title: "Los demás cortes (trozos) sin deshuesar.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0201.30",
              title: "Deshuesada.",
              classifications: [
                {
                  code: "0201.30.01",
                  title: "Deshuesada.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Deshuesada." }],
                },
              ],
            },
          ],
        },
        {
          code: "02.02",
          title: "Carne de animales de la especie bovina, congelada.",
          subheadings: [
            {
              code: "0202.10",
              title: "En canales o medias canales.",
              classifications: [
                {
                  code: "0202.10.01",
                  title: "En canales o medias canales.",
                  umt: "Kg",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [
                    { code: "00", title: "En canales o medias canales." },
                  ],
                },
              ],
            },
            {
              code: "0202.20",
              title: "Los demás cortes (trozos) sin deshuesar.",
              classifications: [
                {
                  code: "0202.20.91",
                  title: "Los demás cortes (trozos) sin deshuesar.",
                  umt: "Kg",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "SAD", "PACIC", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title: "Los demás cortes (trozos) sin deshuesar.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0202.30",
              title: "Deshuesada.",
              classifications: [
                {
                  code: "0202.30.01",
                  title: "Deshuesada.",
                  umt: "Kg",
                  importDuty: 25,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Deshuesada." }],
                },
              ],
            },
          ],
        },
        {
          code: "02.03",
          title:
            "Carne de animales de la especie porcina, fresca, refrigerada o congelada.",
          subheadings: [
            {
              code: "0203.11",
              title: "En canales o medias canales.",
              classifications: [
                {
                  code: "0203.11.01",
                  title: "En canales o medias canales.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "PS4", "PACIC", "CUP"],
                  nicos: [
                    { code: "00", title: "En canales o medias canales." },
                  ],
                },
              ],
            },
            {
              code: "0203.12",
              title: "Piernas, paletas, y sus trozos, sin deshuesar.",
              classifications: [
                {
                  code: "0203.12.01",
                  title: "Piernas, paletas, y sus trozos, sin deshuesar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "PACIC", "CUP"],
                  nicos: [
                    { code: "01", title: "Paletas y sus trozos." },
                    { code: "02", title: "Piernas y sus trozos." },
                  ],
                },
              ],
            },
            {
              code: "0203.19",
              title: "Las demás.",
              classifications: [
                {
                  code: "0203.19.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "PS4", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "0203.21",
              title: "En canales o medias canales.",
              classifications: [
                {
                  code: "0203.21.01",
                  title: "En canales o medias canales.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "PS4", "PACIC", "CUP"],
                  nicos: [
                    { code: "00", title: "En canales o medias canales." },
                  ],
                },
              ],
            },
            {
              code: "0203.22",
              title: "Piernas, paletas, y sus trozos, sin deshuesar.",
              classifications: [
                {
                  code: "0203.22.01",
                  title: "Piernas, paletas, y sus trozos, sin deshuesar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "PACIC", "CUP"],
                  nicos: [
                    { code: "01", title: "Paletas y sus trozos." },
                    { code: "02", title: "Piernas y sus trozos." },
                  ],
                },
              ],
            },
            {
              code: "0203.29",
              title: "Las demás.",
              classifications: [
                {
                  code: "0203.29.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "PS4", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "02.04",
          title:
            "Carne de animales de las especies ovina o caprina, fresca, refrigerada o congelada.",
          subheadings: [
            {
              code: "0204.10",
              title:
                "Canales o medias canales de cordero, frescas o refrigeradas.",
              classifications: [
                {
                  code: "0204.10.01",
                  title:
                    "Canales o medias canales de cordero, frescas o refrigeradas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Canales o medias canales de cordero, frescas o refrigeradas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0204.21",
              title: "En canales o medias canales.",
              classifications: [
                {
                  code: "0204.21.01",
                  title: "En canales o medias canales.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    { code: "00", title: "En canales o medias canales." },
                  ],
                },
              ],
            },
            {
              code: "0204.22",
              title: "Los demás cortes (trozos) sin deshuesar.",
              classifications: [
                {
                  code: "0204.22.91",
                  title: "Los demás cortes (trozos) sin deshuesar.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Los demás cortes (trozos) sin deshuesar.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0204.23",
              title: "Deshuesadas.",
              classifications: [
                {
                  code: "0204.23.01",
                  title: "Deshuesadas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Deshuesadas." }],
                },
              ],
            },
            {
              code: "0204.30",
              title: "Canales o medias canales de cordero, congeladas.",
              classifications: [
                {
                  code: "0204.30.01",
                  title: "Canales o medias canales de cordero, congeladas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Canales o medias canales de cordero, congeladas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0204.41",
              title: "En canales o medias canales.",
              classifications: [
                {
                  code: "0204.41.01",
                  title: "En canales o medias canales.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["CHT", "SAD"],
                  nicos: [
                    { code: "00", title: "En canales o medias canales." },
                  ],
                },
              ],
            },
            {
              code: "0204.42",
              title: "Los demás cortes (trozos) sin deshuesar.",
              classifications: [
                {
                  code: "0204.42.91",
                  title: "Los demás cortes (trozos) sin deshuesar.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["CHT", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Los demás cortes (trozos) sin deshuesar.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0204.43",
              title: "Deshuesadas.",
              classifications: [
                {
                  code: "0204.43.01",
                  title: "Deshuesadas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Deshuesadas." }],
                },
              ],
            },
            {
              code: "0204.50",
              title: "Carne de animales de la especie caprina.",
              classifications: [
                {
                  code: "0204.50.01",
                  title: "Carne de animales de la especie caprina.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Carne de animales de la especie caprina.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "02.05",
          title:
            "Carne de animales de las especies caballar, asnal o mular, fresca, refrigerada o congelada.",
          subheadings: [
            {
              code: "0205.00",
              title:
                "Carne de animales de las especies caballar, asnal o mular, fresca, refrigerada o congelada.",
              classifications: [
                {
                  code: "0205.00.01",
                  title:
                    "Carne de animales de las especies caballar, asnal o mular, fresca, refrigerada o congelada.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Carne de animales de las especies caballar, asnal o mular, fresca, refrigerada o congelada.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "02.06",
          title:
            "Despojos comestibles de animales de las especies bovina, porcina, ovina, caprina, caballar, asnal o mular, frescos, refrigerados o congelados.",
          subheadings: [
            {
              code: "0206.10",
              title: "De la especie bovina, frescos o refrigerados.",
              classifications: [
                {
                  code: "0206.10.01",
                  title: "De la especie bovina, frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "De la especie bovina, frescos o refrigerados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0206.21",
              title: "Lenguas.",
              classifications: [
                {
                  code: "0206.21.01",
                  title: "Lenguas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Lenguas." }],
                },
              ],
            },
            {
              code: "0206.22",
              title: "Hígados.",
              classifications: [
                {
                  code: "0206.22.01",
                  title: "Hígados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Hígados." }],
                },
              ],
            },
            {
              code: "0206.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "0206.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["CHT", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0206.30",
              title: "De la especie porcina, frescos o refrigerados.",
              classifications: [
                {
                  code: "0206.30.01",
                  title:
                    'Pieles de cerdo enteras o en recortes, refrigerados, excepto el cuero precocido en trozos ("pellets").',
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Pieles de cerdo enteras o en recortes, refrigerados, excepto el cuero precocido en trozos ("pellets").',
                    },
                  ],
                },
                {
                  code: "0206.30.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0206.41",
              title: "Hígados.",
              classifications: [
                {
                  code: "0206.41.01",
                  title: "Hígados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Hígados." }],
                },
              ],
            },
            {
              code: "0206.49",
              title: "Los demás.",
              classifications: [
                {
                  code: "0206.49.01",
                  title:
                    'Pieles de cerdo enteras o en recortes, excepto el cuero precocido en trozos ("pellets").',
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Pieles de cerdo enteras o en recortes, excepto el cuero precocido en trozos ("pellets").',
                    },
                  ],
                },
                {
                  code: "0206.49.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0206.80",
              title: "Los demás, frescos o refrigerados.",
              classifications: [
                {
                  code: "0206.80.91",
                  title: "Los demás, frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    { code: "00", title: "Los demás, frescos o refrigerados." },
                  ],
                },
              ],
            },
            {
              code: "0206.90",
              title: "Los demás, congelados.",
              classifications: [
                {
                  code: "0206.90.91",
                  title: "Los demás, congelados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["CHT", "SAD"],
                  nicos: [{ code: "00", title: "Los demás, congelados." }],
                },
              ],
            },
          ],
        },
        {
          code: "02.07",
          title:
            "Carne y despojos comestibles, de aves de la partida 01.05, frescos, refrigerados o congelados.",
          subheadings: [
            {
              code: "0207.11",
              title: "Sin trocear, frescos o refrigerados.",
              classifications: [
                {
                  code: "0207.11.01",
                  title: "Sin trocear, frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 75,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title: "Sin trocear, frescos o refrigerados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0207.12",
              title: "Sin trocear, congelados.",
              classifications: [
                {
                  code: "0207.12.01",
                  title: "Sin trocear, congelados.",
                  umt: "Kg",
                  importDuty: 75,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Sin trocear, congelados." }],
                },
              ],
            },
            {
              code: "0207.13",
              title: "Trozos y despojos, frescos o refrigerados.",
              classifications: [
                {
                  code: "0207.13.04",
                  title: "Trozos y despojos, frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 75,
                  exportDuty: 0,
                  regimenes: ["PERM", "SAD", "PACIC", "CC", "CUP"],
                  nicos: [
                    {
                      code: "01",
                      title: "Mecánicamente deshuesados (pastas).",
                    },
                    { code: "02", title: "Carcasas." },
                    {
                      code: "03",
                      title: "Piernas, muslos o piernas unidas al muslo.",
                    },
                    { code: "04", title: "Alas y sus partes." },
                    {
                      code: "05",
                      title: "Pechuga, sus trozos y recortes, con hueso.",
                    },
                    {
                      code: "06",
                      title:
                        "Filetes de pechuga y pechuga, sus trozos y recortes, sin hueso (deshuesada).",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0207.14",
              title: "Trozos y despojos, congelados.",
              classifications: [
                {
                  code: "0207.14.02",
                  title: "Hígados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Hígados." }],
                },
                {
                  code: "0207.14.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 75,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CC", "CUP"],
                  nicos: [
                    {
                      code: "01",
                      title: "Mecánicamente deshuesados (pastas).",
                    },
                    {
                      code: "02",
                      title: "Piernas, muslos o piernas unidas al muslo.",
                    },
                    { code: "03", title: "Alas y sus partes." },
                    {
                      code: "04",
                      title: "Pechuga, sus trozos y recortes, con hueso.",
                    },
                    {
                      code: "05",
                      title:
                        "Filetes de pechuga y pechuga, sus trozos y recortes, sin hueso (deshuesada).",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0207.24",
              title: "Sin trocear, frescos o refrigerados.",
              classifications: [
                {
                  code: "0207.24.01",
                  title: "Sin trocear, frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC"],
                  nicos: [
                    {
                      code: "00",
                      title: "Sin trocear, frescos o refrigerados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0207.25",
              title: "Sin trocear, congelados.",
              classifications: [
                {
                  code: "0207.25.01",
                  title: "Sin trocear, congelados.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC"],
                  nicos: [{ code: "00", title: "Sin trocear, congelados." }],
                },
              ],
            },
            {
              code: "0207.26",
              title: "Trozos y despojos, frescos o refrigerados.",
              classifications: [
                {
                  code: "0207.26.01",
                  title: "Trozos y despojos, frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 75,
                  exportDuty: 0,
                  regimenes: ["SAD", "PERM", "PACIC", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title: "Trozos y despojos, frescos o refrigerados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0207.27",
              title: "Trozos y despojos, congelados.",
              classifications: [
                {
                  code: "0207.27.02",
                  title: "Hígados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Hígados." }],
                },
                {
                  code: "0207.27.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 75,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0207.60",
              title: "De pintada.",
              classifications: [
                {
                  code: "0207.60.03",
                  title: "De pintada.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PERM", "SAD"],
                  nicos: [{ code: "00", title: "De pintada." }],
                },
              ],
            },
          ],
        },
        {
          code: "02.08",
          title:
            "Las demás carnes y despojos comestibles, frescos, refrigerados o congelados.",
          subheadings: [
            {
              code: "0208.10",
              title: "De conejo o liebre.",
              classifications: [
                {
                  code: "0208.10.01",
                  title: "De conejo o liebre.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "De conejo o liebre." }],
                },
              ],
            },
            {
              code: "0208.30",
              title: "De primates.",
              classifications: [
                {
                  code: "0208.30.01",
                  title: "De primates.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "De primates." }],
                },
              ],
            },
            {
              code: "0208.40",
              title:
                "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
              classifications: [
                {
                  code: "0208.40.01",
                  title:
                    "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0208.50",
              title:
                "De reptiles (incluidas las serpientes y tortugas de mar).",
              classifications: [
                {
                  code: "0208.50.01",
                  title:
                    "De reptiles (incluidas las serpientes y tortugas de mar).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De reptiles (incluidas las serpientes y tortugas de mar).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0208.60",
              title: "De camellos y demás camélidos (Camelidae).",
              classifications: [
                {
                  code: "0208.60.01",
                  title: "De camellos y demás camélidos (Camelidae).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "De camellos y demás camélidos (Camelidae).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0208.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0208.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "02.09",
          title:
            "Tocino sin partes magras y grasa de cerdo o de ave sin fundir ni extraer de otro modo, frescos, refrigerados, congelados, salados o en salmuera, secos o ahumados.",
          subheadings: [
            {
              code: "0209.10",
              title: "De cerdo.",
              classifications: [
                {
                  code: "0209.10.01",
                  title: "De cerdo.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "De cerdo." }],
                },
              ],
            },
            {
              code: "0209.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0209.90.01",
                  title: "De gallo, gallina o pavo (gallipavo).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "De gallo, gallina o pavo (gallipavo).",
                    },
                  ],
                },
                {
                  code: "0209.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "02.10",
          title:
            "Carne y despojos comestibles, salados o en salmuera, secos o ahumados; harina y polvo comestibles, de carne o de despojos.",
          subheadings: [
            {
              code: "0210.11",
              title: "Jamones, paletas, y sus trozos, sin deshuesar.",
              classifications: [
                {
                  code: "0210.11.01",
                  title: "Jamones, paletas, y sus trozos, sin deshuesar.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Jamones, paletas, y sus trozos, sin deshuesar.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0210.12",
              title: "Tocino entreverado de panza (panceta) y sus trozos.",
              classifications: [
                {
                  code: "0210.12.01",
                  title: "Tocino entreverado de panza (panceta) y sus trozos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Tocino entreverado de panza (panceta) y sus trozos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0210.19",
              title: "Las demás.",
              classifications: [
                {
                  code: "0210.19.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "0210.20",
              title: "Carne de la especie bovina.",
              classifications: [
                {
                  code: "0210.20.01",
                  title: "Carne de la especie bovina.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Carne de la especie bovina." }],
                },
              ],
            },
            {
              code: "0210.91",
              title: "De primates.",
              classifications: [
                {
                  code: "0210.91.01",
                  title: "De primates.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "De primates." }],
                },
              ],
            },
            {
              code: "0210.92",
              title:
                "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
              classifications: [
                {
                  code: "0210.92.01",
                  title:
                    "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0210.93",
              title:
                "De reptiles (incluidas las serpientes y tortugas de mar).",
              classifications: [
                {
                  code: "0210.93.01",
                  title:
                    "De reptiles (incluidas las serpientes y tortugas de mar).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De reptiles (incluidas las serpientes y tortugas de mar).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0210.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "0210.99.02",
                  title: "Pieles de cerdo ahumadas, enteras o en recortes.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Pieles de cerdo ahumadas, enteras o en recortes.",
                    },
                  ],
                },
                {
                  code: "0210.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "03",
      title: "Pescados y crustáceos, moluscos y demás invertebrados acuáticos",
      notes: {
        legales: [
          {
            id: "NL-CAP03-1",
            text: 'Este Capítulo no comprende: a) los mamíferos de la partida 01.06; b) la carne de los mamíferos de la partida 01.06 (partidas 02.08 o 02.10); c) el pescado (incluidos los hígados, huevas y lechas) ni los crustáceos, moluscos o demás invertebrados acuáticos, muertos e impropios para la alimentación humana por su naturaleza o por su estado de presentación (Capítulo 05); la harina, polvo y "pellets" de pescado o de crustáceos, moluscos o demás invertebrados acuáticos, impropios para la alimentación humana (partida 23.01); o d) el caviar y los sucedáneos del caviar preparados con huevas de pescado (partida 16.04).',
          },
          {
            id: "NL-CAP03-2",
            text: 'En este Capítulo, el término "pellets" designa los productos en forma de cilindro, bolita, etc., aglomerados por simple presión o con adición de una pequeña cantidad de aglutinante.',
          },
          {
            id: "NL-CAP03-3",
            text: 'Las partidas 03.05 a 03.08 no comprenden la harina, polvo y "pellets", aptos para la alimentación humana (partida 03.09).',
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "03.01",
          title: "Peces vivos.",
          subheadings: [
            {
              code: "0301.11",
              title: "De agua dulce.",
              classifications: [
                {
                  code: "0301.11.01",
                  title: "De agua dulce.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "De agua dulce." }],
                },
              ],
            },
            {
              code: "0301.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "0301.19.01",
                  title: "Los demás.",
                  umt: "Cbza",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "03.02",
          title:
            "Pescado fresco o refrigerado, excepto los filetes y demás carne de pescado de la partida 03.04.",
          subheadings: [
            {
              code: "0302.11",
              title:
                "Truchas (Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache y Oncorhynchus chrysogaster).",
              classifications: [
                {
                  code: "0302.11.01",
                  title: "Truchas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Truchas." }],
                },
              ],
            },
            {
              code: "0302.13",
              title:
                "Salmones del Pacífico (Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou y Oncorhynchus rhodurus).",
              classifications: [
                {
                  code: "0302.13.01",
                  title: "Salmones del Pacífico.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Salmones del Pacífico." }],
                },
              ],
            },
            {
              code: "0302.14",
              title:
                "Salmones del Atlántico (Salmo salar) y salmones del Danubio (Hucho hucho).",
              classifications: [
                {
                  code: "0302.14.01",
                  title: "Salmones del Atlántico y del Danubio.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Salmones del Atlántico y del Danubio.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0302.89",
              title: "Los demás.",
              classifications: [
                {
                  code: "0302.89.99",
                  title: "Los demás pescados frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Los demás pescados frescos o refrigerados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "03.03",
          title:
            "Pescado congelado, excepto los filetes y demás carne de pescado de la partida 03.04.",
          subheadings: [
            {
              code: "0303.11",
              title: "Salmones rojos (Oncorhynchus nerka).",
              classifications: [
                {
                  code: "0303.11.01",
                  title: "Salmones rojos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Salmones rojos." }],
                },
              ],
            },
            {
              code: "0303.14",
              title:
                "Salmones del Atlántico (Salmo salar) y salmones del Danubio (Hucho hucho).",
              classifications: [
                {
                  code: "0303.14.01",
                  title: "Salmones del Atlántico y del Danubio.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Salmones del Atlántico y del Danubio.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0303.89",
              title: "Los demás.",
              classifications: [
                {
                  code: "0303.89.99",
                  title: "Los demás pescados congelados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    { code: "00", title: "Los demás pescados congelados." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "03.04",
          title:
            "Filetes y demás carne de pescado (incluso picada), frescos, refrigerados o congelados.",
          subheadings: [
            {
              code: "0304.31",
              title: "Tilapias (Oreochromis spp.).",
              classifications: [
                {
                  code: "0304.31.01",
                  title: "Tilapias.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Tilapias." }],
                },
              ],
            },
            {
              code: "0304.32",
              title:
                "Bagres o peces gato (Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp.).",
              classifications: [
                {
                  code: "0304.32.01",
                  title: "Bagres o peces gato.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Bagres o peces gato." }],
                },
              ],
            },
            {
              code: "0304.89",
              title: "Los demás.",
              classifications: [
                {
                  code: "0304.89.99",
                  title: "Los demás filetes de pescado.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    { code: "00", title: "Los demás filetes de pescado." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "03.05",
          title:
            'Pescado seco, salado o en salmuera; pescado ahumado, incluso cocido antes o durante el ahumado; harina, polvo y "pellets" de pescado, aptos para la alimentación humana.',
          subheadings: [
            {
              code: "0305.31",
              title:
                "Filetes de tilapias (Oreochromis spp.), bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente.",
              classifications: [
                {
                  code: "0305.31.01",
                  title:
                    "Filetes de tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Filetes de tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0305.32",
              title:
                "Filetes de pescados de las familias Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae y Muraenolepididae.",
              classifications: [
                {
                  code: "0305.32.01",
                  title:
                    "De merluza panameña (Merluccius angustimanus) o merluza del Pacífico Norte (Merluccius productus).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De merluza panameña o merluza del Pacífico Norte.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0305.39",
              title: "Los demás filetes.",
              classifications: [
                {
                  code: "0305.39.99",
                  title: "Los demás filetes.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SAL"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "De atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado.",
                    },
                    {
                      code: "02",
                      title:
                        "De salmones del Pacífico, salmones del Atlántico y salmones del Danubio.",
                    },
                    { code: "03", title: "De pez espada." },
                    { code: "04", title: "De sardina, sardinela o espadín." },
                    { code: "05", title: "De anchoas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0305.41",
              title:
                "Salmones del Pacífico, salmones del Atlántico y salmones del Danubio, ahumados.",
              classifications: [
                {
                  code: "0305.41.01",
                  title: "Salmones ahumados.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [{ code: "00", title: "Salmones ahumados." }],
                },
              ],
            },
            {
              code: "0305.42",
              title: "Arenques (Clupea harengus, Clupea pallasii), ahumados.",
              classifications: [
                {
                  code: "0305.42.01",
                  title: "Arenques ahumados.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [{ code: "00", title: "Arenques ahumados." }],
                },
              ],
            },
            {
              code: "0305.43",
              title:
                "Truchas (Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache y Oncorhynchus chrysogaster), ahumadas.",
              classifications: [
                {
                  code: "0305.43.01",
                  title: "Truchas ahumadas.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [{ code: "00", title: "Truchas ahumadas." }],
                },
              ],
            },
            {
              code: "0305.44",
              title:
                "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, ahumados.",
              classifications: [
                {
                  code: "0305.44.01",
                  title:
                    "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, ahumados.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "EMB", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, ahumados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0305.49",
              title: "Los demás pescados ahumados.",
              classifications: [
                {
                  code: "0305.49.99",
                  title: "Los demás pescados ahumados.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "EMB", "SAL"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Merluzas ahumadas, excepto lo comprendido en el número de identificación comercial 0305.49.99.02.",
                    },
                    {
                      code: "02",
                      title: "Merluza panameña o merluza del Pacífico Norte.",
                    },
                    {
                      code: "03",
                      title:
                        "Atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado.",
                    },
                    { code: "04", title: "Pez espada." },
                    { code: "05", title: "Sardina, sardinela o espadín." },
                    { code: "06", title: "Anchoas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0305.51",
              title:
                "Bacalaos (Gadus morhua, Gadus ogac, Gadus macrocephalus), secos.",
              classifications: [
                {
                  code: "0305.51.02",
                  title: "Bacalaos secos.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [
                    { code: "01", title: 'Bacalao de la variedad "ling".' },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0305.52",
              title:
                "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, secos.",
              classifications: [
                {
                  code: "0305.52.01",
                  title:
                    "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, secos.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, secos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0305.53",
              title:
                "Pescados de las familias Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae y Muraenolepididae, excepto los bacalaos, secos.",
              classifications: [
                {
                  code: "0305.53.01",
                  title:
                    "Pescados de las familias Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae y Muraenolepididae, secos.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL", "SEM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "De merluza panameña o merluza del Pacífico Norte.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0305.54",
              title:
                "Arenques, anchoas, sardinas, sardinelas, espadines, caballas, carites, jureles, pámpanos, cobias, palometones, papardas, macarelas, capelanes, peces espada, bacoretas, bonitos, agujas, marlines, peces vela o picudos, secos.",
              classifications: [
                {
                  code: "0305.54.01",
                  title:
                    "Arenques, anchoas, sardinas, sardinelas, espadines, caballas, carites, jureles, pámpanos, cobias, palometones, papardas, macarelas, capelanes, peces espada, bacoretas, bonitos, agujas, marlines, peces vela o picudos, secos.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Arenques, anchoas, sardinas, sardinelas, espadines, caballas, carites, jureles, pámpanos, cobias, palometones, papardas, macarelas, capelanes, peces espada, bacoretas, bonitos, agujas, marlines, peces vela o picudos, secos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0305.59",
              title: "Los demás pescados secos.",
              classifications: [
                {
                  code: "0305.59.99",
                  title: "Los demás pescados secos.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL", "SEM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Merluzas, excepto lo comprendido en el número de identificación comercial 0305.59.99.02.",
                    },
                    {
                      code: "02",
                      title: "Merluza panameña o merluza del Pacífico Norte.",
                    },
                    {
                      code: "03",
                      title:
                        "Atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado.",
                    },
                    {
                      code: "04",
                      title:
                        "Salmones del Pacífico, salmones del Atlántico y salmones del Danubio.",
                    },
                    { code: "05", title: "Pez espada." },
                    { code: "06", title: "Sardina, sardinela o espadín." },
                    {
                      code: "07",
                      title:
                        "Anchoas, excepto boquerón bucanero, boquerón aduanero.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0305.61",
              title: "Arenques (Clupea harengus, Clupea pallasii), salados.",
              classifications: [
                {
                  code: "0305.61.01",
                  title: "Arenques salados.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [{ code: "00", title: "Arenques salados." }],
                },
              ],
            },
            {
              code: "0305.62",
              title:
                "Bacalaos (Gadus morhua, Gadus ogac, Gadus macrocephalus), salados.",
              classifications: [
                {
                  code: "0305.62.01",
                  title: "Bacalaos salados.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [{ code: "00", title: "Bacalaos salados." }],
                },
              ],
            },
            {
              code: "0305.63",
              title: "Anchoas (Engraulis spp.), saladas.",
              classifications: [
                {
                  code: "0305.63.01",
                  title: "Anchoas saladas.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [{ code: "00", title: "Anchoas saladas." }],
                },
              ],
            },
            {
              code: "0305.64",
              title:
                "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, salados.",
              classifications: [
                {
                  code: "0305.64.01",
                  title:
                    "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, salados.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, salados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0305.69",
              title: "Los demás pescados salados.",
              classifications: [
                {
                  code: "0305.69.99",
                  title: "Los demás pescados salados.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado.",
                    },
                    {
                      code: "02",
                      title:
                        "Salmones del Pacífico, salmones del Atlántico y salmones del Danubio.",
                    },
                    { code: "03", title: "Pez espada." },
                    { code: "04", title: "Sardina, sardinela o espadín." },
                    {
                      code: "05",
                      title: "Merluza panameña o merluza del Pacífico Norte.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0305.71",
              title: "Aletas de tiburón.",
              classifications: [
                {
                  code: "0305.71.01",
                  title: "Aletas de tiburón.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "EMB", "SAL", "SEM"],
                  nicos: [{ code: "00", title: "Aletas de tiburón." }],
                },
              ],
            },
            {
              code: "0305.72",
              title: "Cabezas, colas y vejigas natatorias, de pescado.",
              classifications: [
                {
                  code: "0305.72.01",
                  title: "Cabezas, colas y vejigas natatorias, de pescado.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "EMB", "SAL"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "De atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado.",
                    },
                    {
                      code: "02",
                      title:
                        "De salmones del Pacífico, salmones del Atlántico y salmones del Danubio.",
                    },
                    { code: "03", title: "De pez espada." },
                    { code: "04", title: "De sardina, sardinela o espadín." },
                    { code: "05", title: "De anchoas." },
                    {
                      code: "06",
                      title:
                        "De merluza panameña o merluza del Pacífico Norte.",
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "0305.79",
              title: "Los demás despojos comestibles de pescado.",
              classifications: [
                {
                  code: "0305.79.99",
                  title: "Los demás despojos comestibles de pescado.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SAL"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "De atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado.",
                    },
                    {
                      code: "02",
                      title:
                        "De salmones del Pacífico, salmones del Atlántico y salmones del Danubio.",
                    },
                    { code: "03", title: "De pez espada." },
                    { code: "04", title: "De sardina, sardinela o espadín." },
                    { code: "05", title: "De anchoas." },
                    {
                      code: "06",
                      title:
                        "De merluza panameña o merluza del Pacífico Norte.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "03.06",
          title:
            'Crustáceos, incluso pelados, vivos, frescos, refrigerados, congelados, secos, salados o en salmuera; crustáceos sin pelar, cocidos en agua o vapor, incluso refrigerados, congelados, secos, salados o en salmuera; harina, polvo y "pellets" de crustáceos, aptos para la alimentación humana.',
          subheadings: [
            {
              code: "0306.11",
              title:
                "Langostas de mar (Palinurus spp., Panulirus spp., Jasus spp.).",
              classifications: [
                {
                  code: "0306.11.01",
                  title: "Langostas de mar.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Langostas de mar." }],
                },
              ],
            },
            {
              code: "0306.14",
              title: "Cangrejos.",
              classifications: [
                {
                  code: "0306.14.01",
                  title: "Cangrejos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Cangrejos." }],
                },
              ],
            },
            {
              code: "0306.17",
              title:
                "Los demás camarones, langostinos y demás decápodos Natantia.",
              classifications: [
                {
                  code: "0306.17.01",
                  title: "Camarones, langostinos y demás decápodos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Camarones, langostinos y demás decápodos.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "03.07",
          title:
            'Moluscos, incluso separados de sus valvas, vivos, frescos, refrigerados, congelados, secos, salados o en salmuera; moluscos ahumados, incluso pelados o cocidos, antes o durante el ahumado; harina, polvo y "pellets" de moluscos, aptos para la alimentación humana.',
          subheadings: [
            {
              code: "0307.11",
              title: "Ostras vivas, frescas o refrigeradas.",
              classifications: [
                {
                  code: "0307.11.01",
                  title: "Ostras vivas, frescas o refrigeradas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Ostras vivas, frescas o refrigeradas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0307.42",
              title: "Vivos, frescos o refrigerados.",
              classifications: [
                {
                  code: "0307.42.01",
                  title: "Vivos, frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    { code: "00", title: "Vivos, frescos o refrigerados." },
                  ],
                },
              ],
            },
            {
              code: "0307.87",
              title: "Abulones u orejas de mar (Haliotis spp.).",
              classifications: [
                {
                  code: "0307.87.01",
                  title: "Abulones u orejas de mar.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Abulones u orejas de mar." }],
                },
              ],
            },
          ],
        },
        {
          code: "03.08",
          title:
            "Invertebrados acuáticos, excepto los crustáceos y moluscos, vivos, frescos, refrigerados, congelados, secos, salados o en salmuera; invertebrados acuáticos ahumados, excepto los crustáceos y moluscos, incluso cocidos antes o durante el ahumado.",
          subheadings: [
            {
              code: "0308.11",
              title: "Pepinos de mar (Stichopus japonicus, Holothuroidea).",
              classifications: [
                {
                  code: "0308.11.01",
                  title: "Pepinos de mar.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Pepinos de mar." }],
                },
              ],
            },
            {
              code: "0308.30",
              title: "Medusas (Rhopilema spp.).",
              classifications: [
                {
                  code: "0308.30.01",
                  title: "Medusas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Medusas." }],
                },
              ],
            },
          ],
        },
        {
          code: "03.09",
          title:
            'Harina, polvo y "pellets" de pescado, crustáceos, moluscos y demás invertebrados acuáticos, aptos para la alimentación humana.',
          subheadings: [
            {
              code: "0309.10",
              title: "De pescado.",
              classifications: [
                {
                  code: "0309.10.01",
                  title: "De pescado.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [{ code: "00", title: "De pescado." }],
                },
              ],
            },
            {
              code: "0309.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0309.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "04",
      title:
        "Leche y productos lácteos; huevos de ave; miel natural; productos comestibles de origen animal, no expresados ni comprendidos en otra parte",
      notes: {
        legales: [
          {
            id: "NL-CAP04-1",
            text: "Se considera leche la leche entera y la leche desnatada (descremada) total o parcialmente.",
          },
          {
            id: "NL-CAP04-2",
            text: "En la partida 04.05: a) el término mantequilla abarca la mantequilla de vaca, oveja o cabra natural, del lactosuero o recombinada (fresca, salada o rancia, incluso en recipientes herméticamente cerrados) que se obtienen exclusivamente de la leche, con un contenido de materias grasas de la leche que sea superior o igual al 80% pero inferior o igual al 95%, un contenido máximo de materias secas no grasas de la leche del 2% y un contenido máximo de agua del 16%. La mantequilla no contiene emulsionantes, pero puede contener cloruro sódico, colorantes alimentarios, sales de neutralización y cultivos de bacterias lácticas inocuas; b) el término pastas lácteas para untar abarca las emulsiones del tipo agua en aceite que se puedan untar que contengan materias grasas de la leche como únicas materias grasas y en las que el contenido de estas sea superior o igual al 39% pero inferior al 80%.",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP04-1",
            text: "Para los efectos de este Capítulo, los términos, con aromatizante(s), aromatizado(s) y aromatizada(s) significan: con adición de sabor.",
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "04.01",
          title:
            "Leche y nata (crema), sin concentrar, sin adición de azúcar ni otro edulcorante.",
          subheadings: [
            {
              code: "0401.10",
              title:
                "Con un contenido de materias grasas inferior o igual al 1% en peso.",
              classifications: [
                {
                  code: "0401.10.02",
                  title:
                    "Con un contenido de materias grasas inferior o igual al 1% en peso.",
                  umt: "L",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC"],
                  nicos: [
                    { code: "01", title: "En envases herméticos." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "0401.20",
              title:
                "Con un contenido de materias grasas superior al 1% pero inferior o igual al 6%, en peso.",
              classifications: [
                {
                  code: "0401.20.02",
                  title:
                    "Con un contenido de materias grasas superior al 1% pero inferior o igual al 6%, en peso.",
                  umt: "L",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC"],
                  nicos: [
                    { code: "01", title: "En envases herméticos." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "0401.40",
              title:
                "Con un contenido de materias grasas superior al 6% pero inferior o igual al 10%, en peso.",
              classifications: [
                {
                  code: "0401.40.01",
                  title:
                    "Con un contenido de materias grasas superior al 6% pero inferior o igual al 10%, en peso.",
                  umt: "L",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC"],
                  nicos: [
                    { code: "01", title: "En envases herméticos." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "0401.50",
              title: "Con un contenido de materias grasas superior al 10%.",
              classifications: [
                {
                  code: "0401.50.01",
                  title: "Con un contenido de materias grasas superior al 10%.",
                  umt: "L",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL"],
                  nicos: [
                    { code: "01", title: "En envases herméticos." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "04.02",
          title:
            "Leche y nata (crema), concentradas o con adición de azúcar u otro edulcorante.",
          subheadings: [
            {
              code: "0402.10",
              title:
                "En polvo, gránulos o demás formas sólidas, con un contenido de materias grasas inferior o igual al 1.5% en peso.",
              classifications: [
                {
                  code: "0402.10.01",
                  title: "Leche en polvo o en pastillas.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "SAL", "PACIC", "CUP", "AMX"],
                  nicos: [
                    { code: "00", title: "Leche en polvo o en pastillas." },
                  ],
                },
              ],
            },
            {
              code: "0402.21",
              title: "Sin adición de azúcar ni otro edulcorante.",
              classifications: [
                {
                  code: "0402.21.01",
                  title: "Leche entera en polvo.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "SAL", "PACIC", "CUP", "AMX"],
                  nicos: [{ code: "00", title: "Leche entera en polvo." }],
                },
              ],
            },
            {
              code: "0402.29",
              title: "Las demás.",
              classifications: [
                {
                  code: "0402.29.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "SAL", "PACIC", "CUP", "AMX"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "0402.91",
              title: "Sin adición de azúcar ni otro edulcorante.",
              classifications: [
                {
                  code: "0402.91.01",
                  title: "Leche evaporada.",
                  umt: "L",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC"],
                  nicos: [{ code: "00", title: "Leche evaporada." }],
                },
              ],
            },
            {
              code: "0402.99",
              title: "Las demás.",
              classifications: [
                {
                  code: "0402.99.01",
                  title: "Leche condensada.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Leche condensada." }],
                },
              ],
            },
          ],
        },
        {
          code: "04.03",
          title:
            "Suero de mantequilla (de manteca), leche y nata (crema) cuajadas, yogur, kéfir y demás leches y natas (cremas), fermentadas o acidificadas, incluso concentrados, con adición de azúcar u otro edulcorante, aromatizados o con frutas u otros frutos o cacao.",
          subheadings: [
            {
              code: "0403.10",
              title: "Yogur.",
              classifications: [
                {
                  code: "0403.10.01",
                  title: "Yogur.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL"],
                  nicos: [{ code: "00", title: "Yogur." }],
                },
              ],
            },
            {
              code: "0403.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0403.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "04.04",
          title:
            "Lactosuero, incluso concentrado o con adición de azúcar u otro edulcorante; productos constituidos por los componentes naturales de la leche, incluso con adición de azúcar u otro edulcorante, no expresados ni comprendidos en otra parte.",
          subheadings: [
            {
              code: "0404.10",
              title:
                "Lactosuero, aunque esté modificado, incluso concentrado o con adición de azúcar u otro edulcorante.",
              classifications: [
                {
                  code: "0404.10.01",
                  title: "Lactosuero en polvo.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL"],
                  nicos: [{ code: "00", title: "Lactosuero en polvo." }],
                },
              ],
            },
            {
              code: "0404.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0404.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "04.05",
          title:
            "Mantequilla (manteca) y demás materias grasas de la leche; pastas lácteas para untar.",
          subheadings: [
            {
              code: "0405.10",
              title: "Mantequilla (manteca).",
              classifications: [
                {
                  code: "0405.10.01",
                  title: "Mantequilla (manteca).",
                  umt: "Kg",
                  importDuty: 40,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC"],
                  nicos: [{ code: "00", title: "Mantequilla (manteca)." }],
                },
              ],
            },
            {
              code: "0405.20",
              title: "Pastas lácteas para untar.",
              classifications: [
                {
                  code: "0405.20.01",
                  title: "Pastas lácteas para untar.",
                  umt: "Kg",
                  importDuty: 40,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL"],
                  nicos: [{ code: "00", title: "Pastas lácteas para untar." }],
                },
              ],
            },
            {
              code: "0405.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "0405.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 40,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "04.06",
          title: "Quesos y requesón.",
          subheadings: [
            {
              code: "0406.10",
              title:
                "Queso fresco (sin madurar), incluido el del lactosuero, y requesón.",
              classifications: [
                {
                  code: "0406.10.01",
                  title: "Queso fresco y requesón.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Queso fresco y requesón." }],
                },
              ],
            },
            {
              code: "0406.20",
              title: "Queso de cualquier tipo, rallado o en polvo.",
              classifications: [
                {
                  code: "0406.20.01",
                  title: "Queso rallado o en polvo.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Queso rallado o en polvo." }],
                },
              ],
            },
            {
              code: "0406.30",
              title: "Queso fundido, excepto el rallado o en polvo.",
              classifications: [
                {
                  code: "0406.30.01",
                  title: "Queso fundido.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Queso fundido." }],
                },
              ],
            },
            {
              code: "0406.40",
              title:
                "Queso de pasta azul y demás quesos que presenten vetas producidas por Penicillium roqueforti.",
              classifications: [
                {
                  code: "0406.40.01",
                  title: "Queso de pasta azul.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL"],
                  nicos: [{ code: "00", title: "Queso de pasta azul." }],
                },
              ],
            },
            {
              code: "0406.90",
              title: "Los demás quesos.",
              classifications: [
                {
                  code: "0406.90.99",
                  title: "Los demás quesos.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Los demás quesos." }],
                },
              ],
            },
          ],
        },
        {
          code: "04.07",
          title:
            "Huevos de ave con cáscara (cascarón), frescos, conservados o cocidos.",
          subheadings: [
            {
              code: "0407.11",
              title: "De gallina de la especie Gallus domesticus.",
              classifications: [
                {
                  code: "0407.11.01",
                  title: "Huevos fértiles para incubación.",
                  umt: "Cpz",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    { code: "00", title: "Huevos fértiles para incubación." },
                  ],
                },
                {
                  code: "0407.11.99",
                  title: "Los demás.",
                  umt: "Cpz",
                  importDuty: 75,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0407.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "0407.19.99",
                  title: "Los demás.",
                  umt: "Cpz",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0407.21",
              title: "De gallina de la especie Gallus domesticus.",
              classifications: [
                {
                  code: "0407.21.01",
                  title: "De gallina de la especie Gallus domesticus.",
                  umt: "Cpz",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "De gallina de la especie Gallus domesticus.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0407.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "0407.29.99",
                  title: "Los demás.",
                  umt: "Cpz",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0407.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0407.90.99",
                  title: "Los demás.",
                  umt: "Cpz",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "04.08",
          title:
            "Huevos de ave sin cáscara (cascarón) y yemas de huevo, frescos, secos, cocidos en agua o vapor, moldeados, congelados o conservados de otro modo, incluso con adición de azúcar u otro edulcorante.",
          subheadings: [
            {
              code: "0408.11",
              title: "Secas.",
              classifications: [
                {
                  code: "0408.11.01",
                  title: "Secas.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Secas." }],
                },
              ],
            },
            {
              code: "0408.19",
              title: "Las demás.",
              classifications: [
                {
                  code: "0408.19.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "0408.91",
              title: "Secas.",
              classifications: [
                {
                  code: "0408.91.01",
                  title: "Secas.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Secas." }],
                },
              ],
            },
            {
              code: "0408.99",
              title: "Las demás.",
              classifications: [
                {
                  code: "0408.99.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "04.09",
          title: "Miel natural.",
          subheadings: [
            {
              code: "0409.00",
              title: "Miel natural.",
              classifications: [
                {
                  code: "0409.00.01",
                  title: "Miel natural.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Miel natural." }],
                },
              ],
            },
          ],
        },
        {
          code: "04.10",
          title:
            "Insectos y demás productos comestibles de origen animal no expresados ni comprendidos en otra parte.",
          subheadings: [
            {
              code: "0410.10",
              title: "Insectos.",
              classifications: [
                {
                  code: "0410.10.01",
                  title: "Insectos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Insectos." }],
                },
              ],
            },
            {
              code: "0410.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0410.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "05",
      title:
        "Los demás productos de origen animal no expresados ni comprendidos en otra parte",
      notes: {
        legales: [
          {
            id: "NL-CAP05-1",
            text: "Este Capítulo no comprende: a) los productos comestibles, excepto las tripas, vejigas y estómagos de animales, enteros o en trozos, y la sangre animal (líquida o desecada); b) los cueros, pieles y peletería, excepto los productos de la partida 05.05 y los recortes y desperdicios similares de pieles en bruto de la partida 05.11 (Capítulos 41 o 43); c) las materias primas textiles de origen animal, excepto la crin y los desperdicios de crin (Sección XI); d) las cabezas preparadas para artículos de cepillería (partida 96.03).",
          },
          {
            id: "NL-CAP05-2",
            text: "En la partida 05.01 también se considera cabello en bruto el extendido longitudinalmente, pero sin colocarlo en el mismo sentido.",
          },
          {
            id: "NL-CAP05-3",
            text: "En la Nomenclatura, se considera marfil la materia de las defensas de elefante, hipopótamo, morsa, narval o jabalí y los cuernos de rinoceronte, así como los dientes de todos los animales.",
          },
          {
            id: "NL-CAP05-4",
            text: "En la Nomenclatura, se considera crin tanto el pelo de la crin como el de la cola de los équidos o de los bóvidos. La partida 05.11 comprende, entre otros, la crin y sus desperdicios, incluso en napas con o sin soporte.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "05.01",
          title:
            "Cabello en bruto, incluso lavado o desgrasado; desperdicios de cabello.",
          subheadings: [
            {
              code: "0501.00",
              title:
                "Cabello en bruto, incluso lavado o desgrasado; desperdicios de cabello.",
              classifications: [
                {
                  code: "0501.00.01",
                  title:
                    "Cabello en bruto, incluso lavado o desgrasado; desperdicios de cabello.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cabello en bruto, incluso lavado o desgrasado; desperdicios de cabello.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "05.02",
          title:
            "Cerdas de cerdo o de jabalí; pelo de tejón y demás pelos para cepillería; desperdicios de dichas cerdas o pelos.",
          subheadings: [
            {
              code: "0502.10",
              title: "Cerdas de cerdo o de jabalí y sus desperdicios.",
              classifications: [
                {
                  code: "0502.10.01",
                  title: "Cerdas de cerdo o de jabalí y sus desperdicios.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Cerdas de cerdo o de jabalí y sus desperdicios.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0502.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0502.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "05.04",
          title:
            "Tripas, vejigas y estómagos de animales, excepto los de pescado, enteros o en trozos, frescos, refrigerados, congelados, salados o en salmuera, secos o ahumados.",
          subheadings: [
            {
              code: "0504.00",
              title:
                "Tripas, vejigas y estómagos de animales, excepto los de pescado, enteros o en trozos, frescos, refrigerados, congelados, salados o en salmuera, secos o ahumados.",
              classifications: [
                {
                  code: "0504.00.91",
                  title: "Tripas, vejigas y estómagos de animales.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Tripas, vejigas y estómagos de animales.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "05.05",
          title:
            "Pieles y demás partes de ave, con sus plumas o plumón, plumas y partes de plumas (incluso recortadas) y plumón, en bruto o simplemente limpiados, desinfectados o preparados para su conservación; polvo y desperdicios de plumas o de partes de plumas.",
          subheadings: [
            {
              code: "0505.10",
              title: "Plumas de las utilizadas para relleno; plumón.",
              classifications: [
                {
                  code: "0505.10.01",
                  title: "Plumas de las utilizadas para relleno; plumón.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Plumas de las utilizadas para relleno; plumón.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0505.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0505.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "05.06",
          title:
            "Huesos y núcleos córneos, en bruto, desgrasados, simplemente preparados (pero sin cortar en forma determinada), acidulados o desgelatinizados; polvo y desperdicios de estas materias.",
          subheadings: [
            {
              code: "0506.10",
              title: "Oseína y huesos acidulados.",
              classifications: [
                {
                  code: "0506.10.01",
                  title: "Oseína y huesos acidulados.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Oseína y huesos acidulados." }],
                },
              ],
            },
            {
              code: "0506.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0506.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "05.07",
          title:
            "Marfil, concha (caparazón) de tortuga, ballenas de mamíferos marinos (incluidas las barbas), cuernos, astas, cascos, pezuñas, uñas, garras y picos, en bruto o simplemente preparados, pero sin cortar en forma determinada; polvo y desperdicios de estas materias.",
          subheadings: [
            {
              code: "0507.10",
              title: "Marfil; polvo y desperdicios de marfil.",
              classifications: [
                {
                  code: "0507.10.01",
                  title: "Marfil; polvo y desperdicios de marfil.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Marfil; polvo y desperdicios de marfil.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0507.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0507.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "05.08",
          title:
            "Coral y materias similares, en bruto o simplemente preparados, pero sin otro trabajo; valvas y caparazones de moluscos, crustáceos o equinodermos, y jibiones, en bruto o simplemente preparados, pero sin cortar en forma determinada, incluso en polvo y desperdicios.",
          subheadings: [
            {
              code: "0508.00",
              title: "Coral y materias similares.",
              classifications: [
                {
                  code: "0508.00.01",
                  title: "Coral y materias similares.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Coral y materias similares." }],
                },
              ],
            },
          ],
        },
        {
          code: "05.10",
          title:
            "Ámbar gris, castóreo, algalia y almizcle; cantáridas; bilis, incluso desecada; glándulas y demás sustancias de origen animal utilizadas para la preparación de productos farmacéuticos, frescas, refrigeradas, congeladas o conservadas provisionalmente de otra forma.",
          subheadings: [
            {
              code: "0510.00",
              title:
                "Ámbar gris, castóreo, algalia y almizcle; cantáridas; bilis.",
              classifications: [
                {
                  code: "0510.00.01",
                  title:
                    "Ámbar gris, castóreo, algalia y almizcle; cantáridas; bilis.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Ámbar gris, castóreo, algalia y almizcle; cantáridas; bilis.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "05.11",
          title:
            "Productos de origen animal no expresados ni comprendidos en otra parte; animales muertos de los Capítulos 01 o 03, impropios para la alimentación humana.",
          subheadings: [
            {
              code: "0511.10",
              title: "Semen de bovino.",
              classifications: [
                {
                  code: "0511.10.01",
                  title: "Semen de bovino.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Semen de bovino." }],
                },
              ],
            },
            {
              code: "0511.91",
              title:
                "Productos de pescado o de crustáceos, moluscos o demás invertebrados acuáticos; animales muertos del Capítulo 03.",
              classifications: [
                {
                  code: "0511.91.01",
                  title: "Productos de pescado o de crustáceos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Productos de pescado o de crustáceos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0511.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "0511.99.01",
                  title: "Embriones.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Embriones." }],
                },
                {
                  code: "0511.99.03",
                  title: "Semen.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Semen." }],
                },
                {
                  code: "0511.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
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
