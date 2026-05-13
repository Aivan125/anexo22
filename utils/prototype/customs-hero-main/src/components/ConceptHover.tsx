import { CONCEPTS } from "@/lib/concepts";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  term: string;
  children?: React.ReactNode;
  inline?: boolean;
}

export default function ConceptHover({ term, children, inline = true }: Props) {
  const concept = CONCEPTS[term];
  if (!concept) return <>{children ?? term}</>;

  return (
    <HoverCard openDelay={150} closeDelay={80}>
      <HoverCardTrigger asChild>
        <span
          className={cn(
            "cursor-help underline decoration-dotted decoration-accent/60 underline-offset-4 transition-colors hover:text-accent",
            !inline && "inline-flex items-center gap-1"
          )}
        >
          {children ?? term}
          {!inline && <Info className="h-3 w-3 text-accent" />}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 border-accent/30 bg-popover shadow-lg" side="top">
        <div className="space-y-1.5">
          <p className="text-sm font-semibold text-primary">{concept.title}</p>
          <p className="text-xs leading-relaxed text-muted-foreground">{concept.description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
