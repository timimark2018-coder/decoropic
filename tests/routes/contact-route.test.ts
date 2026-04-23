import { beforeEach, describe, expect, it, vi } from "vitest";

const persistLeadCaptureMock = vi.fn();

vi.mock("@/services/lead-capture", () => ({
  persistLeadCapture: persistLeadCaptureMock
}));

describe("app/api/contact route", () => {
  beforeEach(() => {
    persistLeadCaptureMock.mockReset();
  });

  it("rejects invalid form submissions", async () => {
    const { POST } = await import("@/app/api/contact/route");
    const formData = new FormData();
    formData.set("name", "A");

    const response = await POST(
      new Request("https://example.com/api/contact", {
        method: "POST",
        body: formData
      })
    );

    expect(response.status).toBe(400);
    expect(persistLeadCaptureMock).not.toHaveBeenCalled();
  });

  it("stores a valid submission", async () => {
    persistLeadCaptureMock.mockResolvedValue({
      id: "contact-1",
      persisted: true
    });

    const { POST } = await import("@/app/api/contact/route");
    const formData = new FormData();
    formData.set("name", "Ama Mensah");
    formData.set("company", "Decor Client");
    formData.set("whatsapp", "233244000111");
    formData.set("email", "ama@example.com");
    formData.set("projectType", "Villa");
    formData.set("location", "Accra, Ghana");
    formData.set("notes", "Need support with sourcing and design coordination.");
    formData.set("sourcePage", "/contact");

    const response = await POST(
      new Request("https://example.com/api/contact", {
        method: "POST",
        body: formData
      })
    );

    expect(response.status).toBe(200);
    expect(persistLeadCaptureMock).toHaveBeenCalledWith(
      "contact",
      expect.objectContaining({
        name: "Ama Mensah",
        company: "Decor Client",
        sourcePage: "/contact",
        uploadedFiles: []
      })
    );
    await expect(response.json()).resolves.toMatchObject({
      ok: true,
      persisted: true,
      data: {
        id: "contact-1"
      }
    });
  });
});
