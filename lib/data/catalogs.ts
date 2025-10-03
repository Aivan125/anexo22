export const T_OPER_OPTIONS = [
  { value: "IMP", label: "IMP - Importación" },
  { value: "EXP", label: "EXP - Exportación/Retorno" },
  { value: "TRA", label: "TRA - Tránsitos" },
];

// todo: agregar el resto de las aduanas
export const APENDIX_1 = [
  { value: "1-0", label: "10 - ACAPULCO, ACAPULCO DE JUAREZ, GUERRERO" },
  {
    value: "1-1",
    label:
      "11 - AEROPUERTO INTERNACIONAL GENERAL JUAN N. ALVAREZ, ACAPULCO, GUERRERO",
  },
  { value: "2-0", label: "20 - AGUA PRIETA, AGUA PRIETA, SONORA" },
  {
    value: "5-0",
    label: "50 - SUBTENIENTE LOPEZ, SUBTENIENTE LOPEZ, QUINTANA ROO",
  },
  {
    value: "6-0",
    label: "60 - CIUDAD DEL CARMEN, CIUDAD DEL CARMEN, CAMPECHE",
  },
  { value: "6-3", label: "63 - SEYBAPLAYA, CHAMPOTON, CAMPECHE" },
  { value: "7-0", label: "70 - CIUDAD JUAREZ, CIUDAD JUAREZ, CHIHUAHUA" },
  {
    value: "7-1",
    label:
      "71 - PUENTE INTERNACIONAL ZARAGOZA-ISLETA, CIUDAD JUAREZ, CHIHUAHUA",
  },
  {
    value: "7-2",
    label: "72 - SAN JERONIMO-SANTA TERESA, CIUDAD JUAREZ, CHIHUAHUA",
  },
  {
    value: "7-3",
    label:
      "73 - AEROPUERTO INTERNACIONAL ABRAHAM GONZALEZ, CIUDAD JUAREZ, CHIHUAHUA",
  },
  { value: "8-0", label: "80 - COATZACOALCOS, COATZACOALCOS, VERACRUZ" },
  { value: "11-0", label: "110 - ENSENADA, ENSENADA, BAJA CALIFORNIA" },
  { value: "12-0", label: "120 - GUAYMAS, GUAYMAS, SONORA" },
  {
    value: "12-1",
    label:
      "121 - AEROPUERTO INTERNACIONAL GENERAL IGNACIO PESQUEIRA GARCIA, HERMOSILLO, SONORA",
  },
  { value: "14-0", label: "140 - LA PAZ, LA PAZ, BAJA CALIFORNIA SUR" },
  {
    value: "14-2",
    label: "142 - SAN JOSE DEL CABO, LOS CABOS, BAJA CALIFORNIA SUR",
  },
  {
    value: "14-3",
    label: "143 - CABO SAN LUCAS, LOS CABOS, BAJA CALIFORNIA SUR",
  },
  { value: "14-4", label: "144 - SANTA ROSALIA, MULEGE, BAJA CALIFORNIA SUR" },
  { value: "14-5", label: "145 - LORETO, LORETO, BAJA CALIFORNIA SUR" },
  { value: "14-7", label: "147 - PICHILINGÜE, LA PAZ, BAJA CALIFORNIA SUR" },
  { value: "16-0", label: "160 - MANZANILLO, MANZANILLO, COLIMA" },
  { value: "17-0", label: "170 - MATAMOROS, MATAMOROS, TAMAULIPAS" },
  { value: "18-0", label: "180 - MAZATLAN, MAZATLAN, SINALOA" },
  { value: "19-0", label: "190 - MEXICALI, MEXICALI, BAJA CALIFORNIA" },
  { value: "20-0", label: "200 - MEXICO, DISTRITO FEDERAL" },
  { value: "22-0", label: "220 - NACO, NACO, SONORA" },
  { value: "23-0", label: "230 - NOGALES, NOGALES, SONORA" },
  { value: "24-0", label: "240 - NUEVO LAREDO, NUEVO LAREDO, TAMAULIPAS" },
  { value: "25-0", label: "250 - OJINAGA, OJINAGA, CHIHUAHUA" },
  { value: "26-0", label: "260 - PUERTO PALOMAS, PUERTO PALOMAS, CHIHUAHUA" },
  { value: "27-0", label: "270 - PIEDRAS NEGRAS, PIEDRAS NEGRAS, COAHUILA" },
  { value: "28-0", label: "280 - PROGRESO, PROGRESO, YUCATAN" },
  { value: "30-0", label: "300 - CIUDAD REYNOSA, CIUDAD REYNOSA, TAMAULIPAS" },
  { value: "31-0", label: "310 - SALINA CRUZ, SALINA CRUZ, OAXACA" },
  {
    value: "33-0",
    label: "330 - SAN LUIS RIO COLORADO, SAN LUIS RIO COLORADO, SONORA",
  },
  {
    value: "34-0",
    label: "340 - CIUDAD MIGUEL ALEMAN, CIUDAD MIGUEL ALEMAN, TAMAULIPAS",
  },
  { value: "37-0", label: "370 - CIUDAD HIDALGO, CIUDAD HIDALGO, CHIAPAS" },
  { value: "38-0", label: "380 - TAMPICO, TAMPICO, TAMAULIPAS" },
  { value: "39-0", label: "390 - TECATE, TECATE, BAJA CALIFORNIA" },
  { value: "40-0", label: "400 - TIJUANA, TIJUANA, BAJA CALIFORNIA" },
  { value: "42-0", label: "420 - TUXPAN, TUXPAN DE RODRIGUEZ CANO, VERACRUZ" },
  { value: "43-0", label: "430 - VERACRUZ, VERACRUZ, VERACRUZ" },
  { value: "44-0", label: "440 - CIUDAD ACUÑA, CIUDAD ACUÑA, COAHUILA" },
  { value: "46-0", label: "460 - TORREON, TORREON, COAHUILA" },
  {
    value: "47-0",
    label: "470 - AEROPUERTO INTERNACIONAL DE LA CIUDAD DE MEXICO",
  },
  { value: "48-0", label: "480 - GUADALAJARA, TLACOMULCO DE ZUÑIGA, JALISCO" },
  { value: "50-0", label: "500 - SONOYTA, SONOYTA, SONORA" },
  { value: "51-0", label: "510 - LAZARO CARDENAS, LAZARO CARDENAS, MICHOACAN" },
  {
    value: "52-0",
    label: "520 - MONTERREY, GENERAL MARIANO ESCOBEDO, NUEVO LEON",
  },
  {
    value: "52-1",
    label:
      "521 - Aeropuerto Internacional General Mariano Escobedo, Apodaca, Nuevo León.",
  },
  { value: "53-0", label: "530 - CANCUN, CANCUN, QUINTANA ROO" },
  { value: "64-0", label: "640 - QUERETARO, SANTIAGO DE QUERETARO, QUERETARO" },
  { value: "65-0", label: "650 - TOLUCA, TOLUCA, ESTADO DE MEXICO" },
  { value: "67-0", label: "670 - CHIHUAHUA, CHIHUAHUA, CHIHUAHUA" },
  {
    value: "73-0",
    label: "730 - AGUASCALIENTES, AGUASCALIENTES, AGUASCALIENTES",
  },
  { value: "75-0", label: "750 - PUEBLA, HEROICA PUEBLA DE ZARAGOZA, PUEBLA" },
  { value: "80-0", label: "800 - COLOMBIA, COLOMBIA, NUEVO LEON" },
  { value: "81-0", label: "810 - ALTAMIRA, ALTAMIRA, TAMAULIPAS" },
  { value: "82-0", label: "820 - CIUDAD CAMARGO, CIUDAD CAMARGO, TAMAULIPAS" },
  { value: "83-0", label: "830 - DOS BOCAS, PARAISO, TABASCO" },
  { value: "84-0", label: "840 - GUANAJUATO, SILAO, GUANAJUATO" },
];

