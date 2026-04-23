export const estimatorConfig = {
  currency: "USD",
  projectTypes: ["villa"],
  baseAreaPrice: 250,
  minRangeFactor: 0.9,
  maxRangeFactor: 1.15,
  finishMultiplier: {
    standard: 1,
    premium: 1.2,
    luxury: 1.5
  },
  serviceMultiplier: {
    product_only: 1,
    product_design: 1.05,
    measure_design_sourcing: 1.12,
    full_support: 1.18
  },
  customMultiplier: {
    yes: 1.1,
    no: 1,
    not_sure: 1.05
  },
  zoneAddOns: {
    livingRoom: 8000,
    dining: 4000,
    familyArea: 5000,
    study: 3000,
    kitchen: 12000,
    outdoorArea: 6000,
    entranceHall: 2500
  },
  allocationDefaults: {
    livingPublic: 25,
    bedrooms: 22,
    bathrooms: 18,
    kitchen: 12,
    doorsFinishesOther: 23
  }
} as const;
