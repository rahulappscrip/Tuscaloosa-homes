import Image from "next/image";
import Link from "next/link";

const PHONE_HREF = "tel:8037847672";
const PHONE_DISPLAY = "(803) 784-7672";

const sellReasons = [
  "Facing foreclosure",
  "Inherited / estate property",
  "Divorce or separation",
  "Relocating for work",
  "Tired landlord",
  "Financial hardship",
  "Too much work needed",
  "Other",
];

const benefits = [
  "No repairs or cleaning",
  "Close in 7 days or your schedule",
  "No open houses or showings",
];

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
              src="/joe.png"
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
          <p className="font-secondary mb-1 text-[0.68rem] font-bold tracking-[0.12em] text-teal uppercase">
            Your Local Buyer
          </p>
          <h2 className="font-primary text-[1.35rem] font-extrabold text-navy sm:text-[1.5rem]">
            Joe LeBlanc
          </h2>
          <p className="font-secondary mt-0.5 text-[0.88rem] font-semibold text-teal">
            Founder, We Buy Tuscaloosa Homes
          </p>
          <p className="font-secondary mt-2 text-[0.84rem] leading-relaxed text-slate">
            Local cash buyer serving Tuscaloosa &amp; West Alabama — you talk
            directly with Joe, not a call center.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-mist bg-navy px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="font-secondary text-center text-[0.78rem] leading-snug text-white/75 sm:text-left">
          <span className="block font-semibold text-white">
            103+ verified reviews · BBB A+ Rated
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

function FormField({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="font-secondary mb-1.5 block text-[0.8rem] font-semibold text-charcoal">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "font-secondary w-full rounded-lg border border-mist bg-white px-4 py-3 text-[0.9rem] text-charcoal outline-none transition-colors placeholder:text-slate/50 focus:border-teal focus:ring-2 focus:ring-teal/15";

export function Hero() {
  return (
    <section id="hero" className="bg-hero-surface lg:overflow-hidden">
      <div className="mx-auto w-full max-w-[1300px] px-6 py-10 sm:py-12 lg:py-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
          {/* Content + Joe card on desktop */}
          <div className="order-1 flex flex-col gap-6 lg:col-start-1 lg:row-start-1">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-4 w-1 shrink-0 rounded-full bg-teal" aria-hidden />
              <span className="font-secondary text-[0.85rem] font-semibold text-teal">
                Tuscaloosa, Alabama
              </span>
            </div>

            <h1 className="font-primary mb-3 max-w-xl text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.1] font-extrabold tracking-tight text-charcoal">
              We Buy Homes For Cash In{" "}
              <span className="text-teal">Tuscaloosa, Alabama</span>
            </h1>

            <p className="font-secondary mb-4 max-w-xl text-[0.95rem] leading-relaxed text-slate">
            We buy homes for cash in Tuscaloosa, Alabama, as-is, and can close in as little as 7 days on the timeline that works for you. When you work with We Buy Tuscaloosa Homes and Joe LeBlanc, you skip listings, showings, repairs, and real estate commissions and go straight to a guaranteed cash buyer.
            </p>

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

            <div className="hidden lg:block">
              <JoeProfileCard />
            </div>
          </div>

          {/* Form */}
          <div className="order-2 flex w-full flex-col items-center lg:col-start-2 lg:row-start-1 lg:items-end lg:self-start">
            <div
              id="offer-form"
              className="w-full max-w-[450px] rounded-2xl bg-white px-5 py-6 text-charcoal shadow-[0_12px_40px_rgba(26,35,50,0.08)] sm:px-6 sm:py-7"
            >
              <h2 className="font-primary mb-3 text-[clamp(1.35rem,2.5vw,1.75rem)] leading-tight font-extrabold text-charcoal">
                Get Your <span className="text-teal">Cash Offer</span> Today
              </h2>
              <p className="font-secondary mb-5 text-[0.875rem] leading-relaxed text-slate">
                Share a few details about your property and get a fair local cash
                offer in 24 hours. No obligation. No pressure.
              </p>

              <form className="space-y-4" action="#" method="post">
                <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="First Name">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    className={inputClass}
                    autoComplete="given-name"
                  />
                </FormField>
                <FormField label="Last Name">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Smith"
                    className={inputClass}
                    autoComplete="family-name"
                  />
                </FormField>
              </div>

              <FormField label="Property Address in Tuscaloosa">
                <input
                  type="text"
                  name="address"
                  placeholder="123 Main St, Tuscaloosa, AL 35401"
                  className={inputClass}
                  autoComplete="street-address"
                />
              </FormField>

              <FormField label="Why Are You Looking to Sell?">
                <select name="reason" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a reason
                  </option>
                  {sellReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </FormField>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Phone">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(205) 555-0100"
                    className={inputClass}
                    autoComplete="tel"
                  />
                </FormField>
                <FormField label="Email (optional)">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className={inputClass}
                    autoComplete="email"
                  />
                </FormField>
              </div>

                <button
                  type="submit"
                  className="font-secondary mt-2 w-full cursor-pointer rounded-lg bg-teal px-5 py-3.5 text-[0.95rem] font-bold text-white transition-colors hover:bg-teal-dark"
                >
                  Get My Fair Cash Offer →
                </button>

                <p className="font-secondary mb-0 text-[0.72rem] leading-snug text-slate">
                  By submitting you agree to receive SMS, calls, and emails about
                  your property inquiry from We Buy Tuscaloosa Homes. Reply STOP
                  to opt out. Your info is never sold.
                </p>
              </form>
            </div>
          </div>

          {/* Joe card — after form on mobile only */}
          <div className="order-3 mb-8 w-full lg:hidden">
            <JoeProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
