import { beforeEach, describe, expect, it, vi } from "vitest";

const persistLeadCaptureMock = vi.fn();

vi.mock("@/services/lead-capture", () => ({
  persistLeadCapture: persistLeadCaptureMock
}));

describe("app/api/estimator/lead route", () => {
  beforeEach(() => {
    persistLeadCaptureMock.mockReset();
  });

  it("rejects invalid lead payloads", async () => {
    const { POST } = await import("@/app/api/estimator/lead/route");
    const response = await POST(
      new Request("https://example.com/api/estimator/lead", {
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
    expect(persistLeadCaptureMock).not.toHaveBeenCalled();
  });

  it("stores the lead and returns a detailed estimate", async () => {
    persistLeadCaptureMock.mockResolvedValue({
      id: "estimate-1",
      persisted: true
    });

    const { POST } = await import("@/app/api/estimator/lead/route");
    const response = await POST(
      new Request("https://example.com/api/estimator/lead", {
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
          timeline: "Within 6 months",
          name: "Ama Mensah",
          company: "Decor Client",
          whatsapp: "233244000111",
          email: "ama@example.com",
          notes: "Please share the next steps."
        })
      })
    );

    expect(response.status).toBe(200);
    expect(persistLeadCaptureMock).toHaveBeenCalledWith(
      "estimator",
      expect.objectContaining({
        name: "Ama Mensah",
        company: "Decor Client",
        result: expect.objectContaining({
          currency: "USD"
        })
      })
    );
    await expect(response.json()).resolves.toMatchObject({
      ok: true,
      persisted: true,
      data: {
        id: "estimate-1",
        result: expect.objectContaining({
          currency: "USD"
        })
      }
    });
  });
});
