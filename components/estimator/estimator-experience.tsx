"use client";

import { type FormEvent, useState } from "react";
import type { Locale } from "@/content/types";
import { trackEvent } from "@/lib/analytics/gtag";
import { readSubmissionError } from "@/lib/forms/submission-feedback";
import { formatPrice } from "@/lib/utils/format";
import type { CustomItems, EstimatorResult, FinishLevel, FunctionalZone, ServiceScope } from "@/types/estimator";

const functionalZoneOptions: Array<{ value: FunctionalZone; label: Record<Locale, string> }> = [
  { value: "livingRoom", label: { en: "Living room", zh: "客厅" } },
  { value: "dining", label: { en: "Dining", zh: "餐厅" } },
  { value: "familyArea", label: { en: "Family area", zh: "家庭活动区" } },
  { value: "study", label: { en: "Study", zh: "书房" } },
  { value: "kitchen", label: { en: "Kitchen", zh: "厨房" } },
  { value: "outdoorArea", label: { en: "Outdoor area", zh: "户外区域" } },
  { value: "entranceHall", label: { en: "Entrance hall", zh: "门厅" } }
];

const finishLevelLabels: Record<FinishLevel, Record<Locale, string>> = {
  standard: { en: "Standard", zh: "标准" },
  premium: { en: "Premium", zh: "高端" },
  luxury: { en: "Luxury", zh: "奢华" }
};

const serviceScopeLabels: Record<ServiceScope, Record<Locale, string>> = {
  product_only: { en: "Product only", zh: "仅产品" },
  product_design: { en: "Product + design", zh: "产品 + 设计" },
  measure_design_sourcing: { en: "Measurement + design + sourcing", zh: "测量 + 设计 + 采购" },
  full_support: { en: "Full support", zh: "全流程支持" }
};

const customItemLabels: Record<CustomItems, Record<Locale, string>> = {
  yes: { en: "Yes", zh: "是" },
  no: { en: "No", zh: "否" },
  not_sure: { en: "Not sure", zh: "暂不确定" }
};

const allocationLabels: Record<string, Record<Locale, string>> = {
  livingPublic: { en: "Living and public areas", zh: "公共与起居空间" },
  bedrooms: { en: "Bedrooms", zh: "卧室" },
  bathrooms: { en: "Bathrooms", zh: "卫浴" },
  kitchen: { en: "Kitchen", zh: "厨房" },
  doorsFinishesOther: { en: "Doors, finishes and other categories", zh: "门类、饰面与其他品类" }
};

const recommendationCopy: Record<Locale, string[]> = {
  en: [
    "Book a site measurement to verify dimensions before final specification.",
    "Request design support if you want the budget aligned to a premium visual target.",
    "Send drawings or BOQ for a more focused sourcing and execution plan.",
    "Continue the discussion on WhatsApp for faster coordination."
  ],
  zh: [
    "建议先预约现场测量，在最终定型前核对空间尺寸。",
    "如果希望预算与高端视觉目标更贴合，可进一步申请设计支持。",
    "欢迎发送图纸或 BOQ，便于我们整理更有针对性的采购与执行方案。",
    "也可以通过 WhatsApp 继续沟通，以便更快推进协调。"
  ]
};

const estimatorCopy: Record<
  Locale,
  {
    builtUpArea: string;
    projectLocation: string;
    bedrooms: string;
    bathrooms: string;
    finishLevel: string;
    serviceScope: string;
    customItems: string;
    timeline: string;
    functionalZones: string;
    showPreview: string;
    calculating: string;
    preliminaryEstimate: string;
    preliminaryNote: string;
    preliminaryEmpty: string;
    baseEstimate: string;
    zoneAddOns: string;
    unlockDetailedGuidance: string;
    name: string;
    company: string;
    whatsapp: string;
    email: string;
    notes: string;
    notesPlaceholder: string;
    revealResult: string;
    submitting: string;
    suggestedBudgetAllocation: string;
    bookMeasurement: string;
    requestDesign: string;
    sendDrawings: string;
    talkWhatsapp: string;
    ready: string;
    submittingLead: string;
    previewError: string;
    previewSuccess: string;
    previewFallback: string;
    leadSuccess: string;
    leadFallback: string;
  }
