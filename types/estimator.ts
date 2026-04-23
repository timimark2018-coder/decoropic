export type ProjectType = "villa";
export type FinishLevel = "standard" | "premium" | "luxury";
export type ServiceScope = "product_only" | "product_design" | "measure_design_sourcing" | "full_support";
export type CustomItems = "yes" | "no" | "not_sure";
export type FunctionalZone = "livingRoom" | "dining" | "familyArea" | "study" | "kitchen" | "outdoorArea" | "entranceHall";

export type EstimatorPreviewInput = {
  projectType: ProjectType;
  builtUpArea: number;
  bedrooms: number;
  bathrooms: number;
  functionalZones: FunctionalZone[];
  finishLevel: FinishLevel;
  serviceScope: ServiceScope;
  customItems: CustomItems;
  projectLocation: string;
  timeline: string;
};

export type EstimatorLeadInput = EstimatorPreviewInput & {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  notes?: string;
};

export type EstimatorAllocation = {
  key: string;
  label: string;
  percentage: number;
  amount: number;
};

export type EstimatorResult = {
  currency: string;
  baseEstimate: number;
  zoneAddOnsTotal: number;
  minEstimate: number;
  maxEstimate: number;
  midpointEstimate: number;
  allocations: EstimatorAllocation[];
  recommendations: string[];
};
