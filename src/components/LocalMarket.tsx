import Link from "next/link";

const stats = [
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
    label: "Typical close timeline with a local cash offer from Joe",
    accent: "teal" as const,
  },
] as const;

const benefits = [
  "Skip repairs and sell as-is, even if the home needs updates or major work.",
  "Skip real estate commissions, and Joe covers standard closing costs.",
  "Often move from first contact to closing in about 7–21 days instead of months.",
] as const;

export function LocalMarket() {
  return (
    <section
      id="market"
      className="bg-white py-10"
      aria-labelledby="local-market-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_320px] xl:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-teal" aria-hidden />
              <p className="font-secondary text-[0.72rem] font-bold tracking-[0.14em] text-teal uppercase">
                Tuscaloosa Market · 2026
              </p>
            </div>

            <h2
              id="local-market-heading"
              className="font-primary mb-6 text-[clamp(1.65rem,3.2vw,2.15rem)] font-extrabold leading-tight tracking-tight text-navy"
            >
              Tuscaloosa Home-Selling Market: What Sellers Need to Know in{" "}
              <span className="text-teal">2026</span>
            </h2>

            <div className="font-secondary space-y-4 text-[0.98rem] leading-relaxed text-charcoal">
              <p>
                Selling a house quickly in Tuscaloosa in 2026 means balancing
                price, timing, and certainty in a market where typical homes go
                pending in about 33 days and the median sale price is around
                $271,050.
              </p>
              <p>
                In markets like Tuscaloosa, where many buyers rely on financing,
                deals can still fall through if appraisals or inspections don&apos;t go
                as planned — even after weeks of showings and negotiations.
              </p>
              <p>
                A traditional listing often looks like this: you clean and repair the
                house, hire an agent, host showings and open houses, negotiate
                repairs after inspection, and then wait for the buyer&apos;s loan to
                clear before closing. That path can make sense if your home is in
                great shape and you have time.
              </p>
              <p>When you work with a local cash home buyer in Tuscaloosa, you can:</p>
            </div>

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

            <p className="font-secondary mb-5 text-[0.98rem] leading-relaxed text-charcoal">
              For some Tuscaloosa homeowners, the best outcome isn&apos;t squeezing out
              the highest theoretical price — it&apos;s choosing the path that gets them
              out from under payments, repairs, or stress on a clear timeline.
            </p>

            <p className="font-secondary text-[0.88rem] leading-relaxed text-slate">
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
              . Joe follows these same data points but keeps his offers simple and
              easy to understand.
            </p>
          </div>

          <aside className="flex flex-col gap-4 lg:sticky lg:top-28">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`group rounded-xl border border-mist bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_12px_32px_rgba(26,35,50,0.08)] ${
                  stat.accent === "gold"
                    ? "hover:border-gold/50"
                    : "hover:border-teal/40"
                }`}
              >
                <div
                  className={`mb-1 h-1 w-10 rounded-full transition-all duration-200 group-hover:w-14 ${
                    stat.accent === "gold" ? "bg-gold" : "bg-teal"
                  }`}
                  aria-hidden
                />
                <p
                  className={`font-primary mb-1.5 text-[1.75rem] font-extrabold leading-none transition-colors duration-200 sm:text-[1.9rem] ${
                    stat.accent === "gold"
                      ? "text-navy group-hover:text-teal"
                      : "text-teal"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="font-secondary text-[0.8rem] leading-snug text-slate">
                  {stat.label}
                </p>
              </div>
            ))}

            <Link
              href="#offer-form"
              className="font-secondary mt-1 hidden rounded-xl border border-mist bg-hero-surface px-5 py-4 text-center text-[0.88rem] font-semibold text-navy transition-all duration-200 hover:border-teal hover:bg-teal-tint/40 hover:text-teal lg:block"
            >
              See if a cash sale fits your timeline →
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
