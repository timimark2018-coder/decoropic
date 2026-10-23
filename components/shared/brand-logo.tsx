"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Locale } from "@/content/types";
import { localizePath } from "@/lib/utils/site-links";

type BrandLogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
  locale?: Locale;
  variant?: "header" | "hero" | "footer";
};

// Native size: 552 × 112. Heights chosen per context; width derived from aspect ratio.
const NATIVE = { w: 552, h: 112 };
const variantHeight: Record<NonNullable<BrandLogoProps["variant"]>, number> = {
  header: 40,
  hero: 52,
  footer: 36,
};

export function BrandLogo({
  href = "/",
  className,
  priority = false,
  locale = "en",
  variant = "header",
}: BrandLogoProps) {
  const h = variantHeight[variant];
  const w = Math.round((NATIVE.w / NATIVE.h) * h);

  return (
    <Link href={localizePath(href, locale)} className={clsx("inline-flex items-center", className)} aria-label="Decoropic home">
      <Image
        src="/decoropic_logo_unified.png"
        alt="Decoropic"
        width={w}
        height={h}
        priority={priority}
        className="object-contain"
      />
    </Link>
  );
}
