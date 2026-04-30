import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { EstimatorResult } from "@/types/estimator";

type SubmissionKind = "contact" | "estimator";

type EstimatorLeadPayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  notes?: string;
  projectType?: string;
  builtUpArea?: number;
  projectLocation?: string;
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
  finishLevel?: string;
  serviceScope?: string;
  result?: EstimatorResult;
};

export async function persistLeadCapture(kind: SubmissionKind, payload: Record<string, unknown>) {
  const id = randomUUID();
  const dir = path.join(process.cwd(), ".submissions", kind);
  const record = {
    id,
    kind,
    createdAt: new Date().toISOString(),
    ...payload
  };

  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, `${id}.json`), `${JSON.stringify(record, null, 2)}\n`, "utf8");

  if (kind === "estimator" || kind === "contact") {
    const p = payload as EstimatorLeadPayload;
    void import("@/lib/email/send-lead-notification")
      .then(({ sendLeadNotification }) =>
        sendLeadNotification({
          name: p.name,
          company: p.company,
          email: p.email,
          whatsapp: p.whatsapp,
          notes: p.notes,
          projectType: p.projectType,
          builtUpArea: p.builtUpArea,
          city: p.projectLocation || p.location,
          bedrooms: p.bedrooms,
          bathrooms: p.bathrooms,
          finishLevel: p.finishLevel,
          serviceScope: p.serviceScope,
          result: p.result,
          submittedAt: new Date(),
          submissionId: id
        })
      )
      .catch((err) => {
        console.error("[lead-capture] Email notification failed (non-blocking):", err);
      });
  }

  return { id, persisted: true };
}
