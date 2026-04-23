"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics/gtag";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";
const primaryId = gaId || adsId;

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!primaryId || !pathname) {
      return;
    }

    const query = searchParams?.toString();
    const url = `${window.location.origin}${pathname}${query ? `?${query}` : ""}`;
    trackPageView(url);
  }, [pathname, searchParams]);

  if (!primaryId) {
    return null;
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${gaId ? `gtag('config', '${gaId}', { send_page_view: false });` : ""}
          ${adsId ? `gtag('config', '${adsId}');` : ""}
        `}
      </Script>
    </>
  );
}
