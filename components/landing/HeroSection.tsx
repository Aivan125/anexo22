// Barrel: exporta la propuesta de hero activa.
// Para volver al hero anterior: cambiar a HeroSectionCurrent y HERO_IS_DARK a false
export { HeroSectionProposal as HeroSection } from "@/components/proposals/HeroSectionProposal";

/** HeroSectionProposal = dark, HeroSectionCurrent = light. Actualizar al cambiar de hero. */
export const HERO_IS_DARK = true;
