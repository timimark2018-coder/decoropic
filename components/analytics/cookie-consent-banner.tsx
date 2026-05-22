"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/content/types";
import { gtagAvailable } from "@/lib/analytics/gtag";
import { fbqAvailable, pixelConsentGrant, pixelConsentRevoke } from "@/lib/analytics/meta-pixel";
import { captureUtm } from "@/lib/utm-tracking";

// ─── Cookie consent banner ────────────────────────────────────────────────────
// Required by Ghana's Data Protection Act 2012 (Act 843) for data collected
// via analytics and advertising cookies.
//
// Consent is stored in localStorage under CONSENT_KEY.
// On "granted": activates GA4 Consent Mode v2 + Meta Pixel consent.
// On "denied" / not yet decided: scripts load silently with storage blocked.

const CONSENT_KEY = "decoropic_analytics_consent";

const copy = {
  en: {
    message:
      "We use analytics cookies to understand how visitors use our site and to improve your experience. No data is sent to advertising networks without your consent.",
    accept: "Accept",
    decline: "Decline"
  },
  zh: {
    message:
      "我们使用分析型 Cookie 了解访客如何使用本网站，以改善体验。未经您同意，不会向广告网络发送任何数据。",
    accept: "接受",
    decline: "拒绝"
  }
} as const;

type CookieConsentBannerProps = {
  locale?: Locale;
};

function grantConsent() {
  // GA4 Consent Mode v2
  if (gtagAvailable()) {
    window.gtag!("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted"
    });
  }
  // Meta Pixel
  if (fbqAvailable()) {
    pixelConsentGrant();
  }
}

function revokeConsent() {
  if (fbqAvailable()) {
    pixelConsentRevoke();
  }
  // gtag consent stays at default "denied" — no action needed
}

export function CookieConsentBanner({ locale = "en" }: CookieConsentBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Always capture UTM params on mount regardless of consent state
    captureUtm();

    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") {
      grantConsent();
      return;
    }
    if (stored === "denied") {
      // Already decided — respect choice silently
      return;
    }
    // No decision yet — show banner
    setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    grantConsent();
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, "denied");
    revokeConsent();
    setVisible(false);
  }

  if (!visible) return null;

  const c = copy[locale];

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 bg-brand-pine-dark/96 text-brand-ivory shadow-[0_-4px_32px_rgba(0,0,0,0.25)] backdrop-blur-sm"
    >
      <div className="container-shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="max-w-2xl text-sm leading-relaxed text-brand-ivory/85">
          {c.message}
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            onClick={handleDecline}
            className="rounded-full border border-brand-ivory/30 px-5 py-2.5 text-sm font-medium text-brand-ivory/80 transition-colors hover:border-brand-ivory/60 hover:text-brand-ivory"
          >
            {c.decline}
          </button>
          <button
            onClick={handleAccept}
            className="rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-pine-dark transition-colors hover:bg-brand-gold/90"
          >
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
