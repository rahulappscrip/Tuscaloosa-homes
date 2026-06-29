import Link from "next/link";

const defaultStats = [
  {
    value: "$271,050",
    label: "Median Tuscaloosa sale price",
    accent: "teal" as const,
  },
  {
    value: "~33 days",
    label: "Typical time to go pending on a traditional listing",
    accent: "gold" as const,
  },
  {
    value: "7–21 days",
    label: "Typical close timeline when you sell to Joe",
    accent: "teal" as const,
  },
] as const;

const defaultBenefits = [
  "Skip repairs and sell as-is, even if the home needs updates or major work.",
  "Skip real estate commissions — we cover standard closing costs on every deal.",
  "Often move from first contact to closing in about 7–21 days instead of months.",
] as const;

type MarketStat = {
  value: string;
  label: string;
  accent?: "teal" | "gold";
};

type LocalMarketProps = {
  layout?: "sidebar" | "overview";
  eyebrow?: string;
  heading?: React.ReactNode;
  paragraphs?: readonly string[];
  columns?: readonly [string, string];
  benefits?: readonly string[] | null;
  stats?: readonly MarketStat[];
  footnote?: string;
  footerNote?: React.ReactNode;
  showResourceLinks?: boolean;
  showSidebarCta?: boolean;
  ctaHref?: string;
  className?: string;
  sectionId?: string;
};

function StatCard({ stat, variant }: { stat: MarketStat; variant: "sidebar" | "overview" }) {
  if (variant === "overview") {
    return (
      <div className="rounded-xl border border-mist bg-white p-5">
        <p className="font-primary mb-1.5 text-[clamp(1.5rem,3vw,1.9rem)] font-extrabold leading-none text-navy">
          {stat.value}
        </p>
        <p className="font-secondary text-[0.92rem] leading-snug text-slate">
          {stat.label}
        </p>
      </div>
    );
  }

  const accent = stat.accent ?? "teal";

  return (
    <div
      className={`group rounded-xl border border-mist bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_12px_32px_rgba(26,35,50,0.08)] ${
        accent === "gold" ? "hover:border-gold/50" : "hover:border-teal/40"
      }`}
    >
      <div
        className={`mb-1 h-1 w-10 rounded-full transition-all duration-200 group-hover:w-14 ${
          accent === "gold" ? "bg-gold" : "bg-teal"
        }`}
        aria-hidden
      />
      <p
        className={`font-primary mb-1.5 text-[1.75rem] font-extrabold leading-none transition-colors duration-200 sm:text-[1.9rem] ${
          accent === "gold" ? "text-navy group-hover:text-teal" : "text-teal"
        }`}
      >
        {stat.value}
      </p>
      <p className="font-secondary text-base leading-snug text-slate">{stat.label}</p>
    </div>
  );
}

