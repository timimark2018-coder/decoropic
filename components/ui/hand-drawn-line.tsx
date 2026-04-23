import clsx from "clsx";

type HandDrawnLineProps = {
  width?: number | string;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  variant?: "wave" | "scribble" | "arc";
};

const paths: Record<NonNullable<HandDrawnLineProps["variant"]>, string> = {
  // Gentle sine-like sweep
  wave: "M2 18 C 40 4, 90 32, 140 14 S 240 2, 298 20",
  // Looser, more handmade scribble
  scribble: "M2 20 C 30 6, 60 30, 96 16 S 170 4, 210 22 T 298 16",
  // Upward arc that settles — reads like an accent stroke
  arc: "M2 26 C 70 6, 160 4, 298 22"
};

export function HandDrawnLine({
  width = "100%",
  height = 28,
  color = "var(--brand-gold)",
  strokeWidth = 1.6,
  className,
  variant = "wave"
}: HandDrawnLineProps) {
  return (
    <svg
      aria-hidden
      className={clsx("block", className)}
      width={width}
      height={height}
      viewBox="0 0 300 28"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d={paths[variant]}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
