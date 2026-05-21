import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
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
      en: "Decoropic | One-Stop Interior Solutions for Projects in Ghana",
      zh: "Decoropic | 加纳项目的一站式室内装饰解决方案"
    },
    description: {
      en: "Project-focused interior solutions brand for Ghana, combining site measurement, budget-led design, sourcing coordination and local delivery support.",
      zh: "面向加纳项目的室内装饰品牌，整合现场测量、预算导向设计、采购协调与本地交付支持。"
    },
    titleTemplate: "%s | Decoropic",
    locale
  });
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getLocale();
  const structuredData = [websiteSchema(locale), organizationSchema(locale)];
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const htmlLang = locale === "zh" ? "zh-CN" : "en-GH";

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
        {children}
      </body>
    </html>
  );
}
