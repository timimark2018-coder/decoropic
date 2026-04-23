import { NextResponse } from "next/server";
import { calculateEstimatorResult } from "@/lib/estimator/calculate";
import { estimatorLeadSchema } from "@/lib/validations/estimator";
import { persistLeadCapture } from "@/services/lead-capture";

export async function POST(request: Request) {
  const json = await request.json();
  const result = estimatorLeadSchema.safeParse(json);

  if (!result.success) {
    return NextResponse.json({ ok: false, errors: result.error.flatten() }, { status: 400 });
  }

  const calculation = calculateEstimatorResult(result.data);
  const stored = await persistLeadCapture("estimator", {
    ...result.data,
    result: calculation
  });

  return NextResponse.json({
    ok: true,
    persisted: stored.persisted,
    data: {
      id: stored.id,
      result: calculation
    }
  });
}
