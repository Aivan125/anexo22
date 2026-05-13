import { useSimulator } from "@/lib/simulator-context";
import { Button } from "@/components/ui/button";
import { Building2, Globe, Ship, Package, DollarSign, Calendar, MapPin, Sparkles } from "lucide-react";


function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card p-4 transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center gap-2 border-b pb-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10">
          <Icon className="h-4 w-4 text-accent" />
        </div>
        <h3 className="text-sm font-semibold text-primary">{title}</h3>
      </div>
      <div className="space-y-1.5 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between gap-3 text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium text-foreground">{value}</span>
    </div>
  );
}

export default function CaseFileScreen() {
  const { goNext, caseData } = useSimulator();
  const c = caseData.case;

  return (
    <div className="animate-fade-in space-y-6">
      {/* Narrativa empresarial */}
      <section className="overflow-hidden rounded-2xl border bg-gradient-to-br from-primary to-[hsl(212_85%_16%)] p-6 text-primary-foreground shadow-lg">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
            <Sparkles className="h-3 w-3" /> Expediente del caso · {c.id}
          </div>
          {caseData.isExample && (
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
              Ejemplo demostrativo
            </span>
          )}
          <span className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary-foreground/80">
            {caseData.mode} · {caseData.route.from} → {caseData.route.to}
          </span>
        </div>
        <h2 className="text-xl font-bold leading-snug sm:text-2xl">{c.title}</h2>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-primary-foreground/85">
          <p>
            <strong className="text-accent">ANMINCADISA Imports, S.A. de C.V.</strong> es una empresa
            regiomontana fundada en 2024, dedicada a la distribución de equipo electrónico para el sector
            educativo y administrativo en el norte de México. Ante el crecimiento sostenido de su cartera
            de clientes corporativos, la dirección comercial ha decidido fortalecer su catálogo importando
            directamente desde Asia.
          </p>
          <p>
            Tras meses de negociación con el proveedor <strong className="text-accent">Shenzhen Smart Devices Co., Ltd.</strong>{" "}
            —fabricante chino con más de 15 años de experiencia—, ANMINCADISA cerró su primera orden de
            compra: <strong>100 tabletas electrónicas de 10 pulgadas</strong>, pactadas en términos
            <strong className="text-accent"> FOB Shanghai</strong>, con arribo marítimo al puerto de
            <strong className="text-accent"> Manzanillo, Colima</strong>.
          </p>
          <p>
            El embarque ya fue liberado por la aduana de salida y se encuentra en tránsito. Como agente
            aduanal asignado, tu responsabilidad es <strong>analizar el expediente, decidir el régimen
            aplicable, capturar el pedimento y calcular las contribuciones</strong> que deberá pagar el
            importador para liberar la mercancía. Cualquier error puede generar observaciones, multas o
            retrasos costosos.
          </p>
        </div>

        <div className="mt-5 grid gap-3 border-t border-primary-foreground/10 pt-4 sm:grid-cols-3">
          <MiniStat icon={Calendar} label="Operación" value="Importación 2024" />
          <MiniStat icon={MapPin} label="Aduana destino" value={c.terms.customsOffice} />
          <MiniStat icon={DollarSign} label="Valor comercial" value={`$${c.goods.invoiceValueUsd.toLocaleString()} USD`} />
        </div>
      </section>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Documentos del expediente
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={Building2} title="Importador">
            <Row label="Razón social" value={c.importer.name} />
            <Row label="RFC" value={c.importer.rfc} />
            <Row label="Domicilio" value={c.importer.city} />
          </InfoCard>

          <InfoCard icon={Globe} title="Proveedor">
            <Row label="Nombre" value={c.supplier.name} />
            <Row label="País exportación" value={c.supplier.countryExport} />
            <Row label="País origen" value={c.supplier.countryOrigin} />
          </InfoCard>

          <InfoCard icon={Package} title="Mercancía">
            <Row label="Descripción" value={c.goods.description} />
            <Row label="Cantidad" value={c.goods.quantity} />
            <Row label="Valor unitario" value={`$${c.goods.unitValueUsd} USD`} />
            <Row label="Valor factura" value={`$${c.goods.invoiceValueUsd.toLocaleString()} USD`} />
          </InfoCard>

          <InfoCard icon={Ship} title="Logística">
            <Row label="Incoterm" value={c.terms.incoterm} />
            <Row label="Transporte" value={c.terms.transportMode} />
            <Row label="Aduana" value={c.terms.customsOffice} />
            <Row label="Régimen" value={c.terms.regimeExpected} />
          </InfoCard>

          <InfoCard icon={DollarSign} title="Costos">
            <Row label="Flete" value={`$${c.terms.freightUsd.toLocaleString()} USD`} />
            <Row label="Seguro" value={`$${c.terms.insuranceUsd} USD`} />
            <Row label="Embalaje" value={`$${c.terms.packingUsd} USD`} />
            <Row label="Tipo de cambio" value={`$${c.terms.exchangeRate} MXN/USD`} />
          </InfoCard>

          <InfoCard icon={Package} title="Clasificación arancelaria">
            <Row label="Fracción" value={c.tariff.tariffCode} />
            <Row label="IGI" value={`${c.tariff.igiRate * 100}%`} />
            <Row label="IVA" value={`${c.tariff.ivaRate * 100}%`} />
            <Row label="DTA" value={`${c.tariff.dtaRate * 100}%`} />
          </InfoCard>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <Button onClick={goNext} className="bg-accent text-accent-foreground hover:bg-accent/90">
          Continuar al análisis →
        </Button>
      </div>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/15">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <div className="leading-tight">
        <p className="text-[10px] uppercase tracking-wider text-primary-foreground/60">{label}</p>
        <p className="text-xs font-semibold">{value}</p>
      </div>
    </div>
  );
}
