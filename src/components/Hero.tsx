import Image from "next/image";
import Link from "next/link";
import { OfferCalculatorWidget } from "@/components/CashOfferCalculator";
import { OfferForm } from "@/components/OfferForm";

const PHONE_HREF = "tel:8037847672";
const PHONE_DISPLAY = "(803) 784-7672";

const defaultBenefits = [
  "No repairs or cleaning",
  "Close in 7 days or your schedule",
  "No open houses or showings",
] as const;

type HeroStep = {
  num: number;
  label: string;
};

type HeroProps = {
  variant?: "default" | "about";
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  benefits?: readonly string[];
  steps?: readonly HeroStep[];
  badges?: readonly string[];
  joeQuote?: string;
  joeCredentials?: readonly string[];
  showBenefits?: boolean;
  showJoeCard?: boolean;
  rightPanel?: "form" | "calculator";
  calculatorCtaHref?: string;
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5L16.5 13l4 1.5V17a2 2 0 01-2 2C9.6 19 5 14.4 5 8.5A2.5 2.5 0 016.5 4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function JoeProfileCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-mist bg-white shadow-[0_8px_28px_rgba(26,35,50,0.08)]">
      <div className="flex flex-col gap-5 px-5 pt-4 pb-5 sm:flex-row sm:items-start sm:p-6 sm:pt-5">
        <div className="relative mx-auto shrink-0 sm:mx-0">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-[0_4px_16px_rgba(26,35,50,0.12)] sm:h-32 sm:w-32">
            <Image
              src="/assets/joe.png"
              alt="Joe LeBlanc, founder of We Buy Tuscaloosa Homes"
              width={1286}
              height={2094}
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
          <div className="absolute -right-1 -bottom-1 flex items-center gap-1.5 rounded-full border border-mist bg-white px-2.5 py-1 shadow-[0_4px_12px_rgba(26,35,50,0.1)]">
            <span className="text-[0.62rem] tracking-wide text-gold" aria-hidden>
              ★★★★★
            </span>
            <span className="font-primary text-[0.8rem] font-extrabold text-navy">
              5.0
            </span>
          </div>
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="font-secondary mb-1 text-eyebrow font-bold tracking-[0.12em] text-teal uppercase">
            Your Local Buyer
          </p>
          <h2 className="font-primary text-[1.35rem] font-extrabold text-navy sm:text-[1.5rem]">
            Joe LeBlanc
          </h2>
          <p className="font-secondary mt-0.5 text-base font-semibold text-teal">
            Founder, We Buy Tuscaloosa Homes 
          </p>
          <p className="font-secondary mt-2 text-base leading-relaxed text-slate">
            Local cash buyer serving Tuscaloosa &amp; West Alabama — you talk
            directly with Joe, not a call center.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-mist bg-navy px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="font-secondary text-center text-[0.78rem] leading-snug text-white/75 sm:text-left">
          <span className="block font-semibold text-white">
            103+ verified Google reviews
          </span>
          No obligation, no pressure
        </div>
        <Link
          href={PHONE_HREF}
          className="font-secondary inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-[0.84rem] font-bold text-white transition-colors hover:bg-teal-dark"
        >
          <PhoneIcon />
          {PHONE_DISPLAY}
        </Link>
      </div>
    </div>
  );
}

