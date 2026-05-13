import { z } from "zod";

/** Alineado a `schema-version.json` y `case.manifest.json` */
export const schemaVersionFileSchema = z.object({
  version: z.number().int().positive(),
});

export const caseManifestEntrySchema = z.object({
  caseKey: z.string().min(1),
  published: z.boolean(),
});

export const caseManifestSchema = z
  .object({
    contentSchemaVersion: z.number().int().positive(),
    cases: z.array(caseManifestEntrySchema).min(1),
  })
  .superRefine((data, ctx) => {
    const keys = data.cases.map((c) => c.caseKey);
    const dup = keys.filter((k, i) => keys.indexOf(k) !== i);
    if (dup.length > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `caseKey duplicado en manifiesto: ${[...new Set(dup)].join(", ")}`,
      });
    }
  });

export type CaseManifest = z.infer<typeof caseManifestSchema>;

const quizQuestionSchema = z.object({
  id: z.string(),
  text: z.string(),
  options: z.array(z.string()),
  correctAnswer: z.string(),
  points: z.number(),
  /** Pista si el alumno falla (`isExample`: demostración en aula). */
  exampleWrongHint: z.string().optional(),
  /** Refuerzo breve si acierta (`isExample`). */
  exampleCorrectNote: z.string().optional(),
});

const formulaSchema = z.object({
  title: z.string(),
  expression: z.string(),
  explanation: z.string(),
  example: z.string().optional(),
});

const formFieldSchema = z.object({
  id: z.string(),
  label: z.string(),
  type: z.enum(["text", "number", "select"]),
  expected: z.union([z.string(), z.number()]),
  expectedContains: z.string().optional(),
  tolerance: z.number().optional(),
  points: z.number(),
  selectOptions: z.array(z.string()).optional(),
  formula: formulaSchema.optional(),
  /** Pista si la captura no coincide con el modelo (`isExample`). */
  exampleWrongHint: z.string().optional(),
  /** Confirmación breve si coincide (`isExample`). */
  exampleCorrectNote: z.string().optional(),
});

const validationRuleSchema = z.object({
  ifField: z.string(),
  notEquals: z.string().optional(),
  notInToleranceOf: z.number().optional(),
  message: z.string(),
  severity: z.enum(["high", "medium", "low"]),
});

const caseInfoSchema = z.object({
  id: z.string(),
  title: z.string(),
  context: z.string(),
  /** Párrafos largos tipo Lovable para el expediente; si omiten, se usa `context` como único bloque. */
  expedienteNarrativeParagraphs: z.array(z.string().min(1)).optional(),
  /** Subcadenas a resaltar (p. ej. nombres, Incoterms) dentro de la narrativa del expediente. */
  expedienteAccentTerms: z.array(z.string().min(1)).optional(),
  importer: z.object({
    name: z.string(),
    rfc: z.string(),
    city: z.string(),
  }),
  supplier: z.object({
    name: z.string(),
    countryExport: z.string(),
    countryOrigin: z.string(),
  }),
  goods: z.object({
    description: z.string(),
    quantity: z.number(),
    unitValueUsd: z.number(),
    invoiceValueUsd: z.number(),
  }),
  terms: z.object({
    incoterm: z.string(),
    freightUsd: z.number(),
    insuranceUsd: z.number(),
    packingUsd: z.number(),
    exchangeRate: z.number(),
    transportMode: z.string(),
    customsOffice: z.string(),
    regimeExpected: z.string(),
  }),
  tariff: z.object({
    tariffCode: z.string(),
    igiRate: z.number(),
    ivaRate: z.number(),
    dtaRate: z.number(),
  }),
  risk: z.object({
    type: z.string(),
    title: z.string(),
    description: z.string(),
    impact: z.string(),
  }),
  infraction: z.object({
    legalBasis: z.string(),
    description: z.string(),
    detectedBy: z.string(),
  }),
  sanction: z.object({
    legalBasis: z.string(),
    fineRange: z.string(),
    estimatedFine: z.string(),
    additional: z.array(z.string()),
  }),
});

/** Bundle completo por caso (`cases/<caseKey>.json`) */
export const caseBundleSchema = z.object({
  key: z.string(),
  label: z.string(),
  shortLabel: z.string(),
  mode: z.enum(["Marítimo", "Terrestre", "Aéreo"]),
  isExample: z.boolean(),
  route: z.object({
    from: z.string(),
    to: z.string(),
  }),
  case: caseInfoSchema,
  analysisQuestions: z.array(quizQuestionSchema),
  decisionQuestions: z.array(quizQuestionSchema),
  controversyQuestions: z.array(quizQuestionSchema),
  pedimentoFields: z.array(formFieldSchema),
  taxFields: z.array(formFieldSchema),
  validationRules: z.array(validationRuleSchema),
});

export type CaseBundle = z.infer<typeof caseBundleSchema>;

/** Opción interna Journey (servidor puede validar `correct`; no serializar `correct` al cliente). */
export const journeyEventOptionSchema = z.object({
  label: z.string().min(1),
  correct: z.boolean(),
});

export const journeyEventSchema = z
  .object({
    id: z.string().min(1),
    title: z.string().min(1),
    scenario: z.string().min(1),
    iconName: z.string().optional(),
    options: z.array(journeyEventOptionSchema).min(2).max(8),
  })
  .superRefine((ev, ctx) => {
    const n = ev.options.filter((o) => o.correct).length;
    if (n !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Journey event "${ev.id}": debe existir exactamente una opción correcta (encontradas: ${n})`,
        path: ["options"],
      });
    }
  });

/** `journey/<caseKey>.json` — Fase 4: sólo expediente obligatorio */
export const caseJourneyFileSchema = z.object({
  caseKey: z.string().min(1),
  expediente: z.array(journeyEventSchema).min(1),
});

export type CaseJourneyFile = z.infer<typeof caseJourneyFileSchema>;
export type JourneyEvent = CaseJourneyFile["expediente"][number];

export type JourneyEventPublicOption = { label: string };
export type JourneyEventPublic = {
  id: string;
  title: string;
  scenario: string;
  iconName?: string;
  options: JourneyEventPublicOption[];
};
