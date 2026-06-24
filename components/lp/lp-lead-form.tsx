"use client";

import { type FormEvent, useEffect, useState } from "react";
import type { Locale } from "@/content/types";
import { trackLead } from "@/lib/analytics/gtag";
import { pixelTrack } from "@/lib/analytics/meta-pixel";
import { readSubmissionError } from "@/lib/forms/submission-feedback";
import { captureUtm, getStoredReferrer, getStoredUtm } from "@/lib/utm-tracking";
import { InquirySuccess } from "@/components/forms/inquiry-success";

type LpLeadFormProps = {
  sourcePage: string;
  locale?: Locale;
  /** "full" = complete lead form; "compact" = sticky sidebar (name + whatsapp). */
  variant?: "full" | "compact";
};

const PROJECT_TYPES = [
  "New build villa",
  "Existing villa renovation",
  "Premium apartment renovation",
  "Commercial (hotel / office)",
  "Other"
];

const LOCATIONS = ["Accra", "Tema", "Kumasi", "Other Ghana city"];

const BUDGETS = [
  "Under USD 50K",
  "USD 50–150K",
  "USD 150–280K",
  "USD 280K+",
  "I genuinely don't know — that's why I'm here"
];

const copy = {
  sending: "Sending...",
  submitting: "Submitting...",
  fail: "We could not submit right now. Please try again in a moment.",
  retry: "Please review the highlighted fields and try again."
};

export function LpLeadForm({ sourcePage, locale = "en", variant = "full" }: LpLeadFormProps) {
  const [status, setStatus] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | undefined>(undefined);

  // Persist UTM/referrer on mount so the lead payload carries ad attribution.
  useEffect(() => {
    captureUtm();
  }, []);

  function inputClass(name: string) {
    return `rounded-[1.1rem] border px-4 py-3 text-sm outline-none transition-colors focus:border-brand-gold ${
      fieldErrors[name] ? "border-rose-300 bg-rose-50 text-brand-ink" : "border-brand-line bg-white text-brand-ink"
    }`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setFieldErrors({});
    setStatus(copy.sending);

    const formData = new FormData(form);
    formData.append("sourcePage", sourcePage);

    // Compact sidebar form omits project context — send sensible defaults so
    // the shared /api/contact schema (projectType + location required) passes.
    if (variant === "compact") {
      if (!formData.get("projectType")) formData.set("projectType", "Quick enquiry");
      if (!formData.get("location")) formData.set("location", "Ghana");
    }

    // Attach campaign attribution.
    const utm = getStoredUtm();
    for (const [key, value] of Object.entries(utm)) {
      if (value) formData.append(key, value);
    }
    const referrer = getStoredReferrer();
    if (referrer) formData.append("referrer", referrer);

    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });

      if (response.ok) {
        trackLead("contact_inquiry_submit", {
          source_page: sourcePage,
          budget: String(formData.get("budget") || ""),
          location: String(formData.get("location") || ""),
          project_type: String(formData.get("projectType") || "")
        });
        pixelTrack("Lead", { source_page: sourcePage });
        const nameValue = String(formData.get("name") || "") || undefined;
        form.reset();
        setSubmittedName(nameValue);
        setIsSubmitted(true);
        return;
      }

      const error = await readSubmissionError(response, copy.retry);
      setFieldErrors(error.fieldErrors);
      setStatus(error.message);
    } catch {
      setStatus(copy.fail);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div id="lp-lead-form">
        <InquirySuccess locale={locale} customerName={submittedName} showResetCta={false} />
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input name="name" placeholder="Full name" className={inputClass("name")} required />
        <input
          name="whatsapp"
          type="tel"
          minLength={6}
          defaultValue="+233 "
          placeholder="WhatsApp number"
          className={inputClass("whatsapp")}
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-pine-dark transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? copy.submitting : "Get My Estimate"}
        </button>
        {status ? (
          <p className="text-xs text-brand-pine-dark/70" aria-live="polite">
            {status}
          </p>
        ) : null}
      </form>
    );
  }

  return (
    <form id="lp-lead-form" onSubmit={handleSubmit} className="grid gap-4 rounded-3xl bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" placeholder="Full name *" className={inputClass("name")} required />
        <input
          name="whatsapp"
          type="tel"
          minLength={6}
          defaultValue="+233 "
          placeholder="WhatsApp number *"
          className={inputClass("whatsapp")}
          required
        />
      </div>
      <input name="email" type="email" placeholder="Email (optional — for your PDF estimate)" className={inputClass("email")} />
      <div className="grid gap-4 sm:grid-cols-2">
        <select name="projectType" className={inputClass("projectType")} defaultValue="" required>
          <option value="" disabled>
            Project type *
          </option>
          {PROJECT_TYPES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select name="location" className={inputClass("location")} defaultValue="" required>
          <option value="" disabled>
            Project location *
          </option>
          {LOCATIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <select name="budget" className={inputClass("budget")} defaultValue="" required>
        <option value="" disabled>
          Total project budget — ballpark *
        </option>
        {BUDGETS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <textarea
        name="notes"
        rows={4}
        placeholder="Tell us about your project — a few sentences is fine"
        className={inputClass("notes")}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-6 py-4 text-sm font-semibold text-brand-pine-dark transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? copy.submitting : "Get My Estimate — Delivered in 24 Hours"}
      </button>

      <ul className="grid gap-1 text-xs text-brand-ink/65">
        <li>🔒 Your data is private. Ghana DPA 2012 compliant.</li>
        <li>📅 Estimate delivered in 24 hours, by email or WhatsApp (your choice).</li>
        <li>🚫 No sales calls unless you ask for one.</li>
      </ul>

      {Object.keys(fieldErrors).length ? (
        <ul className="rounded-[1.1rem] border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {Object.entries(fieldErrors).map(([field, message]) => (
            <li key={field}>{message}</li>
          ))}
        </ul>
      ) : null}
      {status && !Object.keys(fieldErrors).length ? (
        <p className="text-sm text-brand-ink/70" aria-live="polite">
          {status}
        </p>
      ) : null}
    </form>
  );
}
