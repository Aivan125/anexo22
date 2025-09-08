// /lib/data/drawer-content.ts

// Sección de Pedimento
export const numPedimentoContent = `El número asignado por el agente, integrado con quince dígitos:

- 2 dígitos: año de validación.
- 2 dígitos: aduana de despacho.
- 4 dígitos: patente o autorización.
- 1 dígito: último dígito del año.
- 6 dígitos: numeración progresiva por aduana.`;

export const tOperContent = `Tipo de operación:

- IMP: Importación
- EXP: Exportación/retorno
- TRA: Tránsitos`;

export const cvePedimentoContent = `Clave de pedimento conforme al **Apéndice 2** del Anexo 22.`;

export const regimenContent = `Régimen aduanero al que se destinan las mercancías conforme al **Apéndice 16** del Anexo 22.`;

export const destinoContent = `Clave que identifica el destino de la mercancía, conforme al **Apéndice 15** del Anexo 22.`;

export const tipoCambioContent = `Tipo de cambio del peso mexicano respecto al dólar de los Estados Unidos.`;

export const pesoBrutoContent = `Cantidad en kilogramos del peso bruto total de la mercancía.`;

export const aduanaContent = `Clave de la **Aduana y Sección** por la que la mercancía entra o sale del territorio nacional (**Apéndice 1**).`;

export const transporteEntradaSalidaDrawer = `**Medio de Transporte (Entrada/Salida):**
Clave del medio de transporte en que se conduce la mercancía para su ENTRADA/SALIDA al o del territorio nacional, conforme al **Apéndice 3** del Anexo 22.`;

export const transporteArriboDrawer = `**Medio de Transporte (Arribo):**
Clave del medio de transporte en que se conduce la mercancía cuando arriba a la ADUANA/SECCION de despacho, conforme al **Apéndice 3** del Anexo 22.`;

export const transporteSalidaDrawer = `**Medio de Transporte (Salida):**
Clave del medio de transporte a la salida de la aduana, conforme al **Apéndice 3** del Anexo 22.`;

export const valorDolaresDrawer = `**Valor en Dólares:**
El equivalente en dólares de los Estados Unidos de América, del valor en aduana de las mercancías (campo 13) o del valor comercial de las mercancías (campo 14), según corresponda.`;

export const valorAduanaDrawer = `**Valor Aduana:**
En importación, es la suma del valor en aduana de todas las mercancías asentadas en el pedimento, expresado en moneda nacional. En exportaciones, este campo deberá declararse en cero.`;

export const valorComercialDrawer = `**Precio Pagado / Valor Comercial:**
Pago total en moneda nacional que por las mercancías importadas haya efectuado o vaya a efectuar el importador. En exportación, se deberá expresar la suma del valor comercial de todas las partidas.`;

// --- CONTENIDO PARA LA SECCIÓN DE IMPORTADOR/EXPORTADOR ---
export const rfcDrawer = `**RFC DEL IMPORTADOR/EXPORTADOR:**
Registro Federal de Contribuyentes de quien efectúe la operación. La declaración del RFC es obligatoria, salvo casos de RFC genérico.`;

export const curpDrawer = `**CURP DEL IMPORTADOR/EXPORTADOR:**
CURP de quien efectúe la operación. Opcional si el importador/exportador es persona física y cuenta con dicha información.`;

export const nombreDrawer = `**NOMBRE, DENOMINACIÓN O RAZÓN SOCIAL:**
Nombre, denominación o razón social del importador o exportador, tal como lo haya manifestado para efectos del RFC.`;

export const domicilioDrawer = `**DOMICILIO:**
Domicilio fiscal del importador o exportador manifestado para efectos del RFC, compuesto por Calle, Número, CP, Municipio, Ciudad, Entidad Federativa y País.`;

// --- CONTENIDO PARA INCREMENTABLES Y VALIDACIÓN ---

export const valSegurosDrawer = `**Valor Seguros:**
Valor total de las mercancías para efectos del seguro, expresado en moneda nacional.`;

