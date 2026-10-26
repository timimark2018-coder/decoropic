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
};

// 这条链路此前有个静默失败:磁盘写入在 Vercel 上必然失败(文件系统只读)，
// 而邮件发送的返回值被丢弃、路由又无条件回 ok:true —— 于是 Resend 一旦出问题
// (key 失效、域名未验证、限流)，询盘就无声无息地消失，访客却看到「已收到」。
// 现在两条通路的结果都往上报,由路由决定是不是真的成功。
export async function persistLeadCapture(kind: SubmissionKind, payload: Record<string, unknown>) {
  const id = randomUUID();
  const dir = path.join(process.cwd(), ".submissions", kind);
  const record = {
    id,
    kind,
    createdAt: new Date().toISOString(),
    ...payload
  };

  let persisted = true;
  try {
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, `${id}.json`), `${JSON.stringify(record, null, 2)}\n`, "utf8");
  } catch (err) {
    console.warn("[lead-capture] disk write failed (continuing without persistence):", err);
    persisted = false;
  }

  let notified = false;
  let notifyReason: string | undefined;

  if (kind === "estimator" || kind === "contact") {
    const p = payload as EstimatorLeadPayload;
    try {
      const { sendLeadNotification } = await import("@/lib/email/send-lead-notification");
      const sent = await sendLeadNotification({
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
        budget: p.budget,
        sourcePage: p.sourcePage,
        utm: p.utm,
        result: p.result,
        submittedAt: new Date(),
        submissionId: id
      });
      notified = sent.ok;
      notifyReason = sent.ok ? undefined : sent.reason;
    } catch (err) {
      console.error("[lead-capture] Email notification failed:", err);
      notifyReason = err instanceof Error ? err.message : "unknown_error";
    }
  }

  if (!persisted && !notified) {
    // 两条通路都没成 —— 这条询盘没有任何地方留下记录
    console.error(
      `[lead-capture] LEAD LOST: kind=${kind} id=${id} persisted=false notified=false reason=${notifyReason ?? "n/a"}`
    );
  }

  return { id, persisted, notified, notifyReason };
}
