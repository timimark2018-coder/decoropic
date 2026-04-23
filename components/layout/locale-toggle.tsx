"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/content/types";

type LocaleToggleProps = {
  locale: Locale;
};

const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文"
};

export function LocaleToggle({ locale }: LocaleToggleProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);

  useEffect(() => {
    if (!pendingLocale) {
      return;
    }

    window.document.cookie = `NEXT_LOCALE=${pendingLocale}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => {
      router.refresh();
      setPendingLocale(null);
    });
  }, [pendingLocale, router, startTransition]);

  function setLocale(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    setPendingLocale(nextLocale);
  }

  return (
    <div className="inline-flex items-center rounded-full border border-brand-line/90 bg-white/80 p-1">
      {(["en", "zh"] as const).map((item) => {
        const active = item === locale;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLocale(item)}
            disabled={isPending || pendingLocale === item}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              active ? "bg-brand-pine text-white" : "text-slate-600 hover:bg-brand-mist/70"
            }`}
          >
            {localeLabels[item]}
          </button>
        );
      })}
    </div>
  );
}
