import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LocalMarket } from "@/components/LocalMarket";
import { ServiceArea } from "@/components/ServiceArea";
import { HomeWorthBreadcrumb } from "@/components/home-worth/HomeWorthBreadcrumb";
import { HomeWorthPageSchema } from "@/components/home-worth/HomeWorthPageSchema";
import { MeetTheBuyer } from "@/components/home-worth/MeetTheBuyer";
import { PricingFormula } from "@/components/home-worth/PricingFormula";
import { ValuationMethods } from "@/components/home-worth/ValuationMethods";
import { WhatWeBuy } from "@/components/home-worth/WhatWeBuy";
import { SellerSituations } from "@/components/SellerSituations";
import { Testimonials } from "@/components/Testimonials";
import {
  homeWorthFaqs,
  homeWorthHousingMarketColumns,
  homeWorthHousingMarketStats,
  homeWorthProcessFootnote,
  homeWorthProcessSteps,
  homeWorthPricingFormula,
  homeWorthPricingIncludes,
  homeWorthPricingRows,
  homeWorthPropertyTypes,
  homeWorthTestimonialSlides,
  homeWorthTestimonialsContent,
  homeWorthWhatWeBuyContent,
  homeWorthWhoJoeHelpsContent,
  homeWorthWhoJoeHelpsSituations,
  homeWorthValueRangeColumns,
  homeWorthValueRangeCta,
  homeWorthValueRangeFootnote,
  homeWorthValueRangeRows,
} from "@/data/home-worth";

export const metadata: Metadata = {
  title: "What Is My Home Worth in Tuscaloosa, AL?",
  description:
    "Wondering what your home is worth in Tuscaloosa, AL? See real 2026 market data and get a fast, no-obligation cash offer from a local buyer — no repairs, no fees.",
  keywords: [
    "how much is my house worth tuscaloosa al"
  ],
  alternates: {
    canonical: "/how-much-is-my-house-worth-tuscaloosa-al",
  },
};

const PHONE = "(803) 784-7672";

const homeWorthValuationMethods = [
  {
    subtitle: "Factor 01",
    title: "Location & Neighborhood",
    description:
      "Homes near the University of Alabama, north of the river in Northport, or in Forest Lake typically command higher prices than those in more rural or industrial corridors. Your specific street, flood zone status, and proximity to schools and employment all factor in.",
  },
  {
    subtitle: "Factor 02",
    title: "Property Condition",
    description:"This is the biggest variable for sellers considering a cash sale. An updated, move-in-ready home may be worth $40,000–$70,000 more than the same house with a failing roof, outdated HVAC, or foundation issues. Joe prices condition honestly — and you don't have to fix anything.",
  },
  {
    subtitle: "Factor 03",
    title: "Size & Layout",
    description:
      "Square footage, bedroom count, and lot size all contribute to value, but layout matters too. Open floor plans and functional bedroom-to-bath ratios appeal to more buyers. Unusual configurations or converted spaces can limit your buyer pool on the MLS but don't affect cash buyers.",
  },
  {
    subtitle: "Factor 04",
    title: "Recent Comparable Sales",
    description:
      "What similar homes in your neighborhood actually sold for in the past 3–6 months is the most direct indicator of your home's value. Joe researches these comps before building your offer — the same data an appraiser would use.",
  },
  {
    subtitle: "Factor 05",
    title: "Market Timing",
    description:
      "In 2026, Tuscaloosa homes in good condition go pending in about 33 days. Homes needing work or priced above market sit longer and often require price reductions. For sellers with a deadline, waiting for the right buyer is a real risk — a cash sale removes that variable entirely.",
  },
  {
    subtitle: "Factor 06",
    title: "How You Sell",
    description:
      "Selling via an agent can yield a higher gross price — but after commissions (5–6%), repairs, staging, and months of carrying costs, the net is often closer to a cash offer than sellers expect. The right path depends on your situation, not just the number on paper."
  },
] as const;

