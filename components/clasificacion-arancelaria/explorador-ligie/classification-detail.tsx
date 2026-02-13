import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Classification } from "@/types/clasificacion-arancelaria";

interface ClassificationDetailProps {
  classification: Classification;
}

export function ClassificationDetail({
  classification,
}: ClassificationDetailProps) {
  return (
    <Card className="shadow-md border-[var(--turquoise)]/20 hover:border-[var(--turquoise-hover)] transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-[var(--turquoise)]/10 to-[var(--turquoise-hover)]/5 border-b border-[var(--turquoise)]/20 p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--turquoise)]">
          {classification.code}
        </CardTitle>
        <p className="text-xs sm:text-sm text-foreground/70 mt-1">
          {classification.title}
        </p>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Unidad de Medida
              </h3>
              <Badge
                variant="outline"
                className="text-sm sm:text-base px-3 py-1 border-[var(--turquoise)]/30 text-[var(--turquoise)]"
              >
                {classification.umt}
              </Badge>
            </div>

            <Separator className="bg-[var(--turquoise)]/15" />

            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Arancel de Importación
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-[var(--turquoise)]">
                {classification.importDuty === null
                  ? "N/A"
                  : typeof classification.importDuty === "number"
                    ? `${classification.importDuty}%`
                    : classification.importDuty}
              </p>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Arancel de Exportación
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-[var(--turquoise-hover)]">
                {classification.exportDuty === null
                  ? "N/A"
                  : typeof classification.exportDuty === "number"
                    ? `${classification.exportDuty}%`
                    : classification.exportDuty}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {classification.regimenes.length > 0 && (
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Regímenes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {classification.regimenes.map((regimen, index) => (
                    <Badge
                      key={index}
                      className="text-xs sm:text-sm px-3 py-1 bg-[var(--turquoise)] text-white hover:bg-[var(--turquoise-hover)] border-0"
                    >
                      {regimen}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {classification.nicos.length > 0 && (
              <>
                <Separator className="bg-[var(--turquoise)]/15" />
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    NICO
                  </h3>
                  <div className="space-y-2">
                    {classification.nicos.map((nico, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-2 rounded-md bg-[var(--turquoise)]/5"
                      >
                        <Badge
                          variant="outline"
                          className="shrink-0 text-xs border-[var(--turquoise)]/30 text-[var(--turquoise)]"
                        >
                          {nico.code}
                        </Badge>
                        <p className="text-xs sm:text-sm text-foreground/80">
                          {nico.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