> = {
  en: {
    builtUpArea: "Built-up area (sqm)",
    projectLocation: "Project location",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    finishLevel: "Finish level",
    serviceScope: "Service scope",
    customItems: "Custom items",
    timeline: "Timeline",
    functionalZones: "Functional zones",
    showPreview: "Show preliminary estimate",
    calculating: "Calculating...",
    preliminaryEstimate: "Preliminary estimate",
    preliminaryNote: "This is a preliminary range only and should be refined after site measurement, design definition and scope confirmation.",
    preliminaryEmpty: "Enter your project details to generate a budget range, then unlock the suggested allocation guidance and next-step actions.",
    baseEstimate: "Base estimate",
    zoneAddOns: "Zone add-ons",
    unlockDetailedGuidance: "Unlock detailed guidance",
    name: "Name",
    company: "Company",
    whatsapp: "WhatsApp",
    email: "Email",
    notes: "Anything else we should know about the project?",
    notesPlaceholder: "Anything else we should know about the project?",
    revealResult: "Reveal detailed result",
    submitting: "Submitting...",
    suggestedBudgetAllocation: "Suggested budget allocation",
    bookMeasurement: "Book a Site Measurement",
    requestDesign: "Request Design Support",
    sendDrawings: "Send Drawings / BOQ",
    talkWhatsapp: "Talk on WhatsApp",
    ready: "Preliminary estimate ready.",
    submittingLead: "Submitting...",
    previewError: "Please review the highlighted fields and try again.",
    previewSuccess: "Preliminary estimate ready.",
    previewFallback: "We could not calculate the estimate right now. Please try again in a moment.",
    leadSuccess: "Detailed guidance unlocked.",
    leadFallback: "We could not submit your details right now. Please try again in a moment."
  },
  zh: {
    builtUpArea: "建筑面积（平方米）",
    projectLocation: "项目所在地",
    bedrooms: "卧室数量",
    bathrooms: "卫浴数量",
    finishLevel: "配置档次",
    serviceScope: "服务范围",
    customItems: "是否包含定制项",
    timeline: "项目时间计划",
    functionalZones: "功能区域",
    showPreview: "查看初步预算",
    calculating: "测算中...",
    preliminaryEstimate: "初步预算",
    preliminaryNote: "该结果仅供初步参考，仍需结合现场测量、设计深化和范围确认进一步校准。",
    preliminaryEmpty: "填写项目信息后即可生成预算区间，并解锁预算分配建议与下一步行动建议。",
    baseEstimate: "基础预算",
    zoneAddOns: "功能区附加项",
    unlockDetailedGuidance: "解锁详细建议",
    name: "姓名",
    company: "公司名称",
    whatsapp: "WhatsApp",
    email: "邮箱",
    notes: "还有哪些项目情况需要告诉我们？",
    notesPlaceholder: "还有哪些项目情况需要告诉我们？",
    revealResult: "查看详细结果",
    submitting: "提交中...",
    suggestedBudgetAllocation: "建议预算分配",
    bookMeasurement: "预约现场测量",
    requestDesign: "咨询设计支持",
    sendDrawings: "发送图纸 / BOQ",
    talkWhatsapp: "WhatsApp联系",
    ready: "初步预算已生成。",
    submittingLead: "提交中...",
    previewError: "请检查高亮字段后重新提交。",
    previewSuccess: "初步预算已生成。",
    previewFallback: "暂时无法完成预算测算，请稍后再试。",
    leadSuccess: "详细建议已解锁。",
    leadFallback: "暂时无法提交您的信息，请稍后再试。"
  }
};

type PreviewPayload = {
  projectType: "villa";
  builtUpArea: string;
  bedrooms: string;
  bathrooms: string;
  functionalZones: FunctionalZone[];
  finishLevel: FinishLevel;
  serviceScope: ServiceScope;
  customItems: CustomItems;
  projectLocation: string;
  timeline: string;
};

type LeadPayload = {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  notes: string;
};

const initialPreview: PreviewPayload = {
  projectType: "villa",
  builtUpArea: "450",
  bedrooms: "4",
  bathrooms: "5",
  functionalZones: ["livingRoom", "dining", "kitchen"],
  finishLevel: "premium",
  serviceScope: "measure_design_sourcing",
  customItems: "not_sure",
  projectLocation: "Accra, Ghana",
  timeline: "Within 6 months"
};

