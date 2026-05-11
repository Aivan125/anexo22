/**
 * One-off generator: tres casos adicionales para el simulador aduanero.
 * Ejecutar: node scripts/generate-customs-cases.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const casesDir = path.join(root, "lib/data/customs-simulator/cases");
const journeyDir = path.join(root, "lib/data/customs-simulator/journey");

function rnd2(n) {
  return Number(n.toFixed(2));
}

/** @typedef {typeof basePedimentoSkeleton} Bundle */

const baseDecisionQuestions = [
  {
    id: "q6",
    text: "Selecciona el método de valoración aplicable",
    options: [
      "Valor de transacción",
      "Valor de mercancías idénticas",
      "Valor de mercancías similares",
      "Método deductivo",
    ],
    correctAnswer: "Valor de transacción",
    points: 5,
  },
  {
    id: "q7",
    text: "Selecciona los conceptos incrementables",
    options: [
      "Flete internacional",
      "Seguro internacional",
      "Embalaje",
      "Todos los anteriores",
      "Ninguno",
    ],
    correctAnswer: "Todos los anteriores",
    points: 5,
  },
  {
    id: "q8",
    text: "La base del valor en aduana debe construirse a partir de:",
    options: [
      "Solo valor factura",
      "Valor factura + incrementables",
      "Valor factura + IVA",
      "Valor factura + DTA",
    ],
    correctAnswer: "Valor factura + incrementables",
    points: 5,
  },
];

function mkAnalysis({ originCountry, transportMode, incotermKey }) {
  const incOpts = ["CIF", "EXW", "DDP", incotermKey];
  if (!incOpts.includes(incotermKey)) incOpts.push(incotermKey);
  return [
    {
      id: "q1",
      text: "¿Qué tipo de operación se está realizando?",
      options: [
        "Exportación definitiva",
        "Importación definitiva",
        "Retorno virtual",
        "Tránsito interno",
      ],
      correctAnswer: "Importación definitiva",
      points: 3,
    },
    {
      id: "q2",
      text: "¿Cuál es el régimen aduanero aplicable?",
      options: [
        "Temporal para elaboración",
        "Importación definitiva",
        "Depósito fiscal",
        "Recinto fiscalizado estratégico",
      ],
      correctAnswer: "Importación definitiva",
      points: 3,
    },
    {
      id: "q3",
      text: "¿Cuál es el país de origen de la mercancía?",
      options: [
        "México",
        "Estados Unidos",
        "China",
        "Alemania",
        "Vietnam",
      ].filter((x, i, a) => a.indexOf(x) === i),
      correctAnswer: originCountry,
      points: 3,
    },
    {
      id: "q4",
      text: "¿Cuál es el medio de transporte de arribo?",
      options: ["Aéreo", "Ferroviario", "Marítimo", "Terrestre", "Fluvial"],
      correctAnswer: transportMode,
      points: 3,
    },
    {
      id: "q5",
      text: "¿Qué Incoterm se pactó en la operación?",
      options: incOpts,
      correctAnswer: incotermKey,
      points: 3,
    },
  ];
}

