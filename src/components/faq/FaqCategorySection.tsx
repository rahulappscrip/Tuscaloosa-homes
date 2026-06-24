import { forwardRef } from "react";
import type { FaqCategory } from "@/data/faq-page";
import {
  faqJoeStrip,
  faqMarketStats,
  faqPricingComparisonRows,
  faqProcessSteps,
  faqWhereWeBuyAreas,
} from "@/data/faq-page";
import { FaqAreasGrid } from "@/components/faq/FaqAreasGrid";
import { FaqCategoryAccordion } from "@/components/faq/FaqCategoryAccordion";
import { FaqJoeStrip } from "@/components/faq/FaqJoeStrip";
import { FaqMarketStats } from "@/components/faq/FaqMarketStats";
import { FaqPricingTable } from "@/components/faq/FaqPricingTable";
import { FaqProcessStrip } from "@/components/faq/FaqProcessStrip";

type FaqCategorySectionProps = {
  category: FaqCategory;
};

export const FaqCategorySection = forwardRef<HTMLElement, FaqCategorySectionProps>(
  function FaqCategorySection({ category }, ref) {
  return (
    <section
      ref={ref}
      id={category.id}
      className="scroll-mt-28 border-b border-mist py-8 last:border-b-0 lg:scroll-mt-32"
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="font-secondary text-[0.72rem] font-bold tracking-[0.14em] text-teal uppercase">
          {category.title}
        </p>
        <p className="font-secondary rounded-full bg-ice px-3 py-1 text-[0.72rem] font-semibold text-slate">
          {category.questionCount} questions
        </p>
      </div>

      <h2
        id={`${category.id}-heading`}
        className="font-primary mb-3 text-[clamp(1.25rem,2.8vw,1.75rem)] font-extrabold tracking-tight text-navy"
      >
        {category.heading}
      </h2>
      <p className="font-secondary mb-6 max-w-3xl text-[0.9rem] leading-relaxed text-slate sm:text-base">
        {category.intro}
      </p>

      {category.id === "cat-process" ? (
        <FaqProcessStrip steps={faqProcessSteps} />
      ) : null}

      {category.id === "cat-pricing" ? (
        <FaqPricingTable rows={faqPricingComparisonRows} />
      ) : null}

      {category.id === "cat-market" ? (
        <FaqMarketStats stats={faqMarketStats} />
      ) : null}

      {category.id === "cat-areas" ? (
        <FaqAreasGrid areas={faqWhereWeBuyAreas} />
      ) : null}

      {category.id === "cat-about" ? <FaqJoeStrip text={faqJoeStrip} /> : null}

      <FaqCategoryAccordion faqs={category.faqs} />
    </section>
  );
},
);
