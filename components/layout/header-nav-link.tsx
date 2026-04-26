"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
};

export function HeaderNavLink({ href, label, external, className }: Props) {
  const pathname = usePathname();

  // 当前页面任意菜单项 → 滚到顶（不只 Home）
  const isCurrentPage = pathname === href;

  if (isCurrentPage) {
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