function mkPedimento({
  customsOffice,
  transportMode,
  invoiceValueUsd,
  freightUsd,
  insuranceUsd,
  packingUsd,
  exchangeRate,
  customsValueMxn,
  tariffCode,
  goodsDescription,
  quantity,
  originCountry,
}) {
  const inv = String(invoiceValueUsd);
  const fr = String(freightUsd);
  const ins = String(insuranceUsd);
  const pk = String(packingUsd);
  const xr = String(exchangeRate);
  const cvm = String(Math.round(customsValueMxn));
  return [
    {
      id: "operationType",
      label: "Tipo de operación",
      type: "select",
      expected: "Importación",
      points: 4,
      selectOptions: ["Importación", "Exportación", "Tránsito"],
    },
    {
      id: "pedimentoKey",
      label: "Clave de pedimento",
      type: "select",
      expected: "A1",
      points: 4,
      selectOptions: ["A1", "A3", "BP", "C1", "F4"],
    },
    {
      id: "regime",
      label: "Régimen",
      type: "select",
      expected: "Definitivo",
      points: 4,
      selectOptions: [
        "Definitivo",
        "Temporal",
        "Depósito fiscal",
        "Tránsito",
        "Recinto fiscalizado",
      ],
    },
    {
      id: "customsOffice",
      label: "Aduana",
      type: "select",
      expected: customsOffice,
      points: 4,
      selectOptions: [
        customsOffice,
        "Manzanillo",
        "Veracruz",
        "Altamira",
        "Ciudad de México",
        "Nuevo Laredo",
      ].filter((x, i, a) => a.indexOf(x) === i),
    },
    {
      id: "transportMode",
      label: "Medio de transporte",
      type: "select",
      expected: transportMode,
      points: 4,
      selectOptions: [
        "Marítimo",
        "Aéreo",
        "Terrestre",
        "Ferroviario",
        "Fluvial",
      ],
    },
    {
      id: "invoiceValueUsd",
      label: "Valor factura USD",
      type: "select",
      expected: inv,
      points: 4,
      selectOptions: [inv, "12000", "42000", "89500"],
    },
    {
      id: "freightUsd",
      label: "Flete USD",
      type: "select",
      expected: fr,
      points: 4,
      selectOptions: [fr, "1200", "1150", "6500"],
    },
    {
      id: "insuranceUsd",
      label: "Seguro USD",
      type: "select",
      expected: ins,
      points: 4,
      selectOptions: [ins, "150", "240", "740"],
    },
    {
      id: "packingUsd",
      label: "Embalaje USD",
      type: "select",
      expected: pk,
      points: 4,
      selectOptions: [pk, "100", "110", "260"],
    },
    {
      id: "exchangeRate",
      label: "Tipo de cambio",
      type: "select",
      expected: xr,
      points: 4,
      selectOptions: [xr, "17.2", "18.0", "17.25"],
    },
    {
      id: "customsValueMxn",
      label: "Valor en aduana MXN",
      type: "select",
      expected: cvm,
      points: 10,
      selectOptions: [cvm, "231340", "792000", "1656000"],
    },
    {
      id: "tariffCode",
      label: "Fracción arancelaria",
      type: "select",
      expected: tariffCode,
      points: 6,
      selectOptions: [
        tariffCode,
        "8471.30.01",
        "9018.90.06",
        "5208.52.02",
      ],
    },
    {
      id: "goodsDescription",
      label: "Descripción",
      type: "select",
      expected: goodsDescription,
      points: 4,
      selectOptions: [
        goodsDescription,
        "Mercancía genérica declarada incompleta",
        "Piezas metálicas sin especificación",
      ],
    },
    {
      id: "quantity",
      label: "Cantidad",
      type: "select",
      expected: String(quantity),
      points: 4,
      selectOptions: [
        String(quantity),
        "100",
        "24",
        "18500",
      ],
    },
    {
      id: "originCountry",
      label: "País de origen",
      type: "select",
      expected: originCountry,
      points: 4,
      selectOptions: [
        originCountry,
        "China",
        "México",
        "Brasil",
        "Canadá",
      ].filter((x, i, a) => a.indexOf(x) === i),
    },
  ];
}

function mkTax(customsVal, igi, dta, baseIva, iva, total) {
  const f = String(rnd2(igi));
  const d = String(rnd2(dta));
  const b = String(rnd2(baseIva));
  const iv = String(rnd2(iva));
  const t = String(rnd2(total));
  const cvRounded = rnd2(customsVal);
  return [
    {
      id: "igi",
      label: "IGI",
      type: "select",
      expected: f,
      points: 8,
      selectOptions: [f, "34701.00", "118800.00", "364320.00"],
      formula: {
        title: "IGI — Impuesto General de Importación",
        expression: "IGI = Valor en Aduana × Tasa arancelaria",
        explanation:
          "Se aplica la tasa de la fracción arancelaria al valor en aduana en MXN.",
        example: `${Intl.NumberFormat("es-MX", { minimumFractionDigits: 2 }).format(cvRounded)} × tasa aplicable`,
      },
    },
    {
      id: "dta",
      label: "DTA",
      type: "select",
      expected: d,
      points: 6,
      selectOptions: [d, "1850.72", "6336.00", "13248.00"],
      formula: {
        title: "DTA — Derecho de Trámite Aduanero",
        expression: "DTA = Valor en Aduana × 0.008",
        explanation: "8 al millar sobre el valor en aduana (importación definitiva A1).",
        example: `${Intl.NumberFormat("es-MX", { minimumFractionDigits: 2 }).format(cvRounded)} × 0.008`,
      },
    },
    {
      id: "ivaBase",
      label: "Base IVA",
      type: "select",
      expected: b,
      points: 8,
      selectOptions: [b, "267891.72", "917136.00", "2033568.00"],
      formula: {
        title: "Base gravable del IVA",
        expression: "Base IVA = Valor en Aduana + IGI + DTA",
        explanation:
          "Base integrada conforme obligaciones en importación definitiva.",
        example: "Suma de valor en aduana, IGI y DTA",
      },
    },
    {
      id: "iva",
      label: "IVA",
      type: "select",
      expected: iv,
      points: 8,
      selectOptions: [iv, "42862.68", "146741.76", "325370.88"],
      formula: {
        title: "IVA — Impuesto al Valor Agregado",
        expression: "IVA = Base IVA × 16%",
        explanation: "Tasa general 16% sobre la base integrada.",
        example: `${b} × 16%`,
      },
    },
    {
      id: "totalTaxes",
      label: "Total contribuciones",
      type: "select",
      expected: t,
      points: 8,
      selectOptions: [t, "79414.40", "271877.76", "703938.88"],
      formula: {
        title: "Total de contribuciones a pagar",
        expression: "Total = IGI + DTA + IVA",
        explanation: "Suma de contribuciones causadas.",
        example: "IGI + DTA + IVA",
      },
    },
  ];
}

