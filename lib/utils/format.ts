export function formatPrice(price: number | null, currency = "USD", priceType: "fixed" | "on_request" = "fixed") {
  if (priceType === "on_request" || price === null) {
    return "Price on request";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(price);
}

export function formatMileage(mileage: number) {
  return `${new Intl.NumberFormat("en-US").format(mileage)} km`;
}

