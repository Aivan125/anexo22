/**
 * Valida JSON del simulador aduanero contra Zod (CI / pre-deploy).
 * Uso: pnpm exec tsx scripts/validate-customs-simulator-data.ts
 */
import fs from "fs";
import path from "path";
import {
  caseBundleSchema,
  caseJourneyFileSchema,
  caseManifestSchema,
  schemaVersionFileSchema,
} from "../lib/data/customs-simulator/schemas";

const ROOT = path.join(process.cwd(), "lib/data/customs-simulator");

function fail(msg: string): never {
  console.error(msg);
  process.exit(1);
}

try {
  const verRaw = JSON.parse(
    fs.readFileSync(path.join(ROOT, "schema-version.json"), "utf8"),
  );
  schemaVersionFileSchema.parse(verRaw);

  const manRaw = JSON.parse(
    fs.readFileSync(path.join(ROOT, "case.manifest.json"), "utf8"),
  );
  const manifest = caseManifestSchema.parse(manRaw);
  const v = schemaVersionFileSchema.parse(verRaw).version;
  if (manifest.contentSchemaVersion !== v) {
    fail(
      `contentSchemaVersion (${manifest.contentSchemaVersion}) != schema-version (${v})`,
    );
  }

  for (const entry of manifest.cases) {
    const file = path.join(ROOT, "cases", `${entry.caseKey}.json`);
    if (!fs.existsSync(file)) {
      fail(`Falta archivo de caso: cases/${entry.caseKey}.json`);
    }
    const bundleRaw = JSON.parse(fs.readFileSync(file, "utf8"));
    const bundle = caseBundleSchema.parse(bundleRaw);
    if (bundle.key !== entry.caseKey) {
      fail(
        `caseKey en manifiesto (${entry.caseKey}) != key en JSON (${bundle.key})`,
      );
    }

    if (!entry.published) continue;

    const journeyFile = path.join(ROOT, "journey", `${entry.caseKey}.json`);
    if (!fs.existsSync(journeyFile)) {
      fail(
        `Falta journey para caso publicado: journey/${entry.caseKey}.json`,
      );
    }
    const journeyRaw = JSON.parse(fs.readFileSync(journeyFile, "utf8"));
    const journey = caseJourneyFileSchema.parse(journeyRaw);
    if (journey.caseKey !== entry.caseKey) {
      fail(
        `caseKey en manifiesto (${entry.caseKey}) != caseKey en journey (${journey.caseKey})`,
      );
    }
  }

  console.log(
    "validate-customs-simulator-data: OK (%d caso(s) en manifiesto)",
    manifest.cases.length,
  );
} catch (e) {
  console.error("validate-customs-simulator-data: ERROR");
  console.error(e);
  process.exit(1);
}
