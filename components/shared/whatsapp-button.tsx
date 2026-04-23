"use client";

import Link from "next/link";
import type { Locale } from "@/content/types";
import { trackEvent } from "@/lib/analytics/gtag";
import { buildWhatsAppHref } from "@/lib/utils/site-links";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  className?: string;
  locale?: Locale;
};

export function WhatsAppButton({
  message = "Hello Decoropic, I would like to discuss an interior project in Ghana.",
  label = "Talk on WhatsApp",
  className = "",
  locale = "en"
}: WhatsAppButtonProps) {
  const href = buildWhatsAppHref(message, locale);
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={() => {
        trackEvent("whatsapp_click", {
          event_category: "engagement",
          destination: "whatsapp",
          label
        });
      }}
      className={`inline-flex items-center justify-center rounded-full bg-brand-pine px-5 py-3 text-sm font-semibold text-white ${className}`}
    >
      {label}
    </Link>
  );
}
