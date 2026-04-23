import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "gold" | "slate" | "pine";
};

const toneMap = {
  gold: "bg-amber-100 text-amber-900 border-amber-200",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
  pine: "bg-emerald-100 text-emerald-800 border-emerald-200"
};

export function Badge({ children, tone = "gold" }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${toneMap[tone]}`}>
      {children}
    </span>
  );
}