function mkRules({ customsValueMxn, tariffCode, igi, iva }) {
  return [
    {
      ifField: "regime",
      notEquals: "Definitivo",
      message:
        "Error crítico: El régimen seleccionado no corresponde a una operación de importación definitiva.",
      severity: "high",
    },
    {
      ifField: "customsValueMxn",
      notInToleranceOf: Math.round(customsValueMxn),
      message:
        "Observación: El valor en aduana no fue integrado correctamente. Revisa incrementables y tipo de cambio.",
      severity: "high",
    },
    {
      ifField: "tariffCode",
      notEquals: tariffCode,
      message:
        "Alerta: La fracción arancelaria capturada es inconsistente con la mercancía declarada.",
      severity: "medium",
    },
    {
      ifField: "igi",
      notInToleranceOf: rnd2(igi),
      message:
        "Error de cálculo: El IGI no coincide con la base gravable declarada.",
      severity: "high",
    },
    {
      ifField: "iva",
      notInToleranceOf: rnd2(iva),
      message:
        "Error de integración fiscal: La base del IVA debe considerar valor en aduana, IGI y DTA.",
      severity: "high",
    },
  ];
}

function mkControversy(riskType) {
  return [
    {
      id: "c1",
      text: "¿Qué tipo de riesgo representa la discrepancia documental descrita en el caso?",
      options: [
        "Riesgo operativo",
        riskType,
        "Riesgo cambiario",
        "Riesgo logístico",
      ],
      correctAnswer: riskType,
      points: 5,
    },
    {
      id: "c2",
      text: "¿En qué momento del despacho se detecta la irregularidad descrita en el caso?",
      options: [
        "Revisión previa del importador",
        "Reconocimiento aduanero (semáforo rojo)",
        "Auditoría posterior del SAT",
        "Embarque en origen",
      ],
      correctAnswer: "Reconocimiento aduanero (semáforo rojo)",
      points: 4,
    },
    {
      id: "c3",
      text: "¿Cuál es la infracción cometida según la Ley Aduanera?",
      options: [
        "Art. 176 fracc. I — Importar sin pedimento",
        "Art. 184 fracc. III — Datos inexactos u omitidos en el pedimento",
        "Art. 178 fracc. IV — Mercancía prohibida",
        "Art. 183-A — Mercancía pasa a propiedad del fisco",
      ],
      correctAnswer: "Art. 184 fracc. III — Datos inexactos u omitidos en el pedimento",
      points: 6,
    },
    {
      id: "c4",
      text: "¿Cuál es la sanción aplicable conforme al Art. 185 fracc. II de la Ley Aduanera?",
      options: [
        "Multa fija de $5,000 MXN",
        "Multa del 70% al 100% del beneficio indebido o contribuciones omitidas",
        "Cancelación inmediata del RFC",
        "Pena privativa de la libertad obligatoria",
      ],
      correctAnswer:
        "Multa del 70% al 100% del beneficio indebido o contribuciones omitidas",
      points: 6,
    },
    {
      id: "c5",
      text: "Además de la multa económica, ¿qué consecuencia adicional puede enfrentar el importador?",
      options: [
        "Devolución automática del IVA",
        "Suspensión temporal del padrón de importadores en caso de reincidencia",
        "Exención de DTA en futuras operaciones",
        "Reducción del IGI al 0%",
      ],
      correctAnswer:
        "Suspensión temporal del padrón de importadores en caso de reincidencia",
      points: 4,
    },
  ];
}

// ——— Caso terrestre ———
const tInc = 48500 + 2150 + 290 + 130;
const tRate = 17.4;
const tVad = rnd2(tInc * tRate);
const tIgiT = 0.1;
const tIgi = rnd2(tVad * tIgiT);
const tDta = rnd2(tVad * 0.008);
const tBase = rnd2(tVad + tIgi + tDta);
const tIva = rnd2(tBase * 0.16);
const tTot = rnd2(tIgi + tDta + tIva);

const tRiskType = "Riesgo documental y de cumplimiento USMCA";
const aRiskType = "Riesgo regulatorio y documental";
const mRiskType = "Riesgo arancelario y de descripción";

