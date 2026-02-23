import { z } from "zod";
import { COURSE_SLUGS } from "@/lib/constants/courses";

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

// Admin - Crear usuario
export const createUserSchema = z.object({
  email: z.string().email("Correo inválido").trim().toLowerCase(),
  name: z.string().max(100).optional(),
  password: z
    .string()
    .trim()
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  role: z.enum(["user", "admin"]),
  groupId: z.string().optional(),
  courseSlugs: z
    .array(z.string())
    .min(1, "Selecciona al menos un curso")
    .refine(
      (slugs) =>
        slugs.every((s) =>
          COURSE_SLUGS.includes(s as (typeof COURSE_SLUGS)[number]),
        ),
      { message: "Curso inválido" },
    ),
});

export type CreateUserFormValues = z.infer<typeof createUserSchema>;

// Admin - Editar nombre de usuario
export const updateUserNameSchema = z.object({
  userId: z.string().min(1),
  name: z.string().max(100).trim().optional(),
});
export type UpdateUserNameFormValues = z.infer<typeof updateUserNameSchema>;

// Admin - Actualizar cursos del usuario
export const updateUserCoursesSchema = z.object({
  userId: z.string().min(1),
  courseSlugs: z
    .array(z.string())
    .min(1, "Selecciona al menos un curso")
    .refine(
      (slugs) =>
        slugs.every((s) =>
          COURSE_SLUGS.includes(s as (typeof COURSE_SLUGS)[number]),
        ),
      { message: "Curso inválido" },
    ),
});
export type UpdateUserCoursesFormValues = z.infer<
  typeof updateUserCoursesSchema
>;

// Admin - Grupos
export const createGroupSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .max(100, "Máximo 100 caracteres")
    .trim(),
});

export const updateGroupSchema = z.object({
  id: z.string().min(1, "ID requerido"),
  name: z
    .string()
    .min(1, "El nombre es requerido")
    .max(100, "Máximo 100 caracteres")
    .trim(),
});

export type CreateGroupFormValues = z.infer<typeof createGroupSchema>;
export type UpdateGroupFormValues = z.infer<typeof updateGroupSchema>;

// Admin - Videos
export const createVideoSchema = z.object({
  title: z.string().min(1, "El título es requerido").max(200).trim(),
  description: z.string().max(500).optional(),
  youtubeId: z.string().min(1, "El ID de YouTube es requerido").trim(),
  groupId: z.string().min(1, "Selecciona un grupo"),
});

export const updateVideoSchema = createVideoSchema.extend({
  id: z.string().min(1, "ID requerido"),
});

export type CreateVideoFormValues = z.infer<typeof createVideoSchema>;
export type UpdateVideoFormValues = z.infer<typeof updateVideoSchema>;