// Apéndice 2
export const APENDIX_2 = [
  { value: "A1", label: "A1" },
  { value: "A3", label: "A3" },
  { value: "C1", label: "C1" },
  { value: "C2", label: "C2" },
  { value: "D1", label: "D1" },
  { value: "K1", label: "K1" },
  { value: "L1", label: "L1" },
  { value: "P1", label: "P1" },
  { value: "S2", label: "S2" },
  { value: "T1", label: "T1" },
  { value: "VF", label: "VF" },
  { value: "VU", label: "VU" },
  { value: "V1", label: "V1" },
  { value: "V2", label: "V2" },
  { value: "V5", label: "V5" },
  { value: "V6", label: "V6" },
  { value: "V7", label: "V7" },
  { value: "V9", label: "V9" },
  { value: "AD", label: "AD" },
  { value: "AJ", label: "AJ" },
  { value: "BA", label: "BA" },
  { value: "BB", label: "BB" },
  { value: "BC", label: "BC" },
  { value: "BD", label: "BD" },
  { value: "BE", label: "BE" },
  { value: "BF", label: "BF" },
  { value: "BH", label: "BH" },
  { value: "BI", label: "BI" },
  { value: "BM", label: "BM" },
  { value: "BO", label: "BO" },
  { value: "BP", label: "BP" },
  { value: "BR", label: "BR" },
  { value: "H1", label: "H1" },
  { value: "H8", label: "H8" },
  { value: "I1", label: "I1" },
  { value: "S9", label: "S9" },
  { value: "F4", label: "F4" },
  { value: "F5", label: "F5" },
  { value: "IN", label: "IN" },
  { value: "AF", label: "AF" },
  { value: "RT", label: "RT" },
  { value: "A4", label: "A4" },
  { value: "E1", label: "E1" },
  { value: "E2", label: "E2" },
  { value: "G1", label: "G1" },
  { value: "C3", label: "C3" },
  { value: "K2", label: "K2" },
  { value: "S4", label: "S4" },
  { value: "A5", label: "A5" },
  { value: "E3", label: "E3" },
  { value: "E4", label: "E4" },
  { value: "G2", label: "G2" },
  { value: "K3", label: "K3" },
  { value: "S6", label: "S6" },
  { value: "F2", label: "F2" },
  { value: "F3", label: "F3" },
  { value: "V3", label: "V3" },
  { value: "V4", label: "V4" },
  { value: "F8", label: "F8" },
  { value: "F9", label: "F9" },
  { value: "G6", label: "G6" },
  { value: "G7", label: "G7" },
  { value: "V8", label: "V8" },
  { value: "M1", label: "M1" },
  { value: "M2", label: "M2" },
  { value: "J3", label: "J3" },
  { value: "M3", label: "M3" },
  { value: "M4", label: "M4" },
  { value: "J4", label: "J4" },
  { value: "T3", label: "T3" },
  { value: "T6", label: "T6" },
  { value: "T7", label: "T7" },
  { value: "T8", label: "T8" },
  { value: "T9", label: "T9" },
  { value: "R1", label: "R1" },
  { value: "CT", label: "CT" },
];

