import Link from "next/link";

type MarketStat = {
  value: string;
  label: string;
  accent?: "teal" | "navy";
};

type MarketInsightsPanelProps = {
  sectionId?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  paragraphs?: readonly string[];
  stats?: readonly MarketStat[];
  footnote?: string;
  ctaHref?: string;
  ctaLabel?: string;
  showCta?: boolean;
  className?: string;
};

function StatStripCard({ stat }: { stat: MarketStat }) {
  const isNavy = stat.accent === "navy";

  return (
    <div
      className={`flex flex-col justify-center px-5 py-6 sm:px-6 sm:py-7 ${
        isNavy ? "bg-navy text-white" : "bg-white"
      }`}
    >
      <p
        className={`font-primary mb-2 text-[clamp(1.85rem,4vw,2.35rem)] font-extrabold leading-none ${
          isNavy ? "text-teal" : "text-teal"
        }`}
      >
        {stat.value}
      </p>
      <p
        className={`font-secondary text-[0.82rem] leading-snug sm:text-[0.88rem] ${
          isNavy ? "text-white/70" : "text-slate"
        }`}
      >
        {stat.label}
      </p>
    </div>
  );
}

export function MarketInsightsPanel({
  sectionId = "market",
  eyebrow = "2026 Data",
  heading = (
    <>
      Tuscaloosa Home-Selling Market: What Sellers Need to Know in{" "}
      <span className="text-teal">2026</span>
    </>
  ),
  paragraphs = [],
  stats = [],
  footnote,
  ctaHref = "#offer-form",
  ctaLabel = "See if a cash sale fits your timeline →",
  showCta = true,
  className = "bg-ice",
}: MarketInsightsPanelProps) {
  const intro = paragraphs[0];
  const dataPoints =
    paragraphs.length > 2 ? paragraphs.slice(1, -1) : paragraphs.slice(1);
  const conclusion =
    paragraphs.length > 1 ? paragraphs[paragraphs.length - 1] : null;

  return (
    <section
      id={sectionId}
      className={`py-10 sm:py-14 ${className}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id={`${sectionId}-heading`}
            className="font-primary text-[clamp(1.65rem,3.2vw,2.15rem)] font-extrabold leading-tight tracking-tight text-navy"
          >
            {heading}
          </h2>
        </div>

        {stats.length > 0 ? (
          <div className="mb-8 overflow-hidden rounded-2xl border border-mist shadow-[0_8px_32px_rgba(26,35,50,0.06)] sm:mb-10">
            <div className="grid divide-y divide-mist sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <StatStripCard key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        ) : null}

        <div className="overflow-hidden rounded-2xl border border-mist bg-white shadow-[0_4px_24px_rgba(26,35,50,0.05)]">
          <div className="p-6 sm:p-8 lg:p-10">
            {intro ? (
              <p className="font-secondary mb-6 max-w-3xl text-[1.02rem] leading-relaxed text-charcoal sm:text-base">
                {intro}
              </p>
            ) : null}

            {dataPoints.length > 0 ? (
              <ul className="mb-6 grid gap-3 sm:grid-cols-2 lg:gap-4">
                {dataPoints.map((point) => (
                  <li
                    key={point.slice(0, 48)}
                    className="font-secondary flex items-start gap-3 rounded-xl border border-mist bg-hero-surface px-4 py-3.5 text-[0.88rem] leading-relaxed text-charcoal sm:text-[0.9rem]"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}

            {conclusion ? (
              <div className="rounded-xl border border-teal/20 bg-teal-tint/50 px-5 py-4 sm:px-6 sm:py-5">
                <p className="font-secondary text-[0.92rem] leading-relaxed text-charcoal sm:text-[0.95rem]">
                  {conclusion}
                </p>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-mist bg-hero-surface px-6 py-5 sm:flex-row sm:items-center sm:px-8 lg:px-10">
            {footnote ? (
              <p className="font-secondary text-[0.8rem] leading-relaxed text-slate">
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
