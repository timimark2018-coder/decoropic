"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics/gtag";
import type { Locale } from "@/content/types";

type EstimatorFloatingTriggerProps = {
  locale: Locale;
};

export function EstimatorFloatingTrigger({ locale }: EstimatorFloatingTriggerProps) {
  const label = locale === "zh" ? "预算测算" : "Estimate Budget";

  return (
    <Link
      href="/#estimator"
      onClick={() => trackEvent("estimator_open", { page: window.location.pathname, source_site: "decoropic", source: "floating_trigger" })}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-pine px-4 py-3 text-sm font-semibold text-white shadow-[0_22px_45px_rgba(28,56,51,0.24)]"
    >
      {label}
    </Link>
  );
}
