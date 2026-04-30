"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronRight,
  Check,
  Volume2,
  VolumeX,
  Loader2,
  X,
  Home as HomeIcon,
  Building,
  Building2,
  Briefcase,
  Sparkles,
  Crown,
  Square,
  Palmtree
} from "lucide-react";
import type { Locale } from "@/content/types";
import { homeContent } from "@/content/home";
import { t } from "@/lib/i18n/content";
import { trackEvent } from "@/lib/analytics/gtag";
import { readSubmissionError } from "@/lib/forms/submission-feedback";
import { formatPrice } from "@/lib/utils/format";
import { InquirySuccess } from "@/components/forms/inquiry-success";
import type {
  EstimatorResult,
  FunctionalZone,
  FinishLevel,
  ServiceScope,
  CustomItems
} from "@/types/estimator";

type Props = {
  locale: Locale;
};

type Step =
  | "intro"
  | "q1" | "q2"
  | "q3" | "q3_reward"
  | "q4" | "q5" | "q6"
  | "q7" | "q7_reward"
  | "q8"
  | "q9" | "q9_reward"
  | "q10"
  | "q11" | "q11_reward"
  | "loading" | "reveal" | "contact" | "submitting" | "thank_you";

type ProjectType = "villa" | "apartment" | "hotel" | "office";
type LocationKey = "accra" | "kumasi" | "takoradi" | "other";
type StyleKey = "modern_luxury" | "classic_european" | "contemporary" | "tropical";
type InvestmentKey = "under_10k" | "10_30k" | "30_50k" | "50_100k" | "100_300k" | "over_300k";

type FormState = {
  projectType: ProjectType | null;
  areaRange: string | null;
  location: LocationKey | null;
  bedrooms: number | null;
  bathrooms: number | null;
  functionalZones: FunctionalZone[];
  style: StyleKey | null;
  finishLevel: FinishLevel | null;
  serviceScope: ServiceScope | null;
  timeline: string | null;
  investmentRange: InvestmentKey | null;
  name: string;
  email: string;
  whatsapp: string;
  notes: string;
};

const initialState: FormState = {
  projectType: null,
  areaRange: null,
  location: null,
  bedrooms: null,
  bathrooms: null,
  functionalZones: [],
  style: null,
  finishLevel: null,
  serviceScope: null,
  timeline: null,
  investmentRange: null,
  name: "",
  email: "",
  whatsapp: "",
  notes: ""
};

const areaMedian: Record<string, number> = {
  under_200: 150,
  "200_400": 300,
  "400_700": 550,
  "700_1200": 950,
  "1200_plus": 1500
};

const locationLabel: Record<LocationKey, string> = {
  accra: "Accra (Greater Accra)",
  kumasi: "Kumasi",
  takoradi: "Takoradi / Sekondi",
  other: "Other Ghana location"
};

const styleLabel: Record<StyleKey, string> = {
  modern_luxury: "Modern Luxury",
  classic_european: "Classic European",
  contemporary: "Contemporary Minimalist",
  tropical: "Tropical Resort"
};

const investmentLabel: Record<InvestmentKey, string> = {
  under_10k: "Under $10K USD",
  "10_30k": "$10K – $30K USD",
  "30_50k": "$30K – $50K USD",
  "50_100k": "$50K – $100K USD",
  "100_300k": "$100K – $300K USD",
  over_300k: "Over $300K USD"
};

const rewards: Record<string, Record<string, string>> = {
  q3: {
    accra: "Home turf — twenty years on the ground.",
    kumasi: "Logistics handled, no learning curve.",
    takoradi: "Coastal projects bring their own dimensions. We know.",
    other: "Wherever your project is, we've been close."
  },
  q7: {
    modern_luxury: "Modern luxury in Ghana — only a few studios deliver this.",
    classic_european: "Classic craft for African residences — we have suppliers built for this.",
    contemporary: "Restraint that reads expensive. Hardest style to do well.",
    tropical: "Tropical luxury — designed for Ghana's climate, not against it."
  },
  q9: {
    product_only: "Sourcing precision is our core craft.",
    product_design: "Design-led sourcing — where most of our value lives.",
    measure_design_sourcing: "The sweet spot — coordinated delivery without overhead.",
    full_support: "Full delivery — where we're hardest to replicate."
  },
  q11: {
    under_10k: "Compact and considered — every detail will count.",
    "10_30k": "A focused project — let's make every dollar visible.",
    "30_50k": "The smart middle — where careful sourcing pays back.",
    "50_100k": "Premium scale — our most active band.",
    "100_300k": "Where our craft pays back the most — villa-tier work.",
    over_300k: "Estate-level investment. We design at this tier with full care."
  }
};

