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
  company: z.string().min(2, "Please enter your company name."),
  whatsapp: z.string().min(6, "Please enter a valid WhatsApp number."),
  email: z.email("Please enter a valid email address."),
  projectType: z.string().min(2, "Please choose a project type."),
  location: z.string().min(2, "Please enter the project location."),
  notes: z.string().optional()
});
