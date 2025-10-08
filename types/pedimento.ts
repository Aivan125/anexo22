// src/types/pedimento.ts

/**
 * Define la estructura de datos para todo el formulario del pedimento.
 * A medida que agregues más campos y secciones, los añadirás aquí.
 */
export interface PedimentoFormValues {
  // --- Encabezado ---
  numPedimento: string;
  tipoOperacion: string;
  clavePedimento: string;
  regimen: string;
  destino: string;
  tipoCambio: number | null; // Puede ser un número o nulo si está vacío
  pesoBruto: number | null;
  aduana: string;
  // --- Transporte ---
  transporteEntradaSalida: string;
  transporteArribo: string;
  transporteSalida: string;
  valorDolares: number | null;
  valorAduana: number | null;
  valorComercial: number | null;
  // --- Importador/Exportador ---
  datosImportadorExportador: {
    rfc: string;
    curp: string;
    nombre: string;
    domicilio: string;
  };

  // --- Incrementables ---
  incrementables: {
    valSeguros: number | null;
    seguros: number | null;
    fletes: number | null;
    embalajes: number | null;
    otros: number | null;
  };
  acuseValidacion: {
    electronico: string;
  };
  seccionAduanera: {
    clave: string;
  };
  marcasBultos: string;

  // --- Tasa a nivel pedimento ---
  fechas: Fecha[];
  tasasNivelPedimento: TasaNivelPedimento[];

  // --- Cuadro de Liquidacion ---
  cuadroLiquidacion: Liquidacion[];
  totales: {
    efectivo: number | null;
    otros: number | null;
    total: number | null;
  };

  // --- Datoa del comprador ---
  proveedorComprador: {
    idFiscal: string;
    nombre: string;
    domicilio: string;
    vinculacion: string;
  };

  facturas: {
    numero: string;
    fecha: Date | undefined | string;
    incoterm: string;
    moneda: string;
    valMonFact: number | null;
    factorMonFact: number | null; // <-- CAMPO AÑADIDO
    valDolares: number | null;
  };

  transporte: {
    identificacion: string;
    pais: string;
    transportistaNombre: string;
    rfc: string;
    curp: string;
    domicilio: string;
  };

  candadosContenedores: {
    noCandado: string;
    numeroContenedor: string;
    tipoContenedor: string;
  };

  // --- Partidas ---
  partidas: Partida[];

  // -- Agente Aduanal ---
  agenteAduanal: {
    nombreRazonSocial: string;
    rfc: string;
    curp: string;
  };

  mandatario: {
    nombre: string;
    rfc: string;
    curp: string;
  };
  patente: string;
}

/**
 * Define los valores iniciales para un formulario de pedimento vacío.
 * Es crucial que cada campo definido en PedimentoFormValues tenga una
 * entrada aquí para evitar errores de "uncontrolled vs controlled inputs" en React.
 */
export const pedimentoDefaultValues: PedimentoFormValues = {
  // --- Encabezado ---
  numPedimento: "",
  tipoOperacion: "",
  clavePedimento: "",
  regimen: "",
  destino: "",
  tipoCambio: null,
  pesoBruto: null,
  aduana: "",
  transporteEntradaSalida: "",
  transporteArribo: "",
  transporteSalida: "",
  valorDolares: null,
  valorAduana: null,
  valorComercial: null,
  datosImportadorExportador: {
    rfc: "",
    curp: "",
    nombre: "",
    domicilio: "",
  },
  incrementables: {
    valSeguros: null,
    seguros: null,
    fletes: null,
    embalajes: null,
    otros: null,
  },
  acuseValidacion: {
    electronico: "",
  },
  seccionAduanera: {
    clave: "",
  },
  marcasBultos: "",

  fechas: [],
  tasasNivelPedimento: [],
  partidas: [],

  cuadroLiquidacion: [],
  totales: {
    efectivo: null,
    otros: null,
    total: null,
  },
  proveedorComprador: {
    idFiscal: "",
    nombre: "",
    domicilio: "",
    vinculacion: "",
  },
  facturas: {
    numero: "",
    fecha: undefined,
    incoterm: "",
    moneda: "",
    valMonFact: null,
    factorMonFact: null,
    valDolares: null,
  },
  transporte: {
    identificacion: "",
    pais: "",
    transportistaNombre: "",
    rfc: "",
    curp: "",
    domicilio: "",
  },
  candadosContenedores: {
    noCandado: "",
    numeroContenedor: "",
    tipoContenedor: "",
  },
  agenteAduanal: {
    nombreRazonSocial: "",
    rfc: "",
    curp: "",
  },
  mandatario: {
    nombre: "",
    rfc: "",
    curp: "",
  },
  patente: "",
};

// SECCION: PARTIDAS
export interface PartidaContribucion {
  nombre: string;
  tasa: number;
}

export interface Partida {
  // Grupo 1: Identificación Principal
  sec: number;
  fraccion: string;
  subd: string;
  vinc: string;
  metVal: string;
  umc: string;
  cantUmc: number | null;
  umt: string;
  cantUmt: number | null;
  pvc: string; // País Vende/Compra
  pod: string; // País Origen/Destino

  // Grupo 2: Descripción y Valores
  descripcion: string;
  valAduUsd: number | null;
  impPrecioPag: number | null;
  precioUnit: number | null;
  valAgreg: number | null;

  // Grupo 3: Contribuciones (array anidado)
  contribuciones: PartidaContribucion[];

  // Grupo 4: Permisos e Identificadores
  permiso: string;
  numPermiso: string;
  firmaPermiso: string;
  valComDls: number | null;
  cantidadUmtPermiso: number | null;
  identif: string;
  complemento1: string;
  complemento2: string;
  observaciones: string;
}

// Valores iniciales para una partida
export const partidaDefaultValues: Partida = {
  sec: 0, // Lo calcularemos dinámicamente
  fraccion: "",
  subd: "",
  vinc: "",
  metVal: "",
  umc: "",
  cantUmc: null,
  umt: "",
  cantUmt: null,
  pvc: "",
  pod: "",
  descripcion: "",
  valAduUsd: null,
  impPrecioPag: null,
  precioUnit: null,
  valAgreg: null,
  contribuciones: [],
  permiso: "",
  numPermiso: "",
  firmaPermiso: "",
  valComDls: null,
  cantidadUmtPermiso: null,
  identif: "",
  complemento1: "",
  complemento2: "",
  observaciones: "",
};

// Tasa a Nivel Pedimento

export interface TasaNivelPedimento {
  contrib: string;
  cveTTasa: string;
  tasa: number | null;
}

export interface Fecha {
  tipo: string;
  fecha: Date | undefined | string;
}

export const fechaDefault: Fecha = {
  tipo: "",
  fecha: undefined,
};

export const tasaNivelPedimentoDefault: TasaNivelPedimento = {
  contrib: "",
  cveTTasa: "",
  tasa: null,
};

export interface Liquidacion {
  concepto: string;
  fp: string; // Forma de Pago
  importe: number | null;
}

export const liquidacionDefault: Liquidacion = {
  concepto: "",
  fp: "",
  importe: null,
};

export type EvaluationResult = {
  [K in keyof PedimentoFormValues]?: boolean | undefined;
};

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  narrative: string;
  answerKey: Partial<PedimentoFormValues>;
}
