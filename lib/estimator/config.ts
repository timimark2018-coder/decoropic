export const estimatorConfig = {
  currency: "USD",
  projectTypes: ["villa", "apartment"],
  baseAreaPrice: 80,
  // 项目类型系数，乘在 baseAreaPrice 上，对 standard / premium / luxury 三档同比例生效。
  // 别墅 USD 80/㎡(=1);公寓 USD 60/㎡(=0.75)，2026-10 由 Kevin 确认。
  projectTypeMultiplier: {
    villa: 1,
    apartment: 0.75
  },
  minRangeFactor: 0.9,
  maxRangeFactor: 1.15,
  finishMultiplier: {
    standard: 1,
    premium: 1.5,
    luxury: 2.5
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
    livingRoom: 2500,
    dining: 1000,
    familyArea: 1500,
    study: 1000,
    kitchen: 3500,
    outdoorArea: 2000,
    entranceHall: 1000
  },
  allocationDefaults: {
    livingPublic: 25,
    bedrooms: 22,
    bathrooms: 18,
    kitchen: 12,
    doorsFinishesOther: 23
  }
} as const;
