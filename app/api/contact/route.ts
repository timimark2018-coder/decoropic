import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { contactSchema, acceptedContactFileTypes } from "@/lib/validations/contact";
import { persistLeadCapture } from "@/services/lead-capture";

const uploadDir = path.join(process.cwd(), ".submissions", "contact-files");

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Expected a multipart/form-data request." }, { status: 400 });
  }

  const payload = {
    name: String(formData.get("name") || ""),
    company: String(formData.get("company") || ""),
    whatsapp: String(formData.get("whatsapp") || ""),
    email: String(formData.get("email") || ""),
    projectType: String(formData.get("projectType") || ""),
    location: String(formData.get("location") || ""),
    budget: String(formData.get("budget") || ""),
    notes: String(formData.get("notes") || "")
  };

  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json({ ok: false, errors: result.error.flatten() }, { status: 400 });
  }

  // Campaign attribution forwarded from the landing-page lead form (UTM params
  // persisted in sessionStorage). Captured for lead routing / reporting.
  const utm = {
    utmSource: String(formData.get("utm_source") || ""),
    utmMedium: String(formData.get("utm_medium") || ""),
    utmCampaign: String(formData.get("utm_campaign") || ""),
    utmContent: String(formData.get("utm_content") || ""),
    utmTerm: String(formData.get("utm_term") || ""),
    referrer: String(formData.get("referrer") || "")
  };
  const hasUtm = Object.values(utm).some(Boolean);

  const files = formData.getAll("files").filter((entry): entry is File => entry instanceof File && entry.size > 0);
  const uploadedFiles: string[] = [];

  if (files.length) {
    for (const file of files) {
      if (!acceptedContactFileTypes.has(file.type)) {
        return NextResponse.json({ ok: false, error: `Unsupported file type: ${file.type || "unknown"}.` }, { status: 400 });
      }
    }

    try {
      await mkdir(uploadDir, { recursive: true });

      for (const file of files) {
        const extension = path.extname(file.name) || "";
        const filename = `${randomUUID()}${extension}`;
        const bytes = Buffer.from(await file.arrayBuffer());
        await writeFile(path.join(uploadDir, filename), bytes);
        uploadedFiles.push(file.name);
      }
    } catch (err) {
      console.warn("[contact] file upload write failed (continuing without files):", err);
    }
  }

  const stored = await persistLeadCapture("contact", {
    ...result.data,
    sourcePage: String(formData.get("sourcePage") || "/contact"),
    uploadedFiles,
    ...(hasUtm ? { utm } : {})
  });

  // 磁盘与邮件两条通路都没成 —— 这条询盘哪里都没留下。
  // 这种情况下回 ok:true 是最糟的:访客以为已送达，不会再用别的方式联系，
  // 而且前端会把它当成转化上报给 GA/Pixel。所以这里明确失败，
  // 让表单显示错误并给出 WhatsApp 兜底。
  if (!stored.persisted && !stored.notified) {
    return NextResponse.json(
      {
        ok: false,
        code: "lead_not_captured",
        error:
          "We could not record your inquiry just now. Please message us on WhatsApp +233 59 247 0446 or email service@decoropic.com."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    persisted: stored.persisted,
    notified: stored.notified,
    message: "Contact inquiry saved successfully.",
    data: {
      id: stored.id,
      uploadedFiles
    }
  });
}
