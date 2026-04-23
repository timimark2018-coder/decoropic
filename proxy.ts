import { NextResponse, type NextRequest } from "next/server";

const supportedLocales = new Set(["en", "zh"]);

export function proxy(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("lang") ?? request.nextUrl.searchParams.get("locale");

  if (!locale || !supportedLocales.has(locale)) {
    return NextResponse.next();
  }

  const nextUrl = request.nextUrl.clone();
  nextUrl.searchParams.delete("lang");
  nextUrl.searchParams.delete("locale");

  const response = NextResponse.redirect(nextUrl);
  response.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax"
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"]
};
