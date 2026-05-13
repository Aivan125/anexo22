import type { QuizQuestion, FormField, ValidationRule } from "./simulator-data";

export interface CaseInfo {
  id: string;
  title: string;
  context: string;
  importer: { name: string; rfc: string; city: string };
  supplier: { name: string; countryExport: string; countryOrigin: string };
  goods: { description: string; quantity: number; unitValueUsd: number; invoiceValueUsd: number };
  terms: {
    incoterm: string;
    freightUsd: number;
    insuranceUsd: number;
    packingUsd: number;
    exchangeRate: number;
    transportMode: string;
    customsOffice: string;
    regimeExpected: string;
  };
  tariff: { tariffCode: string; igiRate: number; ivaRate: number; dtaRate: number };
  risk: { type: string; title: string; description: string; impact: string };
  infraction: { legalBasis: string; description: string; detectedBy: string };
  sanction: { legalBasis: string; fineRange: string; estimatedFine: string; additional: string[] };
}

export interface CaseBundle {
  key: string;
  label: string;
  shortLabel: string;
  mode: "Marítimo" | "Terrestre" | "Aéreo";
  isExample: boolean;
  route: { from: string; to: string };
  case: CaseInfo;
  analysisQuestions: QuizQuestion[];
  decisionQuestions: QuizQuestion[];
  controversyQuestions: QuizQuestion[];
  pedimentoFields: FormField[];
  taxFields: FormField[];
  validationRules: ValidationRule[];
}

/* =========================================================
 *  CASO 1 — MARÍTIMO (EJEMPLO DEMOSTRATIVO)
 * ========================================================= */
