// Acciones del lado del servidor (Server Actions)
// Por ahora, simulamos la función de login

import { LoginFormValues } from "@/lib/validation";

interface LoginResponse {
  success: boolean;
  error?: string;
}

export async function login(data: LoginFormValues): Promise<LoginResponse> {
  // Simulamos una demora de red
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Credenciales de prueba
  const DEMO_EMAIL = "admin@anexo22.com";
  const DEMO_PASSWORD = "123456";

  if (data.email === DEMO_EMAIL && data.password === DEMO_PASSWORD) {
    // En una aplicación real, aquí harías:
    // - Validar credenciales contra la base de datos
    // - Crear sesión/token JWT
    // - Redirigir al dashboard
    console.log("Login exitoso para:", data.email);
    return { success: true };
  } else {
    return {
      success: false,
      error: "Credenciales incorrectas. Prueba con admin@anexo22.com / 123456",
    };
  }
}
