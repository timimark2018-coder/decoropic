"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
};

/**
 * Counts up from 0 → `to` the first time it scrolls into view.
 * Uses requestAnimationFrame with a smooth easeOut curve. 1.2s default.
 */
export function CountUp({ to, duration = 1200, className, suffix }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setValue(to));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasRun.current) return;
          hasRun.current = true;
          observer.unobserve(entry.target);

          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={clsx("tabular-nums", className)}>
      {value}
      {suffix}
    </span>
  );
}
