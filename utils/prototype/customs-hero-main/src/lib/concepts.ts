// Diccionario de conceptos aduaneros para mostrar como tooltips/HoverCards
export const CONCEPTS: Record<string, { title: string; description: string }> = {
  "Importación definitiva": {
    title: "Importación definitiva",
    description:
      "Régimen aduanero por el cual las mercancías ingresan al territorio nacional para permanecer en él por tiempo ilimitado. Causa el pago de IGI, DTA e IVA.",
  },
  "Exportación definitiva": {
    title: "Exportación definitiva",
    description: "Salida de mercancías nacionales o nacionalizadas para permanecer en el extranjero por tiempo ilimitado.",
  },
  "Retorno virtual": {
    title: "Retorno virtual",
    description: "Operación documental mediante la cual se transfiere mercancía sin movimiento físico, generalmente entre IMMEX.",
  },
  "Tránsito interno": {
    title: "Tránsito interno",
    description: "Régimen para transportar mercancías bajo control fiscal de una aduana de entrada a otra del mismo país.",
  },
  "Régimen aduanero": {
    title: "Régimen aduanero",
    description:
      "Destino aduanero que se asigna a una mercancía conforme a la Ley Aduanera (definitivo, temporal, depósito fiscal, tránsito, elaboración, recinto fiscalizado).",
  },
  "Temporal para elaboración": {
    title: "Importación temporal para elaboración",
    description: "Régimen IMMEX que permite ingresar insumos para transformar y retornar al extranjero, sin pago de impuestos.",
  },
  "Depósito fiscal": {
    title: "Depósito fiscal",
    description: "Almacenamiento de mercancía de procedencia extranjera o nacional en almacenes generales de depósito autorizados.",
  },
  "Recinto fiscalizado estratégico": {
    title: "Recinto fiscalizado estratégico",
    description: "Régimen para introducir mercancías por tiempo limitado a un recinto autorizado para manejo, almacenaje o transformación.",
  },
  "País de origen": {
    title: "País de origen",
    description: "País donde la mercancía fue producida, manufacturada o sufrió la última transformación sustancial. Determina preferencias arancelarias.",
  },
  "Medio de transporte": {
    title: "Medio de transporte",
    description: "Vía utilizada para el arribo de la mercancía: marítimo, aéreo, terrestre, ferroviario o multimodal.",
  },
  "Marítimo": {
    title: "Transporte marítimo",
    description: "Mercancía que arriba por puerto. Suele documentarse con Bill of Lading (B/L) y aplica para grandes volúmenes.",
  },
  "Incoterm": {
    title: "Incoterms",
    description:
      "Términos internacionales de comercio (ICC) que definen responsabilidades, costos y riesgos entre comprador y vendedor: EXW, FOB, CIF, DDP, etc.",
  },
  "FOB": {
    title: "FOB — Free On Board",
    description: "El vendedor entrega la mercancía a bordo del buque en el puerto de embarque. El comprador asume flete y seguro internacionales.",
  },
  "CIF": {
    title: "CIF — Cost, Insurance & Freight",
    description: "El vendedor cubre costo, seguro y flete hasta el puerto de destino. El riesgo se transfiere al cargar a bordo.",
  },
  "EXW": {
    title: "EXW — Ex Works",
    description: "El vendedor pone la mercancía a disposición en sus instalaciones; el comprador asume todos los costos y riesgos posteriores.",
  },
  "DDP": {
    title: "DDP — Delivered Duty Paid",
    description: "El vendedor entrega en destino con todos los impuestos pagados. Máxima responsabilidad para el vendedor.",
  },
  "Valor de transacción": {
    title: "Valor de transacción",
    description:
      "Método principal de valoración aduanera (Art. 64 LA): precio realmente pagado o por pagar por las mercancías + incrementables.",
  },
  "Valor de mercancías idénticas": {
    title: "Mercancías idénticas",
    description: "Método secundario: usar el valor de mercancías iguales en todos sus aspectos vendidas para exportación a México.",
  },
  "Valor de mercancías similares": {
    title: "Mercancías similares",
    description: "Método secundario: usar mercancías con características y materiales semejantes que cumplen las mismas funciones.",
  },
  "Método deductivo": {
    title: "Método deductivo",
    description: "Determinar el valor a partir del precio de reventa en México, restando comisiones, transporte y utilidad usual.",
  },
  "Incrementables": {
    title: "Conceptos incrementables",
    description:
      "Cargos que se suman al precio pagado para determinar el valor en aduana: flete, seguro, embalaje, comisiones, regalías y cánones (Art. 65 LA).",
  },
  "Flete internacional": {
    title: "Flete internacional",
    description: "Costo del transporte de la mercancía desde el origen hasta el punto de entrada al territorio nacional. Es incrementable.",
  },
  "Seguro internacional": {
    title: "Seguro internacional",
    description: "Cobertura del riesgo durante el transporte internacional. Es concepto incrementable al valor en aduana.",
  },
  "Embalaje": {
    title: "Embalaje",
    description: "Costo de envases, contenedores y materiales de empaque. Forma parte del valor en aduana.",
  },
  "Todos los anteriores": {
    title: "Todos los conceptos incrementables",
    description: "Flete, seguro y embalaje deben sumarse al valor factura para construir la base gravable.",
  },
  "Valor factura + incrementables": {
    title: "Construcción del valor en aduana",
    description: "Valor factura USD + flete + seguro + embalaje, convertido a MXN al tipo de cambio del día.",
  },
  "Valor factura + IVA": {
    title: "⚠️ Concepto incorrecto",
    description: "El IVA NO forma parte del valor en aduana; es una contribución que se calcula sobre la base gravable ya integrada.",
  },
  "Valor factura + DTA": {
    title: "⚠️ Concepto incorrecto",
    description: "El DTA es una contribución, no un componente del valor en aduana.",
  },
  "Solo valor factura": {
    title: "⚠️ Insuficiente",
    description: "Omite los conceptos incrementables (flete, seguro, embalaje) que la Ley Aduanera obliga a sumar.",
  },
};
