import clsx from "clsx";
import type { SVGProps } from "react";

type BaseProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

/**
 * Inline icon primitives styled after Lucide — stroke 1.75, rounded caps.
 * No runtime dep, tree-shakes at build.
 */

function Base({ children, size = 20, className, ...rest }: BaseProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx("inline-block shrink-0", className)}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconArrowRight = (props: BaseProps) => (
  <Base {...props}>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </Base>
);

export const IconArrowDown = (props: BaseProps) => (
  <Base {...props}>
    <path d="M12 5v14" />
    <path d="m5 13 7 7 7-7" />
  </Base>
);

export const IconCamera = (props: BaseProps) => (
  <Base {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" />
    <circle cx="12" cy="13" r="4" />
  </Base>
);

export const IconSparkle = (props: BaseProps) => (
  <Base {...props}>
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M3 12h4" />
    <path d="M17 12h4" />
    <path d="m5.6 5.6 2.8 2.8" />
    <path d="m15.6 15.6 2.8 2.8" />
    <path d="m5.6 18.4 2.8-2.8" />
    <path d="m15.6 8.4 2.8-2.8" />
  </Base>
);

export const IconBuilding = (props: BaseProps) => (
  <Base {...props}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
  </Base>
);

export const IconHotel = (props: BaseProps) => (
  <Base {...props}>
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 9v2M9 13v2M15 9v2M15 13v2" />
    <path d="M10 21v-5h4v5" />
  </Base>
);

export const IconPenTool = (props: BaseProps) => (
  <Base {...props}>
    <path d="m12 19 7-7 3 3-7 7-3-3z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="m2 2 7.5 7.5" />
    <circle cx="11" cy="11" r="2" />
  </Base>
);

export const IconUsers = (props: BaseProps) => (
  <Base {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Base>
);

export const IconBriefcase = (props: BaseProps) => (
  <Base {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M8 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" />
  </Base>
);

export const IconCompass = (props: BaseProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </Base>
);

export const IconScroll = (props: BaseProps) => (
  <Base {...props}>
    <path d="M12 3v14" />
    <path d="m6 11 6 6 6-6" />
  </Base>
);

export const IconQuote = (props: BaseProps) => (
  <Base {...props}>
    <path d="M7 7h4v7a4 4 0 0 1-4 4" />
    <path d="M15 7h4v7a4 4 0 0 1-4 4" />
  </Base>
);

export const IconCheck = (props: BaseProps) => (
  <Base {...props}>
    <path d="M20 6 9 17l-5-5" />
  </Base>
);

export const IconMessageSquare = (props: BaseProps) => (
  <Base {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Base>
);