const CASE_MARITIMO_EJEMPLO: CaseBundle = {
  key: "maritimo_ejemplo",
  label: "Caso ejemplo — Importación marítima de tabletas (China → Manzanillo)",
  shortLabel: "Marítimo · Tabletas (Ejemplo)",
  mode: "Marítimo",
  isExample: true,
  route: { from: "Shanghai", to: "Manzanillo" },
  case: {
    id: "CASO-001",
    title: "Importación definitiva de equipo electrónico",
    context:
      "La empresa ANMINCADISA Imports, S.A. de C.V. realizará la importación definitiva de tabletas electrónicas procedentes de China, con arribo marítimo a la aduana de Manzanillo.",
    importer: { name: "ANMINCADISA Imports, S.A. de C.V.", rfc: "ANI240101AB1", city: "Monterrey, Nuevo León" },
    supplier: { name: "Shenzhen Smart Devices Co., Ltd.", countryExport: "China", countryOrigin: "China" },
    goods: { description: "Tablet electrónica de 10 pulgadas para uso administrativo", quantity: 100, unitValueUsd: 120, invoiceValueUsd: 12000 },
    terms: { incoterm: "FOB Shanghai", freightUsd: 1200, insuranceUsd: 150, packingUsd: 100, exchangeRate: 17.2, transportMode: "Marítimo", customsOffice: "Manzanillo", regimeExpected: "Importación definitiva" },
    tariff: { tariffCode: "8471.30.01", igiRate: 0.15, ivaRate: 0.16, dtaRate: 0.008 },
    risk: {
      type: "Riesgo documental y fiscal",
      title: "Discrepancia en el Certificado de Origen",
      description:
        "Durante la revisión documental previa al despacho, la autoridad aduanera detecta que el Certificado de Origen presentado por ANMINCADISA declara como país de origen 'Hong Kong', mientras que la factura comercial y el Bill of Lading indican 'China continental (Shenzhen)'. Adicionalmente, la descripción de la mercancía en el pedimento omite las características técnicas (pulgadas y uso) requeridas para validar la fracción arancelaria 8471.30.01.",
      impact:
        "La inconsistencia entre documentos invalida el certificado de origen y genera una declaración inexacta en el pedimento, lo que constituye una infracción a las obligaciones del importador.",
    },
    infraction: {
      legalBasis: "Artículo 184, fracción III de la Ley Aduanera",
      description:
        "Presentar el pedimento con datos inexactos o falsos, u omitir alguno de ellos, cuando se altere la información estadística, el cumplimiento de regulaciones y restricciones no arancelarias o la determinación correcta de las contribuciones.",
      detectedBy: "Reconocimiento aduanero (semáforo rojo) en la aduana de Manzanillo.",
    },
    sanction: {
      legalBasis: "Artículo 185, fracción II de la Ley Aduanera",
      fineRange: "Multa del 70% al 100% del beneficio indebido o de las contribuciones omitidas",
      estimatedFine: "Entre $24,290.70 y $34,701.00 MXN (calculado sobre el IGI de la operación)",
      additional: [
        "Suspensión temporal del padrón de importadores si se reincide.",
        "Pago de actualizaciones y recargos conforme al CFF.",
        "Posible embargo precautorio de la mercancía hasta subsanar la inconsistencia.",
      ],
    },
  },
  analysisQuestions: [
    { id: "q1", text: "¿Qué tipo de operación se está realizando?", options: ["Exportación definitiva", "Importación definitiva", "Retorno virtual", "Tránsito interno"], correctAnswer: "Importación definitiva", points: 3 },
    { id: "q2", text: "¿Cuál es el régimen aduanero aplicable?", options: ["Temporal para elaboración", "Importación definitiva", "Depósito fiscal", "Recinto fiscalizado estratégico"], correctAnswer: "Importación definitiva", points: 3 },
    { id: "q3", text: "¿Cuál es el país de origen de la mercancía?", options: ["México", "Estados Unidos", "China", "Japón"], correctAnswer: "China", points: 3 },
    { id: "q4", text: "¿Cuál es el medio de transporte de arribo?", options: ["Aéreo", "Ferroviario", "Marítimo", "Fluvial"], correctAnswer: "Marítimo", points: 3 },
    { id: "q5", text: "¿Qué Incoterm se pactó en la operación?", options: ["CIF", "EXW", "DDP", "FOB"], correctAnswer: "FOB", points: 3 },
  ],
  decisionQuestions: [
    { id: "q6", text: "Selecciona el método de valoración aplicable", options: ["Valor de transacción", "Valor de mercancías idénticas", "Valor de mercancías similares", "Método deductivo"], correctAnswer: "Valor de transacción", points: 5 },
    { id: "q7", text: "Selecciona los conceptos incrementables", options: ["Flete internacional", "Seguro internacional", "Embalaje", "Todos los anteriores", "Ninguno"], correctAnswer: "Todos los anteriores", points: 5 },
    { id: "q8", text: "La base del valor en aduana debe construirse a partir de:", options: ["Solo valor factura", "Valor factura + incrementables", "Valor factura + IVA", "Valor factura + DTA"], correctAnswer: "Valor factura + incrementables", points: 5 },
  ],
  controversyQuestions: [
    { id: "c1", text: "¿Qué tipo de riesgo representa la discrepancia entre el Certificado de Origen (Hong Kong) y la factura/BL (China continental)?", options: ["Riesgo operativo", "Riesgo documental y fiscal", "Riesgo cambiario", "Riesgo logístico"], correctAnswer: "Riesgo documental y fiscal", points: 5 },
    { id: "c2", text: "¿En qué momento del despacho se detecta la irregularidad descrita en el caso?", options: ["Revisión previa del importador", "Reconocimiento aduanero (semáforo rojo)", "Auditoría posterior del SAT", "Embarque en origen"], correctAnswer: "Reconocimiento aduanero (semáforo rojo)", points: 4 },
    { id: "c3", text: "¿Cuál es la infracción cometida según la Ley Aduanera?", options: ["Art. 176 fracc. I — Importar sin pedimento", "Art. 184 fracc. III — Datos inexactos u omitidos en el pedimento", "Art. 178 fracc. IV — Mercancía prohibida", "Art. 183-A — Mercancía pasa a propiedad del fisco"], correctAnswer: "Art. 184 fracc. III — Datos inexactos u omitidos en el pedimento", points: 6 },
    { id: "c4", text: "¿Cuál es la sanción aplicable conforme al Art. 185 fracc. II de la Ley Aduanera?", options: ["Multa fija de $5,000 MXN", "Multa del 70% al 100% del beneficio indebido o contribuciones omitidas", "Cancelación inmediata del RFC", "Pena privativa de la libertad obligatoria"], correctAnswer: "Multa del 70% al 100% del beneficio indebido o contribuciones omitidas", points: 6 },
    { id: "c5", text: "Además de la multa económica, ¿qué consecuencia adicional puede enfrentar el importador?", options: ["Devolución automática del IVA", "Suspensión temporal del padrón de importadores en caso de reincidencia", "Exención de DTA en futuras operaciones", "Reducción del IGI al 0%"], correctAnswer: "Suspensión temporal del padrón de importadores en caso de reincidencia", points: 4 },
  ],
  pedimentoFields: [
    { id: "operationType", label: "Tipo de operación", type: "select", expected: "Importación", points: 4, selectOptions: ["Importación", "Exportación", "Tránsito"] },
    { id: "pedimentoKey", label: "Clave de pedimento", type: "select", expected: "A1", points: 4, selectOptions: ["A1", "A3", "BP", "C1", "F4"] },
    { id: "regime", label: "Régimen", type: "select", expected: "Definitivo", points: 4, selectOptions: ["Definitivo", "Temporal", "Depósito fiscal", "Tránsito", "Recinto fiscalizado"] },
    { id: "customsOffice", label: "Aduana", type: "select", expected: "Manzanillo", points: 4, selectOptions: ["Manzanillo", "Veracruz", "Lázaro Cárdenas", "Altamira", "Nuevo Laredo"] },
    { id: "transportMode", label: "Medio de transporte", type: "select", expected: "Marítimo", points: 4, selectOptions: ["Marítimo", "Aéreo", "Terrestre", "Ferroviario", "Fluvial"] },
    { id: "invoiceValueUsd", label: "Valor factura USD", type: "select", expected: "12000", points: 4, selectOptions: ["10000", "12000", "13450", "15000"] },
    { id: "freightUsd", label: "Flete USD", type: "select", expected: "1200", points: 4, selectOptions: ["800", "1000", "1200", "1500"] },
    { id: "insuranceUsd", label: "Seguro USD", type: "select", expected: "150", points: 4, selectOptions: ["100", "120", "150", "200"] },
    { id: "packingUsd", label: "Embalaje USD", type: "select", expected: "100", points: 4, selectOptions: ["50", "100", "150", "200"] },
    { id: "exchangeRate", label: "Tipo de cambio", type: "select", expected: "17.2", points: 4, selectOptions: ["16.8", "17.0", "17.2", "17.5", "18.0"] },
    { id: "customsValueMxn", label: "Valor en aduana MXN", type: "select", expected: "231340", points: 10, selectOptions: ["206400", "228760", "231340", "233920", "240000"] },
    { id: "tariffCode", label: "Fracción arancelaria", type: "select", expected: "8471.30.01", points: 6, selectOptions: ["8471.30.01", "8471.41.01", "8517.12.02", "8528.72.06"] },
    { id: "goodsDescription", label: "Descripción", type: "select", expected: "Tablet electrónica de 10 pulgadas para uso administrativo", points: 4, selectOptions: ["Tablet electrónica de 10 pulgadas para uso administrativo", "Computadora portátil de 14 pulgadas", "Teléfono celular inteligente", "Pantalla LED de 10 pulgadas"] },
    { id: "quantity", label: "Cantidad", type: "select", expected: "100", points: 4, selectOptions: ["50", "100", "120", "150", "200"] },
    { id: "originCountry", label: "País de origen", type: "select", expected: "China", points: 4, selectOptions: ["China", "Japón", "Corea del Sur", "Estados Unidos", "México"] },
  ],
  taxFields: [
    { id: "igi", label: "IGI", type: "select", expected: "34701.00", points: 8, selectOptions: ["31250.00", "34701.00", "37500.00", "40180.00"], formula: { title: "IGI — Impuesto General de Importación", expression: "IGI = Valor en Aduana × Tasa arancelaria", explanation: "Se aplica la tasa de la fracción arancelaria (TIGIE) al valor en aduana en MXN.", example: "231,340.00 × 15% = 34,701.00 MXN" } },
    { id: "dta", label: "DTA", type: "select", expected: "1850.72", points: 6, selectOptions: ["1620.50", "1850.72", "2100.00", "2310.40"], formula: { title: "DTA — Derecho de Trámite Aduanero", expression: "DTA = Valor en Aduana × 0.008 (8 al millar)", explanation: "Para importación definitiva con pedimento A1 se aplica el 8 al millar sobre el valor en aduana.", example: "231,340.00 × 0.008 = 1,850.72 MXN" } },
    { id: "ivaBase", label: "Base IVA", type: "select", expected: "267891.72", points: 8, selectOptions: ["231340.00", "266041.00", "267891.72", "272500.00"], formula: { title: "Base gravable del IVA", expression: "Base IVA = Valor en Aduana + IGI + DTA", explanation: "El IVA en importación se calcula sobre la base que incluye el valor en aduana más todas las contribuciones causadas (Art. 27 LIVA).", example: "231,340.00 + 34,701.00 + 1,850.72 = 267,891.72 MXN" } },
    { id: "iva", label: "IVA", type: "select", expected: "42862.68", points: 8, selectOptions: ["37014.40", "42862.68", "44120.00", "46582.10"], formula: { title: "IVA — Impuesto al Valor Agregado", expression: "IVA = Base IVA × 16%", explanation: "Se aplica la tasa general del 16% sobre la base gravable integrada.", example: "267,891.72 × 16% = 42,862.68 MXN" } },
    { id: "totalTaxes", label: "Total contribuciones", type: "select", expected: "79414.40", points: 8, selectOptions: ["72180.00", "76551.40", "79414.40", "82900.00"], formula: { title: "Total de contribuciones a pagar", expression: "Total = IGI + DTA + IVA", explanation: "Suma de todas las contribuciones causadas por la operación de importación.", example: "34,701.00 + 1,850.72 + 42,862.68 = 79,414.40 MXN" } },
  ],
  validationRules: [
    { ifField: "regime", notEquals: "Definitivo", message: "Error crítico: El régimen seleccionado no corresponde a una operación de importación definitiva.", severity: "high" },
    { ifField: "customsValueMxn", notInToleranceOf: 231340, message: "Observación: El valor en aduana no fue integrado correctamente. Revisa incrementables y tipo de cambio.", severity: "high" },
    { ifField: "tariffCode", notEquals: "8471.30.01", message: "Alerta: La fracción arancelaria capturada es inconsistente con la mercancía declarada.", severity: "medium" },
    { ifField: "igi", notInToleranceOf: 34701.0, message: "Error de cálculo: El IGI no coincide con la base gravable declarada.", severity: "high" },
    { ifField: "iva", notInToleranceOf: 42862.68, message: "Error de integración fiscal: La base del IVA debe considerar valor en aduana, IGI y DTA.", severity: "high" },
  ],
};

