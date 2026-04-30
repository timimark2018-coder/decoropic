import { Resend } from "resend";

let _resend: Resend | null = null;

export function getResendClient(): Resend | null {
  if (_resend) return _resend;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.startsWith("re_PLACEHOLDER")) {
    return null;
  }

  _resend = new Resend(apiKey);
  return _resend;
}

export function getEmailConfig() {
  return {
    notificationEmail: process.env.LEAD_NOTIFICATION_EMAIL || "service@decoropic.com",
    fromEmail: process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev"
  };
}
