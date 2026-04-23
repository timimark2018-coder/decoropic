import clsx from "clsx";
import type { ReactNode } from "react";

type NumeralProps = {
  value: string;
  label: ReactNode;
  suffix?: string;
  color?: "primary" | "accent" | "light";
  align?: "left" | "center" | "right";
  size?: "xl" | "lg";
  className?: string;
};

const valueTone = {
  primary: "text-brand-pine",
  accent: "text-brand-gold",
  light: "text-white"
};

const labelTone = {
  primary: "text-brand-pine/70",
  accent: "text-brand-gold/80",
  light: "text-white/70"
};

const alignMap = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right"
};

export function Numeral({
  value,
  label,
  suffix,
  color = "accent",
  align = "left",
  size = "xl",
  className
}: NumeralProps) {
  const sizeClass = size === "xl" ? "text-hero-xl" : "text-hero";

  return (
    <div className={clsx("flex flex-col gap-3", alignMap[align], className)}>
      <div className={clsx(sizeClass, valueTone[color], "leading-none")}>
        <span>{value}</span>
        {suffix ? (
          <span className="ml-1 align-top text-[0.4em] font-semibold tracking-tight">{suffix}</span>
        ) : null}
      </div>
      <div
        className={clsx(
          "text-eyebrow-lg max-w-[22ch]",
          labelTone[color],
          align === "center" && "mx-auto"
        )}
      >
        {label}
      </div>
    </div>
  );
}
