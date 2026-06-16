"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const ARV_MIN = 50_000;
const ARV_MAX = 600_000;
const ARV_DEFAULT = 185_000;
const ARV_STEP = 5_000;

const conditions = [
  { id: "move-in", label: "Move-in ready" },
  { id: "minor", label: "Needs minor work" },
  { id: "major", label: "Needs major work" },
  { id: "distressed", label: "Distressed" },
] as const;

type ConditionId = (typeof conditions)[number]["id"];

const conditionRanges: Record<ConditionId, { low: number; high: number }> = {
  "move-in": { low: 0.756, high: 0.784 },
  minor: { low: 0.69, high: 0.73 },
  major: { low: 0.58, high: 0.64 },
  distressed: { low: 0.46, high: 0.54 },
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCompactCurrency(value: number) {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${Math.round(value / 1_000)}k`;
  return formatCurrency(value);
}

export function OfferCalculatorWidget() {
  const [arv, setArv] = useState(ARV_DEFAULT);
  const [condition, setCondition] = useState<ConditionId>("move-in");

  const { low, high } = useMemo(() => {
    const range = conditionRanges[condition];
    const lowOffer = Math.round((arv * range.low) / 1_000) * 1_000;
    const highOffer = Math.round((arv * range.high) / 1_000) * 1_000;
    return { low: lowOffer, high: Math.max(highOffer, lowOffer + 5_000) };
  }, [arv, condition]);

  const sliderPercent = ((arv - ARV_MIN) / (ARV_MAX - ARV_MIN)) * 100;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
      <div className="bg-navy px-6 py-5 sm:px-7">
        <h3 className="font-primary text-[1.2rem] font-bold text-white">
          Estimate your cash offer
        </h3>
        <p className="font-secondary mt-1 text-base leading-relaxed text-white/65">
          A quick ballpark — your real offer comes from Joe after a walkthrough.
        </p>
      </div>

      <div className="space-y-6 bg-white px-6 py-6 sm:px-7 sm:py-7">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <label
              htmlFor="arv-slider"
              className="font-secondary text-[0.88rem] font-semibold text-charcoal"
            >
              Home value once fixed up (ARV)
            </label>
            <span className="font-primary shrink-0 text-[1.05rem] font-extrabold text-teal">
              {formatCurrency(arv)}
            </span>
          </div>

          <input
            id="arv-slider"
            type="range"
            min={ARV_MIN}
            max={ARV_MAX}
            step={ARV_STEP}
            value={arv}
            onChange={(e) => setArv(Number(e.target.value))}
            className="cash-offer-slider h-2 w-full cursor-pointer appearance-none rounded-full bg-mist"
            style={{
              background: `linear-gradient(to right, var(--teal) 0%, var(--teal) ${sliderPercent}%, var(--mist) ${sliderPercent}%, var(--mist) 100%)`,
            }}
            aria-valuemin={ARV_MIN}
            aria-valuemax={ARV_MAX}
            aria-valuenow={arv}
            aria-valuetext={formatCurrency(arv)}
          />

          <div className="font-secondary mt-2 flex justify-between text-[0.72rem] text-slate">
            <span>{formatCompactCurrency(ARV_MIN)}</span>
            <span>{formatCompactCurrency(ARV_MAX)}</span>
          </div>
        </div>

        <fieldset>
          <legend className="font-secondary mb-3 text-[0.88rem] font-semibold text-charcoal">
            Condition of the home
          </legend>
          <div className="grid grid-cols-2 gap-2.5">
            {conditions.map((option) => {
              const isActive = condition === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setCondition(option.id)}
                  className={`font-secondary cursor-pointer rounded-lg border px-3 py-2.5 text-[0.78rem] font-medium transition-colors sm:text-[0.82rem] ${
                    isActive
                      ? "border-teal bg-teal-tint/60 text-navy"
                      : "border-mist bg-white text-slate hover:border-teal/40 hover:bg-teal-tint/25"
                  }`}
                  aria-pressed={isActive}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="bg-navy px-6 py-6 sm:px-7 sm:py-7">
        <p className="font-secondary mb-2 text-eyebrow font-bold tracking-[0.12em] text-teal uppercase">
          Estimated cash offer range
        </p>
        <p
          className="font-primary mb-2 text-[clamp(1.5rem,4vw,2rem)] font-extrabold text-white"
          aria-live="polite"
        >
          {formatCurrency(low)} – {formatCurrency(high)}
        </p>
        <p className="font-secondary mb-5 text-fine leading-relaxed text-white/60">
          No fees or commissions deducted. Joe covers standard closing costs.
        </p>
        <Link
          href="#offer-form"
          className="font-secondary flex w-full items-center justify-center rounded-lg bg-teal px-5 py-3.5 text-[0.92rem] font-bold text-white transition-colors hover:bg-teal-dark"
        >
          Get My Real Cash Offer
        </Link>
      </div>
    </div>
  );
}