export const APENDIX_4 = [
  { value: "MEX", label: "MEX - México" },
  { value: "USA", label: "USA - Estados Unidos de América" },
  { value: "CHN", label: "CHN - China" },
  { value: "DEU", label: "DEU - Alemania (República Federal de)" },
];

export const APENDIX_7 = [
  { value: "1", label: "1 - KILO" },
  { value: "2", label: "2 - GRAMO" },
  { value: "3", label: "3 - METRO LINEAL" },
  { value: "4", label: "4 - METRO CUADRADO" },
  { value: "5", label: "5 - METRO CUBICO" },
  { value: "6", label: "6 - PIEZA" },
  { value: "7", label: "7 - CABEZA" },
  { value: "8", label: "8 - LITRO" },
  { value: "9", label: "9 - PAR" },
  { value: "10", label: "10 - KILOWATT" },
  { value: "11", label: "11 - MILLAR" },
  { value: "12", label: "12 - JUEGO" },
  { value: "13", label: "13 - KILOWATT/HORA" },
  { value: "14", label: "14 - TONELADA" },
  { value: "15", label: "15 - BARRIL" },
  { value: "16", label: "16 - GRAMO NETO" },
  { value: "17", label: "17 - DECENAS" },
  { value: "18", label: "18 - CIENTOS" },
  { value: "19", label: "19 - DOCENAS" },
  { value: "20", label: "20 - CAJA" },
  { value: "21", label: "21 - BOTELLA" },
];

