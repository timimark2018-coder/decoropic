declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function gtagAvailable() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

export function trackPageView(url: string) {
  if (!gtagAvailable()) {
    return;
  }

  window.gtag!("event", "page_view", {
    page_location: url,
    page_path: new URL(url, window.location.origin).pathname
  });
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (!gtagAvailable()) {
    return;
  }

  window.gtag!("event", eventName, params);
}

export function trackLead(eventName: string, params: Record<string, unknown> = {}) {
  trackEvent(eventName, {
    event_category: "lead",
    ...params
  });

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (!adsId || !conversionLabel || !gtagAvailable()) {
    return;
  }

  window.gtag!("event", "conversion", {
    send_to: `${adsId}/${conversionLabel}`,
    value: 1,
    currency: "USD",
    ...params
  });
}

