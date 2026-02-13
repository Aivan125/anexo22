import type { Section } from "@/types/clasificacion-arancelaria";
import { sectionI } from "./section-I";
import { sectionII } from "./section-II";
import { sectionIII } from "./section-III";
import { sectionIV } from "./section-IV";
import { sectionV } from "./section-V";
import { sectionVII } from "./section-VII";
import { sectionVIII } from "./section-VIII";
import { sectionIX } from "./section-IX";
import { sectionX } from "./section-X";
import { sectionXII } from "./section-XII";

export const sectionMap: Record<string, Section> = {
  I: sectionI,
  II: sectionII,
  III: sectionIII,
  IV: sectionIV,
  V: sectionV,
  VII: sectionVII,
  VIII: sectionVIII,
  IX: sectionIX,
  X: sectionX,
  XII: sectionXII,
};

export const allSections: Section[] = Object.values(sectionMap);