const terrestre = {
  key: "terrestre_autopartes",
  label: "Caso terrestre — Importación de autopartes (Laredo, TX → Nuevo Laredo)",
  shortLabel: "Terrestre · Autopartes",
  mode: "Terrestre",
  isExample: false,
  route: { from: "Laredo, TX", to: "Nuevo Laredo" },
  case: {
    id: "CASO-002",
    title: "Importación definitiva de refacciones automotrices",
    context:
      "Noreste Autopartes, S.A. de C.V. importará definitivamente lotes de frenos y embragues desde Estados Unidos, cruzando por la aduana de Nuevo Laredo en transporte terrestre.",
    expedienteNarrativeParagraphs: [
      "Noreste Autopartes, S.A. de C.V. celebró el contrato con Lone Star Automotive Supply LLC para abastecer su red de talleres con pastillas, discos y kits de embrague bajo Incoterm DAP Nuevo Laredo: el precio facturado integra flete terrestre transfronterizo y el importador asume en territorio nacional la correcta valoración y el cumplimiento normativo.",
      "La carga transita de Laredo, Texas, hacia Nuevo Laredo con documentación USMCA; el expediente debe exhibir coherencia entre la factura comercial, el manifest de carga y la descripción arancelaria de las piezas metálicas antes de emitir el pedimento definitivo.",
      "La operación se documenta con valor comercial en USD, tipo de cambio aplicable y segregación de incrementables, de modo que el valor en aduana refleje el precio pagado más los gastos hasta el lugar de importación conforme a la metodología de valor de transacción.",
    ],
    expedienteAccentTerms: [
      "Noreste Autopartes, S.A. de C.V.",
      "Lone Star Automotive Supply LLC",
      "DAP Nuevo Laredo",
      "Laredo, TX",
      "Nuevo Laredo",
      "USMCA",
      "Importación definitiva",
    ],
    importer: {
      name: "Noreste Autopartes, S.A. de C.V.",
      rfc: "NOA240215AB2",
      city: "Monterrey, Nuevo León",
    },
    supplier: {
      name: "Lone Star Automotive Supply LLC",
      countryExport: "Estados Unidos",
      countryOrigin: "Estados Unidos",
    },
    goods: {
      description:
        "Conjunto de pastillas y discos de freno para vehículos ligeros (kit ensamblado)",
      quantity: 2800,
      unitValueUsd: rnd2(48500 / 2800),
      invoiceValueUsd: 48500,
    },
    terms: {
      incoterm: "DAP Nuevo Laredo",
      freightUsd: 2150,
      insuranceUsd: 290,
      packingUsd: 130,
      exchangeRate: tRate,
      transportMode: "Terrestre",
      customsOffice: "Nuevo Laredo",
      regimeExpected: "Importación definitiva",
    },
    tariff: { tariffCode: "8708.30.01", igiRate: tIgiT, ivaRate: 0.16, dtaRate: 0.008 },
    risk: {
      type: tRiskType,
      title: "Descripción comercial vs. subpartida arancelaria",
      description:
        "En el reconocimiento se advierte que la factura agrupa componentes bajo una descripción genérica “brake kit” mientras el pedimento declara una subpartida específica de discos de freno con distinto grado de elaboración; el analista documenta posible subvaloración de la obligación arancelaria y posible error en el criterio de origen preferencial.",
      impact:
        "La divergencia puede invalidar el tratamiento USMCA y obligar a reclasificar o a corregir el valor en aduana, afectando el cálculo de IGI y la cadena de trazabilidad del proveedor.",
    },
    infraction: {
      legalBasis: "Artículo 184, fracción III de la Ley Aduanera",
      description:
        "Presentar el pedimento con datos inexactos o falsos, u omitir alguno de ellos, cuando se altere la información estadística, el cumplimiento de regulaciones y restricciones no arancelarias o la determinación correcta de las contribuciones.",
      detectedBy:
        "Reconocimiento aduanero (semáforo rojo) en la aduana de Nuevo Laredo.",
    },
    sanction: {
      legalBasis: "Artículo 185, fracción II de la Ley Aduanera",
      fineRange:
        "Multa del 70% al 100% del beneficio indebido o de las contribuciones omitidas",
      estimatedFine: `Entre ${rnd2(tIgi * 0.7).toLocaleString("es-MX", { minimumFractionDigits: 2 })} y ${tIgi.toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN (referencia sobre IGI preliminar)`,
      additional: [
        "Rectificación de pedimento y posibles recargos.",
        "Revisión de certificados de origen y trazabilidad de la mercancía.",
        "Medidas de comprobación en operaciones subsecuentes.",
      ],
    },
  },
  analysisQuestions: mkAnalysis({
    originCountry: "Estados Unidos",
    transportMode: "Terrestre",
    incotermKey: "DAP Nuevo Laredo",
  }),
  decisionQuestions: baseDecisionQuestions,
  controversyQuestions: mkControversy(tRiskType),
  pedimentoFields: mkPedimento({
    customsOffice: "Nuevo Laredo",
    transportMode: "Terrestre",
    invoiceValueUsd: 48500,
    freightUsd: 2150,
    insuranceUsd: 290,
    packingUsd: 130,
    exchangeRate: tRate,
    customsValueMxn: tVad,
    tariffCode: "8708.30.01",
    goodsDescription:
      "Conjunto de pastillas y discos de freno para vehículos ligeros (kit ensamblado)",
    quantity: 2800,
    originCountry: "Estados Unidos",
  }),
  taxFields: mkTax(tVad, tIgi, tDta, tBase, tIva, tTot),
  validationRules: mkRules({
    customsValueMxn: tVad,
    tariffCode: "8708.30.01",
    igi: tIgi,
    iva: tIva,
  }),
};

const aInc = 42000 + 1150 + 240 + 110;
const aRate = 18;
const aVad = rnd2(aInc * aRate);
const aIgiT = 0.15;
const aIgi = rnd2(aVad * aIgiT);
const aDta = rnd2(aVad * 0.008);
const aBase = rnd2(aVad + aIgi + aDta);
const aIva = rnd2(aBase * 0.16);
const aTot = rnd2(aIgi + aDta + aIva);

