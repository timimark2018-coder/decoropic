"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";

type LocaleToggleProps = {
  locale: Locale;
};

const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文"
};

// 切语言 = 换地址，不再写 NEXT_LOCALE cookie。
// 用 <Link> 而不是按钮，这样两种语言互为可爬行的链接，Google 能顺着发现 /zh。
export function LocaleToggle({ locale }: LocaleToggleProps) {
  const pathname = usePathname() || "/";
  // middleware 已把 /zh 剥掉，所以 pathname 始终是英文版路径。
  const basePath = pathname.replace(/^\/zh(?=\/|$)/, "") || "/";
  const hrefFor = (target: Locale) =>
    target === "zh" ? `/zh${basePath === "/" ? "" : basePath}` : basePath;

  return (
    <div className="inline-flex items-center gap-1">
      {(["en", "zh"] as const).map((item) => {
        const active = item === locale;

        return (
          <Link
            key={item}
            href={hrefFor(item)}
            hrefLang={item}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              active ? "bg-brand-pine text-white" : "text-slate-600 hover:bg-brand-mist/70"
            }`}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
