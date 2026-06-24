import Link from "next/link";
import { OfferCalculatorWidget } from "@/components/CashOfferCalculator";

const defaultIncludes = [
  "0% commission — we charge nothing to buy your home",
  "Standard closing costs paid by us, not you",
  "No fees to receive or review an offer",
] as const;

const points = [
  {
    title: "Agent route vs. Us",
    description:
      "Agent route: Sale price minus commissions minus closing costs minus repairs minus carrying costs. Joe's route: Cash offer minus any remaining mortgage balance equals what you walk away with.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M4 10.5L12 5l8 5.5V19a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Compare before you decide",
    description:
      "Joe encourages you to compare his cash offer with other options so you can decide if the tradeoff between price and speed makes sense for you. If it doesn't, you can walk away with no obligation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M8 4h11v16H5a2 2 0 01-2-2V6a2 2 0 012-2h1"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M8 4v16M8 8h11M11 12h5M11 16h5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

type TransparentPricingProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  includes?: readonly string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function TransparentPricing({
  eyebrow = "Transparent Pricing",
  heading = (
    <>
      How we decide on your{" "}
      <em className="text-teal italic">cash offer in Tuscaloosa</em>
    </>
  ),
  description =
    "We decide on your cash offer by looking at your home's after-repair value, subtracting repair and holding costs, and leaving a reasonable profit — without adding commissions or hidden fees.",
  includes = defaultIncludes,
  ctaLabel = "Request a Transparent Cash Offer Breakdown",
  ctaHref = "#offer-form",
}: TransparentPricingProps) {
  return (
    <section
      id="offer-math"
      className="bg-navy py-10 text-white"
      aria-labelledby="transparent-pricing-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id="transparent-pricing-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-white"
          >
            {heading}
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-base leading-relaxed text-white/65">
            {description}
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <OfferCalculatorWidget />

          <div className="flex flex-col gap-5">
            <p className="font-secondary text-base leading-relaxed text-white/90">
              Unlike a traditional sale where you might pay around 5–6% in
              commissions plus closing costs and repairs, our offers include:
            </p>

            <ul className="flex flex-col gap-2.5">
              {includes.map((item) => (
                <li
                  key={item}
                  className="font-secondary flex items-center gap-2.5 text-[0.9rem] text-white"
                >
                  <span className="font-bold text-teal" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/15 text-teal"
                    aria-hidden
                  >
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-primary mb-1 text-[0.95rem] font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="font-secondary text-base leading-relaxed text-white/80">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={ctaHref}
              className="font-secondary mt-1 inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-teal px-5 py-3.5 text-center text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)] sm:text-[0.95rem]"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
