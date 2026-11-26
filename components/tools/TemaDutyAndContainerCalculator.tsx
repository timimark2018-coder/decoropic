"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants/contact";

type CategoryPreset = {
  id: string;
  label: string;
  dutyRate: number;
  note: string;
};

const CATEGORY_PRESETS: CategoryPreset[] = [
  { id: "tiles", label: "Porcelain / Ceramic Tiles", dutyRate: 20, note: "Typical ECOWAS CET band for finished ceramic/porcelain tiles (confirm exact HS code)." },
  { id: "kitchen", label: "Kitchen Cabinets & Wardrobes", dutyRate: 20, note: "Custom flat-pack cabinetry & fitted wardrobes (wood/plywood furniture HS 9403)." },
  { id: "sanitary", label: "Sanitary Ware & Bathroom Fittings", dutyRate: 20, note: "WCs, basins, vanities, showers and brassware." },
  { id: "windows", label: "Aluminium Windows & Doors", dutyRate: 20, note: "Glazed aluminium profiles, sliding doors and steel/WPC interior doors." },
  { id: "lighting", label: "LED Lighting & Chandeliers", dutyRate: 20, note: "Check Ghana Standards Authority (GSA) conformity & 230V/50Hz driver specs." },
  { id: "furniture", label: "Hotel FF&E / Residential Furniture", dutyRate: 20, note: "Beds, sofas, dining sets and hotel casegoods." }
];

type LoadItem = {
  id: string;
  label: string;
  unitLabel: string;
  cbmPerUnit: number;
  defaultQty: number;
};

const LOAD_ITEMS: LoadItem[] = [
  { id: "tiles_100m2", label: "Porcelain Floor & Wall Tiles", unitLabel: "per 100 m²", cbmPerUnit: 2.2, defaultQty: 3 },
  { id: "kitchen_set", label: "Full Kitchen Cabinet + Countertop Set", unitLabel: "kitchens", cbmPerUnit: 6.5, defaultQty: 1 },
  { id: "bathroom_set", label: "Complete Bathroom Set (WC, Vanity, Shower)", unitLabel: "bathrooms", cbmPerUnit: 2.0, defaultQty: 4 },
  { id: "wardrobe_set", label: "Fitted Bedroom Wardrobes", unitLabel: "bedrooms", cbmPerUnit: 3.0, defaultQty: 4 },
  { id: "doors_10", label: "Interior & Entrance Doors (with Frames)", unitLabel: "sets of 5 doors", cbmPerUnit: 2.5, defaultQty: 2 },
  { id: "windows_set", label: "Aluminium Windows & Sliding Doors", unitLabel: "per 20 m² glazing", cbmPerUnit: 3.2, defaultQty: 2 },
  { id: "furniture_room", label: "Living / Dining / Bedroom Furniture Pack", unitLabel: "rooms", cbmPerUnit: 6.0, defaultQty: 4 },
  { id: "lighting_pack", label: "Whole-House Lighting & Chandeliers", unitLabel: "packages", cbmPerUnit: 2.0, defaultQty: 1 }
];

const GHS_PER_USD = 12.0;

