export const estimatorConfig = {
  currency: "USD",
  projectTypes: ["villa", "apartment"],
  baseAreaPrice: 80,
  // projectType 过去只存在于问卷里:公式不读它，hook 提交时还把它硬编码成 "villa"，
  // 所以同面积的别墅和公寓算出来完全一样。现在它是真实的一维。
  // apartment rate = villa until confirmed —— 公寓先沿用别墅单价，等实测后再给自己的系数，
  // 不在这里自拟一个没有依据的数字。
  projectTypeMultiplier: {
    villa: 1,
    apartment: 1
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
