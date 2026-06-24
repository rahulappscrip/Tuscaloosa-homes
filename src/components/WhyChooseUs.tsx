import Link from "next/link";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";
const CASH_SALE_VIDEO = "/assets/why-cash-sale.mp4";

const benefits = [
  {
    title: "Fast timeline when you need it most",
    description:
      "Joe can often close in about 7–21 days, instead of the weeks or months it can take to go from listing to closing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 8v4.5l2.5 1.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "No agent commissions",
    description:
      "Keep more of what you walk away with — you're not paying a typical 5–6% commission on your Tuscaloosa home.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M8 8l8 8M16 8l-8 8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "No closing costs",
    description:
      "Joe covers standard closing costs, so you're not writing checks at the closing table.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 8v8M9.5 10.5h4a1.5 1.5 0 010 3h-3a1.5 1.5 0 000 3H14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Sell without repairs",
    description:
      "Sell without repairs, updates, or cleaning. Joe factors the work into his offer and handles improvements after closing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M14.5 5.5l4 4-8.5 8.5H6v-4l8.5-8.5z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M13 7l4 4"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    title: "Flexible closing date",
    description:
      "Need to close quickly, or want extra time to move? Joe works around your schedule.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect
          x="4"
          y="5"
          width="16"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M8 3v4M16 3v4M4 10h16"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Direct access to the decision-maker",
    description:
      "You deal directly with Joe, your local cash home buyer in Alabama — not a call center or anonymous fund.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M5 19c1.8-3 4.2-4.5 7-4.5s5.2 1.5 7 4.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CashSaleVideoCard() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-mist bg-white shadow-[0_8px_28px_rgba(26,35,50,0.08)]">
      <video
        className="aspect-video w-full bg-navy object-cover"
        controls
        playsInline
        preload="metadata"
        aria-label="Why sell your Tuscaloosa home for cash to a local buyer"
      >
        <source src={CASH_SALE_VIDEO} type="video/mp4" />
        Your browser does not support embedded video.
      </video>

      <div className="font-secondary flex items-center justify-center gap-2 border-t border-mist bg-ice px-4 py-3 text-fine font-medium text-navy">
        <PlayIcon />
        Why sell your Tuscaloosa home for cash to a local buyer?
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section
      id="why-cash"
      className="bg-white py-10"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div>
            <p className="font-secondary mb-3 flex items-center gap-2 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              <span className="h-px w-5 bg-teal" aria-hidden />
              Why a local cash sale
            </p>

            <h2
              id="why-choose-heading"
              className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold leading-tight tracking-tight text-navy"
            >
              Why Sell Your Tuscaloosa Home for Cash to a{" "}
              <em className="text-teal italic">Local Buyer?</em>
            </h2>

            <p className="font-secondary max-w-xl text-base leading-relaxed text-slate">
            We buy Tuscaloosa homes for cash as-is — meaning no repairs, no showings, and no open houses. Instead of waiting the typical 30+ days it can take for a traditional buyer's loan and inspections, you move straight to a simple, certain closing.
            </p>

            <CashSaleVideoCard />
          </div>

          <div className="divide-y divide-mist border-y border-mist lg:border-y-0">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex gap-4 py-5 first:pt-0 last:pb-0 lg:first:pt-0"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-tint text-teal"
                  aria-hidden
                >
                  {benefit.icon}
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-primary mb-1 text-[0.95rem] font-bold text-navy">
                    {benefit.title}
                  </h3>
                  <p className="font-secondary text-base leading-relaxed text-slate">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <div className="rounded-xl border border-mist bg-teal-tint/40 p-6 sm:p-7">
            <p className="font-secondary mb-3 flex items-center gap-2 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              <span className="h-px w-5 bg-teal" aria-hidden />
              A simple example
            </p>
            <p className="font-secondary text-base leading-relaxed text-slate">
            If you sold a{" "}
              <strong className="font-semibold text-charcoal">$270,000</strong>{" "}
              Tuscaloosa house with an agent at 6% commission, you could pay around {" "}
              <strong className="font-semibold text-charcoal">$16,000</strong> in commissions plus closing costs and repairs. When you sell to us, you trade a bit of price for speed, certainty, no repairs, and no upfront costs — often a better fit when time and simplicity matter most.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-xl bg-navy p-6 sm:p-7">
            <p className="font-secondary mb-3 flex items-center gap-2 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              <span className="h-px w-5 bg-teal" aria-hidden />
              No pressure, ever
            </p>
            <p className="font-primary mb-5 text-base font-bold leading-snug text-white sm:text-base">
              If you&apos;re comparing options, Joe&apos;s goal is simple: give you
              a clear, fair cash offer so you can decide what&apos;s right for you
              without any pressure.
            </p>
            <Link
              href="#offer-form"
              className="font-secondary inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3.5 text-center text-[0.88rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)] sm:text-[0.92rem]"
            >
              See What My Tuscaloosa Home Could Sell for in Cash
              <span aria-hidden>→</span>
            </Link>
            <p className="font-secondary mt-4 text-center text-base text-white/60">
              or call Joe at{" "}
              <a
                href={PHONE_HREF}
                className="font-semibold text-teal transition-colors hover:text-white"
              >
                {PHONE}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
