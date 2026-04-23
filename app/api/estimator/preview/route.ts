import { NextResponse } from "next/server";
import { calculateEstimatorResult } from "@/lib/estimator/calculate";
import { estimatorPreviewSchema } from "@/lib/validations/estimator";

export async function POST(request: Request) {
  const json = await request.json();
  const result = estimatorPreviewSchema.safeParse(json);

  if (!result.success) {
    return NextResponse.json({ ok: false, errors: result.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    data: calculateEstimatorResult(result.data)
  });
}
