import Image from "next/image";
import Link from "next/link";

const PHONE_HREF = "tel:8037847672";

const facts = [
  { value: "7 days", label: "Fastest close time" },
  { value: "$0", label: "Commission to you" },
  { value: "24 hrs", label: "Offer turnaround" },
  { value: "W. AL", label: "Markets served" },
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

export function MeetJoe() {
  return (
    <section
      id="meet-joe"
      className="bg-hero-surface py-10"
      aria-labelledby="meet-joe-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(280px,420px)_1fr] lg:gap-16 xl:gap-20">
          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
            <div className="relative overflow-hidden rounded-2xl bg-teal-tint">
              <Image
                src="/joe.png"
                alt="Joe LeBlanc, founder of We Buy Tuscaloosa Homes"
                width={1286}
                height={2094}
                className="mx-auto block h-auto w-full max-h-[540px] object-contain object-bottom"
              />

              <div className="absolute right-4 bottom-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_8px_28px_rgba(26,35,50,0.12)] sm:right-6 sm:bottom-6">
                <div
                  className="font-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-[0.8rem] font-bold text-white"
                  aria-hidden
                >
                  JL
                </div>
                <div className="font-secondary leading-tight">
                  <strong className="block text-[0.95rem] font-bold text-navy">
                    Joe LeBlanc
                  </strong>
                  <span className="text-[0.72rem] font-semibold text-teal">
                    Founder, We Buy Tuscaloosa Homes
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-secondary mb-3 text-[0.72rem] font-bold tracking-[0.14em] text-teal uppercase">
              Your Local Buyer
            </p>
            <h2
              id="meet-joe-heading"
              className="font-primary mb-3 text-[clamp(1.65rem,3.2vw,2.2rem)] font-extrabold leading-tight tracking-tight text-navy"
            >
              Meet <em className="text-teal italic">Joe LeBlanc,</em> your local
              Tuscaloosa cash home buyer
            </h2>

            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-mist" aria-hidden />
              <span className="font-secondary text-[0.68rem] font-semibold tracking-[0.1em] text-slate uppercase">
                Founder &amp; CEO, We Buy Tuscaloosa Homes
              </span>
              <div className="h-px flex-1 bg-mist" aria-hidden />
            </div>

            <div className="font-secondary mb-7 space-y-4 text-[0.95rem] leading-relaxed text-slate">
              <p>
                Joe is the founder and CEO behind We Buy Tuscaloosa Homes, a local
                cash home buyer focused on helping homeowners in Tuscaloosa and
                across West Alabama sell simply and on their terms.
              </p>
              <p>
                Joe leads the High Noon Home Buyers family of brands, which has
                helped scores of owners across Alabama sell houses as-is for cash.
                His approach: listen first, explain the numbers in plain language,
                and never pressure anyone into a decision.
              </p>
              <p>
                When you reach out, you&apos;ll either talk directly with Joe or a
                small team member he trusts. The goal is always the same — a clear,
                honest cash offer and advice you&apos;d be comfortable sharing with
                a friend.
              </p>
            </div>

            <div className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-mist bg-white px-3 py-4 text-center"
                >
                  <p className="font-primary mb-1 text-[1.1rem] font-extrabold text-teal sm:text-[1.25rem]">
                    {fact.value}
                  </p>
                  <p className="font-secondary text-[0.62rem] font-semibold tracking-[0.08em] text-slate uppercase sm:text-[0.68rem]">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href={PHONE_HREF}
              className="font-secondary inline-flex items-center justify-center gap-2.5 rounded-full bg-teal px-6 py-3.5 text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)] sm:text-[0.95rem]"
            >
              <PhoneIcon />
              Talk Directly With Joe — Skip the Call Center
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
