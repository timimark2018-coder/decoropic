"use client";

import { type FormEvent, useState } from "react";
import type { Locale } from "@/content/types";
import { trackLead } from "@/lib/analytics/gtag";
import { pixelTrack } from "@/lib/analytics/meta-pixel";
import { readSubmissionError } from "@/lib/forms/submission-feedback";
import { t } from "@/lib/i18n/content";
import { contactContent } from "@/content/contact";
import { InquirySuccess } from "./inquiry-success";

type ProjectInquiryFormProps = {
  sourcePage: string;
  locale: Locale;
  /** 由 /contact?type=... 预选项目类型(值取 contactContent.options.projectTypes 的 en 名)。 */
  initialProjectType?: string;
};

const copy = {
  en: {
    sending: "Sending...",
    success: "Your inquiry has been received. We will review it and follow up with the right next step.",
    retry: "Please review the highlighted fields and try again.",
    fail: "We could not submit your inquiry right now. Please try again in a moment.",
    // 服务端两条留档通路都失败时用这条 —— 必须给出可立即改用的联系方式，
    // 否则访客只会以为是网络问题而默默离开。
    notCaptured:
      "We could not record your inquiry just now. Please message us on WhatsApp +233 59 247 0446 or email service@decoropic.com — we will pick it up straight away.",
    submitting: "Submitting..."
  },
  zh: {
    sending: "提交中...",
    success: "我们已收到您的咨询，会尽快评估并与您沟通下一步。",
    retry: "请检查高亮字段后重新提交。",
    fail: "暂时无法提交，请稍后再试。",
    notCaptured:
      "您的咨询暂时未能记录。请通过 WhatsApp +233 59 247 0446 或邮件 service@decoropic.com 联系我们，我们会立即跟进。",
    submitting: "提交中..."
  }
} as const;

export function ProjectInquiryForm({ sourcePage, locale, initialProjectType}: ProjectInquiryFormProps) {
  const [status, setStatus] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | undefined>(undefined);

  function inputClass(name: string) {
    return `rounded-[1.35rem] border px-4 py-3 text-sm ${
      fieldErrors[name] ? "border-rose-300 bg-rose-50 text-brand-ink" : "border-brand-line bg-white text-brand-ink"
    }`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setFieldErrors({});
    setStatus(copy[locale].sending);
    const formData = new FormData(form);
    formData.append("sourcePage", sourcePage);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        trackLead("contact_inquiry_submit", {
          source_page: sourcePage,
          project_type: String(formData.get("projectType") || "")
        });
        pixelTrack("Lead", { source_page: sourcePage });
        const nameValue = String(formData.get("name") || "") || undefined;
        setStatus(copy[locale].success);
        form.reset();
        setSubmittedName(nameValue);
        setIsSubmitted(true);
        setTimeout(() => {
          document.querySelector("#inquiry-form-anchor")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }

      // 502 + code=lead_not_captured:服务端明确告知这条询盘没能留档。
      // 用本地化文案覆盖服务端那句英文,并且不上报转化。
      if (response.status === 502) {
        setFieldErrors({});
        setStatus(copy[locale].notCaptured);
        return;
      }

      const error = await readSubmissionError(response, copy[locale].retry);
      setFieldErrors(error.fieldErrors);
      setStatus(error.message);
    } catch {
      setStatus(copy[locale].fail);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div id="inquiry-form-anchor">
        <InquirySuccess locale={locale} customerName={submittedName} showResetCta={false} />
      </div>
    );
  }

  return (
    <form id="inquiry-form-anchor" onSubmit={handleSubmit} className="card-surface p-6 sm:p-8">
      <p className="eyebrow-label">{t(contactContent.form.title, locale)}</p>
      <div className="mt-6 grid gap-4">
        <input name="name" placeholder={t(contactContent.form.fields.name, locale)} className={inputClass("name")} required />
        <input name="company" placeholder={t(contactContent.form.fields.company, locale)} className={inputClass("company")} required />
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="whatsapp" type="tel" minLength={6} placeholder={t(contactContent.form.fields.whatsapp, locale)} className={inputClass("whatsapp")} required />
          <input name="email" type="email" placeholder={t(contactContent.form.fields.email, locale)} className={inputClass("email")} required />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <select
            name="projectType"
            className={inputClass("projectType")}
            defaultValue={initialProjectType ?? ""}
            required
          >
            <option value="" disabled>
              {t(contactContent.form.fields.projectType, locale)}
            </option>
            {contactContent.options.projectTypes.map((option) => (
              <option key={option.en} value={option.en}>
                {t(option, locale)}
              </option>
            ))}
          </select>
          <input name="location" placeholder={t(contactContent.form.fields.location, locale)} className={inputClass("location")} required />
        </div>
        <textarea name="notes" rows={5} placeholder={t(contactContent.form.fields.notes, locale)} className={inputClass("notes")} />
        <label className="rounded-[1.35rem] border border-dashed border-brand-line bg-brand-mist/35 px-4 py-4 text-sm text-slate-600">
          <span className="mb-2 block font-medium text-brand-ink">{t(contactContent.form.fields.upload, locale)}</span>
          <input name="files" type="file" className="block w-full text-sm" multiple />
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-pine px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? copy[locale].submitting : t(contactContent.form.submitLabel, locale)}
      </button>
      {Object.keys(fieldErrors).length ? (
        <ul className="mt-4 rounded-[1.2rem] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {Object.entries(fieldErrors).map(([field, message]) => (
            <li key={field}>{message}</li>
          ))}
        </ul>
      ) : null}
      {status ? (
        <p className={`mt-4 text-sm ${Object.keys(fieldErrors).length ? "text-rose-700" : "text-current opacity-80"}`} aria-live="polite">
          {status}
        </p>
      ) : null}
    </form>
  );
}