const initialLead: LeadPayload = {
  name: "",
  company: "",
  whatsapp: "",
  email: "",
  notes: ""
};

function deviceType() {
  if (typeof window === "undefined") {
    return "server";
  }

  if (window.innerWidth < 768) {
    return "mobile";
  }

  return "desktop";
}

type EstimatorExperienceProps = {
  locale: Locale;
};

export function EstimatorExperience({ locale }: EstimatorExperienceProps) {
  const copy = estimatorCopy[locale];
  const [previewForm, setPreviewForm] = useState(initialPreview);
  const [leadForm, setLeadForm] = useState(initialLead);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [leadErrors, setLeadErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [previewResult, setPreviewResult] = useState<EstimatorResult | null>(null);
  const [detailedResult, setDetailedResult] = useState<EstimatorResult | null>(null);

  function previewInputClass(name: string) {
    return `rounded-[1.15rem] border px-4 py-3 text-sm ${
      fieldErrors[name] ? "border-rose-300 bg-rose-50" : "border-brand-line bg-white"
    }`;
  }

  function leadInputClass(name: string) {
    return `rounded-[1.15rem] border px-4 py-3 text-sm ${
      leadErrors[name] ? "border-rose-300 bg-rose-50" : "border-brand-line bg-white"
    }`;
  }

  function updatePreview(name: keyof PreviewPayload, value: string | FunctionalZone[]) {
    setPreviewForm((current) => ({ ...current, [name]: value }));
  }

  function updateLead(name: keyof LeadPayload, value: string) {
    setLeadForm((current) => ({ ...current, [name]: value }));
  }

  function toggleZone(zone: FunctionalZone) {
    const exists = previewForm.functionalZones.includes(zone);
    updatePreview(
      "functionalZones",
      exists ? previewForm.functionalZones.filter((item) => item !== zone) : [...previewForm.functionalZones, zone]
    );
  }

  async function handlePreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoadingPreview(true);
    setFieldErrors({});
    setStatus(copy.calculating);

    try {
      const response = await fetch("/api/estimator/preview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...previewForm,
          builtUpArea: Number(previewForm.builtUpArea),
          bedrooms: Number(previewForm.bedrooms),
          bathrooms: Number(previewForm.bathrooms)
        })
      });

      if (!response.ok) {
        const error = await readSubmissionError(response, copy.previewError);
        setFieldErrors(error.fieldErrors);
        setStatus(error.message);
        return;
      }

      const payload = await response.json();
      setPreviewResult(payload.data);
      setDetailedResult(null);
      setStatus(copy.previewSuccess);
      trackEvent("estimator_step_1_complete", {
        page: "/",
        source_site: "decoropic",
        device_type: deviceType(),
        project_type: previewForm.projectType,
        finish_level: previewForm.finishLevel,
        service_scope: previewForm.serviceScope,
        project_location: previewForm.projectLocation
      });
      trackEvent("estimator_preview_shown", {
        page: "/",
        source_site: "decoropic",
        device_type: deviceType()
      });
    } catch {
      setStatus(copy.previewFallback);
    } finally {
      setIsLoadingPreview(false);
    }
  }

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmittingLead(true);
    setLeadErrors({});
    setStatus(copy.submittingLead);

    try {
      const response = await fetch("/api/estimator/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...previewForm,
          ...leadForm,
          builtUpArea: Number(previewForm.builtUpArea),
          bedrooms: Number(previewForm.bedrooms),
          bathrooms: Number(previewForm.bathrooms)
        })
      });

      if (!response.ok) {
        const error = await readSubmissionError(response, copy.previewError);
        setLeadErrors(error.fieldErrors);
        setStatus(error.message);
        return;
      }

      const payload = await response.json();
      setDetailedResult(payload.data.result);
      setStatus(copy.leadSuccess);
      trackEvent("estimator_step_2_complete", {
        page: "/",
        source_site: "decoropic",
        device_type: deviceType()
      });
      trackEvent("estimator_lead_submitted", {
        page: "/",
        source_site: "decoropic",
        device_type: deviceType(),
        project_type: previewForm.projectType,
        finish_level: previewForm.finishLevel,
        service_scope: previewForm.serviceScope,
        project_location: previewForm.projectLocation
      });
      trackEvent("estimator_detailed_result_shown", {
        page: "/",
        source_site: "decoropic",
        device_type: deviceType()
      });
    } catch {
      setStatus(copy.leadFallback);
    } finally {
      setIsSubmittingLead(false);
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
      <form onSubmit={handlePreview} className="card-surface p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            {copy.builtUpArea}
            <input
              value={previewForm.builtUpArea}
              onChange={(event) => updatePreview("builtUpArea", event.target.value)}
              className={previewInputClass("builtUpArea")}
              inputMode="numeric"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            {copy.projectLocation}
            <input
              value={previewForm.projectLocation}
              onChange={(event) => updatePreview("projectLocation", event.target.value)}
              className={previewInputClass("projectLocation")}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            {copy.bedrooms}
            <input
              value={previewForm.bedrooms}
              onChange={(event) => updatePreview("bedrooms", event.target.value)}
              className={previewInputClass("bedrooms")}
              inputMode="numeric"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            {copy.bathrooms}
            <input
              value={previewForm.bathrooms}
              onChange={(event) => updatePreview("bathrooms", event.target.value)}
              className={previewInputClass("bathrooms")}
              inputMode="numeric"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            {copy.finishLevel}
            <select
              value={previewForm.finishLevel}
              onChange={(event) => updatePreview("finishLevel", event.target.value as FinishLevel)}
              className={previewInputClass("finishLevel")}
            >
              <option value="standard">{finishLevelLabels.standard[locale]}</option>
              <option value="premium">{finishLevelLabels.premium[locale]}</option>
              <option value="luxury">{finishLevelLabels.luxury[locale]}</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            {copy.serviceScope}
            <select
              value={previewForm.serviceScope}
              onChange={(event) => updatePreview("serviceScope", event.target.value as ServiceScope)}
              className={previewInputClass("serviceScope")}
            >
              <option value="product_only">{serviceScopeLabels.product_only[locale]}</option>
              <option value="product_design">{serviceScopeLabels.product_design[locale]}</option>
              <option value="measure_design_sourcing">{serviceScopeLabels.measure_design_sourcing[locale]}</option>
              <option value="full_support">{serviceScopeLabels.full_support[locale]}</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            {copy.customItems}
            <select
              value={previewForm.customItems}
              onChange={(event) => updatePreview("customItems", event.target.value as CustomItems)}
              className={previewInputClass("customItems")}
            >
              <option value="yes">{customItemLabels.yes[locale]}</option>
              <option value="no">{customItemLabels.no[locale]}</option>
              <option value="not_sure">{customItemLabels.not_sure[locale]}</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            {copy.timeline}
            <input
              value={previewForm.timeline}
              onChange={(event) => updatePreview("timeline", event.target.value)}
              className={previewInputClass("timeline")}
            />
          </label>
        </div>
        <div className="mt-5">
          <p className="text-sm font-medium text-brand-ink">{copy.functionalZones}</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {functionalZoneOptions.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 rounded-[1.1rem] border px-4 py-3 text-sm ${
                  previewForm.functionalZones.includes(option.value)
                    ? "border-brand-pine bg-brand-mist/60 text-brand-ink"
                    : "border-brand-line bg-white text-slate-600"
                }`}
              >
                <input
                  type="checkbox"
                  checked={previewForm.functionalZones.includes(option.value)}
                  onChange={() => toggleZone(option.value)}
                />
                {option.label[locale]}
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoadingPreview}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-pine px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoadingPreview ? copy.calculating : copy.showPreview}
        </button>
      </form>

      <div className="grid gap-6">
        <div className="card-surface bg-brand-ink p-6 text-white sm:p-8">
          <p className="eyebrow-label text-brand-gold/90">{copy.preliminaryEstimate}</p>
          {previewResult ? (
            <>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                {formatPrice(previewResult.minEstimate, previewResult.currency)} - {formatPrice(previewResult.maxEstimate, previewResult.currency)}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/74">
                {copy.preliminaryNote}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/12 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/58">{copy.baseEstimate}</p>
                  <p className="mt-2 text-lg font-semibold">{formatPrice(previewResult.baseEstimate, previewResult.currency)}</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/12 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/58">{copy.zoneAddOns}</p>
                  <p className="mt-2 text-lg font-semibold">{formatPrice(previewResult.zoneAddOnsTotal, previewResult.currency)}</p>
                </div>
              </div>
            </>
          ) : (
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/74">
              {copy.preliminaryEmpty}
            </p>
          )}
        </div>

        <form onSubmit={handleLeadSubmit} className="card-surface p-6 sm:p-8">
          <p className="eyebrow-label">{copy.unlockDetailedGuidance}</p>
          <div className="mt-5 grid gap-4">
            <input
              value={leadForm.name}
              onChange={(event) => updateLead("name", event.target.value)}
              placeholder={copy.name}
              className={leadInputClass("name")}
              disabled={!previewResult}
            />
            <input
              value={leadForm.company}
              onChange={(event) => updateLead("company", event.target.value)}
              placeholder={copy.company}
              className={leadInputClass("company")}
              disabled={!previewResult}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                value={leadForm.whatsapp}
                onChange={(event) => updateLead("whatsapp", event.target.value)}
                placeholder={copy.whatsapp}
                className={leadInputClass("whatsapp")}
                disabled={!previewResult}
              />
              <input
                value={leadForm.email}
                onChange={(event) => updateLead("email", event.target.value)}
                type="email"
                placeholder={copy.email}
                className={leadInputClass("email")}
                disabled={!previewResult}
              />
            </div>
            <textarea
              value={leadForm.notes}
              onChange={(event) => updateLead("notes", event.target.value)}
              rows={4}
              placeholder={copy.notesPlaceholder}
              className={leadInputClass("notes")}
              disabled={!previewResult}
            />
          </div>
          <button
            type="submit"
            disabled={!previewResult || isSubmittingLead}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-ink disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmittingLead ? copy.submitting : copy.revealResult}
          </button>

          {detailedResult ? (
            <div className="mt-6 rounded-[1.4rem] bg-brand-mist/45 p-5">
              <p className="text-sm font-semibold text-brand-ink">{copy.suggestedBudgetAllocation}</p>
              <div className="mt-4 grid gap-3">
                {detailedResult.allocations.map((allocation) => (
                  <div key={allocation.key} className="flex items-center justify-between gap-4 rounded-[1rem] bg-white px-4 py-3 text-sm">
                    <span>{allocationLabels[allocation.key]?.[locale] ?? allocation.label}</span>
                    <span className="font-semibold">{formatPrice(allocation.amount, detailedResult.currency)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3">
                {detailedResult.recommendations.map((item, index) => (
                  <div key={item} className="rounded-[1rem] border border-brand-line bg-white px-4 py-3 text-sm text-slate-600">
                    {recommendationCopy[locale][index] ?? item}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="rounded-full bg-brand-pine px-4 py-2 text-sm font-semibold text-white"
                  onClick={() => trackEvent("estimator_cta_measurement_clicked", { page: "/", source_site: "decoropic" })}
                >
                  {copy.bookMeasurement}
                </a>
                <a
                  href="/contact"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-ink ring-1 ring-brand-line"
                  onClick={() => trackEvent("estimator_cta_design_clicked", { page: "/", source_site: "decoropic" })}
                >
                  {copy.requestDesign}
                </a>
                <a
                  href="/contact"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-ink ring-1 ring-brand-line"
                  onClick={() => trackEvent("estimator_cta_drawings_clicked", { page: "/", source_site: "decoropic" })}
                >
                  {copy.sendDrawings}
                </a>
                <a
                  href="/contact"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-ink ring-1 ring-brand-line"
                  onClick={() => trackEvent("estimator_cta_whatsapp_clicked", { page: "/", source_site: "decoropic" })}
                >
                  {copy.talkWhatsapp}
                </a>
              </div>
            </div>
          ) : null}

          {status ? (
            <p className={`mt-4 text-sm ${Object.keys(fieldErrors).length || Object.keys(leadErrors).length ? "text-rose-700" : "text-slate-600"}`}>
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
