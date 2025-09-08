import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Simulador Anexo 22",
    default: "Simulador de Pedimento Anexo 22",
  },
  description:
    "Aprende a llenar el pedimento aduanal de México con casos prácticos. Una herramienta de ANMIN-CADISA para profesionales de comercio exterior.",
  keywords: [
    "Anexo 22",
    "Pedimento",
    "Comercio Exterior",
    "Aduanas México",
    "Simulador Aduanero",
    "Capacitación Aduanera",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