/* =========================================================
 *  CASO 2 — TERRESTRE (autopartes Texas → Nuevo Laredo)
 *  Valor factura USD 25,000 + flete 800 + seguro 250 + embalaje 150 = 26,200
 *  Valor en aduana = 26,200 × 18.40 = 482,080 MXN
 *  IGI 10% = 48,208.00
 *  DTA 0.008 = 3,856.64
 *  Base IVA = 482,080 + 48,208 + 3,856.64 = 534,144.64
 *  IVA 16% = 85,463.14
 *  Total = 137,527.78
 * ========================================================= */
const CASE_TERRESTRE: CaseBundle = {
  key: "terrestre_autopartes",
  label: "Caso terrestre — Importación de autopartes (USA → Nuevo Laredo)",
  shortLabel: "Terrestre · Autopartes",
  mode: "Terrestre",
  isExample: false,
  route: { from: "Laredo, TX", to: "Nuevo Laredo" },
  case: {
    id: "CASO-002",
    title: "Importación definitiva de autopartes por vía terrestre",
    context:
      "La empresa Refacciones del Bajío, S.A. de C.V. importa un lote de autopartes (bombas de combustible) procedentes de Estados Unidos, con cruce terrestre por el puente Colombia, aduana de Nuevo Laredo.",
    importer: { name: "Refacciones del Bajío, S.A. de C.V.", rfc: "RBA230315QF3", city: "León, Guanajuato" },
    supplier: { name: "AutoParts USA Inc.", countryExport: "Estados Unidos", countryOrigin: "Estados Unidos" },
    goods: { description: "Bombas de combustible para motor de gasolina, uso automotriz", quantity: 500, unitValueUsd: 50, invoiceValueUsd: 25000 },
    terms: { incoterm: "FCA Laredo", freightUsd: 800, insuranceUsd: 250, packingUsd: 150, exchangeRate: 18.4, transportMode: "Terrestre", customsOffice: "Nuevo Laredo", regimeExpected: "Importación definitiva" },
    tariff: { tariffCode: "8413.30.99", igiRate: 0.10, ivaRate: 0.16, dtaRate: 0.008 },
    risk: {
      type: "Riesgo de origen y arancelario",
      title: "Mercancía sin certificación T-MEC presentada al despacho",
      description:
        "El operador no presentó la Certificación de Origen T-MEC al momento del despacho, por lo que el beneficio arancelario preferencial (0%) no puede aplicarse y debe pagarse el IGI a tasa general. Además, la factura no desglosa el costo del flete prepagado, generando duda razonable sobre el valor en aduana.",
      impact:
        "Se cobra IGI a tasa general en lugar de la tasa preferencial T-MEC y la autoridad puede iniciar PAMA por subvaluación si no se acredita el desglose.",
    },
    infraction: {
      legalBasis: "Artículo 184, fracción II de la Ley Aduanera",
      description:
        "Omitir presentar a las autoridades aduaneras la documentación que ampare el cumplimiento de regulaciones, restricciones no arancelarias o el origen preferencial de la mercancía al momento del despacho.",
      detectedBy: "Reconocimiento aduanero terrestre (semáforo rojo) en aduana de Nuevo Laredo.",
    },
    sanction: {
      legalBasis: "Artículo 185, fracción I de la Ley Aduanera",
      fineRange: "Multa del 70% al 100% de los impuestos no preferenciales causados",
      estimatedFine: "Aproximadamente $33,745.00 a $48,208.00 MXN",
      additional: [
        "Pérdida del trato arancelario preferencial T-MEC para esa operación.",
        "Inicio de PAMA si la subvaluación se confirma.",
        "Recargos y actualizaciones por pago extemporáneo del IGI.",
      ],
    },
  },
  analysisQuestions: [
    { id: "q1", text: "¿Qué tipo de operación se está realizando?", options: ["Exportación definitiva", "Importación definitiva", "Tránsito internacional", "Retorno virtual"], correctAnswer: "Importación definitiva", points: 3 },
    { id: "q2", text: "¿Cuál es el régimen aduanero aplicable?", options: ["Importación temporal IMMEX", "Importación definitiva", "Depósito fiscal", "Tránsito interno"], correctAnswer: "Importación definitiva", points: 3 },
    { id: "q3", text: "¿Cuál es el país de origen de la mercancía?", options: ["México", "Estados Unidos", "Canadá", "China"], correctAnswer: "Estados Unidos", points: 3 },
    { id: "q4", text: "¿Cuál es el medio de transporte de arribo?", options: ["Aéreo", "Marítimo", "Terrestre", "Fluvial"], correctAnswer: "Terrestre", points: 3 },
    { id: "q5", text: "¿Qué Incoterm se pactó en la operación?", options: ["CIF", "EXW", "FCA", "DDP"], correctAnswer: "FCA", points: 3 },
  ],
  decisionQuestions: [
    { id: "q6", text: "Selecciona el método de valoración aplicable", options: ["Valor de transacción", "Valor de mercancías idénticas", "Valor reconstruido", "Método deductivo"], correctAnswer: "Valor de transacción", points: 5 },
    { id: "q7", text: "¿Cuáles conceptos son incrementables al valor en aduana?", options: ["Solo el flete", "Flete + seguro + embalaje", "Solo el embalaje", "Ninguno"], correctAnswer: "Flete + seguro + embalaje", points: 5 },
    { id: "q8", text: "Para aplicar tasa preferencial T-MEC, el importador requiere:", options: ["Solo factura", "Certificación de origen T-MEC vigente", "Permiso sanitario", "Padrón sectorial"], correctAnswer: "Certificación de origen T-MEC vigente", points: 5 },
  ],
  controversyQuestions: [
    { id: "c1", text: "¿Qué tipo de riesgo representa la falta de Certificación de Origen T-MEC al despacho?", options: ["Riesgo logístico", "Riesgo arancelario y de origen", "Riesgo cambiario", "Riesgo sanitario"], correctAnswer: "Riesgo arancelario y de origen", points: 5 },
    { id: "c2", text: "¿En qué momento se detecta la irregularidad?", options: ["Auditoría posterior", "Reconocimiento aduanero (semáforo rojo) terrestre", "Carga del transporte", "Validación electrónica previa"], correctAnswer: "Reconocimiento aduanero (semáforo rojo) terrestre", points: 4 },
    { id: "c3", text: "¿Cuál es la infracción cometida?", options: ["Art. 176 fracc. II — Mercancía sin pedimento", "Art. 184 fracc. II — Omitir documentación de origen al despacho", "Art. 178 fracc. I — Mercancía prohibida", "Art. 183 fracc. IV — Subvaluación dolosa"], correctAnswer: "Art. 184 fracc. II — Omitir documentación de origen al despacho", points: 6 },
    { id: "c4", text: "¿Cuál es la sanción aplicable conforme al Art. 185 fracc. I de la Ley Aduanera?", options: ["Multa fija de $1,000 MXN", "Multa del 70% al 100% de impuestos no preferenciales causados", "Decomiso inmediato", "Cancelación del RFC"], correctAnswer: "Multa del 70% al 100% de impuestos no preferenciales causados", points: 6 },
    { id: "c5", text: "Consecuencia adicional para el importador:", options: ["Aplicación automática del trato T-MEC", "Pérdida del trato preferencial e inicio de PAMA por subvaluación", "Devolución de IVA", "Reducción del DTA"], correctAnswer: "Pérdida del trato preferencial e inicio de PAMA por subvaluación", points: 4 },
  ],
  pedimentoFields: [
    { id: "operationType", label: "Tipo de operación", type: "select", expected: "Importación", points: 4, selectOptions: ["Importación", "Exportación", "Tránsito"] },
    { id: "pedimentoKey", label: "Clave de pedimento", type: "select", expected: "A1", points: 4, selectOptions: ["A1", "A3", "BP", "C1", "F4"] },
    { id: "regime", label: "Régimen", type: "select", expected: "Definitivo", points: 4, selectOptions: ["Definitivo", "Temporal", "Depósito fiscal", "Tránsito"] },
    { id: "customsOffice", label: "Aduana", type: "select", expected: "Nuevo Laredo", points: 4, selectOptions: ["Manzanillo", "Veracruz", "Nuevo Laredo", "Ciudad Juárez", "Tijuana"] },
    { id: "transportMode", label: "Medio de transporte", type: "select", expected: "Terrestre", points: 4, selectOptions: ["Marítimo", "Aéreo", "Terrestre", "Ferroviario"] },
    { id: "invoiceValueUsd", label: "Valor factura USD", type: "select", expected: "25000", points: 4, selectOptions: ["20000", "22500", "25000", "27500"] },
    { id: "freightUsd", label: "Flete USD", type: "select", expected: "800", points: 4, selectOptions: ["500", "650", "800", "1000"] },
    { id: "insuranceUsd", label: "Seguro USD", type: "select", expected: "250", points: 4, selectOptions: ["100", "150", "250", "350"] },
    { id: "packingUsd", label: "Embalaje USD", type: "select", expected: "150", points: 4, selectOptions: ["50", "100", "150", "200"] },
    { id: "exchangeRate", label: "Tipo de cambio", type: "select", expected: "18.4", points: 4, selectOptions: ["17.8", "18.0", "18.4", "18.8", "19.0"] },
    { id: "customsValueMxn", label: "Valor en aduana MXN", type: "select", expected: "482080", points: 10, selectOptions: ["460000", "478400", "482080", "490000", "500000"] },
    { id: "tariffCode", label: "Fracción arancelaria", type: "select", expected: "8413.30.99", points: 6, selectOptions: ["8413.30.99", "8708.10.01", "8708.99.99", "8409.91.99"] },
    { id: "goodsDescription", label: "Descripción", type: "select", expected: "Bombas de combustible para motor de gasolina, uso automotriz", points: 4, selectOptions: ["Bombas de combustible para motor de gasolina, uso automotriz", "Filtros de aceite", "Bujías de encendido", "Catalizadores"] },
    { id: "quantity", label: "Cantidad", type: "select", expected: "500", points: 4, selectOptions: ["250", "400", "500", "600", "750"] },
    { id: "originCountry", label: "País de origen", type: "select", expected: "Estados Unidos", points: 4, selectOptions: ["México", "Canadá", "Estados Unidos", "China", "Alemania"] },
  ],
  taxFields: [
    { id: "igi", label: "IGI", type: "select", expected: "48208.00", points: 8, selectOptions: ["46000.00", "48208.00", "50000.00", "52400.00"], formula: { title: "IGI — Impuesto General de Importación", expression: "IGI = Valor en Aduana × Tasa arancelaria", explanation: "Sin certificación de origen T-MEC se aplica la tasa general del 10%.", example: "482,080.00 × 10% = 48,208.00 MXN" } },
    { id: "dta", label: "DTA", type: "select", expected: "3856.64", points: 6, selectOptions: ["3500.00", "3856.64", "4100.00", "4500.00"], formula: { title: "DTA — Derecho de Trámite Aduanero", expression: "DTA = Valor en Aduana × 0.008", explanation: "Para pedimento A1 se aplica el 8 al millar sobre el valor en aduana.", example: "482,080.00 × 0.008 = 3,856.64 MXN" } },
    { id: "ivaBase", label: "Base IVA", type: "select", expected: "534144.64", points: 8, selectOptions: ["482080.00", "530288.00", "534144.64", "540000.00"], formula: { title: "Base gravable del IVA", expression: "Base IVA = Valor en Aduana + IGI + DTA", explanation: "Art. 27 LIVA — base integrada con incrementables y contribuciones.", example: "482,080 + 48,208 + 3,856.64 = 534,144.64 MXN" } },
    { id: "iva", label: "IVA", type: "select", expected: "85463.14", points: 8, selectOptions: ["77132.80", "85463.14", "87000.00", "90000.00"], formula: { title: "IVA — Impuesto al Valor Agregado", expression: "IVA = Base IVA × 16%", explanation: "Tasa general del 16%.", example: "534,144.64 × 16% = 85,463.14 MXN" } },
    { id: "totalTaxes", label: "Total contribuciones", type: "select", expected: "137527.78", points: 8, selectOptions: ["130000.00", "135000.00", "137527.78", "142000.00"], formula: { title: "Total de contribuciones", expression: "Total = IGI + DTA + IVA", explanation: "Suma de todas las contribuciones causadas.", example: "48,208 + 3,856.64 + 85,463.14 = 137,527.78 MXN" } },
  ],
  validationRules: [
    { ifField: "regime", notEquals: "Definitivo", message: "Error crítico: El régimen no corresponde a importación definitiva.", severity: "high" },
    { ifField: "customsValueMxn", notInToleranceOf: 482080, message: "Observación: El valor en aduana no incluye correctamente flete, seguro y embalaje.", severity: "high" },
    { ifField: "tariffCode", notEquals: "8413.30.99", message: "Alerta: La fracción arancelaria no corresponde a bombas de combustible.", severity: "medium" },
    { ifField: "igi", notInToleranceOf: 48208.0, message: "Error de cálculo: El IGI no coincide con la tasa general del 10%.", severity: "high" },
    { ifField: "iva", notInToleranceOf: 85463.14, message: "Error de integración fiscal: la base del IVA debe sumar IGI y DTA al valor en aduana.", severity: "high" },
  ],
};

