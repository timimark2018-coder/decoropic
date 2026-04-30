import { z } from "zod";

export const estimatorPreviewSchema = z.object({
  projectType: z.enum(["villa"]),
  builtUpArea: z.coerce.number().positive("Please enter the built-up area."),
  bedrooms: z.coerce.number().int("Bedrooms must be a whole number.").min(1, "Please enter at least one bedroom."),
  bathrooms: z.coerce.number().int("Bathrooms must be a whole number.").min(1, "Please enter at least one bathroom."),
  functionalZones: z
    .array(z.enum(["livingRoom", "dining", "familyArea", "study", "kitchen", "outdoorArea", "entranceHall"]))
    .min(1, "Select at least one functional zone."),
  finishLevel: z.enum(["standard", "premium", "luxury"]),
  serviceScope: z.enum(["product_only", "product_design", "measure_design_sourcing", "full_support"]),
  customItems: z.enum(["yes", "no", "not_sure"]),
  projectLocation: z.string().min(2, "Please enter the project location."),
  timeline: z.string().min(2, "Please share the expected timeline.")
});

export const estimatorLeadSchema = estimatorPreviewSchema.extend({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().optional(),
  whatsapp: z.string().min(6, "Please enter a valid WhatsApp number."),
  email: z.email("Please enter a valid email address."),
  notes: z.string().optional()
});
