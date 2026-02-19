import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const publicPaths = ["/login", "/auth", "/error", "/", "/cuenta-inactiva"];
  const { pathname } = request.nextUrl;

  const isPublicPath = publicPaths.some((path) =>
    path === "/" ? pathname === path : pathname.startsWith(path),
  );

  if (!user && !isPublicPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (user && pathname === "/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/anexo22";
    return NextResponse.redirect(url);
  }

  // Verificar si el usuario tiene acceso activo (excepto en rutas públicas)
  if (user && !isPublicPath) {
    const profile = await prisma.profile.findUnique({
      where: { id: user.id },
      select: { isActive: true, role: true },
    });

    const isAdmin = profile?.role === "admin";
    const hasAccess = profile && (profile.isActive || isAdmin);

    if (!hasAccess) {
      const url = request.nextUrl.clone();
      url.pathname = "/cuenta-inactiva";
      const redirectResponse = NextResponse.redirect(url);
      for (const cookie of supabaseResponse.cookies.getAll()) {
        const { name, value, ...options } = cookie;
        redirectResponse.cookies.set(name, value, options);
      }
      return redirectResponse;
    }
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  // If you're creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse;
}
