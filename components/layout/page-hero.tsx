import type { ReactNode } from "react";
import { Badge } from "@/components/shared/badge";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="site-section">
      <div className="container-shell">
        <div className="card-surface panel-grid relative overflow-hidden p-8 sm:p-12">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-brand-mist/70 to-transparent lg:block" />
          <div className="absolute -right-20 top-10 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-brand-pine/10 blur-3xl" />
          <div className="relative max-w-3xl">
            {eyebrow ? <Badge>{eyebrow}</Badge> : null}
            <h1 className="display-title mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
            {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
