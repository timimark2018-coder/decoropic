"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
  isHome?: boolean;
  external?: boolean;
  className?: string;
};

export function HeaderNavLink({ href, label, isHome, external, className }: Props) {
  const pathname = usePathname();

  // Home 链接：在 / 路由时 scrollTo top；其他路由正常 navigate
  if (isHome && pathname === "/") {
    return (
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={className}
        style={{ fontFamily: "var(--serif)" }}
      >
        {label}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={className}
      style={{ fontFamily: "var(--serif)" }}
    >
      {label}
    </Link>
  );
}
