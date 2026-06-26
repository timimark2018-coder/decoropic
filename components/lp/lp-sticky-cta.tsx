"use client";

import { useState } from "react";
import { Calculator, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import type { Locale } from "@/content/types";
import { trackEvent } from "@/lib/analytics/gtag";
import { pixelTrack } from "@/lib/analytics/meta-pixel";
import { LpLeadForm } from "./lp-lead-form";
import { WHATSAPP_NUMBER } from "@/lib/constants/contact";

type LpStickyCtaProps = {
  sourcePage: string;
  locale?: Locale;
  whatsappMessage?: string;
};

function scrollToEstimator() {
  document.querySelector("#lp-estimator")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function LpStickyCta({
  sourcePage,
  locale = "en",
  whatsappMessage = "Hi Kevin, I'm looking at the Decoropic villa estimator and I'd like to chat."
}: LpStickyCtaProps) {
  const [open, setOpen] = useState(true);
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  function trackWhatsApp() {
    trackEvent("whatsapp_click", { source_page: sourcePage });
    pixelTrack("Contact", { source_page: sourcePage });
  }

  return (
    <>
      {/* Mobile: two circular FABs — gold estimator + dark-green WhatsApp */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 lg:hidden">
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          onClick={trackWhatsApp}
          aria-label="Chat on WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-brand-pine-dark text-brand-sand shadow-card"
        >
          <MessageCircle size={24} strokeWidth={1.8} />
        </a>
        <button
          type="button"
          onClick={scrollToEstimator}
          aria-label="Get my estimate"
          className="grid h-14 w-14 place-items-center rounded-full bg-brand-gold text-brand-pine-dark shadow-card"
        >
          <Calculator size={24} strokeWidth={1.8} />
        </button>
      </div>

      {/* Desktop: collapsible bottom-right mini lead form, always visible */}
      <div className="fixed bottom-6 right-6 z-40 hidden w-[320px] overflow-hidden rounded-2xl border border-brand-line/70 bg-white shadow-card lg:block">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between bg-brand-pine-dark px-5 py-3 text-left text-sm font-semibold text-brand-ivory"
        >
          <span>Get your estimate</span>
          {open ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
        {open ? (
          <div className="p-5">
            <p className="mb-3 text-xs leading-5 text-brand-ink/70">
              No signup. No phone call. Just clarity — in 24 hours.
            </p>
            <LpLeadForm sourcePage={sourcePage} locale={locale} variant="compact" />
            <div className="mt-3 flex justify-center">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                onClick={trackWhatsApp}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-pine underline-offset-2 hover:underline"
              >
                <MessageCircle size={16} strokeWidth={1.8} />
                Prefer WhatsApp? Chat now
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
