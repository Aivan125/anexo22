import type { Section } from "@/types/clasificacion-arancelaria";

export const sectionII: Section = {
  code: "II",
  title: "Productos del reino vegetal",
  notes: {
    legales: [
      {
        id: "NL-SEC02-1",
        text: 'En esta Sección, el término "pellets" designa los productos en forma de cilindro, bolita, etc., aglomerados por simple presión o con adición de un aglutinante en proporción inferior o igual al 3% en peso.',
      },
    ],
    nacionales: [],
    explicativas: [],
  },
  chapters: [
    {
      code: "06",
      title: "Plantas vivas y productos de la floricultura",
      notes: {
        legales: [
          {
            id: "NL-CAP06-1",
            text: "Salvo lo dispuesto en la segunda parte de la partida 06.01, este Capítulo comprende únicamente los productos suministrados habitualmente por los horticultores, viveristas o floristas para la plantación o la ornamentación. Sin embargo, se excluyen de este Capítulo las papas (patatas), cebollas hortenses, chalotes, ajos y demás productos del Capítulo 07.",
          },
          {
            id: "NL-CAP06-2",
            text: "Los ramos, cestas, coronas y artículos similares se asimilan a las flores o follajes de las partidas 06.03 o 06.04, sin tener en cuenta los accesorios de otras materias. Sin embargo, estas partidas no comprenden los collages y cuadros similares de la partida 97.01.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "06.01",
          title:
            "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en reposo vegetativo, en vegetación o en flor; plantas y raíces de achicoria, excepto las raíces de la partida 12.12.",
          subheadings: [
            {
              code: "0601.10",
              title:
                "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en reposo vegetativo.",
              classifications: [
                {
                  code: "0601.10.09",
                  title:
                    "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en reposo vegetativo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SEM"],
                  nicos: [
                    { code: "01", title: "Bulbos de gladiolas." },
                    { code: "02", title: "Bulbos de tulipanes." },
                    { code: "03", title: "Bulbos de lilies." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0601.20",
              title:
                "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en vegetación o en flor; plantas y raíces de achicoria.",
              classifications: [
                {
                  code: "0601.20.10",
                  title:
                    "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en vegetación o en flor; plantas y raíces de achicoria.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en vegetación o en flor; plantas y raíces de achicoria.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "06.02",
          title:
            "Las demás plantas vivas (incluidas sus raíces), esquejes e injertos; micelios.",
          subheadings: [
            {
              code: "0602.10",
              title: "Esquejes sin enraizar e injertos.",
              classifications: [
                {
                  code: "0602.10.07",
                  title: "Esquejes sin enraizar e injertos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    { code: "00", title: "Esquejes sin enraizar e injertos." },
                  ],
                },
              ],
            },
            {
              code: "0602.20",
              title:
                "Árboles, arbustos y matas, de frutas o de otros frutos comestibles, incluso injertados.",
              classifications: [
                {
                  code: "0602.20.04",
                  title:
                    "Árboles, arbustos y matas, de frutas o de otros frutos comestibles, incluso injertados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    { code: "01", title: "Árboles o arbustos frutales." },
                    {
                      code: "02",
                      title:
                        "Plantas para injertar (barbados), de longitud inferior o igual a 80 cm.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0602.30",
              title: "Rododendros y azaleas, incluso injertados.",
              classifications: [
                {
                  code: "0602.30.01",
                  title: "Rododendros y azaleas, incluso injertados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Rododendros y azaleas, incluso injertados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0602.40",
              title: "Rosales, incluso injertados.",
              classifications: [
                {
                  code: "0602.40.01",
                  title:
                    "Estacas, plantas o plántulas de rosales, con o sin raíz, incluso injertados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Estacas, plantas o plántulas de rosales, con o sin raíz, incluso injertados.",
                    },
                  ],
                },
                {
                  code: "0602.40.99",
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
              code: "0602.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0602.90.06",
                  title: "Esquejes con raíz.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Esquejes con raíz." }],
                },
                {
                  code: "0602.90.07",
                  title:
                    "Plantas vivas acuáticas, incluidos sus bulbos y sus partes, para acuacultura.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Plantas vivas acuáticas, incluidos sus bulbos y sus partes, para acuacultura.",
                    },
                  ],
                },
                {
                  code: "0602.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [
                    { code: "01", title: "Blanco de setas (micelios)." },
                    { code: "02", title: "Plantas con raíces primordiales." },
                    { code: "03", title: "Plantas de orquídeas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "06.03",
          title:
            "Flores y capullos, cortados para ramos o adornos, frescos, secos, blanqueados, teñidos, impregnados o preparados de otra forma.",
          subheadings: [
            {
              code: "0603.11",
              title: "Rosas.",
              classifications: [
                {
                  code: "0603.11.01",
                  title: "Rosas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Rosas." }],
                },
              ],
            },
            {
              code: "0603.12",
              title: "Claveles.",
              classifications: [
                {
                  code: "0603.12.01",
                  title: "Claveles.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Claveles." }],
                },
              ],
            },
            {
              code: "0603.13",
              title: "Orquídeas.",
              classifications: [
                {
                  code: "0603.13.01",
                  title: "Orquídeas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Orquídeas." }],
                },
              ],
            },
            {
              code: "0603.14",
              title: "Crisantemos.",
              classifications: [
                {
                  code: "0603.14.01",
                  title: "Crisantemos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Crisantemos." }],
                },
              ],
            },
            {
              code: "0603.15",
              title: "Azucenas (Lilium spp.).",
              classifications: [
                {
                  code: "0603.15.01",
                  title: "Azucenas (Lilium spp.).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Azucenas (Lilium spp.)." }],
                },
              ],
            },
            {
              code: "0603.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "0603.19.99",
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
              code: "0603.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0603.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["PS5", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "06.04",
          title:
            "Follaje, hojas, ramas y demás partes de plantas, sin flores ni capullos, y hierbas, musgos y líquenes, para ramos o adornos, frescos, secos, blanqueados, teñidos, impregnados o preparados de otra forma.",
          subheadings: [
            {
              code: "0604.20",
              title: "Frescos.",
              classifications: [
                {
                  code: "0604.20.01",
                  title: "Musgo del género Sphagnum.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD", "NOM"],
                  nicos: [{ code: "00", title: "Musgo del género Sphagnum." }],
                },
                {
                  code: "0604.20.99",
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
              code: "0604.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0604.90.01",
                  title: "Musgo del género Sphagnum.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD", "PS5", "PS4"],
                  nicos: [{ code: "00", title: "Musgo del género Sphagnum." }],
                },
                {
                  code: "0604.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "07",
      title: "Hortalizas, plantas, raíces y tubérculos alimenticios",
      notes: {
        legales: [
          {
            id: "NL-CAP07-1",
            text: "Este Capítulo no comprende los productos forrajeros de la partida 12.14.",
          },
          {
            id: "NL-CAP07-2",
            text: "En las partidas 07.09, 07.10, 07.11 y 07.12, la expresión hortalizas alcanza también a los hongos comestibles, trufas, aceitunas, alcaparras, calabacines (zapallitos), calabazas (zapallos), berenjenas, maíz dulce (Zea mays var. saccharata), frutos de los géneros Capsicum o Pimenta, hinojo y plantas como el perejil, perifollo, estragón, berro y mejorana cultivada (Majorana hortensis u Origanum majorana).",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP07-1",
            text: 'Salvo disposición en contrario, el término hortaliza también comprende a las "legumbres".',
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "07.01",
          title: "Papas (patatas) frescas o refrigeradas.",
          subheadings: [
            {
              code: "0701.10",
              title: "Para siembra.",
              classifications: [
                {
                  code: "0701.10.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "0701.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "0701.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "07.02",
          title: "Tomates frescos o refrigerados.",
          subheadings: [
            {
              code: "0702.00",
              title: "Tomates frescos o refrigerados.",
              classifications: [
                {
                  code: "0702.00.99",
                  title: "Tomates frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "EMB", "NOM", "SAD"],
                  nicos: [
                    { code: "00", title: "Tomates frescos o refrigerados." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "07.03",
          title:
            "Cebollas, chalotes, ajos, puerros y demás hortalizas aliáceas, frescos o refrigerados.",
          subheadings: [
            {
              code: "0703.10",
              title: "Cebollas y chalotes.",
              classifications: [
                {
                  code: "0703.10.02",
                  title: "Cebollas y chalotes.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC", "CUP"],
                  nicos: [
                    { code: "01", title: "Cebollas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0703.20",
              title: "Ajos.",
              classifications: [
                {
                  code: "0703.20.02",
                  title: "Ajos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC"],
                  nicos: [
                    { code: "01", title: "Para siembra." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0703.90",
              title: "Puerros y demás hortalizas aliáceas.",
              classifications: [
                {
                  code: "0703.90.01",
                  title: "Puerros y demás hortalizas aliáceas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Puerros y demás hortalizas aliáceas.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "07.04",
          title:
            "Coles, incluidos los repollos, coliflores, coles rizadas, colinabos y productos comestibles similares del género Brassica, frescos o refrigerados.",
          subheadings: [
            {
              code: "0704.10",
              title: "Coliflores y brócolis.",
              classifications: [
                {
                  code: "0704.10.03",
                  title: "Coliflores y brócolis.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "01", title: "Cortados." },
                    { code: "02", title: 'Brócoli ("broccoli") germinado.' },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0704.20",
              title: "Coles (repollitos) de Bruselas.",
              classifications: [
                {
                  code: "0704.20.01",
                  title: "Coles (repollitos) de Bruselas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "00", title: "Coles (repollitos) de Bruselas." },
                  ],
                },
              ],
            },
            {
              code: "0704.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0704.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "01", title: '"Kohlrabi", "kale" y similares.' },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "07.05",
          title:
            "Lechugas (Lactuca sativa) y achicorias, comprendidas la escarola y la endibia (Cichorium spp.), frescas o refrigeradas.",
          subheadings: [
            {
              code: "0705.11",
              title: "Repolladas.",
              classifications: [
                {
                  code: "0705.11.01",
                  title: "Repolladas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC"],
                  nicos: [{ code: "00", title: "Repolladas." }],
                },
              ],
            },
            {
              code: "0705.19",
              title: "Las demás.",
              classifications: [
                {
                  code: "0705.19.01",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "07.06",
          title:
            "Zanahorias, nabos, remolachas para ensalada, salsifíes, apionabos, rábanos y raíces comestibles similares, frescos o refrigerados.",
          subheadings: [
            {
              code: "0706.10",
              title: "Zanahorias y nabos.",
              classifications: [
                {
                  code: "0706.10.01",
                  title: "Zanahorias y nabos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC"],
                  nicos: [{ code: "00", title: "Zanahorias y nabos." }],
                },
              ],
            },
            {
              code: "0706.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0706.90.01",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "07.07",
          title: "Pepinos y pepinillos, frescos o refrigerados.",
          subheadings: [
            {
              code: "0707.00",
              title: "Pepinos y pepinillos, frescos o refrigerados.",
              classifications: [
                {
                  code: "0707.00.01",
                  title: "Pepinos y pepinillos, frescos o refrigerados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Pepinos y pepinillos, frescos o refrigerados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "07.08",
          title:
            "Hortalizas de vaina, aunque estén desvainadas, frescas o refrigeradas.",
          subheadings: [
            {
              code: "0708.10",
              title: "Chícharos (guisantes, arvejas) (Pisum sativum).",
              classifications: [
                {
                  code: "0708.10.01",
                  title: "Chícharos (guisantes, arvejas) (Pisum sativum).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Chícharos (guisantes, arvejas) (Pisum sativum).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0708.20",
              title:
                "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
              classifications: [
                {
                  code: "0708.20.01",
                  title:
                    "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0708.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "0708.90.01",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "07.09",
          title: "Las demás hortalizas, frescas o refrigeradas.",
          subheadings: [
            {
              code: "0709.20",
              title: "Espárragos.",
              classifications: [
                {
                  code: "0709.20.01",
                  title: "Espárragos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "01", title: "Espárrago blanco." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0709.30",
              title: "Berenjenas.",
              classifications: [
                {
                  code: "0709.30.01",
                  title: "Berenjenas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Berenjenas." }],
                },
              ],
            },
            {
              code: "0709.40",
              title: "Apio, excepto el apionabo.",
              classifications: [
                {
                  code: "0709.40.02",
                  title: "Apio, excepto el apionabo.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "01", title: "Cortado." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0709.51",
              title: "Hongos del género Agaricus.",
              classifications: [
                {
                  code: "0709.51.01",
                  title: "Hongos del género Agaricus.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Hongos del género Agaricus." }],
                },
              ],
            },
            {
              code: "0709.52",
              title: "Hongos del género Boletus.",
              classifications: [
                {
                  code: "0709.52.01",
                  title: "Hongos del género Boletus.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Hongos del género Boletus." }],
                },
              ],
            },
            {
              code: "0709.53",
              title: "Hongos del género Cantharellus.",
              classifications: [
                {
                  code: "0709.53.01",
                  title: "Hongos del género Cantharellus.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SEM"],
                  nicos: [
                    { code: "00", title: "Hongos del género Cantharellus." },
                  ],
                },
              ],
            },
            {
              code: "0709.54",
              title: "Shiitake (Lentinus edodes).",
              classifications: [
                {
                  code: "0709.54.01",
                  title: "Shiitake (Lentinus edodes).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Shiitake (Lentinus edodes)." }],
                },
              ],
            },
            {
              code: "0709.55",
              title:
                "Matsutake (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum).",
              classifications: [
                {
                  code: "0709.55.01",
                  title:
                    "Matsutake (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Matsutake (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0709.56",
              title: "Trufas (Tuber spp.).",
              classifications: [
                {
                  code: "0709.56.01",
                  title: "Trufas (Tuber spp.).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Trufas (Tuber spp.)." }],
                },
              ],
            },
            {
              code: "0709.59",
              title: "Los demás.",
              classifications: [
                {
                  code: "0709.59.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0709.60",
              title: "Frutos de los géneros Capsicum o Pimenta.",
              classifications: [
                {
                  code: "0709.60.03",
                  title: "Chile Habanero de la Península de Yucatán.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Chile Habanero de la Península de Yucatán.",
                    },
                  ],
                },
                {
                  code: "0709.60.04",
                  title: "Chile Yahualica.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Chile Yahualica." }],
                },
                {
                  code: "0709.60.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC", "CUP"],
                  nicos: [
                    { code: "01", title: 'Chile "Bell".' },
                    { code: "02", title: "Chile habanero." },
                    { code: "03", title: "Chile jalapeño." },
                    { code: "04", title: "Chile poblano." },
                    { code: "05", title: "Chile pasilla." },
                    { code: "06", title: "Chile serrano." },
                    { code: "07", title: "Chile anahem." },
                    { code: "08", title: "Chile caribe." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0709.70",
              title: "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
              classifications: [
                {
                  code: "0709.70.01",
                  title:
                    "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0709.91",
              title: "Alcachofas (alcauciles).",
              classifications: [
                {
                  code: "0709.91.01",
                  title: "Alcachofas (alcauciles).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Alcachofas (alcauciles)." }],
                },
              ],
            },
            {
              code: "0709.92",
              title: "Aceitunas.",
              classifications: [
                {
                  code: "0709.92.01",
                  title: "Aceitunas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Aceitunas." }],
                },
              ],
            },
            {
              code: "0709.93",
              title: "Calabazas (zapallos) y calabacines (Cucurbita spp.).",
              classifications: [
                {
                  code: "0709.93.01",
                  title: "Calabazas (zapallos) y calabacines (Cucurbita spp.).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Calabaza duras (por ejemplo: butternut, spaghetti, acorn, kabocha).",
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "0709.99",
              title: "Las demás.",
              classifications: [
                {
                  code: "0709.99.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "01", title: "Elotes (maíz dulce)." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "07.10",
          title:
            "Hortalizas, aunque estén cocidas en agua o vapor, congeladas.",
          subheadings: [
            {
              code: "0710.10",
              title: "Papas (patatas).",
              classifications: [
                {
                  code: "0710.10.01",
                  title: "Papas (patatas).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "PACIC"],
                  nicos: [{ code: "00", title: "Papas (patatas)." }],
                },
              ],
            },
            {
              code: "0710.21",
              title: "Chícharos (guisantes, arvejas) (Pisum sativum).",
              classifications: [
                {
                  code: "0710.21.01",
                  title: "Chícharos (guisantes, arvejas) (Pisum sativum).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Chícharos (guisantes, arvejas) (Pisum sativum).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0710.22",
              title:
                "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
              classifications: [
                {
                  code: "0710.22.01",
                  title:
                    "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0710.29",
              title: "Las demás.",
              classifications: [
                {
                  code: "0710.29.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "0710.30",
              title: "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
              classifications: [
                {
                  code: "0710.30.01",
                  title:
                    "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0710.40",
              title: "Maíz dulce.",
              classifications: [
                {
                  code: "0710.40.01",
                  title: "Maíz dulce.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Maíz dulce." }],
                },
              ],
            },
            {
              code: "0710.80",
              title: "Las demás hortalizas.",
              classifications: [
                {
                  code: "0710.80.01",
                  title: "Cebollas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "PACICI"],
                  nicos: [{ code: "00", title: "Cebollas." }],
                },
                {
                  code: "0710.80.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "01",
                      title: "Coles de bruselas (repollitos), cortadas.",
                    },
                    {
                      code: "02",
                      title: 'Espárragos, brócolis ("bróccoli") y coliflores.',
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "0710.90",
              title: "Mezclas de hortalizas.",
              classifications: [
                {
                  code: "0710.90.02",
                  title: "Mezclas de hortalizas.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Mezclas de hortalizas." }],
                },
              ],
            },
          ],
        },
        {
          code: "07.11",
          title:
            "Hortalizas conservadas provisionalmente, pero todavía impropias, en este estado, para consumo inmediato.",
          subheadings: [
            {
              code: "0711.20",
              title: "Aceitunas.",
              classifications: [
                {
                  code: "0711.20.01",
                  title: "Aceitunas.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Aceitunas." }],
                },
              ],
            },
            {
              code: "0711.40",
              title: "Pepinos y pepinillos.",
              classifications: [
                {
                  code: "0711.40.01",
                  title: "Pepinos y pepinillos.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Pepinos y pepinillos." }],
                },
              ],
            },
            {
              code: "0711.51",
              title: "Hongos del género Agaricus.",
              classifications: [
                {
                  code: "0711.51.01",
                  title: "Hongos del género Agaricus.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Hongos del género Agaricus." }],
                },
              ],
            },
            {
              code: "0711.59",
              title: "Los demás.",
              classifications: [
                {
                  code: "0711.59.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0711.90",
              title: "Las demás hortalizas; mezclas de hortalizas.",
              classifications: [
                {
                  code: "0711.90.99",
                  title: "Las demás hortalizas; mezclas de hortalizas.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Las demás hortalizas; mezclas de hortalizas.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "07.12",
          title:
            "Hortalizas secas, incluidas las cortadas en trozos o en rodajas o las trituradas o pulverizadas, pero sin otra preparación.",
          subheadings: [
            {
              code: "0712.20",
              title: "Cebollas.",
              classifications: [
                {
                  code: "0712.20.01",
                  title: "Cebollas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "PACIC"],
                  nicos: [{ code: "00", title: "Cebollas." }],
                },
              ],
            },
            {
              code: "0712.31",
              title: "Hongos del género Agaricus.",
              classifications: [
                {
                  code: "0712.31.01",
                  title: "Hongos del género Agaricus.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Hongos del género Agaricus." }],
                },
              ],
            },
            {
              code: "0712.32",
              title: "Hongos de la madera (Auricularia spp.).",
              classifications: [
                {
                  code: "0712.32.01",
                  title: "Hongos de la madera (Auricularia spp.).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Hongos de la madera (Auricularia spp.).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0712.33",
              title: "Hongos gelatinosos (Tremella spp.).",
              classifications: [
                {
                  code: "0712.33.01",
                  title: "Hongos gelatinosos (Tremella spp.).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Hongos gelatinosos (Tremella spp.).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0712.34",
              title: "Shiitake (Lentinus edodes).",
              classifications: [
                {
                  code: "0712.34.01",
                  title: "Shiitake (Lentinus edodes).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Shiitake (Lentinus edodes)." }],
                },
              ],
            },
            {
              code: "0712.39",
              title: "Los demás.",
              classifications: [
                {
                  code: "0712.39.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0712.90",
              title: "Las demás hortalizas; mezclas de hortalizas.",
              classifications: [
                {
                  code: "0712.90.01",
                  title: "Chiles y pimientos del género Capsicum, enteros.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "PACIC"],
                  nicos: [
                    {
                      code: "00",
                      title: "Chiles y pimientos del género Capsicum, enteros.",
                    },
                  ],
                },
                {
                  code: "0712.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "07.13",
          title:
            "Hortalizas de vaina secas desvainadas, aunque estén mondadas o partidas.",
          subheadings: [
            {
              code: "0713.10",
              title: "Chícharos (guisantes, arvejas) (Pisum sativum).",
              classifications: [
                {
                  code: "0713.10.01",
                  title: "Chícharos (guisantes, arvejas) (Pisum sativum).",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Chícharos (guisantes, arvejas) (Pisum sativum).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0713.20",
              title: "Garbanzos.",
              classifications: [
                {
                  code: "0713.20.01",
                  title: "Garbanzos.",
                  umt: "Kg",
                  importDuty: 75,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Garbanzos." }],
                },
              ],
            },
            {
              code: "0713.31",
              title:
                "Frijoles (porotos, alubias, judías, fréjoles) de las especies Vigna mungo (L.) Hepper o Vigna radiata (L.) Wilczek.",
              classifications: [
                {
                  code: "0713.31.01",
                  title:
                    "Frijoles (porotos, alubias, judías, fréjoles) de las especies Vigna mungo (L.) Hepper o Vigna radiata (L.) Wilczek.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Frijoles (porotos, alubias, judías, fréjoles) de las especies Vigna mungo (L.) Hepper o Vigna radiata (L.) Wilczek.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0713.32",
              title:
                "Frijoles (porotos, alubias, judías, fréjoles) adzuki (Vigna angularis).",
              classifications: [
                {
                  code: "0713.32.01",
                  title:
                    "Frijoles (porotos, alubias, judías, fréjoles) adzuki (Vigna angularis).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Frijoles (porotos, alubias, judías, fréjoles) adzuki (Vigna angularis).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0713.33",
              title:
                "Frijoles (porotos, alubias, judías, fréjoles) comunes (Phaseolus vulgaris).",
              classifications: [
                {
                  code: "0713.33.01",
                  title:
                    "Frijoles (porotos, alubias, judías, fréjoles) comunes (Phaseolus vulgaris).",
                  umt: "Kg",
                  importDuty: 75,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Frijoles (porotos, alubias, judías, fréjoles) comunes (Phaseolus vulgaris).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0713.34",
              title:
                "Frijoles (porotos, alubias, judías, fréjoles) bambara (Vigna subterranea o Voandzeia subterranea).",
              classifications: [
                {
                  code: "0713.34.01",
                  title:
                    "Frijoles (porotos, alubias, judías, fréjoles) bambara (Vigna subterranea o Voandzeia subterranea).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Frijoles (porotos, alubias, judías, fréjoles) bambara (Vigna subterranea o Voandzeia subterranea).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0713.35",
              title:
                "Frijoles (porotos, alubias, judías, fréjoles) salvajes o caupí (Vigna unguiculata).",
              classifications: [
                {
                  code: "0713.35.01",
                  title:
                    "Frijoles (porotos, alubias, judías, fréjoles) salvajes o caupí (Vigna unguiculata).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Frijoles (porotos, alubias, judías, fréjoles) salvajes o caupí (Vigna unguiculata).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0713.39",
              title: "Los demás.",
              classifications: [
                {
                  code: "0713.39.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0713.40",
              title: "Lentejas.",
              classifications: [
                {
                  code: "0713.40.01",
                  title: "Lentejas.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Lentejas." }],
                },
              ],
            },
            {
              code: "0713.50",
              title:
                "Habas (Vicia faba var. major), haba caballar (Vicia faba var. equina) y haba menor (Vicia faba var. minor).",
              classifications: [
                {
                  code: "0713.50.01",
                  title:
                    "Habas (Vicia faba var. major), haba caballar (Vicia faba var. equina) y haba menor (Vicia faba var. minor).",
                  umt: "Kg",
                  importDuty: 35,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Habas (Vicia faba var. major), haba caballar (Vicia faba var. equina) y haba menor (Vicia faba var. minor).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0713.60",
              title: "Guisantes de palo o gandú (Cajanus cajan).",
              classifications: [
                {
                  code: "0713.60.01",
                  title: "Guisantes de palo o gandú (Cajanus cajan).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Guisantes de palo o gandú (Cajanus cajan).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0713.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "0713.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "07.14",
          title:
            'Raíces de yuca (mandioca), arrurruz o salep, aguaturmas (patacas), camotes (batatas, boniatos) y raíces y tubérculos similares ricos en fécula o inulina, frescos, refrigerados, congelados o secos, incluso troceados o en "pellets"; médula de sagú.',
          subheadings: [
            {
              code: "0714.10",
              title: "Raíces de yuca (mandioca).",
              classifications: [
                {
                  code: "0714.10.01",
                  title: "Raíces de yuca (mandioca).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Raíces de yuca (mandioca)." }],
                },
              ],
            },
            {
              code: "0714.20",
              title: "Camotes (batatas, boniatos).",
              classifications: [
                {
                  code: "0714.20.01",
                  title: "Camotes (batatas, boniatos).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "00", title: "Camotes (batatas, boniatos)." },
                  ],
                },
              ],
            },
            {
              code: "0714.30",
              title: "Ñames (Dioscorea spp.).",
              classifications: [
                {
                  code: "0714.30.01",
                  title: "Ñames (Dioscorea spp.).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Ñames (Dioscorea spp.)." }],
                },
              ],
            },
            {
              code: "0714.40",
              title: "Taros (Colocasia spp.).",
              classifications: [
                {
                  code: "0714.40.01",
                  title: "Taros (Colocasia spp.).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Taros (Colocasia spp.)." }],
                },
              ],
            },
            {
              code: "0714.50",
              title: "Yautías (malanga) (Xanthosoma spp.).",
              classifications: [
                {
                  code: "0714.50.01",
                  title: "Yautías (malanga) (Xanthosoma spp.).",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Yautías (malanga) (Xanthosoma spp.).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0714.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0714.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "08",
      title:
        "Frutas y frutos comestibles; cortezas de agrios (cítricos), melones o sandías",
      notes: {
        legales: [
          {
            id: "NL-CAP08-1",
            text: "Este Capítulo no comprende los frutos no comestibles.",
          },
          {
            id: "NL-CAP08-2",
            text: "Las frutas y otros frutos refrigerados se clasifican en las mismas partidas que las frutas y frutos frescos correspondientes.",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP08-1",
            text: "En la Nomenclatura, la expresión frutos con o de cáscara se refiere a los frutos comprendidos en las partidas 08.01 y 08.02.",
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "08.01",
          title:
            'Cocos, nueces del Brasil y nueces de marañón (merey, cajuil, anacardo, "cajú"), frescos o secos, incluso sin cáscara o mondados.',
          subheadings: [
            {
              code: "0801.11",
              title: "Cocos secos.",
              classifications: [
                {
                  code: "0801.11.01",
                  title: "Secos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Secos." }],
                },
              ],
            },
            {
              code: "0801.12",
              title: "Con la cáscara interna (endocarpio).",
              classifications: [
                {
                  code: "0801.12.01",
                  title: "Con la cáscara interna (endocarpio).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Con la cáscara interna (endocarpio).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0801.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "0801.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0801.21",
              title: "Nueces del Brasil con cáscara.",
              classifications: [
                {
                  code: "0801.21.01",
                  title: "Con cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Con cáscara." }],
                },
              ],
            },
            {
              code: "0801.22",
              title: "Sin cáscara.",
              classifications: [
                {
                  code: "0801.22.01",
                  title: "Sin cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Sin cáscara." }],
                },
              ],
            },
            {
              code: "0801.31",
              title: "Nueces de marañón con cáscara.",
              classifications: [
                {
                  code: "0801.31.01",
                  title: "Con cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Con cáscara." }],
                },
              ],
            },
            {
              code: "0801.32",
              title: "Sin cáscara.",
              classifications: [
                {
                  code: "0801.32.01",
                  title: "Sin cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Sin cáscara." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.02",
          title:
            "Los demás frutos de cáscara frescos o secos, incluso sin cáscara o mondados.",
          subheadings: [
            {
              code: "0802.11",
              title: "Almendras con cáscara.",
              classifications: [
                {
                  code: "0802.11.01",
                  title: "Con cáscara.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Con cáscara." }],
                },
              ],
            },
            {
              code: "0802.12",
              title: "Sin cáscara.",
              classifications: [
                {
                  code: "0802.12.01",
                  title: "Sin cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Sin cáscara." }],
                },
              ],
            },
            {
              code: "0802.21",
              title: "Avellanas con cáscara.",
              classifications: [
                {
                  code: "0802.21.01",
                  title: "Con cáscara.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Con cáscara." }],
                },
              ],
            },
            {
              code: "0802.22",
              title: "Sin cáscara.",
              classifications: [
                {
                  code: "0802.22.01",
                  title: "Sin cáscara.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Sin cáscara." }],
                },
              ],
            },
            {
              code: "0802.31",
              title: "Nueces de nogal con cáscara.",
              classifications: [
                {
                  code: "0802.31.01",
                  title: "Con cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Con cáscara." }],
                },
              ],
            },
            {
              code: "0802.32",
              title: "Sin cáscara.",
              classifications: [
                {
                  code: "0802.32.01",
                  title: "Sin cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Sin cáscara." }],
                },
              ],
            },
            {
              code: "0802.41",
              title: "Castañas (Castanea spp.) con cáscara.",
              classifications: [
                {
                  code: "0802.41.01",
                  title: "Con cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Con cáscara." }],
                },
              ],
            },
            {
              code: "0802.42",
              title: "Sin cáscara.",
              classifications: [
                {
                  code: "0802.42.01",
                  title: "Sin cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Sin cáscara." }],
                },
              ],
            },
            {
              code: "0802.51",
              title: "Pistachos con cáscara.",
              classifications: [
                {
                  code: "0802.51.01",
                  title: "Con cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Con cáscara." }],
                },
              ],
            },
            {
              code: "0802.52",
              title: "Sin cáscara.",
              classifications: [
                {
                  code: "0802.52.01",
                  title: "Sin cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Sin cáscara." }],
                },
              ],
            },
            {
              code: "0802.61",
              title: "Nueces de macadamia con cáscara.",
              classifications: [
                {
                  code: "0802.61.01",
                  title: "Con cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Con cáscara." }],
                },
              ],
            },
            {
              code: "0802.62",
              title: "Sin cáscara.",
              classifications: [
                {
                  code: "0802.62.01",
                  title: "Sin cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Sin cáscara." }],
                },
              ],
            },
            {
              code: "0802.70",
              title: "Nueces de cola (Cola spp.).",
              classifications: [
                {
                  code: "0802.70.01",
                  title: "Nueces de cola (Cola spp.).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Nueces de cola (Cola spp.)." }],
                },
              ],
            },
            {
              code: "0802.80",
              title: "Nueces de areca.",
              classifications: [
                {
                  code: "0802.80.01",
                  title: "Nueces de areca.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Nueces de areca." }],
                },
              ],
            },
            {
              code: "0802.91",
              title: "Piñones con cáscara.",
              classifications: [
                {
                  code: "0802.91.01",
                  title: "Piñones con cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Piñones con cáscara." }],
                },
              ],
            },
            {
              code: "0802.92",
              title: "Piñones sin cáscara.",
              classifications: [
                {
                  code: "0802.92.01",
                  title: "Piñones sin cáscara.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_II", "CHT", "NOM", "EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Piñones sin cáscara." }],
                },
              ],
            },
            {
              code: "0802.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "0802.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.03",
          title:
            'Bananas, incluidos los plátanos "plantains", frescos o secos.',
          subheadings: [
            {
              code: "0803.10",
              title: 'Plátanos "plantains".',
              classifications: [
                {
                  code: "0803.10.01",
                  title: 'Plátanos "plantains".',
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: 'Plátanos "plantains".' }],
                },
              ],
            },
            {
              code: "0803.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0803.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.04",
          title:
            "Dátiles, higos, piñas (ananás), aguacates (paltas), guayabas, mangos y mangostanes, frescos o secos.",
          subheadings: [
            {
              code: "0804.10",
              title: "Dátiles.",
              classifications: [
                {
                  code: "0804.10.02",
                  title: "Dátiles.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Dátiles." }],
                },
              ],
            },
            {
              code: "0804.20",
              title: "Higos.",
              classifications: [
                {
                  code: "0804.20.02",
                  title: "Higos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Higos." }],
                },
              ],
            },
            {
              code: "0804.30",
              title: "Piñas (ananás).",
              classifications: [
                {
                  code: "0804.30.01",
                  title: "Piñas (ananás).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Piñas (ananás)." }],
                },
              ],
            },
            {
              code: "0804.40",
              title: "Aguacates (paltas).",
              classifications: [
                {
                  code: "0804.40.01",
                  title: "Aguacates (paltas).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Aguacates (paltas)." }],
                },
              ],
            },
            {
              code: "0804.50",
              title: "Guayabas, mangos y mangostanes.",
              classifications: [
                {
                  code: "0804.50.05",
                  title: "Mango Ataúlfo del Soconusco Chiapas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Mango Ataúlfo del Soconusco Chiapas.",
                    },
                  ],
                },
                {
                  code: "0804.50.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "01", title: "Mangostanes." },
                    { code: "02", title: "Guayabas." },
                    { code: "03", title: "Mangos." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "08.05",
          title: "Agrios (cítricos) frescos o secos.",
          subheadings: [
            {
              code: "0805.10",
              title: "Naranjas.",
              classifications: [
                {
                  code: "0805.10.01",
                  title: "Naranjas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC"],
                  nicos: [{ code: "00", title: "Naranjas." }],
                },
              ],
            },
            {
              code: "0805.21",
              title: "Mandarinas (incluidas las tangerinas y satsumas).",
              classifications: [
                {
                  code: "0805.21.01",
                  title: "Mandarinas (incluidas las tangerinas y satsumas).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Mandarinas (incluidas las tangerinas y satsumas).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0805.22",
              title: "Clementinas.",
              classifications: [
                {
                  code: "0805.22.01",
                  title: "Clementinas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Clementinas." }],
                },
              ],
            },
            {
              code: "0805.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "0805.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0805.40",
              title: "Toronjas o pomelos.",
              classifications: [
                {
                  code: "0805.40.01",
                  title: "Toronjas o pomelos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Toronjas o pomelos." }],
                },
              ],
            },
            {
              code: "0805.50",
              title:
                "Limones (Citrus limon, Citrus limonum) y limas (Citrus aurantifolia, Citrus latifolia).",
              classifications: [
                {
                  code: "0805.50.02",
                  title:
                    "Limones (Citrus limon, Citrus limonum) y limas (Citrus aurantifolia, Citrus latifolia).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC"],
                  nicos: [
                    { code: "01", title: "Limas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0805.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0805.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.06",
          title: "Uvas, frescas o secas, incluidas las pasas.",
          subheadings: [
            {
              code: "0806.10",
              title: "Frescas.",
              classifications: [
                {
                  code: "0806.10.01",
                  title: "Frescas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC"],
                  nicos: [{ code: "00", title: "Frescas." }],
                },
              ],
            },
            {
              code: "0806.20",
              title: "Secas, incluidas las pasas.",
              classifications: [
                {
                  code: "0806.20.01",
                  title: "Secas, incluidas las pasas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Secas, incluidas las pasas." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.07",
          title: "Melones, sandías y papayas, frescos.",
          subheadings: [
            {
              code: "0807.11",
              title: "Sandías.",
              classifications: [
                {
                  code: "0807.11.01",
                  title: "Sandías.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Sandías." }],
                },
              ],
            },
            {
              code: "0807.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "0807.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "0807.20",
              title: "Papayas.",
              classifications: [
                {
                  code: "0807.20.01",
                  title: "Papayas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Papayas." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.08",
          title: "Manzanas, peras y membrillos, frescos.",
          subheadings: [
            {
              code: "0808.10",
              title: "Manzanas.",
              classifications: [
                {
                  code: "0808.10.01",
                  title: "Manzanas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC", "CUP"],
                  nicos: [{ code: "00", title: "Manzanas." }],
                },
              ],
            },
            {
              code: "0808.30",
              title: "Peras.",
              classifications: [
                {
                  code: "0808.30.01",
                  title: "Peras.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "PACIC"],
                  nicos: [{ code: "00", title: "Peras." }],
                },
              ],
            },
            {
              code: "0808.40",
              title: "Membrillos.",
              classifications: [
                {
                  code: "0808.40.01",
                  title: "Membrillos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Membrillos." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.09",
          title:
            "Damascos (albaricoques, chabacanos), cerezas, duraznos (melocotones) (incluidos los griñones y nectarinas), ciruelas y endrinas, frescos.",
          subheadings: [
            {
              code: "0809.10",
              title: "Damascos (albaricoques, chabacanos).",
              classifications: [
                {
                  code: "0809.10.01",
                  title: "Damascos (albaricoques, chabacanos).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Damascos (albaricoques, chabacanos).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0809.21",
              title: "Guindas (cerezas ácidas) (Prunus cerasus).",
              classifications: [
                {
                  code: "0809.21.01",
                  title: "Guindas (cerezas ácidas) (Prunus cerasus).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Guindas (cerezas ácidas) (Prunus cerasus).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0809.29",
              title: "Las demás.",
              classifications: [
                {
                  code: "0809.29.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "0809.30",
              title:
                "Duraznos (melocotones), incluidos los griñones y nectarinas.",
              classifications: [
                {
                  code: "0809.30.01",
                  title:
                    "Duraznos (melocotones), incluidos los griñones y nectarinas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Duraznos (melocotones), incluidos los griñones y nectarinas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0809.40",
              title: "Ciruelas y endrinas.",
              classifications: [
                {
                  code: "0809.40.01",
                  title: "Ciruelas y endrinas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Ciruelas y endrinas." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.10",
          title: "Las demás frutas u otros frutos, frescos.",
          subheadings: [
            {
              code: "0810.10",
              title: "Fresas (frutillas).",
              classifications: [
                {
                  code: "0810.10.01",
                  title: "Fresas (frutillas).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Fresas (frutillas)." }],
                },
              ],
            },
            {
              code: "0810.20",
              title: "Frambuesas, zarzamoras, moras y moras-frambuesa.",
              classifications: [
                {
                  code: "0810.20.01",
                  title: "Frambuesas, zarzamoras, moras y moras-frambuesa.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Frambuesas, zarzamoras, moras y moras-frambuesa.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0810.30",
              title: "Grosellas negras, blancas o rojas y grosellas espinosas.",
              classifications: [
                {
                  code: "0810.30.01",
                  title:
                    "Grosellas negras, blancas o rojas y grosellas espinosas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Grosellas negras, blancas o rojas y grosellas espinosas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0810.40",
              title:
                "Arándanos rojos, mirtilos y demás frutos del género Vaccinium.",
              classifications: [
                {
                  code: "0810.40.02",
                  title:
                    "Arándanos rojos, mirtilos y demás frutos del género Vaccinium.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "01", title: "Arándano azul." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0810.50",
              title: "Kiwis.",
              classifications: [
                {
                  code: "0810.50.01",
                  title: "Kiwis.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Kiwis." }],
                },
              ],
            },
            {
              code: "0810.60",
              title: "Duriones.",
              classifications: [
                {
                  code: "0810.60.01",
                  title: "Duriones.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Duriones." }],
                },
              ],
            },
            {
              code: "0810.70",
              title: "Caquis (persimonios).",
              classifications: [
                {
                  code: "0810.70.01",
                  title: "Caquis (persimonios).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Caquis (persimonios)." }],
                },
              ],
            },
            {
              code: "0810.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0810.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.11",
          title:
            "Frutas y otros frutos, sin cocer o cocidos en agua o vapor, congelados, incluso con adición de azúcar u otro edulcorante.",
          subheadings: [
            {
              code: "0811.10",
              title: "Fresas (frutillas).",
              classifications: [
                {
                  code: "0811.10.01",
                  title: "Fresas (frutillas).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Fresas (frutillas)." }],
                },
              ],
            },
            {
              code: "0811.20",
              title:
                "Frambuesas, zarzamoras, moras, moras-frambuesa y grosellas.",
              classifications: [
                {
                  code: "0811.20.01",
                  title:
                    "Frambuesas, zarzamoras, moras, moras-frambuesa y grosellas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Frambuesas, zarzamoras, moras, moras-frambuesa y grosellas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0811.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0811.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.12",
          title:
            "Frutas y otros frutos, conservados provisionalmente, pero todavía impropios para consumo inmediato.",
          subheadings: [
            {
              code: "0812.10",
              title: "Cerezas.",
              classifications: [
                {
                  code: "0812.10.01",
                  title: "Cerezas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Cerezas." }],
                },
              ],
            },
            {
              code: "0812.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0812.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "08.13",
          title:
            "Frutas y otros frutos, secos, excepto los de las partidas 08.01 a 08.06; mezclas de frutas u otros frutos, secos, o de frutos de cáscara de este Capítulo.",
          subheadings: [
            {
              code: "0813.10",
              title: "Damascos (albaricoques, chabacanos).",
              classifications: [
                {
                  code: "0813.10.01",
                  title: "Damascos (albaricoques, chabacanos).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Damascos (albaricoques, chabacanos).",
                    },
                  ],
                },
              ],
            },
            {
              code: "0813.20",
              title: "Ciruelas.",
              classifications: [
                {
                  code: "0813.20.01",
                  title: "Ciruelas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [{ code: "00", title: "Ciruelas." }],
                },
              ],
            },
            {
              code: "0813.30",
              title: "Manzanas.",
              classifications: [
                {
                  code: "0813.30.01",
                  title: "Manzanas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD", "PACIC"],
                  nicos: [{ code: "00", title: "Manzanas." }],
                },
              ],
            },
            {
              code: "0813.40",
              title: "Las demás frutas u otros frutos.",
              classifications: [
                {
                  code: "0813.40.91",
                  title: "Las demás frutas u otros frutos.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [
                    { code: "00", title: "Las demás frutas u otros frutos." },
                  ],
                },
              ],
            },
            {
              code: "0813.50",
              title:
                "Mezclas de frutas u otros frutos, secos, o de frutos de cáscara de este Capítulo.",
              classifications: [
                {
                  code: "0813.50.01",
                  title:
                    "Mezclas de frutas u otros frutos, secos, o de frutos de cáscara de este Capítulo.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Mezclas de frutas u otros frutos, secos, o de frutos de cáscara de este Capítulo.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "08.14",
          title:
            "Cortezas de agrios (cítricos), melones o sandías, frescas, congeladas, secas o presentadas en agua salada, sulfurosa o adicionada de otras sustancias para su conservación provisional.",
          subheadings: [
            {
              code: "0814.00",
              title: "Cortezas de agrios (cítricos), melones o sandías.",
              classifications: [
                {
                  code: "0814.00.01",
                  title:
                    "Cortezas de agrios (cítricos), melones o sandías, frescas, congeladas, secas o presentadas en agua salada, sulfurosa o adicionada de otras sustancias para su conservación provisional.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS5", "EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cortezas de agrios (cítricos), melones o sandías, frescas, congeladas, secas o presentadas en agua salada, sulfurosa o adicionada de otras sustancias para su conservación provisional.",
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
      code: "09",
      title: "Café, té, yerba mate y especias",
      notes: {
        legales: [
          {
            id: "NL-CAP09-1",
            text: "Las mezclas de los productos de las partidas 09.04 a 09.10 se clasificarán como sigue: a) las mezclas entre sí de productos de una misma partida se clasifican en dicha partida; b) las mezclas entre sí de productos de distintas partidas se clasifican en la partida 09.10. La adición de otras sustancias a los productos de las partidas 09.04 a 09.10 (o a las mezclas citadas en los apartados a) o b) anteriores) no afecta a su clasificación, siempre que las mezclas así obtenidas conserven el carácter esencial de los productos de dichas partidas. En caso contrario, estas mezclas se excluyen de este Capítulo y se clasifican en la partida 21.03 cuando constituyan condimentos o sazonadores compuestos.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "09.01",
          title:
            "Café, incluso tostado o descafeinado; cáscara y cascarilla de café; sucedáneos del café que contengan café en cualquier proporción.",
          subheadings: [
            {
              code: "0901.11",
              title: "Café sin tostar, sin descafeinar.",
              classifications: [
                {
                  code: "0901.11.02",
                  title: "Café sin tostar, sin descafeinar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "CUP"],
                  nicos: [
                    { code: "01", title: "Café verde." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "0901.12",
              title: "Café sin tostar, descafeinado.",
              classifications: [
                {
                  code: "0901.12.01",
                  title: "Café sin tostar, descafeinado.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "CUP"],
                  nicos: [
                    { code: "00", title: "Café sin tostar, descafeinado." },
                  ],
                },
              ],
            },
            {
              code: "0901.21",
              title: "Café tostado, sin descafeinar.",
              classifications: [
                {
                  code: "0901.21.01",
                  title: "Café tostado, sin descafeinar.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "CUP"],
                  nicos: [
                    { code: "00", title: "Café tostado, sin descafeinar." },
                  ],
                },
              ],
            },
            {
              code: "0901.22",
              title: "Café tostado, descafeinado.",
              classifications: [
                {
                  code: "0901.22.01",
                  title: "Café tostado, descafeinado.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Café tostado, descafeinado." }],
                },
              ],
            },
            {
              code: "0901.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "0901.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "09.02",
          title: "Té, incluso aromatizado.",
          subheadings: [
            {
              code: "0902.10",
              title:
                "Té verde (sin fermentar) presentado en envases inmediatos con un contenido inferior o igual a 3 kg.",
              classifications: [
                {
                  code: "0902.10.01",
                  title:
                    "Té verde (sin fermentar) presentado en envases inmediatos con un contenido inferior o igual a 3 kg.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Té verde (sin fermentar) presentado en envases inmediatos con un contenido inferior o igual a 3 kg.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0902.20",
              title: "Té verde (sin fermentar) presentado de otra forma.",
              classifications: [
                {
                  code: "0902.20.01",
                  title: "Té verde (sin fermentar) presentado de otra forma.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Té verde (sin fermentar) presentado de otra forma.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0902.30",
              title:
                "Té negro (fermentado) y té parcialmente fermentado, presentados en envases inmediatos con un contenido inferior o igual a 3 kg.",
              classifications: [
                {
                  code: "0902.30.01",
                  title:
                    "Té negro (fermentado) y té parcialmente fermentado, presentados en envases inmediatos con un contenido inferior o igual a 3 kg.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Té negro (fermentado) y té parcialmente fermentado, presentados en envases inmediatos con un contenido inferior o igual a 3 kg.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0902.40",
              title:
                "Té negro (fermentado) y té parcialmente fermentado, presentados de otra forma.",
              classifications: [
                {
                  code: "0902.40.01",
                  title:
                    "Té negro (fermentado) y té parcialmente fermentado, presentados de otra forma.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Té negro (fermentado) y té parcialmente fermentado, presentados de otra forma.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "09.03",
          title: "Yerba mate.",
          subheadings: [
            {
              code: "0903.00",
              title: "Yerba mate.",
              classifications: [
                {
                  code: "0903.00.01",
                  title: "Yerba mate.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Yerba mate." }],
                },
              ],
            },
          ],
        },
        {
          code: "09.04",
          title:
            "Pimienta del género Piper; frutos de los géneros Capsicum o Pimenta, secos, triturados o pulverizados.",
          subheadings: [
            {
              code: "0904.11",
              title: "Pimienta sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0904.11.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0904.12",
              title: "Triturada o pulverizada.",
              classifications: [
                {
                  code: "0904.12.01",
                  title: "Triturada o pulverizada.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Triturada o pulverizada." }],
                },
              ],
            },
            {
              code: "0904.21",
              title: "Secos, sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0904.21.02",
                  title: "Secos, sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [
                    "FR_I",
                    "CHT",
                    "PS5",
                    "NOM",
                    "SAD",
                    "PACIC",
                    "CUP",
                  ],
                  nicos: [{ code: "01", title: 'Chile "ancho" o "anaheim".' }],
                },
              ],
            },
            {
              code: "0904.22",
              title: "Triturados o pulverizados.",
              classifications: [
                {
                  code: "0904.22.02",
                  title: "Triturados o pulverizados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "PS5", "NOM", "PACIC"],
                  nicos: [{ code: "01", title: 'Chile "ancho" o "anaheim".' }],
                },
              ],
            },
          ],
        },
        {
          code: "09.05",
          title: "Vainilla.",
          subheadings: [
            {
              code: "0905.10",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0905.10.02",
                  title: "Vainilla de Papantla.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Vainilla de Papantla." }],
                },
                {
                  code: "0905.10.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "0905.20",
              title: "Triturada o pulverizada.",
              classifications: [
                {
                  code: "0905.20.02",
                  title: "Vainilla de Papantla.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Vainilla de Papantla." }],
                },
                {
                  code: "0905.20.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "09.06",
          title: "Canela y flores de canelero.",
          subheadings: [
            {
              code: "0906.11",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0906.11.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0906.19",
              title: "Las demás.",
              classifications: [
                {
                  code: "0906.19.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "0906.20",
              title: "Flores de canelero.",
              classifications: [
                {
                  code: "0906.20.01",
                  title: "Flores de canelero.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Flores de canelero." }],
                },
              ],
            },
          ],
        },
        {
          code: "09.07",
          title: "Clavo (frutos, clavillos y pedúnculos).",
          subheadings: [
            {
              code: "0907.10",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0907.10.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0907.20",
              title: "Triturado o pulverizado.",
              classifications: [
                {
                  code: "0907.20.01",
                  title: "Triturado o pulverizado.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Triturado o pulverizado." }],
                },
              ],
            },
          ],
        },
        {
          code: "09.08",
          title: "Nuez moscada, macis, amomos y cardamomos.",
          subheadings: [
            {
              code: "0908.11",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0908.11.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0908.12",
              title: "Triturada o pulverizada.",
              classifications: [
                {
                  code: "0908.12.01",
                  title: "Triturada o pulverizada.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Triturada o pulverizada." }],
                },
              ],
            },
            {
              code: "0908.21",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0908.21.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0908.22",
              title: "Triturado o pulverizado.",
              classifications: [
                {
                  code: "0908.22.01",
                  title: "Triturado o pulverizado.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Triturado o pulverizado." }],
                },
              ],
            },
            {
              code: "0908.31",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0908.31.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0908.32",
              title: "Triturados o pulverizados.",
              classifications: [
                {
                  code: "0908.32.01",
                  title: "Triturados o pulverizados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Triturados o pulverizados." }],
                },
              ],
            },
          ],
        },
        {
          code: "09.09",
          title:
            "Semillas de anís, badiana, hinojo, cilantro, comino o alcaravea; bayas de enebro.",
          subheadings: [
            {
              code: "0909.21",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0909.21.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0909.22",
              title: "Trituradas o pulverizadas.",
              classifications: [
                {
                  code: "0909.22.01",
                  title: "Trituradas o pulverizadas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Trituradas o pulverizadas." }],
                },
              ],
            },
            {
              code: "0909.31",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0909.31.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0909.32",
              title: "Trituradas o pulverizadas.",
              classifications: [
                {
                  code: "0909.32.01",
                  title: "Trituradas o pulverizadas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Trituradas o pulverizadas." }],
                },
              ],
            },
            {
              code: "0909.61",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0909.61.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0909.62",
              title: "Trituradas o pulverizadas.",
              classifications: [
                {
                  code: "0909.62.01",
                  title: "Trituradas o pulverizadas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Trituradas o pulverizadas." }],
                },
              ],
            },
          ],
        },
        {
          code: "09.10",
          title:
            'Jengibre, azafrán, cúrcuma, tomillo, hojas de laurel, "curry" y demás especias.',
          subheadings: [
            {
              code: "0910.11",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "0910.11.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "0910.12",
              title: "Triturado o pulverizado.",
              classifications: [
                {
                  code: "0910.12.01",
                  title: "Triturado o pulverizado.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Triturado o pulverizado." }],
                },
              ],
            },
            {
              code: "0910.20",
              title: "Azafrán.",
              classifications: [
                {
                  code: "0910.20.01",
                  title: "Azafrán.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Azafrán." }],
                },
              ],
            },
            {
              code: "0910.30",
              title: "Cúrcuma.",
              classifications: [
                {
                  code: "0910.30.01",
                  title: "Cúrcuma.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [{ code: "00", title: "Cúrcuma." }],
                },
              ],
            },
            {
              code: "0910.91",
              title: "Mezclas previstas en la Nota 1 b) de este Capítulo.",
              classifications: [
                {
                  code: "0910.91.01",
                  title: "Mezclas previstas en la Nota 1 b) de este Capítulo.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["FR_I", "CHT", "NOM", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Mezclas previstas en la Nota 1 b) de este Capítulo.",
                    },
                  ],
                },
              ],
            },
            {
              code: "0910.99",
              title: "Las demás.",
              classifications: [
                {
                  code: "0910.99.99",
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
      ],
    },
    {
      code: "10",
      title: "Cereales",
      notes: {
        legales: [
          {
            id: "NL-CAP10-1",
            text: "A) Los productos citados en los textos de las partidas de este Capítulo se clasifican en dichas partidas sólo si están presentes los granos, incluso en espigas o con los tallos. B) Este Capítulo no comprende los granos mondados ni trabajados de otra forma. Sin embargo, el arroz descascarillado, blanqueado, pulido, glaseado, escaldado o partido, se clasifica en la partida 10.06.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "10.01",
          title: "Trigo y morcajo (tranquillón).",
          subheadings: [
            {
              code: "1001.11",
              title: "Trigo duro para siembra.",
              classifications: [
                {
                  code: "1001.11.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1001.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "1001.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 67,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1001.91",
              title: "Trigo blando y morcajo para siembra.",
              classifications: [
                {
                  code: "1001.91.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1001.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "1001.99.01",
                  title:
                    "Trigo (excepto el duro) con un contenido de gluten húmedo superior o igual al 27% pero inferior o igual al 40%, determinado por el método directo, en la fecha en que se efectúe la importación.",
                  umt: "Kg",
                  importDuty: 67,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Trigo (excepto el duro) con un contenido de gluten húmedo superior o igual al 27% pero inferior o igual al 40%, determinado por el método directo, en la fecha en que se efectúe la importación.",
                    },
                  ],
                },
                {
                  code: "1001.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 67,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "10.02",
          title: "Centeno.",
          subheadings: [
            {
              code: "1002.10",
              title: "Para siembra.",
              classifications: [
                {
                  code: "1002.10.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1002.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1002.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "10.03",
          title: "Cebada.",
          subheadings: [
            {
              code: "1003.10",
              title: "Para siembra.",
              classifications: [
                {
                  code: "1003.10.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1003.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1003.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "10.04",
          title: "Avena.",
          subheadings: [
            {
              code: "1004.10",
              title: "Para siembra.",
              classifications: [
                {
                  code: "1004.10.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1004.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1004.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "10.05",
          title: "Maíz.",
          subheadings: [
            {
              code: "1005.10",
              title: "Para siembra.",
              classifications: [
                {
                  code: "1005.10.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1005.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1005.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 50,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [
                    { code: "01", title: "Amarillo." },
                    { code: "02", title: "Blanco." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "10.06",
          title: "Arroz.",
          subheadings: [
            {
              code: "1006.10",
              title: "Arroz con cáscara (arroz paddy).",
              classifications: [
                {
                  code: "1006.10.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
                {
                  code: "1006.10.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1006.20",
              title: "Arroz descascarillado (arroz cargo o arroz pardo).",
              classifications: [
                {
                  code: "1006.20.01",
                  title: "Arroz descascarillado (arroz cargo o arroz pardo).",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Arroz descascarillado (arroz cargo o arroz pardo).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1006.30",
              title:
                "Arroz semiblanqueado o blanqueado, incluso pulido o glaseado.",
              classifications: [
                {
                  code: "1006.30.01",
                  title:
                    "Arroz semiblanqueado o blanqueado, incluso pulido o glaseado.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Arroz semiblanqueado o blanqueado, incluso pulido o glaseado.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1006.40",
              title: "Arroz partido.",
              classifications: [
                {
                  code: "1006.40.01",
                  title: "Arroz partido.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Arroz partido." }],
                },
              ],
            },
          ],
        },
        {
          code: "10.07",
          title: "Sorgo de grano (granífero).",
          subheadings: [
            {
              code: "1007.10",
              title: "Para siembra.",
              classifications: [
                {
                  code: "1007.10.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1007.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1007.90.01",
                  title:
                    "Cuando la operación se realice dentro del periodo comprendido entre el 16 de diciembre y el 15 de mayo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cuando la operación se realice dentro del periodo comprendido entre el 16 de diciembre y el 15 de mayo.",
                    },
                  ],
                },
                {
                  code: "1007.90.02",
                  title:
                    "Cuando la operación se realice dentro del periodo comprendido entre el 16 de mayo y el 15 de diciembre.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD", "PACIC"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cuando la operación se realice dentro del periodo comprendido entre el 16 de mayo y el 15 de diciembre.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "10.08",
          title: "Alforfón, mijo y alpiste; los demás cereales.",
          subheadings: [
            {
              code: "1008.10",
              title: "Alforfón.",
              classifications: [
                {
                  code: "1008.10.01",
                  title: "Alforfón.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Alforfón." }],
                },
              ],
            },
            {
              code: "1008.21",
              title: "Para siembra.",
              classifications: [
                {
                  code: "1008.21.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1008.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "1008.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1008.30",
              title: "Alpiste.",
              classifications: [
                {
                  code: "1008.30.01",
                  title: "Alpiste.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Alpiste." }],
                },
              ],
            },
            {
              code: "1008.40",
              title: "Fonio (Digitaria spp.).",
              classifications: [
                {
                  code: "1008.40.01",
                  title: "Fonio (Digitaria spp.).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Fonio (Digitaria spp.)." }],
                },
              ],
            },
            {
              code: "1008.50",
              title: "Quinua (quinoa) (Chenopodium quinoa).",
              classifications: [
                {
                  code: "1008.50.01",
                  title: "Quinua (quinoa) (Chenopodium quinoa).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Quinua (quinoa) (Chenopodium quinoa).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1008.60",
              title: "Triticale.",
              classifications: [
                {
                  code: "1008.60.01",
                  title: "Triticale.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Triticale." }],
                },
              ],
            },
            {
              code: "1008.90",
              title: "Los demás cereales.",
              classifications: [
                {
                  code: "1008.90.91",
                  title: "Los demás cereales.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [{ code: "00", title: "Los demás cereales." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "11",
      title:
        "Productos de la molinería; malta; almidón y fécula; inulina; gluten de trigo",
      notes: {
        legales: [
          {
            id: "NL-CAP11-1",
            text: "Este Capítulo no comprende: a) la malta tostada para sucedáneo del café (partida 09.01 o 21.01, según los casos); b) la harina, grañones, sémola, almidón o fécula, preparados, de la partida 19.01; c) los copos de maíz y demás productos de la partida 19.04; d) las hortalizas preparadas o conservadas de las partidas 20.01, 20.04 o 20.05; e) los productos farmacéuticos (Capítulo 30); f) el almidón y fécula que tengan el carácter de preparaciones de perfumería, de tocador o de cosmética (Capítulo 33).",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP11-1",
            text: "Para los efectos de este Capítulo, por productos de la molinería, debe entenderse los productos molidos, en forma de harinas, sémolas o semolinas, grañones, granos aplastados, perlados, en copos, trabajados (excepto en el caso del arroz descascarillado, blanqueado, pulido, glaseado, escaldado o partido), de los cereales, de las legumbres u hortalizas de la vaina, secas, desvainadas.",
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "11.01",
          title: "Harina de trigo o de morcajo (tranquillón).",
          subheadings: [
            {
              code: "1101.00",
              title: "Harina de trigo o de morcajo (tranquillón).",
              classifications: [
                {
                  code: "1101.00.02",
                  title:
                    "Harina de trigo (excepto trigo duro) con un contenido de cenizas inferior o igual a 1%, calculadas con relación a la materia seca, en la fecha en que se efectúe la importación.",
                  umt: "Kg",
                  importDuty: 67,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Harina de trigo (excepto trigo duro) con un contenido de cenizas inferior o igual a 1%, calculadas con relación a la materia seca, en la fecha en que se efectúe la importación.",
                    },
                  ],
                },
                {
                  code: "1101.00.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 67,
                  exportDuty: 0,
                  regimenes: ["CUP"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "11.02",
          title:
            "Harina de cereales, excepto de trigo o de morcajo (tranquillón).",
          subheadings: [
            {
              code: "1102.20",
              title: "Harina de maíz.",
              classifications: [
                {
                  code: "1102.20.01",
                  title: "Harina de maíz.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Harina de maíz." }],
                },
              ],
            },
            {
              code: "1102.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1102.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "11.03",
          title: 'Grañones, sémola y "pellets", de cereales.',
          subheadings: [
            {
              code: "1103.11",
              title: "De trigo.",
              classifications: [
                {
                  code: "1103.11.01",
                  title: "De trigo.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "De trigo." }],
                },
              ],
            },
            {
              code: "1103.13",
              title: "De maíz.",
              classifications: [
                {
                  code: "1103.13.01",
                  title: "De maíz.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "De maíz." }],
                },
              ],
            },
            {
              code: "1103.19",
              title: "De los demás cereales.",
              classifications: [
                {
                  code: "1103.19.99",
                  title: "De los demás cereales.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "De los demás cereales." }],
                },
              ],
            },
            {
              code: "1103.20",
              title: '"Pellets".',
              classifications: [
                {
                  code: "1103.20.01",
                  title: '"Pellets".',
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: '"Pellets".' }],
                },
              ],
            },
          ],
        },
        {
          code: "11.04",
          title:
            "Granos de cereales trabajados de otro modo (por ejemplo: mondados, aplastados, en copos, perlados, troceados o quebrantados), excepto el arroz de la partida 10.06; germen de cereales entero, aplastado, en copos o molido.",
          subheadings: [
            {
              code: "1104.12",
              title: "Granos aplastados o en copos.",
              classifications: [
                {
                  code: "1104.12.01",
                  title: "Granos aplastados o en copos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Granos aplastados o en copos." },
                  ],
                },
              ],
            },
            {
              code: "1104.19",
              title: "Los demás granos trabajados.",
              classifications: [
                {
                  code: "1104.19.99",
                  title: "Los demás granos trabajados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Los demás granos trabajados." },
                  ],
                },
              ],
            },
            {
              code: "1104.22",
              title: "Los demás granos trabajados.",
              classifications: [
                {
                  code: "1104.22.01",
                  title: "Los demás granos trabajados.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Los demás granos trabajados." },
                  ],
                },
              ],
            },
            {
              code: "1104.23",
              title: "De maíz.",
              classifications: [
                {
                  code: "1104.23.01",
                  title: "De maíz.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "De maíz." }],
                },
              ],
            },
            {
              code: "1104.29",
              title: "De los demás cereales.",
              classifications: [
                {
                  code: "1104.29.99",
                  title: "De los demás cereales.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "De los demás cereales." }],
                },
              ],
            },
            {
              code: "1104.30",
              title: "Germen de cereales entero, aplastado, en copos o molido.",
              classifications: [
                {
                  code: "1104.30.01",
                  title:
                    "Germen de cereales entero, aplastado, en copos o molido.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Germen de cereales entero, aplastado, en copos o molido.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "11.05",
          title:
            'Harina, sémola, polvo, copos, gránulos y "pellets", de papa (patata).',
          subheadings: [
            {
              code: "1105.10",
              title: "Harina, sémola y polvo.",
              classifications: [
                {
                  code: "1105.10.01",
                  title: "Harina, sémola y polvo.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Harina, sémola y polvo." }],
                },
              ],
            },
            {
              code: "1105.20",
              title: 'Copos, gránulos y "pellets".',
              classifications: [
                {
                  code: "1105.20.01",
                  title: 'Copos, gránulos y "pellets".',
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: 'Copos, gránulos y "pellets".' },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "11.06",
          title:
            "Harina, sémola y polvo de las hortalizas de la partida 07.13, de sagú o de las raíces o tubérculos de la partida 07.14 o de los productos del Capítulo 08.",
          subheadings: [
            {
              code: "1106.10",
              title: "De las hortalizas de vaina secas de la partida 07.13.",
              classifications: [
                {
                  code: "1106.10.01",
                  title:
                    "De las hortalizas de vaina secas de la partida 07.13.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De las hortalizas de vaina secas de la partida 07.13.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1106.20",
              title:
                "De sagú o de las raíces o tubérculos de la partida 07.14.",
              classifications: [
                {
                  code: "1106.20.01",
                  title:
                    "De sagú o de las raíces o tubérculos de la partida 07.14.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De sagú o de las raíces o tubérculos de la partida 07.14.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1106.30",
              title: "De los productos del Capítulo 08.",
              classifications: [
                {
                  code: "1106.30.01",
                  title: "De los productos del Capítulo 08.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "De los productos del Capítulo 08." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "11.07",
          title: "Malta (de cebada u otros cereales), incluso tostada.",
          subheadings: [
            {
              code: "1107.10",
              title: "Sin tostar.",
              classifications: [
                {
                  code: "1107.10.01",
                  title: "Sin tostar.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Sin tostar." }],
                },
              ],
            },
            {
              code: "1107.20",
              title: "Tostada.",
              classifications: [
                {
                  code: "1107.20.01",
                  title: "Tostada.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Tostada." }],
                },
              ],
            },
          ],
        },
        {
          code: "11.08",
          title: "Almidón y fécula; inulina.",
          subheadings: [
            {
              code: "1108.11",
              title: "Almidón de trigo.",
              classifications: [
                {
                  code: "1108.11.01",
                  title: "Almidón de trigo.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Almidón de trigo." }],
                },
              ],
            },
            {
              code: "1108.12",
              title: "Almidón de maíz.",
              classifications: [
                {
                  code: "1108.12.01",
                  title: "Almidón de maíz.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PACIC"],
                  nicos: [{ code: "00", title: "Almidón de maíz." }],
                },
              ],
            },
            {
              code: "1108.13",
              title: "Fécula de papa (patata).",
              classifications: [
                {
                  code: "1108.13.01",
                  title: "Fécula de papa (patata).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Fécula de papa (patata)." }],
                },
              ],
            },
            {
              code: "1108.14",
              title: "Fécula de yuca (mandioca).",
              classifications: [
                {
                  code: "1108.14.01",
                  title: "Fécula de yuca (mandioca).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Fécula de yuca (mandioca)." }],
                },
              ],
            },
            {
              code: "1108.19",
              title: "Los demás almidones y féculas.",
              classifications: [
                {
                  code: "1108.19.91",
                  title: "Los demás almidones y féculas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Los demás almidones y féculas." },
                  ],
                },
              ],
            },
            {
              code: "1108.20",
              title: "Inulina.",
              classifications: [
                {
                  code: "1108.20.01",
                  title: "Inulina.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Inulina." }],
                },
              ],
            },
          ],
        },
        {
          code: "11.09",
          title: "Gluten de trigo, incluso seco.",
          subheadings: [
            {
              code: "1109.00",
              title: "Gluten de trigo, incluso seco.",
              classifications: [
                {
                  code: "1109.00.01",
                  title: "Gluten de trigo, incluso seco.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM", "SAD"],
                  nicos: [
                    { code: "00", title: "Gluten de trigo, incluso seco." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "12",
      title:
        "Semillas y frutos oleaginosos; semillas y frutos diversos; plantas industriales o medicinales; paja y forraje",
      notes: {
        legales: [
          {
            id: "NL-CAP12-1",
            text: 'La nuez y la almendra de palma (palmiste), las semillas de algodón, ricino, sésamo (ajonjolí), mostaza, cártamo, amapola (adormidera) y "karité", entre otras, se consideran semillas oleaginosas de la partida 12.07. Por el contrario, se excluyen de dicha partida los productos de las partidas 08.01 o 08.02, así como las aceitunas (Capítulos 07 o 20).',
          },
          {
            id: "NL-CAP12-2",
            text: "La partida 12.08 comprende no solo la harina sin desgrasar, sino también la desgrasada parcialmente o la que ha sido desgrasada y después total o parcialmente reengrasada con su propio aceite. Por el contrario, se excluyen los residuos de las partidas 23.04 a 23.06.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "12.01",
          title:
            "Habas (porotos, frijoles, fréjoles) de soja (soya), incluso quebrantadas.",
          subheadings: [
            {
              code: "1201.10",
              title: "Para siembra.",
              classifications: [
                {
                  code: "1201.10.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1201.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1201.90.01",
                  title:
                    "Cuando la operación se realice dentro del periodo comprendido entre el 1o. de enero y el 30 de septiembre.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cuando la operación se realice dentro del periodo comprendido entre el 1o. de enero y el 30 de septiembre.",
                    },
                  ],
                },
                {
                  code: "1201.90.02",
                  title:
                    "Cuando la operación se realice dentro del periodo comprendido entre el 1o. de octubre y el 31 de diciembre.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAD", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cuando la operación se realice dentro del periodo comprendido entre el 1o. de octubre y el 31 de diciembre.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "12.02",
          title:
            "Cacahuates (cacahuetes, maníes) sin tostar ni cocer de otro modo, incluso sin cáscara o quebrantados.",
          subheadings: [
            {
              code: "1202.30",
              title: "Para siembra.",
              classifications: [
                {
                  code: "1202.30.01",
                  title: "Para siembra.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Para siembra." }],
                },
              ],
            },
            {
              code: "1202.41",
              title: "Con cáscara.",
              classifications: [
                {
                  code: "1202.41.01",
                  title: "Con cáscara.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Con cáscara." }],
                },
              ],
            },
            {
              code: "1202.42",
              title: "Sin cáscara, incluso quebrantados.",
              classifications: [
                {
                  code: "1202.42.01",
                  title: "Sin cáscara, incluso quebrantados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "00", title: "Sin cáscara, incluso quebrantados." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "12.03",
          title: "Copra.",
          subheadings: [
            {
              code: "1203.00",
              title: "Copra.",
              classifications: [
                {
                  code: "1203.00.01",
                  title: "Copra.",
                  umt: "Kg",
                  importDuty: 45,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Copra." }],
                },
              ],
            },
          ],
        },
        {
          code: "12.04",
          title: "Semillas de lino, incluso quebrantadas.",
          subheadings: [
            {
              code: "1204.00",
              title: "Semillas de lino, incluso quebrantadas.",
              classifications: [
                {
                  code: "1204.00.01",
                  title: "Semillas de lino, incluso quebrantadas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Semillas de lino, incluso quebrantadas.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "12.05",
          title: "Semillas de nabo (nabina) o de colza, incluso quebrantadas.",
          subheadings: [
            {
              code: "1205.10",
              title:
                "Semillas de nabo (nabina) o de colza con bajo contenido de ácido erúcico.",
              classifications: [
                {
                  code: "1205.10.01",
                  title:
                    "Semillas de nabo (nabina) o de colza con bajo contenido de ácido erúcico.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Semillas de nabo (nabina) o de colza con bajo contenido de ácido erúcico.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1205.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1205.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "12.06",
          title: "Semillas de girasol, incluso quebrantadas.",
          subheadings: [
            {
              code: "1206.00",
              title: "Semillas de girasol, incluso quebrantadas.",
              classifications: [
                {
                  code: "1206.00.02",
                  title: "Semillas de girasol, incluso quebrantadas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "01", title: "Para siembra." },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "12.07",
          title:
            "Las demás semillas y frutos oleaginosos, incluso quebrantados.",
          subheadings: [
            {
              code: "1207.10",
              title: "Nueces y almendras de palma (palmiste).",
              classifications: [
                {
                  code: "1207.10.01",
                  title: "Nueces y almendras de palma (palmiste).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "Nueces y almendras de palma (palmiste).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1207.40",
              title: "Semillas de sésamo (ajonjolí).",
              classifications: [
                {
                  code: "1207.40.01",
                  title: "Semillas de sésamo (ajonjolí).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "00", title: "Semillas de sésamo (ajonjolí)." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "12.08",
          title:
            "Harina de semillas o de frutos oleaginosos, excepto la harina de mostaza.",
          subheadings: [
            {
              code: "1208.10",
              title: "De habas (porotos, frijoles, fréjoles) de soja (soya).",
              classifications: [
                {
                  code: "1208.10.01",
                  title:
                    "De habas (porotos, frijoles, fréjoles) de soja (soya).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De habas (porotos, frijoles, fréjoles) de soja (soya).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1208.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1208.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "12.09",
          title: "Semillas, frutos y esporas, para siembra.",
          subheadings: [
            {
              code: "1209.10",
              title: "Semillas de remolacha azucarera.",
              classifications: [
                {
                  code: "1209.10.01",
                  title: "Semillas de remolacha azucarera.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    { code: "00", title: "Semillas de remolacha azucarera." },
                  ],
                },
              ],
            },
            {
              code: "1209.21",
              title: "De alfalfa.",
              classifications: [
                {
                  code: "1209.21.01",
                  title: "De alfalfa.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "De alfalfa." }],
                },
              ],
            },
            {
              code: "1209.22",
              title: "De trébol (Trifolium spp.).",
              classifications: [
                {
                  code: "1209.22.01",
                  title: "De trébol (Trifolium spp.).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "De trébol (Trifolium spp.)." }],
                },
              ],
            },
            {
              code: "1209.23",
              title: "De festucas.",
              classifications: [
                {
                  code: "1209.23.01",
                  title: "De festucas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "De festucas." }],
                },
              ],
            },
            {
              code: "1209.24",
              title: "De pasto azul de Kentucky (Poa pratensis L.).",
              classifications: [
                {
                  code: "1209.24.01",
                  title: "De pasto azul de Kentucky (Poa pratensis L.).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title: "De pasto azul de Kentucky (Poa pratensis L.).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1209.25",
              title: "De ballico (Lolium multiflorum Lam., Lolium perenne L.).",
              classifications: [
                {
                  code: "1209.25.01",
                  title:
                    "De ballico (Lolium multiflorum Lam., Lolium perenne L.).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "De ballico (Lolium multiflorum Lam., Lolium perenne L.).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1209.29",
              title: "Las demás.",
              classifications: [
                {
                  code: "1209.29.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "1209.30",
              title:
                "Semillas de plantas herbáceas utilizadas principalmente por sus flores.",
              classifications: [
                {
                  code: "1209.30.01",
                  title:
                    "Semillas de plantas herbáceas utilizadas principalmente por sus flores.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Semillas de plantas herbáceas utilizadas principalmente por sus flores.",
                    },
                  ],
                },
              ],
            },
            {
              code: "1209.91",
              title: "Semillas de hortalizas.",
              classifications: [
                {
                  code: "1209.91.01",
                  title: "Semillas de hortalizas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Semillas de hortalizas." }],
                },
              ],
            },
            {
              code: "1209.99",
              title: "Las demás.",
              classifications: [
                {
                  code: "1209.99.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "12.10",
          title:
            'Conos de lúpulo frescos o secos, incluso triturados, molidos o en "pellets"; lupulino.',
          subheadings: [
            {
              code: "1210.10",
              title: 'Conos de lúpulo sin triturar ni moler ni en "pellets".',
              classifications: [
                {
                  code: "1210.10.01",
                  title:
                    'Conos de lúpulo sin triturar ni moler ni en "pellets".',
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Conos de lúpulo sin triturar ni moler ni en "pellets".',
                    },
                  ],
                },
              ],
            },
            {
              code: "1210.20",
              title:
                'Conos de lúpulo triturados, molidos o en "pellets"; lupulino.',
              classifications: [
                {
                  code: "1210.20.01",
                  title:
                    'Conos de lúpulo triturados, molidos o en "pellets"; lupulino.',
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Conos de lúpulo triturados, molidos o en "pellets"; lupulino.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "12.11",
          title:
            "Plantas, partes de plantas, semillas y frutos de las especies utilizadas principalmente en perfumería, medicina o para usos insecticidas, parasiticidas o similares, frescos, refrigerados, congelados o secos, incluso cortados, quebrantados o pulverizados.",
          subheadings: [
            {
              code: "1211.20",
              title: "Raíces de ginseng.",
              classifications: [
                {
                  code: "1211.20.01",
                  title: "Raíces de ginseng.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Raíces de ginseng." }],
                },
              ],
            },
            {
              code: "1211.30",
              title: "Hojas de coca.",
              classifications: [
                {
                  code: "1211.30.01",
                  title: "Hojas de coca.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Hojas de coca." }],
                },
              ],
            },
            {
              code: "1211.40",
              title: "Paja de adormidera.",
              classifications: [
                {
                  code: "1211.40.01",
                  title: "Paja de adormidera.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Paja de adormidera." }],
                },
              ],
            },
            {
              code: "1211.50",
              title: "Efedra.",
              classifications: [
                {
                  code: "1211.50.01",
                  title: "Efedra.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SEM"],
                  nicos: [{ code: "00", title: "Efedra." }],
                },
              ],
            },
            {
              code: "1211.60",
              title: "Corteza de cerezo africano (Prunus africana).",
              classifications: [
                {
                  code: "1211.60.01",
                  title: "Corteza de cerezo africano (Prunus africana).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAL", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Corteza de cerezo africano (Prunus africana).",
                    },
                  ],
                },
              ],
            },
            {
              code: "1211.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1211.90.02",
                  title: "De marihuana (Género Cannabis).",
                  umt: "Prohibida",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "De marihuana (Género Cannabis)." },
                  ],
                },
                {
                  code: "1211.90.91",
                  title:
                    "Los demás, preparados o conservados conforme a lo indicado en la partida 20.08, refrigerados o congelados.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["CHT", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Los demás, preparados o conservados conforme a lo indicado en la partida 20.08, refrigerados o congelados.",
                    },
                  ],
                },
                {
                  code: "1211.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SAD", "SAL", "SEM"],
                  nicos: [
                    { code: "01", title: "Manzanilla." },
                    {
                      code: "02",
                      title:
                        "Tubérculos raíces, tallos o partes de plantas, aunque se presenten pulverizados, cuando contengan saponinas, cuyo agrupamiento aglucónico sea un esteroide.",
                    },
                    { code: "03", title: "Flor de jamaica." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "12.12",
          title:
            "Algarrobas, algas, remolacha azucarera y caña de azúcar, frescas, refrigeradas, congeladas o secas, incluso pulverizadas; huesos (carozos) y almendras de frutos y demás productos vegetales (incluidas las raíces de achicoria sin tostar de la variedad Cichorium intybus sativum) empleados principalmente en la alimentación humana, no expresados ni comprendidos en otra parte.",
          subheadings: [
            {
              code: "1212.21",
              title: "Aptas para la alimentación humana.",
              classifications: [
                {
                  code: "1212.21.01",
                  title: "Congeladas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Congeladas." }],
                },
                {
                  code: "1212.21.02",
                  title:
                    "Algas secas de las especies Porphyra Yezoensis o Porphyra Tenera (alga nori).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Algas secas de las especies Porphyra Yezoensis o Porphyra Tenera (alga nori).",
                    },
                  ],
                },
                {
                  code: "1212.21.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAL"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "1212.29",
              title: "Las demás.",
              classifications: [
                {
                  code: "1212.29.01",
                  title: "Congeladas.",
                  umt: "Kg",
                  importDuty: 20,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Congeladas." }],
                },
                {
                  code: "1212.29.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "1212.91",
              title: "Remolacha azucarera.",
              classifications: [
                {
                  code: "1212.91.01",
                  title: "Remolacha azucarera.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Remolacha azucarera." }],
                },
              ],
            },
            {
              code: "1212.92",
              title: "Algarrobas.",
              classifications: [
                {
                  code: "1212.92.02",
                  title: "Algarrobas.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Algarrobas." }],
                },
              ],
            },
            {
              code: "1212.93",
              title: "Caña de azúcar.",
              classifications: [
                {
                  code: "1212.93.01",
                  title: "Caña de azúcar.",
                  umt: "Kg",
                  importDuty: 36,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Caña de azúcar." }],
                },
              ],
            },
            {
              code: "1212.94",
              title: "Raíces de achicoria.",
              classifications: [
                {
                  code: "1212.94.02",
                  title: "Raíces de achicoria.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD"],
                  nicos: [{ code: "00", title: "Raíces de achicoria." }],
                },
              ],
            },
            {
              code: "1212.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "1212.99.99",
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
          code: "12.13",
          title:
            'Paja y cascabillo de cereales, en bruto, incluso picados, molidos, prensados o en "pellets".',
          subheadings: [
            {
              code: "1213.00",
              title:
                'Paja y cascabillo de cereales, en bruto, incluso picados, molidos, prensados o en "pellets".',
              classifications: [
                {
                  code: "1213.00.01",
                  title:
                    'Paja y cascabillo de cereales, en bruto, incluso picados, molidos, prensados o en "pellets".',
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Paja y cascabillo de cereales, en bruto, incluso picados, molidos, prensados o en "pellets".',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "12.14",
          title:
            'Nabos forrajeros, remolachas forrajeras, raíces forrajeras, heno, alfalfa, trébol, esparceta, coles forrajeras, altramuces, vezas y productos forrajeros similares, incluso en "pellets".',
          subheadings: [
            {
              code: "1214.10",
              title: 'Harina y "pellets" de alfalfa.',
              classifications: [
                {
                  code: "1214.10.01",
                  title: 'Harina y "pellets" de alfalfa.',
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [
                    { code: "00", title: 'Harina y "pellets" de alfalfa.' },
                  ],
                },
              ],
            },
            {
              code: "1214.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1214.90.01",
                  title: "Alfalfa.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Alfalfa." }],
                },
                {
                  code: "1214.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["EMB", "SAD", "CUP"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "13",
      title: "Gomas, resinas y demás jugos y extractos vegetales",
      notes: {
        legales: [
          {
            id: "NL-CAP13-1",
            text: "La partida 13.02 comprende, entre otros, los extractos de regaliz, piretro (pelitre), lúpulo o áloe, y el opio.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "13.01",
          title:
            "Goma laca; gomas, resinas, gomorresinas y oleorresinas (por ejemplo, bálsamos), naturales.",
          subheadings: [
            {
              code: "1301.20",
              title: "Goma arábiga.",
              classifications: [
                {
                  code: "1301.20.01",
                  title: "Goma arábiga.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Goma arábiga." }],
                },
              ],
            },
            {
              code: "1301.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1301.90.99",
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
          code: "13.02",
          title:
            "Jugos y extractos vegetales; materias pécticas, pectinatos y pectatos; agar-agar y demás mucílagos y espesativos derivados de los vegetales, incluso modificados.",
          subheadings: [
            {
              code: "1302.11",
              title: "Opio.",
              classifications: [
                {
                  code: "1302.11.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1302.12",
              title: "De regaliz.",
              classifications: [
                {
                  code: "1302.12.02",
                  title: "De regaliz.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "De regaliz." }],
                },
              ],
            },
            {
              code: "1302.13",
              title: "De lúpulo.",
              classifications: [
                {
                  code: "1302.13.01",
                  title: "De lúpulo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "De lúpulo." }],
                },
              ],
            },
            {
              code: "1302.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "1302.19.99",
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
              code: "1302.20",
              title: "Materias pécticas, pectinatos y pectatos.",
              classifications: [
                {
                  code: "1302.20.02",
                  title: "Materias pécticas, pectinatos y pectatos.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAL"],
                  nicos: [
                    { code: "01", title: "Pectinas." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "1302.31",
              title: "Agar-agar.",
              classifications: [
                {
                  code: "1302.31.01",
                  title: "Agar-agar.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Agar-agar." }],
                },
              ],
            },
            {
              code: "1302.32",
              title:
                "Mucílagos y espesativos de la algarroba o de sus semillas o de las semillas de guar, incluso modificados.",
              classifications: [
                {
                  code: "1302.32.01",
                  title: "Harina o mucílago de algarroba.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    { code: "00", title: "Harina o mucílago de algarroba." },
                  ],
                },
                {
                  code: "1302.32.02",
                  title: "Goma guar.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Goma guar." }],
                },
                {
                  code: "1302.32.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 15,
                  exportDuty: 0,
                  regimenes: ["SAL"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "1302.39",
              title: "Los demás.",
              classifications: [
                {
                  code: "1302.39.99",
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
      ],
    },
    {
      code: "14",
      title:
        "Materias trenzables y demás productos de origen vegetal, no expresados ni comprendidos en otra parte",
      notes: {
        legales: [
          {
            id: "NL-CAP14-1",
            text: "Se excluyen de este Capítulo y se clasifican en la Sección XI, las materias y fibras vegetales de las especies principalmente utilizadas para la fabricación de textiles, cualquiera que sea su preparación, así como las materias vegetales trabajadas especialmente para su utilización exclusiva como materia textil.",
          },
          {
            id: "NL-CAP14-2",
            text: "La partida 14.01 comprende, entre otras, el bambú (incluso hendido, aserrado longitudinalmente o cortado en longitudes determinadas, con los extremos redondeados, blanqueado, ignifugado, pulido o teñido), los trozos de mimbre, de caña y similares, la médula de ratán (roten) y el ratán (roten) hilado. No se clasifican en esta partida las tablillas, láminas o cintas de madera (partida 44.04).",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "14.01",
          title:
            "Materias vegetales de las especies utilizadas principalmente en cestería o espartería (por ejemplo: bambú, ratán (roten), caña, junco, mimbre, rafia, paja de cereales limpiada, blanqueada o teñida, corteza de tilo).",
          subheadings: [
            {
              code: "1401.10",
              title: "Bambú.",
              classifications: [
                {
                  code: "1401.10.01",
                  title: "Bambú.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SEM"],
                  nicos: [{ code: "00", title: "Bambú." }],
                },
              ],
            },
            {
              code: "1401.20",
              title: "Ratán (roten).",
              classifications: [
                {
                  code: "1401.20.01",
                  title: "Ratán (roten).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["SEM"],
                  nicos: [{ code: "00", title: "Ratán (roten)." }],
                },
              ],
            },
            {
              code: "1401.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "1401.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["SEM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "14.04",
          title:
            "Productos vegetales no expresados ni comprendidos en otra parte.",
          subheadings: [
            {
              code: "1404.20",
              title: "Línteres de algodón.",
              classifications: [
                {
                  code: "1404.20.01",
                  title: "Línteres de algodón.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [{ code: "00", title: "Línteres de algodón." }],
                },
              ],
            },
            {
              code: "1404.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "1404.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
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
