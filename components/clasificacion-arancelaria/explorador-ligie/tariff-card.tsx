import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { NotesPopover } from "./notes-popover";
import type { Notes } from "@/types/clasificacion-arancelaria";
import Link from "next/link";

interface TariffCardProps {
  code: string;
  title: string;
  href?: string;
  badges?: string[];
  showArrow?: boolean;
  notes?: Notes;
}

export function TariffCard({
  code,
  title,
  href,
  badges,
  showArrow = true,
  notes,
}: TariffCardProps) {
  const hasNotes =
    notes &&
    ((notes.legales && notes.legales.length > 0) ||
      (notes.nacionales && notes.nacionales.length > 0) ||
      (notes.subpartida && notes.subpartida.length > 0) ||
      (notes.explicativas && notes.explicativas.length > 0));

  return (
    <Card
      className={`transition-all duration-300 hover:border-[var(--turquoise-hover)] hover:shadow-md group relative ${
        href ? "cursor-pointer" : ""
      }`}
    >
      {/* Stretched link: el ::after del Link cubre toda la Card */}
      <CardHeader className="pb-3 p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm sm:text-base font-semibold text-primary mb-1">
              {href ? (
                <Link
                  href={href}
                  className="after:absolute after:inset-0 after:content-['']"
                >
                  {code}
                </Link>
              ) : (
                code
              )}
            </CardTitle>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              {title}
            </p>
          </div>
          {showArrow && href && (
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0 mt-1" />
          )}
        </div>
      </CardHeader>

      {(badges && badges.length > 0) || hasNotes ? (
        <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2">
            {badges &&
              badges.length > 0 &&
              badges.map((badge, index) => (
                <Badge
                  key={index}
                  className="text-xs bg-[var(--turquoise)] text-white hover:bg-[var(--turquoise-hover)] border-0"
                >
                  {badge}
                </Badge>
              ))}
            {/* z-[2] posiciona el botón POR ENCIMA del pseudo-elemento del Link */}
            {hasNotes && notes && (
              <div className="relative z-[2]">
                <NotesPopover notes={notes} title={code} />
              </div>
            )}
          </div>
        </CardContent>
      ) : null}
    </Card>
  );
}
