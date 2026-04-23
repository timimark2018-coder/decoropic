import clsx from "clsx";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type BreakoutProps = {
  children: ReactNode;
  as?: ElementType;
  side?: "both" | "left" | "right";
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

/**
 * Breaks a child out of its parent max-width container to full viewport width
 * (or just one edge). Pair with inner padding for content breathing room.
 */
export function Breakout({
  children,
  as,
  side = "both",
  className,
  ...rest
}: BreakoutProps) {
  const Tag = (as ?? "div") as ElementType;
  const bleedClass =
    side === "both" ? "full-bleed" : side === "left" ? "edge-bleed-left" : "edge-bleed-right";

  return (
    <Tag className={clsx(bleedClass, className)} {...rest}>
      {children}
    </Tag>
  );
}