/* =========================================================
 *  CASO 3 — AÉREO (instrumental médico Alemania → AICM)
 *  Valor factura USD 18,000 + flete 2,500 + seguro 350 + embalaje 200 = 21,050
 *  Valor en aduana = 21,050 × 17.50 = 368,375 MXN
 *  IGI 5% = 18,418.75
 *  DTA 0.008 = 2,947.00
 *  Base IVA = 368,375 + 18,418.75 + 2,947 = 389,740.75
 *  IVA 16% = 62,358.52
 *  Total = 83,724.27
 * ========================================================= */
const CASE_AEREO: CaseBundle = {
  key: "aereo_medico",
  label: "Caso aéreo — Importación de instrumental médico (Alemania → AICM)",
  shortLabel: "Aéreo · Instrumental médico",
  mode: "Aéreo",
  isExample: false,
  route: { from: "Frankfurt", to: "AICM (Ciudad de México)" },
  case: {
    id: "CASO-003",
    title: "Importación definitiva de instrumental médico por vía aérea",
    context:
      "El laboratorio MediCare México, S.A. de C.V. realiza la importación urgente de instrumental médico quirúrgico esterilizable procedente de Alemania, con arribo aéreo al AICM.",
    importer: { name: "MediCare México, S.A. de C.V.", rfc: "MMC220512LH8", city: "Ciudad de México" },
    supplier: { name: "Karl Medizintechnik GmbH", countryExport: "Alemania", countryOrigin: "Alemania" },
    goods: { description: "Instrumental médico quirúrgico esterilizable de acero inoxidable", quantity: 300, unitValueUsd: 60, invoiceValueUsd: 18000 },
    terms: { incoterm: "CIP AICM", freightUsd: 2500, insuranceUsd: 350, packingUsd: 200, exchangeRate: 17.5, transportMode: "Aéreo", customsOffice: "Aeropuerto Internacional de la Ciudad de México", regimeExpected: "Importación definitiva" },
    tariff: { tariffCode: "9018.90.99", igiRate: 0.05, ivaRate: 0.16, dtaRate: 0.008 },
    risk: {
      type: "Riesgo regulatorio sanitario",
      title: "Falta de Aviso Sanitario / Permiso COFEPRIS al despacho",
      description:
        "La mercancía clasificada como instrumental médico está sujeta a regulación sanitaria por COFEPRIS. Al momento del despacho aéreo, el agente aduanal no acredita el aviso sanitario de importación correspondiente, lo que constituye una restricción no arancelaria incumplida.",
      impact:
        "La mercancía queda retenida en almacén fiscal hasta acreditar la regulación sanitaria, generando demoras, costos de almacenaje y posible decomiso.",
    },
    infraction: {
      legalBasis: "Artículo 176, fracción II de la Ley Aduanera",
      description:
        "Introducir al territorio nacional mercancías sujetas a regulaciones o restricciones no arancelarias sin cumplirlas (en este caso, el aviso sanitario COFEPRIS).",
      detectedBy: "Reconocimiento aduanero aéreo (semáforo rojo) en AICM, sección de carga.",
    },
    sanction: {
      legalBasis: "Artículo 178, fracción IV de la Ley Aduanera",
      fineRange: "Multa del 70% al 100% del valor comercial de la mercancía",
      estimatedFine: "Aproximadamente $257,862.50 a $368,375.00 MXN",
      additional: [
        "Embargo precautorio de la mercancía hasta acreditar la regulación.",
        "Posible destrucción si no se subsana en el plazo legal.",
        "Cargos por almacenaje en recinto fiscalizado.",
      ],
    },
  },
  analysisQuestions: [
    { id: "q1", text: "¿Qué tipo de operación se realiza?", options: ["Exportación definitiva", "Importación definitiva", "Depósito fiscal", "Tránsito internacional"], correctAnswer: "Importación definitiva", points: 3 },
    { id: "q2", text: "¿Cuál es el régimen aduanero aplicable?", options: ["Temporal IMMEX", "Importación definitiva", "Recinto fiscalizado estratégico", "Depósito fiscal"], correctAnswer: "Importación definitiva", points: 3 },
    { id: "q3", text: "¿Cuál es el país de origen de la mercancía?", options: ["Estados Unidos", "Alemania", "Italia", "China"], correctAnswer: "Alemania", points: 3 },
    { id: "q4", text: "¿Cuál es el medio de transporte de arribo?", options: ["Marítimo", "Terrestre", "Aéreo", "Ferroviario"], correctAnswer: "Aéreo", points: 3 },
    { id: "q5", text: "¿Qué Incoterm se pactó?", options: ["FOB", "EXW", "CIP", "DAP"], correctAnswer: "CIP", points: 3 },
  ],
  decisionQuestions: [
    { id: "q6", text: "Selecciona el método de valoración aplicable", options: ["Valor de transacción", "Valor reconstruido", "Valor deductivo", "Último recurso"], correctAnswer: "Valor de transacción", points: 5 },
    { id: "q7", text: "Bajo Incoterm CIP, ¿qué conceptos están ya incluidos en el precio facturado?", options: ["Solo mercancía", "Mercancía + flete + seguro hasta destino", "Mercancía + flete (sin seguro)", "Mercancía + impuestos"], correctAnswer: "Mercancía + flete + seguro hasta destino", points: 5 },
    { id: "q8", text: "¿Qué documento adicional se requiere para mercancía sanitaria?", options: ["Permiso SEMARNAT", "Aviso sanitario / Permiso COFEPRIS", "Certificado de origen T-MEC", "Permiso SEDENA"], correctAnswer: "Aviso sanitario / Permiso COFEPRIS", points: 5 },
  ],
  controversyQuestions: [
    { id: "c1", text: "¿Qué tipo de riesgo se presenta al no acreditar el aviso sanitario?", options: ["Riesgo cambiario", "Riesgo regulatorio sanitario (NOM/RNA)", "Riesgo arancelario", "Riesgo logístico"], correctAnswer: "Riesgo regulatorio sanitario (NOM/RNA)", points: 5 },
    { id: "c2", text: "¿Cuándo se detecta la irregularidad?", options: ["Validación electrónica previa", "Reconocimiento aduanero aéreo (semáforo rojo)", "Auditoría posterior", "En origen"], correctAnswer: "Reconocimiento aduanero aéreo (semáforo rojo)", points: 4 },
    { id: "c3", text: "¿Cuál es la infracción cometida?", options: ["Art. 184 fracc. III — Datos inexactos en pedimento", "Art. 176 fracc. II — Mercancía sujeta a regulaciones no arancelarias incumplidas", "Art. 183 fracc. I — Tránsito sin pedimento", "Art. 184 fracc. I — Pago extemporáneo"], correctAnswer: "Art. 176 fracc. II — Mercancía sujeta a regulaciones no arancelarias incumplidas", points: 6 },
    { id: "c4", text: "¿Cuál es la sanción conforme al Art. 178 fracc. IV?", options: ["Amonestación", "Multa del 70% al 100% del valor comercial de la mercancía", "Multa fija de $2,000 MXN", "Solo recargos"], correctAnswer: "Multa del 70% al 100% del valor comercial de la mercancía", points: 6 },
    { id: "c5", text: "Consecuencia adicional:", options: ["Liberación inmediata de la mercancía", "Embargo precautorio hasta acreditar la regulación, con cargos por almacenaje", "Devolución del IVA", "Cancelación de la fracción arancelaria"], correctAnswer: "Embargo precautorio hasta acreditar la regulación, con cargos por almacenaje", points: 4 },
  ],
  pedimentoFields: [
    { id: "operationType", label: "Tipo de operación", type: "select", expected: "Importación", points: 4, selectOptions: ["Importación", "Exportación", "Tránsito"] },
    { id: "pedimentoKey", label: "Clave de pedimento", type: "select", expected: "A1", points: 4, selectOptions: ["A1", "A3", "BP", "C1", "F4"] },
    { id: "regime", label: "Régimen", type: "select", expected: "Definitivo", points: 4, selectOptions: ["Definitivo", "Temporal", "Depósito fiscal", "Tránsito"] },
    { id: "customsOffice", label: "Aduana", type: "select", expected: "AICM", points: 4, selectOptions: ["AICM", "Manzanillo", "Veracruz", "Guadalajara aérea", "Nuevo Laredo"] },
    { id: "transportMode", label: "Medio de transporte", type: "select", expected: "Aéreo", points: 4, selectOptions: ["Marítimo", "Aéreo", "Terrestre", "Ferroviario"] },
    { id: "invoiceValueUsd", label: "Valor factura USD", type: "select", expected: "18000", points: 4, selectOptions: ["15000", "16500", "18000", "20000"] },
    { id: "freightUsd", label: "Flete USD", type: "select", expected: "2500", points: 4, selectOptions: ["1500", "2000", "2500", "3000"] },
    { id: "insuranceUsd", label: "Seguro USD", type: "select", expected: "350", points: 4, selectOptions: ["200", "300", "350", "450"] },
    { id: "packingUsd", label: "Embalaje USD", type: "select", expected: "200", points: 4, selectOptions: ["100", "150", "200", "300"] },
    { id: "exchangeRate", label: "Tipo de cambio", type: "select", expected: "17.5", points: 4, selectOptions: ["17.0", "17.2", "17.5", "17.8", "18.0"] },
    { id: "customsValueMxn", label: "Valor en aduana MXN", type: "select", expected: "368375", points: 10, selectOptions: ["315000", "350000", "368375", "375000", "385000"] },
    { id: "tariffCode", label: "Fracción arancelaria", type: "select", expected: "9018.90.99", points: 6, selectOptions: ["9018.90.99", "9021.10.01", "3004.90.99", "3926.90.99"] },
    { id: "goodsDescription", label: "Descripción", type: "select", expected: "Instrumental médico quirúrgico esterilizable de acero inoxidable", points: 4, selectOptions: ["Instrumental médico quirúrgico esterilizable de acero inoxidable", "Material de curación desechable", "Equipo de rayos X", "Mobiliario hospitalario"] },
    { id: "quantity", label: "Cantidad", type: "select", expected: "300", points: 4, selectOptions: ["100", "200", "300", "400", "500"] },
    { id: "originCountry", label: "País de origen", type: "select", expected: "Alemania", points: 4, selectOptions: ["Alemania", "Italia", "Estados Unidos", "Suiza", "China"] },
  ],
  taxFields: [
    { id: "igi", label: "IGI", type: "select", expected: "18418.75", points: 8, selectOptions: ["15000.00", "18418.75", "20000.00", "22000.00"], formula: { title: "IGI — Impuesto General de Importación", expression: "IGI = Valor en Aduana × Tasa arancelaria", explanation: "Tasa general aplicable a la fracción 9018.90.99 (5%).", example: "368,375.00 × 5% = 18,418.75 MXN" } },
    { id: "dta", label: "DTA", type: "select", expected: "2947.00", points: 6, selectOptions: ["2500.00", "2947.00", "3100.00", "3500.00"], formula: { title: "DTA — Derecho de Trámite Aduanero", expression: "DTA = Valor en Aduana × 0.008", explanation: "8 al millar sobre el valor en aduana en pedimento A1.", example: "368,375.00 × 0.008 = 2,947.00 MXN" } },
    { id: "ivaBase", label: "Base IVA", type: "select", expected: "389740.75", points: 8, selectOptions: ["368375.00", "386793.75", "389740.75", "395000.00"], formula: { title: "Base gravable del IVA", expression: "Base IVA = Valor en Aduana + IGI + DTA", explanation: "Art. 27 LIVA.", example: "368,375 + 18,418.75 + 2,947 = 389,740.75 MXN" } },
    { id: "iva", label: "IVA", type: "select", expected: "62358.52", points: 8, selectOptions: ["58940.00", "62358.52", "64500.00", "67000.00"], formula: { title: "IVA — Impuesto al Valor Agregado", expression: "IVA = Base IVA × 16%", explanation: "Tasa general del 16%.", example: "389,740.75 × 16% = 62,358.52 MXN" } },
    { id: "totalTaxes", label: "Total contribuciones", type: "select", expected: "83724.27", points: 8, selectOptions: ["78500.00", "81200.00", "83724.27", "87000.00"], formula: { title: "Total de contribuciones", expression: "Total = IGI + DTA + IVA", explanation: "Suma final a pagar al fisco federal.", example: "18,418.75 + 2,947 + 62,358.52 = 83,724.27 MXN" } },
  ],
  validationRules: [
    { ifField: "regime", notEquals: "Definitivo", message: "Error crítico: El régimen no corresponde a importación definitiva.", severity: "high" },
    { ifField: "customsValueMxn", notInToleranceOf: 368375, message: "Observación: El valor en aduana no integra correctamente flete, seguro y embalaje.", severity: "high" },
    { ifField: "tariffCode", notEquals: "9018.90.99", message: "Alerta: La fracción arancelaria no corresponde a instrumental médico.", severity: "medium" },
    { ifField: "igi", notInToleranceOf: 18418.75, message: "Error de cálculo: El IGI debe ser al 5% del valor en aduana.", severity: "high" },
    { ifField: "iva", notInToleranceOf: 62358.52, message: "Error de integración fiscal: la base del IVA debe sumar IGI y DTA.", severity: "high" },
  ],
};

