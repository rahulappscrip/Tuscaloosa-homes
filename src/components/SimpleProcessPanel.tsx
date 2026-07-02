import Link from "next/link";

export type SimpleProcessStep = {
  num: number;
  title: string;
  description: string;
};

type SimpleProcessPanelProps = {
  sectionId?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  steps?: readonly SimpleProcessStep[];
  footnote?: string;
  ctaHref?: string;
  ctaLabel?: string;
  showCta?: boolean;
  className?: string;
};

const defaultSteps: SimpleProcessStep[] = [
  {
    num: 1,
    title: "Reach Out & Share Property Basics",
    description:
      "Call (803) 784-7672 or fill out the short form with your property address, type, and situation. This first conversation usually takes just a few minutes.",
  },
  {
    num: 2,
    title: "Quick Walkthrough & Clear Cash Offer",
    description:
      "We meet you at the property for a quick, no-pressure walkthrough, review recent local sales, and prepare a straightforward cash offer based on your home's as-is condition.",
  },
  {
    num: 3,
    title: "Pick Your Closing Date & Close With an Attorney",
    description:
      "If the offer works for you, we open title with a local Alabama closing attorney. They handle the deed, pay off your mortgage and agreed liens, and you choose a closing date that fits your move.",
  },
];

function StepBadge({ num, isLast }: { num: number; isLast: boolean }) {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div
        className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] font-primary text-[1.05rem] font-extrabold shadow-[0_4px_14px_rgba(26,35,50,0.1)] ${
          isLast
            ? "border-teal bg-navy text-teal"
            : "border-teal/30 bg-white text-teal"
        }`}
        aria-hidden
      >
        {num}
      </div>
      {!isLast ? (
        <div
          className="mt-1 w-0.5 flex-1 min-h-[2.5rem] bg-gradient-to-b from-teal/50 to-teal/10"
          aria-hidden
        />
      ) : null}
    </div>
  );
}

export function SimpleProcessPanel({
  sectionId = "simple-process",
  eyebrow = "Simple Process",
  heading = "How Does Selling Your House for Cash Work?",
  description = "Selling your house for cash works in three simple steps: you reach out, we walk the property, and a local Alabama closing attorney helps you close and get paid. There's no obligation at any step.",
  steps = defaultSteps,
  footnote = "No obligation at any step — walk away anytime if it's not the right fit.",
  ctaHref = "#offer-form",
  ctaLabel = "Start With a Quick Conversation →",
  showCta = true,
  className = "bg-white",
}: SimpleProcessPanelProps) {
  return (
    <section
      id={sectionId}
      className={`py-10 sm:py-14 ${className}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-6 bg-teal" aria-hidden />
            <p className="font-secondary text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              {eyebrow}
            </p>
            <span className="h-px w-6 bg-teal" aria-hidden />
          </div>
          <h2
            id={`${sectionId}-heading`}
            className="font-primary mb-4 text-[clamp(1.65rem,3.2vw,2.15rem)] font-extrabold leading-tight tracking-tight text-navy"
          >
            {heading}
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-mist bg-white shadow-[0_8px_32px_rgba(26,35,50,0.06)]">
          <div className="border-b border-mist bg-teal-tint/40 px-6 py-5 sm:px-8 sm:py-6 lg:px-10">
            <p className="font-secondary mx-auto max-w-3xl text-center text-[0.95rem] leading-relaxed text-charcoal sm:text-base">
              {description}
            </p>
          </div>

          <ol className="divide-y divide-mist px-6 py-2 sm:px-8 lg:px-10">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;

              return (
                <li
                  key={step.num}
                  className="flex gap-4 py-6 sm:gap-6 sm:py-7 lg:gap-8"
                >
                  <StepBadge num={step.num} isLast={isLast} />
                  <article className="min-w-0 flex-1 pt-1.5">
                    <p className="font-secondary mb-1.5 text-[0.68rem] font-bold tracking-[0.1em] text-teal uppercase">
                      Step {step.num}
                    </p>
                    <h3 className="font-primary mb-2.5 text-[clamp(1.05rem,2.2vw,1.2rem)] font-bold leading-snug text-navy">
                      {step.title}
                    </h3>
                    <p className="font-secondary text-[0.92rem] leading-relaxed text-slate sm:text-[0.95rem]">
                      {step.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-mist bg-hero-surface px-6 py-5 sm:flex-row sm:items-center sm:px-8 lg:px-10">
            {footnote ? (
              <p className="font-secondary flex items-start gap-2.5 text-[0.84rem] leading-relaxed text-slate sm:text-[0.88rem]">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[0.65rem] font-bold text-teal"
                  aria-hidden
                >
                  ✓
                </span>
                {footnote}
              </p>
            ) : (
              <span />
            )}

            {showCta ? (
              <Link
                href={ctaHref}
                className="font-secondary inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-teal px-6 py-3.5 text-[0.9rem] font-bold text-white shadow-[0_4px_16px_rgba(43,188,212,0.3)] transition-all duration-200 hover:bg-teal-dark sm:w-auto"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
