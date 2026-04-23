import { estimatorConfig } from "@/lib/estimator/config";
import type { EstimatorLeadInput, EstimatorPreviewInput, EstimatorResult } from "@/types/estimator";

const allocationLabels: Record<keyof typeof estimatorConfig.allocationDefaults, string> = {
  livingPublic: "Living and public areas",
  bedrooms: "Bedrooms",
  bathrooms: "Bathrooms",
  kitchen: "Kitchen",
  doorsFinishesOther: "Doors, finishes and other categories"
};

export function calculateEstimatorResult(input: EstimatorPreviewInput | EstimatorLeadInput): EstimatorResult {
  const zoneAddOnsTotal = input.functionalZones.reduce((total, zone) => total + estimatorConfig.zoneAddOns[zone], 0);
  const baseEstimate =
    estimatorConfig.baseAreaPrice *
      input.builtUpArea *
      estimatorConfig.finishMultiplier[input.finishLevel] *
      estimatorConfig.serviceMultiplier[input.serviceScope] *
      estimatorConfig.customMultiplier[input.customItems] +
    zoneAddOnsTotal;
  const minEstimate = Math.round(baseEstimate * estimatorConfig.minRangeFactor);
  const maxEstimate = Math.round(baseEstimate * estimatorConfig.maxRangeFactor);
  const midpointEstimate = Math.round((minEstimate + maxEstimate) / 2);

  const allocations = Object.entries(estimatorConfig.allocationDefaults).map(([key, percentage]) => ({
    key,
    label: allocationLabels[key as keyof typeof estimatorConfig.allocationDefaults],
    percentage,
    amount: Math.round((midpointEstimate * percentage) / 100)
  }));

  const recommendations = [
    "Book a site measurement to verify dimensions before final specification.",
    "Request design support if you want the budget aligned to a premium visual target.",
    "Send drawings or BOQ for a more focused sourcing and execution plan.",
    "Continue the discussion on WhatsApp for faster coordination."
  ];

  return {
    currency: estimatorConfig.currency,
    baseEstimate: Math.round(baseEstimate),
    zoneAddOnsTotal,
    minEstimate,
    maxEstimate,
    midpointEstimate,
    allocations,
    recommendations
  };
}