const aereo = {
  key: "aereo_instrumental",
  label:
    "Caso aéreo — Importación de instrumental médico (Frankfurt → AICM, Ciudad de México)",
  shortLabel: "Aéreo · Instrumental médico",
  mode: "Aéreo",
  isExample: false,
  route: { from: "Frankfurt", to: "AICM (Ciudad de México)" },
  case: {
    id: "CASO-003",
    title: "Importación definitiva de equipo de ultrasonido portátil",
    context:
      "MediCorona Distribuidora importará equipo de diagnóstico por ultrasonido desde Alemania mediante carga aérea con llegada al AICM, para distribución hospitalaria nacional.",
    expedienteNarrativeParagraphs: [
      "MediCorona Distribuidora, S.A. de C.V. adquiere sistemas compactos de ultrasonido Frankfurt MedTech Instruments GmbH bajo CIP Aeropuerto Ciudad de México: el proveedor proporciona conocimiento de embarque multimodal hasta el primer punto de entrada y el importador debe alinear registros sanitarios previos al pedimento.",
      "La mercancía aterriza en el AICM con cadena fría documental habitual; los sellos electrónicos y la guía aérea deben cuadrar con la factura, el embalaje y la identificación del lote ante COFEPRIS.",
      "El expediente concentra pruebas de conformidad técnica, contratos de soporte técnico y la determinación provisional del valor en aduana a partir del precio de transacción y los cargos relacionados hasta el lugar de nacionalización.",
    ],
    expedienteAccentTerms: [
      "MediCorona Distribuidora, S.A. de C.V.",
      "Frankfurt MedTech Instruments GmbH",
      "CIP Aeropuerto Ciudad de México",
      "AICM",
      "Alemania",
      "COFEPRIS",
    ],
    importer: {
      name: "MediCorona Distribuidora, S.A. de C.V.",
      rfc: "MCD230811NT4",
      city: "Guadalajara, Jalisco",
    },
    supplier: {
      name: "Frankfurt MedTech Instruments GmbH",
      countryExport: "Alemania",
      countryOrigin: "Alemania",
    },
    goods: {
      description:
        "Equipo médico digital portátil de ultrasonido con transductor multifrecuencia",
      quantity: 24,
      unitValueUsd: rnd2(42000 / 24),
      invoiceValueUsd: 42000,
    },
    terms: {
      incoterm: "CIP Aeropuerto Ciudad de México",
      freightUsd: 1150,
      insuranceUsd: 240,
      packingUsd: 110,
      exchangeRate: aRate,
      transportMode: "Aéreo",
      customsOffice: "Ciudad de México",
      regimeExpected: "Importación definitiva",
    },
    tariff: { tariffCode: "9018.12.01", igiRate: aIgiT, ivaRate: 0.16, dtaRate: 0.008 },
    risk: {
      type: aRiskType,
      title: "Registro sanitario vs. modelo del equipo",
      description:
        "El reconocimiento detecta que el número de registro sanitario corresponde a una versión de firmware distinta a la consignada en la factura y en la rotulación del equipo; ello genera duda sobre la procedencia del desaduanamiento y la correcta descripción en el pedimento.",
      impact:
        "La autoridad puede exigir aclaración del fabricante, retener la mercancía en recinto fiscal y reprogramar el despacho hasta homologar la documentación sanitaria con la mercancía física.",
    },
    infraction: {
      legalBasis: "Artículo 184, fracción III de la Ley Aduanera",
      description:
        "Presentar el pedimento con datos inexactos o falsos, u omitir alguno de ellos, cuando se altere la información estadística, el cumplimiento de regulaciones y restricciones no arancelarias o la determinación correcta de las contribuciones.",
      detectedBy:
        "Reconocimiento aduanero (semáforo rojo) en la aduana de Ciudad de México.",
    },
    sanction: {
      legalBasis: "Artículo 185, fracción II de la Ley Aduanera",
      fineRange:
        "Multa del 70% al 100% del beneficio indebido o de las contribuciones omitidas",
      estimatedFine: `Entre ${rnd2(aIgi * 0.7).toLocaleString("es-MX", { minimumFractionDigits: 2 })} y ${aIgi.toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN (referencia sobre IGI preliminar)`,
      additional: [
        "Posible inmovilización en almacén fiscal hasta regularizar permisos.",
        "Notificación a autoridad sanitaria competente.",
        "Actualizaciones y recargos en caso de corrección extemporánea.",
      ],
    },
  },
  analysisQuestions: mkAnalysis({
    originCountry: "Alemania",
    transportMode: "Aéreo",
    incotermKey: "CIP Aeropuerto Ciudad de México",
  }),
  decisionQuestions: baseDecisionQuestions,
  controversyQuestions: mkControversy(aRiskType),
  pedimentoFields: mkPedimento({
    customsOffice: "Ciudad de México",
    transportMode: "Aéreo",
    invoiceValueUsd: 42000,
    freightUsd: 1150,
    insuranceUsd: 240,
    packingUsd: 110,
    exchangeRate: aRate,
    customsValueMxn: aVad,
    tariffCode: "9018.12.01",
    goodsDescription:
      "Equipo médico digital portátil de ultrasonido con transductor multifrecuencia",
    quantity: 24,
    originCountry: "Alemania",
  }),
  taxFields: mkTax(aVad, aIgi, aDta, aBase, aIva, aTot),
  validationRules: mkRules({
    customsValueMxn: aVad,
    tariffCode: "9018.12.01",
    igi: aIgi,
    iva: aIva,
  }),
};

