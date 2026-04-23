import clsx from "clsx";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type Ratio = "1-2" | "2-1" | "2-3" | "3-2" | "1-3" | "3-1";

type AsymGridProps = {
  children: ReactNode;
  ratio?: Ratio;
  gap?: "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end";
  as?: ElementType;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

const ratioMap: Record<Ratio, string> = {
  "1-2": "lg:grid-cols-[1fr_2fr]",
  "2-1": "lg:grid-cols-[2fr_1fr]",
  "2-3": "lg:grid-cols-[2fr_3fr]",
  "3-2": "lg:grid-cols-[3fr_2fr]",
  "1-3": "lg:grid-cols-[1fr_3fr]",
  "3-1": "lg:grid-cols-[3fr_1fr]"
};

const gapMap = {
  sm: "gap-6",
  md: "gap-10",
  lg: "gap-16",
  xl: "gap-20 lg:gap-24"
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end"
};

/**
 * Deliberately asymmetric two-column grid. Collapses to a single column
 * below lg. The point is to break the "3 equal columns" default — use
 * it when one side should dominate (copy | image, figure | stats, etc.).
 */
export function AsymGrid({
  children,
  ratio = "2-3",
  gap = "lg",
  align = "start",
  as,
  className,
  ...rest
}: AsymGridProps) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={clsx(
        "grid grid-cols-1",
        ratioMap[ratio],
        gapMap[gap],
        alignMap[align],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
