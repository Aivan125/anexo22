import type { Section } from "@/types/clasificacion-arancelaria";

export const sectionV: Section = {
  code: "V",
  title: "Productos minerales",
  notes: {
    legales: [],
    nacionales: [],
    explicativas: [],
  },
  chapters: [
    {
      code: "25",
      title: "Sal; azufre; tierras y piedras; yesos, cales y cementos",
      notes: {
        legales: [
          {
            id: "NL-CAP25-1",
            text: "Salvo disposición en contrario y a reserva de lo previsto en la Nota 4 siguiente, solo se clasifican en las partidas de este Capítulo los productos en bruto o los productos lavados (incluso con sustancias químicas que eliminen las impurezas sin cambiar la estructura del producto), quebrantados, triturados, molidos, pulverizados, levigados, cribados, tamizados, enriquecidos por flotación, separación magnética u otros procedimientos mecánicos o físicos (excepto la cristalización), pero no los productos tostados, calcinados, los obtenidos por mezcla o los sometidos a un tratamiento que supere al indicado en cada partida. Se puede añadir a los productos de este Capítulo una sustancia antipolvo, siempre que no haga al producto más apto para usos determinados que para uso general.",
          },
          {
            id: "NL-CAP25-2",
            text: "Este Capítulo no comprende: a) el azufre sublimado o precipitado ni el coloidal (partida 28.02); b) las tierras colorantes con un contenido de hierro combinado, expresado en Fe2O3, superior o igual al 70% en peso (partida 28.21); c) los medicamentos y demás productos del Capítulo 30; d) las preparaciones de perfumería, de tocador o de cosmética (Capítulo 33); e) el aglomerado de dolomita (partida 38.16); f) los adoquines, encintados (bordillos) y losas para pavimentos (partida 68.01); los cubos, dados y artículos similares para mosaicos (partida 68.02); las pizarras para tejados o revestimientos de edificios (partida 68.03); g) las piedras preciosas o semipreciosas (partidas 71.02 o 71.03); h) los cristales cultivados de cloruro de sodio o de óxido de magnesio (excepto los elementos de óptica) de peso unitario superior o igual a 2.5 g, de la partida 38.24; los elementos de óptica de cloruro de sodio o de óxido de magnesio (partida 90.01); ij) las tizas para billar (partida 95.04); k) las tizas para escribir o dibujar y los jaboncillos (tizas) de sastre (partida 96.09).",
          },
          {
            id: "NL-CAP25-3",
            text: "Cualquier producto susceptible de clasificarse en la partida 25.17 y en otra partida de este Capítulo, se clasifica en la partida 25.17.",
          },
          {
            id: "NL-CAP25-4",
            text: "La partida 25.30 comprende, entre otras: la vermiculita, la perlita y las cloritas, sin dilatar; las tierras colorantes, incluso calcinadas o mezcladas entre sí; los óxidos de hierro micáceos naturales; la espuma de mar natural (incluso en trozos pulidos); el ámbar natural (succino); la espuma de mar y el ámbar reconstituidos, en plaquitas, varillas, barras o formas similares, simplemente moldeados; el azabache; el carbonato de estroncio (estroncianita), incluso calcinado, excepto el óxido de estroncio; los restos y cascos de cerámica, trozos de ladrillo y bloques de hormigón rotos.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "25.01",
          title:
            "Sal (incluidas la de mesa y la desnaturalizada) y cloruro de sodio puro, incluso en disolución acuosa o con adición de antiaglomerantes o de agentes que garanticen una buena fluidez; agua de mar.",
          subheadings: [
            {
              code: "2501.00",
              title:
                "Sal (incluidas la de mesa y la desnaturalizada) y cloruro de sodio puro, incluso en disolución acuosa o con adición de antiaglomerantes o de agentes que garanticen una buena fluidez; agua de mar.",
              classifications: [
                {
                  code: "2501.00.02",
                  title:
                    "Sal (incluidas la de mesa y la desnaturalizada) y cloruro de sodio puro, incluso en disolución acuosa o con adición de antiaglomerantes o de agentes que garanticen una buena fluidez; agua de mar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB", "SAL"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Sal (incluidas la de mesa y la desnaturalizada) y cloruro de sodio puro, incluso en disolución acuosa o con adición de antiaglomerantes o de agentes que garanticen una buena fluidez; agua de mar.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.02",
          title: "Piritas de hierro sin tostar.",
          subheadings: [
            {
              code: "2502.00",
              title: "Piritas de hierro sin tostar.",
              classifications: [
                {
                  code: "2502.00.01",
                  title: "Piritas de hierro sin tostar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    { code: "00", title: "Piritas de hierro sin tostar." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.03",
          title:
            "Azufre de cualquier clase, excepto el sublimado, el precipitado y el coloidal.",
          subheadings: [
            {
              code: "2503.00",
              title:
                "Azufre de cualquier clase, excepto el sublimado, el precipitado y el coloidal.",
              classifications: [
                {
                  code: "2503.00.02",
                  title:
                    "Azufre de cualquier clase, excepto el sublimado, el precipitado y el coloidal.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB", "SED"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Azufre de cualquier clase, excepto el sublimado, el precipitado y el coloidal.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.04",
          title: "Grafito natural.",
          subheadings: [
            {
              code: "2504.10",
              title: "En polvo o en escamas.",
              classifications: [
                {
                  code: "2504.10.01",
                  title: "En polvo o en escamas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "En polvo o en escamas." }],
                },
              ],
            },
            {
              code: "2504.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2504.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.05",
          title:
            "Arenas naturales de cualquier clase, incluso coloreadas, excepto las arenas metalíferas del Capítulo 26.",
          subheadings: [
            {
              code: "2505.10",
              title: "Arenas silíceas y arenas cuarzosas.",
              classifications: [
                {
                  code: "2505.10.01",
                  title: "Arenas silíceas y arenas cuarzosas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Arenas silíceas y arenas cuarzosas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2505.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "2505.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.06",
          title:
            "Cuarzo (excepto las arenas naturales); cuarcita, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
          subheadings: [
            {
              code: "2506.10",
              title: "Cuarzo.",
              classifications: [
                {
                  code: "2506.10.01",
                  title: "Cuarzo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Cuarzo." }],
                },
              ],
            },
            {
              code: "2506.20",
              title: "Cuarcita.",
              classifications: [
                {
                  code: "2506.20.02",
                  title: "Cuarcita.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Cuarcita." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.07",
          title: "Caolín y demás arcillas caolínicas, incluso calcinados.",
          subheadings: [
            {
              code: "2507.00",
              title: "Caolín y demás arcillas caolínicas, incluso calcinados.",
              classifications: [
                {
                  code: "2507.00.01",
                  title:
                    "Caolín y demás arcillas caolínicas, incluso calcinados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Caolín y demás arcillas caolínicas, incluso calcinados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.08",
          title:
            "Las demás arcillas (excepto las arcillas dilatadas de la partida 68.06), andalucita, cianita y silimanita, incluso calcinadas; mullita; tierras de chamota o de dinas.",
          subheadings: [
            {
              code: "2508.10",
              title: "Bentonita.",
              classifications: [
                {
                  code: "2508.10.01",
                  title: "Bentonita.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Bentonita." }],
                },
              ],
            },
            {
              code: "2508.30",
              title: "Arcillas refractarias.",
              classifications: [
                {
                  code: "2508.30.01",
                  title: "Arcillas refractarias.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Arcillas refractarias." }],
                },
              ],
            },
            {
              code: "2508.40",
              title: "Las demás arcillas.",
              classifications: [
                {
                  code: "2508.40.91",
                  title: "Las demás arcillas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title: "Tierras decolorantes y tierras de batán.",
                    },
                    { code: "99", title: "Las demás." },
                  ],
                },
              ],
            },
            {
              code: "2508.50",
              title: "Andalucita, cianita y silimanita.",
              classifications: [
                {
                  code: "2508.50.01",
                  title: "Andalucita, cianita y silimanita.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    { code: "00", title: "Andalucita, cianita y silimanita." },
                  ],
                },
              ],
            },
            {
              code: "2508.60",
              title: "Mullita.",
              classifications: [
                {
                  code: "2508.60.01",
                  title: "Mullita.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Mullita." }],
                },
              ],
            },
            {
              code: "2508.70",
              title: "Tierras de chamota o de dinas.",
              classifications: [
                {
                  code: "2508.70.01",
                  title: "Tierras de chamota o de dinas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    { code: "00", title: "Tierras de chamota o de dinas." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.09",
          title: "Creta.",
          subheadings: [
            {
              code: "2509.00",
              title: "Creta.",
              classifications: [
                {
                  code: "2509.00.01",
                  title: "Creta.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Creta." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.10",
          title:
            "Fosfatos de calcio naturales, fosfatos aluminocálcicos naturales y cretas fosfatadas.",
          subheadings: [
            {
              code: "2510.10",
              title: "Sin moler.",
              classifications: [
                {
                  code: "2510.10.02",
                  title: "Sin moler.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Sin moler." }],
                },
              ],
            },
            {
              code: "2510.20",
              title: "Molidos.",
              classifications: [
                {
                  code: "2510.20.01",
                  title: "Molidos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Molidos." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.11",
          title:
            "Sulfato de bario natural (baritina); carbonato de bario natural (witherita), incluso calcinado, excepto el óxido de bario de la partida 28.16.",
          subheadings: [
            {
              code: "2511.10",
              title: "Sulfato de bario natural (baritina).",
              classifications: [
                {
                  code: "2511.10.02",
                  title: "Sulfato de bario natural (baritina).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Sulfato de bario natural (baritina).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2511.20",
              title: "Carbonato de bario natural (witherita).",
              classifications: [
                {
                  code: "2511.20.01",
                  title: "Carbonato de bario natural (witherita).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Carbonato de bario natural (witherita).",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.12",
          title:
            "Harinas silíceas fósiles (por ejemplo: «Kieselguhr», tripolita, diatomita) y demás tierras silíceas análogas, de densidad aparente inferior o igual a 1, incluso calcinadas.",
          subheadings: [
            {
              code: "2512.00",
              title:
                "Harinas silíceas fósiles (por ejemplo: «Kieselguhr», tripolita, diatomita) y demás tierras silíceas análogas, de densidad aparente inferior o igual a 1, incluso calcinadas.",
              classifications: [
                {
                  code: "2512.00.01",
                  title:
                    "Harinas silíceas fósiles (por ejemplo: «Kieselguhr», tripolita, diatomita) y demás tierras silíceas análogas, de densidad aparente inferior o igual a 1, incluso calcinadas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Harinas silíceas fósiles (por ejemplo: «Kieselguhr», tripolita, diatomita) y demás tierras silíceas análogas, de densidad aparente inferior o igual a 1, incluso calcinadas.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.13",
          title:
            "Piedra pómez; esmeril; corindón natural, granate natural y demás abrasivos naturales, incluso tratados térmicamente.",
          subheadings: [
            {
              code: "2513.10",
              title: "Piedra pómez.",
              classifications: [
                {
                  code: "2513.10.01",
                  title: "Piedra pómez.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Piedra pómez." }],
                },
              ],
            },
            {
              code: "2513.20",
              title:
                "Esmeril, corindón natural, granate natural y demás abrasivos naturales.",
              classifications: [
                {
                  code: "2513.20.01",
                  title:
                    "Esmeril, corindón natural, granate natural y demás abrasivos naturales.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Esmeril, corindón natural, granate natural y demás abrasivos naturales.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.14",
          title:
            "Pizarra, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
          subheadings: [
            {
              code: "2514.00",
              title:
                "Pizarra, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
              classifications: [
                {
                  code: "2514.00.01",
                  title:
                    "Pizarra, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Pizarra, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.15",
          title:
            "Mármol, travertinos, «ecaussines» y demás piedras calizas de talla o de construcción de densidad aparente superior o igual a 2.5, y alabastro, incluso desbastados o simplemente troceados, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
          subheadings: [
            {
              code: "2515.11",
              title: "En bruto o desbastados.",
              classifications: [
                {
                  code: "2515.11.01",
                  title: "En bruto o desbastados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "En bruto o desbastados." }],
                },
              ],
            },
            {
              code: "2515.12",
              title:
                "Simplemente troceados, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
              classifications: [
                {
                  code: "2515.12.01",
                  title:
                    "Mármol aserrado en hojas, de espesor superior a 5 cm.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Mármol aserrado en hojas, de espesor superior a 5 cm.",
                    },
                  ],
                },
                {
                  code: "2515.12.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2515.20",
              title:
                "«Ecaussines» y demás piedras calizas de talla o de construcción; alabastro.",
              classifications: [
                {
                  code: "2515.20.01",
                  title:
                    "«Ecaussines» y demás piedras calizas de talla o de construcción; alabastro.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "«Ecaussines» y demás piedras calizas de talla o de construcción; alabastro.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.16",
          title:
            "Granito, pórfido, basalto, arenisca y demás piedras de talla o de construcción, incluso desbastados o simplemente troceados, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
          subheadings: [
            {
              code: "2516.11",
              title: "En bruto o desbastado.",
              classifications: [
                {
                  code: "2516.11.01",
                  title: "En bruto o desbastado.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "En bruto o desbastado." }],
                },
              ],
            },
            {
              code: "2516.12",
              title:
                "Simplemente troceado, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
              classifications: [
                {
                  code: "2516.12.01",
                  title:
                    "Simplemente troceado, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Simplemente troceado, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2516.20",
              title: "Arenisca.",
              classifications: [
                {
                  code: "2516.20.01",
                  title: "Arenisca.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Arenisca." }],
                },
              ],
            },
            {
              code: "2516.90",
              title: "Las demás piedras de talla o de construcción.",
              classifications: [
                {
                  code: "2516.90.91",
                  title: "Las demás piedras de talla o de construcción.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Las demás piedras de talla o de construcción.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.17",
          title:
            "Cantos, grava, piedras machacadas, de los tipos generalmente utilizados para hacer hormigón, o para firmes de carreteras, vías férreas u otros balastos, guijarros y pedernal, incluso tratados térmicamente; macadán de escorias o de desechos industriales similares, incluso con materiales comprendidos en la primera parte de la partida; macadán alquitranado; gránulos, tasquiles (fragmentos) y polvo de piedras de las partidas 25.15 o 25.16, incluso tratados térmicamente.",
          subheadings: [
            {
              code: "2517.10",
              title:
                "Cantos, grava, piedras machacadas, de los tipos generalmente utilizados para hacer hormigón, o para firmes de carreteras, vías férreas u otros balastos, guijarros y pedernal, incluso tratados térmicamente.",
              classifications: [
                {
                  code: "2517.10.01",
                  title:
                    "Cantos, grava, piedras machacadas, de los tipos generalmente utilizados para hacer hormigón, o para firmes de carreteras, vías férreas u otros balastos, guijarros y pedernal, incluso tratados térmicamente.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cantos, grava, piedras machacadas, de los tipos generalmente utilizados para hacer hormigón, o para firmes de carreteras, vías férreas u otros balastos, guijarros y pedernal, incluso tratados térmicamente.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2517.20",
              title:
                "Macadán de escorias o de desechos industriales similares, incluso con materiales citados en la subpartida 2517.10.",
              classifications: [
                {
                  code: "2517.20.01",
                  title:
                    "Macadán de escorias o de desechos industriales similares, incluso con materiales citados en la subpartida 2517.10.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Macadán de escorias o de desechos industriales similares, incluso con materiales citados en la subpartida 2517.10.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2517.30",
              title: "Macadán alquitranado.",
              classifications: [
                {
                  code: "2517.30.01",
                  title: "Macadán alquitranado.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Macadán alquitranado." }],
                },
              ],
            },
            {
              code: "2517.41",
              title: "De mármol.",
              classifications: [
                {
                  code: "2517.41.01",
                  title: "De mármol.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "De mármol." }],
                },
              ],
            },
            {
              code: "2517.49",
              title: "Los demás.",
              classifications: [
                {
                  code: "2517.49.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.18",
          title:
            "Dolomita, incluso sinterizada o calcinada, incluida la dolomita desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares; aglomerado de dolomita.",
          subheadings: [
            {
              code: "2518.10",
              title: "Dolomita sin calcinar ni sinterizar, llamada «cruda».",
              classifications: [
                {
                  code: "2518.10.01",
                  title:
                    "Dolomita sin calcinar ni sinterizar, llamada «cruda».",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Dolomita sin calcinar ni sinterizar, llamada «cruda».",
                    },
                  ],
                },
              ],
            },
            {
              code: "2518.20",
              title: "Dolomita calcinada o sinterizada.",
              classifications: [
                {
                  code: "2518.20.01",
                  title: "Dolomita calcinada o sinterizada.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    { code: "00", title: "Dolomita calcinada o sinterizada." },
                  ],
                },
              ],
            },
            {
              code: "2518.30",
              title: "Aglomerado de dolomita.",
              classifications: [
                {
                  code: "2518.30.01",
                  title: "Aglomerado de dolomita.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Aglomerado de dolomita." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.19",
          title:
            "Carbonato de magnesio natural (magnesita); magnesia electrofundida; magnesia calcinada a muerte (sinterizada), incluso con pequeñas cantidades de otros óxidos añadidos antes de la sinterización; otro óxido de magnesio, incluso puro.",
          subheadings: [
            {
              code: "2519.10",
              title: "Carbonato de magnesio natural (magnesita).",
              classifications: [
                {
                  code: "2519.10.01",
                  title: "Carbonato de magnesio natural (magnesita).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Carbonato de magnesio natural (magnesita).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2519.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2519.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.20",
          title:
            "Yeso natural; anhidrita; yeso fraguable (consistente en yeso natural calcinado o en sulfato de calcio), incluso coloreado o con pequeñas cantidades de aceleradores o retardadores.",
          subheadings: [
            {
              code: "2520.10",
              title: "Yeso natural; anhidrita.",
              classifications: [
                {
                  code: "2520.10.01",
                  title: "Yeso natural; anhidrita.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Yeso natural; anhidrita." }],
                },
              ],
            },
            {
              code: "2520.20",
              title: "Yeso fraguable.",
              classifications: [
                {
                  code: "2520.20.01",
                  title: "Yeso fraguable.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Yeso fraguable." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.21",
          title: "Castinas; piedras para la fabricación de cal o de cemento.",
          subheadings: [
            {
              code: "2521.00",
              title:
                "Castinas; piedras para la fabricación de cal o de cemento.",
              classifications: [
                {
                  code: "2521.00.01",
                  title:
                    "Castinas; piedras para la fabricación de cal o de cemento.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Castinas; piedras para la fabricación de cal o de cemento.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.22",
          title:
            "Cal viva, cal apagada y cal hidráulica, excepto el óxido y el hidróxido de calcio de la partida 28.25.",
          subheadings: [
            {
              code: "2522.10",
              title: "Cal viva.",
              classifications: [
                {
                  code: "2522.10.01",
                  title: "Cal viva.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Cal viva." }],
                },
              ],
            },
            {
              code: "2522.20",
              title: "Cal apagada.",
              classifications: [
                {
                  code: "2522.20.01",
                  title: "Cal apagada.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Cal apagada." }],
                },
              ],
            },
            {
              code: "2522.30",
              title: "Cal hidráulica.",
              classifications: [
                {
                  code: "2522.30.01",
                  title: "Cal hidráulica.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [{ code: "00", title: "Cal hidráulica." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.23",
          title:
            "Cementos hidráulicos (comprendidos los cementos sin pulverizar o «clinker»), incluso coloreados.",
          subheadings: [
            {
              code: "2523.10",
              title: "Cementos sin pulverizar («clinker»).",
              classifications: [
                {
                  code: "2523.10.01",
                  title: "Cementos sin pulverizar («clinker»).",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: [],
                  nicos: [
                    {
                      code: "00",
                      title: "Cementos sin pulverizar («clinker»).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2523.21",
              title: "Cemento blanco, incluso coloreado artificialmente.",
              classifications: [
                {
                  code: "2523.21.01",
                  title: "Cemento blanco, incluso coloreado artificialmente.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cemento blanco, incluso coloreado artificialmente.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2523.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "2523.29.02",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    { code: "01", title: "Cemento gris." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2523.30",
              title: "Cementos aluminosos.",
              classifications: [
                {
                  code: "2523.30.01",
                  title: "Cementos aluminosos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [{ code: "00", title: "Cementos aluminosos." }],
                },
              ],
            },
            {
              code: "2523.90",
              title: "Los demás cementos hidráulicos.",
              classifications: [
                {
                  code: "2523.90.99",
                  title: "Los demás cementos hidráulicos.",
                  umt: "Kg",
                  importDuty: 10,
                  exportDuty: 0,
                  regimenes: ["NOM"],
                  nicos: [
                    { code: "00", title: "Los demás cementos hidráulicos." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.24",
          title: "Amianto (asbesto).",
          subheadings: [
            {
              code: "2524.10",
              title: "Crocidolita.",
              classifications: [
                {
                  code: "2524.10.01",
                  title: "Crocidolita.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [{ code: "00", title: "Crocidolita." }],
                },
              ],
            },
            {
              code: "2524.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2524.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.25",
          title:
            "Mica, incluida la exfoliada en laminillas irregulares («splittings»); desperdicios de mica.",
          subheadings: [
            {
              code: "2525.10",
              title:
                "Mica en bruto o exfoliada en hojas o en laminillas irregulares («splittings»).",
              classifications: [
                {
                  code: "2525.10.01",
                  title:
                    "Mica en bruto o exfoliada en hojas o en laminillas irregulares («splittings»).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Mica en bruto o exfoliada en hojas o en laminillas irregulares («splittings»).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2525.20",
              title: "Mica en polvo.",
              classifications: [
                {
                  code: "2525.20.01",
                  title: "Mica en polvo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Mica en polvo." }],
                },
              ],
            },
            {
              code: "2525.30",
              title: "Desperdicios de mica.",
              classifications: [
                {
                  code: "2525.30.01",
                  title: "Desperdicios de mica.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Desperdicios de mica." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.26",
          title:
            "Esteatita natural, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares; talco.",
          subheadings: [
            {
              code: "2526.10",
              title: "Sin triturar ni pulverizar.",
              classifications: [
                {
                  code: "2526.10.01",
                  title: "Sin triturar ni pulverizar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }],
                },
              ],
            },
            {
              code: "2526.20",
              title: "Triturados o pulverizados.",
              classifications: [
                {
                  code: "2526.20.01",
                  title: "Triturados o pulverizados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Triturados o pulverizados." }],
                },
              ],
            },
          ],
        },
        {
          code: "25.28",
          title:
            "Boratos naturales y sus concentrados (incluso calcinados), excepto los boratos extraídos de las salmueras naturales; ácido bórico natural con un contenido de H3BO3 inferior o igual al 85%, calculado sobre producto seco.",
          subheadings: [
            {
              code: "2528.00",
              title:
                "Boratos naturales y sus concentrados (incluso calcinados), excepto los boratos extraídos de las salmueras naturales; ácido bórico natural con un contenido de H3BO3 inferior o igual al 85%, calculado sobre producto seco.",
              classifications: [
                {
                  code: "2528.00.01",
                  title:
                    "Boratos naturales y sus concentrados (incluso calcinados), excepto los boratos extraídos de las salmueras naturales; ácido bórico natural con un contenido de H3BO3 inferior o igual al 85%, calculado sobre producto seco.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Boratos naturales y sus concentrados (incluso calcinados), excepto los boratos extraídos de las salmueras naturales; ácido bórico natural con un contenido de H3BO3 inferior o igual al 85%, calculado sobre producto seco.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.29",
          title:
            "Feldespato; leucita; nefelina y nefelina sienita; espato flúor.",
          subheadings: [
            {
              code: "2529.10",
              title: "Feldespato.",
              classifications: [
                {
                  code: "2529.10.01",
                  title: "Feldespato.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Feldespato." }],
                },
              ],
            },
            {
              code: "2529.21",
              title:
                "Con un contenido de fluoruro de calcio inferior o igual al 97% en peso.",
              classifications: [
                {
                  code: "2529.21.01",
                  title:
                    "Con un contenido de fluoruro de calcio inferior o igual al 97% en peso.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Con un contenido de fluoruro de calcio inferior o igual al 97% en peso.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2529.22",
              title:
                "Con un contenido de fluoruro de calcio superior al 97% en peso.",
              classifications: [
                {
                  code: "2529.22.01",
                  title:
                    "Con un contenido de fluoruro de calcio superior al 97% en peso.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Con un contenido de fluoruro de calcio superior al 97% en peso.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2529.30",
              title: "Leucita; nefelina y nefelina sienita.",
              classifications: [
                {
                  code: "2529.30.01",
                  title: "Leucita; nefelina y nefelina sienita.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Leucita; nefelina y nefelina sienita.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "25.30",
          title:
            "Materias minerales no expresadas ni comprendidas en otra parte.",
          subheadings: [
            {
              code: "2530.10",
              title: "Vermiculita, perlita y cloritas, sin dilatar.",
              classifications: [
                {
                  code: "2530.10.01",
                  title: "Vermiculita, perlita y cloritas, sin dilatar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Vermiculita, perlita y cloritas, sin dilatar.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2530.20",
              title: "Kieserita, epsomita (sulfatos de magnesio naturales).",
              classifications: [
                {
                  code: "2530.20.01",
                  title:
                    "Kieserita, epsomita (sulfatos de magnesio naturales).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Kieserita, epsomita (sulfatos de magnesio naturales).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2530.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "2530.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 10,
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
    {
      code: "26",
      title: "Minerales metalíferos, escorias y cenizas",
      notes: {
        legales: [
          {
            id: "NL-CAP26-1",
            text: "Este Capítulo no comprende: a) las escorias y desechos industriales similares preparados en forma de macadán (partida 25.17); b) el carbonato de magnesio natural (magnesita), incluso calcinado (partida 25.19); c) los lodos de los depósitos de almacenamiento de aceites de petróleo constituidos principalmente por aceites de este tipo (partida 27.10); d) las escorias de desfosforación del Capítulo 31; e) la lana de escoria, de roca y lanas minerales similares (partida 68.06); f) los desperdicios y desechos de metal precioso o de chapado de metal precioso (plaqué); los demás desperdicios y desechos que contengan metal precioso o compuestos de metal precioso, del tipo de los utilizados principalmente para la recuperación del metal precioso (partida 71.12); g) las matas de cobre, níquel o cobalto, obtenidas por fusión de los minerales (Secciones XIV o XV).",
          },
          {
            id: "NL-CAP26-2",
            text: "En las partidas 26.01 a 26.17, se entiende por minerales, los de las especies mineralógicas efectivamente utilizadas en metalurgia para la extracción del mercurio, de los metales de la partida 28.44 o de los metales de las Secciones XIV o XV, incluso si se destinan a fines no metalúrgicos. Sin embargo, las partidas 26.01 a 26.17 no comprenden las materias minerales que hayan sido sometidas a tratamientos que no sean los normales en metalurgia.",
          },
        ],
        nacionales: [],
        explicativas: [],
      },
      headings: [
        {
          code: "26.01",
          title:
            "Minerales de hierro y sus concentrados, incluidas las piritas de hierro tostadas (cenizas de piritas).",
          subheadings: [
            {
              code: "2601.11",
              title: "Sin aglomerar.",
              classifications: [
                {
                  code: "2601.11.01",
                  title: "Sin aglomerar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [{ code: "00", title: "Sin aglomerar." }],
                },
              ],
            },
            {
              code: "2601.12",
              title: "Aglomerados.",
              classifications: [
                {
                  code: "2601.12.01",
                  title: "Aglomerados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [{ code: "00", title: "Aglomerados." }],
                },
              ],
            },
            {
              code: "2601.20",
              title: "Piritas de hierro tostadas (cenizas de piritas).",
              classifications: [
                {
                  code: "2601.20.01",
                  title: "Piritas de hierro tostadas (cenizas de piritas).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    {
                      code: "00",
                      title: "Piritas de hierro tostadas (cenizas de piritas).",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.02",
          title:
            "Minerales de manganeso y sus concentrados, incluidos los minerales de manganeso ferruginosos y sus concentrados con un contenido de manganeso superior o igual al 20% en peso, sobre producto seco.",
          subheadings: [
            {
              code: "2602.00",
              title:
                "Minerales de manganeso y sus concentrados, incluidos los minerales de manganeso ferruginosos y sus concentrados con un contenido de manganeso superior o igual al 20% en peso, sobre producto seco.",
              classifications: [
                {
                  code: "2602.00.02",
                  title:
                    "Minerales de manganeso y sus concentrados, incluidos los minerales de manganeso ferruginosos y sus concentrados con un contenido de manganeso superior o igual al 20% en peso, sobre producto seco.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Con un contenido de manganeso igual o superior a 46% en peso sobre producto seco.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.03",
          title: "Minerales de cobre y sus concentrados.",
          subheadings: [
            {
              code: "2603.00",
              title: "Minerales de cobre y sus concentrados.",
              classifications: [
                {
                  code: "2603.00.01",
                  title: "Minerales de cobre y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de cobre y sus concentrados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.04",
          title: "Minerales de níquel y sus concentrados.",
          subheadings: [
            {
              code: "2604.00",
              title: "Minerales de níquel y sus concentrados.",
              classifications: [
                {
                  code: "2604.00.01",
                  title: "Minerales de níquel y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de níquel y sus concentrados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.05",
          title: "Minerales de cobalto y sus concentrados.",
          subheadings: [
            {
              code: "2605.00",
              title: "Minerales de cobalto y sus concentrados.",
              classifications: [
                {
                  code: "2605.00.01",
                  title: "Minerales de cobalto y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de cobalto y sus concentrados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.06",
          title: "Minerales de aluminio y sus concentrados.",
          subheadings: [
            {
              code: "2606.00",
              title: "Minerales de aluminio y sus concentrados.",
              classifications: [
                {
                  code: "2606.00.02",
                  title: "Minerales de aluminio y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    { code: "01", title: "Bauxita calcinada." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.07",
          title: "Minerales de plomo y sus concentrados.",
          subheadings: [
            {
              code: "2607.00",
              title: "Minerales de plomo y sus concentrados.",
              classifications: [
                {
                  code: "2607.00.01",
                  title: "Minerales de plomo y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de plomo y sus concentrados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.08",
          title: "Minerales de cinc y sus concentrados.",
          subheadings: [
            {
              code: "2608.00",
              title: "Minerales de cinc y sus concentrados.",
              classifications: [
                {
                  code: "2608.00.01",
                  title: "Minerales de cinc y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de cinc y sus concentrados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.09",
          title: "Minerales de estaño y sus concentrados.",
          subheadings: [
            {
              code: "2609.00",
              title: "Minerales de estaño y sus concentrados.",
              classifications: [
                {
                  code: "2609.00.01",
                  title: "Minerales de estaño y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de estaño y sus concentrados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.10",
          title: "Minerales de cromo y sus concentrados.",
          subheadings: [
            {
              code: "2610.00",
              title: "Minerales de cromo y sus concentrados.",
              classifications: [
                {
                  code: "2610.00.02",
                  title: "Minerales de cromo y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    { code: "01", title: "Minerales de cromo." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.11",
          title: "Minerales de volframio (tungsteno) y sus concentrados.",
          subheadings: [
            {
              code: "2611.00",
              title: "Minerales de volframio (tungsteno) y sus concentrados.",
              classifications: [
                {
                  code: "2611.00.01",
                  title:
                    "Minerales de volframio (tungsteno) y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Minerales de volframio (tungsteno) y sus concentrados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.12",
          title: "Minerales de uranio o torio, y sus concentrados.",
          subheadings: [
            {
              code: "2612.10",
              title: "Minerales de uranio y sus concentrados.",
              classifications: [
                {
                  code: "2612.10.01",
                  title: "Minerales de uranio y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB", "SEN"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de uranio y sus concentrados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2612.20",
              title: "Minerales de torio y sus concentrados.",
              classifications: [
                {
                  code: "2612.20.01",
                  title: "Minerales de torio y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB", "SEN"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de torio y sus concentrados.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.13",
          title: "Minerales de molibdeno y sus concentrados.",
          subheadings: [
            {
              code: "2613.10",
              title: "Tostados.",
              classifications: [
                {
                  code: "2613.10.01",
                  title: "Tostados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [{ code: "00", title: "Tostados." }],
                },
              ],
            },
            {
              code: "2613.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2613.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "26.14",
          title: "Minerales de titanio y sus concentrados.",
          subheadings: [
            {
              code: "2614.00",
              title: "Minerales de titanio y sus concentrados.",
              classifications: [
                {
                  code: "2614.00.03",
                  title: "Minerales de titanio y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    { code: "01", title: "Ilmenita." },
                    {
                      code: "02",
                      title:
                        "Arenas opacificantes micronizadas que contengan 96% o menos de óxido de titanio (arenas de rutilo).",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.15",
          title:
            "Minerales de niobio, tantalio, vanadio o circonio, y sus concentrados.",
          subheadings: [
            {
              code: "2615.10",
              title: "Minerales de circonio y sus concentrados.",
              classifications: [
                {
                  code: "2615.10.02",
                  title: "Minerales de circonio y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Arenas de circón con 70% o menos de óxido de circonio, con granulometría menor a 120 mallas (0.125 mm).",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2615.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2615.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "26.16",
          title: "Minerales de los metales preciosos y sus concentrados.",
          subheadings: [
            {
              code: "2616.10",
              title: "Minerales de plata y sus concentrados.",
              classifications: [
                {
                  code: "2616.10.01",
                  title: "Minerales de plata y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de plata y sus concentrados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2616.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2616.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "26.17",
          title: "Los demás minerales y sus concentrados.",
          subheadings: [
            {
              code: "2617.10",
              title: "Minerales de antimonio y sus concentrados.",
              classifications: [
                {
                  code: "2617.10.01",
                  title: "Minerales de antimonio y sus concentrados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Minerales de antimonio y sus concentrados.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2617.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2617.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "26.18",
          title: "Escorias granuladas (arena de escorias) de la siderurgia.",
          subheadings: [
            {
              code: "2618.00",
              title:
                "Escorias granuladas (arena de escorias) de la siderurgia.",
              classifications: [
                {
                  code: "2618.00.01",
                  title:
                    "Escorias granuladas (arena de escorias) de la siderurgia.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Escorias granuladas (arena de escorias) de la siderurgia.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.19",
          title:
            "Escorias (excepto las granuladas), batiduras y demás desperdicios de la siderurgia.",
          subheadings: [
            {
              code: "2619.00",
              title:
                "Escorias (excepto las granuladas), batiduras y demás desperdicios de la siderurgia.",
              classifications: [
                {
                  code: "2619.00.01",
                  title:
                    "Escorias (excepto las granuladas), batiduras y demás desperdicios de la siderurgia.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Escorias (excepto las granuladas), batiduras y demás desperdicios de la siderurgia.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "26.20",
          title:
            "Cenizas y residuos (excepto los de la siderurgia) que contengan metal, arsénico o sus compuestos.",
          subheadings: [
            {
              code: "2620.11",
              title: "De galvanización con cinc (polvo de cinc).",
              classifications: [
                {
                  code: "2620.11.01",
                  title: "De galvanización con cinc (polvo de cinc).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "De galvanización con cinc (polvo de cinc).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2620.19",
              title: "Las demás.",
              classifications: [
                {
                  code: "2620.19.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "2620.21",
              title:
                "Lodos de gasolina con plomo y lodos de compuestos antidetonantes con plomo.",
              classifications: [
                {
                  code: "2620.21.01",
                  title:
                    "Lodos de gasolina con plomo y lodos de compuestos antidetonantes con plomo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Lodos de gasolina con plomo y lodos de compuestos antidetonantes con plomo.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2620.29",
              title: "Las demás.",
              classifications: [
                {
                  code: "2620.29.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
            {
              code: "2620.30",
              title: "Que contengan principalmente cobre.",
              classifications: [
                {
                  code: "2620.30.01",
                  title: "Que contengan principalmente cobre.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Que contengan principalmente cobre.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2620.40",
              title: "Que contengan principalmente aluminio.",
              classifications: [
                {
                  code: "2620.40.01",
                  title: "Que contengan principalmente aluminio.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title: "Que contengan principalmente aluminio.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2620.60",
              title:
                "Que contengan arsénico, mercurio, talio o sus mezclas, de los tipos utilizados para la extracción de arsénico o de estos metales o para la elaboración de sus compuestos químicos.",
              classifications: [
                {
                  code: "2620.60.01",
                  title:
                    "Que contengan arsénico, mercurio, talio o sus mezclas, de los tipos utilizados para la extracción de arsénico o de estos metales o para la elaboración de sus compuestos químicos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Que contengan arsénico, mercurio, talio o sus mezclas, de los tipos utilizados para la extracción de arsénico o de estos metales o para la elaboración de sus compuestos químicos.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2620.91",
              title:
                "Que contengan antimonio, berilio, cadmio, cromo, o sus mezclas.",
              classifications: [
                {
                  code: "2620.91.01",
                  title:
                    "Que contengan antimonio, berilio, cadmio, cromo, o sus mezclas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Que contengan antimonio, berilio, cadmio, cromo, o sus mezclas.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2620.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "2620.99.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "26.21",
          title:
            "Las demás escorias y cenizas, incluidas las cenizas de algas; cenizas y residuos procedentes de la incineración de desechos municipales.",
          subheadings: [
            {
              code: "2621.10",
              title:
                "Cenizas y residuos procedentes de la incineración de desechos municipales.",
              classifications: [
                {
                  code: "2621.10.01",
                  title:
                    "Cenizas y residuos procedentes de la incineración de desechos municipales.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Cenizas y residuos procedentes de la incineración de desechos municipales.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2621.90",
              title: "Las demás.",
              classifications: [
                {
                  code: "2621.90.99",
                  title: "Las demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS5"],
                  nicos: [{ code: "00", title: "Las demás." }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      code: "27",
      title:
        "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
      notes: {
        legales: [
          {
            id: "NL-CAP27-1",
            text: "Este Capítulo no comprende: a) los productos orgánicos de constitución química definida presentados aisladamente; esta exclusión no afecta al metano ni al propano puros, que se clasifican en la partida 27.11; b) los medicamentos de las partidas 30.03 o 30.04; c) las mezclas de hidrocarburos no saturados, de las partidas 33.01, 33.02 o 38.05.",
          },
          {
            id: "NL-CAP27-2",
            text: "La expresión aceites de petróleo o de mineral bituminoso, empleada en el texto de la partida 27.10, se aplica, no solo a los aceites de petróleo o de mineral bituminoso, sino también a los aceites análogos, así como a los constituidos principalmente por mezclas de hidrocarburos no saturados en las que los constituyentes no aromáticos predominen en peso sobre los aromáticos, cualquiera que sea el procedimiento de obtención. Sin embargo, dicha expresión no se aplica a las poliolefinas sintéticas líquidas que destilen una proporción inferior al 60% en volumen a 300°C referidos a 1.013 milibares cuando se utilice un método de destilación a baja presión (Capítulo 39).",
          },
          {
            id: "NL-CAP27-3",
            text: "En la partida 27.10, se entiende por desechos de aceites los desechos que contengan principalmente aceites de petróleo o de mineral bituminoso (tal como se definen en la Nota 2 de este Capítulo), incluso mezclados con agua. Estos desechos incluyen, principalmente: a) los aceites impropios para su utilización inicial (por ejemplo: aceites lubricantes, hidráulicos o para transformadores, usados); b) los lodos de aceites procedentes de los depósitos de almacenamiento de aceites de petróleo que contengan principalmente aceites de este tipo y una alta concentración de aditivos (por ejemplo, productos químicos) utilizados en la elaboración de productos primarios; c) los aceites que se presenten en emulsión acuosa o mezclados con agua, tales como los resultantes del derrame o lavado de depósitos de almacenamiento, o del uso de aceites de corte en las operaciones de mecanizado.",
          },
        ],
        nacionales: [
          {
            id: "NN-CAP27-1",
            text: "Este Capítulo no comprende: a) Las preparaciones para perfumería, tocador o cosmética, comprendidas en las partidas 33.03 a 33.07; b) Los combustibles líquidos y los gases combustibles licuados en recipientes de los tipos utilizados para cargar o recargar encendedores o mecheros, de capacidad inferior o igual a 300 cm³ (partida 36.06).",
          },
          {
            id: "NN-CAP27-2",
            text: "Para efectos de la subpartida 2709.00, se entiende por: a) Aceites crudos de petróleo pesados: aquellos que se encuentran en un rango de 10° API (American Petroleum Institute), pero inferior o igual a 22.3° API; b) Aceites crudos de petróleo medianos: aquellos que se encuentran en un rango superior a 22.3°API, pero inferior o igual a 31.1°API; c) Aceites crudos de petróleo ligeros: aquellos que se encuentran en un rango superior a 31.1°API, pero inferior o igual a 39°API.",
          },
          {
            id: "NN-CAP27-3",
            text: 'Para los efectos de la subpartida 2710.19, se entenderá por aceites lubricantes básicos aquellos que tengan una viscosidad cinemática superior a 7.5 centistokes (cSt) a 40 °C, determinada por el método de la norma ASTM D-445 (De la Sociedad Americana para Pruebas y Materiales, "ASTM" por sus siglas en inglés).',
          },
        ],
        explicativas: [],
      },
      headings: [
        {
          code: "27.01",
          title:
            "Hullas; briquetas, ovoides y combustibles sólidos similares, obtenidos de la hulla.",
          subheadings: [
            {
              code: "2701.11",
              title: "Antracitas.",
              classifications: [
                {
                  code: "2701.11.01",
                  title: "Antracitas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Antracitas." }],
                },
              ],
            },
            {
              code: "2701.12",
              title: "Hulla bituminosa.",
              classifications: [
                {
                  code: "2701.12.01",
                  title: "Hulla bituminosa.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Hulla bituminosa." }],
                },
              ],
            },
            {
              code: "2701.19",
              title: "Las demás hullas.",
              classifications: [
                {
                  code: "2701.19.91",
                  title: "Las demás hullas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Las demás hullas." }],
                },
              ],
            },
            {
              code: "2701.20",
              title:
                "Briquetas, ovoides y combustibles sólidos similares, obtenidos de la hulla.",
              classifications: [
                {
                  code: "2701.20.01",
                  title:
                    "Briquetas, ovoides y combustibles sólidos similares, obtenidos de la hulla.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Briquetas, ovoides y combustibles sólidos similares, obtenidos de la hulla.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "27.02",
          title: "Lignitos, incluso aglomerados, excepto el azabache.",
          subheadings: [
            {
              code: "2702.10",
              title: "Lignitos, incluso pulverizados, pero sin aglomerar.",
              classifications: [
                {
                  code: "2702.10.01",
                  title: "Lignitos, incluso pulverizados, pero sin aglomerar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Lignitos, incluso pulverizados, pero sin aglomerar.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2702.20",
              title: "Lignitos aglomerados.",
              classifications: [
                {
                  code: "2702.20.01",
                  title: "Lignitos aglomerados.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Lignitos aglomerados." }],
                },
              ],
            },
          ],
        },
        {
          code: "27.03",
          title:
            "Turba (comprendida la utilizada para cama de animales), incluso aglomerada.",
          subheadings: [
            {
              code: "2703.00",
              title:
                "Turba (comprendida la utilizada para cama de animales), incluso aglomerada.",
              classifications: [
                {
                  code: "2703.00.02",
                  title:
                    "Turba (comprendida la utilizada para cama de animales), incluso aglomerada. Proveniente del musgo Sphagnum y otros desechos vegetales, para el enraizamiento, denominada Peat-moss.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SAD"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Turba (comprendida la utilizada para cama de animales), incluso aglomerada. Proveniente del musgo Sphagnum y otros desechos vegetales, para el enraizamiento, denominada Peat-moss.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "27.04",
          title:
            "Coques y semicoques de hulla, lignito o turba, incluso aglomerados; carbón de retorta.",
          subheadings: [
            {
              code: "2704.00",
              title:
                "Coques y semicoques de hulla, lignito o turba, incluso aglomerados; carbón de retorta.",
              classifications: [
                {
                  code: "2704.00.03",
                  title:
                    "Coques y semicoques de hulla, lignito o turba, incluso aglomerados; carbón de retorta.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "01",
                      title:
                        "Coques y semicoques de hulla, lignito o turba, incluso aglomerados.",
                    },
                    { code: "02", title: "Carbón de retorta." },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "27.05",
          title:
            "Gas de hulla, gas de agua, gas pobre y gases similares, excepto el gas de petróleo y demás hidrocarburos gaseosos.",
          subheadings: [
            {
              code: "2705.00",
              title:
                "Gas de hulla, gas de agua, gas pobre y gases similares, excepto el gas de petróleo y demás hidrocarburos gaseosos.",
              classifications: [
                {
                  code: "2705.00.01",
                  title:
                    "Gas de hulla, gas de agua, gas pobre y gases similares, excepto el gas de petróleo y demás hidrocarburos gaseosos.",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Gas de hulla, gas de agua, gas pobre y gases similares, excepto el gas de petróleo y demás hidrocarburos gaseosos.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "27.06",
          title:
            "Alquitranes de hulla, lignito o turba y demás alquitranes minerales, aunque estén deshidratados o descabezados, incluidos los alquitranes reconstituidos.",
          subheadings: [
            {
              code: "2706.00",
              title:
                "Alquitranes de hulla, lignito o turba y demás alquitranes minerales, aunque estén deshidratados o descabezados, incluidos los alquitranes reconstituidos.",
              classifications: [
                {
                  code: "2706.00.01",
                  title:
                    "Alquitranes de hulla, lignito o turba y demás alquitranes minerales, aunque estén deshidratados o descabezados, incluidos los alquitranes reconstituidos.",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Alquitranes de hulla, lignito o turba y demás alquitranes minerales, aunque estén deshidratados o descabezados, incluidos los alquitranes reconstituidos.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "27.07",
          title:
            "Aceites y demás productos de la destilación de los alquitranes de hulla de alta temperatura; productos análogos en los que los constituyentes aromáticos predominen en peso sobre los no aromáticos.",
          subheadings: [
            {
              code: "2707.10",
              title: "Benzol (benceno).",
              classifications: [
                {
                  code: "2707.10.01",
                  title: "Benzol (benceno).",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Benzol (benceno)." }],
                },
              ],
            },
            {
              code: "2707.20",
              title: "Toluol (tolueno).",
              classifications: [
                {
                  code: "2707.20.01",
                  title: "Toluol (tolueno).",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Toluol (tolueno)." }],
                },
              ],
            },
            {
              code: "2707.30",
              title: "Xilol (xilenos).",
              classifications: [
                {
                  code: "2707.30.01",
                  title: "Xilol (xilenos).",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Xilol (xilenos)." }],
                },
              ],
            },
            {
              code: "2707.40",
              title: "Naftaleno.",
              classifications: [
                {
                  code: "2707.40.01",
                  title: "Naftaleno.",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Naftaleno." }],
                },
              ],
            },
            {
              code: "2707.50",
              title:
                "Las demás mezclas de hidrocarburos aromáticos que destilen, incluidas las pérdidas, una proporción superior o igual al 65% en volumen a 250°C, según el método ISO 3405 (equivalente al método ASTM D 86).",
              classifications: [
                {
                  code: "2707.50.91",
                  title:
                    "Las demás mezclas de hidrocarburos aromáticos que destilen, incluidas las pérdidas, una proporción superior o igual al 65% en volumen a 250°C, según el método ISO 3405 (equivalente al método ASTM D 86).",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Las demás mezclas de hidrocarburos aromáticos que destilen, incluidas las pérdidas, una proporción superior o igual al 65% en volumen a 250°C, según el método ISO 3405 (equivalente al método ASTM D 86).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2707.91",
              title: "Aceites de creosota.",
              classifications: [
                {
                  code: "2707.91.01",
                  title: "Aceites de creosota.",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Aceites de creosota." }],
                },
              ],
            },
            {
              code: "2707.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "2707.99.99",
                  title: "Los demás.",
                  umt: "L",
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
          code: "27.08",
          title:
            "Brea y coque de brea de alquitrán de hulla o de otros alquitranes minerales.",
          subheadings: [
            {
              code: "2708.10",
              title: "Brea.",
              classifications: [
                {
                  code: "2708.10.01",
                  title: "Brea.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Brea." }],
                },
              ],
            },
            {
              code: "2708.20",
              title: "Coque de brea.",
              classifications: [
                {
                  code: "2708.20.01",
                  title: "Coque de brea.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Coque de brea." }],
                },
              ],
            },
          ],
        },
        {
          code: "27.09",
          title: "Aceites crudos de petróleo o de mineral bituminoso.",
          subheadings: [
            {
              code: "2709.00",
              title: "Aceites crudos de petróleo o de mineral bituminoso.",
              classifications: [
                {
                  code: "2709.00.05",
                  title:
                    "Aceites crudos de petróleo pesados, medianos y ligeros.",
                  umt: "Barr",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB", "SEN"],
                  nicos: [
                    { code: "01", title: "Pesados." },
                    { code: "02", title: "Medianos." },
                    { code: "03", title: "Ligeros." },
                  ],
                },
                {
                  code: "2709.00.99",
                  title: "Los demás.",
                  umt: "M³",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["EMB", "SEN"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "27.10",
          title:
            "Aceites de petróleo o de mineral bituminoso, excepto los aceites crudos; preparaciones no expresadas ni comprendidas en otra parte, con un contenido de aceites de petróleo o de mineral bituminoso superior o igual al 70% en peso, en las que estos aceites constituyan el elemento base; desechos de aceites.",
          subheadings: [
            {
              code: "2710.12",
              title: "Aceites ligeros (livianos) y preparaciones.",
              classifications: [
                {
                  code: "2710.12.06",
                  title:
                    "Mezcla isomérica de trimetil penteno y dimetil hexeno (Diisobutileno).",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Mezcla isomérica de trimetil penteno y dimetil hexeno (Diisobutileno).",
                    },
                  ],
                },
                {
                  code: "2710.12.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB", "SEN"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2710.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "2710.19.02",
                  title:
                    "Aceites lubricantes terminados a base de aceites minerales derivados del petróleo, con aditivos (aceites lubricantes terminados).",
                  umt: "L",
                  importDuty: 3,
                  exportDuty: 0,
                  regimenes: ["PS5", "PS4", "NOM", "EMB", "FR_I", "CHT"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Aceites lubricantes terminados a base de aceites minerales derivados del petróleo, con aditivos (aceites lubricantes terminados).",
                    },
                  ],
                },
                {
                  code: "2710.19.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB"],
                  nicos: [
                    { code: "01", title: "Aceites lubricantes básicos." },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2710.20",
              title:
                "Aceites de petróleo o de mineral bituminoso (excepto los aceites crudos) y preparaciones no expresadas ni comprendidas en otra parte, con un contenido de aceites de petróleo o de mineral bituminoso superior o igual al 70% en peso, en las que estos aceites constituyan el elemento base, que contengan biodiésel, excepto los desechos de aceites.",
              classifications: [
                {
                  code: "2710.20.01",
                  title:
                    "Aceites de petróleo o de mineral bituminoso (excepto los aceites crudos) y preparaciones no expresadas ni comprendidas en otra parte, con un contenido de aceites de petróleo o de mineral bituminoso superior o igual al 70% en peso, en las que estos aceites constituyan el elemento base, que contengan biodiésel, excepto los desechos de aceites.",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB", "SEN"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Aceites de petróleo o de mineral bituminoso (excepto los aceites crudos) y preparaciones no expresadas ni comprendidas en otra parte, con un contenido de aceites de petróleo o de mineral bituminoso superior o igual al 70% en peso, en las que estos aceites constituyan el elemento base, que contengan biodiésel, excepto los desechos de aceites.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2710.91",
              title:
                "Que contengan difenilos policlorados (PCB), terfenilos policlorados (PCT) o difenilos polibromados (PBB).",
              classifications: [
                {
                  code: "2710.91.01",
                  title:
                    "Que contengan difenilos policlorados (PCB), terfenilos policlorados (PCT) o difenilos polibromados (PBB).",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "SEM"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Que contengan difenilos policlorados (PCB), terfenilos policlorados (PCT) o difenilos polibromados (PBB).",
                    },
                  ],
                },
              ],
            },
            {
              code: "2710.99",
              title: "Los demás.",
              classifications: [
                {
                  code: "2710.99.99",
                  title: "Los demás.",
                  umt: "L",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "SEM"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "27.11",
          title: "Gas de petróleo y demás hidrocarburos gaseosos.",
          subheadings: [
            {
              code: "2711.11",
              title: "Gas natural.",
              classifications: [
                {
                  code: "2711.11.01",
                  title: "Gas natural.",
                  umt: "M³",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB", "SEN"],
                  nicos: [{ code: "00", title: "Gas natural." }],
                },
              ],
            },
            {
              code: "2711.12",
              title: "Propano.",
              classifications: [
                {
                  code: "2711.12.02",
                  title: "Propano.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB", "SEN"],
                  nicos: [
                    {
                      code: "01",
                      title: "Con pureza igual o superior a 90% en volumen.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2711.13",
              title: "Butanos.",
              classifications: [
                {
                  code: "2711.13.02",
                  title: "Butanos.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB", "SEN"],
                  nicos: [
                    {
                      code: "01",
                      title: "Con pureza igual o superior a 90% en volumen.",
                    },
                    { code: "99", title: "Los demás." },
                  ],
                },
              ],
            },
            {
              code: "2711.14",
              title: "Etileno, propileno, butileno y butadieno.",
              classifications: [
                {
                  code: "2711.14.01",
                  title: "Etileno, propileno, butileno y butadieno.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title: "Etileno, propileno, butileno y butadieno.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2711.19",
              title: "Los demás.",
              classifications: [
                {
                  code: "2711.19.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB", "SEN"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
            {
              code: "2711.21",
              title: "Gas natural.",
              classifications: [
                {
                  code: "2711.21.01",
                  title: "Gas natural.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB", "SEN"],
                  nicos: [{ code: "00", title: "Gas natural." }],
                },
              ],
            },
            {
              code: "2711.29",
              title: "Los demás.",
              classifications: [
                {
                  code: "2711.29.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "NOM", "EMB", "SEN"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "27.12",
          title:
            "Vaselina; parafina, cera de petróleo microcristalina, «slack wax», ozoquerita, cera de lignito, cera de turba, demás ceras minerales y productos similares obtenidos por síntesis o por otros procedimientos, incluso coloreados.",
          subheadings: [
            {
              code: "2712.10",
              title: "Vaselina.",
              classifications: [
                {
                  code: "2712.10.01",
                  title: "Vaselina.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Vaselina." }],
                },
              ],
            },
            {
              code: "2712.20",
              title:
                "Parafina con un contenido de aceite inferior al 0.75% en peso.",
              classifications: [
                {
                  code: "2712.20.01",
                  title:
                    "Parafina con un contenido de aceite inferior al 0.75% en peso.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Parafina con un contenido de aceite inferior al 0.75% en peso.",
                    },
                  ],
                },
              ],
            },
            {
              code: "2712.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2712.90.01",
                  title: "Cera de lignito.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Cera de lignito." }],
                },
                {
                  code: "2712.90.02",
                  title: "Ceras microcristalinas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Ceras microcristalinas." }],
                },
                {
                  code: "2712.90.03",
                  title:
                    'Residuos parafínicos ("slack wax"), con un contenido de aceite superior o igual a 8%, en peso.',
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        'Residuos parafínicos ("slack wax"), con un contenido de aceite superior o igual a 8%, en peso.',
                    },
                  ],
                },
                {
                  code: "2712.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 7,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "27.13",
          title:
            "Coque de petróleo, betún de petróleo y demás residuos de los aceites de petróleo o de mineral bituminoso.",
          subheadings: [
            {
              code: "2713.11",
              title: "Sin calcinar.",
              classifications: [
                {
                  code: "2713.11.01",
                  title: "Sin calcinar.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Sin calcinar." }],
                },
              ],
            },
            {
              code: "2713.12",
              title: "Calcinado.",
              classifications: [
                {
                  code: "2713.12.01",
                  title: "Calcinado.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Calcinado." }],
                },
              ],
            },
            {
              code: "2713.20",
              title: "Betún de petróleo.",
              classifications: [
                {
                  code: "2713.20.01",
                  title: "Betún de petróleo.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Betún de petróleo." }],
                },
              ],
            },
            {
              code: "2713.90",
              title:
                "Los demás residuos de los aceites de petróleo o de mineral bituminoso.",
              classifications: [
                {
                  code: "2713.90.91",
                  title:
                    "Los demás residuos de los aceites de petróleo o de mineral bituminoso.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Los demás residuos de los aceites de petróleo o de mineral bituminoso.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: "27.14",
          title:
            "Betunes y asfaltos naturales; pizarras y arenas bituminosas; asfaltitas y rocas asfálticas.",
          subheadings: [
            {
              code: "2714.10",
              title: "Pizarras y arenas bituminosas.",
              classifications: [
                {
                  code: "2714.10.01",
                  title: "Pizarras y arenas bituminosas.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Pizarras y arenas bituminosas." },
                  ],
                },
              ],
            },
            {
              code: "2714.90",
              title: "Los demás.",
              classifications: [
                {
                  code: "2714.90.01",
                  title: "Betunes y asfaltos naturales.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [
                    { code: "00", title: "Betunes y asfaltos naturales." },
                  ],
                },
                {
                  code: "2714.90.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 25,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "27.15",
          title:
            "Mezclas bituminosas a base de asfalto o de betún naturales, de betún de petróleo, de alquitrán mineral o de brea de alquitrán mineral (por ejemplo: mástiques bituminosos, «cut backs»).",
          subheadings: [
            {
              code: "2715.00",
              title:
                "Mezclas bituminosas a base de asfalto o de betún naturales, de betún de petróleo, de alquitrán mineral o de brea de alquitrán mineral (por ejemplo: mástiques bituminosos, «cut backs»).",
              classifications: [
                {
                  code: "2715.00.01",
                  title:
                    "Betunes fluidificados; mezclas bituminosas base de asfalto acondicionadas para su venta en envases con capacidad inferior o igual a 200 l.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4", "EMB"],
                  nicos: [
                    {
                      code: "00",
                      title:
                        "Betunes fluidificados; mezclas bituminosas base de asfalto acondicionadas para su venta en envases con capacidad inferior o igual a 200 l.",
                    },
                  ],
                },
                {
                  code: "2715.00.99",
                  title: "Los demás.",
                  umt: "Kg",
                  importDuty: 0,
                  exportDuty: 25,
                  regimenes: ["PS4", "EMB"],
                  nicos: [{ code: "00", title: "Los demás." }],
                },
              ],
            },
          ],
        },
        {
          code: "27.16",
          title: "Energía eléctrica.",
          subheadings: [
            {
              code: "2716.00",
              title: "Energía eléctrica.",
              classifications: [
                {
                  code: "2716.00.01",
                  title: "Energía eléctrica.",
                  umt: "KWH",
                  importDuty: 0,
                  exportDuty: 0,
                  regimenes: ["PS4"],
                  nicos: [{ code: "00", title: "Energía eléctrica." }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