export function LocalMarket({
  layout = "sidebar",
  eyebrow = "Tuscaloosa Market · 2026",
  heading = (
    <>
      Tuscaloosa Home-Selling Market: What Sellers Need to Know in{" "}
      <span className="text-teal">2026</span>
    </>
  ),
  paragraphs = [
    "Selling a house quickly in Tuscaloosa in 2026 means balancing price, timing, and certainty in a market where typical homes go pending in about 33 days and the median sale price is around $271,050.",
    "In markets like Tuscaloosa, where many buyers rely on financing, deals can still fall through if appraisals or inspections don't go as planned — even after weeks of showings and negotiations.",
    "A traditional listing often looks like this: you clean and repair the house, hire an agent, host showings and open houses, negotiate repairs after inspection, and then wait for the buyer's loan to clear before closing. That path can make sense if your home is in great shape and you have time.",
    "When you work with a local cash home buyer in Tuscaloosa, you can:",
  ],
  columns,
  benefits = defaultBenefits,
  stats = defaultStats,
  footnote,
  footerNote,
  showResourceLinks = true,
  showSidebarCta = true,
  ctaHref = "#offer-form",
  className = "bg-white",
  sectionId = "market",
}: LocalMarketProps) {
  if (layout === "overview") {
    const columnCopy = columns ?? [paragraphs[0] ?? "", paragraphs[1] ?? ""];

    return (
      <section
        id={sectionId}
        className={`py-10 ${className}`}
        aria-labelledby={`${sectionId}-heading`}
      >
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="mb-8 max-w-4xl">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-teal" aria-hidden />
              <p className="font-secondary text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
                {eyebrow}
              </p>
            </div>
            <h2
              id={`${sectionId}-heading`}
              className="font-primary text-[clamp(1.65rem,3.2vw,2.15rem)] font-extrabold leading-tight tracking-tight text-navy"
            >
              {heading}
            </h2>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} variant="overview" />
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            {columnCopy.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="font-secondary text-[0.98rem] leading-relaxed text-charcoal"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {footnote ? (
            <p className="font-secondary mt-6 text-[0.82rem] leading-relaxed text-slate">
              {footnote}
            </p>
          ) : null}

          {footerNote ? (
            <p className="font-secondary mt-6 text-base leading-relaxed text-slate">
              {footerNote}
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section
      id={sectionId}
      className={`py-10 ${className}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_320px] xl:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-teal" aria-hidden />
              <p className="font-secondary text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
                {eyebrow}
              </p>
            </div>

            <h2
              id={`${sectionId}-heading`}
              className="font-primary mb-6 text-[clamp(1.65rem,3.2vw,2.15rem)] font-extrabold leading-tight tracking-tight text-navy"
            >
              {heading}
            </h2>

            <div className="font-secondary space-y-4 text-[0.98rem] leading-relaxed text-charcoal">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            {benefits && benefits.length > 0 ? (
              <>
                <ul className="my-5 space-y-3">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="font-secondary flex items-start gap-3 text-[0.95rem] leading-relaxed text-charcoal"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[0.75rem] font-bold text-teal"
                        aria-hidden
                      >
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <p className="font-secondary mb-5 text-base leading-relaxed text-charcoal">
                  For some Tuscaloosa homeowners, the best outcome isn&apos;t
                  squeezing out the highest theoretical price — it&apos;s choosing the
                  path that gets them out from under payments, repairs, or stress on
                  a clear timeline.
                </p>
              </>
            ) : null}

            {footnote ? (
              <p className="font-secondary text-[0.82rem] leading-relaxed text-slate">
                {footnote}
              </p>
            ) : null}

            {footerNote ? (
              <p className="font-secondary text-base leading-relaxed text-slate">
                {footerNote}
              </p>
            ) : null}

            {showResourceLinks ? (
              <p className="font-secondary text-base leading-relaxed text-slate">
                For deeper market data, visit the{" "}
                <a
                  href="https://data.tuscaloosanews.com/real-estate-market-report/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal underline decoration-teal/30 underline-offset-2 transition-colors hover:text-teal-dark hover:decoration-teal"
                >
                  Tuscaloosa real estate market report
                </a>{" "}
                or{" "}
                <a
                  href="https://acre.culverhouse.ua.edu/research/residential-research/tuscaloosa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal underline decoration-teal/30 underline-offset-2 transition-colors hover:text-teal-dark hover:decoration-teal"
                >
                  Tuscaloosa housing market research
                </a>
                . Joe follows these same data points but keeps offers simple and
                easy to understand.
              </p>
            ) : null}
          </div>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-28">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} variant="sidebar" />
            ))}

            {showSidebarCta ? (
              <Link
                href={ctaHref}
                className="font-secondary mt-1 hidden rounded-xl border border-mist bg-hero-surface px-5 py-4 text-center text-[0.88rem] font-semibold text-navy transition-all duration-200 hover:border-teal hover:bg-teal-tint/40 hover:text-teal lg:block"
              >
                See if a cash sale fits your timeline →
              </Link>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}
