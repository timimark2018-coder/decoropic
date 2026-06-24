"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import type { Locale } from "@/content/types";
import { trackEvent } from "@/lib/analytics/gtag";
import { pixelTrack } from "@/lib/analytics/meta-pixel";
import { LpLeadForm } from "./lp-lead-form";

const WA_NUMBER = "233531519347";

type LpStickyCtaProps = {
  sourcePage: string;
  locale?: Locale;
  whatsappMessage?: string;
};

function scrollToForm() {
  document.querySelector("#lp-lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function LpStickyCta({
  sourcePage,
  locale = "en",
  whatsappMessage = "Hi Kevin, I'm looking at the Decoropic villa estimator and I'd like to chat."
}: LpStickyCtaProps) {
  const [open, setOpen] = useState(true);
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  function trackWhatsApp() {
    trackEvent("whatsapp_click", { source_page: sourcePage });
    pixelTrack("Contact", { source_page: sourcePage });
  }

  return (
    <>
      {/* Mobile: fixed bottom action bar — WhatsApp + scroll-to-form */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-brand-line/60 bg-brand-sand/95 p-3 backdrop-blur lg:hidden">
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          onClick={trackWhatsApp}
          aria-label="Chat on WhatsApp"
          className="inline-flex flex-none items-center justify-center rounded-full bg-brand-pine px-5 py-3.5 text-white"
        >
          <MessageCircle size={18} strokeWidth={1.8} />
        </a>
        <button
          type="button"
          onClick={scrollToForm}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-pine-dark shadow-card"
        >
          Get My Estimate
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
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              onClick={trackWhatsApp}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-pine px-5 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle size={16} strokeWidth={1.8} />
              Chat on WhatsApp
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
}
