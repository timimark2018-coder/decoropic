import type { EstimatorResult } from "@/types/estimator";

export type LeadNotificationData = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  notes?: string;
  projectType?: string;
  builtUpArea?: number;
  city?: string;
  bedrooms?: number;
  bathrooms?: number;
  finishLevel?: string;
  serviceScope?: string;
  budget?: string;
  sourcePage?: string;
  utm?: {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmTerm?: string;
    referrer?: string;
  };
  result?: EstimatorResult;
  submittedAt: Date;
  submissionId: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safe(value: unknown): string {
  if (value === undefined || value === null || value === "") return "—";
  return escapeHtml(String(value));
}

export function renderLeadNotificationEmail(data: LeadNotificationData) {
  const submittedAtStr = data.submittedAt.toLocaleString("en-GB", {
    timeZone: "Africa/Accra",
    dateStyle: "medium",
    timeStyle: "short"
  });

  const subject = data.name
    ? `🔔 New Lead: ${data.name} — ${data.projectType || "Project"}${data.builtUpArea ? ` (${data.builtUpArea}m²)` : ""}`
    : `🔔 New Calculator Submission — ${submittedAtStr}`;

  const minStr = data.result ? `$${data.result.minEstimate.toLocaleString()}` : "N/A";
  const maxStr = data.result ? `$${data.result.maxEstimate.toLocaleString()}` : "N/A";
  const midStr = data.result ? `$${data.result.midpointEstimate.toLocaleString()}` : "N/A";

  const utm = data.utm;
  const sourceSection =
    data.sourcePage || (utm && Object.values(utm).some(Boolean))
      ? `
    <div class="section">
      <h2>Source</h2>
      ${data.sourcePage ? `<div class="row"><div class="label">Landing page</div><div class="value">${safe(data.sourcePage)}</div></div>` : ""}
      ${utm?.utmSource ? `<div class="row"><div class="label">Campaign src</div><div class="value">${safe(utm.utmSource)}</div></div>` : ""}
      ${utm?.utmMedium ? `<div class="row"><div class="label">Medium</div><div class="value">${safe(utm.utmMedium)}</div></div>` : ""}
      ${utm?.utmCampaign ? `<div class="row"><div class="label">Campaign</div><div class="value">${safe(utm.utmCampaign)}</div></div>` : ""}
      ${utm?.utmContent ? `<div class="row"><div class="label">Content</div><div class="value">${safe(utm.utmContent)}</div></div>` : ""}
      ${utm?.utmTerm ? `<div class="row"><div class="label">Term</div><div class="value">${safe(utm.utmTerm)}</div></div>` : ""}
      ${utm?.referrer ? `<div class="row"><div class="label">Referrer</div><div class="value">${safe(utm.referrer)}</div></div>` : ""}
    </div>`
      : "";

  const whatsappLink = data.whatsapp
    ? `https://wa.me/${data.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi ${data.name || "there"}, this is Decoropic. We received your project estimate request and would love to discuss further.`)}`
    : null;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f7f3ec; padding: 20px; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid rgba(174, 146, 96, 0.25); border-radius: 12px; overflow: hidden; }
    .header { background: #ae9260; color: white; padding: 24px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 600; }
    .header .meta { margin-top: 8px; font-size: 13px; opacity: 0.9; }
    .section { padding: 20px 24px; border-bottom: 1px solid #f0ebe0; }
    .section:last-child { border-bottom: none; }
    .section h2 { margin: 0 0 12px 0; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #ae9260; font-weight: 600; }
    .row { display: flex; padding: 4px 0; }
    .row .label { width: 120px; color: #666; font-size: 13px; }
    .row .value { flex: 1; color: #1a1a1a; font-size: 14px; font-weight: 500; }
    .estimate-box { background: #f7f3ec; border: 1px solid rgba(174, 146, 96, 0.3); border-radius: 8px; padding: 16px; text-align: center; }
    .estimate-box .range { font-size: 26px; font-weight: 700; color: #1a1a1a; }
    .estimate-box .midpoint { font-size: 13px; color: #666; margin-top: 4px; }
    .cta { display: inline-block; padding: 10px 20px; background: #ae9260; color: white; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 500; margin-top: 12px; }
    .footer { padding: 16px 24px; background: #faf8f3; font-size: 12px; color: #888; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Project Lead</h1>
      <div class="meta">Submitted ${escapeHtml(submittedAtStr)} · ID: ${escapeHtml(data.submissionId)}</div>
    </div>

    <div class="section">
      <h2>Contact</h2>
      <div class="row"><div class="label">Name</div><div class="value">${safe(data.name)}</div></div>
      ${data.company ? `<div class="row"><div class="label">Company</div><div class="value">${safe(data.company)}</div></div>` : ""}
      <div class="row"><div class="label">Email</div><div class="value">${safe(data.email)}</div></div>
      <div class="row"><div class="label">WhatsApp</div><div class="value">${safe(data.whatsapp)}</div></div>
      ${data.notes ? `<div class="row"><div class="label">Notes</div><div class="value">${safe(data.notes)}</div></div>` : ""}
      ${whatsappLink ? `<a href="${whatsappLink}" class="cta">→ Reply via WhatsApp</a>` : ""}
    </div>

    <div class="section">
      <h2>Project</h2>
      <div class="row"><div class="label">Type</div><div class="value">${safe(data.projectType)}</div></div>
      <div class="row"><div class="label">Area</div><div class="value">${data.builtUpArea ? `${data.builtUpArea} m²` : "—"}</div></div>
      <div class="row"><div class="label">City</div><div class="value">${safe(data.city)}</div></div>
      ${data.budget ? `<div class="row"><div class="label">Budget</div><div class="value">${safe(data.budget)}</div></div>` : ""}
      <div class="row"><div class="label">Bedrooms</div><div class="value">${data.bedrooms ?? "—"}</div></div>
      <div class="row"><div class="label">Bathrooms</div><div class="value">${data.bathrooms ?? "—"}</div></div>
      <div class="row"><div class="label">Finish</div><div class="value">${safe(data.finishLevel)}</div></div>
      <div class="row"><div class="label">Service</div><div class="value">${safe(data.serviceScope)}</div></div>
    </div>

    <div class="section">
      <h2>Estimate</h2>
      <div class="estimate-box">
        <div class="range">${minStr} – ${maxStr}</div>
        <div class="midpoint">Midpoint: ${midStr}</div>
      </div>
    </div>
${sourceSection}
    <div class="footer">
      Decoropic Lead Notification · Auto-generated
    </div>
  </div>
</body>
</html>
  `.trim();

  return { subject, html };
}
