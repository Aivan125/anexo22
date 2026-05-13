import { useRef, useState } from "react";
import { useSimulator } from "@/lib/simulator-context";
import { Button } from "@/components/ui/button";
import {
  Ship,
  FileText,
  Scale,
  ClipboardList,
  Calculator,
  Gavel,
  CheckCircle2,
  RotateCcw,
  ArrowLeft,
  Download,
  Loader2,
} from "lucide-react";
import logoAnmincadisa from "@/assets/anmincadisa-logo.png";

export default function SummaryScreen() {
  const { resetSimulator, goToScreen, studentName, group, score, scoreBandLabel, caseData } = useSimulator();
  const c = caseData.case;
  const ANALYSIS_QUESTIONS = caseData.analysisQuestions;
  const DECISION_QUESTIONS = caseData.decisionQuestions;
  const CONTROVERSY_QUESTIONS = caseData.controversyQuestions;
  const PEDIMENTO_FIELDS = caseData.pedimentoFields;
  const TAX_FIELDS = caseData.taxFields;
  const pdfRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);

  const handleDownloadPdf = async () => {
    if (!pdfRef.current) return;
    setGenerating(true);
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      const pdf = new jsPDF("p", "mm", "a4");
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 8;
      const imgW = pageW - margin * 2;
      const imgH = (canvas.height * imgW) / canvas.width;
      let heightLeft = imgH;
      let position = margin;
      pdf.addImage(imgData, "JPEG", margin, position, imgW, imgH);
      heightLeft -= pageH - margin * 2;
      while (heightLeft > 0) {
        position = heightLeft - imgH + margin;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", margin, position, imgW, imgH);
        heightLeft -= pageH - margin * 2;
      }
      const safeName = (studentName || "participante").replace(/\s+/g, "_");
      pdf.save(`Resumen_Caso_ANMINCADISA_${safeName}.pdf`);
    } finally {
      setGenerating(false);
    }
  };

  const sections = [
    {
      icon: Ship,
      title: "1. Operación y expediente",
      content: (
        <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">{c.importer.name}</strong> realiza una{" "}
            <strong className="text-foreground">importación definitiva</strong> de{" "}
            {c.goods.quantity} tabletas electrónicas adquiridas a{" "}
            <strong className="text-foreground">{c.supplier.name}</strong> (origen:{" "}
            {c.supplier.countryOrigin}).
          </p>
          <p>
            La mercancía arriba por vía <strong className="text-foreground">{c.terms.transportMode}</strong> a la
            aduana de <strong className="text-foreground">{c.terms.customsOffice}</strong> bajo el
            Incoterm <strong className="text-foreground">{c.terms.incoterm}</strong>, con tipo de cambio
            de ${c.terms.exchangeRate} MXN/USD.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "2. Análisis documental",
      content: (
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {ANALYSIS_QUESTIONS.map((q) => (
            <li key={q.id} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              <span>
                <span className="text-foreground">{q.text}</span>{" "}
                <strong className="text-success">{q.correctAnswer}</strong>
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Scale,
      title: "3. Toma de decisiones",
      content: (
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {DECISION_QUESTIONS.map((q) => (
            <li key={q.id} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              <span>
                <span className="text-foreground">{q.text}</span>{" "}
                <strong className="text-success">{q.correctAnswer}</strong>
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: ClipboardList,
      title: "4. Captura del pedimento",
      content: (
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-xs">
            <tbody>
              {PEDIMENTO_FIELDS.map((f, i) => (
                <tr key={f.id} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="px-3 py-1.5 text-muted-foreground">{f.label}</td>
                  <td className="px-3 py-1.5 font-mono font-medium text-foreground">
                    {String(f.expected)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      icon: Calculator,
      title: "5. Cálculo de contribuciones",
      content: (
        <div className="space-y-3">
          {TAX_FIELDS.map((f) => (
            <div key={f.id} className="rounded-lg border border-border bg-card p-3">
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">{f.label}</span>
                <span className="font-mono text-sm font-bold text-primary">
                  ${Number(f.expected).toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN
                </span>
              </div>
              {f.formula && (
                <>
                  <p className="font-mono text-[11px] text-accent">{f.formula.expression}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{f.formula.explanation}</p>
                  {f.formula.example && (
                    <p className="mt-1 font-mono text-[11px] text-foreground/80">
                      Ej: {f.formula.example}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: Gavel,
      title: "6. Controversia aduanera",
      content: (
        <div className="space-y-3 text-sm leading-relaxed">
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-destructive">Riesgo</p>
            <p className="mt-1 text-foreground">{c.risk.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{c.risk.description}</p>
            <p className="mt-1 text-xs">
              <strong className="text-destructive">Impacto:</strong>{" "}
              <span className="text-muted-foreground">{c.risk.impact}</span>
            </p>
          </div>
          <div className="rounded-lg border border-accent/40 bg-accent/5 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Infracción</p>
            <p className="mt-1 text-foreground">{c.infraction.legalBasis}</p>
            <p className="mt-1 text-xs text-muted-foreground">{c.infraction.description}</p>
            <p className="mt-1 text-xs">
              <strong className="text-accent">Detección:</strong>{" "}
              <span className="text-muted-foreground">{c.infraction.detectedBy}</span>
            </p>
          </div>
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Sanción</p>
            <p className="mt-1 text-foreground">{c.sanction.legalBasis}</p>
            <p className="mt-1 text-xs text-muted-foreground">{c.sanction.fineRange}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              <strong className="text-foreground">Estimación:</strong> {c.sanction.estimatedFine}
            </p>
            <ul className="ml-4 mt-1 list-disc space-y-0.5 text-xs text-muted-foreground">
              {c.sanction.additional.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-muted/40 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Respuestas correctas de la controversia
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {CONTROVERSY_QUESTIONS.map((q) => (
                <li key={q.id} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                  <span>
                    <span className="text-foreground">{q.text}</span>{" "}
                    <strong className="text-success">{q.correctAnswer}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const today = new Date().toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-wrap justify-end gap-2">
        <Button onClick={handleDownloadPdf} disabled={generating} className="bg-primary">
          {generating ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Download className="mr-2 h-4 w-4" />
          )}
          {generating ? "Generando PDF..." : "Descargar resumen en PDF"}
        </Button>
      </div>

      <div ref={pdfRef} className="space-y-6 bg-background p-2">
        {/* Encabezado del PDF con logo y datos del participante */}
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={logoAnmincadisa}
                alt="ANMINCADISA"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
                crossOrigin="anonymous"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  ANMINCADISA
                </p>
                <h2 className="text-xl font-bold text-foreground">
                  Resumen integral del caso
                </h2>
                <p className="text-xs text-muted-foreground">
                  Simulador de operación aduanera · {today}
                </p>
              </div>
            </div>
            {scoreBandLabel && (
              <div className="rounded-lg border border-primary/30 bg-card px-4 py-2 text-right">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Calificación
                </p>
                <p className="font-mono text-2xl font-bold text-primary">{score}/100</p>
                <p className="text-[11px] text-muted-foreground">{scoreBandLabel}</p>
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card/60 p-3">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Participante
              </p>
              <p className="text-sm font-semibold text-foreground">
                {studentName || "—"}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card/60 p-3">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Grupo
              </p>
              <p className="text-sm font-semibold text-foreground">{group || "—"}</p>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Recorrido completo de la operación aduanera con las respuestas correctas de cada
            etapa, para comprender el proceso de importación definitiva analizado.
          </p>
        </div>

        <div className="space-y-5">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <section
                key={i}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <header className="mb-4 flex items-center gap-3 border-b border-border pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                </header>
                {s.content}
              </section>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3 pt-2">
        <Button variant="outline" onClick={() => goToScreen("validation")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al resultado
        </Button>
        <Button onClick={resetSimulator} className="bg-accent text-accent-foreground hover:bg-accent/90">
          <RotateCcw className="mr-2 h-4 w-4" /> Practicar de nuevo
        </Button>
      </div>
    </div>
  );
}
