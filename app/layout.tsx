import type { Metadata } from "next";
import { Fraunces, Source_Sans_3, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ANMIN-CADISA",
    default: "ANMIN-CADISA | Consultoría en Comercio Exterior y Aduanas",
  },
  description:
    "Formación práctica para profesionales del comercio exterior. Simuladores de pedimento, clasificación arancelaria y capacitación en normativa aduanera mexicana.",
  keywords: [
    "Comercio Exterior",
    "Aduanas México",
    "Anexo 22",
    "Pedimento",
    "Clasificación Arancelaria",
    "LIGIE",
    "Capacitación Aduanera",
    "Consultoría Aduana",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fraunces.variable} ${sourceSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:shadow-lg"
        >
          Saltar al contenido
        </a>
        {children}
        <Toaster
          richColors
          expand={true}
          toastOptions={{
            classNames: {
              // Clase base para todos los toasts, aquí se aplican los data-type
              toast:
                "rounded-md shadow-lg border text-sm font-medium " +
                // Estilos para LOADING usando tus variables CSS
                "data-[type=loading]:!bg-blue-100 data-[type=loading]:!text-blue-800 data-[type=loading]:!border-blue-300 " +
                // Estilos para SUCCESS (ejemplo, usa tus variables o clases)
                "data-[type=success]:!bg-green-50 data-[type=success]:!text-green-800 data-[type=success]:!border-green-300 " +
                // Estilos para ERROR (ejemplo, usa tus variables o clases)
                "data-[type=error]:!bg-red-50 data-[type=error]:!text-red-800 data-[type=error]:!border-red-300",

              title: "font-semibold", // Estilos para el título
              loader: "!border-t-blue-600",
            },
          }}
        />
      </body>
    </html>
  );
}
