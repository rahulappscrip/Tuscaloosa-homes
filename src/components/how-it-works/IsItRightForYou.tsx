import Link from "next/link";
import { isItRightContent } from "@/data/how-it-works";

const PHONE_HREF = "tel:8037847672";

type IsItRightForYouProps = {
  variant?: "default" | "trust-compare";
  eyebrow?: string;
  heading?: string;
  description?: string;
  goodTitle?: string;
  goodItems?: readonly string[];
  considerTitle?: string;
  considerItems?: readonly string[];
  considerNote?: string | null;
  showIntroBand?: boolean;
  showFooter?: boolean;
  footnote?: React.ReactNode;
  headingId?: string;
};

function TrustCompareGrid({
  goodTitle,
  goodItems,
  considerTitle,
  considerItems,
}: {
  goodTitle: string;
  goodItems: readonly string[];
  considerTitle: string;
  considerItems: readonly string[];
}) {
  return (
    <div className="mt-7 overflow-hidden rounded-xl border border-mist lg:grid lg:grid-cols-2">
      <div className="bg-navy p-6 sm:p-7">
        <p className="font-secondary mb-4 text-[0.68rem] font-bold tracking-[0.12em] text-teal/80 uppercase">
          {goodTitle}
        </p>
        <ul className="space-y-2.5">
          {goodItems.map((item) => (
            <li
              key={item}
              className="font-secondary flex items-start gap-2 text-[0.82rem] leading-relaxed text-white/78 before:mt-0.5 before:shrink-0 before:font-bold before:text-teal before:content-['✓']"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-mist bg-white p-6 sm:p-7 lg:border-t-0 lg:border-l">
        <p className="font-secondary mb-4 text-[0.68rem] font-bold tracking-[0.12em] text-slate uppercase">
          {considerTitle}
        </p>
        <ul className="space-y-2.5">
          {considerItems.map((item) => (
            <li
              key={item}
              className="font-secondary flex items-start gap-2 text-[0.82rem] leading-relaxed text-slate before:mt-0.5 before:shrink-0 before:text-slate/40 before:content-['→']"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function IsItRightForYou({
  variant = "default",
  eyebrow = "Is It Right for You?",
  heading = "Is selling your Tuscaloosa house for cash the right move?",
  description = "A cash sale isn't right for every seller. Here's an honest look at when it makes the most sense — and when listing with an agent might serve you better.",
  goodTitle = isItRightContent.goodTitle,
  goodItems = isItRightContent.goodItems,
  considerTitle = isItRightContent.considerTitle,
  considerItems = isItRightContent.considerItems,
  considerNote = isItRightContent.considerNote,
  showIntroBand = true,
  showFooter = true,
  footnote,
  headingId = "is-it-right-heading",
}: IsItRightForYouProps) {
  if (variant === "trust-compare") {
    return (
      <section
        className="bg-white py-10"
        aria-labelledby={headingId}
      >
        <div className="mx-auto max-w-[1300px] px-6">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="font-primary mb-4 max-w-3xl text-[clamp(1.65rem,3.2vw,2.2rem)] font-extrabold leading-tight tracking-tight text-navy"
          >
            {heading}
          </h2>
          <p className="font-secondary mb-0 max-w-3xl text-base leading-relaxed text-slate">
            {description}
          </p>
          <TrustCompareGrid
            goodTitle={goodTitle}
            goodItems={goodItems}
            considerTitle={considerTitle}
            considerItems={considerItems}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      className="bg-white py-10"
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="overflow-hidden rounded-2xl border border-mist shadow-[0_8px_32px_rgba(26,35,50,0.06)]">
          {showIntroBand ? (
            <div className="relative bg-navy px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-teal/10 blur-3xl"
                aria-hidden
              />
              <div className="relative max-w-3xl">
                <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
                  {eyebrow}
                </p>
                <h2
                  id={headingId}
                  className="font-primary mb-4 text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold leading-tight tracking-tight text-white"
                >
                  {heading}
                </h2>
                <p className="font-secondary max-w-2xl text-base leading-relaxed text-white/70">
                  {description}
                </p>
              </div>
            </div>
          ) : null}

          <div className="grid md:grid-cols-2 md:divide-x md:divide-mist">
            <div className="border-t-4 border-teal bg-white p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="font-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-lg font-extrabold text-teal"
                  aria-hidden
                >
                  ✓
                </span>
                <h3 className="font-primary text-[1rem] font-extrabold leading-snug text-navy sm:text-[1.05rem]">
                  {goodTitle}
                </h3>
              </div>
              <ul className="space-y-3">
                {goodItems.map((item) => (
                  <li
                    key={item}
                    className="font-secondary flex items-start gap-3 text-[0.88rem] leading-relaxed text-slate sm:text-[0.9rem]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-4 border-gold bg-hero-surface p-6 sm:border-t-0 sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="font-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-lg font-extrabold text-gold"
                  aria-hidden
                >
                  →
                </span>
                <h3 className="font-primary text-[1rem] font-extrabold leading-snug text-navy sm:text-[1.05rem]">
                  {considerTitle}
                </h3>
              </div>
              <ul className="space-y-3">
                {considerItems.map((item) => (
                  <li
                    key={item}
                    className="font-secondary flex items-start gap-3 text-[0.88rem] leading-relaxed text-slate sm:text-[0.9rem]"
                  >
                    <span
                      className="mt-0.5 shrink-0 font-bold text-gold"
                      aria-hidden
                    >
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              {considerNote ? (
                <p className="font-secondary mt-5 rounded-xl border border-mist bg-white px-4 py-3.5 text-[0.84rem] leading-relaxed text-slate">
                  {considerNote}
                </p>
              ) : null}
            </div>
          </div>

          {showFooter ? (
            <div className="border-t border-mist bg-ice px-6 py-4 text-center sm:px-8">
              <p className="font-secondary text-[0.88rem] text-slate">
                Not sure which applies?{" "}
                <Link
                  href={PHONE_HREF}
                  className="font-semibold text-teal transition-colors hover:text-teal-dark"
                >
                  Call Joe for an honest opinion
                </Link>{" "}
                — no cost, no pressure.
              </p>
            </div>
          ) : null}
        </div>

        {footnote ? (
          <p className="font-secondary mt-6 max-w-3xl text-[0.88rem] leading-relaxed text-slate">
            {footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
