import type { ReactNode } from "react";
import Link from "next/link";

type PricingOperatorVariant = "arv" | "minus" | "equals";

export type PricingFormulaRow = {
  id: string;
  operator: string;
  operatorVariant: PricingOperatorVariant;
  title: string;
  description: string;
};

export type PricingFormulaSummary = {
  lines: readonly string[];
  result: string;
  note: string;
  ctaLabel: string;
};

type PricingFormulaProps = {
  sectionId?: string;
  className?: string;
  eyebrow?: string;
  heading?: ReactNode;
  description?: string;
  rows: readonly PricingFormulaRow[];
  formula: PricingFormulaSummary;
  includes?: readonly string[];
  ctaHref?: string;
};

const operatorBoxStyles = {
  arv: "bg-navy text-teal",
  minus: "bg-ice text-slate",
  equals: "bg-teal text-white",
} as const;

function OperatorBadge({
  operator,
  variant,
}: {
  operator: string;
  variant: PricingOperatorVariant;
}) {
  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${operatorBoxStyles[variant]}`}
      aria-hidden
    >
      <span
        className={`font-primary font-extrabold leading-none ${
          variant === "arv"
            ? "text-[0.72rem] tracking-[0.06em]"
            : "text-[1.35rem]"
        }`}
      >
        {operator}
      </span>
    </div>
  );
}

function FormulaSidebar({
  formula,
  ctaHref,
}: {
  formula: PricingFormulaSummary;
  ctaHref: string;
}) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-2xl bg-navy shadow-[0_12px_40px_rgba(26,35,50,0.14)]">
        <div className="p-6 sm:p-8">
          <p className="font-secondary mb-5 text-[0.68rem] font-bold tracking-[0.14em] text-teal uppercase">
            The Formula
          </p>

          <div className="font-secondary space-y-1.5 text-[0.92rem] leading-relaxed text-white/65 sm:text-[0.95rem]">
            {formula.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className="font-primary mt-4 text-[1.2rem] font-extrabold text-white sm:text-[1.3rem]">
            = {formula.result}
          </p>

          <p className="font-secondary mt-5 text-[0.88rem] leading-relaxed text-white/45 sm:text-[0.9rem]">
            {formula.note}
          </p>

          <Link
            href={ctaHref}
            className="font-secondary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal px-5 py-3.5 text-center text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(43,188,212,0.4)]"
          >
            {formula.ctaLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
}

export function PricingFormula({
  sectionId = "offer-math",
  className = "bg-white py-10",
  eyebrow = "Transparent Pricing",
  heading = (
    <>
      How we determine your{" "}
      <em className="text-teal italic">Tuscaloosa home value and cash offer</em>
    </>
  ),
  description = "Every offer follows the same transparent formula. Joe walks you through every line before you decide anything — no hidden fees, no surprise deductions.",
  rows,
  formula,
  includes,
  ctaHref = "#contact",
}: PricingFormulaProps) {
  return (
    <section
      id={sectionId}
      className={className}
      aria-labelledby="pricing-formula-heading"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="font-secondary mb-3 text-eyebrow font-bold tracking-[0.14em] text-teal uppercase">
            {eyebrow}
          </p>
          <h2
            id="pricing-formula-heading"
            className="font-primary mb-4 text-[clamp(1.65rem,3.5vw,2.35rem)] font-extrabold tracking-tight text-navy"
          >
            {heading}
          </h2>
          <p className="font-secondary mx-auto max-w-[620px] text-base leading-relaxed text-slate">
            {description}
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-14">
          <ol className="divide-y divide-mist border-y border-mist">
            {rows.map((row) => (
              <li key={row.id} className="flex gap-5 py-6 sm:gap-6 sm:py-7">
                <OperatorBadge
                  operator={row.operator}
                  variant={row.operatorVariant}
                />
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-primary mb-2 text-[1rem] font-bold text-navy sm:text-[1.05rem]">
                    {row.title}
                  </h3>
                  <p className="font-secondary text-[0.9rem] leading-relaxed text-slate sm:text-base">
                    {row.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <FormulaSidebar formula={formula} ctaHref={ctaHref} />
        </div>

        {includes && includes.length > 0 ? (
          <p className="font-secondary mx-auto mt-10 max-w-[760px] text-center text-[0.9rem] leading-relaxed text-slate sm:text-base">
            {includes.map((item, index) => (
              <span key={item}>
                <span className="font-bold text-teal" aria-hidden>
                  ✓{" "}
                </span>
                {item}
                {index < includes.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
