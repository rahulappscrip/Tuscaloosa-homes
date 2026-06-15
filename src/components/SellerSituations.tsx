import Image from "next/image";
import Link from "next/link";

const situations = [
  {
    title: "Behind on Payments or Facing Foreclosure",
    description:
      "If you're behind on your mortgage or have a foreclosure date coming up, a quick cash sale can help you avoid months of stress and protect remaining equity. With Alabama foreclosure filings rising and timelines tightening, having a buyer who can close in about 7–21 days can be the difference between a sale and losing the home.",
    image: "/assets/Foreclosure.webp",
  },
  {
    title: "Inherited or Probate Property",
    description:
      "If you've inherited a house in Tuscaloosa you don't want to keep, repairs, taxes, and trips to the property add up fast. Joe can buy inherited and probate houses as-is, work with a local title company or attorney, and help you and any co-heirs turn the property into cash without months of showings or landlord duties.",
    image: "/assets/Inherited.webp",
  },
  {
    title: "Major Repairs or Damage",
    description:
      "Homes that need significant repairs, have code issues, or won't qualify for traditional financing can sit on the market. Joe buys properties in any condition in Tuscaloosa, from outdated rentals to houses needing major work, so you don't have to fund repairs before you sell.",
    image: "/assets/Repairs.webp",
  },
  {
    title: "Bad Tenants or Tired Landlord",
    description:
      "If you own rentals in or around Tuscaloosa and are tired of chasing rent, handling repairs, or dealing with problem tenants, a quick home sale to a cash buyer can help you exit without fixing everything first. Joe can often buy with tenants in place and handle the transition after closing.",
    image: "/assets/Tenants.webp",
  },
  {
    title: "Divorce, Job Change, or Life Transition",
    description:
      "When life changes suddenly — divorce, a new job in another city, or a shift in finances — dragging out a sale can make everything harder. By selling your house fast for cash, you simplify one of the biggest pieces of the puzzle and free up cash to move forward.",
    image: "/assets/Divorce.webp",
  },
  {
    title: "When Speed Matters More Than Top Dollar",
    description:
      "Traditional listings in Tuscaloosa typically go pending in about 33 days, then wait through inspections, appraisals, and buyer financing. A local cash offer trades some price for speed and certainty: you know your closing date, your net proceeds, and that the buyer isn't relying on a loan.",
    image: "/assets/Speed.webp",
  },
] as const;

function SituationImage({ src, alt }: { src: string; alt: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    );
  }

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-mist to-teal-tint/60"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-10 w-10 text-slate/30"
        aria-hidden
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
        <path
          d="M3 16l4.5-4.5 3 3L14 11l7 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function SellerSituations() {
  return (
    <section
      id="situations"
      className="bg-hero-surface py-10"
      aria-labelledby="seller-situations-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-[0.72rem] font-bold tracking-[0.14em] text-teal uppercase">
            Seller Situations
          </p>
          <h2
            id="seller-situations-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            When selling for cash{" "}
            <em className="text-teal italic">makes sense</em>
          </h2>
          <p className="font-secondary mx-auto max-w-[540px] text-[0.95rem] leading-relaxed text-slate">
            Selling to a cash home buyer in Tuscaloosa isn&apos;t right for everyone,
            but it can be the best move when speed, certainty, and simplicity matter
            more than squeezing out every last dollar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {situations.map((situation) => (
            <article
              key={situation.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(26,35,50,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(26,35,50,0.1)]"
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <SituationImage src={situation.image} alt={situation.title} />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-primary mb-2 text-[1rem] font-bold text-navy">
                  {situation.title}
                </h3>
                <p className="font-secondary text-[0.84rem] leading-relaxed text-slate">
                  {situation.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#offer-form"
            className="font-secondary inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-3.5 text-[0.95rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)]"
          >
            Get Cash Offer
            <span aria-hidden>→</span>
          </Link>
          <p className="font-secondary mt-3 text-[0.82rem] text-slate">
            Share what&apos;s going on with your Tuscaloosa property and get honest
            feedback — not a sales pitch.
          </p>
        </div>
      </div>
    </section>
  );
}