export const segurosDrawer = `**Seguros:**
Importe total de las primas de los seguros pagados por la mercancía, si no están incluidos en el precio pagado.`;

export const fletesDrawer = `**Fletes:**
Importe total de los fletes pagados por el transporte de la mercancía, si no están incluidos en el precio pagado.`;

export const embalajesDrawer = `**Embalajes:**
Importe total de empaques y embalajes de la mercancía, si no están incluidos en el precio pagado.`;

export const otrosIncrementablesDrawer = `**Otros Incrementables:**
Importe total de otros conceptos que deben incrementarse al precio pagado, conforme a la Ley Aduanera.`;

export const acuseElectronicoDrawer = `**Acuse Electrónico de Validación:**
Acuse de ocho caracteres que comprueba la recepción electrónica de la información del pedimento por parte de la autoridad aduanera.`;

export const claveSeccionAduaneraDrawer = `**Clave de la Sección Aduanera:**
Clave de la aduana y sección ante la cual se promueve el despacho (tres posiciones), conforme al **Apéndice 1**. Este valor es el mismo que la clave de ADUANA E/S.`;

export const despachoDrawer = `**Despacho:**
Información adicional o complementaria de la sección aduanera.`;

export const marcasBultosDrawer = `**Marcas, Número y Total de Bultos:**
Marcas, números y total de bultos que contienen las mercancías amparadas por el pedimento.`;

// --- CONTENIDO PARA LA SECCIÓN DE FECHAS Y TASA A NIVEL PEDIMENTO ---

export const fechasEntradaDrawer = `**Fecha de Entrada:**
Fecha de entrada de la mercancía a territorio nacional.`;

export const fechasPagoDrawer = `**Fecha de Pago:**
Fecha de pago de las contribuciones y cuotas compensatorias.`;

export const contribucionTasaDrawer = `**Contribución:**
Descripción abreviada de la contribución que aplique a nivel pedimento, conforme al **Apéndice 12**.`;

export const cveTTasaDrawer = `**Clave Tipo de Tasa:**
Clave del tipo de tasa aplicable, conforme al **Apéndice 18**.`;

export const tasaDrawer = `**Tasa:**
Tasa aplicable para el pago de las cuotas por concepto de DTA y accesorios, conforme a la Ley Federal de Derechos.`;

// --- CONTENIDO PARA CUADRO DE LIQUIDACIÓN ---

export const liquidacionConceptoDrawer = `**Concepto:**
Descripción abreviada de la contribución a liquidar, conforme al **Apéndice 12**.`;

export const liquidacionFpDrawer = `**Forma de Pago (F.P.):**
Clave de la forma de pago del concepto a liquidar, conforme al **Apéndice 13**.`;

export const liquidacionImporteDrawer = `**Importe:**
Importe total en moneda nacional del concepto a liquidar para la forma de pago declarada.`;

export const totalesEfectivoDrawer = `**Efectivo:**
Importe total en moneda nacional de todos los conceptos a pagar en efectivo.`;

export const totalesOtrosDrawer = `**Otros:**
Importe total en moneda nacional de todos los conceptos determinados en formas de pago distintas al efectivo.`;

export const totalesTotalDrawer = `**Total:**
La suma de las cantidades en los campos 'Efectivo' y 'Otros'.`;

