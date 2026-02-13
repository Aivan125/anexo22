import type { Section } from "@/types/clasificacion-arancelaria";

export const sectionIII: Section = {
  code: "III",
  title:
    "Grasas y aceites, animales, vegetales o de origen microbiano, y productos de su desdoblamiento; grasas alimenticias elaboradas; ceras de origen animal o vegetal",
  notes: {
    legales: [
      {
        id: "NL-SEC03-1",
        text: "Este Capítulo no comprende: a) el tocino y grasa de cerdo o de ave, de la partida 02.09; b) la manteca, grasa y aceite de cacao (partida 18.04); c) las preparaciones alimenticias con un contenido de productos de la partida 04.05 superior al 15% en peso (generalmente Capítulo 21); d) los chicharrones (partida 23.01) y los residuos de las partidas 23.04 a 23.06; e) los ácidos grasos, las ceras preparadas, las grasas transformadas en productos farmacéuticos, pinturas, barnices, jabón, preparaciones de perfumería, de tocador o de cosmética, los aceites sulfonados y demás productos de la Sección VI; f) el caucho facticio derivado de los aceites (partida 40.02).",
      },
      {
        id: "NL-SEC03-2",
        text: "La partida 15.09 no incluye el aceite de aceituna extraído con disolventes (partida 15.10).",
      },
      {
        id: "NL-SEC03-3",
        text: "La partida 15.18 no comprende las grasas y aceites, ni sus fracciones, simplemente desnaturalizados, que permanecen clasificados en la partida de las correspondientes grasas y aceites, y sus fracciones, sin desnaturalizar.",
      },
      {
        id: "NL-SEC03-4",
        text: "Las pastas de neutralización, las borras o heces de aceite, la brea esteárica, la brea de suarda y la pez de glicerol, se clasifican en la partida 15.22.",
      },
    ],
    nacionales: [
      {
        id: "NN-SEC03-1",
        text: 'Las mezclas o preparaciones alimenticias a base de grasas animales, o grasas animales y aceites vegetales, incluidos los denominados "shortenings", se clasifican como sigue: 1. En la partida 15.01 cuando contengan, en peso, 80% o más de manteca de cerdo fundida; 2. En la partida 15.17 cuando contengan, en peso, menos del 80% de manteca de cerdo, incluso previamente hidrogenada, emulsionada, malaxada o tratada por texturado.',
      },
      {
        id: "NN-SEC03-2",
        text: "Los productos denominados comercialmente cera de Mirica y cera del Japón son grasas vegetales y se deben clasificar en el Capítulo 15.",
      },
      {
        id: "NN-SEC03-3",
        text: "En la partida 15.09: a) El aceite de oliva refinado debe presentar un contenido de ácidos grasos libres (expresado como ácido oleico) inferior o igual a 0.3g por 100g; b) El aceite de oliva de esta partida se considera virgen si el coeficiente de extinción K 270 (determinado por el método CAC/RM 26-1970 de la Comisión del Codex Alimentario) es inferior a 0.25 o cuando es superior a 0.25, si después de tratamiento de la muestra con alúmina activada, es inferior o igual a 0.11.",
      },
      {
        id: "NN-SEC03-4",
        text: "Se clasifica en la subpartida 1515.90 el aceite de jojoba descrito a veces como cera líquida constituido por ésteres de alcoholes grasos superiores.",
      },
    ],
    explicativas: [],
  },
  chapters: [
    {
      code: "15",
      title:
        "Grasas y aceites, animales, vegetales o de origen microbiano, y productos de su desdoblamiento; grasas alimenticias elaboradas; ceras de origen animal o vegetal",
      notes: {
        legales: [
          {
            id: "NL-CAP15-1",
            text: "Para la aplicación de la subpartida 1509.30, el aceite de oliva virgen tiene una acidez libre expresada como ácido oleico inferior o igual a 2.0g/ 100 g y puede distinguirse de las otras categorías de aceite de oliva virgen, según las características establecidas por la Norma 33-1981 del Codex Alimentarius.",
          },
          {
            id: "NL-CAP15-2",
            text: "En las subpartidas 1514.11 y 1514.19, se entiende por aceite de nabo (de nabina) o de colza con bajo contenido de ácido erúcico, el aceite fijo con un contenido de ácido erúcico inferior al 2% en peso.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "15.01",
          title:
            "Grasa de cerdo (incluida la manteca de cerdo) y grasa de ave, excepto las de las partidas 02.09 o 15.03.",
          subheadings: [
            {
              code: "1501.10",
              title: "Manteca de cerdo.",
              classifications: [
                {
                  code: "1501.10.01",
                  title: "Manteca de cerdo.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Manteca de cerdo." }],
                },
              ],
            },
            {
              code: "1501.20",
              title: "Las demás grasas de cerdo.",
              classifications: [
                {
                  code: "1501.20.01",
                  title: "Las demás grasas de cerdo.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Las demás grasas de cerdo." }],
                },
              ],
            },
            {
              code: "1501.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1501.90.01",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "15.02",
          title:
            "Grasa de animales de las especies bovina, ovina o caprina, excepto las de la partida 15.03.",
          subheadings: [
            {
              code: "1502.10",
              title: "Sebo.",
              classifications: [
                {
                  code: "1502.10.01",
                  title: "Sebo.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Sebo." }],
                },
              ],
            },
            {
              code: "1502.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1502.90.01",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "15.03",
          title:
            "Estearina solar, aceite de manteca de cerdo, oleoestearina, oleomargarina y aceite de sebo, sin emulsionar, mezclar ni preparar de otro modo.",
          subheadings: [
            {
              code: "1503.00",
              title:
                "Estearina solar, aceite de manteca de cerdo, oleoestearina, oleomargarina y aceite de sebo, sin emulsionar, mezclar ni preparar de otro modo.",
              classifications: [
                {
                  code: "1503.00.01",
                  title:
                    "Estearina solar, aceite de manteca de cerdo, oleoestearina, oleomargarina y aceite de sebo, sin emulsionar, mezclar ni preparar de otro modo.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Estearina solar, aceite de manteca de cerdo, oleoestearina, oleomargarina y aceite de sebo, sin emulsionar, mezclar ni preparar de otro modo.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "15.04",
          title:
            "Grasas y aceites, y sus fracciones, de pescado o de mamíferos marinos, incluso refinados, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1504.10",
              title: "Aceites de hígado de pescado y sus fracciones.",
              classifications: [
                {
                  code: "1504.10.01",
                  title: "De bacalao.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "De bacalao." }],
                },
                {
                  code: "1504.10.99",
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
              code: "1504.20",
              title:
                "Grasas y aceites de pescado y sus fracciones, excepto los aceites de hígado.",
              classifications: [
                {
                  code: "1504.20.02",
                  title:
                    "Grasas y aceites de pescado y sus fracciones, excepto los aceites de hígado.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "01",
                      title: "De pescado, excepto de bacalao y de tiburón.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "1504.30",
              title: "Grasas y aceites de mamíferos marinos y sus fracciones.",
              classifications: [
                {
                  code: "1504.30.01",
                  title:
                    "Grasas y aceites de mamíferos marinos y sus fracciones.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Grasas y aceites de mamíferos marinos y sus fracciones.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "15.05",
          title:
            "Grasa de lana y sustancias grasas derivadas, incluida la lanolina.",
          subheadings: [
            {
              code: "1505.00",
              title:
                "Grasa de lana y sustancias grasas derivadas, incluida la lanolina.",
              classifications: [
                {
                  code: "1505.00.04",
                  title:
                    "Grasa de lana y sustancias grasas derivadas, incluida la lanolina.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Grasa de lana y sustancias grasas derivadas, incluida la lanolina.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "15.06",
          title:
            "Las demás grasas y aceites animales, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1506.00",
              title:
                "Las demás grasas y aceites animales, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
              classifications: [
                {
                  code: "1506.00.01",
                  title: "De pie de buey, refinado.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "De pie de buey, refinado." }],
                },
                {
                  code: "1506.00.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "15.07",
          title:
            "Aceite de soja (soya) y sus fracciones, incluso refinado, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1507.10",
              title: "Aceite en bruto, incluso desgomado.",
              classifications: [
                {
                  code: "1507.10.01",
                  title: "Aceite en bruto, incluso desgomado.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Aceite en bruto, incluso desgomado.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1507.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1507.90.99",
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
        {
          code: "15.08",
          title:
            "Aceite de cacahuate (cacahuete, maní) y sus fracciones, incluso refinado, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1508.10",
              title: "Aceite en bruto.",
              classifications: [
                {
                  code: "1508.10.01",
                  title: "Aceite en bruto.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aceite en bruto." }],
                },
              ],
            },
            {
              code: "1508.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1508.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "15.09",
          title:
            "Aceite de oliva y sus fracciones, incluso refinado, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1509.20",
              title: "Aceite de oliva virgen extra.",
              classifications: [
                {
                  code: "1509.20.01",
                  title: "Aceite de oliva virgen extra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Aceite de oliva virgen extra." },
                  ],
                },
              ],
            },
            {
              code: "1509.30",
              title: "Aceite de oliva virgen.",
              classifications: [
                {
                  code: "1509.30.01",
                  title: "Aceite de oliva virgen.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aceite de oliva virgen." }],
                },
              ],
            },
            {
              code: "1509.40",
              title: "Los demás aceites de oliva vírgenes.",
              classifications: [
                {
                  code: "1509.40.91",
                  title: "Los demás aceites de oliva vírgenes.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Los demás aceites de oliva vírgenes.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1509.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1509.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Refinado cuyo peso, incluido el envase inmediato, sea menor de 50 kg.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "15.10",
          title:
            "Los demás aceites y sus fracciones obtenidos exclusivamente de aceituna, incluso refinados, pero sin modificar químicamente, y mezclas de estos aceites o fracciones con los aceites o fracciones de la partida 15.09.",
          subheadings: [
            {
              code: "1510.10",
              title: "Aceite de orujo de oliva en bruto.",
              classifications: [
                {
                  code: "1510.10.01",
                  title: "Aceite de orujo de oliva en bruto.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    { code: "00", title: "Aceite de orujo de oliva en bruto." },
                  ],
                },
              ],
            },
            {
              code: "1510.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1510.90.99",
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
          code: "15.11",
          title:
            "Aceite de palma y sus fracciones, incluso refinado, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1511.10",
              title: "Aceite en bruto.",
              classifications: [
                {
                  code: "1511.10.01",
                  title: "Aceite en bruto.",
                  umt: "Kg",
                  importDuty: 3,
                  exportDuty: 0,
                  regimenes: ["CUP"],
                  nicos: [{ code: "00", title: "Aceite en bruto." }],
                },
              ],
            },
            {
              code: "1511.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1511.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "15.12",
          title:
            "Aceites de girasol, cártamo o algodón, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1512.11",
              title: "Aceites en bruto.",
              classifications: [
                {
                  code: "1512.11.01",
                  title: "Aceites en bruto.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aceites en bruto." }],
                },
              ],
            },
            {
              code: "1512.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "1512.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["NOM", "PACIC"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1512.21",
              title: "Aceite en bruto, incluso sin gosipol.",
              classifications: [
                {
                  code: "1512.21.01",
                  title: "Aceite en bruto, incluso sin gosipol.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Aceite en bruto, incluso sin gosipol.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1512.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "1512.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "15.13",
          title:
            "Aceites de coco (de copra), de almendra de palma (palmiste) o de babasú, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1513.11",
              title: "Aceite en bruto.",
              classifications: [
                {
                  code: "1513.11.01",
                  title: "Aceite en bruto.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aceite en bruto." }],
                },
              ],
            },
            {
              code: "1513.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "1513.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 3,
                  exportDuty: 0,
                  regimenes: ["NOM", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1513.21",
              title: "Aceites en bruto.",
              classifications: [
                {
                  code: "1513.21.01",
                  title: "Aceites en bruto.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aceites en bruto." }],
                },
              ],
            },
            {
              code: "1513.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "1513.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 3,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "15.14",
          title:
            "Aceites de nabo (de nabina), colza o mostaza, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1514.11",
              title: "Aceites en bruto.",
              classifications: [
                {
                  code: "1514.11.01",
                  title: "Aceites en bruto.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aceites en bruto." }],
                },
              ],
            },
            {
              code: "1514.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "1514.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1514.91",
              title: "Aceites en bruto.",
              classifications: [
                {
                  code: "1514.91.01",
                  title: "Aceites en bruto.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aceites en bruto." }],
                },
              ],
            },
            {
              code: "1514.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "1514.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "15.15",
          title:
            "Las demás grasas y aceites, vegetales (incluido el aceite de jojoba) o de origen microbiano, fijos, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
          subheadings: [
            {
              code: "1515.11",
              title: "Aceite en bruto.",
              classifications: [
                {
                  code: "1515.11.01",
                  title: "Aceite en bruto.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aceite en bruto." }],
                },
              ],
            },
            {
              code: "1515.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "1515.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1515.21",
              title: "Aceite en bruto.",
              classifications: [
                {
                  code: "1515.21.01",
                  title: "Aceite en bruto.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Aceite en bruto." }],
                },
              ],
            },
            {
              code: "1515.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "1515.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "PACIC"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1515.30",
              title: "Aceite de ricino y sus fracciones.",
              classifications: [
                {
                  code: "1515.30.01",
                  title: "Aceite de ricino y sus fracciones.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Aceite de ricino y sus fracciones." },
                  ],
                },
              ],
            },
            {
              code: "1515.50",
              title: "Aceite de sésamo (ajonjolí) y sus fracciones.",
              classifications: [
                {
                  code: "1515.50.01",
                  title: "Aceite de sésamo (ajonjolí) y sus fracciones.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Aceite de sésamo (ajonjolí) y sus fracciones.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1515.60",
              title:
                "Grasas y aceites, de origen microbiano, y sus fracciones.",
              classifications: [
                {
                  code: "1515.60.01",
                  title:
                    "Grasas y aceites, de origen microbiano, y sus fracciones.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Grasas y aceites, de origen microbiano, y sus fracciones.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1515.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1515.90.99",
                  title: "Los demás.",
                  umt: "Kg",
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
          code: "15.16",
          title:
            "Grasas y aceites, animales, vegetales o de origen microbiano, y sus fracciones, parcial o totalmente hidrogenados, interesterificados, reesterificados o elaidinizados, incluso refinados, pero sin preparar de otro modo.",
          subheadings: [
            {
              code: "1516.10",
              title: "Grasas y aceites, animales, y sus fracciones.",
              classifications: [
                {
                  code: "1516.10.01",
                  title: "Grasas y aceites, animales, y sus fracciones.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PERM", "NOM", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Grasas y aceites, animales, y sus fracciones.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1516.20",
              title: "Grasas y aceites, vegetales, y sus fracciones.",
              classifications: [
                {
                  code: "1516.20.01",
                  title: "Grasas y aceites, vegetales, y sus fracciones.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS5", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title: "Grasas y aceites, vegetales, y sus fracciones.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1516.30",
              title:
                "Grasas y aceites, de origen microbiano, y sus fracciones.",
              classifications: [
                {
                  code: "1516.30.01",
                  title:
                    "Grasas y aceites, de origen microbiano, y sus fracciones.",
                  umt: "Kg",
                  importDuty: 5,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Grasas y aceites, de origen microbiano, y sus fracciones.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "15.17",
          title:
            "Margarina; mezclas o preparaciones alimenticias de grasas o aceites, animales, vegetales o de origen microbiano, o de fracciones de diferentes grasas o aceites, de este Capítulo, excepto las grasas y aceites, alimenticios o sus fracciones, de la partida 15.16.",
          subheadings: [
            {
              code: "1517.10",
              title: "Margarina, excepto la margarina líquida.",
              classifications: [
                {
                  code: "1517.10.01",
                  title: "Margarina, excepto la margarina líquida.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Margarina, excepto la margarina líquida.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1517.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1517.90.01",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "15.18",
          title:
            "Grasas y aceites, animales, vegetales o de origen microbiano, y sus fracciones, cocidos, oxidados, deshidratados, sulfurados, soplados, polimerizados por calor en vacío o atmósfera inerte (estandolizados), o modificados químicamente de otra forma, excepto los de la partida 15.16; mezclas o preparaciones no alimenticias de grasas o de aceites, animales, vegetales o de origen microbiano, o de fracciones de diferentes grasas o aceites, de este Capítulo, no expresadas ni comprendidas en otra parte.",
          subheadings: [
            {
              code: "1518.00",
              title:
                "Grasas y aceites, animales, vegetales o de origen microbiano, y sus fracciones, cocidos, oxidados, deshidratados, sulfurados, soplados, polimerizados por calor en vacío o atmósfera inerte (estandolizados), o modificados químicamente de otra forma, excepto los de la partida 15.16; mezclas o preparaciones no alimenticias de grasas o de aceites, animales, vegetales o de origen microbiano, o de fracciones de diferentes grasas o aceites, de este Capítulo, no expresadas ni comprendidas en otra parte.",
              classifications: [
                {
                  code: "1518.00.01",
                  title:
                    "Mezcla de aceites de girasol y oliva, bromados, calidad farmacéutica.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Mezcla de aceites de girasol y oliva, bromados, calidad farmacéutica.",
                    },
                  ],
                },
                {
                  code: "1518.00.02",
                  title: "Aceites animales o vegetales epoxidados.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["CC"],
                  nicos: [
                    {
                      code: "00",
                      title: "Aceites animales o vegetales epoxidados.",
                    },
                  ],
                },
                {
                  code: "1518.00.99",
                  title: "Los demás.",
                  umt: "Kg",
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
          code: "15.20",
          title: "Glicerol en bruto; aguas y lejías glicerinosas.",
          subheadings: [
            {
              code: "1520.00",
              title: "Glicerol en bruto; aguas y lejías glicerinosas.",
              classifications: [
                {
                  code: "1520.00.01",
                  title: "Glicerol en bruto; aguas y lejías glicerinosas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Glicerol en bruto; aguas y lejías glicerinosas.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "15.21",
          title:
            "Ceras vegetales (excepto los triglicéridos), cera de abejas o de otros insectos y esperma de ballena o de otros cetáceos (espermaceti), incluso refinadas o coloreadas.",
          subheadings: [
            {
              code: "1521.10",
              title: "Ceras vegetales.",
              classifications: [
                {
                  code: "1521.10.01",
                  title: "Carnauba.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PERM"],
                  nicos: [{ code: "00", title: "Carnauba." }],
                },
                {
                  code: "1521.10.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SEM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "1521.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1521.90.04",
                  title: "Esperma de ballena y de otros cetáceos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Esperma de ballena y de otros cetáceos.",
                    },
                  ],
                },
                {
                  code: "1521.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Cera de abejas, refinada o blanqueada, sin colorear.",
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "15.22",
          title:
            "Degrás; residuos procedentes del tratamiento de grasas o ceras, animales o vegetales.",
          subheadings: [
            {
              code: "1522.00",
              title:
                "Degrás; residuos procedentes del tratamiento de grasas o ceras, animales o vegetales.",
              classifications: [
                {
                  code: "1522.00.01",
                  title:
                    "Degrás; residuos procedentes del tratamiento de grasas o ceras, animales o vegetales.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Degrás; residuos procedentes del tratamiento de grasas o ceras, animales o vegetales.",
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
