import Image from "next/image";
import Link from "next/link";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";

const steps = [
  "Share a few details about your house.",
  "Joe follows up for a quick walkthrough.",
  "Get a no-obligation cash offer.",
] as const;

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

type FinalCTAProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  checklist?: readonly string[];
  subtext?: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  consentText?: string;
  showImage?: boolean;
  imageAlt?: string;
  imageTitle?: string;
};

export function FinalCTA({
  eyebrow = "Ready When You Are",
  heading = "Ready to Get a Cash Offer? We Buy Tuscaloosa Homes Fast.",
  description =
    "Joe buys homes for cash in Tuscaloosa and can make you a clear, local offer — often within 24 hours.",
  checklist = steps,
  subtext = "No repairs. No commissions. No closing costs.",
  primaryCtaLabel = "Get My Free Cash Offer Now",
  secondaryCtaLabel = `Call Joe Directly — ${PHONE}`,
  consentText,
  showImage = true,
  imageAlt = "Joe LeBlanc, local Tuscaloosa cash home buyer",
  imageTitle = "Joe LeBlanc — your local cash home buyer",
}: FinalCTAProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-mist bg-hero-surface py-12 sm:py-14"
      aria-labelledby="final-cta-heading"
    >
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-teal/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1300px] px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_minmax(260px,360px)] lg:gap-10 xl:gap-12">
          <div className="text-center lg:text-left">
            <p className="font-secondary mb-2 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              {eyebrow}
            </p>

            <h2
              id="final-cta-heading"
              className="font-primary mb-3 text-[clamp(1.5rem,3.5vw,2.1rem)] font-extrabold leading-tight tracking-tight text-navy"
            >
              {heading}
            </h2>

            <p className="font-secondary mx-auto mb-4 max-w-xl text-base leading-relaxed text-slate lg:mx-0">
              {description}
            </p>

            <ul className="mx-auto mb-4 max-w-md space-y-2 text-left lg:mx-0">
              {checklist.map((step) => (
                <li
                  key={step}
                  className="font-secondary flex items-start gap-2.5 text-[0.84rem] leading-snug text-charcoal"
                >
                  <span
                    className="mt-0.5 shrink-0 font-bold text-teal"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {step}
                </li>
              ))}
            </ul>

            {subtext ? (
              <p className="font-secondary mx-auto mb-5 max-w-xl text-base text-slate lg:mx-0">
                {subtext}
              </p>
            ) : null}

            <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="font-secondary inline-flex w-full items-center justify-center rounded-full bg-teal px-6 py-3 text-[0.9rem] font-bold text-white shadow-[0_6px_24px_rgba(43,188,212,0.35)] transition-all duration-200 hover:bg-teal-dark sm:w-auto"
              >
                {primaryCtaLabel}
              </Link>
              <Link
                href={PHONE_HREF}
                className="font-secondary inline-flex w-full items-center justify-center gap-2 rounded-full border border-mist bg-white px-6 py-3 text-[0.9rem] font-bold text-navy transition-all duration-200 hover:border-teal/40 hover:bg-teal-tint/40 sm:w-auto"
              >
                <PhoneIcon />
                {secondaryCtaLabel}
              </Link>
            </div>

            {consentText ? (
              <p className="font-secondary mt-4 text-fine leading-relaxed text-slate">
                {consentText}
              </p>
            ) : (
              <p className="font-secondary mt-4 text-fine text-slate">
                Talk with Joe at{" "}
                <a
                  href={PHONE_HREF}
                  className="font-semibold text-teal transition-colors hover:text-teal-dark"
                >
                  {PHONE}
                </a>{" "}
                · No obligation, no pressure
              </p>
            )}
          </div>

          {showImage ? (
            <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-mist bg-white shadow-[0_12px_40px_rgba(26,35,50,0.08)]">
              <Image
                src="/assets/joe.png"
                alt={imageAlt}
                title={imageTitle}
                width={1286}
                height={2094}
                className="mx-auto block h-auto max-h-[340px] w-full object-cover object-top sm:max-h-[380px] lg:max-h-[420px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent px-4 py-3">
                <p className="font-primary text-base font-bold text-white">
                  Joe LeBlanc
                </p>
                <p className="font-secondary text-fine text-white/70">
                  Your local Tuscaloosa cash home buyer
                </p>
              </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
