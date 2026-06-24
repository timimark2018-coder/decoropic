"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics/gtag";
import { pixelTrack } from "@/lib/analytics/meta-pixel";

// Single source of truth for the campaign WhatsApp line.
const WA_NUMBER = "233531519347";

type LpWhatsAppButtonProps = {
  sourcePage: string;
  message: string;
  label?: string;
  className?: string;
};

export function LpWhatsAppButton({
  sourcePage,
  message,
  label = "Chat on WhatsApp",
  className = ""
}: LpWhatsAppButtonProps) {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        trackEvent("whatsapp_click", { source_page: sourcePage });
        pixelTrack("Contact", { source_page: sourcePage });
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-pine px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] ${className}`}
    >
      <MessageCircle size={18} strokeWidth={1.8} />
      {label}
    </Link>
  );
}
