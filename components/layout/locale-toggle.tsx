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
  // /fr/* 没有中文版，EN / 中文 都指向对应的英文页 /markets/west-africa
  const stripped = pathname.replace(/^\/zh(?=\/|$)/, "") || "/";
  const basePath = /^\/fr(\/|$)/.test(stripped) ? "/markets/west-africa" : stripped;
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
