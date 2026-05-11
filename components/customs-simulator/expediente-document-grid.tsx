import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";
import {
  Boxes,
  Building2,
  DollarSign,
  Globe,
  Package,
  Ship,
} from "lucide-react";

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 justify-between items-start text-sm">
      <span className="text-muted-foreground shrink-0">{label}</span>
      <span className="font-medium text-foreground text-right max-w-[65%] sm:max-w-none">
        {value}
      </span>
    </div>
  );
}

function DocCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof Building2;
  children: React.ReactNode;
}) {
  return (
    <article
      className="rounded-xl border border-border/80 bg-card text-card-foreground shadow-sm px-5 py-4 flex flex-col gap-3 min-h-[10rem]"
    >
      <header className="flex items-center gap-2 pb-2 border-b border-border/70">
        <Icon className="h-5 w-5 text-amber-600 dark:text-amber-500 shrink-0" />
        <h3 className="text-sm font-semibold">{title}</h3>
      </header>
      <div className="space-y-2.5">{children}</div>
    </article>
  );
}

function pct(rate: number) {
  const raw = Math.round(Math.abs(rate) * 10000) / 100;
  return `${raw}%`;
}

function fmtUsd(amount: number) {
  const n = Intl.NumberFormat("es-MX", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(amount);
  return `$${n} USD`;
}

export function ExpedienteDocumentGrid({
  caseInfo,
}: {
  caseInfo: CaseBundle["case"];
}) {
  const {
    importer,
    supplier,
    goods,
    terms,
    tariff,
  } = caseInfo;

  const tc = Intl.NumberFormat("es-MX", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(terms.exchangeRate);

  return (
    <section
      className="rounded-2xl border border-border/60 bg-muted/45 px-4 py-6 sm:px-6 sm:py-8"
      aria-labelledby="expediente-docs-heading"
    >
      <div className="space-y-4">
        <h4
          id="expediente-docs-heading"
          className="text-xs sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground"
        >
          Documentos del expediente
        </h4>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <DocCard title="Importador" icon={Building2}>
          <Row label="Razón social" value={importer.name} />
          <Row label="RFC" value={importer.rfc} />
          <Row label="Domicilio" value={importer.city} />
        </DocCard>

        <DocCard title="Proveedor" icon={Globe}>
          <Row label="Nombre" value={supplier.name} />
          <Row label="País exportación" value={supplier.countryExport} />
          <Row label="País origen" value={supplier.countryOrigin} />
        </DocCard>

        <DocCard title="Mercancía" icon={Package}>
          <Row label="Descripción" value={goods.description} />
          <Row
            label="Cantidad"
            value={String(goods.quantity)}
          />
          <Row label="Valor unitario" value={fmtUsd(goods.unitValueUsd)} />
          <Row label="Valor factura" value={fmtUsd(goods.invoiceValueUsd)} />
        </DocCard>

        <DocCard title="Logística" icon={Ship}>
          <Row label="Incoterm" value={terms.incoterm} />
          <Row label="Transporte" value={terms.transportMode} />
          <Row label="Aduana" value={terms.customsOffice} />
          <Row label="Régimen" value={terms.regimeExpected} />
        </DocCard>

        <DocCard title="Costos" icon={DollarSign}>
          <Row label="Flete" value={fmtUsd(terms.freightUsd)} />
          <Row label="Seguro" value={fmtUsd(terms.insuranceUsd)} />
          <Row label="Embalaje" value={fmtUsd(terms.packingUsd)} />
          <Row label="Tipo de cambio" value={`$${tc} MXN/USD`} />
        </DocCard>

        <DocCard title="Clasificación arancelaria" icon={Boxes}>
          <Row label="Fracción" value={tariff.tariffCode} />
          <Row label="IGI" value={pct(tariff.igiRate)} />
          <Row label="IVA" value={pct(tariff.ivaRate)} />
          <Row label="DTA" value={pct(tariff.dtaRate)} />
        </DocCard>
        </div>
      </div>
    </section>
  );
}
