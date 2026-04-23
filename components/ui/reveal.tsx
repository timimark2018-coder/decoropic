"use client";

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode
} from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

/**
 * One-shot intersection-triggered entrance (rise + blur → sharp).
 * SSR-safe: paints in the "out" state, then swaps `data-reveal` to "in"
 * when the element first crosses into view.
 */
export function Reveal({ children, delay = 0, className, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const mergedStyle = delay ? { transitionDelay: `${delay}ms`, ...(style ?? {}) } : style;

  return (
    <div
      ref={ref}
      data-reveal={inView ? "in" : "out"}
      style={mergedStyle}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
}