export const APENDIX_8 = [
  { value: "AC", label: "AC - Almacén General de Depósito Certificado" },
  { value: "AE", label: "AE - Empresa de Comercio Exterior (ECEX)" },
  { value: "AF", label: "AF - Activo Fijo" },
  // ... (Este también sería un archivo muy grande)
];

export const APENDIX_10 = [
  { value: "1", label: "1 - CONTENEDOR ESTANDAR 20'" },
  { value: "2", label: "2 - CONTENEDOR ESTANDAR 40'" },
  { value: "3", label: "3 - CONTENEDOR ESTANDAR DE CUBO ALTO 40'" },
  { value: "18", label: "18 - CONTENEDOR CARGA A GRANEL 20’" },
  { value: "19", label: "19 - CONTENEDOR TIPO TANQUE 20’" },
  { value: "60", label: "60 - OTROS" },
  // ... (He añadido los más comunes, puedes agregar el resto según necesites)
];

export const APENDIX_11 = [
  { value: "0", label: "0 - VALOR COMERCIAL (SOLO EXPORTACION)" },
  { value: "1", label: "1 - VALOR DE TRANSACCION DE LAS MERCANCIAS" },
  { value: "2", label: "2 - VALOR DE TRANSACCION DE MERCANCIAS IDENTICAS" },
  { value: "3", label: "3 - VALOR DE TRANSACCION DE MERCANCIAS SIMILARES" },
  { value: "4", label: "4 - VALOR DE PRECIO UNITARIO DE VENTA" },
  { value: "5", label: "5 - VALOR RECONSTRUIDO" },
  { value: "6", label: "6 - ULTIMO RECURSO" },
];

export const APENDIX_12 = [
  { value: "DTA", label: "DTA - DERECHO DE TRAMITE ADUANERO" },
  { value: "CC", label: "C.C. - CUOTAS COMPENSATORIAS" },
  { value: "IVA", label: "IVA - IMPUESTO AL VALOR AGREGADO" },
  { value: "ISAN", label: "ISAN - IMPUESTO SOBRE AUTOMOVILES NUEVOS" },
  { value: "IEPS", label: "IEPS - IMPUESTO SOBRE PRODUCCION Y SERVICIOS" },
  {
    value: "IGI/IGE",
    label: "IGI/IGE - IMPUESTO GENERAL DE IMPORTACION/EXPORTACION",
  },
  { value: "REC", label: "REC. - RECARGOS" },
  { value: "OTROS", label: "OTROS" },
  { value: "MULT", label: "MULT. - MULTAS" },
  {
    value: "303",
    label: "303 - CONTRIBUCIONES POR APLICACION DEL ART. 303 DEL TLCAN",
  },
  { value: "RT", label: "RT - RECARGOS POR APLICACION DEL ART. 303 DEL TLCAN" },
  { value: "BSS", label: "BSS - BIENES Y SERVICIOS SUNTUARIOS" },
  { value: "PRV", label: "PRV - PREVALIDACION" },
  {
    value: "EUR",
    label:
      "EUR - CONTRIBUCIONES POR APLICACION DE LOS ARTICULOS 14 DE LA DECISION Y 15 DEL TLCAELC",
  },
  {
    value: "REU",
    label:
      "REU - RECARGOS POR APLICACION DE LOS ARTICULOS 14 DE LA DECISION Y 15 DEL TLCAELC",
  },
  {
    value: "ECI",
    label: "ECI - EXPEDICION DE CERTIFICADO DE IMPORTACION (SAGAR)",
  },
  { value: "ITV", label: "ITV - IMPUESTO SOBRE TENENCIA Y USO DE VEHICULOS" },
  { value: "MT", label: "MT - MEDIDA DE TRANSICION" },
  { value: "DFC", label: "DFC - DIFERENCIA A FAVOR DEL CONTRIBUYENTE" },
];
export const APENDIX_13 = [
  { value: "0", label: "0 - EFECTIVO" },
  { value: "2", label: "2 - FIANZA" },
  { value: "4", label: "4 - DEPOSITO EN CUENTA ADUANERA" },
  { value: "5", label: "5 - TEMPORAL NO SUJETA A IMPUESTOS" },
  { value: "6", label: "6 - PENDIENTE DE PAGO" },
  { value: "7", label: "7 - CARGO A PARTIDA PRESUPUESTAL GOBIERNO FEDERAL" },
  { value: "8", label: "8 - FRANQUICIA" },
  { value: "9", label: "9 - EXENTO DE PAGO" },
  { value: "10", label: "10 - CERTIFICADOS ESPECIALES DE TESORERIA PUBLICO" },
  { value: "11", label: "11 - CERTIFICADOS ESPECIALES DE TESORERIA PRIVADO" },
  { value: "12", label: "12 - COMPENSACION" },
  { value: "13", label: "13 - PAGO YA EFECTUADO" },
  { value: "14", label: "14 - CONDONACIONES" },
  {
    value: "15",
    label: "15 - CUENTAS ADUANERAS DE GARANTIA POR PRECIOS ESTIMADOS",
  },
  { value: "16", label: "16 - ACREDITAMIENTO" },
  { value: "18", label: "18 - ESTIMULO FISCAL" },
  { value: "19", label: "19 - OTROS MEDIOS DE GARANTIA" },
  {
    value: "20",
    label: "20 - PAGO CONFORME AL ARTICULO 7 DE LA LEY DE INGRESOS",
  },
];