// --- CONTENIDO PARA LA SECCIÓN DE PROVEEDOR/COMPRADOR ---
export const idFiscalDrawer = `**ID Fiscal:** Clave de identificación fiscal del proveedor o comprador según el país de origen.`;
export const nombreProveedorDrawer = `**Nombre, Denominación o Razón Social:** Nombre completo del proveedor (importación) o comprador (exportación).`;
export const domicilioProveedorDrawer = `**Domicilio:** Domicilio comercial del proveedor o comprador.`;
export const vinculacionDrawer = `**Vinculación:** Se anota "SI" si existe vinculación comercial o financiera, o "NO" en caso contrario.`;
export const numFacturaDrawer = `**Número de Factura:** El número de la factura comercial que ampara las mercancías.`;
export const fechaFacturaDrawer = `**Fecha:** Fecha de facturación de la mercancía.`;
export const incotermDrawer = `**INCOTERM:** Clave del término de facturación internacional conforme al Apéndice 14.`;
export const monedaDrawer = `**Moneda:** Clave de la moneda utilizada en la facturación, conforme al Apéndice 5.`;
export const valMonFactDrawer = `**Valor en Moneda de Facturación:** Valor total de las mercancías en la moneda utilizada en la factura.`;
export const factorMonFactDrawer = `**Factor Moneda Facturación:** Factor de equivalencia de la moneda de facturación en dólares de los Estados Unidos de América.`; // <-- CAMPO AÑADIDO
export const valDolaresFacturaDrawer = `**Valor en Dólares:** Valor total de la factura convertido a dólares de los Estados Unidos de América.`;

export const transporteIdDrawer = `**Identificación:** Placas, número de furgón o nombre de la embarcación del transporte.`;
export const transportePaisDrawer = `**País:** Clave del país de origen del medio de transporte, conforme al Apéndice 4.`;
export const transportistaNombreDrawer = `**Transportista:** Nombre o razón social de la empresa transportista.`;
export const transportistaRfcDrawer = `**RFC:** Clave del RFC del transportista.`;
export const transportistaCurpDrawer = `**CURP:** CURP del transportista, si es persona física.`;
export const transportistaDomicilioDrawer = `**Domicilio:** Domicilio fiscal del transportista.`;

export const noCandadoDrawer = `**No. de Candado:** Número(s) del candado oficial o de origen que asegura el contenedor o vehículo.`;
export const contenedorNumeroDrawer = `**Número / Tipo de Contenedor:** Letras y número que identifican el contenedor o vehículo.`;
export const contenedorTipoDrawer = `**Tipo de Contenedor:** Clave que identifica el tipo de contenedor, conforme al Apéndice 10.`;

// --- CONTENIDO PARA LA SECCIÓN DE PARTIDAS ---
export const secDrawer = `**Número de Secuencia:**
Número de la secuencia de la fracción en el pedimento.`;

export const fraccionDrawer = `**Fracción Arancelaria:**
Fracción arancelaria aplicable a la mercancía según corresponda, conforme a la TIGIE.`;

export const subdDrawer = `**Subdivisión:**
Se deberá declarar la clave de subdivisión cuando ésta sea requerida.`;

export const vincDrawer = `**Vinculación:**
Clave que especifica si el valor en aduana está influido por vinculaciones comerciales, financieras o de otra clase.

- **0:** No existe vinculación.
- **1:** Sí existe vinculación y no afecta el valor en aduana.
- **2:** Sí existe vinculación y afecta el valor en aduana.`;

export const metValDrawer = `**Método de Valoración:**
Clave del método de valoración de mercancías importadas, conforme al Apéndice 11 del presente Anexo 22.

| Clave | Descripción                                      |
|-------|--------------------------------------------------|
| **0** | Valor Comercial (Solo Exportación)               |
| **1** | Valor de Transacción de las Mercancías           |
| **2** | Valor de Transacción de Mercancías Idénticas     |
| **3** | Valor de Transacción de Mercancías Similares     |
| **4** | Valor de Precio Unitario de Venta                |
| **5** | Valor Reconstruido                               |
| **6** | Último Recurso                                   |
`;

export const umcDrawer = `**Unidad de Medida Comercial (UMC):**
Clave correspondiente a la unidad de medida de comercialización de las mercancías señaladas en la factura, conforme al Apéndice 7 del presente Anexo 22.`;

export const cantUmcDrawer = `**Cantidad en UMC:**
Cantidad de mercancías conforme a la unidad de medida de comercialización (UMC) señalada en la factura.`;

export const umtDrawer = `**Unidad de Medida de la Tarifa (UMT):**
Clave correspondiente a la unidad de medida de aplicación de la TIGIE, conforme al Apéndice 7 del presente Anexo 22.`;

