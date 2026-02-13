"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Notes } from "@/types/clasificacion-arancelaria";

interface NotesPopoverProps {
  notes: Notes;
  title: string;
}

export function NotesPopover({ notes, title }: NotesPopoverProps) {
  const hasNotes =
    (notes.legales && notes.legales.length > 0) ||
    (notes.nacionales && notes.nacionales.length > 0) ||
    (notes.subpartida && notes.subpartida.length > 0) ||
    (notes.explicativas && notes.explicativas.length > 0);

  if (!hasNotes) return null;

  const noteCounts = {
    legales: notes.legales?.length || 0,
    nacionales: notes.nacionales?.length || 0,
    subpartida: notes.subpartida?.length || 0,
    explicativas: notes.explicativas?.length || 0,
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-1 sm:gap-2 text-[10px] sm:text-xs border-[var(--turquoise)]/30 hover:bg-[var(--turquoise)]/10 hover:border-[var(--turquoise-hover)] h-7 sm:h-8"
        >
          <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[var(--turquoise)]" />
          <span className="hidden sm:inline">Ver Notas</span>
          <span className="sm:hidden">Notas</span>
          <Badge className="ml-1 px-1 sm:px-1.5 py-0 text-[9px] sm:text-[10px] bg-[var(--turquoise)]/20 text-[var(--turquoise)] border-0">
            {noteCounts.legales +
              noteCounts.nacionales +
              noteCounts.subpartida +
              noteCounts.explicativas}
          </Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] w-[95vw] sm:w-full p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg font-bold text-primary flex items-center gap-2">
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
            Notas - {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-2 sm:pr-4">
          <div className="space-y-4 sm:space-y-6">
            {notes.legales && notes.legales.length > 0 && (
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    Notas Legales
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    ({notes.legales.length}{" "}
                    {notes.legales.length === 1 ? "nota" : "notas"})
                  </span>
                </div>
                <div className="space-y-2 sm:space-y-3 pl-2 border-l-2 border-primary/30">
                  {notes.legales.map((note, index) => (
                    <div
                      key={note.id}
                      className="text-xs sm:text-sm text-foreground/90 leading-relaxed"
                    >
                      <span className="font-semibold text-primary mr-2">
                        {index + 1}.
                      </span>
                      {note.text}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {notes.nacionales && notes.nacionales.length > 0 && (
              <>
                {notes.legales && notes.legales.length > 0 && <Separator />}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-secondary text-secondary-foreground text-xs">
                      Notas Nacionales
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      ({notes.nacionales.length}{" "}
                      {notes.nacionales.length === 1 ? "nota" : "notas"})
                    </span>
                  </div>
                  <div className="space-y-2 sm:space-y-3 pl-2 border-l-2 border-secondary/50">
                    {notes.nacionales.map((note, index) => (
                      <div
                        key={note.id}
                        className="text-xs sm:text-sm text-foreground/90 leading-relaxed"
                      >
                        <span className="font-semibold text-secondary mr-2">
                          {index + 1}.
                        </span>
                        {note.text}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {notes.subpartida && notes.subpartida.length > 0 && (
              <>
                {((notes.legales && notes.legales.length > 0) ||
                  (notes.nacionales && notes.nacionales.length > 0)) && (
                  <Separator />
                )}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-[var(--turquoise)] text-white text-xs">
                      Notas de Subpartida
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      ({notes.subpartida.length}{" "}
                      {notes.subpartida.length === 1 ? "nota" : "notas"})
                    </span>
                  </div>
                  <div className="space-y-2 sm:space-y-3 pl-2 border-l-2 border-[var(--turquoise)]/50">
                    {notes.subpartida.map((note, index) => (
                      <div
                        key={note.id}
                        className="text-xs sm:text-sm text-foreground/90 leading-relaxed"
                      >
                        <span className="font-semibold text-[var(--turquoise)] mr-2">
                          {index + 1}.
                        </span>
                        {note.text}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {notes.explicativas && notes.explicativas.length > 0 && (
              <>
                {((notes.legales && notes.legales.length > 0) ||
                  (notes.nacionales && notes.nacionales.length > 0) ||
                  (notes.subpartida && notes.subpartida.length > 0)) && (
                  <Separator />
                )}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      Notas Explicativas
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      ({notes.explicativas.length}{" "}
                      {notes.explicativas.length === 1 ? "nota" : "notas"})
                    </span>
                  </div>
                  <div className="space-y-2 sm:space-y-3 pl-2 border-l-2 border-accent/50">
                    {notes.explicativas.map((note, index) => (
                      <div
                        key={note.id}
                        className="text-xs sm:text-sm text-foreground/90 leading-relaxed"
                      >
                        <span className="font-semibold text-accent mr-2">
                          {index + 1}.
                        </span>
                        {note.text}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
