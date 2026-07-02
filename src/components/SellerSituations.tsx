import Image from "next/image";
import Link from "next/link";
import { sellerSituations } from "@/data/situations";
import {
  transparentPricingFormula,
  transparentPricingIncludes,
  transparentPricingRows,
} from "@/data/how-it-works";

const featuredSituationIds = [
  "foreclosure",
  "inherited-probate",
  "sell-as-is",
  "tired-landlord",
  "divorce",
  "relocating",
] as const;

const featuredSituations = featuredSituationIds.map(
  (id) => sellerSituations.find((situation) => situation.id === id)!,
);

type SituationItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  imageTitle?: string;
};

type PricingOperatorVariant = "arv" | "minus" | "equals";

type PricingRow = {
  id: string;
  operator: string;
  operatorVariant: PricingOperatorVariant;
  title: string;
  description: string;
};

type HelpRow = {
  num: string;
  title: string;
  description: string;
};

type QuickAnswerItem = {
  question: string;
  answer: string;
  highlight: string;
};

type SellerSituationsProps = {
  layout?: "situations" | "pricing" | "rows" | "quick-answers";
  sectionId?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  situations?: readonly SituationItem[];
  footerText?: string | null;
  pricingRows?: readonly PricingRow[];
  pricingIncludes?: readonly string[];
  pricingFormula?: {
    lines: readonly string[];
    result: string;
    note: string;
    ctaLabel: string;
  };
  ctaHref?: string;
  sectionClassName?: string;
  helpRows?: readonly HelpRow[];
  quickAnswers?: readonly QuickAnswerItem[];
};

const operatorHeaderStyles = {
  arv: "bg-navy",
  minus: "bg-ice",
  equals: "bg-teal",
} as const;

const operatorTextStyles = {
  arv: "text-teal",
  minus: "text-slate",
  equals: "text-white",
} as const;

function PricingOperatorBadge({
  operator,
  variant,
}: {
  operator: string;
  variant: PricingOperatorVariant;
}) {
  return (
    <span
      className={`font-primary text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold ${operatorTextStyles[variant]}`}
    >
      {operator}
    </span>
  );
}

