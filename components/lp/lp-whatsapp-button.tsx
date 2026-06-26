"use client";

import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics/gtag";
import { pixelTrack } from "@/lib/analytics/meta-pixel";
import { WHATSAPP_LINK } from "@/lib/constants/contact";

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
  const href = WHATSAPP_LINK(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackEvent("whatsapp_click", { source_page: sourcePage });
        pixelTrack("Contact", { source_page: sourcePage });
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-pine px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] ${className}`}
    >
      <MessageCircle size={18} strokeWidth={1.8} />
      {label}
    </a>
  );
}
