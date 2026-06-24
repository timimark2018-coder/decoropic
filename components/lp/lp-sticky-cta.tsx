"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Locale } from "@/content/types";
import { LpLeadForm } from "./lp-lead-form";

type LpStickyCtaProps = {
  sourcePage: string;
  locale?: Locale;
};

function scrollToForm() {
  document.querySelector("#lp-lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function LpStickyCta({ sourcePage, locale = "en" }: LpStickyCtaProps) {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Mobile: fixed bottom action bar — scrolls to the main form */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-line/60 bg-brand-sand/95 p-3 backdrop-blur lg:hidden">
        <button
          type="button"
          onClick={scrollToForm}
          className="inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-pine-dark shadow-card"
        >
          Get My Estimate — 90 Seconds
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
          </div>
        ) : null}
      </div>
    </>
  );
}
