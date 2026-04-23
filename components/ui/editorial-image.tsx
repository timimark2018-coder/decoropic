import clsx from "clsx";
import { IconCamera } from "./icon";

type EditorialImageProps = {
  label: string;
  caption?: string;
  ratio?: "hero" | "portrait" | "landscape" | "square";
  tone?: "warm-dark" | "pine-dark" | "mist";
  grain?: boolean;
  className?: string;
  overlay?: boolean;
  children?: React.ReactNode;
};

const ratioMap = {
  hero: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square"
};

const toneMap = {
  "warm-dark": "warm-shadow-image",
  "pine-dark": "ink-gradient",
  mist: "bg-brand-mist/60"
};

/**
 * Premium placeholder that reads like a low-light architectural photo.
 * Dim warm gradient, centered camera + label, bottom-right photographer credit.
 * Children can be overlaid (e.g. headline text) — the caller is responsible for
 * absolute-positioning them.
 */
export function EditorialImage({
  label,
  caption,
  ratio = "landscape",
  tone = "warm-dark",
  grain = true,
  className,
  overlay = false,
  children
}: EditorialImageProps) {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden",
        ratioMap[ratio],
        toneMap[tone],
        grain && "film-grain",
        className
      )}
    >
      {/* Centered camera emblem — sits at 50% only when no children */}
      {!overlay ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-white/55">
            <IconCamera size={44} strokeWidth={1.2} />
            <div className="text-eyebrow-lg max-w-[36ch] text-center text-white/55">{label}</div>
          </div>
        </div>
      ) : null}

      {/* Photographer credit */}
      <div className="pointer-events-none absolute bottom-5 right-6 text-[10px] uppercase tracking-[0.24em] text-white/40">
        {caption ?? "Captured by : TBD"}
      </div>

      {/* Subtle frame hairline */}
      <div className="pointer-events-none absolute inset-3 border border-white/8" />

      {children}
    </div>
  );
}
