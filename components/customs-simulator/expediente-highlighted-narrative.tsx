function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Parte texto en spans; aplica marcas de acento de mayor a menor longitud sin solaparse en zonas ya marcadas. */
function splitAccentSpans(
  text: string,
  terms: readonly string[],
): { text: string; accent: boolean }[] {
  if (!terms.length) return [{ text, accent: false }];

  const uniqueSorted = [...new Set(terms.filter(Boolean))].sort(
    (a, b) => b.length - a.length,
  );

  let spans = [{ text, accent: false as boolean }];

  for (const raw of uniqueSorted) {
    const pattern = escapeRegExp(raw);
    const re = new RegExp(pattern, "gi");
    const next: typeof spans = [];
    for (const span of spans) {
      if (span.accent) {
        next.push(span);
        continue;
      }
      let last = 0;
      let m: RegExpExecArray | null;
      const src = span.text;
      re.lastIndex = 0;
      while ((m = re.exec(src)) !== null) {
        const start = m.index;
        const end = start + m[0].length;
        if (start > last) {
          next.push({ text: src.slice(last, start), accent: false });
        }
        next.push({ text: m[0], accent: true });
        last = end;
      }
      if (last < src.length) {
        next.push({ text: src.slice(last), accent: false });
      }
    }
    spans = next.length ? next : spans;
  }

  return spans;
}

export function ExpedienteHighlightedNarrative({
  paragraphs,
  accentTerms,
}: {
  paragraphs: string[];
  accentTerms?: readonly string[];
}) {
  const terms = accentTerms ?? [];

  return (
    <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-white/92">
      {paragraphs.map((p, pi) => {
        const spans = splitAccentSpans(p, terms ?? []);
        return (
          <p key={`nar-p-${String(pi)}`}>
            {spans.map((s, si) =>
              s.accent ? (
                <span key={si} className="font-semibold text-amber-400">
                  {s.text}
                </span>
              ) : (
                <span key={si}>{s.text}</span>
              ),
            )}
          </p>
        );
      })}
    </div>
  );
}
