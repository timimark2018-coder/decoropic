import clsx from "clsx";
import type { ReactNode } from "react";

type PullQuoteProps = {
  quote: ReactNode;
  attribution?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export function PullQuote({
  quote,
  attribution,
  tone = "dark",
  align = "left",
  className
}: PullQuoteProps) {
  const quoteTone = tone === "light" ? "text-white" : "text-brand-pine-dark";
  const attrTone = tone === "light" ? "text-white/70" : "text-brand-pine/70";
  const markTone = "text-brand-gold";

  return (
    <figure
      className={clsx(
        "relative",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className
      )}
    >
      <span
        aria-hidden
        className={clsx(
          "font-serif text-[7rem] leading-none sm:text-[9rem]",
          markTone,
          "block select-none",
          align === "center" ? "mx-auto" : "",
          "-mb-6"
        )}
        style={{ fontFamily: "var(--serif)" }}
      >
        &ldquo;
      </span>

      <blockquote className={clsx("text-quote", quoteTone)}>{quote}</blockquote>

      {attribution ? (
        <figcaption
          className={clsx(
            "mt-6 flex items-center gap-3 text-sm font-medium tracking-[0.22em] uppercase",
            attrTone,
            align === "center" && "justify-center"
          )}
        >
          <span className={clsx("h-px w-10", tone === "light" ? "bg-brand-gold/70" : "bg-brand-gold")} />
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
