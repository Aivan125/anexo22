import { Section } from "@/types/clasificacion-arancelaria";

export const sectionVIII: Section = {
  code: "VIII",
  title:
    "PIELES, CUEROS, PELETERÍA Y MANUFACTURAS DE ESTAS MATERIAS; ARTÍCULOS DE TALABARTERÍA O GUARNICIONERÍA; ARTÍCULOS DE VIAJE, BOLSOS DE MANO (CARTERAS) Y CONTINENTES SIMILARES; MANUFACTURAS DE TRIPA",
  notes: {
    legales: [],
    nacionales: [],
    explicativas: [],
  },
  chapters: [
    // =========================
    // Capítulo 41
    // =========================
    {
      code: "41",
      title: "Pieles (excepto la peletería) y cueros",
      notes: {
        legales: [
          {
            id: "NL-CAP41-1",
            text: "Este Capítulo no comprende: a) los recortes y desperdicios similares de cueros y pieles en bruto (partida 05.11); b) las pieles y partes de pieles de ave, con sus plumas o plumón (partidas 05.05 o 67.01, según los casos); c) los cueros y pieles en bruto, curtidos o adobados, sin depilar, de animales de pelo (Capítulo 43). Sin embargo, se clasifican en este Capítulo las pieles en bruto sin depilar de bovino (incluidas las de búfalo), de equino, ovino (excepto las de cordero llamadas astracán, “Breitschwanz”, “caracul”, “persa” o similares y las pieles de cordero de Indias, de China, de Mongolia o del Tíbet), de caprino (excepto las de cabra, cabritilla o cabrito del Yemen, de Mongolia o del Tíbet), de porcino (incluidas las de pecarí), de gamuza, gacela, camello, dromedario, reno, alce, ciervo, corzo o perro.",
          },
          {
            id: "NL-CAP41-2",
            text: "A) Las partidas 41.04 a 41.06 no comprenden los cueros y pieles que hayan sufrido un proceso de curtido (incluido el precurtido) reversible (partidas 41.01 a 41.03, según el caso). B) En las partidas 41.04 a 41.06 la expresión “crust” incluye cueros y pieles que han sido recurtidos, coloreados o engrasados en baño, previo al secado.",
          },
          {
            id: "NL-CAP41-3",
            text: "En la Nomenclatura, la expresión cuero regenerado se refiere a las materias comprendidas en la partida 41.15.",
          },
        ],
        subpartida: [],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "41.01",
          title:
            "Cueros y pieles en bruto, de bovino (incluido el búfalo) o de equino (frescos o salados, secos, encalados, piquelados o conservados de otro modo, pero sin curtir, apergaminar ni preparar de otra forma), incluso depilados o divididos.",
          subheadings: [
            {
              code: "4101.20",
              title:
                "Cueros y pieles enteros, sin dividir, de peso unitario inferior o igual a 8 kg para los secos, a 10 kg para los salados secos y a 16 kg para los frescos, salados verdes (húmedos) o conservados de otro modo.",
              classifications: [
                {
                  code: "4101.20.03",
                  title:
                    "Cueros y pieles enteros, sin dividir, de peso unitario inferior o igual a 8 kg para los secos, a 10 kg para los salados secos y a 16 kg para los frescos, salados verdes (húmedos) o conservados de otro modo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [
                    { code: "01", title: "De bovino." },
                    { code: "02", title: "De equino." },
                  ],
                },
              ],
            },
            {
              code: "4101.50",
              title:
                "Cueros y pieles enteros, de peso unitario superior a 16 kg.",
              classifications: [
                {
                  code: "4101.50.03",
                  title:
                    "Cueros y pieles enteros, de peso unitario superior a 16 kg.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    {
                      code: "01",
                      title: "De bovino frescos o salados verdes (húmedos).",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4101.90",
              title:
                "Los demás, incluidos los crupones, medios crupones y faldas.",
              classifications: [
                {
                  code: "4101.90.91",
                  title:
                    "Los demás, incluidos los crupones, medios crupones y faldas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [
                    { code: "01", title: "De equino." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "41.02",
          title:
            "Cueros y pieles en bruto, de ovino (frescos o salados, secos, encalados, piquelados o conservados de otro modo, pero sin curtir, apergaminar ni preparar de otra forma), incluso depilados o divididos, excepto los excluidos por la Nota 1 c) de este Capítulo.",
          subheadings: [
            {
              code: "4102.10",
              title: "Con lana.",
              classifications: [
                {
                  code: "4102.10.01",
                  title: "Con lana.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [{ code: "00", title: "Con lana." }],
                },
              ],
            },
            {
              code: "4102.21",
              title: "Piquelados.",
              classifications: [
                {
                  code: "4102.21.01",
                  title: "Piquelados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [{ code: "00", title: "Piquelados." }],
                },
              ],
            },
            {
              code: "4102.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "4102.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },

        {
          code: "41.03",
          title:
            "Los demás cueros y pieles en bruto (frescos o salados, secos, encalados, piquelados o conservados de otro modo, pero sin curtir, apergaminar ni preparar de otra forma), incluso depilados o divididos, excepto los excluidos por las Notas 1 b) o 1 c) de este Capítulo.",
          subheadings: [
            {
              code: "4103.20",
              title: "De reptil.",
              classifications: [
                {
                  code: "4103.20.01",
                  title: "De caimán, cocodrilo o lagarto.",
                  umt: "Cbza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    { code: "00", title: "De caimán, cocodrilo o lagarto." },
                  ],
                },
                {
                  code: "4103.20.02",
                  title: "De tortuga o caguama.",
                  umt: "",
                  importDuty: "Prohibida",
                  exportDuty: "Prohibida",
                  regimenes: ["Prohibida"],
                  nicos: [],
                },
                {
                  code: "4103.20.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4103.30",
              title: "De porcino.",
              classifications: [
                {
                  code: "4103.30.01",
                  title: "De porcino.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "De porcino." }],
                },
              ],
            },
            {
              code: "4103.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4103.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    { code: "01", title: "De caprino." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "41.04",
          title:
            'Cueros y pieles curtidos o "crust", de bovino (incluido el búfalo) o de equino, depilados, incluso divididos pero sin otra preparación.',
          subheadings: [
            {
              code: "4104.11",
              title:
                'Plena flor sin dividir; divididos con la flor (en estado húmedo, incluido el "wet-blue").',
              classifications: [
                {
                  code: "4104.11.04",
                  title: "Plena flor sin dividir; divididos con la flor.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Enteros, de bovino, con una superficie por unidad inferior o igual a 2.6 m² (28 pies cuadrados).",
                    },
                    {
                      code: "02",
                      title:
                        'De bovino, precurtidos al cromo húmedo ("wet-blue"), excepto lo comprendido en el número de identificación comercial 4104.11.04.01.',
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4104.19",
              title: "Los demás (en estado húmedo, incluido el “wet-blue”).",
              classifications: [
                {
                  code: "4104.19.99",
                  title: "Los demás.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        'De bovino, precurtidos al cromo húmedo ("wet-blue"), excepto enteros, con una superficie por unidad inferior o igual a 2.6 m² (28 pies cuadrados).',
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4104.41",
              title:
                'Plena flor sin dividir; divididos con la flor (en estado seco "crust").',
              classifications: [
                {
                  code: "4104.41.02",
                  title: "Plena flor sin dividir; divididos con la flor.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Enteros, de bovino, con una superficie por unidad inferior o igual a 2.6 m² (28 pies cuadrados).",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4104.49",
              title: 'Los demás (en estado seco "crust").',
              classifications: [
                {
                  code: "4104.49.99",
                  title: "Los demás.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Enteros, de bovino, con una superficie por unidad inferior o igual a 2.6 m² (28 pies cuadrados).",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "41.05",
          title:
            'Pieles curtidas o "crust", de ovino, depiladas, incluso divididas pero sin otra preparación.',
          subheadings: [
            {
              code: "4105.10",
              title: 'En estado húmedo (incluido el "wet-blue").',
              classifications: [
                {
                  code: "4105.10.04",
                  title: 'En estado húmedo (incluido el "wet-blue").',
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SAD", "SEM"],
                  nicos: [
                    { code: "01", title: "Preparadas al cromo." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "4105.30",
              title: 'En estado seco ("crust").',
              classifications: [
                {
                  code: "4105.30.01",
                  title: 'En estado seco ("crust").',
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: 'En estado seco ("crust").' }],
                },
              ],
            },
          ],
        },

        {
          code: "41.06",
          title:
            'Cueros y pieles depilados de los demás animales y pieles de animales sin pelo, curtidos o "crust", incluso divididos pero sin otra preparación.',
          subheadings: [
            {
              code: "4106.21",
              title: "De caprino: En estado húmedo (incluido el “wet-blue”).",
              classifications: [
                {
                  code: "4106.21.04",
                  title: "En estado húmedo (incluido el “wet-blue”).",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SAD", "SEM"],
                  nicos: [
                    { code: "01", title: "Preparados al cromo." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "4106.22",
              title: 'De caprino: En estado seco ("crust").',
              classifications: [
                {
                  code: "4106.22.01",
                  title: 'En estado seco ("crust").',
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: 'En estado seco ("crust").' }],
                },
              ],
            },
            {
              code: "4106.31",
              title: 'De porcino: En estado húmedo (incluido el "wet-blue").',
              classifications: [
                {
                  code: "4106.31.01",
                  title: 'En estado húmedo (incluido el "wet-blue").',
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title: 'En estado húmedo (incluido el "wet-blue").',
                    },
                  ],
                },
              ],
            },
            {
              code: "4106.32",
              title: 'De porcino: En estado seco ("crust").',
              classifications: [
                {
                  code: "4106.32.01",
                  title: 'En estado seco ("crust").',
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: 'En estado seco ("crust").' }],
                },
              ],
            },
            {
              code: "4106.40",
              title: "De reptil.",
              classifications: [
                {
                  code: "4106.40.02",
                  title: "De reptil.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "De reptil." }],
                },
              ],
            },
            {
              code: "4106.91",
              title: 'Los demás: En estado húmedo (incluido el "wet-blue").',
              classifications: [
                {
                  code: "4106.91.01",
                  title: 'En estado húmedo (incluido el "wet-blue").',
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: 'En estado húmedo (incluido el "wet-blue").',
                    },
                  ],
                },
              ],
            },
            {
              code: "4106.92",
              title: 'Los demás: En estado seco ("crust").',
              classifications: [
                {
                  code: "4106.92.01",
                  title: 'En estado seco ("crust").',
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
                  nicos: [{ code: "00", title: 'En estado seco ("crust").' }],
                },
              ],
            },
          ],
        },

        {
          code: "41.07",
          title:
            "Cueros preparados después del curtido o del secado y cueros y pieles apergaminados, de bovino (incluido el búfalo) o equino, depilados, incluso divididos, excepto los de la partida 41.14.",
          subheadings: [
            {
              code: "4107.11",
              title: "Cueros y pieles enteros: Plena flor sin dividir.",
              classifications: [
                {
                  code: "4107.11.02",
                  title: "Plena flor sin dividir.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "De bovino, con una superficie por unidad inferior o igual a 2.6 m² (28 pies cuadrados).",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4107.12",
              title: "Cueros y pieles enteros: Divididos con la flor.",
              classifications: [
                {
                  code: "4107.12.02",
                  title: "Divididos con la flor.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "De bovino, con una superficie por unidad inferior o igual a 2.6 m² (28 pies cuadrados).",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4107.19",
              title: "Cueros y pieles enteros: Los demás.",
              classifications: [
                {
                  code: "4107.19.99",
                  title: "Los demás.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },

            {
              code: "4107.91",
              title: "Los demás, incluidas las hojas: Plena flor sin dividir.",
              classifications: [
                {
                  code: "4107.91.01",
                  title: "Plena flor sin dividir.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Plena flor sin dividir." }],
                },
              ],
            },
            {
              code: "4107.92",
              title: "Los demás, incluidas las hojas: Divididos con la flor.",
              classifications: [
                {
                  code: "4107.92.01",
                  title: "Divididos con la flor.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Divididos con la flor." }],
                },
              ],
            },
            {
              code: "4107.99",
              title: "Los demás, incluidas las hojas: Los demás.",
              classifications: [
                {
                  code: "4107.99.99",
                  title: "Los demás.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },

        {
          code: "41.12",
          title:
            "Cueros preparados después del curtido o secado y cueros y pieles apergaminados, de ovino, depilados, incluso divididos, excepto los de la partida 41.14.",
          subheadings: [
            {
              code: "4112.00",
              title:
                "Cueros preparados después del curtido o secado y cueros y pieles apergaminados, de ovino, depilados, incluso divididos, excepto los de la partida 41.14.",
              classifications: [
                {
                  code: "4112.00.01",
                  title:
                    "Cueros preparados después del curtido o secado y cueros y pieles apergaminados, de ovino, depilados, incluso divididos, excepto los de la partida 41.14.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cueros preparados después del curtido o secado y cueros y pieles apergaminados, de ovino, depilados, incluso divididos, excepto los de la partida 41.14.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "41.13",
          title:
            "Cueros preparados después del curtido o secado y cueros y pieles apergaminados, de los demás animales, depilados, y cueros preparados después del curtido y cueros y pieles apergaminados, de animales sin pelo, incluso los divididos, excepto los de la partida 41.14.",
          subheadings: [
            {
              code: "4113.10",
              title: "De caprino.",
              classifications: [
                {
                  code: "4113.10.01",
                  title: "De caprino.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
                  nicos: [{ code: "00", title: "De caprino." }],
                },
              ],
            },
            {
              code: "4113.20",
              title: "De porcino.",
              classifications: [
                {
                  code: "4113.20.01",
                  title: "De porcino.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
                  nicos: [{ code: "00", title: "De porcino." }],
                },
              ],
            },
            {
              code: "4113.30",
              title: "De reptil.",
              classifications: [
                {
                  code: "4113.30.01",
                  title: "De reptil.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
                  nicos: [{ code: "00", title: "De reptil." }],
                },
              ],
            },
            {
              code: "4113.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4113.90.99",
                  title: "Los demás.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
                  nicos: [
                    { code: "01", title: "De avestruz o de mantarraya." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "41.14",
          title:
            "Cueros y pieles agamuzados (incluido el agamuzado combinado al aceite); cueros y pieles charolados y sus imitaciones de cueros o pieles chapados; cueros y pieles metalizados.",
          subheadings: [
            {
              code: "4114.10",
              title:
                "Cueros y pieles agamuzados (incluido el agamuzado combinado al aceite).",
              classifications: [
                {
                  code: "4114.10.01",
                  title:
                    "Cueros y pieles agamuzados (incluido el agamuzado combinado al aceite).",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cueros y pieles agamuzados (incluido el agamuzado combinado al aceite).",
                    },
                  ],
                },
              ],
            },
            {
              code: "4114.20",
              title:
                "Cueros y pieles charolados y sus imitaciones de cueros o pieles chapados; cueros y pieles metalizados.",
              classifications: [
                {
                  code: "4114.20.01",
                  title:
                    "Cueros y pieles charolados y sus imitaciones de cueros o pieles chapados; cueros y pieles metalizados.",
                  umt: "M²",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cueros y pieles charolados y sus imitaciones de cueros o pieles chapados; cueros y pieles metalizados.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "41.15",
          title:
            "Cuero regenerado a base de cuero o fibras de cuero, en placas, hojas o tiras, incluso enrolladas; recortes y demás desperdicios de cuero o piel, preparados, o de cuero regenerado, no utilizables para la fabricación de manufacturas de cuero; aserrín, polvo y harina de cuero.",
          subheadings: [
            {
              code: "4115.10",
              title:
                "Cuero regenerado a base de cuero o fibras de cuero, en placas, hojas o tiras, incluso enrolladas.",
              classifications: [
                {
                  code: "4115.10.01",
                  title:
                    "Cuero regenerado a base de cuero o fibras de cuero, en placas, hojas o tiras, incluso enrolladas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cuero regenerado a base de cuero o fibras de cuero, en placas, hojas o tiras, incluso enrolladas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4115.20",
              title:
                "Recortes y demás desperdicios de cuero o piel, preparados, o de cuero regenerado, no utilizables para la fabricación de manufacturas de cuero; aserrín, polvo y harina de cuero.",
              classifications: [
                {
                  code: "4115.20.01",
                  title:
                    "Recortes y demás desperdicios de cuero o piel, preparados, o de cuero regenerado, no utilizables para la fabricación de manufacturas de cuero; aserrín, polvo y harina de cuero.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Recortes y demás desperdicios de cuero o piel, preparados, o de cuero regenerado, no utilizables para la fabricación de manufacturas de cuero; aserrín, polvo y harina de cuero.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // =========================
    // Capítulo 42
    // =========================
    {
      code: "42",
      title:
        "Manufacturas de cuero; artículos de talabartería o guarnicionería; artículos de viaje, bolsos de mano (carteras) y continentes similares; manufacturas de tripa",
      notes: {
        legales: [
          {
            id: "NL-CAP42-1",
            text: "En este Capítulo, la expresión cuero natural comprende también los cueros y pieles agamuzados (incluido el agamuzado combinado al aceite), los cueros y pieles charolados y sus imitaciones de cueros o pieles chapados y los cueros y pieles metalizados.",
          },
          {
            id: "NL-CAP42-2",
            text: "Este Capítulo no comprende: a) los catguts estériles y las ligaduras estériles similares para suturas quirúrgicas (partida 30.06); b) las prendas y complementos (accesorios), de vestir (excepto los guantes, mitones y manoplas), de cuero o piel, forrados interiormente con peletería natural o peletería facticia o artificial, así como las prendas y complementos (accesorios), de vestir, de cuero o piel con partes exteriores de peletería natural o peletería facticia o artificial, cuando éstas superen el papel de simples guarniciones (partidas 43.03 o 43.04, según los casos); c) los artículos confeccionados con redes de la partida 56.08; d) los artículos del Capítulo 64; e) los sombreros, demás tocados, y sus partes, del Capítulo 65; f) los látigos, fustas y demás artículos de la partida 66.02; g) los gemelos, pulseras y demás artículos de bisutería (partida 71.17); h) los accesorios y guarniciones de talabartería o guarnicionería (por ejemplo: frenos, estribos, hebillas), presentados aisladamente (Sección XV, generalmente); ij) las cuerdas armónicas, parches de tambor o de instrumentos similares y demás partes de instrumentos musicales (partida 92.09); k) los artículos del Capítulo 94 (por ejemplo: muebles, luminarias y aparatos de alumbrado); l) los artículos del Capítulo 95 (por ejemplo: juguetes, juegos, artefactos deportivos); m) los botones, botones de presión, formas para botones y demás partes de botones o de botones de presión y esbozos de botones, de la partida 96.06.",
          },
          {
            id: "NL-CAP42-3",
            text: "A) Además de lo dispuesto en la Nota 2 anterior, la partida 42.02 no comprende: a) las bolsas de hojas de plástico, con asas, no concebidas para un uso prolongado, incluso impresas (partida 39.23); b) los artículos de materia trenzable (partida 46.02). B) Las manufacturas comprendidas en las partidas 42.02 y 42.03 con partes de metal precioso o de chapados de metal precioso (plaqué), de perlas naturales (finas) o cultivadas o de piedras preciosas o semipreciosas (naturales, sintéticas o reconstituidas) permanecen incluidas en estas partidas, incluso si dichas partes exceden la función de simples accesorios o adornos de mínima importancia, siempre que tales partes no confieran a las manufacturas su carácter esencial. Si, por el contrario, esas partes confieren a las manufacturas su carácter esencial, éstas deben clasificarse en el Capítulo 71.",
          },
          {
            id: "NL-CAP42-4",
            text: "En la partida 42.03, la expresión prendas y complementos (accesorios), de vestir se refiere, entre otros, a los guantes, mitones y manoplas (incluidos los de deporte y los de protección), a los delantales y demás equipos especiales de protección individual para cualquier oficio, a los tirantes (tiradores), cinturones, bandoleras, brazaletes y muñequeras, excepto las pulseras para relojes (partida 91.13).",
          },
        ],
        subpartida: [],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "42.01",
          title:
            "Artículos de talabartería o guarnicionería para todos los animales (incluidos los tiros, traíllas, rodilleras, bozales, sudaderos, alforjas, abrigos para perros y artículos similares), de cualquier materia.",
          subheadings: [
            {
              code: "4201.00",
              title:
                "Artículos de talabartería o guarnicionería para todos los animales (incluidos los tiros, traíllas, rodilleras, bozales, sudaderos, alforjas, abrigos para perros y artículos similares), de cualquier materia.",
              classifications: [
                {
                  code: "4201.00.01",
                  title:
                    "Artículos de talabartería o guarnicionería para todos los animales (incluidos los tiros, traíllas, rodilleras, bozales, sudaderos, alforjas, abrigos para perros y artículos similares), de cualquier materia.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Artículos de talabartería o guarnicionería para todos los animales (incluidos los tiros, traíllas, rodilleras, bozales, sudaderos, alforjas, abrigos para perros y artículos similares), de cualquier materia.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "42.02",
          title:
            "Baúles, maletas (valijas), maletines, incluidos los de aseo y los portadocumentos, portafolios (carteras de mano), cartapacios, fundas y estuches para gafas (anteojos), binoculares, cámaras fotográficas o cinematográficas, instrumentos musicales o armas y continentes similares; sacos de viaje, bolsas (sacos) aislantes para alimentos y bebidas, bolsas de aseo, mochilas, bolsos de mano (carteras), bolsas para la compra, billeteras, portamonedas, portamapas, petacas, pitilleras y bolsas para tabaco, bolsas para herramientas y para artículos de deporte, estuches para frascos y botellas, estuches para joyas, polveras, estuches para orfebrería y continentes similares, de cuero natural o regenerado, hojas de plástico, materia textil, fibra vulcanizada o cartón, o recubiertos totalmente o en su mayor parte con esas materias o papel.",
          subheadings: [
            {
              code: "4202.11",
              title:
                "Con la superficie exterior de cuero natural o cuero regenerado.",
              classifications: [
                {
                  code: "4202.11.01",
                  title:
                    "Con la superficie exterior de cuero natural o cuero regenerado.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [
                    { code: "01", title: "Maletas, portafolios y similares." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4202.12",
              title: "Con la superficie exterior de plástico o materia textil.",
              classifications: [
                {
                  code: "4202.12.03",
                  title:
                    "Con la superficie exterior de plástico o materia textil.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "NOM", "EMB"],
                  nicos: [
                    { code: "03", title: "Maletas, portafolios y similares." },
                    {
                      code: "91",
                      title:
                        "Los demás con la superficie exterior de plástico.",
                    },
                    {
                      code: "92",
                      title:
                        "Los demás con la superficie exterior de materia textil.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4202.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "4202.19.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [
                    { code: "01", title: "Maletas, portafolios y similares." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },

            {
              code: "4202.21",
              title:
                "Bolsos de mano (carteras), incluso con bandolera o sin asas: Con la superficie exterior de cuero natural o cuero regenerado.",
              classifications: [
                {
                  code: "4202.21.01",
                  title:
                    "Con la superficie exterior de cuero natural o cuero regenerado.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Con la superficie exterior de cuero natural o cuero regenerado.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4202.22",
              title:
                "Bolsos de mano (carteras): Con la superficie exterior de hojas de plástico o materia textil.",
              classifications: [
                {
                  code: "4202.22.03",
                  title:
                    "Con la superficie exterior de hojas de plástico o materia textil.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title: "Con la superficie exterior de hojas de plástico.",
                    },
                    {
                      code: "02",
                      title: "Con la superficie exterior de materia textil.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4202.29",
              title: "Bolsos de mano (carteras): Los demás.",
              classifications: [
                {
                  code: "4202.29.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },

            {
              code: "4202.31",
              title:
                "Artículos de bolsillo o de bolso de mano (cartera): Con la superficie exterior de cuero natural o cuero regenerado.",
              classifications: [
                {
                  code: "4202.31.01",
                  title:
                    "Con la superficie exterior de cuero natural o cuero regenerado.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Con la superficie exterior de cuero natural o cuero regenerado.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4202.32",
              title:
                "Artículos de bolsillo o de bolso de mano (cartera): Con la superficie exterior de hojas de plástico o materia textil.",
              classifications: [
                {
                  code: "4202.32.03",
                  title:
                    "Con la superficie exterior de hojas de plástico o materia textil.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title: "Con la superficie exterior de hojas de plástico.",
                    },
                    {
                      code: "02",
                      title: "Con la superficie exterior de materia textil.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4202.39",
              title:
                "Artículos de bolsillo o de bolso de mano (cartera): Los demás.",
              classifications: [
                {
                  code: "4202.39.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },

            {
              code: "4202.91",
              title:
                "Los demás: Con la superficie exterior de cuero natural o cuero regenerado.",
              classifications: [
                {
                  code: "4202.91.01",
                  title:
                    "Con la superficie exterior de cuero natural o cuero regenerado.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Con la superficie exterior de cuero natural o cuero regenerado.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4202.92",
              title:
                "Los demás: Con la superficie exterior de hojas de plástico o materia textil.",
              classifications: [
                {
                  code: "4202.92.04",
                  title:
                    "Con la superficie exterior de hojas de plástico o materia textil.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Con la superficie exterior de hojas de plástico, excepto lo comprendido en el número de identificación comercial 4202.92.04.03.",
                    },
                    {
                      code: "02",
                      title:
                        "Con la superficie exterior de materia textil, excepto lo comprendido en el número de identificación comercial 4202.92.04.03.",
                    },
                    {
                      code: "03",
                      title:
                        'Bolsas o fundas, utilizadas para contener llaves de cubo y/o un "gato", reconocibles como concebidas exclusivamente para uso automotriz.',
                    },
                  ],
                },
              ],
            },
            {
              code: "4202.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "4202.99.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },

        {
          code: "42.03",
          title:
            "Prendas y complementos (accesorios), de vestir, de cuero natural o cuero regenerado.",
          subheadings: [
            {
              code: "4203.10",
              title: "Prendas de vestir.",
              classifications: [
                {
                  code: "4203.10.01",
                  title: "Para protección contra radiaciones.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Para protección contra radiaciones.",
                    },
                  ],
                },
                {
                  code: "4203.10.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Chamarras, chaquetas, sacos, cazadoras, blazer, abrigos y chalecos.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "4203.21",
              title:
                "Guantes, mitones y manoplas: Diseñados especialmente para la práctica del deporte.",
              classifications: [
                {
                  code: "4203.21.01",
                  title:
                    "Diseñados especialmente para la práctica del deporte.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Diseñados especialmente para la práctica del deporte.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4203.29",
              title: "Guantes, mitones y manoplas: Los demás.",
              classifications: [
                {
                  code: "4203.29.01",
                  title: "Para protección contra radiaciones.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Para protección contra radiaciones.",
                    },
                  ],
                },
                {
                  code: "4203.29.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [
                    "FR_II",
                    "CHT",
                    "PS5",
                    "PS4",
                    "NOM",
                    "EMB",
                    "SEM",
                  ],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "4203.30",
              title: "Cintos, cinturones y bandoleras.",
              classifications: [
                {
                  code: "4203.30.02",
                  title: "Cintos, cinturones y bandoleras.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [
                    { code: "00", title: "Cintos, cinturones y bandoleras." },
                  ],
                },
              ],
            },
            {
              code: "4203.40",
              title: "Los demás complementos (accesorios) de vestir.",
              classifications: [
                {
                  code: "4203.40.01",
                  title: "Para protección contra radiaciones.",
                  umt: "Pza",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Para protección contra radiaciones.",
                    },
                  ],
                },
                {
                  code: "4203.40.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS4", "NOM", "EMB", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },

        {
          code: "42.05",
          title: "Las demás manufacturas de cuero natural o cuero regenerado.",
          subheadings: [
            {
              code: "4205.00",
              title:
                "Las demás manufacturas de cuero natural o cuero regenerado.",
              classifications: [
                {
                  code: "4205.00.02",
                  title:
                    "Artículos para usos técnicos de cuero natural o cuero regenerado.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Artículos para usos técnicos de cuero natural o cuero regenerado.",
                    },
                  ],
                },
                {
                  code: "4205.00.99",
                  title: "Las demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS5", "PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Partes cortadas en forma, reconocibles como concebidas exclusivamente para cinturones portaherramientas.",
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "42.06",
          title: "Manufacturas de tripa, vejigas o tendones.",
          subheadings: [
            {
              code: "4206.00",
              title: "Manufacturas de tripa, vejigas o tendones.",
              classifications: [
                {
                  code: "4206.00.01",
                  title:
                    "Catgut, incluso cromado, con diámetro superior o igual a 0.10 mm, sin exceder de 0.89 mm.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Catgut, incluso cromado, con diámetro superior o igual a 0.10 mm, sin exceder de 0.89 mm.",
                    },
                  ],
                },
                {
                  code: "4206.00.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
      ],
    },

    // =========================
    // Capítulo 43
    // =========================
    {
      code: "43",
      title:
        "Peletería y confecciones de peletería; peletería facticia o artificial",
      notes: {
        legales: [
          {
            id: "NL-CAP43-1",
            text: "Independientemente de la peletería en bruto de la partida 43.01, en la Nomenclatura, el término peletería abarca las pieles de todos los animales curtidas o adobadas, sin depilar.",
          },
          {
            id: "NL-CAP43-2",
            text: "Este Capítulo no comprende: a) las pieles y partes de pieles de ave con sus plumas o plumón (partidas 05.05 o 67.01, según los casos); b) los cueros y pieles, en bruto, sin depilar, de la naturaleza de los clasificados en el Capítulo 41 en virtud de la Nota 1 c) de dicho Capítulo; c) los guantes, mitones y manoplas, confeccionados a la vez con peletería natural o peletería facticia o artificial y con cuero (partida 42.03); d) los artículos del Capítulo 64; e) los sombreros, demás tocados, y sus partes, del Capítulo 65; f) los artículos del Capítulo 95 (por ejemplo: juguetes, juegos, artefactos deportivos).",
          },
          {
            id: "NL-CAP43-3",
            text: "Se clasifican en la partida 43.03, la peletería y partes de peletería, ensambladas con otras materias, y la peletería y partes de peletería, cosidas formando prendas, partes de prendas, complementos (accesorios), de vestir u otros artículos.",
          },
          {
            id: "NL-CAP43-4",
            text: "Se clasifican en las partidas 43.03 o 43.04, según los casos, las prendas y complementos (accesorios), de vestir, de cualquier clase (excepto los excluidos de este Capítulo por la Nota 2), forrados interiormente con peletería natural o con peletería facticia o artificial, así como las prendas y complementos (accesorios), de vestir, con partes exteriores de peletería natural o peletería facticia o artificial, cuando dichas partes no sean simples guarniciones.",
          },
          {
            id: "NL-CAP43-5",
            text: "En la Nomenclatura, se consideran peletería facticia o artificial las imitaciones de peletería obtenidas con lana, pelo u otras fibras, aplicados por pegado o cosido, sobre cuero, tejido u otras materias, excepto las imitaciones obtenidas por tejido o por punto (partidas 58.01 o 60.01, generalmente).",
          },
        ],
        subpartida: [],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "43.01",
          title:
            "Peletería en bruto (incluidas las cabezas, colas, patas y demás trozos utilizables en peletería), excepto las pieles en bruto de las partidas 41.01, 41.02 o 41.03.",
          subheadings: [
            {
              code: "4301.10",
              title: "De visón, enteras, incluso sin la cabeza, cola o patas.",
              classifications: [
                {
                  code: "4301.10.01",
                  title:
                    "De visón, enteras, incluso sin la cabeza, cola o patas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De visón, enteras, incluso sin la cabeza, cola o patas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4301.30",
              title:
                'De cordero llamadas astracán, "Breitschwanz", "caracul", "persa" o similares, de cordero de Indias, de China, de Mongolia o del Tíbet, enteras, incluso sin la cabeza, cola o patas.',
              classifications: [
                {
                  code: "4301.30.01",
                  title:
                    'De cordero llamadas astracán, "Breitschwanz", "caracul", "persa" o similares, de cordero de Indias, de China, de Mongolia o del Tíbet, enteras, incluso sin la cabeza, cola o patas.',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'De cordero llamadas astracán, "Breitschwanz", "caracul", "persa" o similares, de cordero de Indias, de China, de Mongolia o del Tíbet, enteras, incluso sin la cabeza, cola o patas.',
                    },
                  ],
                },
              ],
            },
            {
              code: "4301.60",
              title: "De zorro, enteras, incluso sin la cabeza, cola o patas.",
              classifications: [
                {
                  code: "4301.60.01",
                  title:
                    "De zorro, enteras, incluso sin la cabeza, cola o patas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De zorro, enteras, incluso sin la cabeza, cola o patas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4301.80",
              title:
                "Las demás pieles, enteras, incluso sin la cabeza, cola o patas.",
              classifications: [
                {
                  code: "4301.80.91",
                  title:
                    "Las demás pieles, enteras, incluso sin la cabeza, cola o patas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Las demás pieles, enteras, incluso sin la cabeza, cola o patas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4301.90",
              title:
                "Cabezas, colas, patas y demás trozos utilizables en peletería.",
              classifications: [
                {
                  code: "4301.90.01",
                  title:
                    "Cabezas, colas, patas y demás trozos utilizables en peletería.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cabezas, colas, patas y demás trozos utilizables en peletería.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "43.02",
          title:
            "Peletería curtida o adobada (incluidas las cabezas, colas, patas y demás trozos, desechos y recortes), incluso ensamblada (sin otras materias), excepto la de la partida 43.03.",
          subheadings: [
            {
              code: "4302.11",
              title: "De visón.",
              classifications: [
                {
                  code: "4302.11.01",
                  title: "De visón.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "De visón." }],
                },
              ],
            },
            {
              code: "4302.19",
              title: "Las demás.",
              classifications: [
                {
                  code: "4302.19.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "4302.20",
              title:
                "Cabezas, colas, patas y demás trozos, desechos y recortes, sin ensamblar.",
              classifications: [
                {
                  code: "4302.20.02",
                  title:
                    "Cabezas, colas, patas y demás trozos, desechos y recortes, sin ensamblar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cabezas, colas, patas y demás trozos, desechos y recortes, sin ensamblar.",
                    },
                  ],
                },
              ],
            },
            {
              code: "4302.30",
              title:
                "Pieles enteras y trozos y recortes de pieles, ensamblados.",
              classifications: [
                {
                  code: "4302.30.02",
                  title:
                    "Pieles enteras y trozos y recortes de pieles, ensamblados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Pieles enteras y trozos y recortes de pieles, ensamblados.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          code: "43.03",
          title:
            "Prendas y complementos (accesorios), de vestir, y demás artículos de peletería.",
          subheadings: [
            {
              code: "4303.10",
              title: "Prendas y complementos (accesorios), de vestir.",
              classifications: [
                {
                  code: "4303.10.01",
                  title: "Prendas y complementos (accesorios), de vestir.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
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
              code: "4303.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "4303.90.99",
                  title: "Los demás.",
                  umt: "Pza",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },

        {
          code: "43.04",
          title:
            "Peletería facticia o artificial y artículos de peletería facticia o artificial.",
          subheadings: [
            {
              code: "4304.00",
              title:
                "Peletería facticia o artificial y artículos de peletería facticia o artificial.",
              classifications: [
                {
                  code: "4304.00.01",
                  title:
                    "Peletería facticia o artificial y artículos de peletería facticia o artificial.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Peletería facticia o artificial y artículos de peletería facticia o artificial.",
                    },
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
