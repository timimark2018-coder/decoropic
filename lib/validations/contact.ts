import { z } from "zod";

export const acceptedContactFileTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
  "image/webp"
]);

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  // Optional: consumer landing-page leads (/lp/*) omit company. The /contact
  // business form still sends it and marks it required on the client.
  company: z.string().optional(),
  whatsapp: z.string().min(6, "Please enter a valid WhatsApp number."),
  // Optional: landing-page lead form collects email only for PDF delivery, so
  // an empty string is acceptable. The /contact form keeps it required client-side.
  email: z.union([z.email("Please enter a valid email address."), z.literal("")]).optional(),
  projectType: z.string().min(2, "Please choose a project type."),
  location: z.string().min(2, "Please enter the project location."),
  budget: z.string().optional(),
  notes: z.string().optional()
});
