"use client";

import React from "react";

const CertificacionRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="flex text-xs border-b border-gray-300">
    <span className="font-bold w-1/3 pr-2">{label}</span>
    <span className="font-mono w-2/3">{value}</span>
  </div>
);

export function CertificacionesSection() {
  return (
    <div className="h-full border-l border-black p-1">
      <div className="text-center font-bold text-sm bg-gray-300 p-1">
        CERTIFICACIONES
      </div>
      <div className="text-center font-bold text-xs p-1 my-2">
        *** PAGO ELECTRONICO ***
      </div>
      <div className="space-y-2 px-1">
        {/* Aquí puedes mapear sobre datos reales en el futuro si es necesario */}
        <CertificacionRow label="BANCO:" value="xxxxxx" />
        <CertificacionRow label="DOCUMENTO:" value="xxxxxx" />
        <CertificacionRow label="OP.:" value="xxxxxx" />
        <CertificacionRow label="FECHA DE PAGO:" value="xxxxxx" />
        <CertificacionRow label="ACUSE:" value="xxxxxx" />
        <CertificacionRow label="IMPORTE TOTAL:" value="$xxxxxx" />
      </div>
    </div>
  );
}
