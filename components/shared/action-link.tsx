"use client";

import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import type { Locale } from "@/content/types";
import { isExternalHref, resolveSiteHref } from "@/lib/utils/site-links";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  locale?: Locale;
};

const variantClasses = {
  primary: "bg-brand-pine text-white shadow-[0_20px_40px_rgba(28,56,51,0.18)] hover:bg-brand-pine-dark",
  secondary: "bg-white text-brand-ink ring-1 ring-brand-line hover:bg-brand-mist/60",
  ghost: "bg-transparent text-brand-ink ring-1 ring-brand-line/80 hover:bg-white/70"
};

export function ActionLink({ href, children, className, variant = "primary", locale = "en" }: ActionLinkProps) {
  const resolvedHref = resolveSiteHref(href, locale);
  const external = isExternalHref(resolvedHref);

  return (
    <Link
      href={resolvedHref}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