export const APENDIX_14 = [
  // Grupo C: Transporte principal pagado
  { value: "CFR", label: "CFR - Coste y flete (puerto de destino convenido)" },
  {
    value: "CIF",
    label: "CIF - Coste, seguro y flete (puerto de destino convenido)",
  },
  {
    value: "CPT",
    label: "CPT - Transporte pagado hasta (el lugar de destino convenido)",
  },
  {
    value: "CIP",
    label:
      "CIP - Transporte y seguro pagados hasta (lugar de destino convenido)",
  },

  // Grupo D: Llegada
  { value: "DAP", label: "DAP - Entregada en lugar" },
  {
    value: "DDP",
    label: "DDP - Entregada derechos pagados (lugar de destino convenido)",
  },
  { value: "DPU", label: "DPU - Entregada y descargada en el lugar acordado" },

  // Grupo E: Salida
  { value: "EXW", label: "EXW - En fabrica (lugar convenido)" },

  // Grupo F: Transporte principal no pagado
  { value: "FCA", label: "FCA - Franco transportista (lugar designado)" },
  {
    value: "FAS",
    label: "FAS - Franco al costado del buque (puerto de carga convenido)",
  },
  { value: "FOB", label: "FOB - Franco a bordo (puerto de carga convenido)" },
];

export const APENDIX_5 = [
  { value: "USD", label: "USD - DOLAR" },
  { value: "EUR", label: "EUR - EURO" },
  { value: "MXP", label: "MXP - PESO" },
  { value: "CAD", label: "CAD - DOLAR CANADIENSE" },
  { value: "ARP", label: "ARP - PESO ARGENTINO" },
  { value: "COP", label: "COP - PESO COLOMBIANO" },
  { value: "CLP", label: "CLP - PESO CHILENO" },
];

