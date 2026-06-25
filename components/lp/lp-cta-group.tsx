"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics/gtag";
import { pixelTrack } from "@/lib/analytics/meta-pixel";

// Single source of truth for the campaign WhatsApp line.
const WA_NUMBER = "233531519347";

type LpCtaGroupProps = {
  sourcePage: string;
  /** Primary (gold) button — usually the estimator or a funnel link. */
  primaryLabel: string;
  primaryHref: string;
  /** Secondary (dark-green) WhatsApp button. */
  whatsappMessage: string;
  whatsappLabel?: string;
  /** On dark (pine) backgrounds, add a visible outline to the dark-green button. */
  onDark?: boolean;
  className?: string;
};

const baseBtn =
  "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold transition-transform hover:scale-[1.02] max-sm:w-full";

export function LpCtaGroup({
  sourcePage,
  primaryLabel,
  primaryHref,
  whatsappMessage,
  whatsappLabel = "Chat on WhatsApp",
  onDark = false,
  className = ""
}: LpCtaGroupProps) {
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      {/* Primary — gold fill / dark-green text */}
      <Link href={primaryHref} className={`${baseBtn} bg-brand-gold text-brand-pine-dark shadow-card`}>
        {primaryLabel}
      </Link>

      {/* Secondary — dark-green fill / sand text + WhatsApp icon */}
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          trackEvent("whatsapp_click", { source_page: sourcePage });
          pixelTrack("Contact", { source_page: sourcePage });
        }}
        className={`${baseBtn} gap-2 bg-brand-pine-dark text-brand-sand ${onDark ? "ring-1 ring-brand-sand/40" : ""}`}
      >
        <MessageCircle size={18} strokeWidth={1.8} />
        {whatsappLabel}
      </a>
    </div>
  );
}
