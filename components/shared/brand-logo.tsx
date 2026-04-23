"use client";

import Link from "next/link";
import clsx from "clsx";
import type { Locale } from "@/content/types";

type BrandLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  locale?: Locale;
  variant?: "header" | "hero" | "footer";
};

const variantStyles = {
  header: {
    wrapper: "rounded-[1.35rem] border border-brand-line/90 bg-white/92 px-4 py-3 shadow-[0_16px_36px_rgba(20,32,29,0.08)]",
    mark: "h-11 w-11 rounded-[1rem]",
    name: "text-[1.1rem]"
  },
  hero: {
    wrapper: "rounded-[1.7rem] border border-white/10 bg-white/96 px-5 py-4 shadow-[0_24px_70px_rgba(20,32,29,0.16)]",
    mark: "h-14 w-14 rounded-[1.2rem]",
    name: "text-[1.35rem]"
  },
  footer: {
    wrapper: "rounded-[1.7rem] border border-brand-line/80 bg-white px-5 py-4 shadow-[0_18px_42px_rgba(20,32,29,0.08)]",
    mark: "h-12 w-12 rounded-[1rem]",
    name: "text-[1.25rem]"
  }
};

export function BrandLogo({
  href = "/",
  className,
  imageClassName,
  priority = false,
  locale = "en",
  variant = "header"
}: BrandLogoProps) {
  const styles = variantStyles[variant];
  const sublabel = locale === "zh" ? "项目与产品中心" : "Projects & Product Center";

  return (
    <Link href={href} className={clsx("inline-flex", className)} aria-label="Decoropic home">
      <div className={clsx("flex items-center gap-3", styles.wrapper)}>
        <div
          className={clsx(
            "grid place-items-center bg-brand-pine text-sm font-semibold uppercase tracking-[0.24em] text-white",
            styles.mark,
            imageClassName
          )}
        >
          D
        </div>
        <div className="min-w-0">
          <p className={clsx("display-title font-semibold text-brand-ink", styles.name)}>Decoropic</p>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">{sublabel}</p>
        </div>
      </div>
    </Link>
  );
}
