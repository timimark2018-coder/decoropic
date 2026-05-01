import { getResendClient, getEmailConfig } from "./client";
import { renderLeadNotificationEmail, type LeadNotificationData } from "./templates/lead-notification";

type SendResult =
  | { ok: true; messageId?: string }
  | { ok: false; reason: string };

export async function sendLeadNotification(data: LeadNotificationData): Promise<SendResult> {
  const resend = getResendClient();

  if (!resend) {
    console.warn("[sendLeadNotification] Resend client not initialized (RESEND_API_KEY missing or placeholder). Lead saved to disk only.");
    return { ok: false, reason: "no_resend_client" };
  }

  const config = getEmailConfig();
  const { subject, html } = renderLeadNotificationEmail(data);

  try {
    const response = await resend.emails.send({
      from: config.fromEmail,
      to: config.notificationEmail,
      replyTo: config.notificationEmail,
      subject,
      html
    });

    if (response.error) {
      console.error("[sendLeadNotification] Resend API error:", response.error);
      return { ok: false, reason: `resend_error: ${response.error.message}` };
    }

    console.log(`[sendLeadNotification] Sent lead notification to ${config.notificationEmail} (id: ${response.data?.id})`);
    return { ok: true, messageId: response.data?.id };
  } catch (err) {
    console.error("[sendLeadNotification] Unexpected error:", err);
    return { ok: false, reason: err instanceof Error ? err.message : "unknown_error" };
  }
}
