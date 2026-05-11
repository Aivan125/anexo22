import "server-only";

import fs from "fs";
import path from "path";
import { cache } from "react";
import {
  caseBundleSchema,
  caseJourneyFileSchema,
  caseManifestSchema,
  schemaVersionFileSchema,
  type CaseBundle,
  type CaseJourneyFile,
  type CaseManifest,
  type JourneyEvent,
  type JourneyEventPublic,
} from "./schemas";

const DATA_ROOT = path.join(process.cwd(), "lib/data/customs-simulator");

function readJsonRaw(relativePath: string): unknown {
  const full = path.join(DATA_ROOT, relativePath);
  const raw = fs.readFileSync(full, "utf8");
  return JSON.parse(raw) as unknown;
}

export const loadSchemaVersion = cache((): number => {
  const raw = readJsonRaw("schema-version.json");
  return schemaVersionFileSchema.parse(raw).version;
});

export const loadCaseManifest = cache((): CaseManifest => {
  const raw = readJsonRaw("case.manifest.json");
  const manifest = caseManifestSchema.parse(raw);
  const schemaVer = loadSchemaVersion();
  if (manifest.contentSchemaVersion !== schemaVer) {
    throw new Error(
      `customs-simulator: case.manifest contentSchemaVersion (${manifest.contentSchemaVersion}) no coincide con schema-version.json (${schemaVer})`,
    );
  }
  return manifest;
});

export function parseCaseBundle(raw: unknown): CaseBundle {
  return caseBundleSchema.parse(raw);
}

export const loadCaseBundle = cache((caseKey: string): CaseBundle => {
  const raw = readJsonRaw(path.join("cases", `${caseKey}.json`));
  const bundle = parseCaseBundle(raw);
  if (bundle.key !== caseKey) {
    throw new Error(
      `customs-simulator: archivo cases/${caseKey}.json tiene key distinta (${bundle.key})`,
    );
  }
  return bundle;
});

export function parseCaseJourney(raw: unknown): CaseJourneyFile {
  return caseJourneyFileSchema.parse(raw);
}

/** Eventos públicos del expediente (sin campo `correct` en opciones). */
export function journeyExpedienteEventsForClient(
  events: JourneyEvent[],
): JourneyEventPublic[] {
  return events.map((e) => ({
    id: e.id,
    title: e.title,
    scenario: e.scenario,
    iconName: e.iconName,
    options: e.options.map(({ label }) => ({ label })),
  }));
}

export const loadCaseJourney = cache((caseKey: string): CaseJourneyFile => {
  const raw = readJsonRaw(path.join("journey", `${caseKey}.json`));
  const journey = parseCaseJourney(raw);
  if (journey.caseKey !== caseKey) {
    throw new Error(
      `customs-simulator: journey/${caseKey}.json declara caseKey distinto (${journey.caseKey})`,
    );
  }
  return journey;
});

export type PublishedCaseSummary = {
  caseKey: string;
  label: string;
  shortLabel: string;
  mode: CaseBundle["mode"];
  isExample: boolean;
  route: CaseBundle["route"];
};

export const listPublishedCaseSummaries = cache(
  (): PublishedCaseSummary[] => {
    const manifest = loadCaseManifest();
    const published = manifest.cases.filter((c) => c.published);
    return published.map((c) => {
      const bundle = loadCaseBundle(c.caseKey);
      return {
        caseKey: bundle.key,
        label: bundle.label,
        shortLabel: bundle.shortLabel,
        mode: bundle.mode,
        isExample: bundle.isExample,
        route: bundle.route,
      };
    });
  },
);

export function isPublishedCaseKey(caseKey: string): boolean {
  const manifest = loadCaseManifest();
  const row = manifest.cases.find((c) => c.caseKey === caseKey);
  return row?.published === true;
}