function useChime() {
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      ctxRef.current?.close();
      ctxRef.current = null;
    };
  }, []);

  const initContext = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!ctxRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (Ctor) ctxRef.current = new Ctor();
    }
  }, []);

  const playChime = useCallback(() => {
    if (!ctxRef.current) return;
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const frequencies = [880, 1108, 1318];
    const startTime = ctx.currentTime;
    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const t0 = startTime + i * 0.06;
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.12, t0 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.35);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.4);
    });
  }, []);

  return { initContext, playChime };
}

// 生成已答钩位的可读摘要（mid-flow exit 弹窗用）
function summarizeAnswered(form: FormState): string[] {
  const lines: string[] = [];
  if (form.projectType) {
    const pt: Record<ProjectType, string> = {
      villa: "Villa / Detached home",
      apartment: "Apartment / Unit",
      hotel: "Hotel / Hospitality",
      office: "Office / Commercial"
    };
    lines.push(pt[form.projectType]);
  }
  if (form.areaRange) {
    const ar: Record<string, string> = {
      under_200: "Under 200 sqm",
      "200_400": "200 – 400 sqm",
      "400_700": "400 – 700 sqm",
      "700_1200": "700 – 1,200 sqm",
      "1200_plus": "1,200+ sqm"
    };
    lines.push(ar[form.areaRange] ?? form.areaRange);
  }
  if (form.location) lines.push(locationLabel[form.location]);
  if (form.bedrooms != null) lines.push(`${form.bedrooms} bedroom${form.bedrooms > 1 ? "s" : ""}`);
  if (form.bathrooms != null) lines.push(`${form.bathrooms} bathroom${form.bathrooms > 1 ? "s" : ""}`);
  if (form.functionalZones.length > 0) {
    lines.push(`${form.functionalZones.length} functional zone${form.functionalZones.length > 1 ? "s" : ""}`);
  }
  if (form.style) lines.push(styleLabel[form.style]);
  if (form.finishLevel) lines.push(`${form.finishLevel} finish`);
  if (form.serviceScope) {
    const ss: Record<ServiceScope, string> = {
      product_only: "Product only",
      product_design: "Product + Design",
      measure_design_sourcing: "Measurement + Design + Sourcing",
      full_support: "Full Support"
    };
    lines.push(ss[form.serviceScope]);
  }
  if (form.timeline) lines.push(form.timeline);
  return lines;
}

