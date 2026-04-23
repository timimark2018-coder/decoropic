import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

type SubmissionKind = "contact" | "estimator";

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

  return { id, persisted: true };
}