function SituationCard({
  id,
  title,
  description,
  image,
  imageAlt,
  imageTitle,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageTitle?: string;
}) {
  return (
    <article
      id={id}
      className="group scroll-mt-28 overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(26,35,50,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(26,35,50,0.1)]"
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          title={imageTitle ?? imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-primary mb-2 text-[1rem] font-bold text-navy">
          {title}
        </h3>
        <p className="font-secondary text-base leading-relaxed text-slate">
          {description}
        </p>
      </div>
    </article>
  );
}

function PricingCard({ row }: { row: PricingRow }) {
  return (
    <article
      className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(26,35,50,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(26,35,50,0.1)]"
    >
      <div
        className={`relative flex aspect-[5/3] w-full items-center justify-center ${operatorHeaderStyles[row.operatorVariant]}`}
      >
        <PricingOperatorBadge
          operator={row.operator}
          variant={row.operatorVariant}
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-primary mb-2 text-[1rem] font-bold text-navy">
          {row.title}
        </h3>
        <p className="font-secondary text-base leading-relaxed text-slate">
          {row.description}
        </p>
      </div>
    </article>
  );
}

function SectionHeader({
  eyebrow,
  heading,
  description,
  headingId,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  headingId: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
      >
        {heading}
      </h2>
      {description ? (
        <p className="font-secondary mx-auto max-w-[540px] text-base leading-relaxed text-slate">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function QuickAnswerText({ answer, highlight }: QuickAnswerItem) {
  const parts = answer.split(highlight);

  if (parts.length === 2) {
    return (
      <>
        {parts[0]}
        <strong className="font-bold text-white">{highlight}</strong>
        {parts[1]}
      </>
    );
  }

  return answer;
}

function QuickAnswersLayout({
  sectionId = "situations",
  eyebrow = "Quick Answers",
  heading = "Quick Answers to the Most Urgent Questions",
  description = "",
  quickAnswers = [],
  sectionClassName = "bg-hero-surface py-10",
}: SellerSituationsProps & { quickAnswers: readonly QuickAnswerItem[] }) {
  return (
    <section
      id={sectionId}
      className={sectionClassName}
      aria-labelledby="seller-situations-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id="seller-situations-heading"
            className="font-primary text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            {heading}
          </h2>
          {description ? (
            <p className="font-secondary mx-auto mt-4 max-w-[540px] text-base leading-relaxed text-slate">
              {description}
            </p>
          ) : null}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-4">
          {quickAnswers.map((item) => (
            <article
              key={item.question}
              className="rounded-xl bg-navy p-6 sm:p-7 lg:p-8"
            >
              <h3 className="font-primary mb-3 text-[0.95rem] font-bold text-teal sm:text-[1rem]">
                {item.question}
              </h3>
              <p className="font-secondary text-[0.875rem] leading-relaxed text-white/80 sm:text-[0.9rem]">
                <QuickAnswerText {...item} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RowsLayout({
  sectionId = "situations",
  eyebrow = "Who We Help",
  heading = "Who we help when we buy homes in Tuscaloosa",
  description = "We work with Tuscaloosa homeowners in all kinds of situations — but these are the scenarios we handle most often, and where a cash sale tends to make the clearest sense.",
  helpRows,
  sectionClassName = "bg-hero-surface py-10",
}: SellerSituationsProps & { helpRows: readonly HelpRow[] }) {
  return (
    <section
      id={sectionId}
      className={sectionClassName}
      aria-labelledby="seller-situations-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          description={description}
          headingId="seller-situations-heading"
        />
        <div className="mt-2 divide-y divide-mist border-y border-mist">
          {helpRows.map((row) => (
            <article
              key={row.num}
              className="grid gap-4 py-5 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-6"
            >
              <p
                className="font-primary text-[1.75rem] font-extrabold leading-none tracking-tight text-ice tabular-nums"
                aria-hidden
              >
                {row.num}
              </p>
              <div>
                <h3 className="font-primary mb-2 text-[0.95rem] font-bold text-navy">
                  {row.title}
                </h3>
                <p className="font-secondary text-[0.84rem] leading-relaxed text-slate">
                  {row.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingLayout({
  sectionId = "offer-math",
  eyebrow = "Transparent Pricing",
  heading = (
    <>
      What it really costs to sell your house for cash in{" "}
      <em className="text-teal italic">Tuscaloosa</em>
    </>
  ),
  description = "The offer is based on a simple, transparent formula. Here's exactly how it works — and what's included.",
  pricingRows = transparentPricingRows,
  pricingIncludes = transparentPricingIncludes,
  pricingFormula = transparentPricingFormula,
  ctaHref = "#contact",
  sectionClassName = "bg-hero-surface py-10",
}: SellerSituationsProps) {
  return (
    <section
      id={sectionId}
      className={sectionClassName}
      aria-labelledby="transparent-pricing-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <SectionHeader
          eyebrow={eyebrow}
          heading={heading}
          description={description}
          headingId="transparent-pricing-heading"
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {pricingRows.map((row) => (
            <PricingCard key={row.id} row={row} />
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border-t-4 border-teal bg-navy shadow-[0_8px_32px_rgba(26,35,50,0.12)] sm:mt-8">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-10">
            <div>
              <p className="font-secondary mb-4 text-[0.68rem] font-bold tracking-[0.14em] text-teal uppercase">
                The Formula
              </p>
              <div className="font-secondary mb-3 space-y-1 text-[0.95rem] leading-loose text-white/70 sm:text-base">
                {pricingFormula.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="font-primary text-[1.15rem] font-extrabold text-white sm:text-[1.25rem]">
                = {pricingFormula.result}
              </p>
              <p className="font-secondary mt-4 max-w-2xl text-[0.88rem] leading-relaxed text-white/45 sm:text-[0.9rem]">
                {pricingFormula.note}
              </p>
            </div>
            <Link
              href={ctaHref}
              className="font-secondary inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-teal px-6 py-3.5 text-center text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)] lg:w-auto lg:min-w-[240px]"
            >
              {pricingFormula.ctaLabel}
            </Link>
          </div>
        </div>

        <p className="font-secondary mx-auto mt-10 max-w-[720px] text-center text-base leading-relaxed text-slate">
          {pricingIncludes.map((item, index) => (
            <span key={item}>
              <span className="font-bold text-teal" aria-hidden>
                ✓{" "}
              </span>
              {item}
              {index < pricingIncludes.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export function SellerSituations({
  layout = "situations",
  sectionId = "situations",
  eyebrow,
  heading,
  description,
  situations = featuredSituations,
  footerText = "If you see your situation in this list—or even if you're not sure—Joe will walk you through options so you can decide what feels right.",
  pricingRows,
  pricingIncludes,
  pricingFormula,
  ctaHref = "#contact",
  sectionClassName,
  helpRows,
  quickAnswers,
}: SellerSituationsProps) {
  if (layout === "quick-answers" && quickAnswers) {
    return (
      <QuickAnswersLayout
        sectionId={sectionId}
        eyebrow={eyebrow ?? "Quick Answers"}
        heading={heading ?? "Quick Answers to the Most Urgent Questions"}
        description={description ?? ""}
        quickAnswers={quickAnswers}
        sectionClassName={sectionClassName}
      />
    );
  }

  if (layout === "rows" && helpRows) {
    return (
      <RowsLayout
        sectionId={sectionId}
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        helpRows={helpRows}
        sectionClassName={sectionClassName}
      />
    );
  }

  if (layout === "pricing") {
    return (
      <PricingLayout
        sectionId={sectionId}
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        pricingRows={pricingRows}
        pricingIncludes={pricingIncludes}
        pricingFormula={pricingFormula}
        ctaHref={ctaHref}
        sectionClassName={sectionClassName}
      />
    );
  }

  return (
    <section
      id={sectionId}
      className={sectionClassName ?? "bg-hero-surface py-10"}
      aria-labelledby="seller-situations-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <SectionHeader
          eyebrow={eyebrow ?? "Who Joe helps"}
          heading={
            heading ?? (
              <>
                Who We Help When We Buy Homes for Cash in{" "}
                <em className="text-teal italic">Tuscaloosa</em>
              </>
            )
          }
          description={
            description ??
            "Joe helps a wide range of homeowners who need to sell quickly and want a straightforward path to the closing table. We buy Tuscaloosa homes in every situation — here are the people we help most."
          }
          headingId="seller-situations-heading"
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {situations.map((situation) => (
            <SituationCard
              key={situation.id}
              id={situation.id}
              title={situation.title}
              description={situation.description}
              image={situation.image}
              imageAlt={situation.imageAlt ?? situation.title}
              imageTitle={situation.imageTitle}
            />
          ))}
        </div>

        {footerText ? (
          <p className="font-secondary mx-auto mt-10 max-w-[620px] text-center text-base leading-relaxed text-slate">
            {footerText}
          </p>
        ) : null}
      </div>
    </section>
  );
}