export function HomeEstimatorHook({ locale }: Props) {
  const [step, setStep] = useState<Step>("intro");
  const [form, setForm] = useState<FormState>(initialState);
  const [result, setResult] = useState<EstimatorResult | null>(null);
  const [soundOn, setSoundOn] = useState(true);
  const [submitError, setSubmitError] = useState("");
  // Mid-flow exit state (Battle 3 tweak 2)
  const [helpOpen, setHelpOpen] = useState(false);
  const [exitedAtStep, setExitedAtStep] = useState<Step | null>(null);

  const { initContext, playChime } = useChime();

  // ESC 关闭 help modal (Battle 3 tweak 2)
  useEffect(() => {
    if (!helpOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHelpOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [helpOpen]);

  const stepIndex: Record<string, number> = {
    intro: 0,
    q1: 1, q2: 2, q3: 3, q3_reward: 3,
    q4: 4, q5: 5, q6: 6, q7: 7, q7_reward: 7,
    q8: 8, q9: 9, q9_reward: 9,
    q10: 10, q11: 11, q11_reward: 11,
    loading: 11, reveal: 11, contact: 11, submitting: 11, thank_you: 11
  };
  const progress = stepIndex[step] ?? 0;

  const advanceTo = useCallback(
    (nextStep: Step) => {
      if (
        soundOn &&
        (nextStep === "q3_reward" || nextStep === "q7_reward" || nextStep === "q9_reward" || nextStep === "q11_reward")
      ) {
        playChime();
      }
      setStep(nextStep);
    },
    [soundOn, playChime]
  );

  const toggleSound = () => setSoundOn((s) => !s);

  const c = homeContent.estimator as typeof homeContent.estimator & {
    hookIntro: { en: string; zh: string };
    revealLabel: { en: string; zh: string };
    contactTitle: { en: string; zh: string };
    contactSubtitle: { en: string; zh: string };
    contactBullets: Array<{ en: string; zh: string }>;
    contactPrincipal: { en: string; zh: string };
    contactDisclaimer: { en: string; zh: string };
    submitLabel: { en: string; zh: string };
    thankYouTitle: { en: string; zh: string };
    thankYouBody: { en: string; zh: string };
  };

  const handleQ1 = (val: ProjectType) => {
    initContext();
    setForm((f) => ({ ...f, projectType: val }));
    setTimeout(() => advanceTo("q2"), 250);
  };
  const handleQ2 = (val: string) => {
    setForm((f) => ({ ...f, areaRange: val }));
    setTimeout(() => advanceTo("q3"), 250);
  };
  const handleQ3 = (val: LocationKey) => {
    setForm((f) => ({ ...f, location: val }));
    setTimeout(() => advanceTo("q3_reward"), 250);
    setTimeout(() => advanceTo("q4"), 1750);
  };
  const handleQ4 = (val: number) => {
    setForm((f) => ({ ...f, bedrooms: val }));
    setTimeout(() => advanceTo("q5"), 250);
  };
  const handleQ5 = (val: number) => {
    setForm((f) => ({ ...f, bathrooms: val }));
    setTimeout(() => advanceTo("q6"), 250);
  };
  const toggleZone = (zone: FunctionalZone) => {
    setForm((f) => ({
      ...f,
      functionalZones: f.functionalZones.includes(zone)
        ? f.functionalZones.filter((z) => z !== zone)
        : [...f.functionalZones, zone]
    }));
  };
  const handleQ6Continue = () => {
    if (form.functionalZones.length === 0) return;
    advanceTo("q7");
  };
  const handleQ7 = (val: StyleKey) => {
    setForm((f) => ({ ...f, style: val }));
    setTimeout(() => advanceTo("q7_reward"), 250);
    setTimeout(() => advanceTo("q8"), 1750);
  };
  const handleQ8 = (val: FinishLevel) => {
    setForm((f) => ({ ...f, finishLevel: val }));
    setTimeout(() => advanceTo("q9"), 250);
  };
  const handleQ9 = (val: ServiceScope) => {
    setForm((f) => ({ ...f, serviceScope: val }));
    setTimeout(() => advanceTo("q9_reward"), 250);
    setTimeout(() => advanceTo("q10"), 1750);
  };
  const handleQ10 = (val: string) => {
    setForm((f) => ({ ...f, timeline: val }));
    setTimeout(() => advanceTo("q11"), 250);
  };
  const handleQ11 = (val: InvestmentKey) => {
    const newForm = { ...form, investmentRange: val };
    setForm(newForm);
    setTimeout(() => advanceTo("q11_reward"), 250);
    setTimeout(() => advanceTo("loading"), 1750);
    setTimeout(() => fetchPreview(newForm), 2000);
  };

  const fetchPreview = async (state: FormState) => {
    try {
      const payload = {
        projectType: "villa" as const,
        builtUpArea: areaMedian[state.areaRange ?? "400_700"] ?? 550,
        bedrooms: state.bedrooms ?? 4,
        bathrooms: state.bathrooms ?? 3,
        functionalZones: state.functionalZones,
        finishLevel: state.finishLevel ?? "premium",
        serviceScope: state.serviceScope ?? "measure_design_sourcing",
        customItems: "not_sure" as CustomItems,
        projectLocation: state.location ? locationLabel[state.location] : "Accra",
        timeline: state.timeline ?? "Within 6 months"
      };

      const res = await fetch("/api/estimator/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("preview failed");
      const data = await res.json();
      setResult(data.data);
      setStep("reveal");
      trackEvent("estimator_hook_reveal", { source_site: "decoropic" });
    } catch {
      setResult({
        currency: "USD",
        baseEstimate: 0,
        zoneAddOnsTotal: 0,
        minEstimate: 200000,
        maxEstimate: 500000,
        midpointEstimate: 350000,
        allocations: [],
        recommendations: []
      });
      setStep("reveal");
    }
  };

  const handleContactSubmit = async () => {
    if (!form.name || !form.email || !form.whatsapp) {
      setSubmitError("Please fill in name, email, and WhatsApp.");
      return;
    }
    setSubmitError("");
    setStep("submitting");

    try {
      const styleStr = form.style ? styleLabel[form.style] : "—";
      const investStr = form.investmentRange ? investmentLabel[form.investmentRange] : "—";
      const exitMarker = exitedAtStep ? ` [Mid-flow exit at ${exitedAtStep}]` : "";
      const enrichedNotes =
        `[Hook Estimator${exitMarker}] Style: ${styleStr} | Investment: ${investStr}\n\n` +
        (form.notes || "");

      const payload = {
        projectType: "villa" as const,
        builtUpArea: areaMedian[form.areaRange ?? "400_700"] ?? 550,
        bedrooms: form.bedrooms ?? 4,
        bathrooms: form.bathrooms ?? 3,
        functionalZones: form.functionalZones,
        finishLevel: form.finishLevel ?? "premium",
        serviceScope: form.serviceScope ?? "measure_design_sourcing",
        customItems: "not_sure" as CustomItems,
        projectLocation: form.location ? locationLabel[form.location] : "Accra",
        timeline: form.timeline ?? "Within 6 months",
        name: form.name,
        company: "",
        whatsapp: form.whatsapp,
        email: form.email,
        notes: enrichedNotes
      };

      const res = await fetch("/api/estimator/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const error = await readSubmissionError(res, "Submission failed.");
        setSubmitError(error.message);
        setStep("contact");
        return;
      }
      trackEvent("estimator_hook_lead_submitted", {
        source_site: "decoropic",
        style: styleStr,
        investment: investStr
      });
      setStep("thank_you");
    } catch {
      setSubmitError("Network error. Please try again.");
      setStep("contact");
    }
  };

  const choiceBtnClass =
    "group relative flex w-full items-center justify-between rounded-2xl border border-brand-pine-dark/15 bg-white/60 px-6 py-5 text-left transition-all hover:border-brand-gold hover:bg-white";

  const ProgressBar = () => (
    <div className="mb-12 flex items-center gap-2">
      {Array.from({ length: 11 }).map((_, i) => (
        <span
          key={i}
          className={`h-[3px] flex-1 rounded-full ${
            i < progress ? "bg-brand-gold" : "bg-brand-pine-dark/15"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div
      className="relative min-h-[680px] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden border"
      style={{
        background: "#f7f3ec",
        borderColor: "rgba(174, 146, 96, 0.25)"
      }}
    >
      {/* Top-right control cluster (Battle 3 tweak 2) */}
      {step !== "intro" && step !== "thank_you" && step !== "loading" && (
        <div className="absolute right-6 top-6 z-10 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setHelpOpen(true)}
            className="text-xs text-brand-pine-dark/50 hover:text-brand-gold transition-colors underline-offset-2 hover:underline"
            aria-label="Need help with the form"
          >
            Need help?
          </button>
          <button
            type="button"
            onClick={toggleSound}
            className="text-brand-pine-dark/50 hover:text-brand-gold transition-colors"
            aria-label={soundOn ? "Mute sound" : "Unmute sound"}
          >
            {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>
      )}
      {(step === "intro" || step === "thank_you" || step === "loading") && (
        <button
          type="button"
          onClick={toggleSound}
          className="absolute right-6 top-6 text-brand-pine-dark/50 hover:text-brand-gold transition-colors"
          aria-label={soundOn ? "Mute sound" : "Unmute sound"}
        >
          {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      )}

      {/* Help modal — Mid-flow exit (Battle 3 tweak 2) */}
      {helpOpen && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-brand-pine-dark/40 backdrop-blur-sm p-6"
          onClick={() => setHelpOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-md w-full rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setHelpOpen(false)}
              className="absolute right-4 top-4 text-brand-pine-dark/40 hover:text-brand-pine-dark transition-colors"
              aria-label="Close help dialog"
            >
              <X size={18} />
            </button>
            <h4
              className="text-brand-pine-dark mb-3 pr-8"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1.5rem",
                fontWeight: 700,
                lineHeight: 1.2
              }}
            >
              Stuck on something?
            </h4>
            <p className="text-brand-pine-dark/70 text-sm leading-6 mb-5">
              Send our team what you've shared so far — we'll continue from there. Or finish the
              flow to see your project's preliminary budget.
            </p>
            {summarizeAnswered(form).length > 0 && (
              <div className="rounded-2xl bg-[#f7f3ec] p-4 mb-6 space-y-1">
                {summarizeAnswered(form).map((line, i) => (
                  <p key={i} className="text-xs text-brand-pine-dark/80 leading-5">
                    ✓ {line}
                  </p>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setHelpOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-pine-dark px-6 py-3 text-white text-sm hover:bg-brand-pine-dark/90 transition-colors"
              >
                Stay and finish 11 steps
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setExitedAtStep(step);
                  setHelpOpen(false);
                  setStep("contact");
                }}
                className="text-xs text-brand-pine-dark/50 hover:text-brand-pine-dark transition-colors py-2 underline underline-offset-2"
              >
                Continue with email instead
              </button>
            </div>
          </div>
        </div>
      )}

      {step !== "intro" && step !== "thank_you" && <ProgressBar />}

      {step === "intro" && (
        <div className="mx-auto max-w-2xl py-12 text-center">
          <p className="text-brand-gold mb-6" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
            ✦ Eleven steps
          </p>
          <h3 className="text-brand-pine-dark mb-8" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
            {t(c.hookIntro, locale)}
          </h3>
          <button
            type="button"
            onClick={() => { initContext(); advanceTo("q1"); }}
            className="inline-flex items-center gap-3 rounded-full bg-brand-pine-dark px-10 py-4 text-white hover:bg-brand-pine-dark/90 transition-colors"
          >
            <span>Begin</span>
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {step === "q1" && (
        <QuestionShell title="What kind of project?">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {([
              { v: "villa" as const, label: "Villa / Detached home", Icon: HomeIcon },
              { v: "apartment" as const, label: "Apartment / Unit", Icon: Building },
              { v: "hotel" as const, label: "Hotel / Hospitality", Icon: Building2 },
              { v: "office" as const, label: "Office / Commercial", Icon: Briefcase }
            ]).map((opt) => (
              <button key={opt.v} type="button" onClick={() => handleQ1(opt.v)} className={choiceBtnClass}>
                <span className="flex items-center gap-4">
                  <opt.Icon size={22} className="text-brand-gold" strokeWidth={1.5} />
                  <span className="text-brand-pine-dark">{opt.label}</span>
                </span>
                <ChevronRight size={18} className="text-brand-pine-dark/40 group-hover:text-brand-gold" />
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q2" && (
        <QuestionShell title="What's the scale?">
          <div className="grid grid-cols-1 gap-3">
            {[
              ["under_200", "Under 200 sqm"],
              ["200_400", "200 – 400 sqm"],
              ["400_700", "400 – 700 sqm"],
              ["700_1200", "700 – 1,200 sqm"],
              ["1200_plus", "1,200+ sqm"]
            ].map(([v, label]) => (
              <button key={v} type="button" onClick={() => handleQ2(v)} className={choiceBtnClass}>
                <span className="text-brand-pine-dark">{label}</span>
                <ChevronRight size={18} className="text-brand-pine-dark/40 group-hover:text-brand-gold" />
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q3" && (
        <QuestionShell title="Where in Ghana?">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {(Object.keys(locationLabel) as LocationKey[]).map((k) => (
              <button key={k} type="button" onClick={() => handleQ3(k)} className={choiceBtnClass}>
                <span className="text-brand-pine-dark">{locationLabel[k]}</span>
                <ChevronRight size={18} className="text-brand-pine-dark/40 group-hover:text-brand-gold" />
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q3_reward" && form.location && <RewardScreen text={rewards.q3[form.location]} badgeKey="foundation" locale={locale} />}

      {step === "q4" && (
        <QuestionShell title="How many bedrooms?">
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleQ4(n)}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-pine-dark/20 bg-white text-brand-pine-dark hover:border-brand-gold hover:bg-brand-gold hover:text-white transition-all"
                style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 700 }}
              >
                {n === 6 ? "6+" : n}
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q5" && (
        <QuestionShell title="How many bathrooms?">
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleQ5(n)}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-pine-dark/20 bg-white text-brand-pine-dark hover:border-brand-gold hover:bg-brand-gold hover:text-white transition-all"
                style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 700 }}
              >
                {n === 5 ? "5+" : n}
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q6" && (
        <QuestionShell title="Which spaces matter most?" subtitle="Select all that apply">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {([
              ["livingRoom", "Living room"],
              ["dining", "Dining"],
              ["familyArea", "Family area"],
              ["study", "Study"],
              ["kitchen", "Kitchen"],
              ["outdoorArea", "Outdoor area"],
              ["entranceHall", "Entrance hall"]
            ] as const).map(([v, label]) => {
              const selected = form.functionalZones.includes(v);
              return (
                <button
                  key={v}
                  type="button"
                  onClick={() => toggleZone(v)}
                  className={`group relative flex w-full items-center justify-between rounded-2xl border px-6 py-5 text-left transition-all ${
                    selected ? "border-brand-gold bg-brand-gold/10" : "border-brand-pine-dark/15 bg-white/60 hover:border-brand-gold"
                  }`}
                >
                  <span className="text-brand-pine-dark">{label}</span>
                  {selected && <Check size={18} className="text-brand-gold" />}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={handleQ6Continue}
            disabled={form.functionalZones.length === 0}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-pine-dark px-10 py-4 text-white hover:bg-brand-pine-dark/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span>Continue</span>
            <ChevronRight size={18} />
          </button>
        </QuestionShell>
      )}

      {step === "q7" && (
        <QuestionShell title="What style speaks to you?">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {([
              { v: "modern_luxury" as const, label: "Modern Luxury", Icon: Sparkles },
              { v: "classic_european" as const, label: "Classic European", Icon: Crown },
              { v: "contemporary" as const, label: "Contemporary Minimalist", Icon: Square },
              { v: "tropical" as const, label: "Tropical Resort", Icon: Palmtree }
            ]).map((opt) => (
              <button key={opt.v} type="button" onClick={() => handleQ7(opt.v)} className={choiceBtnClass}>
                <span className="flex items-center gap-4">
                  <opt.Icon size={22} className="text-brand-gold" strokeWidth={1.5} />
                  <span className="text-brand-pine-dark">{opt.label}</span>
                </span>
                <ChevronRight size={18} className="text-brand-pine-dark/40 group-hover:text-brand-gold" />
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q7_reward" && form.style && <RewardScreen text={rewards.q7[form.style]} badgeKey="style" locale={locale} />}

      {step === "q8" && (
        <QuestionShell title="What level of finish?">
          <div className="grid grid-cols-1 gap-3">
            {([
              ["standard", "Standard", "Refined essentials, clean execution"],
              ["premium", "Premium", "Our signature range — most of our work"],
              ["luxury", "Luxury", "No-compromise craft, bespoke details"]
            ] as const).map(([v, label, desc]) => (
              <button key={v} type="button" onClick={() => handleQ8(v)} className={choiceBtnClass}>
                <span>
                  <span className="block text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.125rem", fontWeight: 700 }}>{label}</span>
                  <span className="mt-1 block text-sm text-brand-pine-dark/60">{desc}</span>
                </span>
                <ChevronRight size={18} className="text-brand-pine-dark/40 group-hover:text-brand-gold" />
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q9" && (
        <QuestionShell title="How would you like us to support?">
          <div className="grid grid-cols-1 gap-3">
            {([
              ["product_only", "Product only", "Sourcing & logistics"],
              ["product_design", "Product + Design", "Adding design guidance"],
              ["measure_design_sourcing", "Measurement + Design + Sourcing", "Coordinated delivery"],
              ["full_support", "Full Support", "Site execution included"]
            ] as const).map(([v, label, desc]) => (
              <button key={v} type="button" onClick={() => handleQ9(v)} className={choiceBtnClass}>
                <span>
                  <span className="block text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.125rem", fontWeight: 700 }}>{label}</span>
                  <span className="mt-1 block text-sm text-brand-pine-dark/60">{desc}</span>
                </span>
                <ChevronRight size={18} className="text-brand-pine-dark/40 group-hover:text-brand-gold" />
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q9_reward" && form.serviceScope && <RewardScreen text={rewards.q9[form.serviceScope]} badgeKey="method" locale={locale} />}

      {step === "q10" && (
        <QuestionShell title="When do you need it ready?">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              ["Within 3 months", "Within 3 months", "Express"],
              ["3-6 months", "3 – 6 months", "Standard"],
              ["6-12 months", "6 – 12 months", "Considered"],
              ["Flexible", "Flexible", "Best craft"]
            ].map(([v, label, hint]) => (
              <button key={v} type="button" onClick={() => handleQ10(v)} className={choiceBtnClass}>
                <span>
                  <span className="block text-brand-pine-dark">{label}</span>
                  <span className="mt-1 block text-xs text-brand-pine-dark/50">{hint}</span>
                </span>
                <ChevronRight size={18} className="text-brand-pine-dark/40 group-hover:text-brand-gold" />
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q11" && (
        <QuestionShell title="What investment range feels right for a project of this scale?" subtitle="Just an early sense — we'll shape something within your priorities.">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {(Object.keys(investmentLabel) as InvestmentKey[]).map((k) => (
              <button key={k} type="button" onClick={() => handleQ11(k)} className={choiceBtnClass}>
                <span className="text-brand-pine-dark" style={{ fontFamily: "var(--serif)", fontSize: "1.0625rem", fontWeight: 600 }}>
                  {investmentLabel[k]}
                </span>
                <ChevronRight size={18} className="text-brand-pine-dark/40 group-hover:text-brand-gold" />
              </button>
            ))}
          </div>
        </QuestionShell>
      )}

      {step === "q11_reward" && form.investmentRange && <RewardScreen text={rewards.q11[form.investmentRange]} badgeKey="readiness" locale={locale} />}

      {step === "loading" && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Loader2 size={32} className="text-brand-gold animate-spin mb-6" />
          <p className="text-brand-pine-dark/70" style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontStyle: "italic" }}>
            Shaping your estimate...
          </p>
          <div className="mt-6 space-y-2 text-sm text-brand-pine-dark/50">
            <p>✦ Cross-referencing 26 years of international trade</p>
            <p>✦ Mapping against 20 years of Ghana execution</p>
            <p>✦ Aligning your scale, style, and timeline</p>
          </div>
        </div>
      )}

      {step === "reveal" && result && (
        <div className="py-8">
          <p className="text-brand-gold mb-6" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
            ━━ Your project's preliminary range
          </p>
          <h3 className="text-brand-pine-dark mb-8" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1 }}>
            {formatPrice(result.minEstimate, result.currency)} — {formatPrice(result.maxEstimate, result.currency)}
          </h3>
          <div className="my-10 h-px w-20 bg-brand-gold" />
          <p className="text-brand-pine-dark/70 mb-2">For:</p>
          <ul className="space-y-1 text-brand-pine-dark/85 leading-7">
            <li>{areaMedian[form.areaRange ?? "400_700"]} sqm villa-scale project</li>
            <li>in {form.location ? locationLabel[form.location] : "Ghana"}</li>
            <li>{form.bedrooms} bedrooms / {form.bathrooms} bathrooms</li>
            <li>{form.style ? styleLabel[form.style] : ""}, {form.finishLevel} finishes</li>
            <li>{form.timeline ?? ""} delivery</li>
          </ul>
          <button
            type="button"
            onClick={() => setStep("contact")}
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-brand-pine-dark px-10 py-4 text-white hover:bg-brand-pine-dark/90 transition-colors"
          >
            <span>{t(c.revealLabel, locale)}</span>
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {(step === "contact" || step === "submitting") && (
        <div className="-m-8 sm:-m-12 lg:-m-16 rounded-3xl bg-brand-pine-dark p-8 sm:p-12 lg:p-16 text-white">
          {exitedAtStep && (
            <div className="mb-6 rounded-2xl border border-brand-gold/30 bg-brand-gold/10 p-4">
              <p className="text-brand-gold text-sm leading-6">
                ✦ We'll send our team what you've shared. Just need your contact.
              </p>
            </div>
          )}
          <p className="text-brand-gold mb-6" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase" }}>
            ━━ Final
          </p>
          <h3 className="text-white mb-4" style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.05 }}>
            {t(c.contactTitle, locale)}
          </h3>
          <p className="text-white/85 mb-8" style={{ fontSize: "1.125rem", lineHeight: 1.5 }}>{t(c.contactSubtitle, locale)}</p>
          <p className="text-white/70 mb-3">{t(c.contactPrincipal, locale)}</p>
          <ul className="space-y-2 mb-10 text-white/80">
            {c.contactBullets.map((b, i) => <li key={i}>✦ {t(b, locale)}</li>)}
          </ul>
          <div className="space-y-4 max-w-2xl">
            <input type="text" placeholder="Your name *" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-white/50 focus:border-brand-gold focus:outline-none" />
            <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-white/50 focus:border-brand-gold focus:outline-none" />
            <input type="text" placeholder="WhatsApp (preferred) *" value={form.whatsapp} onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))} className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-white/50 focus:border-brand-gold focus:outline-none" />
            <textarea placeholder="Anything specific to share? (optional)" value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} rows={3} className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-white/50 focus:border-brand-gold focus:outline-none" />
            {submitError && <p className="text-red-300 text-sm">{submitError}</p>}
            <button type="button" onClick={handleContactSubmit} disabled={step === "submitting"} className="inline-flex items-center gap-3 rounded-full bg-brand-gold px-10 py-4 text-brand-pine-dark font-semibold hover:bg-brand-gold/90 transition-colors disabled:opacity-50">
              {step === "submitting" ? <Loader2 size={18} className="animate-spin" /> : null}
              <span>{t(c.submitLabel, locale)}</span>
            </button>
            <p className="text-xs text-white/50 italic mt-4">{t(c.contactDisclaimer, locale)}</p>
          </div>
        </div>
      )}

      {step === "thank_you" && (
        <InquirySuccess
          locale={locale}
          customerName={form.name || undefined}
          showResetCta={true}
          onReset={() => {
            setForm(initialState);
            setResult(null);
            setSubmitError("");
            setExitedAtStep(null);
            setStep("intro");
          }}
        />
      )}
    </div>
  );
}

function QuestionShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="py-4">
      <h3 className="text-brand-pine-dark mb-2" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
        {title}
      </h3>
      {subtitle && <p className="text-brand-pine-dark/60 mb-8 italic" style={{ fontSize: "0.95rem" }}>{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </div>
  );
}

type RewardBadgeKey = "foundation" | "style" | "method" | "readiness";

const REWARD_BADGES: Record<RewardBadgeKey, { en: string; zh: string }> = {
  foundation: { en: "THE FOUNDATION", zh: "基础奠定" },
  style: { en: "THE STYLE", zh: "风格成型" },
  method: { en: "THE METHOD", zh: "方法清晰" },
  readiness: { en: "THE READINESS", zh: "准备就绪" }
};

function RewardScreen({
  text,
  badgeKey,
  locale
}: {
  text: string;
  badgeKey: RewardBadgeKey;
  locale: Locale;
}) {
  const badge = REWARD_BADGES[badgeKey];
  const badgeText = locale === "zh" ? badge.zh : badge.en;

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center" style={{ animation: "fadeInScale 0.4s ease-out" }}>
      {/* 金色边框小标题徽章 */}
      <div className="inline-block mb-6">
        <span
          className="inline-block px-3.5 py-1.5 border text-[10px] font-medium tracking-[0.18em] uppercase"
          style={{
            borderColor: "var(--brand-gold)",
            color: "var(--brand-gold)",
            background: "transparent"
          }}
        >
          {badgeText}
        </span>
      </div>
      <div className="text-brand-gold text-3xl mb-6">♪</div>
      <p className="text-brand-gold max-w-2xl mx-auto" style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.4 }}>
        &quot;{text}&quot;
      </p>
      <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
