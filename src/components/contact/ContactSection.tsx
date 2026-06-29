import Link from "next/link";
import { OfferForm } from "@/components/OfferForm";

const PHONE = "(803) 784-7672";
const PHONE_HREF = "tel:8037847672";
const EMAIL = "joe@webuytuscaloosahomes.com";
const EMAIL_HREF = `mailto:${EMAIL}`;

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5L16.5 13l4 1.5V17a2 2 0 01-2 2C9.6 19 5 14.4 5 8.5A2.5 2.5 0 016.5 4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}

const trustPoints = [
  "BBB A+ Accredited",
  "5.0 ★ · 103+ Google reviews",
  "Written offer within 48 hours",
  "No obligation · No pressure",
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-hero-surface py-10"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,450px)] lg:gap-12 xl:gap-16">
          <div>
            <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
              Contact Us
            </p>
            <h1
              id="contact-heading"
              className="font-primary mb-4 max-w-xl text-[clamp(1.85rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-navy"
            >
              Talk directly with{" "}
              <span className="text-teal">Joe LeBlanc</span> — no call center
            </h1>
            <p className="font-secondary mb-8 max-w-lg text-base leading-relaxed text-slate">
              Whether you want a free home value estimate, a written cash offer,
              or just have questions about selling in Tuscaloosa — Joe responds
              personally. Call, email, or fill out the form.
            </p>

            <div className="mb-8 space-y-4">
              <a
                href={PHONE_HREF}
                className="group flex items-start gap-4 rounded-xl border border-mist bg-white p-5 transition-all hover:border-teal/35 hover:shadow-[0_8px_24px_rgba(26,35,50,0.06)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="font-secondary block text-[0.72rem] font-semibold tracking-[0.08em] text-slate uppercase">
                    Phone
                  </span>
                  <span className="font-primary block text-[1.05rem] font-bold text-navy">
                    {PHONE}
                  </span>
                  <span className="font-secondary text-[0.84rem] text-slate">
                    Call or text — Joe answers personally
                  </span>
                </span>
              </a>

              <a
                href={EMAIL_HREF}
                className="group flex items-start gap-4 rounded-xl border border-mist bg-white p-5 transition-all hover:border-teal/35 hover:shadow-[0_8px_24px_rgba(26,35,50,0.06)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <MailIcon />
                </span>
                <span className="min-w-0">
                  <span className="font-secondary block text-[0.72rem] font-semibold tracking-[0.08em] text-slate uppercase">
                    Email
                  </span>
                  <span className="font-primary block break-all text-[1.05rem] font-bold text-navy">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-mist bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <PinIcon />
                </span>
                <address className="font-secondary not-italic">
                  <span className="block text-[0.72rem] font-semibold tracking-[0.08em] text-slate uppercase">
                    Office
                  </span>
                  <span className="font-primary mt-1 block text-[1rem] font-bold text-navy">
                    We Buy Tuscaloosa Homes
                  </span>
                  <span className="mt-1 block text-[0.9rem] leading-relaxed text-slate">
                    1301 McFarland Blvd N, Suite 200
                    <br />
                    Tuscaloosa, AL 35406
                  </span>
                </address>
              </div>
            </div>

            <ul className="flex flex-wrap gap-2.5">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="font-secondary rounded-full border border-teal/25 bg-white px-3.5 py-2 text-[0.78rem] font-semibold text-teal-dark"
                >
                  {point}
                </li>
              ))}
            </ul>

            <p className="font-secondary mt-8 text-[0.88rem] leading-relaxed text-slate">
              Wondering what your home is worth first?{" "}
              <Link
                href="/how-much-is-my-house-worth-tuscaloosa-al"
                className="font-semibold text-teal underline decoration-teal/30 underline-offset-2 transition-colors hover:text-teal-dark"
              >
                See our Tuscaloosa home value guide
              </Link>
              .
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <OfferForm />
          </div>
        </div>
      </div>
    </section>
  );
}
