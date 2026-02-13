// // components/layout/DynamicAuthButton.tsx (o donde decidas guardarlo)

// "use client";

// import { useEffect, useState } from "react";
// import { User } from "@supabase/supabase-js";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import { createClient } from "@/utils/supabase/client";

// type DynamicAuthButtonProps = {
//   TextWhenUser?: string;
//   TextWhenNotUser?: string;
// };

// export default function DynamicAuthButton({
//   TextWhenUser,
//   TextWhenNotUser,
// }: DynamicAuthButtonProps) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getUserSession = async () => {
//       const supabase = createClient();
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       setUser(session?.user ?? null);
//       setIsLoading(false);
//     };

//     getUserSession();
//   }, []);

//   if (isLoading) {
//     return <Skeleton className="h-10 w-28 rounded-md" />;
//   }

//   if (user) {
//     return (
//       <Button
//         asChild
//         className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md"
//       >
//         <Link href={"/anexo22"}>{TextWhenUser}</Link>
//       </Button>
//     );
//   }

//   return (
//     <Button
//       asChild
//       className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md"
//     >
//       <Link href="/login">{TextWhenNotUser}</Link>
//     </Button>
//   );
// }

// /src/components/layout/DynamicAuthButton.tsx
"use client";

import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/utils/supabase/client";

type DynamicAuthButtonProps = {
  TextWhenUser?: string;
  TextWhenNotUser?: string;
  userLink?: string;
};

export default function DynamicAuthButton({
  TextWhenUser = "Mi Cuenta",
  TextWhenNotUser = "Iniciar Sesión",
  userLink = "/dashboard",
}: DynamicAuthButtonProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    // 1. Obtener la sesión inicial para el primer renderizado
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setIsLoading(false);
    };

    getInitialSession();

    // 2. Suscribirse a los cambios en el estado de autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        // Asegurarse de que el esqueleto no reaparezca en cambios de sesión
        if (isLoading) setIsLoading(false);
      },
    );

    // 3. Limpiar la suscripción cuando el componente se desmonte
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [isLoading]); // Añadimos isLoading para que el linter no se queje, no afecta la lógica.

  // Muestra el esqueleto mientras se obtiene la sesión inicial
  if (isLoading) {
    return <Skeleton className="h-10 w-32 rounded-md" />;
  }

  // Si hay un usuario, muestra el botón de usuario
  if (user) {
    return (
      <Button
        asChild
        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md"
      >
        <Link href={userLink}>{TextWhenUser}</Link>
      </Button>
    );
  }

  // Si no hay usuario, muestra el botón de iniciar sesión
  return (
    <Button
      asChild
      className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md"
    >
      <Link href="/login">{TextWhenNotUser}</Link>
    </Button>
  );
}
