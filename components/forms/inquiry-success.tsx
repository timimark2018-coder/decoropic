"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/content/types";

type InquirySuccessProps = {
  locale: Locale;
  customerName?: string;
  showResetCta?: boolean;
  onReset?: () => void;
};

const copy = {
  en: {
    title: "Thank you, we've received your inquiry",
    bodyWithName: (name: string) => `${name}, our team will reach out within 24 hours.`,
    bodyNoName: "Our team will reach out within 24 hours.",
    promise: "Not before. Not later.",
    primaryCta: "Continue browsing",
    secondaryCta: "Submit another inquiry"
  },
  zh: {
    title: "感谢提交，我们已收到你的询盘",
    bodyWithName: (name: string) => `${name}，我们的团队将在 24 小时内联系你。`,
    bodyNoName: "我们的团队将在 24 小时内联系你。",
    promise: "不会更早，也不会更晚。",
    primaryCta: "继续浏览",
    secondaryCta: "再提交一份"
  }
} as const;

export function InquirySuccess({
  locale,
  customerName,
  showResetCta = false,
  onReset
}: InquirySuccessProps) {
  const c = copy[locale];
  const body = customerName ? c.bodyWithName(customerName) : c.bodyNoName;

  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 lg:py-24 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#ae9260]/15">
        <CheckCircle2 className="h-14 w-14 text-[#ae9260]" strokeWidth={1.5} />
      </div>

      <h2
        className="mb-6 max-w-2xl text-current"
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(1.875rem, 4vw, 3rem)",
          fontWeight: 700,
          lineHeight: 1.15
        }}
      >
        {c.title}
      </h2>

      <p className="mb-2 max-w-xl text-current opacity-90" style={{ fontSize: "1.125rem", lineHeight: 1.6 }}>
        {body}
      </p>

      <p className="mb-12 max-w-xl text-current opacity-70 italic" style={{ fontSize: "0.95rem" }}>
        {c.promise}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#ae9260] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#9a8054] focus:outline-none focus:ring-2 focus:ring-[#ae9260] focus:ring-offset-2"
        >
          {c.primaryCta}
        </Link>

        {showResetCta && onReset ? (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center rounded-full border border-current px-8 py-3 text-sm font-medium text-current transition hover:bg-[#ae9260] hover:border-[#ae9260] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ae9260] focus:ring-offset-2"
          >
            {c.secondaryCta}
          </button>
        ) : null}
      </div>
    </div>
  );
}
