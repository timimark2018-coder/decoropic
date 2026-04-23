import type { ReactNode } from "react";
import { EstimatorFloatingTrigger } from "@/components/layout/estimator-floating-trigger";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getLocale } from "@/lib/i18n/server";

export default async function PublicLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getLocale();

  return (
    <>
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
      <EstimatorFloatingTrigger locale={locale} />
    </>
  );
}
