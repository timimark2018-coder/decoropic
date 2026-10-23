import { NextResponse, type NextRequest } from "next/server";

// 语言改为 URL 决定，不再由 NEXT_LOCALE cookie 决定。
//
// 旧做法是同一个 URL 按 cookie 返回不同语言 —— 中文版因此没有任何可索引的地址，
// Google 既收录不到，也会把两种语言视为同一页的重复内容。
//
// 现在:
//   /zh/<path>        内部重写到 /<path>，并带 x-locale: zh
//   /<path>           x-locale: en
//   /<path>?lang=zh   301 到 /zh/<path>(兼容旧链接)
// getLocale() 只读 x-locale，所以 URL 是语言的唯一来源。

const supportedLocales = new Set(["en", "zh"]);
const LOCALE_HEADER = "x-locale";

function withLocaleHeader(request: NextRequest, locale: "en" | "zh") {
  const headers = new Headers(request.headers);
  headers.set(LOCALE_HEADER, locale);
  return headers;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 旧的 ?lang= / ?locale= 链接:301 到对应的 /zh 路径，不再发 cookie
  const legacyLocale =
    request.nextUrl.searchParams.get("lang") ?? request.nextUrl.searchParams.get("locale");

  if (legacyLocale && supportedLocales.has(legacyLocale)) {
    const target = request.nextUrl.clone();
    target.searchParams.delete("lang");
    target.searchParams.delete("locale");

    const alreadyZh = pathname === "/zh" || pathname.startsWith("/zh/");
    if (legacyLocale === "zh" && !alreadyZh) {
      target.pathname = pathname === "/" ? "/zh" : `/zh${pathname}`;
    } else if (legacyLocale === "en" && alreadyZh) {
      target.pathname = pathname.slice(3) || "/";
    }

    return NextResponse.redirect(target, 301);
  }

  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    const rewritten = request.nextUrl.clone();
    rewritten.pathname = pathname.slice(3) || "/";

    return NextResponse.rewrite(rewritten, {
      request: { headers: withLocaleHeader(request, "zh") }
    });
  }

  return NextResponse.next({
    request: { headers: withLocaleHeader(request, "en") }
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"]
};