const mInc = 89500 + 5800 + 740 + 260;
const mRate = 17.25;
const mVad = rnd2(mInc * mRate);
const mIgiT = 0.22;
const mIgi = rnd2(mVad * mIgiT);
const mDta = rnd2(mVad * 0.008);
const mBase = rnd2(mVad + mIgi + mDta);
const mIva = rnd2(mBase * 0.16);
const mTot = rnd2(mIgi + mDta + mIva);

const maritimoTextiles = {
  key: "maritimo_textiles",
  label: "Caso marítimo — Importación de textiles (Ho Chi Minh → Veracruz)",
  shortLabel: "Marítimo · Textiles",
  mode: "Marítimo",
  isExample: false,
  route: { from: "Ho Chi Minh", to: "Veracruz" },
  case: {
    id: "CASO-004",
    title: "Importación definitiva de tela de algodón teñida",
    context:
      "Textiles del Golfo adquiere rollos de tela de algodón en Vietnam con embarque marítimo hacia la aduana de Veracruz para abastecer plantas de confección.",
    expedienteNarrativeParagraphs: [
      "Textiles del Golfo, S.A. de C.V. compra a Saigon Textile Export JSC rollos de tela de algodón teñida bajo FOB Ho Chi Minh; el precio FOB deja al importador la contratación del flete internacional y el seguro hasta Veracruz.",
      "El buque consolida contenedores en el Sudeste Asiático; el expediente integra factura, packing list y conocimiento de embarque con la composición fibra / peso por metro lineal exigida por la fracción textil.",
      "Antes del pedimento, el importador prepara la determinación del valor en aduana sumando incrementables y tipo de cambio oficial aplicable, y documenta el cumplimiento de regulaciones no arancelarias para productos textiles.",
    ],
    expedienteAccentTerms: [
      "Textiles del Golfo, S.A. de C.V.",
      "Saigon Textile Export JSC",
      "FOB Ho Chi Minh",
      "Ho Chi Minh",
      "Veracruz",
      "Vietnam",
    ],
    importer: {
      name: "Textiles del Golfo, S.A. de C.V.",
      rfc: "TGO220119XY4",
      city: "Puebla, Puebla",
    },
    supplier: {
      name: "Saigon Textile Export JSC",
      countryExport: "Vietnam",
      countryOrigin: "Vietnam",
    },
    goods: {
      description:
        "Tela de algodón teñida, ancho 1.6 m, para confección industrial",
      quantity: 18500,
      unitValueUsd: rnd2(89500 / 18500),
      invoiceValueUsd: 89500,
    },
    terms: {
      incoterm: "FOB Ho Chi Minh",
      freightUsd: 5800,
      insuranceUsd: 740,
      packingUsd: 260,
      exchangeRate: mRate,
      transportMode: "Marítimo",
      customsOffice: "Veracruz",
      regimeExpected: "Importación definitiva",
    },
    tariff: { tariffCode: "5208.52.01", igiRate: mIgiT, ivaRate: 0.16, dtaRate: 0.008 },
    risk: {
      type: mRiskType,
      title: "Composición textil declarada vs. muestra física",
      description:
        "El muestreo en reconocimiento sugiere mayor contenido de fibras sintéticas mezcladas no declaradas en el pedimento preliminar, lo que podría implicar otra fracción arancelaria y un IGI distinto al calculado con base en algodón puro.",
      impact:
        "La reclasificación potencial incrementa el arancel y el IVA, y puede generar diferencias de contribuciones con actualizaciones y recargos.",
    },
    infraction: {
      legalBasis: "Artículo 184, fracción III de la Ley Aduanera",
      description:
        "Presentar el pedimento con datos inexactos o falsos, u omitir alguno de ellos, cuando se altere la información estadística, el cumplimiento de regulaciones y restricciones no arancelarias o la determinación correcta de las contribuciones.",
      detectedBy:
        "Reconocimiento aduanero (semáforo rojo) en la aduana de Veracruz.",
    },
    sanction: {
      legalBasis: "Artículo 185, fracción II de la Ley Aduanera",
      fineRange:
        "Multa del 70% al 100% del beneficio indebido o de las contribuciones omitidas",
      estimatedFine: `Entre ${rnd2(mIgi * 0.7).toLocaleString("es-MX", { minimumFractionDigits: 2 })} y ${mIgi.toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN (referencia sobre IGI preliminar)`,
      additional: [
        "Pago de contribuciones omitidas con recargos.",
        "Análisis de muestras y posible destrucción de mercancía en controversia.",
        "Seguimiento documental en importaciones posteriores del mismo proveedor.",
      ],
    },
  },
  analysisQuestions: mkAnalysis({
    originCountry: "Vietnam",
    transportMode: "Marítimo",
    incotermKey: "FOB Ho Chi Minh",
  }),
  decisionQuestions: baseDecisionQuestions,
  controversyQuestions: mkControversy(mRiskType),
  pedimentoFields: mkPedimento({
    customsOffice: "Veracruz",
    transportMode: "Marítimo",
    invoiceValueUsd: 89500,
    freightUsd: 5800,
    insuranceUsd: 740,
    packingUsd: 260,
    exchangeRate: mRate,
    customsValueMxn: mVad,
    tariffCode: "5208.52.01",
    goodsDescription:
      "Tela de algodón teñida, ancho 1.6 m, para confección industrial",
    quantity: 18500,
    originCountry: "Vietnam",
  }),
  taxFields: mkTax(mVad, mIgi, mDta, mBase, mIva, mTot),
  validationRules: mkRules({
    customsValueMxn: mVad,
    tariffCode: "5208.52.01",
    igi: mIgi,
    iva: mIva,
  }),
};

