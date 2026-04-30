"use client";

import { type FormEvent, useState } from "react";
import type { Locale } from "@/content/types";
import { trackLead } from "@/lib/analytics/gtag";
import { readSubmissionError } from "@/lib/forms/submission-feedback";
import { t } from "@/lib/i18n/content";
import { contactContent } from "@/content/contact";

type ProjectInquiryFormProps = {
  sourcePage: string;
  locale: Locale;
};

const copy = {
  en: {
    sending: "Sending...",
    success: "Your inquiry has been received. We will review it and follow up with the right next step.",
    retry: "Please review the highlighted fields and try again.",
    fail: "We could not submit your inquiry right now. Please try again in a moment.",
    submitting: "Submitting..."
  },
  zh: {
    sending: "提交中...",
    success: "我们已收到您的咨询，会尽快评估并与您沟通下一步。",
    retry: "请检查高亮字段后重新提交。",
    fail: "暂时无法提交，请稍后再试。",
    submitting: "提交中..."
  }
} as const;

export function ProjectInquiryForm({ sourcePage, locale }: ProjectInquiryFormProps) {
  const [status, setStatus] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function inputClass(name: string) {
    return `rounded-[1.35rem] border px-4 py-3 text-sm ${
      fieldErrors[name] ? "border-rose-300 bg-rose-50 text-brand-ink" : "border-brand-line bg-white text-brand-ink"
    }`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});
    setStatus(copy[locale].sending);
    const formData = new FormData(event.currentTarget);
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
        setStatus(copy[locale].success);
        event.currentTarget.reset();
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

  return (
    <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8">
      <p className="eyebrow-label">{t(contactContent.form.title, locale)}</p>
      <div className="mt-6 grid gap-4">
        <input name="name" placeholder={t(contactContent.form.fields.name, locale)} className={inputClass("name")} required />
        <input name="company" placeholder={t(contactContent.form.fields.company, locale)} className={inputClass("company")} required />
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="whatsapp" type="tel" minLength={6} placeholder={t(contactContent.form.fields.whatsapp, locale)} className={inputClass("whatsapp")} required />
          <input name="email" type="email" placeholder={t(contactContent.form.fields.email, locale)} className={inputClass("email")} required />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <select name="projectType" className={inputClass("projectType")} defaultValue="" required>
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
        <p className={`mt-4 text-sm ${Object.keys(fieldErrors).length ? "text-rose-700" : "text-slate-600"}`} aria-live="polite">
          {status}
        </p>
      ) : null}
    </form>
  );
}
