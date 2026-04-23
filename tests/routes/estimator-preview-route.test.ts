import { describe, expect, it } from "vitest";

describe("app/api/estimator/preview route", () => {
  it("rejects invalid payloads", async () => {
    const { POST } = await import("@/app/api/estimator/preview/route");
    const response = await POST(
      new Request("https://example.com/api/estimator/preview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          projectType: "villa"
        })
      })
    );

    expect(response.status).toBe(400);
  });

  it("returns a preliminary estimate for valid payloads", async () => {
    const { POST } = await import("@/app/api/estimator/preview/route");
    const response = await POST(
      new Request("https://example.com/api/estimator/preview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          projectType: "villa",
          builtUpArea: 450,
          bedrooms: 4,
          bathrooms: 5,
          functionalZones: ["livingRoom", "dining", "kitchen"],
          finishLevel: "premium",
          serviceScope: "measure_design_sourcing",
          customItems: "not_sure",
          projectLocation: "Accra, Ghana",
          timeline: "Within 6 months"
        })
      })
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      ok: true,
      data: expect.objectContaining({
        currency: "USD"
      })
    });
  });
});
