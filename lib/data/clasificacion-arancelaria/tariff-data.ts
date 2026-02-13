export const tariffData = {
  sections: [
    {
      code: "I",
      title: "Animales vivos y productos del reino animal",
      notes: {
        legales: [
          {
            id: "NL-SEC01-1",
            text: "En esta Sección, cualquier referencia a un género o a una especie determinada de un animal se aplica también, salvo disposición en contrario, a los animales jóvenes de ese género o de esa especie."
          },
          {
            id: "NL-SEC01-2",
            text: "Salvo disposición en contrario, cualquier referencia en la Nomenclatura a productos secos o desecados alcanza también a los productos deshidratados, evaporados o liofilizados."
          }
        ],
        nacionales: [
          {
            id: "NN-SEC01-1",
            text: "Salvo disposición en contrario, cualquier referencia en la Nomenclatura al término \"comestible\" o \"alimento apto para el consumo humano\" se refiere a aquel que sea seguro al ser consumido, esto es, que no se encuentre contaminado, putrefacto, deteriorado o descompuesto y tal consumo, no resulte nocivo para la salud."
          }
        ],
        explicativas: []
      },
      chapters: [
        {
          code: "01",
          title: "Animales vivos",
          notes: {
            legales: [
              {
                id: "NL-CAP01-1",
                text: "Este Capítulo comprende todos los animales vivos, excepto: a) los peces, los crustáceos, moluscos y demás invertebrados acuáticos, de las partidas 03.01, 03.06, 03.07 o 03.08; b) los cultivos de microorganismos y demás productos de la partida 30.02; c) los animales de la partida 95.08."
              }
            ],
            nacionales: [],
            explicativas: []
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
                      nicos: [{ code: "00", title: "Reproductores de raza pura." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin pedigree, para reproducción." }]
                    },
                    {
                      code: "0101.29.03",
                      title: "Para abasto, cuando la importación la realicen empacadoras Tipo Inspección Federal.",
                      umt: "Pza",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Para abasto, cuando la importación la realicen empacadoras Tipo Inspección Federal." }]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Asnos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Reproductores de raza pura." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Vacas lecheras." }]
                    },
                    {
                      code: "0102.29.02",
                      title: "Con pedigree o certificado de alto registro, excepto lo comprendido en la fracción arancelaria 0102.29.01.",
                      umt: "Pza",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Con pedigree o certificado de alto registro, excepto lo comprendido en la fracción arancelaria 0102.29.01." }]
                    },
                    {
                      code: "0102.29.99",
                      title: "Los demás.",
                      umt: "Pza",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SEM", "PACIC", "CUP"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Reproductores de raza pura." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Reproductores de raza pura." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con pedigree o certificado de alto registro." }]
                    },
                    {
                      code: "0103.91.99",
                      title: "Los demás.",
                      umt: "Cbza",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["PS4", "SAD", "SEM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con pedigree o certificado de alto registro." }]
                    },
                    {
                      code: "0103.92.99",
                      title: "Los demás.",
                      umt: "Cbza",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["PS4", "SAD", "SEM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Con pedigree o certificado de alto registro." }]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con pedigree o certificado de alto registro." }]
                    },
                    {
                      code: "0104.20.02",
                      title: "Borrego cimarrón.",
                      umt: "Cbza",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Borrego cimarrón." }]
                    },
                    {
                      code: "0104.20.99",
                      title: "Los demás.",
                      umt: "Cbza",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "01.05",
              title: "Gallos, gallinas, patos, gansos, pavos (gallipavos) y pintadas, de las especies domésticas, vivos.",
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
                        { code: "01", title: "Aves reproductoras de la línea de postura." },
                        { code: "02", title: "Aves reproductoras de la línea de engorda." },
                        { code: "03", title: "Aves progenitoras de la línea de engorda." },
                        { code: "91", title: "Las demás de postura." },
                        { code: "92", title: "Las demás de engorda." }
                      ]
                    },
                    {
                      code: "0105.11.99",
                      title: "Los demás.",
                      umt: "Pza",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Pavos (gallipavos)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Patos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Gansos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Pintadas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Gallos de pelea." }]
                    },
                    {
                      code: "0105.94.99",
                      title: "Los demás.",
                      umt: "Cbza",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Macacus rhesus o Macacus cercophitecus." }]
                    },
                    {
                      code: "0106.11.99",
                      title: "Los demás.",
                      umt: "Cbza",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                },
                {
                  code: "0106.12",
                  title: "Ballenas, delfines y marsopas; manatíes y dugones; otarios y focas, leones marinos y morsas.",
                  classifications: [
                    {
                      code: "0106.12.01",
                      title: "Ballenas, delfines y marsopas; manatíes y dugones; otarios y focas, leones marinos y morsas.",
                      umt: "Cbza",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Ballenas, delfines y marsopas; manatíes y dugones; otarios y focas, leones marinos y morsas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Camellos y demás camélidos (Camelidae)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Conejos y liebres." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Venado rojo (Cervus elaphus); gamo (Dama dama)." }]
                    },
                    {
                      code: "0106.19.99",
                      title: "Los demás.",
                      umt: "Cbza",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                },
                {
                  code: "0106.20",
                  title: "Reptiles (incluidas las serpientes y tortugas de mar).",
                  classifications: [
                    {
                      code: "0106.20.04",
                      title: "Reptiles (incluidas las serpientes y tortugas de mar).",
                      umt: "Cbza",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Reptiles (incluidas las serpientes y tortugas de mar)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aves de rapiña." }]
                    }
                  ]
                },
                {
                  code: "0106.32",
                  title: "Psitaciformes (incluidos los loros, guacamayos, cacatúas y demás papagayos).",
                  classifications: [
                    {
                      code: "0106.32.01",
                      title: "Psitaciformes (incluidos los loros, guacamayos, cacatúas y demás papagayos).",
                      umt: "Cbza",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Psitaciformes (incluidos los loros, guacamayos, cacatúas y demás papagayos)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Avestruces; emúes (Dromaius novaehollandiae)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Abejas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Lombriz Rebellus (Lumbricus rubellus)." }]
                    },
                    {
                      code: "0106.90.03",
                      title: "Lombriz acuática.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Lombriz acuática." }]
                    },
                    {
                      code: "0106.90.04",
                      title: "Ácaros Phytoseiulus persimilis.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Ácaros Phytoseiulus persimilis." }]
                    },
                    {
                      code: "0106.90.99",
                      title: "Los demás.",
                      umt: "Pza",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "02",
          title: "Carne y despojos comestibles",
          notes: {
            legales: [
              {
                id: "NL-CAP02-1",
                text: "Este Capítulo no comprende: a) respecto de las partidas 02.01 a 02.08 y 02.10, los productos impropios para la alimentación humana; b) los insectos comestibles, sin vida (partida 04.10); c) las tripas, vejigas y estómagos de animales (partida 05.04), ni la sangre animal (partidas 05.11 o 30.02); d) las grasas animales, excepto los productos de la partida 02.09 (Capítulo 15)."
              }
            ],
            nacionales: [
              {
                id: "NN-CAP02-1",
                text: "En este Capítulo, se entiende por \"Carcasa(s) de ave\", la caja torácica del animal desprovista de las alas, sin vísceras y sin la masa muscular de la pechuga, y que puede incluir vértebras cervicales y piel."
              },
              {
                id: "NN-CAP02-2",
                text: "\"Mecánicamente deshuesados\" significa carne en forma de pasta semisólida comestible y apta para consumo humano, la cual es obtenida de la molienda de la carne originalmente adherida a las carcasas o sus partes, que ha sido separada del hueso por medios mecánicos y/o separación a alta presión. La carne mecánicamente deshuesada (pasta) es comúnmente usada para la fabricación de embutidos y todo tipo de carnes frías."
              },
              {
                id: "NN-CAP02-3",
                text: "Las pieles de cerdo, enteras o en recortes, se clasificarán como sigue: a) En las subpartidas 0206.30 o 0206.49, según los casos, cuando se presenten libres de tejido adiposo, o el espesor de la capa de tejido adiposo adherido a cualquier parte de la piel sea inferior a 2 mm; b) En la partida 02.09, cuando el espesor de la capa de tejido adiposo adherido a cualquier parte de la piel sea igual o superior a 2 mm."
              },
              {
                id: "NN-CAP02-4",
                text: "Para efectos de las subpartidas 0207.13 y 0207.14, la expresión \"Piernas, muslos o piernas unidas al muslo\" significa la parte del ave que comprende el fémur y la tibia con la masa muscular, y que pueden estar unidas de manera incidental con partes de otras piezas del pollo, por ejemplo, la parte posterior del tronco y/o la rabadilla. Los cuartos de pierna también pueden llevar algo de grasa abdominal y un máximo de dos costillas. La pierna y muslo constituyen los denominados cuartos traseros del pollo."
              },
              {
                id: "NN-CAP02-5",
                text: "Para efectos de la partida 02.09, se considera tocino el tejido adiposo situado entre la carne y la piel del cerdo."
              },
              {
                id: "NN-CAP02-6",
                text: "La subpartida 0210.99 comprende, entre otros: a) Carne y despojos de aves, salados: la carne o los despojos impregnados con cloruro de sodio (sal común) en toda la masa muscular. El contenido de sal común en la carne o los despojos, libres de piel y hueso, debe ser igual o superior al 1.94% pero inferior al 3.0% en peso; b) Carne y despojos de aves, en salmuera: la carne o los despojos impregnados con una solución de agua y cloruro de sodio (sal común), en toda la masa muscular; dichos productos pueden presentarse inyectados o sumergidos en la solución salina. El contenido de sal común en la carne o los despojos, libres de piel y hueso, debe ser igual o superior al 1.94% pero inferior al 3.0% en peso."
              },
              {
                id: "NN-CAP02-7",
                text: "La subpartida 0210.99 no comprende las carnes y despojos de aves impregnados de cloruro de sodio (sal común), con un contenido de sal común inferior al 1.94% en peso de la carne o los despojos, libres de piel y hueso, ni la carne o los despojos que se presenten simplemente espolvoreados con sal (en ambos casos partida 02.07, generalmente)."
              }
            ],
            explicativas: []
          },
          headings: [
            {
              code: "02.01",
              title: "Carne de animales de la especie bovina, fresca o refrigerada.",
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
                      nicos: [{ code: "00", title: "En canales o medias canales." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás cortes (trozos) sin deshuesar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Deshuesada." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "En canales o medias canales." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás cortes (trozos) sin deshuesar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Deshuesada." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "02.03",
              title: "Carne de animales de la especie porcina, fresca, refrigerada o congelada.",
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
                      nicos: [{ code: "00", title: "En canales o medias canales." }]
                    }
                  ]
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
                        { code: "02", title: "Piernas y sus trozos." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "En canales o medias canales." }]
                    }
                  ]
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
                        { code: "02", title: "Piernas y sus trozos." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "02.04",
              title: "Carne de animales de las especies ovina o caprina, fresca, refrigerada o congelada.",
              subheadings: [
                {
                  code: "0204.10",
                  title: "Canales o medias canales de cordero, frescas o refrigeradas.",
                  classifications: [
                    {
                      code: "0204.10.01",
                      title: "Canales o medias canales de cordero, frescas o refrigeradas.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Canales o medias canales de cordero, frescas o refrigeradas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "En canales o medias canales." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás cortes (trozos) sin deshuesar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Deshuesadas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Canales o medias canales de cordero, congeladas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "En canales o medias canales." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás cortes (trozos) sin deshuesar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Deshuesadas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Carne de animales de la especie caprina." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "02.05",
              title: "Carne de animales de las especies caballar, asnal o mular, fresca, refrigerada o congelada.",
              subheadings: [
                {
                  code: "0205.00",
                  title: "Carne de animales de las especies caballar, asnal o mular, fresca, refrigerada o congelada.",
                  classifications: [
                    {
                      code: "0205.00.01",
                      title: "Carne de animales de las especies caballar, asnal o mular, fresca, refrigerada o congelada.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Carne de animales de las especies caballar, asnal o mular, fresca, refrigerada o congelada." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "02.06",
              title: "Despojos comestibles de animales de las especies bovina, porcina, ovina, caprina, caballar, asnal o mular, frescos, refrigerados o congelados.",
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
                      nicos: [{ code: "00", title: "De la especie bovina, frescos o refrigerados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Lenguas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hígados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                },
                {
                  code: "0206.30",
                  title: "De la especie porcina, frescos o refrigerados.",
                  classifications: [
                    {
                      code: "0206.30.01",
                      title: "Pieles de cerdo enteras o en recortes, refrigerados, excepto el cuero precocido en trozos (\"pellets\").",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Pieles de cerdo enteras o en recortes, refrigerados, excepto el cuero precocido en trozos (\"pellets\")." }]
                    },
                    {
                      code: "0206.30.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hígados." }]
                    }
                  ]
                },
                {
                  code: "0206.49",
                  title: "Los demás.",
                  classifications: [
                    {
                      code: "0206.49.01",
                      title: "Pieles de cerdo enteras o en recortes, excepto el cuero precocido en trozos (\"pellets\").",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Pieles de cerdo enteras o en recortes, excepto el cuero precocido en trozos (\"pellets\")." }]
                    },
                    {
                      code: "0206.49.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás, frescos o refrigerados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás, congelados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "02.07",
              title: "Carne y despojos comestibles, de aves de la partida 01.05, frescos, refrigerados o congelados.",
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
                      nicos: [{ code: "00", title: "Sin trocear, frescos o refrigerados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin trocear, congelados." }]
                    }
                  ]
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
                        { code: "01", title: "Mecánicamente deshuesados (pastas)." },
                        { code: "02", title: "Carcasas." },
                        { code: "03", title: "Piernas, muslos o piernas unidas al muslo." },
                        { code: "04", title: "Alas y sus partes." },
                        { code: "05", title: "Pechuga, sus trozos y recortes, con hueso." },
                        { code: "06", title: "Filetes de pechuga y pechuga, sus trozos y recortes, sin hueso (deshuesada)." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hígados." }]
                    },
                    {
                      code: "0207.14.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 75,
                      exportDuty: 0,
                      regimenes: ["SAD", "PACIC", "CC", "CUP"],
                      nicos: [
                        { code: "01", title: "Mecánicamente deshuesados (pastas)." },
                        { code: "02", title: "Piernas, muslos o piernas unidas al muslo." },
                        { code: "03", title: "Alas y sus partes." },
                        { code: "04", title: "Pechuga, sus trozos y recortes, con hueso." },
                        { code: "05", title: "Filetes de pechuga y pechuga, sus trozos y recortes, sin hueso (deshuesada)." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin trocear, frescos o refrigerados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin trocear, congelados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Trozos y despojos, frescos o refrigerados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hígados." }]
                    },
                    {
                      code: "0207.27.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 75,
                      exportDuty: 0,
                      regimenes: ["SAD", "PACIC", "CUP"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De pintada." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "02.08",
              title: "Las demás carnes y despojos comestibles, frescos, refrigerados o congelados.",
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
                      nicos: [{ code: "00", title: "De conejo o liebre." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De primates." }]
                    }
                  ]
                },
                {
                  code: "0208.40",
                  title: "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
                  classifications: [
                    {
                      code: "0208.40.01",
                      title: "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas." }]
                    }
                  ]
                },
                {
                  code: "0208.50",
                  title: "De reptiles (incluidas las serpientes y tortugas de mar).",
                  classifications: [
                    {
                      code: "0208.50.01",
                      title: "De reptiles (incluidas las serpientes y tortugas de mar).",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "De reptiles (incluidas las serpientes y tortugas de mar)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De camellos y demás camélidos (Camelidae)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "02.09",
              title: "Tocino sin partes magras y grasa de cerdo o de ave sin fundir ni extraer de otro modo, frescos, refrigerados, congelados, salados o en salmuera, secos o ahumados.",
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
                      nicos: [{ code: "00", title: "De cerdo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De gallo, gallina o pavo (gallipavo)." }]
                    },
                    {
                      code: "0209.90.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "02.10",
              title: "Carne y despojos comestibles, salados o en salmuera, secos o ahumados; harina y polvo comestibles, de carne o de despojos.",
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
                      nicos: [{ code: "00", title: "Jamones, paletas, y sus trozos, sin deshuesar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Tocino entreverado de panza (panceta) y sus trozos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Carne de la especie bovina." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De primates." }]
                    }
                  ]
                },
                {
                  code: "0210.92",
                  title: "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
                  classifications: [
                    {
                      code: "0210.92.01",
                      title: "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "De ballenas, delfines y marsopas; de manatíes y dugones o dugongos; de otarios y focas, leones marinos y morsas." }]
                    }
                  ]
                },
                {
                  code: "0210.93",
                  title: "De reptiles (incluidas las serpientes y tortugas de mar).",
                  classifications: [
                    {
                      code: "0210.93.01",
                      title: "De reptiles (incluidas las serpientes y tortugas de mar).",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "De reptiles (incluidas las serpientes y tortugas de mar)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Pieles de cerdo ahumadas, enteras o en recortes." }]
                    },
                    {
                      code: "0210.99.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "03",
          title: "Pescados y crustáceos, moluscos y demás invertebrados acuáticos",
          notes: {
            legales: [
              {
                id: "NL-CAP03-1",
                text: "Este Capítulo no comprende: a) los mamíferos de la partida 01.06; b) la carne de los mamíferos de la partida 01.06 (partidas 02.08 o 02.10); c) el pescado (incluidos los hígados, huevas y lechas) ni los crustáceos, moluscos o demás invertebrados acuáticos, muertos e impropios para la alimentación humana por su naturaleza o por su estado de presentación (Capítulo 05); la harina, polvo y \"pellets\" de pescado o de crustáceos, moluscos o demás invertebrados acuáticos, impropios para la alimentación humana (partida 23.01); o d) el caviar y los sucedáneos del caviar preparados con huevas de pescado (partida 16.04)."
              },
              {
                id: "NL-CAP03-2",
                text: "En este Capítulo, el término \"pellets\" designa los productos en forma de cilindro, bolita, etc., aglomerados por simple presión o con adición de una pequeña cantidad de aglutinante."
              },
              {
                id: "NL-CAP03-3",
                text: "Las partidas 03.05 a 03.08 no comprenden la harina, polvo y \"pellets\", aptos para la alimentación humana (partida 03.09)."
              }
            ],
            nacionales: [],
            explicativas: []
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
                      nicos: [{ code: "00", title: "De agua dulce." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "03.02",
              title: "Pescado fresco o refrigerado, excepto los filetes y demás carne de pescado de la partida 03.04.",
              subheadings: [
                {
                  code: "0302.11",
                  title: "Truchas (Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache y Oncorhynchus chrysogaster).",
                  classifications: [
                    {
                      code: "0302.11.01",
                      title: "Truchas.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Truchas." }]
                    }
                  ]
                },
                {
                  code: "0302.13",
                  title: "Salmones del Pacífico (Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou y Oncorhynchus rhodurus).",
                  classifications: [
                    {
                      code: "0302.13.01",
                      title: "Salmones del Pacífico.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Salmones del Pacífico." }]
                    }
                  ]
                },
                {
                  code: "0302.14",
                  title: "Salmones del Atlántico (Salmo salar) y salmones del Danubio (Hucho hucho).",
                  classifications: [
                    {
                      code: "0302.14.01",
                      title: "Salmones del Atlántico y del Danubio.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Salmones del Atlántico y del Danubio." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás pescados frescos o refrigerados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "03.03",
              title: "Pescado congelado, excepto los filetes y demás carne de pescado de la partida 03.04.",
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
                      nicos: [{ code: "00", title: "Salmones rojos." }]
                    }
                  ]
                },
                {
                  code: "0303.14",
                  title: "Salmones del Atlántico (Salmo salar) y salmones del Danubio (Hucho hucho).",
                  classifications: [
                    {
                      code: "0303.14.01",
                      title: "Salmones del Atlántico y del Danubio.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Salmones del Atlántico y del Danubio." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás pescados congelados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "03.04",
              title: "Filetes y demás carne de pescado (incluso picada), frescos, refrigerados o congelados.",
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
                      nicos: [{ code: "00", title: "Tilapias." }]
                    }
                  ]
                },
                {
                  code: "0304.32",
                  title: "Bagres o peces gato (Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp.).",
                  classifications: [
                    {
                      code: "0304.32.01",
                      title: "Bagres o peces gato.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Bagres o peces gato." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás filetes de pescado." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "03.05",
              title: "Pescado seco, salado o en salmuera; pescado ahumado, incluso cocido antes o durante el ahumado; harina, polvo y \"pellets\" de pescado, aptos para la alimentación humana.",
              subheadings: [
                {
                  code: "0305.31",
                  title: "Filetes de tilapias (Oreochromis spp.), bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente.",
                  classifications: [
                    {
                      code: "0305.31.01",
                      title: "Filetes de tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL"],
                      nicos: [{ code: "00", title: "Filetes de tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente." }]
                    }
                  ]
                },
                {
                  code: "0305.32",
                  title: "Filetes de pescados de las familias Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae y Muraenolepididae.",
                  classifications: [
                    {
                      code: "0305.32.01",
                      title: "De merluza panameña (Merluccius angustimanus) o merluza del Pacífico Norte (Merluccius productus).",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL"],
                      nicos: [{ code: "00", title: "De merluza panameña o merluza del Pacífico Norte." }]
                    }
                  ]
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
                        { code: "01", title: "De atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado." },
                        { code: "02", title: "De salmones del Pacífico, salmones del Atlántico y salmones del Danubio." },
                        { code: "03", title: "De pez espada." },
                        { code: "04", title: "De sardina, sardinela o espadín." },
                        { code: "05", title: "De anchoas." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "0305.41",
                  title: "Salmones del Pacífico, salmones del Atlántico y salmones del Danubio, ahumados.",
                  classifications: [
                    {
                      code: "0305.41.01",
                      title: "Salmones ahumados.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL"],
                      nicos: [{ code: "00", title: "Salmones ahumados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Arenques ahumados." }]
                    }
                  ]
                },
                {
                  code: "0305.43",
                  title: "Truchas (Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache y Oncorhynchus chrysogaster), ahumadas.",
                  classifications: [
                    {
                      code: "0305.43.01",
                      title: "Truchas ahumadas.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL"],
                      nicos: [{ code: "00", title: "Truchas ahumadas." }]
                    }
                  ]
                },
                {
                  code: "0305.44",
                  title: "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, ahumados.",
                  classifications: [
                    {
                      code: "0305.44.01",
                      title: "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, ahumados.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "EMB", "SAL"],
                      nicos: [{ code: "00", title: "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, ahumados." }]
                    }
                  ]
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
                        { code: "01", title: "Merluzas ahumadas, excepto lo comprendido en el número de identificación comercial 0305.49.99.02." },
                        { code: "02", title: "Merluza panameña o merluza del Pacífico Norte." },
                        { code: "03", title: "Atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado." },
                        { code: "04", title: "Pez espada." },
                        { code: "05", title: "Sardina, sardinela o espadín." },
                        { code: "06", title: "Anchoas." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "0305.51",
                  title: "Bacalaos (Gadus morhua, Gadus ogac, Gadus macrocephalus), secos.",
                  classifications: [
                    {
                      code: "0305.51.02",
                      title: "Bacalaos secos.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL"],
                      nicos: [
                        { code: "01", title: "Bacalao de la variedad \"ling\"." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "0305.52",
                  title: "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, secos.",
                  classifications: [
                    {
                      code: "0305.52.01",
                      title: "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, secos.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL", "SEM"],
                      nicos: [{ code: "00", title: "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, secos." }]
                    }
                  ]
                },
                {
                  code: "0305.53",
                  title: "Pescados de las familias Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae y Muraenolepididae, excepto los bacalaos, secos.",
                  classifications: [
                    {
                      code: "0305.53.01",
                      title: "Pescados de las familias Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae y Muraenolepididae, secos.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL", "SEM"],
                      nicos: [
                        { code: "01", title: "De merluza panameña o merluza del Pacífico Norte." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "0305.54",
                  title: "Arenques, anchoas, sardinas, sardinelas, espadines, caballas, carites, jureles, pámpanos, cobias, palometones, papardas, macarelas, capelanes, peces espada, bacoretas, bonitos, agujas, marlines, peces vela o picudos, secos.",
                  classifications: [
                    {
                      code: "0305.54.01",
                      title: "Arenques, anchoas, sardinas, sardinelas, espadines, caballas, carites, jureles, pámpanos, cobias, palometones, papardas, macarelas, capelanes, peces espada, bacoretas, bonitos, agujas, marlines, peces vela o picudos, secos.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL", "SEM"],
                      nicos: [{ code: "00", title: "Arenques, anchoas, sardinas, sardinelas, espadines, caballas, carites, jureles, pámpanos, cobias, palometones, papardas, macarelas, capelanes, peces espada, bacoretas, bonitos, agujas, marlines, peces vela o picudos, secos." }]
                    }
                  ]
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
                        { code: "01", title: "Merluzas, excepto lo comprendido en el número de identificación comercial 0305.59.99.02." },
                        { code: "02", title: "Merluza panameña o merluza del Pacífico Norte." },
                        { code: "03", title: "Atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado." },
                        { code: "04", title: "Salmones del Pacífico, salmones del Atlántico y salmones del Danubio." },
                        { code: "05", title: "Pez espada." },
                        { code: "06", title: "Sardina, sardinela o espadín." },
                        { code: "07", title: "Anchoas, excepto boquerón bucanero, boquerón aduanero." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Arenques salados." }]
                    }
                  ]
                },
                {
                  code: "0305.62",
                  title: "Bacalaos (Gadus morhua, Gadus ogac, Gadus macrocephalus), salados.",
                  classifications: [
                    {
                      code: "0305.62.01",
                      title: "Bacalaos salados.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL"],
                      nicos: [{ code: "00", title: "Bacalaos salados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Anchoas saladas." }]
                    }
                  ]
                },
                {
                  code: "0305.64",
                  title: "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, salados.",
                  classifications: [
                    {
                      code: "0305.64.01",
                      title: "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, salados.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL"],
                      nicos: [{ code: "00", title: "Tilapias, bagres o peces gato, carpas, anguilas, percas del Nilo y peces cabeza de serpiente, salados." }]
                    }
                  ]
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
                        { code: "01", title: "Atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado." },
                        { code: "02", title: "Salmones del Pacífico, salmones del Atlántico y salmones del Danubio." },
                        { code: "03", title: "Pez espada." },
                        { code: "04", title: "Sardina, sardinela o espadín." },
                        { code: "05", title: "Merluza panameña o merluza del Pacífico Norte." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aletas de tiburón." }]
                    }
                  ]
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
                        { code: "01", title: "De atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado." },
                        { code: "02", title: "De salmones del Pacífico, salmones del Atlántico y salmones del Danubio." },
                        { code: "03", title: "De pez espada." },
                        { code: "04", title: "De sardina, sardinela o espadín." },
                        { code: "05", title: "De anchoas." },
                        { code: "06", title: "De merluza panameña o merluza del Pacífico Norte." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
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
                        { code: "01", title: "De atún de aleta azul del Atlántico, atún de aleta azul del Pacífico, atún de aleta azul del Sur, atún de aleta amarilla, patudos o atunes ojos grandes o bonito de vientre rayado." },
                        { code: "02", title: "De salmones del Pacífico, salmones del Atlántico y salmones del Danubio." },
                        { code: "03", title: "De pez espada." },
                        { code: "04", title: "De sardina, sardinela o espadín." },
                        { code: "05", title: "De anchoas." },
                        { code: "06", title: "De merluza panameña o merluza del Pacífico Norte." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "03.06",
              title: "Crustáceos, incluso pelados, vivos, frescos, refrigerados, congelados, secos, salados o en salmuera; crustáceos sin pelar, cocidos en agua o vapor, incluso refrigerados, congelados, secos, salados o en salmuera; harina, polvo y \"pellets\" de crustáceos, aptos para la alimentación humana.",
              subheadings: [
                {
                  code: "0306.11",
                  title: "Langostas de mar (Palinurus spp., Panulirus spp., Jasus spp.).",
                  classifications: [
                    {
                      code: "0306.11.01",
                      title: "Langostas de mar.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Langostas de mar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cangrejos." }]
                    }
                  ]
                },
                {
                  code: "0306.17",
                  title: "Los demás camarones, langostinos y demás decápodos Natantia.",
                  classifications: [
                    {
                      code: "0306.17.01",
                      title: "Camarones, langostinos y demás decápodos.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Camarones, langostinos y demás decápodos." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "03.07",
              title: "Moluscos, incluso separados de sus valvas, vivos, frescos, refrigerados, congelados, secos, salados o en salmuera; moluscos ahumados, incluso pelados o cocidos, antes o durante el ahumado; harina, polvo y \"pellets\" de moluscos, aptos para la alimentación humana.",
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
                      nicos: [{ code: "00", title: "Ostras vivas, frescas o refrigeradas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Vivos, frescos o refrigerados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Abulones u orejas de mar." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "03.08",
              title: "Invertebrados acuáticos, excepto los crustáceos y moluscos, vivos, frescos, refrigerados, congelados, secos, salados o en salmuera; invertebrados acuáticos ahumados, excepto los crustáceos y moluscos, incluso cocidos antes o durante el ahumado.",
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
                      nicos: [{ code: "00", title: "Pepinos de mar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Medusas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "03.09",
              title: "Harina, polvo y \"pellets\" de pescado, crustáceos, moluscos y demás invertebrados acuáticos, aptos para la alimentación humana.",
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
                      nicos: [{ code: "00", title: "De pescado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "04",
          title: "Leche y productos lácteos; huevos de ave; miel natural; productos comestibles de origen animal, no expresados ni comprendidos en otra parte",
          notes: {
            legales: [
              {
                id: "NL-CAP04-1",
                text: "Se considera leche la leche entera y la leche desnatada (descremada) total o parcialmente."
              },
              {
                id: "NL-CAP04-2",
                text: "En la partida 04.05: a) el término mantequilla abarca la mantequilla de vaca, oveja o cabra natural, del lactosuero o recombinada (fresca, salada o rancia, incluso en recipientes herméticamente cerrados) que se obtienen exclusivamente de la leche, con un contenido de materias grasas de la leche que sea superior o igual al 80% pero inferior o igual al 95%, un contenido máximo de materias secas no grasas de la leche del 2% y un contenido máximo de agua del 16%. La mantequilla no contiene emulsionantes, pero puede contener cloruro sódico, colorantes alimentarios, sales de neutralización y cultivos de bacterias lácticas inocuas; b) el término pastas lácteas para untar abarca las emulsiones del tipo agua en aceite que se puedan untar que contengan materias grasas de la leche como únicas materias grasas y en las que el contenido de estas sea superior o igual al 39% pero inferior al 80%."
              }
            ],
            nacionales: [
              {
                id: "NN-CAP04-1",
                text: "Para los efectos de este Capítulo, los términos, con aromatizante(s), aromatizado(s) y aromatizada(s) significan: con adición de sabor."
              }
            ],
            explicativas: []
          },
          headings: [
            {
              code: "04.01",
              title: "Leche y nata (crema), sin concentrar, sin adición de azúcar ni otro edulcorante.",
              subheadings: [
                {
                  code: "0401.10",
                  title: "Con un contenido de materias grasas inferior o igual al 1% en peso.",
                  classifications: [
                    {
                      code: "0401.10.02",
                      title: "Con un contenido de materias grasas inferior o igual al 1% en peso.",
                      umt: "L",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SAL", "PACIC"],
                      nicos: [
                        { code: "01", title: "En envases herméticos." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "0401.20",
                  title: "Con un contenido de materias grasas superior al 1% pero inferior o igual al 6%, en peso.",
                  classifications: [
                    {
                      code: "0401.20.02",
                      title: "Con un contenido de materias grasas superior al 1% pero inferior o igual al 6%, en peso.",
                      umt: "L",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SAL", "PACIC"],
                      nicos: [
                        { code: "01", title: "En envases herméticos." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "0401.40",
                  title: "Con un contenido de materias grasas superior al 6% pero inferior o igual al 10%, en peso.",
                  classifications: [
                    {
                      code: "0401.40.01",
                      title: "Con un contenido de materias grasas superior al 6% pero inferior o igual al 10%, en peso.",
                      umt: "L",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SAL", "PACIC"],
                      nicos: [
                        { code: "01", title: "En envases herméticos." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
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
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "04.02",
              title: "Leche y nata (crema), concentradas o con adición de azúcar u otro edulcorante.",
              subheadings: [
                {
                  code: "0402.10",
                  title: "En polvo, gránulos o demás formas sólidas, con un contenido de materias grasas inferior o igual al 1.5% en peso.",
                  classifications: [
                    {
                      code: "0402.10.01",
                      title: "Leche en polvo o en pastillas.",
                      umt: "Kg",
                      importDuty: 45,
                      exportDuty: 0,
                      regimenes: ["NOM", "SAD", "SAL", "PACIC", "CUP", "AMX"],
                      nicos: [{ code: "00", title: "Leche en polvo o en pastillas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Leche entera en polvo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Leche evaporada." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Leche condensada." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "04.03",
              title: "Suero de mantequilla (de manteca), leche y nata (crema) cuajadas, yogur, kéfir y demás leches y natas (cremas), fermentadas o acidificadas, incluso concentrados, con adición de azúcar u otro edulcorante, aromatizados o con frutas u otros frutos o cacao.",
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
                      nicos: [{ code: "00", title: "Yogur." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "04.04",
              title: "Lactosuero, incluso concentrado o con adición de azúcar u otro edulcorante; productos constituidos por los componentes naturales de la leche, incluso con adición de azúcar u otro edulcorante, no expresados ni comprendidos en otra parte.",
              subheadings: [
                {
                  code: "0404.10",
                  title: "Lactosuero, aunque esté modificado, incluso concentrado o con adición de azúcar u otro edulcorante.",
                  classifications: [
                    {
                      code: "0404.10.01",
                      title: "Lactosuero en polvo.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SAL"],
                      nicos: [{ code: "00", title: "Lactosuero en polvo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "04.05",
              title: "Mantequilla (manteca) y demás materias grasas de la leche; pastas lácteas para untar.",
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
                      nicos: [{ code: "00", title: "Mantequilla (manteca)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Pastas lácteas para untar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "04.06",
              title: "Quesos y requesón.",
              subheadings: [
                {
                  code: "0406.10",
                  title: "Queso fresco (sin madurar), incluido el del lactosuero, y requesón.",
                  classifications: [
                    {
                      code: "0406.10.01",
                      title: "Queso fresco y requesón.",
                      umt: "Kg",
                      importDuty: 45,
                      exportDuty: 0,
                      regimenes: ["SAD", "SAL", "PACIC", "CUP"],
                      nicos: [{ code: "00", title: "Queso fresco y requesón." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Queso rallado o en polvo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Queso fundido." }]
                    }
                  ]
                },
                {
                  code: "0406.40",
                  title: "Queso de pasta azul y demás quesos que presenten vetas producidas por Penicillium roqueforti.",
                  classifications: [
                    {
                      code: "0406.40.01",
                      title: "Queso de pasta azul.",
                      umt: "Kg",
                      importDuty: 45,
                      exportDuty: 0,
                      regimenes: ["SAD", "SAL"],
                      nicos: [{ code: "00", title: "Queso de pasta azul." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás quesos." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "04.07",
              title: "Huevos de ave con cáscara (cascarón), frescos, conservados o cocidos.",
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
                      nicos: [{ code: "00", title: "Huevos fértiles para incubación." }]
                    },
                    {
                      code: "0407.11.99",
                      title: "Los demás.",
                      umt: "Cpz",
                      importDuty: 75,
                      exportDuty: 0,
                      regimenes: ["SAD", "PACIC", "CUP"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De gallina de la especie Gallus domesticus." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "04.08",
              title: "Huevos de ave sin cáscara (cascarón) y yemas de huevo, frescos, secos, cocidos en agua o vapor, moldeados, congelados o conservados de otro modo, incluso con adición de azúcar u otro edulcorante.",
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
                      nicos: [{ code: "00", title: "Secas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Secas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Miel natural." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "04.10",
              title: "Insectos y demás productos comestibles de origen animal no expresados ni comprendidos en otra parte.",
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
                      nicos: [{ code: "00", title: "Insectos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "05",
          title: "Los demás productos de origen animal no expresados ni comprendidos en otra parte",
          notes: {
            legales: [
              {
                id: "NL-CAP05-1",
                text: "Este Capítulo no comprende: a) los productos comestibles, excepto las tripas, vejigas y estómagos de animales, enteros o en trozos, y la sangre animal (líquida o desecada); b) los cueros, pieles y peletería, excepto los productos de la partida 05.05 y los recortes y desperdicios similares de pieles en bruto de la partida 05.11 (Capítulos 41 o 43); c) las materias primas textiles de origen animal, excepto la crin y los desperdicios de crin (Sección XI); d) las cabezas preparadas para artículos de cepillería (partida 96.03)."
              },
              {
                id: "NL-CAP05-2",
                text: "En la partida 05.01 también se considera cabello en bruto el extendido longitudinalmente, pero sin colocarlo en el mismo sentido."
              },
              {
                id: "NL-CAP05-3",
                text: "En la Nomenclatura, se considera marfil la materia de las defensas de elefante, hipopótamo, morsa, narval o jabalí y los cuernos de rinoceronte, así como los dientes de todos los animales."
              },
              {
                id: "NL-CAP05-4",
                text: "En la Nomenclatura, se considera crin tanto el pelo de la crin como el de la cola de los équidos o de los bóvidos. La partida 05.11 comprende, entre otros, la crin y sus desperdicios, incluso en napas con o sin soporte."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "05.01",
              title: "Cabello en bruto, incluso lavado o desgrasado; desperdicios de cabello.",
              subheadings: [
                {
                  code: "0501.00",
                  title: "Cabello en bruto, incluso lavado o desgrasado; desperdicios de cabello.",
                  classifications: [
                    {
                      code: "0501.00.01",
                      title: "Cabello en bruto, incluso lavado o desgrasado; desperdicios de cabello.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Cabello en bruto, incluso lavado o desgrasado; desperdicios de cabello." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "05.02",
              title: "Cerdas de cerdo o de jabalí; pelo de tejón y demás pelos para cepillería; desperdicios de dichas cerdas o pelos.",
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
                      nicos: [{ code: "00", title: "Cerdas de cerdo o de jabalí y sus desperdicios." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "05.04",
              title: "Tripas, vejigas y estómagos de animales, excepto los de pescado, enteros o en trozos, frescos, refrigerados, congelados, salados o en salmuera, secos o ahumados.",
              subheadings: [
                {
                  code: "0504.00",
                  title: "Tripas, vejigas y estómagos de animales, excepto los de pescado, enteros o en trozos, frescos, refrigerados, congelados, salados o en salmuera, secos o ahumados.",
                  classifications: [
                    {
                      code: "0504.00.91",
                      title: "Tripas, vejigas y estómagos de animales.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Tripas, vejigas y estómagos de animales." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "05.05",
              title: "Pieles y demás partes de ave, con sus plumas o plumón, plumas y partes de plumas (incluso recortadas) y plumón, en bruto o simplemente limpiados, desinfectados o preparados para su conservación; polvo y desperdicios de plumas o de partes de plumas.",
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
                      nicos: [{ code: "00", title: "Plumas de las utilizadas para relleno; plumón." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "05.06",
              title: "Huesos y núcleos córneos, en bruto, desgrasados, simplemente preparados (pero sin cortar en forma determinada), acidulados o desgelatinizados; polvo y desperdicios de estas materias.",
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
                      nicos: [{ code: "00", title: "Oseína y huesos acidulados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "05.07",
              title: "Marfil, concha (caparazón) de tortuga, ballenas de mamíferos marinos (incluidas las barbas), cuernos, astas, cascos, pezuñas, uñas, garras y picos, en bruto o simplemente preparados, pero sin cortar en forma determinada; polvo y desperdicios de estas materias.",
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
                      nicos: [{ code: "00", title: "Marfil; polvo y desperdicios de marfil." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "05.08",
              title: "Coral y materias similares, en bruto o simplemente preparados, pero sin otro trabajo; valvas y caparazones de moluscos, crustáceos o equinodermos, y jibiones, en bruto o simplemente preparados, pero sin cortar en forma determinada, incluso en polvo y desperdicios.",
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
                      nicos: [{ code: "00", title: "Coral y materias similares." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "05.10",
              title: "Ámbar gris, castóreo, algalia y almizcle; cantáridas; bilis, incluso desecada; glándulas y demás sustancias de origen animal utilizadas para la preparación de productos farmacéuticos, frescas, refrigeradas, congeladas o conservadas provisionalmente de otra forma.",
              subheadings: [
                {
                  code: "0510.00",
                  title: "Ámbar gris, castóreo, algalia y almizcle; cantáridas; bilis.",
                  classifications: [
                    {
                      code: "0510.00.01",
                      title: "Ámbar gris, castóreo, algalia y almizcle; cantáridas; bilis.",
                      umt: "Kg",
                      importDuty: 5,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Ámbar gris, castóreo, algalia y almizcle; cantáridas; bilis." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "05.11",
              title: "Productos de origen animal no expresados ni comprendidos en otra parte; animales muertos de los Capítulos 01 o 03, impropios para la alimentación humana.",
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
                      nicos: [{ code: "00", title: "Semen de bovino." }]
                    }
                  ]
                },
                {
                  code: "0511.91",
                  title: "Productos de pescado o de crustáceos, moluscos o demás invertebrados acuáticos; animales muertos del Capítulo 03.",
                  classifications: [
                    {
                      code: "0511.91.01",
                      title: "Productos de pescado o de crustáceos.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Productos de pescado o de crustáceos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Embriones." }]
                    },
                    {
                      code: "0511.99.03",
                      title: "Semen.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Semen." }]
                    },
                    {
                      code: "0511.99.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      code: "II",
      title: "Productos del reino vegetal",
      notes: {
        legales: [
          {
            id: "NL-SEC02-1",
            text: "En esta Sección, el término \"pellets\" designa los productos en forma de cilindro, bolita, etc., aglomerados por simple presión o con adición de un aglutinante en proporción inferior o igual al 3% en peso."
          }
        ],
        nacionales: [],
        explicativas: []
      },
      chapters: [
        {
          code: "06",
          title: "Plantas vivas y productos de la floricultura",
          notes: {
            legales: [
              {
                id: "NL-CAP06-1",
                text: "Salvo lo dispuesto en la segunda parte de la partida 06.01, este Capítulo comprende únicamente los productos suministrados habitualmente por los horticultores, viveristas o floristas para la plantación o la ornamentación. Sin embargo, se excluyen de este Capítulo las papas (patatas), cebollas hortenses, chalotes, ajos y demás productos del Capítulo 07."
              },
              {
                id: "NL-CAP06-2",
                text: "Los ramos, cestas, coronas y artículos similares se asimilan a las flores o follajes de las partidas 06.03 o 06.04, sin tener en cuenta los accesorios de otras materias. Sin embargo, estas partidas no comprenden los collages y cuadros similares de la partida 97.01."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "06.01",
              title: "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en reposo vegetativo, en vegetación o en flor; plantas y raíces de achicoria, excepto las raíces de la partida 12.12.",
              subheadings: [
                {
                  code: "0601.10",
                  title: "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en reposo vegetativo.",
                  classifications: [
                    {
                      code: "0601.10.09",
                      title: "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en reposo vegetativo.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["SEM"],
                      nicos: [
                        { code: "01", title: "Bulbos de gladiolas." },
                        { code: "02", title: "Bulbos de tulipanes." },
                        { code: "03", title: "Bulbos de lilies." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "0601.20",
                  title: "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en vegetación o en flor; plantas y raíces de achicoria.",
                  classifications: [
                    {
                      code: "0601.20.10",
                      title: "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en vegetación o en flor; plantas y raíces de achicoria.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SEM"],
                      nicos: [{ code: "00", title: "Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en vegetación o en flor; plantas y raíces de achicoria." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "06.02",
              title: "Las demás plantas vivas (incluidas sus raíces), esquejes e injertos; micelios.",
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
                      nicos: [{ code: "00", title: "Esquejes sin enraizar e injertos." }]
                    }
                  ]
                },
                {
                  code: "0602.20",
                  title: "Árboles, arbustos y matas, de frutas o de otros frutos comestibles, incluso injertados.",
                  classifications: [
                    {
                      code: "0602.20.04",
                      title: "Árboles, arbustos y matas, de frutas o de otros frutos comestibles, incluso injertados.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [
                        { code: "01", title: "Árboles o arbustos frutales." },
                        { code: "02", title: "Plantas para injertar (barbados), de longitud inferior o igual a 80 cm." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Rododendros y azaleas, incluso injertados." }]
                    }
                  ]
                },
                {
                  code: "0602.40",
                  title: "Rosales, incluso injertados.",
                  classifications: [
                    {
                      code: "0602.40.01",
                      title: "Estacas, plantas o plántulas de rosales, con o sin raíz, incluso injertados.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Estacas, plantas o plántulas de rosales, con o sin raíz, incluso injertados." }]
                    },
                    {
                      code: "0602.40.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Esquejes con raíz." }]
                    },
                    {
                      code: "0602.90.07",
                      title: "Plantas vivas acuáticas, incluidos sus bulbos y sus partes, para acuacultura.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Plantas vivas acuáticas, incluidos sus bulbos y sus partes, para acuacultura." }]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "06.03",
              title: "Flores y capullos, cortados para ramos o adornos, frescos, secos, blanqueados, teñidos, impregnados o preparados de otra forma.",
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
                      nicos: [{ code: "00", title: "Rosas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Claveles." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Orquídeas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Crisantemos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Azucenas (Lilium spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "06.04",
              title: "Follaje, hojas, ramas y demás partes de plantas, sin flores ni capullos, y hierbas, musgos y líquenes, para ramos o adornos, frescos, secos, blanqueados, teñidos, impregnados o preparados de otra forma.",
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
                      nicos: [{ code: "00", title: "Musgo del género Sphagnum." }]
                    },
                    {
                      code: "0604.20.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Musgo del género Sphagnum." }]
                    },
                    {
                      code: "0604.90.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "SAD", "SEM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "07",
          title: "Hortalizas, plantas, raíces y tubérculos alimenticios",
          notes: {
            legales: [
              {
                id: "NL-CAP07-1",
                text: "Este Capítulo no comprende los productos forrajeros de la partida 12.14."
              },
              {
                id: "NL-CAP07-2",
                text: "En las partidas 07.09, 07.10, 07.11 y 07.12, la expresión hortalizas alcanza también a los hongos comestibles, trufas, aceitunas, alcaparras, calabacines (zapallitos), calabazas (zapallos), berenjenas, maíz dulce (Zea mays var. saccharata), frutos de los géneros Capsicum o Pimenta, hinojo y plantas como el perejil, perifollo, estragón, berro y mejorana cultivada (Majorana hortensis u Origanum majorana)."
              }
            ],
            nacionales: [
              {
                id: "NN-CAP07-1",
                text: "Salvo disposición en contrario, el término hortaliza también comprende a las \"legumbres\"."
              }
            ],
            explicativas: []
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Tomates frescos o refrigerados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.03",
              title: "Cebollas, chalotes, ajos, puerros y demás hortalizas aliáceas, frescos o refrigerados.",
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Puerros y demás hortalizas aliáceas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.04",
              title: "Coles, incluidos los repollos, coliflores, coles rizadas, colinabos y productos comestibles similares del género Brassica, frescos o refrigerados.",
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
                        { code: "02", title: "Brócoli (\"broccoli\") germinado." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Coles (repollitos) de Bruselas." }]
                    }
                  ]
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
                        { code: "01", title: "\"Kohlrabi\", \"kale\" y similares." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.05",
              title: "Lechugas (Lactuca sativa) y achicorias, comprendidas la escarola y la endibia (Cichorium spp.), frescas o refrigeradas.",
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
                      nicos: [{ code: "00", title: "Repolladas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.06",
              title: "Zanahorias, nabos, remolachas para ensalada, salsifíes, apionabos, rábanos y raíces comestibles similares, frescos o refrigerados.",
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
                      nicos: [{ code: "00", title: "Zanahorias y nabos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Pepinos y pepinillos, frescos o refrigerados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.08",
              title: "Hortalizas de vaina, aunque estén desvainadas, frescas o refrigeradas.",
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
                      nicos: [{ code: "00", title: "Chícharos (guisantes, arvejas) (Pisum sativum)." }]
                    }
                  ]
                },
                {
                  code: "0708.20",
                  title: "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
                  classifications: [
                    {
                      code: "0708.20.01",
                      title: "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Berenjenas." }]
                    }
                  ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hongos del género Agaricus." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hongos del género Boletus." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hongos del género Cantharellus." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Shiitake (Lentinus edodes)." }]
                    }
                  ]
                },
                {
                  code: "0709.55",
                  title: "Matsutake (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum).",
                  classifications: [
                    {
                      code: "0709.55.01",
                      title: "Matsutake (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum).",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "SEM"],
                      nicos: [{ code: "00", title: "Matsutake (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Trufas (Tuber spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Chile Habanero de la Península de Yucatán." }]
                    },
                    {
                      code: "0709.60.04",
                      title: "Chile Yahualica.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Chile Yahualica." }]
                    },
                    {
                      code: "0709.60.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "PACIC", "CUP"],
                      nicos: [
                        { code: "01", title: "Chile \"Bell\"." },
                        { code: "02", title: "Chile habanero." },
                        { code: "03", title: "Chile jalapeño." },
                        { code: "04", title: "Chile poblano." },
                        { code: "05", title: "Chile pasilla." },
                        { code: "06", title: "Chile serrano." },
                        { code: "07", title: "Chile anahem." },
                        { code: "08", title: "Chile caribe." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "0709.70",
                  title: "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
                  classifications: [
                    {
                      code: "0709.70.01",
                      title: "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "PACIC"],
                      nicos: [{ code: "00", title: "Espinacas (incluida la de Nueva Zelanda) y armuelles." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Alcachofas (alcauciles)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceitunas." }]
                    }
                  ]
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
                        { code: "01", title: "Calabaza duras (por ejemplo: butternut, spaghetti, acorn, kabocha)." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.10",
              title: "Hortalizas, aunque estén cocidas en agua o vapor, congeladas.",
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
                      nicos: [{ code: "00", title: "Papas (patatas)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Chícharos (guisantes, arvejas) (Pisum sativum)." }]
                    }
                  ]
                },
                {
                  code: "0710.22",
                  title: "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
                  classifications: [
                    {
                      code: "0710.22.01",
                      title: "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.).",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Frijoles (porotos, alubias, judías, fréjoles) (Vigna spp., Phaseolus spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                },
                {
                  code: "0710.30",
                  title: "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
                  classifications: [
                    {
                      code: "0710.30.01",
                      title: "Espinacas (incluida la de Nueva Zelanda) y armuelles.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Espinacas (incluida la de Nueva Zelanda) y armuelles." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Maíz dulce." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cebollas." }]
                    },
                    {
                      code: "0710.80.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [
                        { code: "01", title: "Coles de bruselas (repollitos), cortadas." },
                        { code: "02", title: "Espárragos, brócolis (\"bróccoli\") y coliflores." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Mezclas de hortalizas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.11",
              title: "Hortalizas conservadas provisionalmente, pero todavía impropias, en este estado, para consumo inmediato.",
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
                      nicos: [{ code: "00", title: "Aceitunas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Pepinos y pepinillos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hongos del género Agaricus." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás hortalizas; mezclas de hortalizas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.12",
              title: "Hortalizas secas, incluidas las cortadas en trozos o en rodajas o las trituradas o pulverizadas, pero sin otra preparación.",
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
                      nicos: [{ code: "00", title: "Cebollas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hongos del género Agaricus." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hongos de la madera (Auricularia spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hongos gelatinosos (Tremella spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Shiitake (Lentinus edodes)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Chiles y pimientos del género Capsicum, enteros." }]
                    },
                    {
                      code: "0712.90.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.13",
              title: "Hortalizas de vaina secas desvainadas, aunque estén mondadas o partidas.",
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
                      nicos: [{ code: "00", title: "Chícharos (guisantes, arvejas) (Pisum sativum)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Garbanzos." }]
                    }
                  ]
                },
                {
                  code: "0713.31",
                  title: "Frijoles (porotos, alubias, judías, fréjoles) de las especies Vigna mungo (L.) Hepper o Vigna radiata (L.) Wilczek.",
                  classifications: [
                    {
                      code: "0713.31.01",
                      title: "Frijoles (porotos, alubias, judías, fréjoles) de las especies Vigna mungo (L.) Hepper o Vigna radiata (L.) Wilczek.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Frijoles (porotos, alubias, judías, fréjoles) de las especies Vigna mungo (L.) Hepper o Vigna radiata (L.) Wilczek." }]
                    }
                  ]
                },
                {
                  code: "0713.32",
                  title: "Frijoles (porotos, alubias, judías, fréjoles) adzuki (Vigna angularis).",
                  classifications: [
                    {
                      code: "0713.32.01",
                      title: "Frijoles (porotos, alubias, judías, fréjoles) adzuki (Vigna angularis).",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Frijoles (porotos, alubias, judías, fréjoles) adzuki (Vigna angularis)." }]
                    }
                  ]
                },
                {
                  code: "0713.33",
                  title: "Frijoles (porotos, alubias, judías, fréjoles) comunes (Phaseolus vulgaris).",
                  classifications: [
                    {
                      code: "0713.33.01",
                      title: "Frijoles (porotos, alubias, judías, fréjoles) comunes (Phaseolus vulgaris).",
                      umt: "Kg",
                      importDuty: 75,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Frijoles (porotos, alubias, judías, fréjoles) comunes (Phaseolus vulgaris)." }]
                    }
                  ]
                },
                {
                  code: "0713.34",
                  title: "Frijoles (porotos, alubias, judías, fréjoles) bambara (Vigna subterranea o Voandzeia subterranea).",
                  classifications: [
                    {
                      code: "0713.34.01",
                      title: "Frijoles (porotos, alubias, judías, fréjoles) bambara (Vigna subterranea o Voandzeia subterranea).",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Frijoles (porotos, alubias, judías, fréjoles) bambara (Vigna subterranea o Voandzeia subterranea)." }]
                    }
                  ]
                },
                {
                  code: "0713.35",
                  title: "Frijoles (porotos, alubias, judías, fréjoles) salvajes o caupí (Vigna unguiculata).",
                  classifications: [
                    {
                      code: "0713.35.01",
                      title: "Frijoles (porotos, alubias, judías, fréjoles) salvajes o caupí (Vigna unguiculata).",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Frijoles (porotos, alubias, judías, fréjoles) salvajes o caupí (Vigna unguiculata)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Lentejas." }]
                    }
                  ]
                },
                {
                  code: "0713.50",
                  title: "Habas (Vicia faba var. major), haba caballar (Vicia faba var. equina) y haba menor (Vicia faba var. minor).",
                  classifications: [
                    {
                      code: "0713.50.01",
                      title: "Habas (Vicia faba var. major), haba caballar (Vicia faba var. equina) y haba menor (Vicia faba var. minor).",
                      umt: "Kg",
                      importDuty: 35,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Habas (Vicia faba var. major), haba caballar (Vicia faba var. equina) y haba menor (Vicia faba var. minor)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Guisantes de palo o gandú (Cajanus cajan)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "07.14",
              title: "Raíces de yuca (mandioca), arrurruz o salep, aguaturmas (patacas), camotes (batatas, boniatos) y raíces y tubérculos similares ricos en fécula o inulina, frescos, refrigerados, congelados o secos, incluso troceados o en \"pellets\"; médula de sagú.",
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
                      nicos: [{ code: "00", title: "Raíces de yuca (mandioca)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Camotes (batatas, boniatos)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Ñames (Dioscorea spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Taros (Colocasia spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Yautías (malanga) (Xanthosoma spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "08",
          title: "Frutas y frutos comestibles; cortezas de agrios (cítricos), melones o sandías",
          notes: {
            legales: [
              {
                id: "NL-CAP08-1",
                text: "Este Capítulo no comprende los frutos no comestibles."
              },
              {
                id: "NL-CAP08-2",
                text: "Las frutas y otros frutos refrigerados se clasifican en las mismas partidas que las frutas y frutos frescos correspondientes."
              }
            ],
            nacionales: [
              {
                id: "NN-CAP08-1",
                text: "En la Nomenclatura, la expresión frutos con o de cáscara se refiere a los frutos comprendidos en las partidas 08.01 y 08.02."
              }
            ],
            explicativas: []
          },
          headings: [
            {
              code: "08.01",
              title: "Cocos, nueces del Brasil y nueces de marañón (merey, cajuil, anacardo, \"cajú\"), frescos o secos, incluso sin cáscara o mondados.",
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
                      nicos: [{ code: "00", title: "Secos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con la cáscara interna (endocarpio)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin cáscara." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "08.02",
              title: "Los demás frutos de cáscara frescos o secos, incluso sin cáscara o mondados.",
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
                      nicos: [{ code: "00", title: "Con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Nueces de cola (Cola spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Nueces de areca." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Piñones con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Piñones sin cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "08.03",
              title: "Bananas, incluidos los plátanos \"plantains\", frescos o secos.",
              subheadings: [
                {
                  code: "0803.10",
                  title: "Plátanos \"plantains\".",
                  classifications: [
                    {
                      code: "0803.10.01",
                      title: "Plátanos \"plantains\".",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Plátanos \"plantains\"." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "08.04",
              title: "Dátiles, higos, piñas (ananás), aguacates (paltas), guayabas, mangos y mangostanes, frescos o secos.",
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
                      nicos: [{ code: "00", title: "Dátiles." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Higos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Piñas (ananás)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aguacates (paltas)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Mango Ataúlfo del Soconusco Chiapas." }]
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
                        { code: "03", title: "Mangos." }
                      ]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Naranjas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Mandarinas (incluidas las tangerinas y satsumas)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Clementinas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Toronjas o pomelos." }]
                    }
                  ]
                },
                {
                  code: "0805.50",
                  title: "Limones (Citrus limon, Citrus limonum) y limas (Citrus aurantifolia, Citrus latifolia).",
                  classifications: [
                    {
                      code: "0805.50.02",
                      title: "Limones (Citrus limon, Citrus limonum) y limas (Citrus aurantifolia, Citrus latifolia).",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "PACIC"],
                      nicos: [
                        { code: "01", title: "Limas." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Frescas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Secas, incluidas las pasas." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Sandías." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Papayas." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Manzanas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Peras." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Membrillos." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "08.09",
              title: "Damascos (albaricoques, chabacanos), cerezas, duraznos (melocotones) (incluidos los griñones y nectarinas), ciruelas y endrinas, frescos.",
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
                      nicos: [{ code: "00", title: "Damascos (albaricoques, chabacanos)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Guindas (cerezas ácidas) (Prunus cerasus)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                },
                {
                  code: "0809.30",
                  title: "Duraznos (melocotones), incluidos los griñones y nectarinas.",
                  classifications: [
                    {
                      code: "0809.30.01",
                      title: "Duraznos (melocotones), incluidos los griñones y nectarinas.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Duraznos (melocotones), incluidos los griñones y nectarinas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Ciruelas y endrinas." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Fresas (frutillas)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Frambuesas, zarzamoras, moras y moras-frambuesa." }]
                    }
                  ]
                },
                {
                  code: "0810.30",
                  title: "Grosellas negras, blancas o rojas y grosellas espinosas.",
                  classifications: [
                    {
                      code: "0810.30.01",
                      title: "Grosellas negras, blancas o rojas y grosellas espinosas.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Grosellas negras, blancas o rojas y grosellas espinosas." }]
                    }
                  ]
                },
                {
                  code: "0810.40",
                  title: "Arándanos rojos, mirtilos y demás frutos del género Vaccinium.",
                  classifications: [
                    {
                      code: "0810.40.02",
                      title: "Arándanos rojos, mirtilos y demás frutos del género Vaccinium.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [
                        { code: "01", title: "Arándano azul." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Kiwis." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Duriones." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Caquis (persimonios)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "08.11",
              title: "Frutas y otros frutos, sin cocer o cocidos en agua o vapor, congelados, incluso con adición de azúcar u otro edulcorante.",
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
                      nicos: [{ code: "00", title: "Fresas (frutillas)." }]
                    }
                  ]
                },
                {
                  code: "0811.20",
                  title: "Frambuesas, zarzamoras, moras, moras-frambuesa y grosellas.",
                  classifications: [
                    {
                      code: "0811.20.01",
                      title: "Frambuesas, zarzamoras, moras, moras-frambuesa y grosellas.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "EMB", "SAD"],
                      nicos: [{ code: "00", title: "Frambuesas, zarzamoras, moras, moras-frambuesa y grosellas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "08.12",
              title: "Frutas y otros frutos, conservados provisionalmente, pero todavía impropios para consumo inmediato.",
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
                      nicos: [{ code: "00", title: "Cerezas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "08.13",
              title: "Frutas y otros frutos, secos, excepto los de las partidas 08.01 a 08.06; mezclas de frutas u otros frutos, secos, o de frutos de cáscara de este Capítulo.",
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
                      nicos: [{ code: "00", title: "Damascos (albaricoques, chabacanos)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Ciruelas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Manzanas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás frutas u otros frutos." }]
                    }
                  ]
                },
                {
                  code: "0813.50",
                  title: "Mezclas de frutas u otros frutos, secos, o de frutos de cáscara de este Capítulo.",
                  classifications: [
                    {
                      code: "0813.50.01",
                      title: "Mezclas de frutas u otros frutos, secos, o de frutos de cáscara de este Capítulo.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "EMB", "SAD"],
                      nicos: [{ code: "00", title: "Mezclas de frutas u otros frutos, secos, o de frutos de cáscara de este Capítulo." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "08.14",
              title: "Cortezas de agrios (cítricos), melones o sandías, frescas, congeladas, secas o presentadas en agua salada, sulfurosa o adicionada de otras sustancias para su conservación provisional.",
              subheadings: [
                {
                  code: "0814.00",
                  title: "Cortezas de agrios (cítricos), melones o sandías.",
                  classifications: [
                    {
                      code: "0814.00.01",
                      title: "Cortezas de agrios (cítricos), melones o sandías, frescas, congeladas, secas o presentadas en agua salada, sulfurosa o adicionada de otras sustancias para su conservación provisional.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["PS5", "EMB", "SAD"],
                      nicos: [{ code: "00", title: "Cortezas de agrios (cítricos), melones o sandías, frescas, congeladas, secas o presentadas en agua salada, sulfurosa o adicionada de otras sustancias para su conservación provisional." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "09",
          title: "Café, té, yerba mate y especias",
          notes: {
            legales: [
              {
                id: "NL-CAP09-1",
                text: "Las mezclas de los productos de las partidas 09.04 a 09.10 se clasificarán como sigue: a) las mezclas entre sí de productos de una misma partida se clasifican en dicha partida; b) las mezclas entre sí de productos de distintas partidas se clasifican en la partida 09.10. La adición de otras sustancias a los productos de las partidas 09.04 a 09.10 (o a las mezclas citadas en los apartados a) o b) anteriores) no afecta a su clasificación, siempre que las mezclas así obtenidas conserven el carácter esencial de los productos de dichas partidas. En caso contrario, estas mezclas se excluyen de este Capítulo y se clasifican en la partida 21.03 cuando constituyan condimentos o sazonadores compuestos."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "09.01",
              title: "Café, incluso tostado o descafeinado; cáscara y cascarilla de café; sucedáneos del café que contengan café en cualquier proporción.",
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Café sin tostar, descafeinado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Café tostado, sin descafeinar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Café tostado, descafeinado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "09.02",
              title: "Té, incluso aromatizado.",
              subheadings: [
                {
                  code: "0902.10",
                  title: "Té verde (sin fermentar) presentado en envases inmediatos con un contenido inferior o igual a 3 kg.",
                  classifications: [
                    {
                      code: "0902.10.01",
                      title: "Té verde (sin fermentar) presentado en envases inmediatos con un contenido inferior o igual a 3 kg.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM"],
                      nicos: [{ code: "00", title: "Té verde (sin fermentar) presentado en envases inmediatos con un contenido inferior o igual a 3 kg." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Té verde (sin fermentar) presentado de otra forma." }]
                    }
                  ]
                },
                {
                  code: "0902.30",
                  title: "Té negro (fermentado) y té parcialmente fermentado, presentados en envases inmediatos con un contenido inferior o igual a 3 kg.",
                  classifications: [
                    {
                      code: "0902.30.01",
                      title: "Té negro (fermentado) y té parcialmente fermentado, presentados en envases inmediatos con un contenido inferior o igual a 3 kg.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "NOM"],
                      nicos: [{ code: "00", title: "Té negro (fermentado) y té parcialmente fermentado, presentados en envases inmediatos con un contenido inferior o igual a 3 kg." }]
                    }
                  ]
                },
                {
                  code: "0902.40",
                  title: "Té negro (fermentado) y té parcialmente fermentado, presentados de otra forma.",
                  classifications: [
                    {
                      code: "0902.40.01",
                      title: "Té negro (fermentado) y té parcialmente fermentado, presentados de otra forma.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Té negro (fermentado) y té parcialmente fermentado, presentados de otra forma." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Yerba mate." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "09.04",
              title: "Pimienta del género Piper; frutos de los géneros Capsicum o Pimenta, secos, triturados o pulverizados.",
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Triturada o pulverizada." }]
                    }
                  ]
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
                      regimenes: ["FR_I", "CHT", "PS5", "NOM", "SAD", "PACIC", "CUP"],
                      nicos: [{ code: "01", title: "Chile \"ancho\" o \"anaheim\"." }]
                    }
                  ]
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
                      nicos: [{ code: "01", title: "Chile \"ancho\" o \"anaheim\"." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Vainilla de Papantla." }]
                    },
                    {
                      code: "0905.10.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Vainilla de Papantla." }]
                    },
                    {
                      code: "0905.20.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "SAD"],
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Flores de canelero." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Triturado o pulverizado." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Triturada o pulverizada." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Triturado o pulverizado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Triturados o pulverizados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "09.09",
              title: "Semillas de anís, badiana, hinojo, cilantro, comino o alcaravea; bayas de enebro.",
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Trituradas o pulverizadas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Trituradas o pulverizadas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Trituradas o pulverizadas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "09.10",
              title: "Jengibre, azafrán, cúrcuma, tomillo, hojas de laurel, \"curry\" y demás especias.",
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Triturado o pulverizado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Azafrán." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cúrcuma." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Mezclas previstas en la Nota 1 b) de este Capítulo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "10",
          title: "Cereales",
          notes: {
            legales: [
              {
                id: "NL-CAP10-1",
                text: "A) Los productos citados en los textos de las partidas de este Capítulo se clasifican en dichas partidas sólo si están presentes los granos, incluso en espigas o con los tallos. B) Este Capítulo no comprende los granos mondados ni trabajados de otra forma. Sin embargo, el arroz descascarillado, blanqueado, pulido, glaseado, escaldado o partido, se clasifica en la partida 10.06."
              }
            ],
            nacionales: [],
            explicativas: []
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
                },
                {
                  code: "1001.99",
                  title: "Los demás.",
                  classifications: [
                    {
                      code: "1001.99.01",
                      title: "Trigo (excepto el duro) con un contenido de gluten húmedo superior o igual al 27% pero inferior o igual al 40%, determinado por el método directo, en la fecha en que se efectúe la importación.",
                      umt: "Kg",
                      importDuty: 67,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Trigo (excepto el duro) con un contenido de gluten húmedo superior o igual al 27% pero inferior o igual al 40%, determinado por el método directo, en la fecha en que se efectúe la importación." }]
                    },
                    {
                      code: "1001.99.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 67,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "CUP"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    },
                    {
                      code: "1006.10.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "CUP"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Arroz descascarillado (arroz cargo o arroz pardo)." }]
                    }
                  ]
                },
                {
                  code: "1006.30",
                  title: "Arroz semiblanqueado o blanqueado, incluso pulido o glaseado.",
                  classifications: [
                    {
                      code: "1006.30.01",
                      title: "Arroz semiblanqueado o blanqueado, incluso pulido o glaseado.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "CUP"],
                      nicos: [{ code: "00", title: "Arroz semiblanqueado o blanqueado, incluso pulido o glaseado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Arroz partido." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
                },
                {
                  code: "1007.90",
                  title: "Los demás.",
                  classifications: [
                    {
                      code: "1007.90.01",
                      title: "Cuando la operación se realice dentro del periodo comprendido entre el 16 de diciembre y el 15 de mayo.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["SAD", "PACIC"],
                      nicos: [{ code: "00", title: "Cuando la operación se realice dentro del periodo comprendido entre el 16 de diciembre y el 15 de mayo." }]
                    },
                    {
                      code: "1007.90.02",
                      title: "Cuando la operación se realice dentro del periodo comprendido entre el 16 de mayo y el 15 de diciembre.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SAD", "PACIC"],
                      nicos: [{ code: "00", title: "Cuando la operación se realice dentro del periodo comprendido entre el 16 de mayo y el 15 de diciembre." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Alforfón." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Alpiste." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Fonio (Digitaria spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Quinua (quinoa) (Chenopodium quinoa)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Triticale." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás cereales." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "11",
          title: "Productos de la molinería; malta; almidón y fécula; inulina; gluten de trigo",
          notes: {
            legales: [
              {
                id: "NL-CAP11-1",
                text: "Este Capítulo no comprende: a) la malta tostada para sucedáneo del café (partida 09.01 o 21.01, según los casos); b) la harina, grañones, sémola, almidón o fécula, preparados, de la partida 19.01; c) los copos de maíz y demás productos de la partida 19.04; d) las hortalizas preparadas o conservadas de las partidas 20.01, 20.04 o 20.05; e) los productos farmacéuticos (Capítulo 30); f) el almidón y fécula que tengan el carácter de preparaciones de perfumería, de tocador o de cosmética (Capítulo 33)."
              }
            ],
            nacionales: [
              {
                id: "NN-CAP11-1",
                text: "Para los efectos de este Capítulo, por productos de la molinería, debe entenderse los productos molidos, en forma de harinas, sémolas o semolinas, grañones, granos aplastados, perlados, en copos, trabajados (excepto en el caso del arroz descascarillado, blanqueado, pulido, glaseado, escaldado o partido), de los cereales, de las legumbres u hortalizas de la vaina, secas, desvainadas."
              }
            ],
            explicativas: []
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
                      title: "Harina de trigo (excepto trigo duro) con un contenido de cenizas inferior o igual a 1%, calculadas con relación a la materia seca, en la fecha en que se efectúe la importación.",
                      umt: "Kg",
                      importDuty: 67,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Harina de trigo (excepto trigo duro) con un contenido de cenizas inferior o igual a 1%, calculadas con relación a la materia seca, en la fecha en que se efectúe la importación." }]
                    },
                    {
                      code: "1101.00.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 67,
                      exportDuty: 0,
                      regimenes: ["CUP"],
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "11.02",
              title: "Harina de cereales, excepto de trigo o de morcajo (tranquillón).",
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
                      nicos: [{ code: "00", title: "Harina de maíz." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "11.03",
              title: "Grañones, sémola y \"pellets\", de cereales.",
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
                      nicos: [{ code: "00", title: "De trigo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De maíz." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De los demás cereales." }]
                    }
                  ]
                },
                {
                  code: "1103.20",
                  title: "\"Pellets\".",
                  classifications: [
                    {
                      code: "1103.20.01",
                      title: "\"Pellets\".",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "\"Pellets\"." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "11.04",
              title: "Granos de cereales trabajados de otro modo (por ejemplo: mondados, aplastados, en copos, perlados, troceados o quebrantados), excepto el arroz de la partida 10.06; germen de cereales entero, aplastado, en copos o molido.",
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
                      nicos: [{ code: "00", title: "Granos aplastados o en copos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás granos trabajados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás granos trabajados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De maíz." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De los demás cereales." }]
                    }
                  ]
                },
                {
                  code: "1104.30",
                  title: "Germen de cereales entero, aplastado, en copos o molido.",
                  classifications: [
                    {
                      code: "1104.30.01",
                      title: "Germen de cereales entero, aplastado, en copos o molido.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Germen de cereales entero, aplastado, en copos o molido." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "11.05",
              title: "Harina, sémola, polvo, copos, gránulos y \"pellets\", de papa (patata).",
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
                      nicos: [{ code: "00", title: "Harina, sémola y polvo." }]
                    }
                  ]
                },
                {
                  code: "1105.20",
                  title: "Copos, gránulos y \"pellets\".",
                  classifications: [
                    {
                      code: "1105.20.01",
                      title: "Copos, gránulos y \"pellets\".",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Copos, gránulos y \"pellets\"." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "11.06",
              title: "Harina, sémola y polvo de las hortalizas de la partida 07.13, de sagú o de las raíces o tubérculos de la partida 07.14 o de los productos del Capítulo 08.",
              subheadings: [
                {
                  code: "1106.10",
                  title: "De las hortalizas de vaina secas de la partida 07.13.",
                  classifications: [
                    {
                      code: "1106.10.01",
                      title: "De las hortalizas de vaina secas de la partida 07.13.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "De las hortalizas de vaina secas de la partida 07.13." }]
                    }
                  ]
                },
                {
                  code: "1106.20",
                  title: "De sagú o de las raíces o tubérculos de la partida 07.14.",
                  classifications: [
                    {
                      code: "1106.20.01",
                      title: "De sagú o de las raíces o tubérculos de la partida 07.14.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "De sagú o de las raíces o tubérculos de la partida 07.14." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De los productos del Capítulo 08." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Sin tostar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Tostada." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Almidón de trigo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Almidón de maíz." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Fécula de papa (patata)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Fécula de yuca (mandioca)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás almidones y féculas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Inulina." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Gluten de trigo, incluso seco." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "12",
          title: "Semillas y frutos oleaginosos; semillas y frutos diversos; plantas industriales o medicinales; paja y forraje",
          notes: {
            legales: [
              {
                id: "NL-CAP12-1",
                text: "La nuez y la almendra de palma (palmiste), las semillas de algodón, ricino, sésamo (ajonjolí), mostaza, cártamo, amapola (adormidera) y \"karité\", entre otras, se consideran semillas oleaginosas de la partida 12.07. Por el contrario, se excluyen de dicha partida los productos de las partidas 08.01 o 08.02, así como las aceitunas (Capítulos 07 o 20)."
              },
              {
                id: "NL-CAP12-2",
                text: "La partida 12.08 comprende no solo la harina sin desgrasar, sino también la desgrasada parcialmente o la que ha sido desgrasada y después total o parcialmente reengrasada con su propio aceite. Por el contrario, se excluyen los residuos de las partidas 23.04 a 23.06."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "12.01",
              title: "Habas (porotos, frijoles, fréjoles) de soja (soya), incluso quebrantadas.",
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
                },
                {
                  code: "1201.90",
                  title: "Los demás.",
                  classifications: [
                    {
                      code: "1201.90.01",
                      title: "Cuando la operación se realice dentro del periodo comprendido entre el 1o. de enero y el 30 de septiembre.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Cuando la operación se realice dentro del periodo comprendido entre el 1o. de enero y el 30 de septiembre." }]
                    },
                    {
                      code: "1201.90.02",
                      title: "Cuando la operación se realice dentro del periodo comprendido entre el 1o. de octubre y el 31 de diciembre.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SAD", "CUP"],
                      nicos: [{ code: "00", title: "Cuando la operación se realice dentro del periodo comprendido entre el 1o. de octubre y el 31 de diciembre." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "12.02",
              title: "Cacahuates (cacahuetes, maníes) sin tostar ni cocer de otro modo, incluso sin cáscara o quebrantados.",
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
                      nicos: [{ code: "00", title: "Para siembra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con cáscara." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin cáscara, incluso quebrantados." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Copra." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Semillas de lino, incluso quebrantadas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "12.05",
              title: "Semillas de nabo (nabina) o de colza, incluso quebrantadas.",
              subheadings: [
                {
                  code: "1205.10",
                  title: "Semillas de nabo (nabina) o de colza con bajo contenido de ácido erúcico.",
                  classifications: [
                    {
                      code: "1205.10.01",
                      title: "Semillas de nabo (nabina) o de colza con bajo contenido de ácido erúcico.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Semillas de nabo (nabina) o de colza con bajo contenido de ácido erúcico." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
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
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "12.07",
              title: "Las demás semillas y frutos oleaginosos, incluso quebrantados.",
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
                      nicos: [{ code: "00", title: "Nueces y almendras de palma (palmiste)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Semillas de sésamo (ajonjolí)." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "12.08",
              title: "Harina de semillas o de frutos oleaginosos, excepto la harina de mostaza.",
              subheadings: [
                {
                  code: "1208.10",
                  title: "De habas (porotos, frijoles, fréjoles) de soja (soya).",
                  classifications: [
                    {
                      code: "1208.10.01",
                      title: "De habas (porotos, frijoles, fréjoles) de soja (soya).",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "De habas (porotos, frijoles, fréjoles) de soja (soya)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Semillas de remolacha azucarera." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De alfalfa." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De trébol (Trifolium spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De festucas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De pasto azul de Kentucky (Poa pratensis L.)." }]
                    }
                  ]
                },
                {
                  code: "1209.25",
                  title: "De ballico (Lolium multiflorum Lam., Lolium perenne L.).",
                  classifications: [
                    {
                      code: "1209.25.01",
                      title: "De ballico (Lolium multiflorum Lam., Lolium perenne L.).",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "De ballico (Lolium multiflorum Lam., Lolium perenne L.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                },
                {
                  code: "1209.30",
                  title: "Semillas de plantas herbáceas utilizadas principalmente por sus flores.",
                  classifications: [
                    {
                      code: "1209.30.01",
                      title: "Semillas de plantas herbáceas utilizadas principalmente por sus flores.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD"],
                      nicos: [{ code: "00", title: "Semillas de plantas herbáceas utilizadas principalmente por sus flores." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Semillas de hortalizas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "12.10",
              title: "Conos de lúpulo frescos o secos, incluso triturados, molidos o en \"pellets\"; lupulino.",
              subheadings: [
                {
                  code: "1210.10",
                  title: "Conos de lúpulo sin triturar ni moler ni en \"pellets\".",
                  classifications: [
                    {
                      code: "1210.10.01",
                      title: "Conos de lúpulo sin triturar ni moler ni en \"pellets\".",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Conos de lúpulo sin triturar ni moler ni en \"pellets\"." }]
                    }
                  ]
                },
                {
                  code: "1210.20",
                  title: "Conos de lúpulo triturados, molidos o en \"pellets\"; lupulino.",
                  classifications: [
                    {
                      code: "1210.20.01",
                      title: "Conos de lúpulo triturados, molidos o en \"pellets\"; lupulino.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Conos de lúpulo triturados, molidos o en \"pellets\"; lupulino." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "12.11",
              title: "Plantas, partes de plantas, semillas y frutos de las especies utilizadas principalmente en perfumería, medicina o para usos insecticidas, parasiticidas o similares, frescos, refrigerados, congelados o secos, incluso cortados, quebrantados o pulverizados.",
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
                      nicos: [{ code: "00", title: "Raíces de ginseng." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hojas de coca." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Paja de adormidera." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Efedra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Corteza de cerezo africano (Prunus africana)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De marihuana (Género Cannabis)." }]
                    },
                    {
                      code: "1211.90.91",
                      title: "Los demás, preparados o conservados conforme a lo indicado en la partida 20.08, refrigerados o congelados.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["CHT", "NOM", "EMB"],
                      nicos: [{ code: "00", title: "Los demás, preparados o conservados conforme a lo indicado en la partida 20.08, refrigerados o congelados." }]
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
                        { code: "02", title: "Tubérculos raíces, tallos o partes de plantas, aunque se presenten pulverizados, cuando contengan saponinas, cuyo agrupamiento aglucónico sea un esteroide." },
                        { code: "03", title: "Flor de jamaica." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "12.12",
              title: "Algarrobas, algas, remolacha azucarera y caña de azúcar, frescas, refrigeradas, congeladas o secas, incluso pulverizadas; huesos (carozos) y almendras de frutos y demás productos vegetales (incluidas las raíces de achicoria sin tostar de la variedad Cichorium intybus sativum) empleados principalmente en la alimentación humana, no expresados ni comprendidos en otra parte.",
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
                      nicos: [{ code: "00", title: "Congeladas." }]
                    },
                    {
                      code: "1212.21.02",
                      title: "Algas secas de las especies Porphyra Yezoensis o Porphyra Tenera (alga nori).",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Algas secas de las especies Porphyra Yezoensis o Porphyra Tenera (alga nori)." }]
                    },
                    {
                      code: "1212.21.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAL"],
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Congeladas." }]
                    },
                    {
                      code: "1212.29.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Remolacha azucarera." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Algarrobas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Caña de azúcar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Raíces de achicoria." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "12.13",
              title: "Paja y cascabillo de cereales, en bruto, incluso picados, molidos, prensados o en \"pellets\".",
              subheadings: [
                {
                  code: "1213.00",
                  title: "Paja y cascabillo de cereales, en bruto, incluso picados, molidos, prensados o en \"pellets\".",
                  classifications: [
                    {
                      code: "1213.00.01",
                      title: "Paja y cascabillo de cereales, en bruto, incluso picados, molidos, prensados o en \"pellets\".",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "CUP"],
                      nicos: [{ code: "00", title: "Paja y cascabillo de cereales, en bruto, incluso picados, molidos, prensados o en \"pellets\"." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "12.14",
              title: "Nabos forrajeros, remolachas forrajeras, raíces forrajeras, heno, alfalfa, trébol, esparceta, coles forrajeras, altramuces, vezas y productos forrajeros similares, incluso en \"pellets\".",
              subheadings: [
                {
                  code: "1214.10",
                  title: "Harina y \"pellets\" de alfalfa.",
                  classifications: [
                    {
                      code: "1214.10.01",
                      title: "Harina y \"pellets\" de alfalfa.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "CUP"],
                      nicos: [{ code: "00", title: "Harina y \"pellets\" de alfalfa." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Alfalfa." }]
                    },
                    {
                      code: "1214.90.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["EMB", "SAD", "CUP"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "13",
          title: "Gomas, resinas y demás jugos y extractos vegetales",
          notes: {
            legales: [
              {
                id: "NL-CAP13-1",
                text: "La partida 13.02 comprende, entre otros, los extractos de regaliz, piretro (pelitre), lúpulo o áloe, y el opio."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "13.01",
              title: "Goma laca; gomas, resinas, gomorresinas y oleorresinas (por ejemplo, bálsamos), naturales.",
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
                      nicos: [{ code: "00", title: "Goma arábiga." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "13.02",
              title: "Jugos y extractos vegetales; materias pécticas, pectinatos y pectatos; agar-agar y demás mucílagos y espesativos derivados de los vegetales, incluso modificados.",
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De regaliz." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De lúpulo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Agar-agar." }]
                    }
                  ]
                },
                {
                  code: "1302.32",
                  title: "Mucílagos y espesativos de la algarroba o de sus semillas o de las semillas de guar, incluso modificados.",
                  classifications: [
                    {
                      code: "1302.32.01",
                      title: "Harina o mucílago de algarroba.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Harina o mucílago de algarroba." }]
                    },
                    {
                      code: "1302.32.02",
                      title: "Goma guar.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Goma guar." }]
                    },
                    {
                      code: "1302.32.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SAL"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "14",
          title: "Materias trenzables y demás productos de origen vegetal, no expresados ni comprendidos en otra parte",
          notes: {
            legales: [
              {
                id: "NL-CAP14-1",
                text: "Se excluyen de este Capítulo y se clasifican en la Sección XI, las materias y fibras vegetales de las especies principalmente utilizadas para la fabricación de textiles, cualquiera que sea su preparación, así como las materias vegetales trabajadas especialmente para su utilización exclusiva como materia textil."
              },
              {
                id: "NL-CAP14-2",
                text: "La partida 14.01 comprende, entre otras, el bambú (incluso hendido, aserrado longitudinalmente o cortado en longitudes determinadas, con los extremos redondeados, blanqueado, ignifugado, pulido o teñido), los trozos de mimbre, de caña y similares, la médula de ratán (roten) y el ratán (roten) hilado. No se clasifican en esta partida las tablillas, láminas o cintas de madera (partida 44.04)."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "14.01",
              title: "Materias vegetales de las especies utilizadas principalmente en cestería o espartería (por ejemplo: bambú, ratán (roten), caña, junco, mimbre, rafia, paja de cereales limpiada, blanqueada o teñida, corteza de tilo).",
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
                      nicos: [{ code: "00", title: "Bambú." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Ratán (roten)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "14.04",
              title: "Productos vegetales no expresados ni comprendidos en otra parte.",
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
                      nicos: [{ code: "00", title: "Línteres de algodón." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      code: "III",
      title: "Grasas y aceites, animales, vegetales o de origen microbiano, y productos de su desdoblamiento; grasas alimenticias elaboradas; ceras de origen animal o vegetal",
      notes: {
        legales: [
          {
            id: "NL-SEC03-1",
            text: "Este Capítulo no comprende: a) el tocino y grasa de cerdo o de ave, de la partida 02.09; b) la manteca, grasa y aceite de cacao (partida 18.04); c) las preparaciones alimenticias con un contenido de productos de la partida 04.05 superior al 15% en peso (generalmente Capítulo 21); d) los chicharrones (partida 23.01) y los residuos de las partidas 23.04 a 23.06; e) los ácidos grasos, las ceras preparadas, las grasas transformadas en productos farmacéuticos, pinturas, barnices, jabón, preparaciones de perfumería, de tocador o de cosmética, los aceites sulfonados y demás productos de la Sección VI; f) el caucho facticio derivado de los aceites (partida 40.02)."
          },
          {
            id: "NL-SEC03-2",
            text: "La partida 15.09 no incluye el aceite de aceituna extraído con disolventes (partida 15.10)."
          },
          {
            id: "NL-SEC03-3",
            text: "La partida 15.18 no comprende las grasas y aceites, ni sus fracciones, simplemente desnaturalizados, que permanecen clasificados en la partida de las correspondientes grasas y aceites, y sus fracciones, sin desnaturalizar."
          },
          {
            id: "NL-SEC03-4",
            text: "Las pastas de neutralización, las borras o heces de aceite, la brea esteárica, la brea de suarda y la pez de glicerol, se clasifican en la partida 15.22."
          }
        ],
        nacionales: [
          {
            id: "NN-SEC03-1",
            text: "Las mezclas o preparaciones alimenticias a base de grasas animales, o grasas animales y aceites vegetales, incluidos los denominados \"shortenings\", se clasifican como sigue: 1. En la partida 15.01 cuando contengan, en peso, 80% o más de manteca de cerdo fundida; 2. En la partida 15.17 cuando contengan, en peso, menos del 80% de manteca de cerdo, incluso previamente hidrogenada, emulsionada, malaxada o tratada por texturado."
          },
          {
            id: "NN-SEC03-2",
            text: "Los productos denominados comercialmente cera de Mirica y cera del Japón son grasas vegetales y se deben clasificar en el Capítulo 15."
          },
          {
            id: "NN-SEC03-3",
            text: "En la partida 15.09: a) El aceite de oliva refinado debe presentar un contenido de ácidos grasos libres (expresado como ácido oleico) inferior o igual a 0.3g por 100g; b) El aceite de oliva de esta partida se considera virgen si el coeficiente de extinción K 270 (determinado por el método CAC/RM 26-1970 de la Comisión del Codex Alimentario) es inferior a 0.25 o cuando es superior a 0.25, si después de tratamiento de la muestra con alúmina activada, es inferior o igual a 0.11."
          },
          {
            id: "NN-SEC03-4",
            text: "Se clasifica en la subpartida 1515.90 el aceite de jojoba descrito a veces como cera líquida constituido por ésteres de alcoholes grasos superiores."
          }
        ],
        explicativas: []
      },
      chapters: [
        {
          code: "15",
          title: "Grasas y aceites, animales, vegetales o de origen microbiano, y productos de su desdoblamiento; grasas alimenticias elaboradas; ceras de origen animal o vegetal",
          notes: {
            legales: [
              {
                id: "NL-CAP15-1",
                text: "Para la aplicación de la subpartida 1509.30, el aceite de oliva virgen tiene una acidez libre expresada como ácido oleico inferior o igual a 2.0g/ 100 g y puede distinguirse de las otras categorías de aceite de oliva virgen, según las características establecidas por la Norma 33-1981 del Codex Alimentarius."
              },
              {
                id: "NL-CAP15-2",
                text: "En las subpartidas 1514.11 y 1514.19, se entiende por aceite de nabo (de nabina) o de colza con bajo contenido de ácido erúcico, el aceite fijo con un contenido de ácido erúcico inferior al 2% en peso."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "15.01",
              title: "Grasa de cerdo (incluida la manteca de cerdo) y grasa de ave, excepto las de las partidas 02.09 o 15.03.",
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
                      nicos: [{ code: "00", title: "Manteca de cerdo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás grasas de cerdo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.02",
              title: "Grasa de animales de las especies bovina, ovina o caprina, excepto las de la partida 15.03.",
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
                      nicos: [{ code: "00", title: "Sebo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.03",
              title: "Estearina solar, aceite de manteca de cerdo, oleoestearina, oleomargarina y aceite de sebo, sin emulsionar, mezclar ni preparar de otro modo.",
              subheadings: [
                {
                  code: "1503.00",
                  title: "Estearina solar, aceite de manteca de cerdo, oleoestearina, oleomargarina y aceite de sebo, sin emulsionar, mezclar ni preparar de otro modo.",
                  classifications: [
                    {
                      code: "1503.00.01",
                      title: "Estearina solar, aceite de manteca de cerdo, oleoestearina, oleomargarina y aceite de sebo, sin emulsionar, mezclar ni preparar de otro modo.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Estearina solar, aceite de manteca de cerdo, oleoestearina, oleomargarina y aceite de sebo, sin emulsionar, mezclar ni preparar de otro modo." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.04",
              title: "Grasas y aceites, y sus fracciones, de pescado o de mamíferos marinos, incluso refinados, pero sin modificar químicamente.",
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
                      nicos: [{ code: "00", title: "De bacalao." }]
                    },
                    {
                      code: "1504.10.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["NOM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                },
                {
                  code: "1504.20",
                  title: "Grasas y aceites de pescado y sus fracciones, excepto los aceites de hígado.",
                  classifications: [
                    {
                      code: "1504.20.02",
                      title: "Grasas y aceites de pescado y sus fracciones, excepto los aceites de hígado.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [
                        { code: "01", title: "De pescado, excepto de bacalao y de tiburón." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "1504.30",
                  title: "Grasas y aceites de mamíferos marinos y sus fracciones.",
                  classifications: [
                    {
                      code: "1504.30.01",
                      title: "Grasas y aceites de mamíferos marinos y sus fracciones.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SEM"],
                      nicos: [{ code: "00", title: "Grasas y aceites de mamíferos marinos y sus fracciones." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.05",
              title: "Grasa de lana y sustancias grasas derivadas, incluida la lanolina.",
              subheadings: [
                {
                  code: "1505.00",
                  title: "Grasa de lana y sustancias grasas derivadas, incluida la lanolina.",
                  classifications: [
                    {
                      code: "1505.00.04",
                      title: "Grasa de lana y sustancias grasas derivadas, incluida la lanolina.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Grasa de lana y sustancias grasas derivadas, incluida la lanolina." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.06",
              title: "Las demás grasas y aceites animales, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
              subheadings: [
                {
                  code: "1506.00",
                  title: "Las demás grasas y aceites animales, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
                  classifications: [
                    {
                      code: "1506.00.01",
                      title: "De pie de buey, refinado.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD", "SEM"],
                      nicos: [{ code: "00", title: "De pie de buey, refinado." }]
                    },
                    {
                      code: "1506.00.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.07",
              title: "Aceite de soja (soya) y sus fracciones, incluso refinado, pero sin modificar químicamente.",
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
                      nicos: [{ code: "00", title: "Aceite en bruto, incluso desgomado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.08",
              title: "Aceite de cacahuate (cacahuete, maní) y sus fracciones, incluso refinado, pero sin modificar químicamente.",
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
                      nicos: [{ code: "00", title: "Aceite en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.09",
              title: "Aceite de oliva y sus fracciones, incluso refinado, pero sin modificar químicamente.",
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
                      nicos: [{ code: "00", title: "Aceite de oliva virgen extra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceite de oliva virgen." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás aceites de oliva vírgenes." }]
                    }
                  ]
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
                        { code: "01", title: "Refinado cuyo peso, incluido el envase inmediato, sea menor de 50 kg." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.10",
              title: "Los demás aceites y sus fracciones obtenidos exclusivamente de aceituna, incluso refinados, pero sin modificar químicamente, y mezclas de estos aceites o fracciones con los aceites o fracciones de la partida 15.09.",
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
                      nicos: [{ code: "00", title: "Aceite de orujo de oliva en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.11",
              title: "Aceite de palma y sus fracciones, incluso refinado, pero sin modificar químicamente.",
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
                      nicos: [{ code: "00", title: "Aceite en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.12",
              title: "Aceites de girasol, cártamo o algodón, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
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
                      nicos: [{ code: "00", title: "Aceites en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceite en bruto, incluso sin gosipol." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.13",
              title: "Aceites de coco (de copra), de almendra de palma (palmiste) o de babasú, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
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
                      nicos: [{ code: "00", title: "Aceite en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceites en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.14",
              title: "Aceites de nabo (de nabina), colza o mostaza, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
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
                      nicos: [{ code: "00", title: "Aceites en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceites en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.15",
              title: "Las demás grasas y aceites, vegetales (incluido el aceite de jojoba) o de origen microbiano, fijos, y sus fracciones, incluso refinados, pero sin modificar químicamente.",
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
                      nicos: [{ code: "00", title: "Aceite en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceite en bruto." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceite de ricino y sus fracciones." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceite de sésamo (ajonjolí) y sus fracciones." }]
                    }
                  ]
                },
                {
                  code: "1515.60",
                  title: "Grasas y aceites, de origen microbiano, y sus fracciones.",
                  classifications: [
                    {
                      code: "1515.60.01",
                      title: "Grasas y aceites, de origen microbiano, y sus fracciones.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Grasas y aceites, de origen microbiano, y sus fracciones." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.16",
              title: "Grasas y aceites, animales, vegetales o de origen microbiano, y sus fracciones, parcial o totalmente hidrogenados, interesterificados, reesterificados o elaidinizados, incluso refinados, pero sin preparar de otro modo.",
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
                      nicos: [{ code: "00", title: "Grasas y aceites, animales, y sus fracciones." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Grasas y aceites, vegetales, y sus fracciones." }]
                    }
                  ]
                },
                {
                  code: "1516.30",
                  title: "Grasas y aceites, de origen microbiano, y sus fracciones.",
                  classifications: [
                    {
                      code: "1516.30.01",
                      title: "Grasas y aceites, de origen microbiano, y sus fracciones.",
                      umt: "Kg",
                      importDuty: 5,
                      exportDuty: 0,
                      regimenes: ["FR_I", "CUP"],
                      nicos: [{ code: "00", title: "Grasas y aceites, de origen microbiano, y sus fracciones." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.17",
              title: "Margarina; mezclas o preparaciones alimenticias de grasas o aceites, animales, vegetales o de origen microbiano, o de fracciones de diferentes grasas o aceites, de este Capítulo, excepto las grasas y aceites, alimenticios o sus fracciones, de la partida 15.16.",
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
                      nicos: [{ code: "00", title: "Margarina, excepto la margarina líquida." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.18",
              title: "Grasas y aceites, animales, vegetales o de origen microbiano, y sus fracciones, cocidos, oxidados, deshidratados, sulfurados, soplados, polimerizados por calor en vacío o atmósfera inerte (estandolizados), o modificados químicamente de otra forma, excepto los de la partida 15.16; mezclas o preparaciones no alimenticias de grasas o de aceites, animales, vegetales o de origen microbiano, o de fracciones de diferentes grasas o aceites, de este Capítulo, no expresadas ni comprendidas en otra parte.",
              subheadings: [
                {
                  code: "1518.00",
                  title: "Grasas y aceites, animales, vegetales o de origen microbiano, y sus fracciones, cocidos, oxidados, deshidratados, sulfurados, soplados, polimerizados por calor en vacío o atmósfera inerte (estandolizados), o modificados químicamente de otra forma, excepto los de la partida 15.16; mezclas o preparaciones no alimenticias de grasas o de aceites, animales, vegetales o de origen microbiano, o de fracciones de diferentes grasas o aceites, de este Capítulo, no expresadas ni comprendidas en otra parte.",
                  classifications: [
                    {
                      code: "1518.00.01",
                      title: "Mezcla de aceites de girasol y oliva, bromados, calidad farmacéutica.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Mezcla de aceites de girasol y oliva, bromados, calidad farmacéutica." }]
                    },
                    {
                      code: "1518.00.02",
                      title: "Aceites animales o vegetales epoxidados.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["CC"],
                      nicos: [{ code: "00", title: "Aceites animales o vegetales epoxidados." }]
                    },
                    {
                      code: "1518.00.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Glicerol en bruto; aguas y lejías glicerinosas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.21",
              title: "Ceras vegetales (excepto los triglicéridos), cera de abejas o de otros insectos y esperma de ballena o de otros cetáceos (espermaceti), incluso refinadas o coloreadas.",
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
                      nicos: [{ code: "00", title: "Carnauba." }]
                    },
                    {
                      code: "1521.10.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SEM"],
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Esperma de ballena y de otros cetáceos." }]
                    },
                    {
                      code: "1521.90.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [
                        { code: "01", title: "Cera de abejas, refinada o blanqueada, sin colorear." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "15.22",
              title: "Degrás; residuos procedentes del tratamiento de grasas o ceras, animales o vegetales.",
              subheadings: [
                {
                  code: "1522.00",
                  title: "Degrás; residuos procedentes del tratamiento de grasas o ceras, animales o vegetales.",
                  classifications: [
                    {
                      code: "1522.00.01",
                      title: "Degrás; residuos procedentes del tratamiento de grasas o ceras, animales o vegetales.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Degrás; residuos procedentes del tratamiento de grasas o ceras, animales o vegetales." }]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      code: "IV",
      title: "Productos de las industrias alimentarias; bebidas, líquidos alcohólicos y vinagre; tabaco y sucedáneos del tabaco elaborados; productos, incluso con nicotina, destinados para la inhalación sin combustión; otros productos que contengan nicotina destinados para la absorción de nicotina en el cuerpo humano",
      notes: {
        legales: [{
          id: "NL-SEC04-1",
          text: "En esta Sección, el término pellets designa los productos en forma de cilindro, bolita, etc., aglomerados por simple presión o con adición de un aglutinante en proporción inferior o igual al 3% en peso."
        }],
        nacionales: [],
        explicativas: []
      },
      chapters: [
        {
          code: "16",
          title: "Preparaciones de carne, pescado, crustáceos, moluscos o demás invertebrados acuáticos, o de insectos",
          notes: {
            legales: [
              {
                id: "NL-CAP16-1",
                text: "Este Capítulo no comprende la carne, despojos, pescado, crustáceos, moluscos y demás invertebrados acuáticos, así como los insectos, preparados o conservados por los procedimientos citados en los Capítulos 02 y 03, en la Nota 6 del Capítulo 04 o en la partida 05.04."
              },
              {
                id: "NL-CAP16-2",
                text: "Las preparaciones alimenticias se clasifican en este Capítulo siempre que contengan una proporción superior al 20% en peso de embutidos, carne, despojos, sangre, insectos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, o de una combinación de estos productos."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "16.01",
              title: "Embutidos y productos similares de carne, despojos, sangre o de insectos; preparaciones alimenticias a base de estos productos.",
              subheadings: [
                {
                  code: "1601.00",
                  title: "Embutidos y productos similares de carne, despojos, sangre o de insectos; preparaciones alimenticias a base de estos productos.",
                  classifications: [
                    {
                      code: "1601.00.03",
                      title: "De aves de la especie Gallus domesticus o pavo (gallipavo).",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["NOM", "SAD", "PACIC", "CUP"],
                      nicos: [{ code: "00", title: "De aves de la especie Gallus domesticus o pavo (gallipavo)." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "16.02",
              title: "Las demás preparaciones y conservas de carne, despojos, sangre o de insectos.",
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
                      nicos: [{ code: "00", title: "Preparaciones homogeneizadas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De hígado de cualquier animal." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De pavo (gallipavo)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De aves de la especie Gallus domesticus." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Jamones y trozos de jamón." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Paletas y trozos de paleta." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás, incluidas las mezclas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De la especie bovina." }]
                    }
                  ]
                },
                {
                  code: "1602.90",
                  title: "Las demás, incluidas las preparaciones de sangre de cualquier animal.",
                  classifications: [
                    {
                      code: "1602.90.91",
                      title: "Las demás, incluidas las preparaciones de sangre de cualquier animal.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "SAD"],
                      nicos: [
                        { code: "01", title: "Extractos y jugos de carne." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "16.03",
              title: "Extractos y jugos de carne, pescado o de crustáceos, moluscos o demás invertebrados acuáticos.",
              subheadings: [
                {
                  code: "1603.00",
                  title: "Extractos y jugos de carne, pescado o de crustáceos, moluscos o demás invertebrados acuáticos.",
                  classifications: [
                    {
                      code: "1603.00.01",
                      title: "Extractos de carne.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "SAD", "SAL"],
                      nicos: [{ code: "00", title: "Extractos de carne." }]
                    },
                    {
                      code: "1603.00.02",
                      title: "Extractos y jugos de pescado, crustáceos, moluscos o demás invertebrados acuáticos.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "EMB", "SAL"],
                      nicos: [{ code: "00", title: "Extractos y jugos de pescado, crustáceos, moluscos o demás invertebrados acuáticos." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "16.04",
              title: "Preparaciones y conservas de pescado; caviar y sus sucedáneos preparados con huevas de pescado.",
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
                      nicos: [{ code: "00", title: "Salmones." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Arenques." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sardinas, sardinelas y espadines." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Atunes, listados y bonitos (Sarda spp.)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Caballas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Anchoas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Anguilas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aletas de tiburón." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás preparaciones y conservas de pescado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Caviar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sucedáneos del caviar." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "16.05",
              title: "Crustáceos, moluscos y demás invertebrados acuáticos, preparados o conservados.",
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Presentados en envases no herméticos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Bogavantes." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás crustáceos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Ostras." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Vieiras, volandeiras y demás moluscos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Mejillones." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sepias (jibias), globitos, calamares y potas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Pulpos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Almejas, berberechos y arcas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Abulones u orejas de mar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Caracoles, excepto los de mar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Pepinos de mar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Erizos de mar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Medusas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "17",
          title: "Azúcares y artículos de confitería",
          notes: {
            legales: [
              {
                id: "NL-CAP17-1",
                text: "Este Capítulo no comprende: a) los artículos de confitería que contengan cacao (partida 18.06); b) los azúcares químicamente puros (excepto la sacarosa, lactosa, maltosa, glucosa y fructosa (levulosa)) y demás productos de la partida 29.40; c) los medicamentos y demás productos del Capítulo 30."
              }
            ],
            nacionales: [
              {
                id: "NN-CAP17-1",
                text: "Para los efectos de este Capítulo, los términos, con aromatizante(s), aromatizado(s) y aromatizada(s) significan: con adición de sabor."
              }
            ],
            explicativas: []
          },
          headings: [
            {
              code: "17.01",
              title: "Azúcar de caña o de remolacha y sacarosa químicamente pura, en estado sólido.",
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
                      nicos: [{ code: "00", title: "De remolacha." }]
                    }
                  ]
                },
                {
                  code: "1701.13",
                  title: "Azúcar de caña mencionado en la Nota 2 de subpartida de este Capítulo.",
                  classifications: [
                    {
                      code: "1701.13.01",
                      title: "Azúcar de caña mencionado en la Nota 2 de subpartida de este Capítulo.",
                      umt: "Kg",
                      importDuty: "AE",
                      exportDuty: 0,
                      regimenes: ["PS4", "IM_PR", "IM_SEN"],
                      nicos: [{ code: "00", title: "Azúcar de caña mencionado en la Nota 2 de subpartida de este Capítulo." }]
                    }
                  ]
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
                        { code: "01", title: "Azúcar cuyo contenido en peso de sacarosa, en estado seco, tenga una polarización igual o superior a 99.2 pero inferior a 99.5 grados." },
                        { code: "02", title: "Azúcar cuyo contenido en peso de sacarosa, en estado seco, tenga una polarización inferior a 99.2 grados." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Con adición de aromatizante o colorante." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "17.02",
              title: "Los demás azúcares, incluidas la lactosa, maltosa, glucosa y fructosa (levulosa) químicamente puras, en estado sólido; jarabe de azúcar sin adición de aromatizante ni colorante; sucedáneos de la miel, incluso mezclados con miel natural; azúcar y melaza caramelizados.",
              subheadings: [
                {
                  code: "1702.11",
                  title: "Con un contenido de lactosa superior o igual al 99% en peso, expresado en lactosa anhidra, calculado sobre producto seco.",
                  classifications: [
                    {
                      code: "1702.11.01",
                      title: "Con un contenido de lactosa superior o igual al 99% en peso, expresado en lactosa anhidra, calculado sobre producto seco.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["NOM"],
                      nicos: [{ code: "00", title: "Con un contenido de lactosa superior o igual al 99% en peso, expresado en lactosa anhidra, calculado sobre producto seco." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Azúcar y jarabe de arce (maple)." }]
                    }
                  ]
                },
                {
                  code: "1702.30",
                  title: "Glucosa y jarabe de glucosa, sin fructosa o con un contenido de fructosa, calculado sobre producto seco, inferior al 20% en peso.",
                  classifications: [
                    {
                      code: "1702.30.01",
                      title: "Glucosa y jarabe de glucosa, sin fructosa o con un contenido de fructosa, calculado sobre producto seco, inferior al 20% en peso.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["PS4", "CUP"],
                      nicos: [{ code: "00", title: "Glucosa y jarabe de glucosa, sin fructosa o con un contenido de fructosa, calculado sobre producto seco, inferior al 20% en peso." }]
                    }
                  ]
                },
                {
                  code: "1702.40",
                  title: "Glucosa y jarabe de glucosa, con un contenido de fructosa, calculado sobre producto seco, superior o igual al 20% pero inferior al 50% en peso, excepto el azúcar invertido (o azúcar inverso).",
                  classifications: [
                    {
                      code: "1702.40.01",
                      title: "Glucosa y jarabe de glucosa, con un contenido de fructosa, calculado sobre producto seco, superior o igual al 20% pero inferior al 50% en peso, excepto el azúcar invertido (o azúcar inverso).",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["PS4", "CUP"],
                      nicos: [{ code: "00", title: "Glucosa y jarabe de glucosa, con un contenido de fructosa, calculado sobre producto seco, superior o igual al 20% pero inferior al 50% en peso, excepto el azúcar invertido (o azúcar inverso)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Fructosa químicamente pura." }]
                    }
                  ]
                },
                {
                  code: "1702.60",
                  title: "Las demás fructosas y jarabe de fructosa, con un contenido de fructosa, calculado sobre producto seco, superior al 50% en peso.",
                  classifications: [
                    {
                      code: "1702.60.01",
                      title: "Las demás fructosas y jarabe de fructosa, con un contenido de fructosa, calculado sobre producto seco, superior al 50% en peso.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["PS4", "CUP"],
                      nicos: [{ code: "00", title: "Las demás fructosas y jarabe de fructosa, con un contenido de fructosa, calculado sobre producto seco, superior al 50% en peso." }]
                    }
                  ]
                },
                {
                  code: "1702.90",
                  title: "Los demás, incluido el azúcar invertido (o azúcar inverso) y demás azúcares y jarabes de azúcar, con un contenido de fructosa, calculado sobre producto seco, de 50% en peso.",
                  classifications: [
                    {
                      code: "1702.90.99",
                      title: "Los demás, incluido el azúcar invertido (o azúcar inverso) y demás azúcares y jarabes de azúcar, con un contenido de fructosa, calculado sobre producto seco, de 50% en peso.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["PS4", "CUP"],
                      nicos: [{ code: "00", title: "Los demás, incluido el azúcar invertido (o azúcar inverso) y demás azúcares y jarabes de azúcar, con un contenido de fructosa, calculado sobre producto seco, de 50% en peso." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "17.03",
              title: "Melaza procedente de la extracción o del refinado del azúcar.",
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
                      nicos: [{ code: "00", title: "Melaza de caña." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "17.04",
              title: "Artículos de confitería sin cacao (incluido el chocolate blanco).",
              subheadings: [
                {
                  code: "1704.10",
                  title: "Chicles y demás gomas de mascar, incluso recubiertos de azúcar.",
                  classifications: [
                    {
                      code: "1704.10.01",
                      title: "Chicles y demás gomas de mascar, incluso recubiertos de azúcar.",
                      umt: "Kg",
                      importDuty: "AMX",
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "NOM"],
                      nicos: [{ code: "00", title: "Chicles y demás gomas de mascar, incluso recubiertos de azúcar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "18",
          title: "Cacao y sus preparaciones",
          notes: {
            legales: [
              {
                id: "NL-CAP18-1",
                text: "Este Capítulo no comprende las preparaciones de las partidas 04.03, 19.01, 19.04, 19.05, 21.05, 22.02, 22.08, 30.03 o 30.04."
              },
              {
                id: "NL-CAP18-2",
                text: "La partida 18.06 comprende los artículos de confitería que contengan cacao y, salvo lo dispuesto en la Nota 1 de este Capítulo, las demás preparaciones alimenticias que contengan cacao."
              }
            ],
            nacionales: [],
            explicativas: []
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
                      nicos: [{ code: "00", title: "Cacao Grijalva." }]
                    },
                    {
                      code: "1801.00.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Cáscara, películas y demás residuos de cacao." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Sin desgrasar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Desgrasada total o parcialmente." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Manteca, grasa y aceite de cacao." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "18.05",
              title: "Cacao en polvo sin adición de azúcar ni otro edulcorante.",
              subheadings: [
                {
                  code: "1805.00",
                  title: "Cacao en polvo sin adición de azúcar ni otro edulcorante.",
                  classifications: [
                    {
                      code: "1805.00.01",
                      title: "Cacao en polvo sin adición de azúcar ni otro edulcorante.",
                      umt: "Kg",
                      importDuty: 5,
                      exportDuty: 0,
                      regimenes: ["PS5"],
                      nicos: [{ code: "00", title: "Cacao en polvo sin adición de azúcar ni otro edulcorante." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "18.06",
              title: "Chocolate y demás preparaciones alimenticias que contengan cacao.",
              subheadings: [
                {
                  code: "1806.10",
                  title: "Cacao en polvo con adición de azúcar u otro edulcorante.",
                  classifications: [
                    {
                      code: "1806.10.01",
                      title: "Con un contenido de azúcar superior o igual al 90%, en peso.",
                      umt: "Kg",
                      importDuty: "AE",
                      exportDuty: 0,
                      regimenes: ["IM_SEN", "PERM", "NOM"],
                      nicos: [{ code: "00", title: "Con un contenido de azúcar superior o igual al 90%, en peso." }]
                    },
                    {
                      code: "1806.10.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: "AMX",
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "PS4", "NOM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                },
                {
                  code: "1806.20",
                  title: "Las demás preparaciones, en bloques, tabletas o barras con peso superior a 2 kg o en forma líquida, pastosa o en polvo, gránulos o formas similares, en recipientes o en envases inmediatos, con un contenido superior a 2 kg.",
                  classifications: [
                    {
                      code: "1806.20.99",
                      title: "Las demás preparaciones.",
                      umt: "Kg",
                      importDuty: "AMX",
                      exportDuty: 0,
                      regimenes: ["FR_II", "CHT", "PS4", "NOM"],
                      nicos: [{ code: "00", title: "Las demás preparaciones." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Rellenos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin rellenar." }]
                    }
                  ]
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
                        { code: "01", title: "Preparaciones alimenticias de productos de las partidas 04.01 a 04.04, que contengan polvo de cacao en una proporción, calculada sobre una base totalmente desgrasada, superior al 5% en peso." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "19",
          title: "Preparaciones a base de cereales, harina, almidón, fécula o leche; productos de pastelería",
          notes: {
            legales: [
              {
                id: "NL-CAP19-1",
                text: "Este Capítulo no comprende: a) las preparaciones alimenticias que contengan una proporción superior al 20% en peso de embutidos, carne, despojos, sangre, insectos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, o de una combinación de estos productos (Capítulo 16), excepto los productos rellenos de la partida 19.02; b) los productos a base de harina, almidón o fécula (galletas, etc.) especialmente preparados para la alimentación de los animales (partida 23.09); c) los medicamentos y demás productos del Capítulo 30."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "19.01",
              title: "Extracto de malta; preparaciones alimenticias de harina, grañones, sémola, almidón, fécula o extracto de malta.",
              subheadings: [
                {
                  code: "1901.10",
                  title: "Preparaciones para la alimentación de lactantes o niños de corta edad, acondicionadas para la venta al por menor.",
                  classifications: [
                    {
                      code: "1901.10.02",
                      title: "Preparaciones para la alimentación de lactantes o niños de corta edad, acondicionadas para la venta al por menor.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["NOM", "SAL"],
                      nicos: [{ code: "00", title: "Preparaciones para la alimentación de lactantes o niños de corta edad, acondicionadas para la venta al por menor." }]
                    }
                  ]
                },
                {
                  code: "1901.20",
                  title: "Mezclas y pastas para la preparación de productos de panadería, pastelería o galletería, de la partida 19.05.",
                  classifications: [
                    {
                      code: "1901.20.01",
                      title: "Mezclas y pastas para la preparación de productos de panadería, pastelería o galletería, de la partida 19.05.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["NOM"],
                      nicos: [{ code: "00", title: "Mezclas y pastas para la preparación de productos de panadería, pastelería o galletería, de la partida 19.05." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "19.02",
              title: "Pastas alimenticias, incluso cocidas o rellenas (de carne u otras sustancias) o preparadas de otra forma, tales como espaguetis, fideos, macarrones, tallarines, lasañas, ñoquis, ravioles, canelones; cuscús, incluso preparado.",
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
                      nicos: [{ code: "00", title: "Que contengan huevo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                },
                {
                  code: "1902.20",
                  title: "Pastas alimenticias rellenas, incluso cocidas o preparadas de otra forma.",
                  classifications: [
                    {
                      code: "1902.20.01",
                      title: "Pastas alimenticias rellenas, incluso cocidas o preparadas de otra forma.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["NOM"],
                      nicos: [{ code: "00", title: "Pastas alimenticias rellenas, incluso cocidas o preparadas de otra forma." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás pastas alimenticias." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cuscús." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "19.03",
              title: "Tapioca y sus sucedáneos preparados con fécula, en copos, grumos, granos perlados, cerniduras o formas similares.",
              subheadings: [
                {
                  code: "1903.00",
                  title: "Tapioca y sus sucedáneos preparados con fécula, en copos, grumos, granos perlados, cerniduras o formas similares.",
                  classifications: [
                    {
                      code: "1903.00.01",
                      title: "Tapioca y sus sucedáneos preparados con fécula, en copos, grumos, granos perlados, cerniduras o formas similares.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["NOM", "SAD", "CUP"],
                      nicos: [{ code: "00", title: "Tapioca y sus sucedáneos preparados con fécula, en copos, grumos, granos perlados, cerniduras o formas similares." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "19.04",
              title: "Productos a base de cereales obtenidos por inflado o tostado; cereales (excepto el maíz) en grano o en forma de copos u otro grano trabajado (excepto la harina, grañones y sémola), precocidos o preparados de otro modo, no expresados ni comprendidos en otra parte.",
              subheadings: [
                {
                  code: "1904.10",
                  title: "Productos a base de cereales obtenidos por inflado o tostado.",
                  classifications: [
                    {
                      code: "1904.10.01",
                      title: "Productos a base de cereales obtenidos por inflado o tostado.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "NOM"],
                      nicos: [{ code: "00", title: "Productos a base de cereales obtenidos por inflado o tostado." }]
                    }
                  ]
                },
                {
                  code: "1904.20",
                  title: "Preparaciones alimenticias obtenidas con copos de cereales sin tostar o con mezclas de copos de cereales sin tostar y copos de cereales tostados o cereales inflados.",
                  classifications: [
                    {
                      code: "1904.20.01",
                      title: "Preparaciones alimenticias obtenidas con copos de cereales sin tostar o con mezclas de copos de cereales sin tostar y copos de cereales tostados o cereales inflados.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "NOM"],
                      nicos: [{ code: "00", title: "Preparaciones alimenticias obtenidas con copos de cereales sin tostar o con mezclas de copos de cereales sin tostar y copos de cereales tostados o cereales inflados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Bulgur de trigo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "19.05",
              title: "Productos de panadería, pastelería o galletería, incluso con adición de cacao; hostias, sellos vacíos de los tipos utilizados para medicamentos, obleas para sellar, pastas secas de harina, almidón o fécula, en hojas, y productos similares.",
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
                      nicos: [{ code: "00", title: "Pan crujiente llamado Knäckebrot." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Pan de especias." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Galletas dulces (con adición de edulcorante)." }]
                    }
                  ]
                },
                {
                  code: "1905.32",
                  title: "Barquillos y obleas, incluso rellenos (gaufrettes, wafers) y waffles (gaufres).",
                  classifications: [
                    {
                      code: "1905.32.01",
                      title: "Barquillos y obleas, incluso rellenos (gaufrettes, wafers) y waffles (gaufres).",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "NOM"],
                      nicos: [{ code: "00", title: "Barquillos y obleas, incluso rellenos (gaufrettes, wafers) y waffles (gaufres)." }]
                    }
                  ]
                },
                {
                  code: "1905.40",
                  title: "Pan tostado, productos tostados similares y crutones.",
                  classifications: [
                    {
                      code: "1905.40.01",
                      title: "Pan tostado, productos tostados similares y crutones.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "NOM"],
                      nicos: [{ code: "00", title: "Pan tostado, productos tostados similares y crutones." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "20",
          title: "Preparaciones de hortalizas, frutas u otros frutos o demás partes de plantas",
          notes: {
            legales: [
              {
                id: "NL-CAP20-1",
                text: "Este Capítulo no comprende: a) las hortalizas y frutas u otros frutos preparados o conservados por los procedimientos citados en los Capítulos 07, 08 u 11; b) las preparaciones alimenticias que contengan una proporción superior al 20% en peso de embutidos, carne, despojos, sangre, insectos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, o de una combinación de estos productos (Capítulo 16); c) las preparaciones de harina, sémola, almidón, fécula o extracto de malta (partida 19.01) y las preparaciones alimenticias de productos de las partidas 04.01 a 04.04 que contengan cacao en una proporción superior al 5% en peso (partida 19.01)."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "20.01",
              title: "Hortalizas, frutas u otros frutos y demás partes comestibles de plantas, preparados o conservados en vinagre o en ácido acético.",
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
                      nicos: [{ code: "00", title: "Pepinos y pepinillos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "20.02",
              title: "Tomates preparados o conservados (excepto en vinagre o en ácido acético).",
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
                      nicos: [{ code: "00", title: "Tomates enteros o en trozos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "20.03",
              title: "Hongos y trufas, preparados o conservados (excepto en vinagre o en ácido acético).",
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
                      nicos: [{ code: "00", title: "Hongos del género Agaricus." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "20.04",
              title: "Las demás hortalizas preparadas o conservadas (excepto en vinagre o en ácido acético), congeladas, excepto los productos de la partida 20.06.",
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
                      nicos: [{ code: "00", title: "Papas (patatas)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás hortalizas y las mezclas de hortalizas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "20.05",
              title: "Las demás hortalizas preparadas o conservadas (excepto en vinagre o en ácido acético), sin congelar, excepto los productos de la partida 20.06.",
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
                      nicos: [{ code: "00", title: "Hortalizas homogeneizadas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Papas (patatas)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Chícharos (arvejas, guisantes) (Pisum sativum)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Desvainados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Espárragos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceitunas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Maíz dulce (Zea mays var. saccharata)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Brotes de bambú." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "20.06",
              title: "Hortalizas, frutas u otros frutos o sus cortezas y demás partes de plantas, confitados con azúcar (almibarados, glaseados o escarchados).",
              subheadings: [
                {
                  code: "2006.00",
                  title: "Hortalizas, frutas u otros frutos o sus cortezas y demás partes de plantas, confitados con azúcar (almibarados, glaseados o escarchados).",
                  classifications: [
                    {
                      code: "2006.00.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["CHT", "NOM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "20.07",
              title: "Confituras, jaleas y mermeladas, purés y pastas de frutas u otros frutos, obtenidos por cocción, incluso con adición de azúcar u otro edulcorante.",
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
                      nicos: [{ code: "00", title: "Preparaciones homogeneizadas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De agrios (cítricos)." }]
                    }
                  ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "20.08",
              title: "Frutas u otros frutos y demás partes comestibles de plantas, preparados o conservados de otro modo, incluso con adición de azúcar u otro edulcorante o alcohol, no expresados ni comprendidos en otra parte.",
              subheadings: [
                {
                  code: "2008.11",
                  title: "Manteca (mantequilla) de maní (cacahuate, cacahuete).",
                  classifications: [
                    {
                      code: "2008.11.01",
                      title: "Manteca (mantequilla) de maní (cacahuate, cacahuete).",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM"],
                      nicos: [{ code: "00", title: "Manteca (mantequilla) de maní (cacahuate, cacahuete)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás, incluidas las mezclas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "20.09",
              title: "Jugos de frutas u otros frutos (incluido el mosto de uva y el agua de coco) o de hortalizas, sin fermentar y sin adición de alcohol, incluso con adición de azúcar u otro edulcorante.",
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
                      nicos: [{ code: "00", title: "Congelado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Sin congelar, de valor Brix inferior o igual a 20." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De valor Brix inferior o igual a 20." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De valor Brix inferior o igual a 20." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De valor Brix inferior o igual a 20." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Jugo de tomate." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De valor Brix inferior o igual a 30." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De valor Brix inferior o igual a 20." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                },
                {
                  code: "2009.81",
                  title: "Jugo de arándanos agrios, trepadores o palustres (Vaccinium macrocarpon, Vaccinium oxycoccos); jugo de arándanos rojos o encarnados (Vaccinium vitis-idaea).",
                  classifications: [
                    {
                      code: "2009.81.01",
                      title: "Jugo de arándanos agrios, trepadores o palustres (Vaccinium macrocarpon, Vaccinium oxycoccos); jugo de arándanos rojos o encarnados (Vaccinium vitis-idaea).",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["CHT", "NOM"],
                      nicos: [{ code: "00", title: "Jugo de arándanos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Mezclas de jugos." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "21",
          title: "Preparaciones alimenticias diversas",
          notes: {
            legales: [
              {
                id: "NL-CAP21-1",
                text: "Este Capítulo no comprende: las mezclas de hortalizas de la partida 07.12; los sucedáneos del café tostados que contengan café en cualquier proporción (partida 09.01); el té aromatizado (partida 09.02); las especias y demás productos de las partidas 09.04 a 09.10; las preparaciones alimenticias que contengan una proporción superior al 20% en peso de embutidos, carne, despojos, sangre, insectos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, o de una combinación de estos productos (Capítulo 16), excepto los productos descritos en las partidas 21.03 o 21.04."
              }
            ],
            nacionales: [
              {
                id: "NN-CAP21-1",
                text: "Para los efectos de este Capítulo, los términos, con aromatizante(s), aromatizado(s) y aromatizada(s) significan: con adición de sabor."
              }
            ],
            explicativas: []
          },
          headings: [
            {
              code: "21.01",
              title: "Extractos, esencias y concentrados de café, té o yerba mate y preparaciones a base de estos productos o a base de café, té o yerba mate; achicoria tostada y demás sucedáneos del café tostados y sus extractos, esencias y concentrados.",
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
                      nicos: [{ code: "00", title: "Extractos, esencias y concentrados." }]
                    }
                  ]
                },
                {
                  code: "2101.12",
                  title: "Preparaciones a base de extractos, esencias o concentrados o a base de café.",
                  classifications: [
                    {
                      code: "2101.12.01",
                      title: "Preparaciones a base de extractos, esencias o concentrados o a base de café.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM"],
                      nicos: [{ code: "00", title: "Preparaciones a base de extractos, esencias o concentrados o a base de café." }]
                    }
                  ]
                },
                {
                  code: "2101.20",
                  title: "Extractos, esencias y concentrados de té o de yerba mate y preparaciones a base de estos extractos, esencias o concentrados o a base de té o de yerba mate.",
                  classifications: [
                    {
                      code: "2101.20.01",
                      title: "Extractos, esencias y concentrados de té o de yerba mate y preparaciones a base de estos extractos, esencias o concentrados o a base de té o de yerba mate.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Extractos, esencias y concentrados de té o de yerba mate y preparaciones a base de estos extractos, esencias o concentrados o a base de té o de yerba mate." }]
                    }
                  ]
                },
                {
                  code: "2101.30",
                  title: "Achicoria tostada y demás sucedáneos del café tostados y sus extractos, esencias y concentrados.",
                  classifications: [
                    {
                      code: "2101.30.01",
                      title: "Achicoria tostada y demás sucedáneos del café tostados y sus extractos, esencias y concentrados.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Achicoria tostada y demás sucedáneos del café tostados y sus extractos, esencias y concentrados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "21.02",
              title: "Levaduras (vivas o muertas); los demás microorganismos monocelulares muertos (excepto las vacunas de la partida 30.02); polvos preparados para esponjar masas.",
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                },
                {
                  code: "2102.20",
                  title: "Levaduras muertas; los demás microorganismos monocelulares muertos.",
                  classifications: [
                    {
                      code: "2102.20.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Polvos preparados para esponjar masas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "21.03",
              title: "Preparaciones para salsas y salsas preparadas; condimentos y sazonadores, compuestos; harina de mostaza y mostaza preparada.",
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
                      nicos: [{ code: "00", title: "Salsa de soja (soya)." }]
                    }
                  ]
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
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
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
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "21.04",
              title: "Preparaciones para sopas, potajes o caldos; sopas, potajes o caldos, preparados; preparaciones alimenticias compuestas homogeneizadas.",
              subheadings: [
                {
                  code: "2104.10",
                  title: "Preparaciones para sopas, potajes o caldos; sopas, potajes o caldos, preparados.",
                  classifications: [
                    {
                      code: "2104.10.01",
                      title: "Preparaciones para sopas, potajes o caldos; sopas, potajes o caldos, preparados.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "NOM", "SAL", "PACIC"],
                      nicos: [{ code: "00", title: "Preparaciones para sopas, potajes o caldos; sopas, potajes o caldos, preparados." }]
                    }
                  ]
                },
                {
                  code: "2104.20",
                  title: "Preparaciones alimenticias compuestas homogeneizadas.",
                  classifications: [
                    {
                      code: "2104.20.01",
                      title: "Preparaciones alimenticias compuestas homogeneizadas.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["NOM", "SAL"],
                      nicos: [{ code: "00", title: "Preparaciones alimenticias compuestas homogeneizadas." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Helados, incluso con cacao." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "21.06",
              title: "Preparaciones alimenticias no expresadas ni comprendidas en otra parte.",
              subheadings: [
                {
                  code: "2106.10",
                  title: "Concentrados de proteínas y sustancias proteicas texturadas.",
                  classifications: [
                    {
                      code: "2106.10.01",
                      title: "Concentrados de proteínas y sustancias proteicas texturadas.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["NOM"],
                      nicos: [{ code: "00", title: "Concentrados de proteínas y sustancias proteicas texturadas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "22",
          title: "Bebidas, líquidos alcohólicos y vinagre",
          notes: {
            legales: [
              {
                id: "NL-CAP22-1",
                text: "Este Capítulo no comprende: a) los productos de este Capítulo (excepto los de la partida 22.09) preparados para uso culinario de tal forma que resulten impropios para el consumo como bebidas (generalmente partida 21.03); b) el agua de mar (partida 25.01); c) el agua destilada, de conductibilidad o del mismo grado de pureza (partida 28.53); d) las disoluciones acuosas con un contenido de ácido acético superior al 10% en peso (partida 29.15); e) los medicamentos de las partidas 30.03 o 30.04; f) los productos de perfumería o de tocador (Capítulo 33)."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "22.01",
              title: "Agua, incluidas el agua mineral natural o artificial y la gaseada, sin adición de azúcar u otro edulcorante ni aromatizada; hielo y nieve.",
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
                      nicos: [{ code: "00", title: "Agua mineral y agua gaseada." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "22.02",
              title: "Agua, incluidas el agua mineral y la gaseada, con adición de azúcar u otro edulcorante o aromatizada, y demás bebidas no alcohólicas, excepto los jugos de frutas u otros frutos o de hortalizas de la partida 20.09.",
              subheadings: [
                {
                  code: "2202.10",
                  title: "Agua, incluidas el agua mineral y la gaseada, con adición de azúcar u otro edulcorante o aromatizada.",
                  classifications: [
                    {
                      code: "2202.10.01",
                      title: "Agua, incluidas el agua mineral y la gaseada, con adición de azúcar u otro edulcorante o aromatizada.",
                      umt: "L",
                      importDuty: "AMX",
                      exportDuty: 0,
                      regimenes: ["PS4", "NOM"],
                      nicos: [{ code: "00", title: "Agua, incluidas el agua mineral y la gaseada, con adición de azúcar u otro edulcorante o aromatizada." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cerveza sin alcohol." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Cerveza de malta." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "22.04",
              title: "Vino de uvas frescas, incluso encabezado; mosto de uva, excepto el de la partida 20.09.",
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
                      nicos: [{ code: "00", title: "Vino espumoso." }]
                    }
                  ]
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
                        { code: "01", title: "Vinos, cuya graduación alcohólica sea mayor de 14 grados centesimales Gay-Lussac pero menor o igual a 20 grados centesimales Gay-Lussac, a la temperatura de 15°C." },
                        { code: "02", title: "Vinos tinto, rosado, clarete o blanco, cuya graduación alcohólica sea hasta 14 grados centesimales Gay-Lussac, a la temperatura de 15°C." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "2204.22",
                  title: "En recipientes con capacidad superior a 2 l pero inferior o igual a 10 l.",
                  classifications: [
                    {
                      code: "2204.22.01",
                      title: "En recipientes con capacidad superior a 2 l pero inferior o igual a 10 l.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "EMB"],
                      nicos: [{ code: "00", title: "En recipientes con capacidad superior a 2 l pero inferior o igual a 10 l." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás mostos de uva." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "22.05",
              title: "Vermut y demás vinos de uvas frescas preparados con plantas o sustancias aromáticas.",
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
                      nicos: [{ code: "00", title: "En recipientes con capacidad inferior o igual a 2 l." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "22.06",
              title: "Las demás bebidas fermentadas (por ejemplo: sidra, perada, aguamiel, sake); mezclas de bebidas fermentadas y mezclas de bebidas fermentadas y bebidas no alcohólicas, no expresadas ni comprendidas en otra parte.",
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
                      nicos: [{ code: "00", title: "Las demás bebidas fermentadas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "22.07",
              title: "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico superior o igual al 80% vol; alcohol etílico y aguardiente desnaturalizados, de cualquier graduación.",
              subheadings: [
                {
                  code: "2207.10",
                  title: "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico superior o igual al 80% vol.",
                  classifications: [
                    {
                      code: "2207.10.01",
                      title: "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico superior o igual al 80% vol.",
                      umt: "L",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["PS4", "IM_PR"],
                      nicos: [{ code: "00", title: "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico superior o igual al 80% vol." }]
                    }
                  ]
                },
                {
                  code: "2207.20",
                  title: "Alcohol etílico y aguardiente desnaturalizados, de cualquier graduación.",
                  classifications: [
                    {
                      code: "2207.20.01",
                      title: "Alcohol etílico y aguardiente desnaturalizados, de cualquier graduación.",
                      umt: "L",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: [],
                      nicos: [{ code: "00", title: "Alcohol etílico y aguardiente desnaturalizados, de cualquier graduación." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "22.08",
              title: "Alcohol etílico sin desnaturalizar con grado alcohólico volumétrico inferior al 80% vol; aguardientes, licores y demás bebidas espirituosas.",
              subheadings: [
                {
                  code: "2208.20",
                  title: "Aguardiente de vino o de orujo de uvas.",
                  classifications: [
                    {
                      code: "2208.20.03",
                      title: "Destilados puros de uva, cuya graduación alcohólica sea superior o igual a 80 grados centesimales Gay-Lussac, a la temperatura de 15°C, a granel.",
                      umt: "L",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Destilados puros de uva, cuya graduación alcohólica sea superior o igual a 80 grados centesimales Gay-Lussac, a la temperatura de 15°C, a granel." }]
                    },
                    {
                      code: "2208.20.99",
                      title: "Los demás.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "EMB"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                        { code: "01", title: "Whisky canadiense (Canadian whiskey)." },
                        { code: "02", title: "Whisky cuya graduación alcohólica sea mayor de 53 grados centesimales Gay-Lussac a la temperatura de 15°C, a granel." },
                        { code: "03", title: "Whisky o Whiskey cuya graduación alcohólica sea igual o superior a 40 grados centesimales Gay-Lussac, destilado a menos de 94.8% vol." },
                        { code: "04", title: "Whisky Tennessee o whisky Bourbon." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "2208.40",
                  title: "Ron y demás aguardientes procedentes de la destilación, previa fermentación, de productos de la caña de azúcar.",
                  classifications: [
                    {
                      code: "2208.40.02",
                      title: "Ron y demás aguardientes procedentes de la destilación, previa fermentación, de productos de la caña de azúcar.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "EMB"],
                      nicos: [
                        { code: "01", title: "Ron." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Gin y ginebra." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Vodka." }]
                    }
                  ]
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
                        { code: "01", title: "De más de 14 grados sin exceder de 23 grados centesimales Gay-Lussac a la temperatura de 15°C, en vasijería de barro, loza o vidrio." },
                        { code: "02", title: "Licores que contengan aguardiente, o destilados, de agave." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Alcohol etílico." }]
                    },
                    {
                      code: "2208.90.02",
                      title: "Bacanora.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Bacanora." }]
                    },
                    {
                      code: "2208.90.03",
                      title: "Tequila.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "EMB"],
                      nicos: [
                        { code: "01", title: "Tequila contenido en envases con capacidad inferior o igual a 5 litros." },
                        { code: "91", title: "Los demás tequilas." }
                      ]
                    },
                    {
                      code: "2208.90.04",
                      title: "Sotol.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Sotol." }]
                    },
                    {
                      code: "2208.90.05",
                      title: "Mezcal.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["NOM", "EMB"],
                      nicos: [{ code: "00", title: "Mezcal." }]
                    },
                    {
                      code: "2208.90.06",
                      title: "Charanda.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Charanda." }]
                    },
                    {
                      code: "2208.90.07",
                      title: "Raicilla.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["EMB"],
                      nicos: [{ code: "00", title: "Raicilla." }]
                    },
                    {
                      code: "2208.90.99",
                      title: "Los demás.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["IM_PR", "NOM", "EMB"],
                      nicos: [
                        { code: "91", title: "Las demás bebidas alcohólicas que contengan aguardiente, o destilados, de agave." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "22.09",
              title: "Vinagre y sucedáneos del vinagre obtenidos a partir del ácido acético.",
              subheadings: [
                {
                  code: "2209.00",
                  title: "Vinagre y sucedáneos del vinagre obtenidos a partir del ácido acético.",
                  classifications: [
                    {
                      code: "2209.00.01",
                      title: "Vinagre y sucedáneos del vinagre obtenidos a partir del ácido acético.",
                      umt: "L",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["FR_I", "CHT", "NOM"],
                      nicos: [{ code: "00", title: "Vinagre y sucedáneos del vinagre obtenidos a partir del ácido acético." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "23",
          title: "Residuos y desperdicios de las industrias alimentarias; alimentos preparados para animales",
          notes: {
            legales: [
              {
                id: "NL-CAP23-1",
                text: "Se incluyen en la partida 23.09 los productos de los tipos utilizados para la alimentación de los animales, no expresados ni comprendidos en otra parte, obtenidos por tratamiento de materias vegetales o animales y que, por este hecho, hayan perdido las características esenciales de la materia originaria, excepto los desperdicios vegetales, residuos y subproductos vegetales procedentes de estos tratamientos."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "23.01",
              title: "Harina, polvo y pellets, de carne, despojos, pescado o de crustáceos, moluscos o demás invertebrados acuáticos, impropios para la alimentación humana; chicharrones.",
              subheadings: [
                {
                  code: "2301.10",
                  title: "Harina, polvo y pellets, de carne o despojos; chicharrones.",
                  classifications: [
                    {
                      code: "2301.10.02",
                      title: "Harina, polvo y pellets, de carne o despojos; chicharrones.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SAD", "PACIC"],
                      nicos: [
                        { code: "01", title: "Harina." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "2301.20",
                  title: "Harina, polvo y pellets, de pescado o de crustáceos, moluscos o demás invertebrados acuáticos.",
                  classifications: [
                    {
                      code: "2301.20.01",
                      title: "Harina, polvo y pellets, de pescado o de crustáceos, moluscos o demás invertebrados acuáticos.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Harina, polvo y pellets, de pescado o de crustáceos, moluscos o demás invertebrados acuáticos." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "23.02",
              title: "Salvados, moyuelos y demás residuos del cernido, de la molienda o de otros tratamientos de los cereales o de las leguminosas, incluso en pellets.",
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
                      nicos: [{ code: "00", title: "De maíz." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De trigo." }]
                    }
                  ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De leguminosas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "23.03",
              title: "Residuos de la industria del almidón y residuos similares, pulpa de remolacha, bagazo de caña de azúcar y demás desperdicios de la industria azucarera, heces y desperdicios de cervecería o de destilería, incluso en pellets.",
              subheadings: [
                {
                  code: "2303.10",
                  title: "Residuos de la industria del almidón y residuos similares.",
                  classifications: [
                    {
                      code: "2303.10.01",
                      title: "Residuos de la industria del almidón y residuos similares.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["PACIC"],
                      nicos: [{ code: "00", title: "Residuos de la industria del almidón y residuos similares." }]
                    }
                  ]
                },
                {
                  code: "2303.20",
                  title: "Pulpa de remolacha, bagazo de caña de azúcar y demás desperdicios de la industria azucarera.",
                  classifications: [
                    {
                      code: "2303.20.01",
                      title: "Pulpa de remolacha, bagazo de caña de azúcar y demás desperdicios de la industria azucarera.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Pulpa de remolacha, bagazo de caña de azúcar y demás desperdicios de la industria azucarera." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Heces y desperdicios de cervecería o de destilería." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "23.04",
              title: "Tortas y demás residuos sólidos de la extracción del aceite de soja (soya), incluso molidos o en pellets.",
              subheadings: [
                {
                  code: "2304.00",
                  title: "Tortas y demás residuos sólidos de la extracción del aceite de soja (soya), incluso molidos o en pellets.",
                  classifications: [
                    {
                      code: "2304.00.01",
                      title: "Tortas y demás residuos sólidos de la extracción del aceite de soja (soya), incluso molidos o en pellets.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Tortas y demás residuos sólidos de la extracción del aceite de soja (soya), incluso molidos o en pellets." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "23.05",
              title: "Tortas y demás residuos sólidos de la extracción del aceite de cacahuate (cacahuete, maní), incluso molidos o en pellets.",
              subheadings: [
                {
                  code: "2305.00",
                  title: "Tortas y demás residuos sólidos de la extracción del aceite de cacahuate (cacahuete, maní), incluso molidos o en pellets.",
                  classifications: [
                    {
                      code: "2305.00.01",
                      title: "Tortas y demás residuos sólidos de la extracción del aceite de cacahuate (cacahuete, maní), incluso molidos o en pellets.",
                      umt: "Kg",
                      importDuty: 15,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Tortas y demás residuos sólidos de la extracción del aceite de cacahuate (cacahuete, maní), incluso molidos o en pellets." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "23.06",
              title: "Tortas y demás residuos sólidos de la extracción de grasas o aceites vegetales o de origen microbiano, incluso molidos o en pellets, excepto los de las partidas 23.04 o 23.05.",
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Lías o heces de vino; tártaro bruto." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "23.08",
              title: "Materias vegetales y desperdicios vegetales, residuos y subproductos vegetales, incluso en pellets, de los tipos utilizados para la alimentación de los animales, no expresados ni comprendidos en otra parte.",
              subheadings: [
                {
                  code: "2308.00",
                  title: "Materias vegetales y desperdicios vegetales, residuos y subproductos vegetales, incluso en pellets, de los tipos utilizados para la alimentación de los animales, no expresados ni comprendidos en otra parte.",
                  classifications: [
                    {
                      code: "2308.00.02",
                      title: "Materias vegetales y desperdicios vegetales, residuos y subproductos vegetales, incluso en pellets, de los tipos utilizados para la alimentación de los animales, no expresados ni comprendidos en otra parte.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [
                        { code: "01", title: "Hojas de maíz." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "23.09",
              title: "Preparaciones de los tipos utilizados para la alimentación de los animales.",
              subheadings: [
                {
                  code: "2309.10",
                  title: "Alimentos para perros o gatos, acondicionados para la venta al por menor.",
                  classifications: [
                    {
                      code: "2309.10.01",
                      title: "Alimentos para perros o gatos, acondicionados para la venta al por menor.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["PS4", "SAD", "PACIC"],
                      nicos: [{ code: "00", title: "Alimentos para perros o gatos, acondicionados para la venta al por menor." }]
                    }
                  ]
                },
                {
                  code: "2309.90",
                  title: "Las demás.",
                  classifications: [
                    {
                      code: "2309.90.04",
                      title: "Mezclas, preparaciones o productos de origen orgánico para la alimentación de peces de ornato.",
                      umt: "Kg",
                      importDuty: 20,
                      exportDuty: 0,
                      regimenes: ["SAD"],
                      nicos: [{ code: "00", title: "Mezclas, preparaciones o productos de origen orgánico para la alimentación de peces de ornato." }]
                    },
                    {
                      code: "2309.90.99",
                      title: "Las demás.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "SAD"],
                      nicos: [
                        { code: "01", title: "Con un contenido de sólidos lácteos superior al 10%, pero inferior o igual al 50%, en peso." },
                        { code: "02", title: "Alimentos preparados con un contenido de sólidos lácteos superior al 50%, en peso." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "24",
          title: "Tabaco y sucedáneos del tabaco elaborados; productos, incluso con nicotina, destinados para la inhalación sin combustión; otros productos que contengan nicotina destinados para la absorción de nicotina en el cuerpo humano",
          notes: {
            legales: [
              {
                id: "NL-CAP24-1",
                text: "Este Capítulo no comprende los cigarrillos medicinales (Capítulo 30)."
              },
              {
                id: "NL-CAP24-2",
                text: "Cualquier producto susceptible de clasificarse en la partida 24.04 y en otra partida de este Capítulo, se clasifica en la partida 24.04."
              },
              {
                id: "NL-CAP24-3",
                text: "En la partida 24.04, se entiende por inhalación sin combustión, la inhalación a través de calentamiento u otros medios, sin combustión."
              }
            ],
            nacionales: [
              {
                id: "NN-CAP24-1",
                text: "En la partida 24.04 se clasifican los productos que contengan tabaco, tabaco reconstituido, nicotina o sucedáneos del tabaco o de nicotina, destinados para la inhalación sin combustión; otros productos que contengan nicotina destinados para la absorción de nicotina en el cuerpo humano."
              }
            ],
            explicativas: []
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Desperdicios de tabaco." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "24.02",
              title: "Cigarros (puros) (incluso despuntados), cigarritos (puritos) y cigarrillos, de tabaco o de sucedáneos del tabaco.",
              subheadings: [
                {
                  code: "2402.10",
                  title: "Cigarros (puros) (incluso despuntados) y cigarritos (puritos), que contengan tabaco.",
                  classifications: [
                    {
                      code: "2402.10.01",
                      title: "Cigarros (puros) (incluso despuntados) y cigarritos (puritos), que contengan tabaco.",
                      umt: "Pza",
                      importDuty: 45,
                      exportDuty: 0,
                      regimenes: ["PERM", "NOM", "EMB", "SAL", "CUP"],
                      nicos: [{ code: "00", title: "Cigarros (puros) (incluso despuntados) y cigarritos (puritos), que contengan tabaco." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cigarrillos que contengan tabaco." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "24.03",
              title: "Los demás tabacos y sucedáneos del tabaco, elaborados; tabaco homogeneizado o reconstituido; extractos y jugos de tabaco.",
              subheadings: [
                {
                  code: "2403.11",
                  title: "Tabaco para pipa de agua mencionado en la Nota 1 de subpartida de este Capítulo.",
                  classifications: [
                    {
                      code: "2403.11.01",
                      title: "Tabaco para pipa de agua mencionado en la Nota 1 de subpartida de este Capítulo.",
                      umt: "Kg",
                      importDuty: 67,
                      exportDuty: 0,
                      regimenes: ["PS4", "IM_SEN", "PERM", "NOM", "EMB", "SAL"],
                      nicos: [{ code: "00", title: "Tabaco para pipa de agua mencionado en la Nota 1 de subpartida de este Capítulo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                        { code: "01", title: "Tabaco del tipo utilizado para envoltura de tabaco." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Rapé húmedo oral." }]
                    },
                    {
                      code: "2403.99.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 45,
                      exportDuty: 0,
                      regimenes: ["PERM", "NOM", "EMB"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "24.04",
              title: "Productos que contengan tabaco, tabaco reconstituido, nicotina o sucedáneos del tabaco o de nicotina, destinados para la inhalación sin combustión; otros productos que contengan nicotina destinados para la absorción de nicotina en el cuerpo humano.",
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
                      nicos: [{ code: "00", title: "Que contengan tabaco o tabaco reconstituido." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás, que contengan nicotina." }]
                    }
                  ]
                },
                {
                  code: "2404.19",
                  title: "Los demás.",
                  classifications: [
                    {
                      code: "2404.19.01",
                      title: "De los diseñados para lo comprendido en la fracción arancelaria 8543.40.01.",
                      umt: "Kg",
                      importDuty: "Prohibida",
                      exportDuty: 0,
                      regimenes: ["IM_SEN"],
                      nicos: [{ code: "00", title: "De los diseñados para lo comprendido en la fracción arancelaria 8543.40.01." }]
                    },
                    {
                      code: "2404.19.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 45,
                      exportDuty: 0,
                      regimenes: ["PERM", "NOM"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Para administrarse por vía oral." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Para administrarse por vía transdérmica." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      code: "V",
      title: "Productos minerales",
      notes: {
        legales: [],
        nacionales: [],
        explicativas: []
      },
      chapters: [
        {
          code: "25",
          title: "Sal; azufre; tierras y piedras; yesos, cales y cementos",
          notes: {
            legales: [
              {
                id: "NL-CAP25-1",
                text: "Salvo disposición en contrario y a reserva de lo previsto en la Nota 4 siguiente, solo se clasifican en las partidas de este Capítulo los productos en bruto o los productos lavados (incluso con sustancias químicas que eliminen las impurezas sin cambiar la estructura del producto), quebrantados, triturados, molidos, pulverizados, levigados, cribados, tamizados, enriquecidos por flotación, separación magnética u otros procedimientos mecánicos o físicos (excepto la cristalización), pero no los productos tostados, calcinados, los obtenidos por mezcla o los sometidos a un tratamiento que supere al indicado en cada partida. Se puede añadir a los productos de este Capítulo una sustancia antipolvo, siempre que no haga al producto más apto para usos determinados que para uso general."
              },
              {
                id: "NL-CAP25-2",
                text: "Este Capítulo no comprende: a) el azufre sublimado o precipitado ni el coloidal (partida 28.02); b) las tierras colorantes con un contenido de hierro combinado, expresado en Fe2O3, superior o igual al 70% en peso (partida 28.21); c) los medicamentos y demás productos del Capítulo 30; d) las preparaciones de perfumería, de tocador o de cosmética (Capítulo 33); e) el aglomerado de dolomita (partida 38.16); f) los adoquines, encintados (bordillos) y losas para pavimentos (partida 68.01); los cubos, dados y artículos similares para mosaicos (partida 68.02); las pizarras para tejados o revestimientos de edificios (partida 68.03); g) las piedras preciosas o semipreciosas (partidas 71.02 o 71.03); h) los cristales cultivados de cloruro de sodio o de óxido de magnesio (excepto los elementos de óptica) de peso unitario superior o igual a 2.5 g, de la partida 38.24; los elementos de óptica de cloruro de sodio o de óxido de magnesio (partida 90.01); ij) las tizas para billar (partida 95.04); k) las tizas para escribir o dibujar y los jaboncillos (tizas) de sastre (partida 96.09)."
              },
              {
                id: "NL-CAP25-3",
                text: "Cualquier producto susceptible de clasificarse en la partida 25.17 y en otra partida de este Capítulo, se clasifica en la partida 25.17."
              },
              {
                id: "NL-CAP25-4",
                text: "La partida 25.30 comprende, entre otras: la vermiculita, la perlita y las cloritas, sin dilatar; las tierras colorantes, incluso calcinadas o mezcladas entre sí; los óxidos de hierro micáceos naturales; la espuma de mar natural (incluso en trozos pulidos); el ámbar natural (succino); la espuma de mar y el ámbar reconstituidos, en plaquitas, varillas, barras o formas similares, simplemente moldeados; el azabache; el carbonato de estroncio (estroncianita), incluso calcinado, excepto el óxido de estroncio; los restos y cascos de cerámica, trozos de ladrillo y bloques de hormigón rotos."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "25.01",
              title: "Sal (incluidas la de mesa y la desnaturalizada) y cloruro de sodio puro, incluso en disolución acuosa o con adición de antiaglomerantes o de agentes que garanticen una buena fluidez; agua de mar.",
              subheadings: [
                {
                  code: "2501.00",
                  title: "Sal (incluidas la de mesa y la desnaturalizada) y cloruro de sodio puro, incluso en disolución acuosa o con adición de antiaglomerantes o de agentes que garanticen una buena fluidez; agua de mar.",
                  classifications: [
                    {
                      code: "2501.00.02",
                      title: "Sal (incluidas la de mesa y la desnaturalizada) y cloruro de sodio puro, incluso en disolución acuosa o con adición de antiaglomerantes o de agentes que garanticen una buena fluidez; agua de mar.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB", "SAL"],
                      nicos: [{ code: "00", title: "Sal (incluidas la de mesa y la desnaturalizada) y cloruro de sodio puro, incluso en disolución acuosa o con adición de antiaglomerantes o de agentes que garanticen una buena fluidez; agua de mar." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Piritas de hierro sin tostar." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.03",
              title: "Azufre de cualquier clase, excepto el sublimado, el precipitado y el coloidal.",
              subheadings: [
                {
                  code: "2503.00",
                  title: "Azufre de cualquier clase, excepto el sublimado, el precipitado y el coloidal.",
                  classifications: [
                    {
                      code: "2503.00.02",
                      title: "Azufre de cualquier clase, excepto el sublimado, el precipitado y el coloidal.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB", "SED"],
                      nicos: [{ code: "00", title: "Azufre de cualquier clase, excepto el sublimado, el precipitado y el coloidal." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "En polvo o en escamas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.05",
              title: "Arenas naturales de cualquier clase, incluso coloreadas, excepto las arenas metalíferas del Capítulo 26.",
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
                      nicos: [{ code: "00", title: "Arenas silíceas y arenas cuarzosas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.06",
              title: "Cuarzo (excepto las arenas naturales); cuarcita, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
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
                      nicos: [{ code: "00", title: "Cuarzo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cuarcita." }]
                    }
                  ]
                }
              ]
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
                      title: "Caolín y demás arcillas caolínicas, incluso calcinados.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Caolín y demás arcillas caolínicas, incluso calcinados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.08",
              title: "Las demás arcillas (excepto las arcillas dilatadas de la partida 68.06), andalucita, cianita y silimanita, incluso calcinadas; mullita; tierras de chamota o de dinas.",
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
                      nicos: [{ code: "00", title: "Bentonita." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Arcillas refractarias." }]
                    }
                  ]
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
                        { code: "01", title: "Tierras decolorantes y tierras de batán." },
                        { code: "99", title: "Las demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Andalucita, cianita y silimanita." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Mullita." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Tierras de chamota o de dinas." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Creta." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.10",
              title: "Fosfatos de calcio naturales, fosfatos aluminocálcicos naturales y cretas fosfatadas.",
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
                      nicos: [{ code: "00", title: "Sin moler." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Molidos." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.11",
              title: "Sulfato de bario natural (baritina); carbonato de bario natural (witherita), incluso calcinado, excepto el óxido de bario de la partida 28.16.",
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
                      nicos: [{ code: "00", title: "Sulfato de bario natural (baritina)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Carbonato de bario natural (witherita)." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.12",
              title: "Harinas silíceas fósiles (por ejemplo: «Kieselguhr», tripolita, diatomita) y demás tierras silíceas análogas, de densidad aparente inferior o igual a 1, incluso calcinadas.",
              subheadings: [
                {
                  code: "2512.00",
                  title: "Harinas silíceas fósiles (por ejemplo: «Kieselguhr», tripolita, diatomita) y demás tierras silíceas análogas, de densidad aparente inferior o igual a 1, incluso calcinadas.",
                  classifications: [
                    {
                      code: "2512.00.01",
                      title: "Harinas silíceas fósiles (por ejemplo: «Kieselguhr», tripolita, diatomita) y demás tierras silíceas análogas, de densidad aparente inferior o igual a 1, incluso calcinadas.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Harinas silíceas fósiles (por ejemplo: «Kieselguhr», tripolita, diatomita) y demás tierras silíceas análogas, de densidad aparente inferior o igual a 1, incluso calcinadas." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.13",
              title: "Piedra pómez; esmeril; corindón natural, granate natural y demás abrasivos naturales, incluso tratados térmicamente.",
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
                      nicos: [{ code: "00", title: "Piedra pómez." }]
                    }
                  ]
                },
                {
                  code: "2513.20",
                  title: "Esmeril, corindón natural, granate natural y demás abrasivos naturales.",
                  classifications: [
                    {
                      code: "2513.20.01",
                      title: "Esmeril, corindón natural, granate natural y demás abrasivos naturales.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Esmeril, corindón natural, granate natural y demás abrasivos naturales." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.14",
              title: "Pizarra, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
              subheadings: [
                {
                  code: "2514.00",
                  title: "Pizarra, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
                  classifications: [
                    {
                      code: "2514.00.01",
                      title: "Pizarra, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Pizarra, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.15",
              title: "Mármol, travertinos, «ecaussines» y demás piedras calizas de talla o de construcción de densidad aparente superior o igual a 2.5, y alabastro, incluso desbastados o simplemente troceados, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
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
                      nicos: [{ code: "00", title: "En bruto o desbastados." }]
                    }
                  ]
                },
                {
                  code: "2515.12",
                  title: "Simplemente troceados, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
                  classifications: [
                    {
                      code: "2515.12.01",
                      title: "Mármol aserrado en hojas, de espesor superior a 5 cm.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Mármol aserrado en hojas, de espesor superior a 5 cm." }]
                    },
                    {
                      code: "2515.12.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 10,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                },
                {
                  code: "2515.20",
                  title: "«Ecaussines» y demás piedras calizas de talla o de construcción; alabastro.",
                  classifications: [
                    {
                      code: "2515.20.01",
                      title: "«Ecaussines» y demás piedras calizas de talla o de construcción; alabastro.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "«Ecaussines» y demás piedras calizas de talla o de construcción; alabastro." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.16",
              title: "Granito, pórfido, basalto, arenisca y demás piedras de talla o de construcción, incluso desbastados o simplemente troceados, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
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
                      nicos: [{ code: "00", title: "En bruto o desbastado." }]
                    }
                  ]
                },
                {
                  code: "2516.12",
                  title: "Simplemente troceado, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
                  classifications: [
                    {
                      code: "2516.12.01",
                      title: "Simplemente troceado, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Simplemente troceado, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Arenisca." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás piedras de talla o de construcción." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.17",
              title: "Cantos, grava, piedras machacadas, de los tipos generalmente utilizados para hacer hormigón, o para firmes de carreteras, vías férreas u otros balastos, guijarros y pedernal, incluso tratados térmicamente; macadán de escorias o de desechos industriales similares, incluso con materiales comprendidos en la primera parte de la partida; macadán alquitranado; gránulos, tasquiles (fragmentos) y polvo de piedras de las partidas 25.15 o 25.16, incluso tratados térmicamente.",
              subheadings: [
                {
                  code: "2517.10",
                  title: "Cantos, grava, piedras machacadas, de los tipos generalmente utilizados para hacer hormigón, o para firmes de carreteras, vías férreas u otros balastos, guijarros y pedernal, incluso tratados térmicamente.",
                  classifications: [
                    {
                      code: "2517.10.01",
                      title: "Cantos, grava, piedras machacadas, de los tipos generalmente utilizados para hacer hormigón, o para firmes de carreteras, vías férreas u otros balastos, guijarros y pedernal, incluso tratados térmicamente.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Cantos, grava, piedras machacadas, de los tipos generalmente utilizados para hacer hormigón, o para firmes de carreteras, vías férreas u otros balastos, guijarros y pedernal, incluso tratados térmicamente." }]
                    }
                  ]
                },
                {
                  code: "2517.20",
                  title: "Macadán de escorias o de desechos industriales similares, incluso con materiales citados en la subpartida 2517.10.",
                  classifications: [
                    {
                      code: "2517.20.01",
                      title: "Macadán de escorias o de desechos industriales similares, incluso con materiales citados en la subpartida 2517.10.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Macadán de escorias o de desechos industriales similares, incluso con materiales citados en la subpartida 2517.10." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Macadán alquitranado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "De mármol." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.18",
              title: "Dolomita, incluso sinterizada o calcinada, incluida la dolomita desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares; aglomerado de dolomita.",
              subheadings: [
                {
                  code: "2518.10",
                  title: "Dolomita sin calcinar ni sinterizar, llamada «cruda».",
                  classifications: [
                    {
                      code: "2518.10.01",
                      title: "Dolomita sin calcinar ni sinterizar, llamada «cruda».",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Dolomita sin calcinar ni sinterizar, llamada «cruda»." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Dolomita calcinada o sinterizada." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aglomerado de dolomita." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.19",
              title: "Carbonato de magnesio natural (magnesita); magnesia electrofundida; magnesia calcinada a muerte (sinterizada), incluso con pequeñas cantidades de otros óxidos añadidos antes de la sinterización; otro óxido de magnesio, incluso puro.",
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
                      nicos: [{ code: "00", title: "Carbonato de magnesio natural (magnesita)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.20",
              title: "Yeso natural; anhidrita; yeso fraguable (consistente en yeso natural calcinado o en sulfato de calcio), incluso coloreado o con pequeñas cantidades de aceleradores o retardadores.",
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
                      nicos: [{ code: "00", title: "Yeso natural; anhidrita." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Yeso fraguable." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.21",
              title: "Castinas; piedras para la fabricación de cal o de cemento.",
              subheadings: [
                {
                  code: "2521.00",
                  title: "Castinas; piedras para la fabricación de cal o de cemento.",
                  classifications: [
                    {
                      code: "2521.00.01",
                      title: "Castinas; piedras para la fabricación de cal o de cemento.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Castinas; piedras para la fabricación de cal o de cemento." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.22",
              title: "Cal viva, cal apagada y cal hidráulica, excepto el óxido y el hidróxido de calcio de la partida 28.25.",
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
                      nicos: [{ code: "00", title: "Cal viva." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cal apagada." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cal hidráulica." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.23",
              title: "Cementos hidráulicos (comprendidos los cementos sin pulverizar o «clinker»), incluso coloreados.",
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
                      nicos: [{ code: "00", title: "Cementos sin pulverizar («clinker»)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cemento blanco, incluso coloreado artificialmente." }]
                    }
                  ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cementos aluminosos." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás cementos hidráulicos." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Crocidolita." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.25",
              title: "Mica, incluida la exfoliada en laminillas irregulares («splittings»); desperdicios de mica.",
              subheadings: [
                {
                  code: "2525.10",
                  title: "Mica en bruto o exfoliada en hojas o en laminillas irregulares («splittings»).",
                  classifications: [
                    {
                      code: "2525.10.01",
                      title: "Mica en bruto o exfoliada en hojas o en laminillas irregulares («splittings»).",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Mica en bruto o exfoliada en hojas o en laminillas irregulares («splittings»)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Mica en polvo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Desperdicios de mica." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.26",
              title: "Esteatita natural, incluso desbastada o simplemente troceada, por aserrado o de otro modo, en bloques o en placas cuadradas o rectangulares; talco.",
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
                      nicos: [{ code: "00", title: "Sin triturar ni pulverizar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Triturados o pulverizados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.28",
              title: "Boratos naturales y sus concentrados (incluso calcinados), excepto los boratos extraídos de las salmueras naturales; ácido bórico natural con un contenido de H3BO3 inferior o igual al 85%, calculado sobre producto seco.",
              subheadings: [
                {
                  code: "2528.00",
                  title: "Boratos naturales y sus concentrados (incluso calcinados), excepto los boratos extraídos de las salmueras naturales; ácido bórico natural con un contenido de H3BO3 inferior o igual al 85%, calculado sobre producto seco.",
                  classifications: [
                    {
                      code: "2528.00.01",
                      title: "Boratos naturales y sus concentrados (incluso calcinados), excepto los boratos extraídos de las salmueras naturales; ácido bórico natural con un contenido de H3BO3 inferior o igual al 85%, calculado sobre producto seco.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Boratos naturales y sus concentrados (incluso calcinados), excepto los boratos extraídos de las salmueras naturales; ácido bórico natural con un contenido de H3BO3 inferior o igual al 85%, calculado sobre producto seco." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.29",
              title: "Feldespato; leucita; nefelina y nefelina sienita; espato flúor.",
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
                      nicos: [{ code: "00", title: "Feldespato." }]
                    }
                  ]
                },
                {
                  code: "2529.21",
                  title: "Con un contenido de fluoruro de calcio inferior o igual al 97% en peso.",
                  classifications: [
                    {
                      code: "2529.21.01",
                      title: "Con un contenido de fluoruro de calcio inferior o igual al 97% en peso.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Con un contenido de fluoruro de calcio inferior o igual al 97% en peso." }]
                    }
                  ]
                },
                {
                  code: "2529.22",
                  title: "Con un contenido de fluoruro de calcio superior al 97% en peso.",
                  classifications: [
                    {
                      code: "2529.22.01",
                      title: "Con un contenido de fluoruro de calcio superior al 97% en peso.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Con un contenido de fluoruro de calcio superior al 97% en peso." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Leucita; nefelina y nefelina sienita." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "25.30",
              title: "Materias minerales no expresadas ni comprendidas en otra parte.",
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
                      nicos: [{ code: "00", title: "Vermiculita, perlita y cloritas, sin dilatar." }]
                    }
                  ]
                },
                {
                  code: "2530.20",
                  title: "Kieserita, epsomita (sulfatos de magnesio naturales).",
                  classifications: [
                    {
                      code: "2530.20.01",
                      title: "Kieserita, epsomita (sulfatos de magnesio naturales).",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Kieserita, epsomita (sulfatos de magnesio naturales)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "26",
          title: "Minerales metalíferos, escorias y cenizas",
          notes: {
            legales: [
              {
                id: "NL-CAP26-1",
                text: "Este Capítulo no comprende: a) las escorias y desechos industriales similares preparados en forma de macadán (partida 25.17); b) el carbonato de magnesio natural (magnesita), incluso calcinado (partida 25.19); c) los lodos de los depósitos de almacenamiento de aceites de petróleo constituidos principalmente por aceites de este tipo (partida 27.10); d) las escorias de desfosforación del Capítulo 31; e) la lana de escoria, de roca y lanas minerales similares (partida 68.06); f) los desperdicios y desechos de metal precioso o de chapado de metal precioso (plaqué); los demás desperdicios y desechos que contengan metal precioso o compuestos de metal precioso, del tipo de los utilizados principalmente para la recuperación del metal precioso (partida 71.12); g) las matas de cobre, níquel o cobalto, obtenidas por fusión de los minerales (Secciones XIV o XV)."
              },
              {
                id: "NL-CAP26-2",
                text: "En las partidas 26.01 a 26.17, se entiende por minerales, los de las especies mineralógicas efectivamente utilizadas en metalurgia para la extracción del mercurio, de los metales de la partida 28.44 o de los metales de las Secciones XIV o XV, incluso si se destinan a fines no metalúrgicos. Sin embargo, las partidas 26.01 a 26.17 no comprenden las materias minerales que hayan sido sometidas a tratamientos que no sean los normales en metalurgia."
              }
            ],
            nacionales: [],
            explicativas: []
          },
          headings: [
            {
              code: "26.01",
              title: "Minerales de hierro y sus concentrados, incluidas las piritas de hierro tostadas (cenizas de piritas).",
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
                      nicos: [{ code: "00", title: "Sin aglomerar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aglomerados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Piritas de hierro tostadas (cenizas de piritas)." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "26.02",
              title: "Minerales de manganeso y sus concentrados, incluidos los minerales de manganeso ferruginosos y sus concentrados con un contenido de manganeso superior o igual al 20% en peso, sobre producto seco.",
              subheadings: [
                {
                  code: "2602.00",
                  title: "Minerales de manganeso y sus concentrados, incluidos los minerales de manganeso ferruginosos y sus concentrados con un contenido de manganeso superior o igual al 20% en peso, sobre producto seco.",
                  classifications: [
                    {
                      code: "2602.00.02",
                      title: "Minerales de manganeso y sus concentrados, incluidos los minerales de manganeso ferruginosos y sus concentrados con un contenido de manganeso superior o igual al 20% en peso, sobre producto seco.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS5"],
                      nicos: [
                        { code: "01", title: "Con un contenido de manganeso igual o superior a 46% en peso sobre producto seco." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Minerales de cobre y sus concentrados." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Minerales de níquel y sus concentrados." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Minerales de cobalto y sus concentrados." }]
                    }
                  ]
                }
              ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Minerales de plomo y sus concentrados." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Minerales de cinc y sus concentrados." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Minerales de estaño y sus concentrados." }]
                    }
                  ]
                }
              ]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
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
                      title: "Minerales de volframio (tungsteno) y sus concentrados.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS5"],
                      nicos: [{ code: "00", title: "Minerales de volframio (tungsteno) y sus concentrados." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Minerales de uranio y sus concentrados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Minerales de torio y sus concentrados." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Tostados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                        { code: "02", title: "Arenas opacificantes micronizadas que contengan 96% o menos de óxido de titanio (arenas de rutilo)." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "26.15",
              title: "Minerales de niobio, tantalio, vanadio o circonio, y sus concentrados.",
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
                        { code: "01", title: "Arenas de circón con 70% o menos de óxido de circonio, con granulometría menor a 120 mallas (0.125 mm)." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Minerales de plata y sus concentrados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Minerales de antimonio y sus concentrados." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "26.18",
              title: "Escorias granuladas (arena de escorias) de la siderurgia.",
              subheadings: [
                {
                  code: "2618.00",
                  title: "Escorias granuladas (arena de escorias) de la siderurgia.",
                  classifications: [
                    {
                      code: "2618.00.01",
                      title: "Escorias granuladas (arena de escorias) de la siderurgia.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS5"],
                      nicos: [{ code: "00", title: "Escorias granuladas (arena de escorias) de la siderurgia." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "26.19",
              title: "Escorias (excepto las granuladas), batiduras y demás desperdicios de la siderurgia.",
              subheadings: [
                {
                  code: "2619.00",
                  title: "Escorias (excepto las granuladas), batiduras y demás desperdicios de la siderurgia.",
                  classifications: [
                    {
                      code: "2619.00.01",
                      title: "Escorias (excepto las granuladas), batiduras y demás desperdicios de la siderurgia.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS5"],
                      nicos: [{ code: "00", title: "Escorias (excepto las granuladas), batiduras y demás desperdicios de la siderurgia." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "26.20",
              title: "Cenizas y residuos (excepto los de la siderurgia) que contengan metal, arsénico o sus compuestos.",
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
                      nicos: [{ code: "00", title: "De galvanización con cinc (polvo de cinc)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                },
                {
                  code: "2620.21",
                  title: "Lodos de gasolina con plomo y lodos de compuestos antidetonantes con plomo.",
                  classifications: [
                    {
                      code: "2620.21.01",
                      title: "Lodos de gasolina con plomo y lodos de compuestos antidetonantes con plomo.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "SEM"],
                      nicos: [{ code: "00", title: "Lodos de gasolina con plomo y lodos de compuestos antidetonantes con plomo." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Que contengan principalmente cobre." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Que contengan principalmente aluminio." }]
                    }
                  ]
                },
                {
                  code: "2620.60",
                  title: "Que contengan arsénico, mercurio, talio o sus mezclas, de los tipos utilizados para la extracción de arsénico o de estos metales o para la elaboración de sus compuestos químicos.",
                  classifications: [
                    {
                      code: "2620.60.01",
                      title: "Que contengan arsénico, mercurio, talio o sus mezclas, de los tipos utilizados para la extracción de arsénico o de estos metales o para la elaboración de sus compuestos químicos.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "SEM"],
                      nicos: [{ code: "00", title: "Que contengan arsénico, mercurio, talio o sus mezclas, de los tipos utilizados para la extracción de arsénico o de estos metales o para la elaboración de sus compuestos químicos." }]
                    }
                  ]
                },
                {
                  code: "2620.91",
                  title: "Que contengan antimonio, berilio, cadmio, cromo, o sus mezclas.",
                  classifications: [
                    {
                      code: "2620.91.01",
                      title: "Que contengan antimonio, berilio, cadmio, cromo, o sus mezclas.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "SEM"],
                      nicos: [{ code: "00", title: "Que contengan antimonio, berilio, cadmio, cromo, o sus mezclas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "26.21",
              title: "Las demás escorias y cenizas, incluidas las cenizas de algas; cenizas y residuos procedentes de la incineración de desechos municipales.",
              subheadings: [
                {
                  code: "2621.10",
                  title: "Cenizas y residuos procedentes de la incineración de desechos municipales.",
                  classifications: [
                    {
                      code: "2621.10.01",
                      title: "Cenizas y residuos procedentes de la incineración de desechos municipales.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS5"],
                      nicos: [{ code: "00", title: "Cenizas y residuos procedentes de la incineración de desechos municipales." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás." }]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: "27",
          title: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales",
          notes: {
            legales: [
              {
                id: "NL-CAP27-1",
                text: "Este Capítulo no comprende: a) los productos orgánicos de constitución química definida presentados aisladamente; esta exclusión no afecta al metano ni al propano puros, que se clasifican en la partida 27.11; b) los medicamentos de las partidas 30.03 o 30.04; c) las mezclas de hidrocarburos no saturados, de las partidas 33.01, 33.02 o 38.05."
              },
              {
                id: "NL-CAP27-2",
                text: "La expresión aceites de petróleo o de mineral bituminoso, empleada en el texto de la partida 27.10, se aplica, no solo a los aceites de petróleo o de mineral bituminoso, sino también a los aceites análogos, así como a los constituidos principalmente por mezclas de hidrocarburos no saturados en las que los constituyentes no aromáticos predominen en peso sobre los aromáticos, cualquiera que sea el procedimiento de obtención. Sin embargo, dicha expresión no se aplica a las poliolefinas sintéticas líquidas que destilen una proporción inferior al 60% en volumen a 300°C referidos a 1.013 milibares cuando se utilice un método de destilación a baja presión (Capítulo 39)."
              },
              {
                id: "NL-CAP27-3",
                text: "En la partida 27.10, se entiende por desechos de aceites los desechos que contengan principalmente aceites de petróleo o de mineral bituminoso (tal como se definen en la Nota 2 de este Capítulo), incluso mezclados con agua. Estos desechos incluyen, principalmente: a) los aceites impropios para su utilización inicial (por ejemplo: aceites lubricantes, hidráulicos o para transformadores, usados); b) los lodos de aceites procedentes de los depósitos de almacenamiento de aceites de petróleo que contengan principalmente aceites de este tipo y una alta concentración de aditivos (por ejemplo, productos químicos) utilizados en la elaboración de productos primarios; c) los aceites que se presenten en emulsión acuosa o mezclados con agua, tales como los resultantes del derrame o lavado de depósitos de almacenamiento, o del uso de aceites de corte en las operaciones de mecanizado."
              }
            ],
            nacionales: [
              {
                id: "NN-CAP27-1",
                text: "Este Capítulo no comprende: a) Las preparaciones para perfumería, tocador o cosmética, comprendidas en las partidas 33.03 a 33.07; b) Los combustibles líquidos y los gases combustibles licuados en recipientes de los tipos utilizados para cargar o recargar encendedores o mecheros, de capacidad inferior o igual a 300 cm³ (partida 36.06)."
              },
              {
                id: "NN-CAP27-2",
                text: "Para efectos de la subpartida 2709.00, se entiende por: a) Aceites crudos de petróleo pesados: aquellos que se encuentran en un rango de 10° API (American Petroleum Institute), pero inferior o igual a 22.3° API; b) Aceites crudos de petróleo medianos: aquellos que se encuentran en un rango superior a 22.3°API, pero inferior o igual a 31.1°API; c) Aceites crudos de petróleo ligeros: aquellos que se encuentran en un rango superior a 31.1°API, pero inferior o igual a 39°API."
              },
              {
                id: "NN-CAP27-3",
                text: "Para los efectos de la subpartida 2710.19, se entenderá por aceites lubricantes básicos aquellos que tengan una viscosidad cinemática superior a 7.5 centistokes (cSt) a 40 °C, determinada por el método de la norma ASTM D-445 (De la Sociedad Americana para Pruebas y Materiales, \"ASTM\" por sus siglas en inglés)."
              }
            ],
            explicativas: []
          },
          headings: [
            {
              code: "27.01",
              title: "Hullas; briquetas, ovoides y combustibles sólidos similares, obtenidos de la hulla.",
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
                      nicos: [{ code: "00", title: "Antracitas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Hulla bituminosa." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Las demás hullas." }]
                    }
                  ]
                },
                {
                  code: "2701.20",
                  title: "Briquetas, ovoides y combustibles sólidos similares, obtenidos de la hulla.",
                  classifications: [
                    {
                      code: "2701.20.01",
                      title: "Briquetas, ovoides y combustibles sólidos similares, obtenidos de la hulla.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "NOM", "EMB"],
                      nicos: [{ code: "00", title: "Briquetas, ovoides y combustibles sólidos similares, obtenidos de la hulla." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Lignitos, incluso pulverizados, pero sin aglomerar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Lignitos aglomerados." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.03",
              title: "Turba (comprendida la utilizada para cama de animales), incluso aglomerada.",
              subheadings: [
                {
                  code: "2703.00",
                  title: "Turba (comprendida la utilizada para cama de animales), incluso aglomerada.",
                  classifications: [
                    {
                      code: "2703.00.02",
                      title: "Turba (comprendida la utilizada para cama de animales), incluso aglomerada. Proveniente del musgo Sphagnum y otros desechos vegetales, para el enraizamiento, denominada Peat-moss.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "SAD"],
                      nicos: [{ code: "00", title: "Turba (comprendida la utilizada para cama de animales), incluso aglomerada. Proveniente del musgo Sphagnum y otros desechos vegetales, para el enraizamiento, denominada Peat-moss." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.04",
              title: "Coques y semicoques de hulla, lignito o turba, incluso aglomerados; carbón de retorta.",
              subheadings: [
                {
                  code: "2704.00",
                  title: "Coques y semicoques de hulla, lignito o turba, incluso aglomerados; carbón de retorta.",
                  classifications: [
                    {
                      code: "2704.00.03",
                      title: "Coques y semicoques de hulla, lignito o turba, incluso aglomerados; carbón de retorta.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4"],
                      nicos: [
                        { code: "01", title: "Coques y semicoques de hulla, lignito o turba, incluso aglomerados." },
                        { code: "02", title: "Carbón de retorta." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.05",
              title: "Gas de hulla, gas de agua, gas pobre y gases similares, excepto el gas de petróleo y demás hidrocarburos gaseosos.",
              subheadings: [
                {
                  code: "2705.00",
                  title: "Gas de hulla, gas de agua, gas pobre y gases similares, excepto el gas de petróleo y demás hidrocarburos gaseosos.",
                  classifications: [
                    {
                      code: "2705.00.01",
                      title: "Gas de hulla, gas de agua, gas pobre y gases similares, excepto el gas de petróleo y demás hidrocarburos gaseosos.",
                      umt: "L",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4"],
                      nicos: [{ code: "00", title: "Gas de hulla, gas de agua, gas pobre y gases similares, excepto el gas de petróleo y demás hidrocarburos gaseosos." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.06",
              title: "Alquitranes de hulla, lignito o turba y demás alquitranes minerales, aunque estén deshidratados o descabezados, incluidos los alquitranes reconstituidos.",
              subheadings: [
                {
                  code: "2706.00",
                  title: "Alquitranes de hulla, lignito o turba y demás alquitranes minerales, aunque estén deshidratados o descabezados, incluidos los alquitranes reconstituidos.",
                  classifications: [
                    {
                      code: "2706.00.01",
                      title: "Alquitranes de hulla, lignito o turba y demás alquitranes minerales, aunque estén deshidratados o descabezados, incluidos los alquitranes reconstituidos.",
                      umt: "L",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4"],
                      nicos: [{ code: "00", title: "Alquitranes de hulla, lignito o turba y demás alquitranes minerales, aunque estén deshidratados o descabezados, incluidos los alquitranes reconstituidos." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.07",
              title: "Aceites y demás productos de la destilación de los alquitranes de hulla de alta temperatura; productos análogos en los que los constituyentes aromáticos predominen en peso sobre los no aromáticos.",
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
                      nicos: [{ code: "00", title: "Benzol (benceno)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Toluol (tolueno)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Xilol (xilenos)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Naftaleno." }]
                    }
                  ]
                },
                {
                  code: "2707.50",
                  title: "Las demás mezclas de hidrocarburos aromáticos que destilen, incluidas las pérdidas, una proporción superior o igual al 65% en volumen a 250°C, según el método ISO 3405 (equivalente al método ASTM D 86).",
                  classifications: [
                    {
                      code: "2707.50.91",
                      title: "Las demás mezclas de hidrocarburos aromáticos que destilen, incluidas las pérdidas, una proporción superior o igual al 65% en volumen a 250°C, según el método ISO 3405 (equivalente al método ASTM D 86).",
                      umt: "L",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4"],
                      nicos: [{ code: "00", title: "Las demás mezclas de hidrocarburos aromáticos que destilen, incluidas las pérdidas, una proporción superior o igual al 65% en volumen a 250°C, según el método ISO 3405 (equivalente al método ASTM D 86)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Aceites de creosota." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.08",
              title: "Brea y coque de brea de alquitrán de hulla o de otros alquitranes minerales.",
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
                      nicos: [{ code: "00", title: "Brea." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Coque de brea." }]
                    }
                  ]
                }
              ]
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
                      title: "Aceites crudos de petróleo pesados, medianos y ligeros.",
                      umt: "Barr",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB", "SEN"],
                      nicos: [
                        { code: "01", title: "Pesados." },
                        { code: "02", title: "Medianos." },
                        { code: "03", title: "Ligeros." }
                      ]
                    },
                    {
                      code: "2709.00.99",
                      title: "Los demás.",
                      umt: "M³",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["EMB", "SEN"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.10",
              title: "Aceites de petróleo o de mineral bituminoso, excepto los aceites crudos; preparaciones no expresadas ni comprendidas en otra parte, con un contenido de aceites de petróleo o de mineral bituminoso superior o igual al 70% en peso, en las que estos aceites constituyan el elemento base; desechos de aceites.",
              subheadings: [
                {
                  code: "2710.12",
                  title: "Aceites ligeros (livianos) y preparaciones.",
                  classifications: [
                    {
                      code: "2710.12.06",
                      title: "Mezcla isomérica de trimetil penteno y dimetil hexeno (Diisobutileno).",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Mezcla isomérica de trimetil penteno y dimetil hexeno (Diisobutileno)." }]
                    },
                    {
                      code: "2710.12.99",
                      title: "Los demás.",
                      umt: "L",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "NOM", "EMB", "SEN"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                },
                {
                  code: "2710.19",
                  title: "Los demás.",
                  classifications: [
                    {
                      code: "2710.19.02",
                      title: "Aceites lubricantes terminados a base de aceites minerales derivados del petróleo, con aditivos (aceites lubricantes terminados).",
                      umt: "L",
                      importDuty: 3,
                      exportDuty: 0,
                      regimenes: ["PS5", "PS4", "NOM", "EMB", "FR_I", "CHT"],
                      nicos: [{ code: "00", title: "Aceites lubricantes terminados a base de aceites minerales derivados del petróleo, con aditivos (aceites lubricantes terminados)." }]
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
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
                },
                {
                  code: "2710.20",
                  title: "Aceites de petróleo o de mineral bituminoso (excepto los aceites crudos) y preparaciones no expresadas ni comprendidas en otra parte, con un contenido de aceites de petróleo o de mineral bituminoso superior o igual al 70% en peso, en las que estos aceites constituyan el elemento base, que contengan biodiésel, excepto los desechos de aceites.",
                  classifications: [
                    {
                      code: "2710.20.01",
                      title: "Aceites de petróleo o de mineral bituminoso (excepto los aceites crudos) y preparaciones no expresadas ni comprendidas en otra parte, con un contenido de aceites de petróleo o de mineral bituminoso superior o igual al 70% en peso, en las que estos aceites constituyan el elemento base, que contengan biodiésel, excepto los desechos de aceites.",
                      umt: "L",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "NOM", "EMB", "SEN"],
                      nicos: [{ code: "00", title: "Aceites de petróleo o de mineral bituminoso (excepto los aceites crudos) y preparaciones no expresadas ni comprendidas en otra parte, con un contenido de aceites de petróleo o de mineral bituminoso superior o igual al 70% en peso, en las que estos aceites constituyan el elemento base, que contengan biodiésel, excepto los desechos de aceites." }]
                    }
                  ]
                },
                {
                  code: "2710.91",
                  title: "Que contengan difenilos policlorados (PCB), terfenilos policlorados (PCT) o difenilos polibromados (PBB).",
                  classifications: [
                    {
                      code: "2710.91.01",
                      title: "Que contengan difenilos policlorados (PCB), terfenilos policlorados (PCT) o difenilos polibromados (PBB).",
                      umt: "L",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "SEM"],
                      nicos: [{ code: "00", title: "Que contengan difenilos policlorados (PCB), terfenilos policlorados (PCT) o difenilos polibromados (PBB)." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Gas natural." }]
                    }
                  ]
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
                        { code: "01", title: "Con pureza igual o superior a 90% en volumen." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                        { code: "01", title: "Con pureza igual o superior a 90% en volumen." },
                        { code: "99", title: "Los demás." }
                      ]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Etileno, propileno, butileno y butadieno." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Gas natural." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.12",
              title: "Vaselina; parafina, cera de petróleo microcristalina, «slack wax», ozoquerita, cera de lignito, cera de turba, demás ceras minerales y productos similares obtenidos por síntesis o por otros procedimientos, incluso coloreados.",
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
                      nicos: [{ code: "00", title: "Vaselina." }]
                    }
                  ]
                },
                {
                  code: "2712.20",
                  title: "Parafina con un contenido de aceite inferior al 0.75% en peso.",
                  classifications: [
                    {
                      code: "2712.20.01",
                      title: "Parafina con un contenido de aceite inferior al 0.75% en peso.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Parafina con un contenido de aceite inferior al 0.75% en peso." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Cera de lignito." }]
                    },
                    {
                      code: "2712.90.02",
                      title: "Ceras microcristalinas.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Ceras microcristalinas." }]
                    },
                    {
                      code: "2712.90.03",
                      title: "Residuos parafínicos (\"slack wax\"), con un contenido de aceite superior o igual a 8%, en peso.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Residuos parafínicos (\"slack wax\"), con un contenido de aceite superior o igual a 8%, en peso." }]
                    },
                    {
                      code: "2712.90.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 7,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.13",
              title: "Coque de petróleo, betún de petróleo y demás residuos de los aceites de petróleo o de mineral bituminoso.",
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
                      nicos: [{ code: "00", title: "Sin calcinar." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Calcinado." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Betún de petróleo." }]
                    }
                  ]
                },
                {
                  code: "2713.90",
                  title: "Los demás residuos de los aceites de petróleo o de mineral bituminoso.",
                  classifications: [
                    {
                      code: "2713.90.91",
                      title: "Los demás residuos de los aceites de petróleo o de mineral bituminoso.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Los demás residuos de los aceites de petróleo o de mineral bituminoso." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.14",
              title: "Betunes y asfaltos naturales; pizarras y arenas bituminosas; asfaltitas y rocas asfálticas.",
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
                      nicos: [{ code: "00", title: "Pizarras y arenas bituminosas." }]
                    }
                  ]
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
                      nicos: [{ code: "00", title: "Betunes y asfaltos naturales." }]
                    },
                    {
                      code: "2714.90.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 25,
                      regimenes: ["PS4"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
            },
            {
              code: "27.15",
              title: "Mezclas bituminosas a base de asfalto o de betún naturales, de betún de petróleo, de alquitrán mineral o de brea de alquitrán mineral (por ejemplo: mástiques bituminosos, «cut backs»).",
              subheadings: [
                {
                  code: "2715.00",
                  title: "Mezclas bituminosas a base de asfalto o de betún naturales, de betún de petróleo, de alquitrán mineral o de brea de alquitrán mineral (por ejemplo: mástiques bituminosos, «cut backs»).",
                  classifications: [
                    {
                      code: "2715.00.01",
                      title: "Betunes fluidificados; mezclas bituminosas base de asfalto acondicionadas para su venta en envases con capacidad inferior o igual a 200 l.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 0,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Betunes fluidificados; mezclas bituminosas base de asfalto acondicionadas para su venta en envases con capacidad inferior o igual a 200 l." }]
                    },
                    {
                      code: "2715.00.99",
                      title: "Los demás.",
                      umt: "Kg",
                      importDuty: 0,
                      exportDuty: 25,
                      regimenes: ["PS4", "EMB"],
                      nicos: [{ code: "00", title: "Los demás." }]
                    }
                  ]
                }
              ]
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
                      nicos: [{ code: "00", title: "Energía eléctrica." }]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
