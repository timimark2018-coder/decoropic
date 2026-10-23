import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { CookieConsentBanner } from "@/components/analytics/cookie-consent-banner";
import { getLocale } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif-display"
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Decoropic | Building Materials Sourcing from China",
      zh: "Decoropic | 中国建材家居一站式采购与出口"
    },
    description: {
      en: "Source building materials, furniture and interior packages from China for overseas projects. Factory-direct supply, QC, consolidation and Ghana delivery.",
      zh: "为海外项目从中国采购建材、家具与室内整体配套：工厂直供、验货、拼柜装柜，并提供加纳本地交付。"
    },
    titleTemplate: "%s | Decoropic",
    locale
  });
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getLocale();
  const structuredData = [websiteSchema(locale), organizationSchema(locale)];
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  // en(不是 en-GH):站点面向全球买家，锁区域会让 Google 判定为加纳本地站。
  const htmlLang = locale === "zh" ? "zh-CN" : "en";

  return (
    <html lang={htmlLang} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
      </head>
      <body>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <MetaPixel />
        {children}
        <CookieConsentBanner locale={locale} />
        {/* TODO: Deco Bot 浮窗暂时下线（2026-06）。如需恢复，取消下面注释即可。
        <Script
          src="https://bot.decoropic.com/widget.js"
          strategy="afterInteractive"
          data-gateway="wss://bot.decoropic.com/ws/chat"
          data-wa="https://wa.me/8613392247649"
          data-lang="auto"
          data-ga=""
          data-pixel=""
        />
        */}
      </body>
    </html>
  );
}
