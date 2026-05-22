// ─── GA4 / Google Ads event SDK ──────────────────────────────────────────────
// Thin wrapper around the global gtag() function.
// All functions are safe to call from SSR — they no-op when window is absent.

import { getStoredUtm } from "@/lib/utm-tracking";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function gtagAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

export function trackPageView(url: string): void {
  if (!gtagAvailable()) return;
  window.gtag!("event", "page_view", {
    page_location: url,
    page_path: new URL(url, window.location.origin).pathname
  });
}

/**
 * Fire a GA4 custom event. UTM params stored in sessionStorage are
 * automatically merged so every event carries campaign context.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (!gtagAvailable()) return;
  const utm = getStoredUtm();
  window.gtag!("event", eventName, { ...utm, ...params });
}

/**
 * Fire a lead-category event AND, if Google Ads conversion IDs are
 * configured, also send a conversion ping.
 */
export function trackLead(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  trackEvent(eventName, { event_category: "lead", ...params });

  const adsId =
    process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel =
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (!adsId || !conversionLabel || !gtagAvailable()) return;

  window.gtag!("event", "conversion", {
    send_to: `${adsId}/${conversionLabel}`,
    value: 1,
    currency: "GHS",
    ...params
  });
}