export const APENDIX_16 = [
  { value: "IMD", label: "IMD - DEFINITIVOS DE IMPORTACION" },
  { value: "EXD", label: "EXD - DEFINITIVO DE EXPORTACION" },
  {
    value: "ITR",
    label:
      "ITR - TEMPORALES DE IMPORTACION PARA RETORNAR AL EXTRANJERO EN EL MISMO ESTADO",
  },
  {
    value: "ITE",
    label:
      "ITE - TEMPORALES DE IMPORTACION PARA ELABORACION, TRANSFORMACION O REPARACION",
  },
  {
    value: "ETR",
    label:
      "ETR - TEMPORALES DE EXPORTACION PARA RETORNAR AL PAIS EN EL MISMO ESTADO",
  },
  {
    value: "ETE",
    label:
      "ETE - TEMPORALES DE EXPORTACION PARA ELABORACION, TRANSFORMACION O REPARACION",
  },
  { value: "DFI", label: "DFI - DEPOSITO FISCAL" },
  {
    value: "RFE",
    label:
      "RFE - ELABORACION, TRANSFORMACION O REPARACION EN RECINTO FISCALIZADO",
  },
  { value: "TRA", label: "TRA - TRANSITOS" },
  { value: "RFS", label: "RFS - RECINTO FISCALIZADO ESTRATEGICO." },
];

export const APENDIX_15 = [
  { value: "1", label: "1 - ESTADO DE BAJA CALIFORNIA Y PARCIAL DE SONORA" },
  { value: "2", label: "2 - ESTADO DE BAJA CALIFORNIA SUR" },
  { value: "3", label: "3 - ESTADO DE QUINTANA ROO" },
  { value: "5", label: "5 - MUNICIPIO DE SALINA CRUZ, OAX" },
  { value: "6", label: "6 - MUNICIPIO DE CANANEA, SON" },
  { value: "7", label: "7 - FRANJA FRONTERIZA NORTE" },
  { value: "8", label: "8 - FRANJA FRONTERIZA SUR, COLINDANTE CON GUATEMALA" },
  { value: "9", label: "9 - INTERIOR DEL PAIS" },
  { value: "10", label: "10 - MUNICIPIO DE CABORCA, SON" },
];

export const APENDIX_18 = [
  { value: "1", label: "1 - PORCENTUAL" },
  { value: "2", label: "2 - ESPECIFICO" },
  { value: "3", label: "3 - ESPECIFICO (MINIMA) DTA" },
  { value: "4", label: "4 - ESPECIFICO (CUOTA FIJA) DTA" },
  { value: "5", label: "5 - TASA DE DESCUENTO SOBRE AD VALOREM" },
  { value: "6", label: "6 - FACTOR DE APLICACION SOBRE TIGIE" },
  { value: "7", label: "7 - AL MILLAR (DTA)" },
  { value: "8", label: "8 - TASA DE DESCUENTO SOBRE EL ARANCEL ESPECIFICO" },
];

export const MEDIOS_TRANSPORTE_OPTIONS = [
  { value: "1", label: "1 - MARITIMO" },
  { value: "2", label: "2 - FERROVIARIO DE DOBLE ESTIBA" },
  { value: "3", label: "3 - CARRETERO-FERROVIARIO" },
  { value: "4", label: "4 - AEREO" },
  { value: "5", label: "5 - POSTAL" },
  { value: "6", label: "6 - FERROVIARIO" },
  { value: "7", label: "7 - CARRETERO" },
  { value: "8", label: "8 - TUBERIA" },
  { value: "10", label: "10 - CABLES" },
  { value: "11", label: "11 - DUCTOS" },
  { value: "98", label: "98 - NO SE DECLARA MEDIO DE TRANSPORTE" },
  { value: "99", label: "99 - OTROS" },
];

export const VINCULACION_OPTIONS = [
  { value: "0", label: "0 - No existe vinculación" },
  {
    value: "1",
    label: "1 - Sí existe vinculación y no afecta el valor en aduana",
  },
  {
    value: "2",
    label: "2 - Sí existe vinculación y afecta el valor en aduana",
  },
];

export const TIPOS_FECHA_OPTIONS = [
  { value: "1", label: "1 - ENTRADA" },
  { value: "2", label: "2 - PAGO" },
  { value: "3", label: "3 - EXTRACCION" },
  { value: "5", label: "5 - PRESENTACION" },
  { value: "6", label: "6 - IMP. EUA/CAN" },
  { value: "7", label: "7 - ORIGINAL" },
];

export const VINCULACION_SI_NO_OPTIONS = [
  { value: "SI", label: "SI" },
  { value: "NO", label: "NO" },
];
