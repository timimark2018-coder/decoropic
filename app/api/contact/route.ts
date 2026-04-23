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
    notes: String(formData.get("notes") || "")
  };

  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json({ ok: false, errors: result.error.flatten() }, { status: 400 });
  }

  const files = formData.getAll("files").filter((entry): entry is File => entry instanceof File && entry.size > 0);
  const uploadedFiles: string[] = [];

  if (files.length) {
    await mkdir(uploadDir, { recursive: true });

    for (const file of files) {
      if (!acceptedContactFileTypes.has(file.type)) {
        return NextResponse.json({ ok: false, error: `Unsupported file type: ${file.type || "unknown"}.` }, { status: 400 });
      }

      const extension = path.extname(file.name) || "";
      const filename = `${randomUUID()}${extension}`;
      const bytes = Buffer.from(await file.arrayBuffer());
      await writeFile(path.join(uploadDir, filename), bytes);
      uploadedFiles.push(file.name);
    }
  }

  const stored = await persistLeadCapture("contact", {
    ...result.data,
    sourcePage: String(formData.get("sourcePage") || "/contact"),
    uploadedFiles
  });

  return NextResponse.json({
    ok: true,
    persisted: stored.persisted,
    message: "Contact inquiry saved successfully.",
    data: {
      id: stored.id,
      uploadedFiles
    }
  });
}
