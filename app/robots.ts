// app/robots.ts

import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // Por defecto, bloqueamos todo.
        disallow: "/",
      },
      {
        // Y luego, específicamente para todos los bots, permitimos ciertas rutas.
        // Google interpreta esto como excepciones a la regla general de bloqueo.
        userAgent: "*",
        // Permite el acceso a la página de inicio (exactamente "/")
        allow: "/$",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