export const cantUmtDrawer = `**Cantidad en UMT:**
Cantidad de mercancías conforme a la unidad de medida de la TIGIE (UMT).`;

export const pvcDrawer = `**País Vendedor o Comprador (P.V/C):**
Clave del país que vende (en importación) o del país que compra (en exportación), conforme al Apéndice 4 del presente Anexo 22.`;

export const podDrawer = `**País de Origen o Destino (P.O/D):**
En importación, clave del país de origen. En exportación, clave del país de destino final de la mercancía, conforme al Apéndice 4 del presente Anexo 22.`;

export const descDrawer = `**Descripción:**
Descripción de la mercancía, la naturaleza y características técnicas y comerciales, necesarias y suficientes para determinar su clasificación arancelaria.`;

export const valAduUsdDrawer = `**Valor en Aduana (USD):**
Valor en aduana de la mercancía expresado en dólares, determinado conforme a la Ley Aduanera. Este valor debe ser igual al resultado de multiplicar el importe del precio pagado a nivel partida, por el factor de prorrateo.`;

export const impPrecioPagDrawer = `**Importe de Precio Pagado:**
Valor en moneda nacional que corresponda a la mercancía, sin incluir fletes ni seguros ni otros conceptos. En exportación, se declara el valor comercial.`;

export const precioUnitDrawer = `**Precio Unitario:**
Importe de precio unitario, resultado de dividir el precio pagado entre la cantidad en unidades de comercialización (CANT UMC).`;

export const valAgregDrawer = `**Valor Agregado:**
Importe del valor agregado a la mercancía en las exportaciones de bienes elaborados por Maquiladoras.`;

export const permisoDrawer = `**Permiso:**
Declarar la clave del permiso que ampara la importación/exportación de la mercancía.`;

export const numPermisoDrawer = `**Número de Permiso:**
Número del permiso o autorización que ampare la operación.`;

export const firmaPermisoDrawer = `**Firma de Permiso:**
Firma electrónica o código de validación del permiso.`;

export const valComDlsDrawer = `**Valor Comercial en Dólares:**
Importe del valor comercial en dólares de la mercancía.`;

export const cantidadUmtPermisoDrawer = `**Cantidad UMT (Permiso):**
Cantidad de mercancía en unidades de medida de la TIGIE (UMT) que ampara el permiso correspondiente.`;

export const identifDrawer = `**Identificador:**
Clave que define el identificador aplicable a nivel partida, conforme al Apéndice 8 del presente Anexo 22.`;

export const complemento1Drawer = `**Complemento 1:**
Complemento del identificador aplicable, siguiendo las instrucciones de la columna "COMPLEMENTO" del Apéndice 8.`;

export const complemento2Drawer = `**Complemento 2:**
Complemento adicional del identificador aplicable, si es requerido por el Apéndice 8.`;

export const observacionesDrawer = `**Observaciones a Nivel Partida:**
En caso de que se requiera algún dato adicional al pedimento no declarado en otros campos.`;

// --- CONTENIDO PARA EL PIE DE PÁGINA (AGENTE ADUANAL) ---

export const agenteNombreDrawer = `**Nombre o Razón Social:**
Nombre completo del agente, apoderado aduanal o la razón social del almacén que promueve el despacho.`;

export const agenteRfcDrawer = `**RFC:**
RFC del agente aduanal, apoderado aduanal o almacén que realiza el trámite.`;

export const agenteCurpDrawer = `**CURP:**
CURP del agente aduanal, apoderado aduanal o almacén que realiza el trámite.`;

export const mandatarioNombreDrawer = `**Nombre del Mandatario/Persona Autorizada:**
Nombre completo del mandatario del agente aduanal o de la persona autorizada para realizar trámites.`;

export const mandatarioRfcDrawer = `**RFC del Mandatario:**
RFC del mandatario del agente aduanal o del representante del almacén autorizado.`;

export const mandatarioCurpDrawer = `**CURP del Mandatario:**
CURP del mandatario del agente aduanal o del representante del almacén autorizado.`;

export const patenteDrawer = `**PATENTE:**
Número de patente`;