/* =========================================================
 *  CASO 4 — MARÍTIMO 2 (textiles Vietnam → Veracruz)
 *  Valor factura USD 35,000 + flete 1,800 + seguro 280 + embalaje 220 = 37,300
 *  Valor en aduana = 37,300 × 17.80 = 663,940 MXN
 *  IGI 25% = 165,985.00
 *  DTA 0.008 = 5,311.52
 *  Base IVA = 663,940 + 165,985 + 5,311.52 = 835,236.52
 *  IVA 16% = 133,637.84
 *  Total = 304,934.36
 * ========================================================= */
const CASE_MARITIMO_TEXTIL: CaseBundle = {
  key: "maritimo_textil",
  label: "Caso marítimo — Importación de textiles (Vietnam → Veracruz)",
  shortLabel: "Marítimo · Textiles",
  mode: "Marítimo",
  isExample: false,
  route: { from: "Ho Chi Minh", to: "Veracruz" },
  case: {
    id: "CASO-004",
    title: "Importación definitiva de textiles por vía marítima",
    context:
      "Comercializadora Textil del Golfo, S.A. de C.V. importa playeras de algodón terminadas procedentes de Vietnam, con arribo marítimo a la aduana de Veracruz.",
    importer: { name: "Comercializadora Textil del Golfo, S.A. de C.V.", rfc: "CTG210820JK4", city: "Puebla, Puebla" },
    supplier: { name: "Saigon Garments Co., Ltd.", countryExport: "Vietnam", countryOrigin: "Vietnam" },
    goods: { description: "Playeras de algodón 100% para hombre, talla M-XL", quantity: 7000, unitValueUsd: 5, invoiceValueUsd: 35000 },
    terms: { incoterm: "CFR Veracruz", freightUsd: 1800, insuranceUsd: 280, packingUsd: 220, exchangeRate: 17.8, transportMode: "Marítimo", customsOffice: "Veracruz", regimeExpected: "Importación definitiva" },
    tariff: { tariffCode: "6109.10.01", igiRate: 0.25, ivaRate: 0.16, dtaRate: 0.008 },
    risk: {
      type: "Riesgo de subvaluación (sectorial textil)",
      title: "Precio declarado por debajo del precio estimado oficial",
      description:
        "El sector textil está sujeto a precios estimados por la SHCP. El valor unitario declarado de USD $5 por playera está por debajo del precio estimado oficial mínimo (USD $7), lo que activa la presunción de subvaluación y obliga a presentar garantía o cuenta aduanera.",
      impact:
        "La autoridad puede iniciar PAMA, exigir garantía sobre la diferencia o determinar contribuciones omitidas. La mercancía puede quedar embargada hasta resolverse.",
    },
    infraction: {
      legalBasis: "Artículo 184, fracción I de la Ley Aduanera",
      description:
        "Omitir presentar la garantía del interés fiscal cuando el valor declarado sea inferior al precio estimado fijado por la Secretaría para mercancías sectoriales (textil-confección).",
      detectedBy: "Reconocimiento aduanero marítimo (semáforo rojo) en aduana de Veracruz, sector textil.",
    },
    sanction: {
      legalBasis: "Artículo 185, fracción I de la Ley Aduanera",
      fineRange: "Multa del 70% al 100% de las contribuciones omitidas o presuntas",
      estimatedFine: "Aproximadamente $33,200.00 a $46,500.00 MXN sobre la diferencia",
      additional: [
        "Embargo precautorio hasta presentar garantía o cuenta aduanera.",
        "Inicio formal del PAMA por subvaluación sectorial.",
        "Posible salida del padrón sectorial textil-confección.",
      ],
    },
  },
  analysisQuestions: [
    { id: "q1", text: "¿Qué tipo de operación se realiza?", options: ["Exportación definitiva", "Importación definitiva", "Tránsito interno", "Depósito fiscal"], correctAnswer: "Importación definitiva", points: 3 },
    { id: "q2", text: "¿Cuál es el régimen aduanero aplicable?", options: ["Importación temporal IMMEX", "Importación definitiva", "Recinto fiscalizado estratégico", "Tránsito"], correctAnswer: "Importación definitiva", points: 3 },
    { id: "q3", text: "¿Cuál es el país de origen?", options: ["China", "Vietnam", "Bangladesh", "India"], correctAnswer: "Vietnam", points: 3 },
    { id: "q4", text: "¿Cuál es el medio de transporte?", options: ["Aéreo", "Marítimo", "Terrestre", "Ferroviario"], correctAnswer: "Marítimo", points: 3 },
    { id: "q5", text: "¿Qué Incoterm se pactó?", options: ["FOB", "CFR", "CIF", "DAP"], correctAnswer: "CFR", points: 3 },
  ],
  decisionQuestions: [
    { id: "q6", text: "Selecciona el método de valoración aplicable", options: ["Valor de transacción", "Valor de mercancías idénticas", "Valor reconstruido", "Último recurso"], correctAnswer: "Valor de transacción", points: 5 },
    { id: "q7", text: "Bajo Incoterm CFR, ¿qué incluye el precio?", options: ["Solo mercancía", "Mercancía + flete (sin seguro)", "Mercancía + flete + seguro", "Mercancía + impuestos en destino"], correctAnswer: "Mercancía + flete (sin seguro)", points: 5 },
    { id: "q8", text: "Las mercancías textiles están sujetas a:", options: ["Trato preferencial automático", "Padrón sectorial y precios estimados", "Exención total de IGI", "Solo regulación sanitaria"], correctAnswer: "Padrón sectorial y precios estimados", points: 5 },
  ],
  controversyQuestions: [
    { id: "c1", text: "¿Qué tipo de riesgo representa declarar USD $5 cuando el precio estimado es USD $7?", options: ["Riesgo logístico", "Riesgo de subvaluación sectorial", "Riesgo cambiario", "Riesgo sanitario"], correctAnswer: "Riesgo de subvaluación sectorial", points: 5 },
    { id: "c2", text: "¿Cuándo se detecta la irregularidad?", options: ["Embarque en origen", "Reconocimiento aduanero marítimo (semáforo rojo) sector textil", "Pago de IVA mensual", "Validación contable interna"], correctAnswer: "Reconocimiento aduanero marítimo (semáforo rojo) sector textil", points: 4 },
    { id: "c3", text: "¿Cuál es la infracción cometida?", options: ["Art. 176 fracc. I — Sin pedimento", "Art. 184 fracc. I — Omitir garantía del interés fiscal por precios estimados", "Art. 178 fracc. IV — Mercancía prohibida", "Art. 183 fracc. II — Tránsito vencido"], correctAnswer: "Art. 184 fracc. I — Omitir garantía del interés fiscal por precios estimados", points: 6 },
    { id: "c4", text: "¿Cuál es la sanción aplicable conforme al Art. 185 fracc. I?", options: ["Solo amonestación", "Multa del 70% al 100% de las contribuciones omitidas o presuntas", "Decomiso inmediato", "Cancelación de RFC"], correctAnswer: "Multa del 70% al 100% de las contribuciones omitidas o presuntas", points: 6 },
    { id: "c5", text: "Consecuencia adicional para el importador textil:", options: ["Salida del padrón sectorial textil-confección y embargo precautorio", "Devolución del IVA", "Reducción del IGI a 0%", "Liberación automática"], correctAnswer: "Salida del padrón sectorial textil-confección y embargo precautorio", points: 4 },
  ],
  pedimentoFields: [
    { id: "operationType", label: "Tipo de operación", type: "select", expected: "Importación", points: 4, selectOptions: ["Importación", "Exportación", "Tránsito"] },
    { id: "pedimentoKey", label: "Clave de pedimento", type: "select", expected: "A1", points: 4, selectOptions: ["A1", "A3", "BP", "C1", "F4"] },
    { id: "regime", label: "Régimen", type: "select", expected: "Definitivo", points: 4, selectOptions: ["Definitivo", "Temporal", "Depósito fiscal", "Tránsito"] },
    { id: "customsOffice", label: "Aduana", type: "select", expected: "Veracruz", points: 4, selectOptions: ["Manzanillo", "Veracruz", "Lázaro Cárdenas", "Altamira", "Tampico"] },
    { id: "transportMode", label: "Medio de transporte", type: "select", expected: "Marítimo", points: 4, selectOptions: ["Marítimo", "Aéreo", "Terrestre", "Ferroviario"] },
    { id: "invoiceValueUsd", label: "Valor factura USD", type: "select", expected: "35000", points: 4, selectOptions: ["28000", "32000", "35000", "40000"] },
    { id: "freightUsd", label: "Flete USD", type: "select", expected: "1800", points: 4, selectOptions: ["1200", "1500", "1800", "2200"] },
    { id: "insuranceUsd", label: "Seguro USD", type: "select", expected: "280", points: 4, selectOptions: ["180", "230", "280", "350"] },
    { id: "packingUsd", label: "Embalaje USD", type: "select", expected: "220", points: 4, selectOptions: ["100", "150", "220", "300"] },
    { id: "exchangeRate", label: "Tipo de cambio", type: "select", expected: "17.8", points: 4, selectOptions: ["17.2", "17.5", "17.8", "18.0", "18.4"] },
    { id: "customsValueMxn", label: "Valor en aduana MXN", type: "select", expected: "663940", points: 10, selectOptions: ["623000", "650000", "663940", "680000", "700000"] },
    { id: "tariffCode", label: "Fracción arancelaria", type: "select", expected: "6109.10.01", points: 6, selectOptions: ["6109.10.01", "6203.42.99", "6204.62.01", "5208.52.01"] },
    { id: "goodsDescription", label: "Descripción", type: "select", expected: "Playeras de algodón 100% para hombre, talla M-XL", points: 4, selectOptions: ["Playeras de algodón 100% para hombre, talla M-XL", "Pantalones de mezclilla", "Camisas de vestir", "Chaquetas deportivas"] },
    { id: "quantity", label: "Cantidad", type: "select", expected: "7000", points: 4, selectOptions: ["3000", "5000", "7000", "10000"] },
    { id: "originCountry", label: "País de origen", type: "select", expected: "Vietnam", points: 4, selectOptions: ["China", "Vietnam", "Bangladesh", "India", "Camboya"] },
  ],
  taxFields: [
    { id: "igi", label: "IGI", type: "select", expected: "165985.00", points: 8, selectOptions: ["140000.00", "155000.00", "165985.00", "175000.00"], formula: { title: "IGI — Impuesto General de Importación", expression: "IGI = Valor en Aduana × Tasa arancelaria", explanation: "Sector textil-confección: tasa 25% sobre valor en aduana.", example: "663,940.00 × 25% = 165,985.00 MXN" } },
    { id: "dta", label: "DTA", type: "select", expected: "5311.52", points: 6, selectOptions: ["4800.00", "5311.52", "5800.00", "6200.00"], formula: { title: "DTA — Derecho de Trámite Aduanero", expression: "DTA = Valor en Aduana × 0.008", explanation: "8 al millar sobre el valor en aduana en pedimento A1.", example: "663,940.00 × 0.008 = 5,311.52 MXN" } },
    { id: "ivaBase", label: "Base IVA", type: "select", expected: "835236.52", points: 8, selectOptions: ["663940.00", "829925.00", "835236.52", "850000.00"], formula: { title: "Base gravable del IVA", expression: "Base IVA = Valor en Aduana + IGI + DTA", explanation: "Art. 27 LIVA — base integrada.", example: "663,940 + 165,985 + 5,311.52 = 835,236.52 MXN" } },
    { id: "iva", label: "IVA", type: "select", expected: "133637.84", points: 8, selectOptions: ["106230.00", "120000.00", "133637.84", "140000.00"], formula: { title: "IVA — Impuesto al Valor Agregado", expression: "IVA = Base IVA × 16%", explanation: "Tasa general del 16%.", example: "835,236.52 × 16% = 133,637.84 MXN" } },
    { id: "totalTaxes", label: "Total contribuciones", type: "select", expected: "304934.36", points: 8, selectOptions: ["280000.00", "295000.00", "304934.36", "315000.00"], formula: { title: "Total de contribuciones", expression: "Total = IGI + DTA + IVA", explanation: "Suma final a pagar.", example: "165,985 + 5,311.52 + 133,637.84 = 304,934.36 MXN" } },
  ],
  validationRules: [
    { ifField: "regime", notEquals: "Definitivo", message: "Error crítico: El régimen no corresponde a importación definitiva.", severity: "high" },
    { ifField: "customsValueMxn", notInToleranceOf: 663940, message: "Observación: El valor en aduana no integra correctamente flete, seguro y embalaje.", severity: "high" },
    { ifField: "tariffCode", notEquals: "6109.10.01", message: "Alerta: La fracción arancelaria no corresponde a playeras de algodón.", severity: "medium" },
    { ifField: "igi", notInToleranceOf: 165985.0, message: "Error de cálculo: El IGI textil debe ser al 25%.", severity: "high" },
    { ifField: "iva", notInToleranceOf: 133637.84, message: "Error de integración fiscal: la base del IVA debe sumar IGI y DTA.", severity: "high" },
  ],
};

export const CASES: CaseBundle[] = [
  CASE_MARITIMO_EJEMPLO,
  CASE_TERRESTRE,
  CASE_AEREO,
  CASE_MARITIMO_TEXTIL,
];

export function getCaseByKey(key: string): CaseBundle {
  return CASES.find((c) => c.key === key) ?? CASES[0];
}

export function totalPointsOf(c: CaseBundle): number {
  return (
    c.analysisQuestions.reduce((s, q) => s + q.points, 0) +
    c.decisionQuestions.reduce((s, q) => s + q.points, 0) +
    c.controversyQuestions.reduce((s, q) => s + q.points, 0) +
    c.pedimentoFields.reduce((s, f) => s + f.points, 0) +
    c.taxFields.reduce((s, f) => s + f.points, 0)
  );
}
