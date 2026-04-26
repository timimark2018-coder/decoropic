import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MessageCircle, Mail, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocale } from "@/lib/i18n/server";
import { contactContent } from "@/content/contact";
import { t } from "@/lib/i18n/content";
import { HandDrawnLine, Reveal } from "@/components/ui";
import { ProjectInquiryForm } from "@/components/forms/project-inquiry-form";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return buildMetadata({
    title: {
      en: "Contact | Decoropic",
      zh: "联系我们 | Decoropic"
    },
    description: {
      en: "Talk to Lily directly. Real conversations, real timelines, no automated follow-ups. Project consultation for villas, hospitality and commercial spaces in Ghana.",
      zh: "直接联系 Lily。真实对话，真实时间表，没有自动化推送。加纳别墅、酒店与商业空间项目咨询。"
    },
    path: "/contact",
    locale
  });
}

export default async function ContactPage() {
  const locale = await getLocale();
  const c = contactContent;

  return (
    <main className="min-h-screen">
      {/* 01 HERO */}
      <section className="relative bg-[#efe7d9] pt-32 pb-24 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute right-6 top-8 h-16 w-16 border-t border-r border-brand-gold/50 sm:right-12 sm:top-12 lg:top-16"
        />
        <div className="container-wide">
          <Reveal>
            <div className="flex items-center gap-3 text-brand-gold">
              <span className="h-[2px] w-16 bg-brand-gold" />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
                {t(c.hero.eyebrow, locale)}
              </span>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <h1
              className="mt-8 text-brand-pine-dark max-w-[1000px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em"
              }}
            >
              {t(c.hero.title, locale)}
            </h1>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-10 max-w-[220px]">
              <HandDrawnLine variant="wave" height={24} color="var(--brand-gold)" strokeWidth={1.4} />
            </div>
          </Reveal>
          <Reveal delay={700}>
            <p
              className="mt-12 text-brand-gold max-w-[820px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontStyle: "italic", lineHeight: 1.5, fontWeight: 400 }}
            >
              &quot;{t(c.hero.pullQuote, locale)}&quot;
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 CONTACT METHODS */}
      <section className="bg-[#f7f3ec] py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-4" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              ━━ {t(c.methods.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-16 max-w-[800px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3.25rem)", fontWeight: 700, lineHeight: 1.1 }}
            >
              {t(c.methods.title, locale)}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* WhatsApp 卡 */}
            <Reveal delay={300}>
              <Link
                href={c.methods.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-3xl bg-white border border-brand-pine-dark/10 p-8 hover:border-brand-gold transition-colors min-h-[240px] flex flex-col"
              >
                <MessageCircle size={28} className="text-brand-gold mb-6" strokeWidth={1.5} />
                <h3
                  className="text-brand-pine-dark mb-3"
                  style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 700 }}
                >
                  {t(c.methods.whatsapp.title, locale)}
                </h3>
                <p className="text-brand-pine-dark text-lg font-semibold mb-2 group-hover:text-brand-gold transition-colors">
                  {c.methods.whatsapp.value}
                </p>
                <p className="text-brand-pine-dark/65 text-sm leading-6 mt-auto">
                  {t(c.methods.whatsapp.note, locale)}
                </p>
              </Link>
            </Reveal>

            {/* Email 卡（无 href） */}
            <Reveal delay={400}>
              <div className="block rounded-3xl bg-white border border-brand-pine-dark/10 p-8 min-h-[240px] flex flex-col">
                <Mail size={28} className="text-brand-gold mb-6" strokeWidth={1.5} />
                <h3
                  className="text-brand-pine-dark mb-3"
                  style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 700 }}
                >
                  {t(c.methods.email.title, locale)}
                </h3>
                <p className="text-brand-pine-dark/85 text-lg font-semibold mb-2">
                  {c.methods.email.value}
                </p>
                <p className="text-brand-pine-dark/55 text-sm leading-6 italic mt-auto">
                  {t(c.methods.email.note, locale)}
                </p>
              </div>
            </Reveal>

            {/* Offices 卡 */}
            <Reveal delay={500}>
              <div className="block rounded-3xl bg-white border border-brand-pine-dark/10 p-8 min-h-[240px] flex flex-col">
                <MapPin size={28} className="text-brand-gold mb-6" strokeWidth={1.5} />
                <h3
                  className="text-brand-pine-dark mb-4"
                  style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 700 }}
                >
                  {t(c.methods.offices.title, locale)}
                </h3>
                <div className="mb-4">
                  <p className="text-brand-pine-dark font-semibold">{t(c.methods.offices.primary.location, locale)}</p>
                  <p className="text-brand-pine-dark/65 text-sm leading-6">{t(c.methods.offices.primary.role, locale)}</p>
                </div>
                <div>
                  <p className="text-brand-pine-dark font-semibold">{t(c.methods.offices.secondary.location, locale)}</p>
                  <p className="text-brand-pine-dark/65 text-sm leading-6">{t(c.methods.offices.secondary.role, locale)}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 INQUIRY FORM */}
      <section className="bg-brand-pine-dark py-24 lg:py-32 text-white">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-4" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              ━━ {t(c.inquirySection.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="mb-12 max-w-[800px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1 }}
            >
              {t(c.inquirySection.title, locale)}
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <div className="max-w-[800px]">
              <ProjectInquiryForm sourcePage="/contact" locale={locale} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 WHAT HAPPENS NEXT */}
      <section className="bg-[#efe7d9] py-24 lg:py-32">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-4" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              ━━ {t(c.whatHappensNext.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="text-brand-pine-dark mb-16 max-w-[800px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3.25rem)", fontWeight: 700, lineHeight: 1.1 }}
            >
              {t(c.whatHappensNext.title, locale)}
            </h2>
          </Reveal>

          <ol className="space-y-10 max-w-[840px]">
            {c.whatHappensNext.steps.map((step, i) => (
              <Reveal key={step.number} delay={300 + i * 150}>
                <li className="flex gap-6 items-start">
                  <span
                    className="text-brand-gold flex-none"
                    style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3
                      className="text-brand-pine-dark mb-2"
                      style={{ fontFamily: "var(--serif)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.2 }}
                    >
                      {t(step.title, locale)}
                    </h3>
                    <p className="text-brand-pine-dark/75 leading-7 max-w-[640px]">
                      {t(step.body, locale)}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 ESTIMATOR CTA */}
      <section className="bg-brand-pine-dark py-24 lg:py-32 text-white">
        <div className="container-wide">
          <Reveal>
            <p className="text-brand-gold mb-6" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              ━━ {t(c.estimatorCta.eyebrow, locale)}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h2
              className="mb-10 max-w-[800px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.05 }}
            >
              {t(c.estimatorCta.title, locale)}
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <Link
              href={c.estimatorCta.ctaHref}
              className="inline-flex items-center gap-3 rounded-full bg-brand-gold px-8 py-4 text-brand-pine-dark font-semibold hover:bg-brand-gold/90 transition-colors"
            >
              <span>{t(c.estimatorCta.ctaLabel, locale)}</span>
              <ChevronRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