export default function HomeWorthPage() {
  return (
    <>
      <HomeWorthPageSchema />
      <HomeWorthBreadcrumb />
      <Hero
        eyebrow="How Much Is My House Worth? · Tuscaloosa, AL"
        heading={
          <>
            What Is My Home Worth
            in <span className="text-teal">Tuscaloosa, AL</span>
          </>
        }
        description="Get a real, as-is estimate for your Tuscaloosa home — based on local 2026 sales data and your property's actual condition. Then get a written cash offer within 48 hours."
        showBenefits={false}
        showJoeCard={true}
        rightPanel="calculator"
        calculatorCtaHref="/contact"
      />
      <LocalMarket
        eyebrow="Why This Matters"
        heading={
          <>
            Why your Tuscaloosa home value matters when you need to{" "}
            <span className="text-teal">Sell Fast</span>
          </>
        }
        paragraphs={[
          "Your home's value isn't a single number — it's a range that depends on condition, location, the current market, and how you sell. A fully updated home listed on the MLS may fetch close to the median Tuscaloosa price of $271,050. An inherited property with deferred maintenance, or one that needs major repairs, will land well below that — especially on the open market where financed buyers can't purchase properties with significant defects.",
          "Understanding your as-is value helps you make a confident decision: whether to fund repairs and list, or sell directly to a local cash buyer who prices the work in upfront. Joe gives you a real number, explains the math, and lets you compare it with whatever a realtor tells you — no pressure either way.",
          "One thing that doesn't change regardless of path: knowing your number gives you control.",
        ]}
        stats={[
          {
            value: "$271,050",
            label: "Median sale price",
            accent: "gold",
          },
          {
            value: "33 days",
            label: "Avg. days on MLS",
            accent: "gold",
          },
          {
            value: "5–6%",
            label: "Typical agent commission",
            accent: "gold",
          },
          {
            value: "7–21 days",
            label: "Cash offer close time",
            accent: "gold",
          },
        ]}
        benefits={null}
        showResourceLinks={false}
        showSidebarCta={false}
        ctaHref="/contact"
      />
      <ValuationMethods
        eyebrow="What Drives Your Number"
        heading={
          <>
            What factors affect your home value in{" "}
            <span className="text-teal"> Tuscaloosa, AL?</span>
          </>
        }
        description="Home value in Tuscaloosa is determined by a combination of location, condition, size, and current market dynamics. Here are the six factors that matter most when a local buyer or appraiser evaluates your property."
        methods={homeWorthValuationMethods}
        recommendedIndex={null}
        ctaHref="/contact"
        ctaLabel="Get My Free Home Value Estimate →"
      />
      <ComparisonTable
        id="value-ranges"
        eyebrow="2026 Value Ranges"
        heading="Typical Tuscaloosa home value ranges by condition"
        description="These are rough ranges based on current Tuscaloosa market data. Your actual number depends on location, size, and specific condition — Joe's walkthrough gives you the precise figure."
        columns={homeWorthValueRangeColumns}
        rows={homeWorthValueRangeRows}
        footnote={homeWorthValueRangeFootnote}
        bottomCta={homeWorthValueRangeCta}
        showCta={false}
      />
      <LocalMarket
        layout="overview"
        sectionId="housing-market"
        className="bg-hero-surface"
        eyebrow="Tuscaloosa Market · 2026"
        heading="Tuscaloosa, AL housing market: what homeowners need to know"
        stats={homeWorthHousingMarketStats}
        columns={homeWorthHousingMarketColumns}
        showResourceLinks={false}
        footerNote={
          <>
            For full statewide market context, the{" "}
            <a
              href="https://www.alaor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal underline decoration-teal/30 underline-offset-2 transition-colors hover:text-teal-dark hover:decoration-teal"
            >
              Alabama Association of Realtors
            </a>{" "}
            publishes quarterly market stats. Joe follows the same data but keeps
            his offer explanation simple and in plain language.
          </>
        }
      />
      <HowItWorks
        variant="about"
        sectionId="cash-value-process"
        className="bg-hero-surface"
        eyebrow="The Process"
        heading="How does a cash home value offer work in Tuscaloosa?"
        description="Four steps from first contact to cash in hand — and you control the timeline at every stage."
        steps={homeWorthProcessSteps}
        footnote={homeWorthProcessFootnote}
      />
      <SellerSituations
        sectionId="who-joe-helps"
        eyebrow={homeWorthWhoJoeHelpsContent.eyebrow}
        heading={
          <>
            Who we help with home value and fast cash offers in{" "}
            <em className="text-teal italic">Tuscaloosa</em>
          </>
        }
        description={homeWorthWhoJoeHelpsContent.description}
        situations={homeWorthWhoJoeHelpsSituations}
        footerText={homeWorthWhoJoeHelpsContent.footerText}
        sectionClassName="bg-white py-10"
      />
      <Testimonials
        slides={homeWorthTestimonialSlides}
        eyebrow={homeWorthTestimonialsContent.eyebrow}
        heading={homeWorthTestimonialsContent.heading}
        description={homeWorthTestimonialsContent.description}
      />
      <PricingFormula
        eyebrow="Transparent Pricing"
        heading={
          <>
            How we determine your{" "}
            <em className="text-teal italic">
              Tuscaloosa home value and cash offer
            </em>
          </>
        }
        description="Every offer follows the same transparent formula. Joe walks you through every line before you decide anything — no hidden fees, no surprise deductions."
        rows={homeWorthPricingRows}
        formula={homeWorthPricingFormula}
        includes={homeWorthPricingIncludes}
        ctaHref="/contact"
      />
      <WhatWeBuy
        propertyTypes={homeWorthPropertyTypes}
        eyebrow={homeWorthWhatWeBuyContent.eyebrow}
        heading={
          <>
            Types of properties we buy in{" "}
            <em className="text-teal italic">Tuscaloosa and nearby</em>
          </>
        }
        description={homeWorthWhatWeBuyContent.description}
        footerText={homeWorthWhatWeBuyContent.footerText}
        ctaLabel={homeWorthWhatWeBuyContent.ctaLabel}
        ctaHref="/contact"
      />
      <ServiceArea ctaHref="/contact" />
      <MeetTheBuyer />
      <FAQ
        faqs={[...homeWorthFaqs]}
        eyebrow="FAQ"
        heading="Tuscaloosa home value & cash offer — frequently asked questions"
        description=""
        defaultOpenId="how-find-worth"
        includeSchema={false}
        showNarLink={false}
        footerText={`Still wondering what your home is worth? Call Joe — ${PHONE}`}
      />
      <FinalCTA
        eyebrow="We Buy Tuscaloosa Homes"
        heading={
          <>
            Find out what your{" "}
            <span className="text-teal">Tuscaloosa home is worth</span> — free
          </>
        }
        description="Joe will walk through your property, explain the numbers, and send a written cash offer within 24 hours. No repairs. No fees. No obligation to accept."
        checklist={[
          "Free home value estimate from a local buyer",
          "Written offer within 24 hours of walkthrough",
          "No repairs, cleaning, or showings required",
          "Close in as little as 7 days — or on your schedule",
          "Zero pressure — compare with any other option",
        ]}
        subtext=""
        primaryCtaLabel="Get My Free Home Value Estimate"
        secondaryCtaLabel={`Call Joe — ${PHONE}`}
        consentText="By contacting us you agree to receive transactional communications from We Buy Tuscaloosa Homes via SMS, calls, and email about your property inquiry. Reply STOP to opt out. Your info is never sold."
      />
    </>
  );
}
