import type { ReactNode } from "react";
import Link from "next/link";

export type ValuationMethodItem = {
  subtitle: string;
  title: string;
  description: string;
  recommended?: boolean;
};

const defaultMethods: ValuationMethodItem[] = [
  {
    subtitle: "Factor 01",
    title: "Online estimates (Zillow, Redfin)",
    description:
      "Instant and free, but often inaccurate for as-is or unique Tuscaloosa homes — and they don't reflect your actual sale timeline.",
  },
  {
    subtitle: "Factor 02",
    title: "Realtor comparative market analysis (CMA)",
    description:
      "Uses local comps and can account for condition, but focuses on list price — not net proceeds after commissions and carrying costs.",
  },
  {
    subtitle: "Factor 03",
    title: "Paid appraisal",
    description:
      "Formal valuation for lenders or legal purposes. Costs $400–$600+ and reflects retail value, not a fast as-is cash sale.",
  },
  {
    subtitle: "Factor 04",
    title: "Joe's written cash offer",
    description:
      "Free, local, and as-is — shows your real net number with no fees and a closing timeline as fast as 7 days.",
    recommended: true,
  },
];

type ValuationMethodsProps = {
  eyebrow?: string;
  heading?: ReactNode;
  description?: string;
  methods?: readonly ValuationMethodItem[];
  recommendedIndex?: number | null;
  showCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export function ValuationMethods({
  eyebrow = "Compare Your Options",
  heading = "4 ways to find out how much your Tuscaloosa home is worth",
  description =
    "If you're asking \"how much is my house worth in Tuscaloosa, AL?\" — these are the main paths homeowners use. Each has trade-offs between speed, accuracy, and cost.",
  methods = defaultMethods,
  recommendedIndex,
  showCta = true,
  ctaLabel = "Get Joe's Free Written Offer →",
  ctaHref = "#contact",
}: ValuationMethodsProps) {
  const highlightIndex =
    recommendedIndex === undefined
      ? methods.findIndex((method) => method.recommended)
      : recommendedIndex;
  const resolvedHighlightIndex =
    highlightIndex === undefined ||
    highlightIndex === null ||
    highlightIndex < 0
      ? null
      : highlightIndex;

  return (
    <section
      className="bg-hero-surface py-10"
      aria-labelledby="valuation-methods-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mb-8 max-w-3xl">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-6 bg-teal" aria-hidden />
            <p className="font-secondary text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              {eyebrow}
            </p>
          </div>
          <h2
            id="valuation-methods-heading"
            className="font-primary text-[clamp(1.65rem,3.2vw,2.15rem)] font-extrabold leading-tight tracking-tight text-navy"
          >
            {heading}
          </h2>
          <p className="font-secondary mt-4 text-base leading-relaxed text-slate">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method, index) => (
            <article
              key={`${method.subtitle}-${method.title}`}
              className={`rounded-xl border border-mist bg-white p-6 shadow-[0_4px_20px_rgba(26,35,50,0.04)] ${
                resolvedHighlightIndex !== null &&
                index === resolvedHighlightIndex
                  ? "ring-2 ring-teal/20"
                  : ""
              }`}
            >
              <p className="font-secondary mb-2 text-[0.68rem] font-bold tracking-[0.14em] text-teal uppercase">
                {method.subtitle}
              </p>
              <h3 className="font-primary mb-3 text-[1.05rem] font-bold text-navy">
                {method.title}
                {resolvedHighlightIndex !== null &&
                index === resolvedHighlightIndex ? (
                  <span className="font-secondary ml-2 text-[0.72rem] font-bold tracking-wide text-teal uppercase">
                    Recommended
                  </span>
                ) : null}
              </h3>
              <p className="font-secondary text-[0.88rem] leading-relaxed text-slate">
                {method.description}
              </p>
            </article>
          ))}
        </div>

        {showCta ? (
          <div className="mt-8 text-center">
            <Link
              href={ctaHref}
              className="font-secondary inline-flex items-center justify-center rounded-lg bg-teal px-6 py-3.5 text-[0.95rem] font-bold text-white transition-colors hover:bg-teal-dark"
            >
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
