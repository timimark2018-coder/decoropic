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

// 页面是按请求渲染的(getLocale() 读 x-locale 属动态 API)，Next 因此默认发
// private, no-cache, no-store —— CDN 完全不缓存(x-vercel-cache: MISS)。
// 但响应内容只由 URL 决定(语言已经在路径里)，对所有访客完全相同，所以可以放心
// 让 CDN 缓存:s-maxage 让边缘存 1 小时，stale-while-revalidate 在后台回源期间
// 继续用旧副本，浏览器端不缓存(max-age=0)以便内容更新即时可见。
const CDN_CACHE = "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";

// 只给 HTML 文档加上面那个头。matcher 也会命中 /images/*.jpg、/og/*.jpg 这类
// public 下的静态文件 —— 给它们套 max-age=0 会让浏览器每次都回来校验图片，
// 那是性能倒退，所以带扩展名的路径一律放过，保持平台原本的强缓存。
const HAS_EXTENSION = /\.[a-z0-9]+$/i;

function isCacheableDocument(request: NextRequest, pathname: string) {
  const safeMethod = request.method === "GET" || request.method === "HEAD";
  return safeMethod && !HAS_EXTENSION.test(pathname);
}

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

    const response = NextResponse.rewrite(rewritten, {
      request: { headers: withLocaleHeader(request, "zh") }
    });
    if (isCacheableDocument(request, pathname)) {
      response.headers.set("Cache-Control", CDN_CACHE);
    }
    return response;
  }

  const response = NextResponse.next({
    request: { headers: withLocaleHeader(request, "en") }
  });
  if (isCacheableDocument(request, pathname)) {
    response.headers.set("Cache-Control", CDN_CACHE);
  }
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"]
};
