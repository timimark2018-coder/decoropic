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
    data: {
      id: stored.id,
      result: calculation
    }
  });
}