// Fix analysis q3 options to always include correct country
function fixAnalysisOptions(bundle) {
  const o = bundle.analysisQuestions.find((q) => q.id === "q3");
  if (o && !o.options.includes(o.correctAnswer)) {
    o.options = [...o.options, o.correctAnswer];
  }
}
fixAnalysisOptions(terrestre);
fixAnalysisOptions(aereo);
fixAnalysisOptions(maritimoTextiles);

const journeyTerrestre = {
  caseKey: "terrestre_autopartes",
  expediente: [
    {
      id: "journey-trs-001",
      title: "Arribo en puente internacional y ventanilla",
      scenario:
        "El trailer con mercancía llega a Nuevo Laredo. El agente aduanal debe coordinar inspección no intrusiva y ventanilla digital previa al cruce.",
      iconName: "Truck",
      options: [
        {
          label:
            "Cruzar la frontera sin validar el e-manifest y el sellado electrónico",
          correct: false,
        },
        {
          label:
            "Verificar e-manifest, consistencia de sellos y cita de reconocimiento antes de solicitar despacho provisional",
          correct: true,
        },
        {
          label: "Declinar el tratado aplicable porque el proveedor radica fuera del TLCAN",
          correct: false,
        },
      ],
    },
    {
      id: "journey-trs-002",
      title: "Factura vs. conocimiento terrestre (CRT/e-Carta porte)",
      scenario:
        "La factura indica contenido estándar; el CRT detalla pallets adicionales con refacciones no descritas en la primera página.",
      iconName: "FileText",
      options: [
        {
          label: "Tomar sólo la factura primera página como descripción suficiente",
          correct: false,
        },
        {
          label:
            "Cotejar factura, CRT y packing list; subsanar divergencias antes del pedimento",
          correct: true,
        },
        {
          label: "Reemplazar el CRT por un documento interno del transportista",
          correct: false,
        },
      ],
    },
    {
      id: "journey-trs-003",
      title: "USMCA — reglas de origen y trazabilidad",
      scenario:
        "La certificación de origen presume transformación suficiente, pero parte de los discos muestra grabado ‘non-NAFTA content’.",
      iconName: "Stamp",
      options: [
        {
          label: "Aceptar origen tratado porque el valor total es mayoritario en NA",
          correct: false,
        },
        {
          label:
            "Documentar contenido no originario segregado antes de declarar tratamiento preferencial",
          correct: true,
        },
        {
          label: "Declarar NAFTA aplicable porque el país exportador es EE. UU.",
          correct: false,
        },
      ],
    },
    {
      id: "journey-trs-004",
      title: "Semáforo documental previo",
      scenario:
        "El sistema marca riesgo documental medio por inconsistencia descriptiva en la subpartida.",
      iconName: "AlertTriangle",
      options: [
        {
          label: "Avanzar el pedimento para evitar demoras en patio fiscal",
          correct: false,
        },
        {
          label:
            "Preparar aclaración técnica y evidencia de reclasificación antes de solicitar libre tránsito",
          correct: true,
        },
        {
          label: "Solicitar liberación bajo garantía sin exhibir documentos adicionales",
          correct: false,
        },
      ],
    },
  ],
};

