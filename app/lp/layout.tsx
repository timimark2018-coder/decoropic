import type { ReactNode } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/shared/brand-logo";
import { siteConfig } from "@/lib/utils/constants";
import { getLocale } from "@/lib/i18n/server";

// Minimal landing-page chrome — intentionally NO SiteHeader main navigation.
// LP routes live outside the (public) route group so they do not inherit its
// header/footer. The root layout still wraps these pages (fonts, GA/GTM, Meta
// Pixel, cookie consent, Deco Bot widget) — conversion tracking stays intact.
export default async function LpLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getLocale();
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-brand-sand">
      <header className="sticky top-0 z-30 border-b border-brand-line/50 bg-brand-sand/90 backdrop-blur">
        <div className="container-wide flex items-center justify-between py-4">
          <BrandLogo href="/" variant="header" locale={locale} />
          <Link
            href="#lp-lead-form"
            className="hidden rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-pine-dark transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Get My Estimate
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-brand-pine-dark text-brand-ivory">
        <div className="container-wide flex flex-col gap-4 py-10 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Decoropic — Interiors, delivered.</p>
            <p className="text-brand-ivory/70">Foshan Home Style Import and Export Co., Ltd</p>
            <p className="text-brand-ivory/70">
              <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-brand-gold">
                {siteConfig.contactEmail}
              </a>{" "}
              ·{" "}
              <a href={`tel:${siteConfig.contactPhoneDisplay.replace(/\s/g, "")}`} className="hover:text-brand-gold">
                {siteConfig.contactPhoneDisplay}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-1 text-brand-ivory/60 md:items-end">
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-brand-gold">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand-gold">
                Terms of Service
              </Link>
            </div>
            <p>© {year} Decoropic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