function HeroSteps({ steps }: { steps: readonly HeroStep[] }) {
  return (
    <ol className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-2 lg:flex-nowrap">
      {steps.map((step, index) => (
        <li key={step.num} className="flex items-center gap-2">
          <span className="font-secondary inline-flex items-center gap-2 rounded-md border border-mist bg-white px-3 py-2 text-[0.72rem] font-medium text-charcoal lg:text-[0.75rem] lg:whitespace-nowrap">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
              aria-hidden
            />
            {step.label}
          </span>
          {index < steps.length - 1 ? (
            <span
              className="font-secondary text-[0.85rem] text-slate/40"
              aria-hidden
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function AboutJoePanel({
  quote,
  credentials,
}: {
  quote: string;
  credentials: readonly string[];
}) {
  return (
    <div className="flex flex-col items-center justify-center border-t border-white/6 bg-[#243044] px-8 py-10 text-center lg:border-t-0 lg:border-l lg:px-9">
      <div className="mb-4 flex h-[110px] w-[110px] items-center justify-center rounded-full border-[3px] border-teal bg-navy">
        <span className="font-primary text-[2.25rem] font-extrabold text-teal">
          JL
        </span>
      </div>
      <p className="font-primary text-[1.05rem] font-extrabold text-white">
        Joe LeBlanc
      </p>
      <p className="font-secondary mb-5 text-[0.75rem] font-medium text-teal/80">
        Founder, Owner &amp; CEO
      </p>
      <blockquote className="font-secondary mb-5 border-l-2 border-teal py-0 pl-3.5 text-left text-[0.88rem] leading-relaxed text-white/65 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex w-full flex-col gap-1.5">
        {credentials.map((credential) => (
          <div
            key={credential}
            className="font-secondary rounded-md border border-teal/20 bg-teal/10 px-3 py-2 text-[0.68rem] font-semibold text-white/80"
          >
            {credential}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero({
  variant = "default",
  eyebrow = "Tuscaloosa, Alabama",
  heading = (
    <>
      We Buy <span className="text-teal">Tuscaloosa Homes </span> For Cash — Fast
      &amp; As-Is
    </>
  ),
  description = "We buy Tuscaloosa homes for cash in any condition and can close in as little as 7 days on the timeline that works for you. When you work with Joe LeBlanc, you skip listings, showings, repairs, and real estate commissions and go straight to a guaranteed cash buyer.",
  benefits = defaultBenefits,
  steps,
  badges,
  joeQuote,
  joeCredentials = [],
  showBenefits = true,
  showJoeCard = true,
  rightPanel = "form",
  calculatorCtaHref = "#offer-form",
}: HeroProps) {
  if (variant === "about") {
    return (
      <section id="hero" className="bg-navy">
        <div className="mx-auto grid max-w-[1300px] lg:grid-cols-[1fr_380px]">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="font-secondary text-[0.62rem] font-bold tracking-[0.18em] text-teal uppercase">
                {eyebrow}
              </span>
              <span
                className="h-px flex-1 bg-teal/30"
                aria-hidden
              />
            </div>
            <h1 className="font-primary mb-5 max-w-xl text-[clamp(1.75rem,3.8vw,2.85rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              {heading}
            </h1>
            <p className="font-secondary mb-7 max-w-md text-base leading-relaxed text-white/65">
              {description}
            </p>
            {badges && badges.length > 0 ? (
              <ul className="flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <li
                    key={badge}
                    className="font-secondary flex items-center gap-1.5 text-[0.75rem] font-semibold text-white/75 before:font-extrabold before:text-teal before:content-['✓']"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {joeQuote ? (
            <div className="hidden lg:block">
              <AboutJoePanel quote={joeQuote} credentials={joeCredentials} />
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="bg-hero-surface lg:overflow-hidden">
      <div className="mx-auto w-full max-w-[1300px] px-6 py-10 sm:py-12 lg:py-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
          <div className="order-1 flex flex-col gap-6 lg:col-start-1 lg:row-start-1">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-4 w-1 shrink-0 rounded-full bg-teal" aria-hidden />
              <span className="font-secondary text-[0.85rem] font-semibold text-teal">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-primary mb-3 max-w-xl text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.1] font-extrabold tracking-tight text-charcoal">
              {heading}
            </h1>

            <p className="font-secondary mb-4 max-w-xl text-base leading-relaxed text-slate">
              {description}
            </p>

            {steps && steps.length > 0 ? (
              <HeroSteps steps={steps} />
            ) : showBenefits ? (
              <ul className="mb-4 flex flex-wrap gap-2 lg:flex-nowrap">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="font-secondary inline-flex items-center gap-2 rounded-md border border-mist bg-white px-3 py-2 text-[0.72rem] font-medium text-charcoal lg:text-[0.75rem] lg:whitespace-nowrap"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                      aria-hidden
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            ) : null}

            {showJoeCard ? (
              <div className="hidden lg:block">
                <JoeProfileCard />
              </div>
            ) : null}
          </div>

          <div className="order-2 flex w-full flex-col items-center lg:col-start-2 lg:row-start-1 lg:items-end lg:self-start">
            {rightPanel === "calculator" ? (
              <div className="w-full max-w-[450px]">
                <OfferCalculatorWidget ctaHref={calculatorCtaHref} />
              </div>
            ) : (
              <OfferForm />
            )}
          </div>

          {showJoeCard ? (
            <div className="order-3 mb-8 w-full lg:hidden">
              <JoeProfileCard />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
