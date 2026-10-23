import type { Locale } from "@/content/types";
import { facebookLink, siteConfig } from "@/lib/utils/constants";

type FacebookIconProps = { size?: number; className?: string };

/** Facebook "f" glyph as inline SVG (lucide dropped brand icons). */
export function FacebookIcon({ size = 20, className }: FacebookIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.95.27-1.6 1.63-1.6h1.72V3.85c-.3-.04-1.32-.13-2.5-.13-2.48 0-4.17 1.5-4.17 4.28v2.47H7.4v3.3h2.76V22h3.34Z" />
    </svg>
  );
}

type FacebookFollowLinkProps = {
  locale: Locale;
  /** utm_campaign value, e.g. "footer", "contact", "blog" */
  campaign: string;
  className?: string;
  label?: string;
};

/** Outbound "Follow us on Facebook" link with UTM tagging. */
export function FacebookFollowLink({ locale, campaign, className, label }: FacebookFollowLinkProps) {
  const text = label ?? (locale === "zh" ? "在 Facebook 关注我们" : "Follow us on Facebook");
  return (
    <a
      href={facebookLink(campaign)}
      target="_blank"
      rel="noopener noreferrer me"
      aria-label={`${text} (${siteConfig.facebookHandle})`}
      className={className}
      data-track="facebook-follow"
      data-campaign={campaign}
    >
      <FacebookIcon size={18} />
      <span>{text}</span>
    </a>
  );
}
