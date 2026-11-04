"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CONSENT_KEY } from "@/components/analytics/cookie-consent-banner";
import { trackEvent, trackPageView } from "@/lib/analytics/gtag";

// Support both the original env var name and the shorter alias
const gaId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  process.env.NEXT_PUBLIC_GA_ID ||
  "";
const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";
const primaryId = gaId || adsId;

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!primaryId || !pathname) return;
    const query = searchParams?.toString();
    const url = `${window.location.origin}${pathname}${query ? `?${query}` : ""}`;
    trackPageView(url);
  }, [pathname, searchParams]);

  // whatsapp_click 走事件委托:全站 WhatsApp 链接(wa.me 与 api.whatsapp.com，
  // 含 content 里写死的那些)一处覆盖，新加的链接不用再记得埋点。
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.<HTMLAnchorElement>(
        'a[href*="wa.me/"], a[href*="api.whatsapp.com/"]'
      );
      if (!link) return;
      trackEvent("whatsapp_click", {
        event_category: "engagement",
        source_page: link.dataset.sourcePage ?? window.location.pathname
      });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!primaryId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          /* Consent Mode v2: default denied — CookieConsentBanner grants on user accept */
          gtag('consent','default',{
            analytics_storage:'denied',
            ad_storage:'denied',
            ad_user_data:'denied',
            ad_personalization:'denied',
            wait_for_update:2000
          });
          /* 回访者已同意过就在这里恢复:横幅的 effect 比本脚本先跑，那时 gtag 还不存在，
             它的 grantConsent() 会落空，结果每次加载都停在 denied */
          try {
            if (localStorage.getItem('${CONSENT_KEY}') === 'granted') {
              gtag('consent','update',{
                analytics_storage:'granted',
                ad_storage:'granted',
                ad_user_data:'granted',
                ad_personalization:'granted'
              });
            }
          } catch (e) {}
          gtag('js', new Date());
          ${gaId ? `gtag('config','${gaId}',{send_page_view:false});` : ""}
          ${adsId ? `gtag('config','${adsId}');` : ""}
        `}
      </Script>
    </>
  );
}