function fmtUsd(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function fmtGhs(n: number): string {
  return "GHS " + Math.round(n).toLocaleString("en-US");
}

export function TemaDutyAndContainerCalculator() {
  const [tab, setTab] = useState<"duty" | "container">("duty");

  // Duty calculator state
  const [categoryId, setCategoryId] = useState<string>("kitchen");
  const [fobUsd, setFobUsd] = useState<number>(25000);
  const [freightUsd, setFreightUsd] = useState<number>(3800);
  const [insuranceUsd, setInsuranceUsd] = useState<number>(250);
  const [dutyPct, setDutyPct] = useState<number>(20);

  // Container calculator state
  const [quantities, setQuantities] = useState<Record<string, number>>(() =>
    Object.fromEntries(LOAD_ITEMS.map((item) => [item.id, item.defaultQty]))
  );

  const selectedCategory = CATEGORY_PRESETS.find((c) => c.id === categoryId) ?? CATEGORY_PRESETS[0];

  // Ghana ICUMS indicative 2026 tax stacking (COVID recovery levy withdrawn in 2026)
  const cif = Math.max(0, fobUsd) + Math.max(0, freightUsd) + Math.max(0, insuranceUsd);
  const importDuty = cif * (dutyPct / 100);
  const dutyPlusCif = cif + importDuty;
  const nhil = dutyPlusCif * 0.025;
  const getfund = dutyPlusCif * 0.025;
  const vat = dutyPlusCif * 0.15;
  const minorLevies = cif * 0.0225; // ECOWAS + AU + EXIM + Inspection indicative ~2.25%
  const totalTaxes = importDuty + nhil + getfund + vat + minorLevies;
  const landedUsd = cif + totalTaxes;
  const effectiveTaxPct = cif > 0 ? (totalTaxes / cif) * 100 : 0;

  const dutyWaMessage = `Hi Decoropic, I used your Tema Duty Calculator: Category=${selectedCategory.label}, FOB=${fmtUsd(fobUsd)}, CIF=${fmtUsd(cif)}, Est. Taxes=${fmtUsd(totalTaxes)} (${effectiveTaxPct.toFixed(1)}%). Can you help quote a consolidated Foshan shipment?`;

  // Container calculation
  const totalCbm = LOAD_ITEMS.reduce((sum, item) => sum + (quantities[item.id] ?? 0) * item.cbmPerUnit, 0);
  const recContainer =
    totalCbm <= 12
      ? { name: "LCL (Shared Container)", detail: "Best for compact orders under ~12 m³; consolidated at our Foshan warehouse before shipment." }
      : totalCbm <= 28
        ? { name: "1 × 20GP Container (~28 m³ usable)", detail: "Ideal when heavy items like porcelain tiles or stone hit weight limits first." }
        : totalCbm <= 66
          ? { name: "1 × 40HQ Container (~66–68 m³ usable)", detail: "Lowest freight cost per m³ for mixed villa or apartment finishing packages." }
          : {
              name: `${Math.ceil(totalCbm / 66)} × 40HQ Containers (Phased)`,
              detail: "We recommend phasing shipments by floor or installation sequence to avoid Tema demurrage."
            };

  const containerWaMessage = `Hi Decoropic, I used your Container Estimator: estimated volume ~${totalCbm.toFixed(1)} m³ (${recContainer.name}). Can you review my floor plan and quote a Foshan consolidated shipment?`;

  return (
    <div className="rounded-[8px] border border-brand-pine-dark/15 bg-white shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-brand-pine-dark/10 bg-[#f7f3ec]">
        <button
          type="button"
          onClick={() => setTab("duty")}
          className={`px-6 py-4 text-left transition-colors ${
            tab === "duty"
              ? "bg-brand-pine-dark text-brand-ivory"
              : "text-brand-pine-dark/75 hover:bg-brand-pine-dark/5"
          }`}
        >
          <span className="block text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-gold">Tool 01</span>
          <span className="mt-1 block text-base font-bold">Tema Port Duty &amp; Landed Cost</span>
        </button>
        <button
          type="button"
          onClick={() => setTab("container")}
          className={`px-6 py-4 text-left transition-colors ${
            tab === "container"
              ? "bg-brand-pine-dark text-brand-ivory"
              : "text-brand-pine-dark/75 hover:bg-brand-pine-dark/5"
          }`}
        >
          <span className="block text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-gold">Tool 02</span>
          <span className="mt-1 block text-base font-bold">20GP / 40HQ Container Volume</span>
        </button>
      </div>

      {tab === "duty" ? (
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Inputs */}
          <div className="space-y-5">
            <div>
              <label htmlFor="cat-select" className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-pine-dark/70">
                Material Category
              </label>
              <select
                id="cat-select"
                value={categoryId}
                onChange={(e) => {
                  setCategoryId(e.target.value);
                  const found = CATEGORY_PRESETS.find((c) => c.id === e.target.value);
                  if (found) setDutyPct(found.dutyRate);
                }}
                className="mt-2 w-full rounded-[4px] border border-brand-pine-dark/20 bg-white px-4 py-3 text-sm text-brand-pine-dark focus:border-brand-gold focus:outline-none"
              >
                {CATEGORY_PRESETS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-xs text-brand-pine-dark/60">{selectedCategory.note}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fob-input" className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-pine-dark/70">
                  FOB Goods Value (USD)
                </label>
                <input
                  id="fob-input"
                  type="number"
                  min={0}
                  step={500}
                  value={fobUsd}
                  onChange={(e) => setFobUsd(Number(e.target.value) || 0)}
                  className="mt-2 w-full rounded-[4px] border border-brand-pine-dark/20 px-4 py-3 text-sm text-brand-pine-dark focus:border-brand-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="freight-input" className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-pine-dark/70">
                  Sea Freight to Tema (USD)
                </label>
                <input
                  id="freight-input"
                  type="number"
                  min={0}
                  step={100}
                  value={freightUsd}
                  onChange={(e) => setFreightUsd(Number(e.target.value) || 0)}
                  className="mt-2 w-full rounded-[4px] border border-brand-pine-dark/20 px-4 py-3 text-sm text-brand-pine-dark focus:border-brand-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="ins-input" className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-pine-dark/70">
                  Marine Insurance (USD)
                </label>
                <input
                  id="ins-input"
                  type="number"
                  min={0}
                  step={50}
                  value={insuranceUsd}
                  onChange={(e) => setInsuranceUsd(Number(e.target.value) || 0)}
                  className="mt-2 w-full rounded-[4px] border border-brand-pine-dark/20 px-4 py-3 text-sm text-brand-pine-dark focus:border-brand-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="duty-rate" className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-pine-dark/70">
                  Import Duty Band: {dutyPct}%
                </label>
                <input
                  id="duty-rate"
                  type="range"
                  min={0}
                  max={20}
                  step={5}
                  value={dutyPct}
                  onChange={(e) => setDutyPct(Number(e.target.value))}
                  className="mt-4 w-full accent-brand-gold"
                />
                <div className="mt-1 flex justify-between text-[11px] text-brand-pine-dark/50">
                  <span>0%</span>
                  <span>5%</span>
                  <span>10%</span>
                  <span>15%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col justify-between rounded-[6px] bg-[#f7f3ec] p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Indicative Tema Breakdown</p>
              <dl className="mt-4 space-y-2.5 text-sm">
                <div className="flex justify-between border-b border-brand-pine-dark/10 pb-2">
                  <dt className="text-brand-pine-dark/75">CIF Value (FOB + Freight + Insurance)</dt>
                  <dd className="font-semibold text-brand-pine-dark">{fmtUsd(cif)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-brand-pine-dark/75">Import Duty ({dutyPct}% of CIF)</dt>
                  <dd className="font-medium text-brand-pine-dark">{fmtUsd(importDuty)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-brand-pine-dark/75">NHIL (2.5%) + GETFund (2.5%) on CIF + Duty</dt>
                  <dd className="font-medium text-brand-pine-dark">{fmtUsd(nhil + getfund)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-brand-pine-dark/75">VAT (15% on CIF + Duty)</dt>
                  <dd className="font-medium text-brand-pine-dark">{fmtUsd(vat)}</dd>
                </div>
                <div className="flex justify-between border-b border-brand-pine-dark/10 pb-2">
                  <dt className="text-brand-pine-dark/75">ECOWAS / AU / EXIM / Inspection (~2.25%)</dt>
                  <dd className="font-medium text-brand-pine-dark">{fmtUsd(minorLevies)}</dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="font-bold text-brand-pine-dark">Est. Port Taxes &amp; Levies ({effectiveTaxPct.toFixed(1)}% of CIF)</dt>
                  <dd className="font-bold text-brand-gold">{fmtUsd(totalTaxes)}</dd>
                </div>
                <div className="flex justify-between pt-1 text-base">
                  <dt className="font-bold text-brand-pine-dark">Est. Landed Cost (excl. local clearing/haulage)</dt>
                  <dd className="font-extrabold text-brand-pine-dark">{fmtUsd(landedUsd)}</dd>
                </div>
                <p className="text-right text-xs text-brand-pine-dark/60">
                  ≈ {fmtGhs(landedUsd * GHS_PER_USD)} (at {GHS_PER_USD.toFixed(1)} GHS/USD planning rate)
                </p>
              </dl>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={WHATSAPP_LINK(dutyWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-[4px] bg-brand-pine-dark px-5 py-3.5 text-sm font-semibold text-[#f7f3ec] transition-colors hover:bg-brand-gold hover:text-brand-pine-dark"
              >
                Send This Estimate on WhatsApp →
              </a>
              <Link
                href="/estimator"
                className="flex w-full items-center justify-center rounded-[4px] border border-brand-pine-dark/20 bg-white px-5 py-3 text-sm font-semibold text-brand-pine-dark transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Estimate Full House Budget (60 s)
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* Load selectors */}
          <div className="space-y-3">
            {LOAD_ITEMS.map((item) => {
              const qty = quantities[item.id] ?? 0;
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-[4px] border border-brand-pine-dark/10 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-brand-pine-dark">{item.label}</p>
                    <p className="text-xs text-brand-pine-dark/60">
                      ~{item.cbmPerUnit} m³ {item.unitLabel}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantities((prev) => ({ ...prev, [item.id]: Math.max(0, (prev[item.id] ?? 0) - 1) }))}
                      className="h-8 w-8 rounded border border-brand-pine-dark/20 text-sm font-bold text-brand-pine-dark hover:border-brand-gold"
                      aria-label={`Decrease ${item.label}`}
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-bold tabular-nums text-brand-pine-dark">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQuantities((prev) => ({ ...prev, [item.id]: (prev[item.id] ?? 0) + 1 }))}
                      className="h-8 w-8 rounded border border-brand-pine-dark/20 text-sm font-bold text-brand-pine-dark hover:border-brand-gold"
                      aria-label={`Increase ${item.label}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Container recommendation */}
          <div className="flex flex-col justify-between rounded-[6px] bg-[#f7f3ec] p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Estimated Shipment Volume</p>
              <p
                className="mt-3 text-brand-pine-dark"
                style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.05 }}
              >
                {totalCbm.toFixed(1)} m³
              </p>
              <div className="mt-5 rounded-[4px] border-l-4 border-brand-gold bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">Recommended Container</p>
                <p className="mt-1 text-base font-bold text-brand-pine-dark">{recContainer.name}</p>
                <p className="mt-2 text-sm leading-[1.6] text-brand-pine-dark/75">{recContainer.detail}</p>
              </div>
              <ul className="mt-5 space-y-2 text-xs leading-[1.6] text-brand-pine-dark/70">
                <li>• 20GP usable capacity: ~28 m³ (max payload ~21–24 tons — tiles hit weight limit first).</li>
                <li>• 40HQ usable capacity: ~66–68 m³ (best value for bulky kitchens, doors and furniture).</li>
                <li>• No minimum order: mixed categories are QC-checked and loaded together in Foshan.</li>
              </ul>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={WHATSAPP_LINK(containerWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-[4px] bg-brand-pine-dark px-5 py-3.5 text-sm font-semibold text-[#f7f3ec] transition-colors hover:bg-brand-gold hover:text-brand-pine-dark"
              >
                Send Volume Estimate on WhatsApp →
              </a>
              <Link
                href="/guides/container-consolidation-house-finishing-ghana"
                className="flex w-full items-center justify-center rounded-[4px] border border-brand-pine-dark/20 bg-white px-5 py-3 text-sm font-semibold text-brand-pine-dark transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Read 40HQ Consolidation Guide
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
