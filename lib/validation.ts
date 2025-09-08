import { z } from "zod";

// Se definen y exportan los schemas individuales para reutilización
export const partidaSchema = z.object({
  id: z.string(),
  numero: z.string(),
  fraccionArancelaria: z.string().min(1, "Fracción requerida."),
  nico: z.string().optional(),
  descripcion: z.string().optional(),
  precioUnitario: z.string().optional(),
  valorAduana: z.string().optional(),
  cantidadUMC: z.string().optional(),
  unidadUMC: z.string().optional(),
  paisOrigen: z.string().optional(),
  paisVendedor: z.string().optional(),
  marca: z.string().optional(),
  modelo: z.string().optional(),
  vinculacion: z.string().optional(),
  metodoValoracion: z.string().optional(),
});

export const referenciaSchema = z.object({
  id: z.string(),
  pedimentoOriginal: z.string(),
  fechaOriginal: z.date().optional(),
  claveOriginal: z.string(),
});

export const formSchema = z.object({
  clavePedimento: z.string().min(1, "Campo requerido."),
  regimen: z.string().min(1, "Selecciona un régimen."),
  aduana: z.string().min(1, "Selecciona una aduana."),
  tipoOperacion: z.string().min(1, "Selecciona un tipo de operación."),
  rfcImportador: z.string().optional(),
  curpImportador: z.string().optional(),
  nombreRazonSocial: z.string().optional(),
  domicilio: z.string().optional(),
  medioTransporte: z.string().optional(),
  transportista: z.string().optional(),
  rfcTransportista: z.string().optional(),
  paisTransportista: z.string().optional(),
  numeroContenedor: z.string().optional(),
  tipoContenedor: z.string().optional(),
  tipoGuia: z.string().optional(),
  numeroGuia: z.string().optional(),
  candados: z.array(z.object({ value: z.string() })).optional(),
  rfcProveedor: z.string().optional(),
  nombreProveedor: z.string().optional(),
  incoterm: z.string().optional(),
  monedaFacturacion: z.string().optional(),
  valorTotalDolares: z.string().optional(),
  valorAduanaTotal: z.string().optional(),
  institucionEmisora: z.string().optional(),
  numeroContrato: z.string().optional(),
  folioConstancia: z.string().optional(),
  fechaConstancia: z.date().optional(),
  referencias: z.array(referenciaSchema).optional(),
  partidas: z
    .array(partidaSchema)
    .min(1, "Debes agregar al menos una partida."),
});

export type FormData = z.infer<typeof formSchema>;
export type Partida = z.infer<typeof partidaSchema>;
export type Referencia = z.infer<typeof referenciaSchema>;

// REALES
export const loginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "El correo electrónico no es válido" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