const journeyAereo = {
  caseKey: "aereo_instrumental",
  expediente: [
    {
      id: "journey-aer-001",
      title: "Arribo al AICM y manejo de carga aérea",
      scenario:
        "El vuelo de carga aterriza en la plataforma; el almacenista coordina descarga hacia recinto fiscal.",
      iconName: "Plane",
      options: [
        {
          label: "Retirar la carga directamente al almacén del cliente sin aviso al recinto",
          correct: false,
        },
        {
          label:
            "Confirmar arribo, AWB y cadena de custodia hacia el almacén fiscal autorizado",
          correct: true,
        },
        {
          label: "Declarar la carga como equipaje acompañado para agilizar",
          correct: false,
        },
      ],
    },
    {
      id: "journey-aer-002",
      title: "AWB — consistencia con factura y embalaje",
      scenario:
        "La guía aérea indica dos bultos; la factura lista tres maletas con numeración distinta.",
      iconName: "FileText",
      options: [
        {
          label: "Usar la factura como única referencia y omitir bultos en AWB",
          correct: false,
        },
        {
          label:
            "Conciliar bultos, pesos y referencias seriadas con el transportista antes de cerrar el expediente",
          correct: true,
        },
        {
          label: "Modificar el AWB sin intervención de la aerolínea",
          correct: false,
        },
      ],
    },
    {
      id: "journey-aer-003",
      title: "Regulación sanitaria y etiquetado",
      scenario:
        "COFEPRIS solicita comprobar lote y etiquetado multilenguaje según registro vigente.",
      iconName: "Stamp",
      options: [
        {
          label: "Presentar registro de un modelo distinto por ser de la misma familia de producto",
          correct: false,
        },
        {
          label:
            "Alinear rotulación, serie y registro sanitario con la mercancía física exhibida",
          correct: true,
        },
        {
          label: "Declarar exención sanitaria por tratarse de equipo usado",
          correct: false,
        },
      ],
    },
    {
      id: "journey-aer-004",
      title: "Semáforo y revisión documental",
      scenario:
        "El semáforo muestra alerta por discrepancia entre documentos digitales y escaneos.",
      iconName: "AlertTriangle",
      options: [
        {
          label: "Presentar el pedimento con la versión impresa no legible",
          correct: false,
        },
        {
          label:
            "Subsanar archivos y metadatos para que el expediente digital sea homogéneo",
          correct: true,
        },
        {
          label: "Ignorar la alerta si el agente aduanal ya validó verbalmente",
          correct: false,
        },
      ],
    },
  ],
};

const journeyMaritimoTextiles = {
  caseKey: "maritimo_textiles",
  expediente: [
    {
      id: "journey-mtx-001",
      title: "Arribo de contenedor a Veracruz",
      scenario:
        "El buque atraca y se asigna ventana para descarga y reconocimiento de contenedor textiles.",
      iconName: "Ship",
      options: [
        {
          label: "Iniciar el pedimento antes de tener el conocimiento electrónico",
          correct: false,
        },
        {
          label:
            "Validar conocimiento electrónico, sello intacto y cita ante el recinto antes de programa de muestreo",
          correct: true,
        },
        {
          label:
            "Solicitar traslado a bodega particular sin revisar peso bruto declarado",
          correct: false,
        },
      ],
    },
    {
      id: "journey-mtx-002",
      title: "Packing list vs. marca de volumen fibra/peso",
      scenario:
        "El packing lista mezclas de bobinas sin detallar proporción de fibras sintéticas en cada rollo.",
      iconName: "FileText",
      options: [
        {
          label: "Declara ‘100% algodón’ porque la factura así lo indica",
          correct: false,
        },
        {
          label:
            "Exigir desglose por rollo o certificado de composición coherente con la fracción textil",
          correct: true,
        },
        {
          label: "Omitir el detalle por tratarse de mercancía de bajo valor",
          correct: false,
        },
      ],
    },
    {
      id: "journey-mtx-003",
      title: "Origen y tratados preferenciales",
      scenario:
        "El certificado de origen menciona ‘ASEAN’ genérico sin anexar desglose de transformación regional.",
      iconName: "Stamp",
      options: [
        {
          label: "Registrar preferencia arancelaria automáticamente",
          correct: false,
        },
        {
          label:
            "Verificar criterio de origen y anexos probatorios antes de aplicar preferencia",
          correct: true,
        },
        {
          label: "Ignorar el certificado y aplicar arancel MFN sin análisis",
          correct: false,
        },
      ],
    },
    {
      id: "journey-mtx-004",
      title: "Muestreo en reconocimiento",
      scenario:
        "El analista propone muestreo por posible mezcla fibra no declarada.",
      iconName: "AlertTriangle",
      options: [
        {
          label: "Rechazar el muestreo para no retrasar la descarga",
          correct: false,
        },
        {
          label:
            "Coordinar muestreo representativo y custodia de evidencia para reclasificación si aplica",
          correct: true,
        },
        {
          label: "Sustituir por fotografías del proveedor",
          correct: false,
        },
      ],
    },
  ],
};

fs.writeFileSync(
  path.join(casesDir, "terrestre_autopartes.json"),
  JSON.stringify(terrestre, null, 2),
);
fs.writeFileSync(
  path.join(casesDir, "aereo_instrumental.json"),
  JSON.stringify(aereo, null, 2),
);
fs.writeFileSync(
  path.join(casesDir, "maritimo_textiles.json"),
  JSON.stringify(maritimoTextiles, null, 2),
);
fs.writeFileSync(
  path.join(journeyDir, "terrestre_autopartes.json"),
  JSON.stringify(journeyTerrestre, null, 2),
);
fs.writeFileSync(
  path.join(journeyDir, "aereo_instrumental.json"),
  JSON.stringify(journeyAereo, null, 2),
);
fs.writeFileSync(
  path.join(journeyDir, "maritimo_textiles.json"),
  JSON.stringify(journeyMaritimoTextiles, null, 2),
);

console.log("Escritos 3 casos + 3 journey JSON.");
console.log("Terrestre VAD", tVad, "IGI", tIgi);
console.log("Aéreo VAD", aVad, "IGI", aIgi);
console.log("Textiles VAD", mVad, "IGI", mIgi);
