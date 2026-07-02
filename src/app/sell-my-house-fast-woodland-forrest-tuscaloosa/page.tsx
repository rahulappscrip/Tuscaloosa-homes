import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { IsItRightForYou } from "@/components/how-it-works/IsItRightForYou";
import { MarketInsightsPanel } from "@/components/MarketInsightsPanel";
import { MeetJoe } from "@/components/MeetJoe";
import { ServiceArea } from "@/components/ServiceArea";
import { SellerSituations } from "@/components/SellerSituations";
import { StatsRibbon } from "@/components/StatsRibbon";
import { Testimonials } from "@/components/Testimonials";
import { TransparentPricing } from "@/components/TransparentPricing";
import { WhatToExpectPanel } from "@/components/WhatToExpectPanel";
import { situationImages } from "@/data/situationImages";
import {
  woodlandForrestCashProsItems,
  woodlandForrestComparisonColumns,
  woodlandForrestComparisonRows,
  woodlandForrestFaqs,
  woodlandForrestHeroBenefits,
  woodlandForrestHeroStats,
  woodlandForrestListingConsItems,
  woodlandForrestMarketParagraphs,
  woodlandForrestMeetJoeCredentials,
  woodlandForrestMeetJoeParagraphs,
  woodlandForrestPageSchema,
  woodlandForrestPricingFormulaSteps,
  woodlandForrestProcessSteps,
  woodlandForrestSituations,
  woodlandForrestTestimonialSlides,
  woodlandForrestWhatToExpectFootnote,
  woodlandForrestWhatToExpectSteps,
} from "@/data/woodland-forrest";

export const metadata: Metadata = {
  title: "Sell My House Fast in Woodland Forrest, Tuscaloosa | Cash Home Buyers",
  description:
    "Need to sell your house fast in Woodland Forrest, Tuscaloosa? We Buy Tuscaloosa Homes pays cash for houses as-is, with no fees or repairs, and lets you choose the closing date.",
  keywords: ["sell my house fast woodland forrest tuscaloosa"],
  alternates: {
    canonical: "/sell-my-house-fast-woodland-forrest-tuscaloosa",
  },
};

const PHONE = "(803) 784-7672";

export default function WoodlandForrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(woodlandForrestPageSchema),
        }}
      />
      <Hero
        eyebrow="Woodland Forrest · Tuscaloosa, Alabama"
        heading={
          <>
            Sell My House Fast in{" "}
            <span className="text-teal">Woodland Forrest, Tuscaloosa</span>
          </>
        }
        description="If you need to sell my house fast in Woodland Forrest, Tuscaloosa, We Buy Tuscaloosa Homes can buy it for cash as-is and let you pick the closing date."
        secondaryDescription="You might be facing foreclosure, dealing with an inherited house, going through a divorce, tired of being a landlord, or just ready to move on from a Woodland Forrest property that needs more work than you want to tackle. Joe and the local team talk through your options, answer every question, and only move forward if the solution feels right for you."
        benefits={woodlandForrestHeroBenefits}
        showJoeCard={false}
      />
      <StatsRibbon stats={woodlandForrestHeroStats} />
      <IsItRightForYou
        variant="trust-compare"
        eyebrow="Why Cash Over Listing?"
        heading="Why Woodland Forrest Homeowners Sell to a Local Cash Buyer Instead of Listing"
        description="For many Woodland Forrest, Tuscaloosa homeowners, selling to a local cash buyer is faster and simpler than listing with an agent because it trades some price for speed, certainty, and no-hassle repairs."
        goodTitle="Why a cash sale makes sense"
        goodItems={woodlandForrestCashProsItems}
        considerTitle="Compared to listing with an agent"
        considerItems={woodlandForrestListingConsItems}
        considerNote={null}
        showIntroBand={false}
        showFooter={false}
        footnote={
          <>
            If you&apos;re unsure whether a cash buyer makes sense for your
            Woodland Forrest house, you can still talk with Joe, walk through
            your numbers, and see both options side by side before deciding.
          </>
        }
      />
      <SellerSituations
        layout="situations"
        sectionId="situations"
        eyebrow="Who We Help"
        heading="Situations Where Selling Your Woodland Forrest House Fast for Cash Makes Sense"
        description="Many Woodland Forrest and Tuscaloosa homeowners who reach out to us fall into a few common situations, and a direct cash sale can be the least stressful path in each one."
        situations={woodlandForrestSituations}
        footerText="Whenever you see your situation in any of these, you don't have to navigate it alone."
        ctaHref="#contact"
      />
      <HowItWorks
        sectionId="how-it-works"
        eyebrow="Simple Process"
        heading="How Does Selling My Woodland Forrest House Fast for Cash Work?"
        description="Selling your Woodland Forrest house fast for cash with We Buy Tuscaloosa Homes is a simple 3–4 step process where you stay in control of the closing date."
        steps={woodlandForrestProcessSteps}
        footnote="There's never any obligation to take the offer, and we'll gladly compare selling to a cash buyer versus listing with an agent so you can choose what's best."
        className="bg-hero-surface"
      />
      <Testimonials
        display="carousel"
        eyebrow="What Sellers Say"
        heading="What Woodland Forrest and Tuscaloosa Homeowners Say About Working With Us"
        description="Homeowners in Woodland Forrest and across Tuscaloosa tell us they value how straightforward, fair, and low-pressure the process feels when they sell for cash."
        slides={woodlandForrestTestimonialSlides}
      />
      <ComparisonTable
        id="comparison"
        eyebrow="Compare Your Options"
        heading="How Does Selling to a Woodland Forrest Cash Buyer Compare to Listing With an Agent?"
        description="Selling to a local Woodland Forrest cash buyer is usually faster, more certain, and less work than listing with an agent, but it may net a lower top-line price while still being competitive once you factor in repairs and fees."
        columns={woodlandForrestComparisonColumns}
        rows={woodlandForrestComparisonRows}
        closingText='When judging if a cash offer is "fair," compare net proceeds, not just sticker price. Subtract repair costs, commissions, and extra months of payments from a potential listing price, then compare that net to your as-is cash offer.'
        showCta={true}
        ctaLabel="Get a Real Cash Offer to Compare Against These Numbers"
        ctaHref="#contact"
      />
      <WhatToExpectPanel
        sectionId="process-detail"
        eyebrow="What to Expect"
        heading="From First Call to Closing Day in Woodland Forrest: What to Expect"
        description="Beyond the simple 3–4 step overview, here's what the day-to-day process of a quick house sale Tuscaloosa actually feels like when you work with Joe."
        steps={woodlandForrestWhatToExpectSteps}
        footnote={woodlandForrestWhatToExpectFootnote}
        imageSrc={situationImages.foreclosure}
        imageAlt="Woodland Forrest homeowner reviewing paperwork during a local cash home sale"
        showCta={true}
        ctaHref="#contact"
        ctaLabel="Schedule a No-Pressure Walk-Through"
      />
      <MarketInsightsPanel
        sectionId="market"
        eyebrow="2026 Market Context"
        heading={
          <>
            Woodland Forrest, Tuscaloosa Market: What Homeowners Should Know in{" "}
            <span className="text-teal">2026</span>
          </>
        }
        paragraphs={woodlandForrestMarketParagraphs}
        stats={[]}
        ctaHref="#contact"
        ctaLabel="Ask How Today's Market Affects Your Woodland Forrest Home"
      />
      <ServiceArea ctaHref="#contact" />
      <MeetJoe
        eyebrow="Local & Founder-Led"
        heading="Meet Joe and the Local Team Buying Houses in Woodland Forrest"
        roleLabel="Founder, Owner & CEO — We Buy Tuscaloosa Homes"
        paragraphs={woodlandForrestMeetJoeParagraphs}
        credentials={woodlandForrestMeetJoeCredentials}
        ctaLabel={`Schedule a Quick Call With Joe — ${PHONE}`}
      />
      <TransparentPricing
        eyebrow="Transparent Offer Math"
        heading={
          <>
            How We Calculate a Fair Cash Offer for Your{" "}
            <em className="text-teal italic">Woodland Forrest House</em>
          </>
        }
        description="We base your cash offer on recent Tuscaloosa sales, needed repairs, selling costs, and a reasonable profit so the deal works for both you and us."
        formulaSteps={woodlandForrestPricingFormulaSteps}
        ctaLabel="Request a No-Obligation Cash Offer Breakdown"
        ctaHref="#contact"
      />
      <FAQ
        faqs={[...woodlandForrestFaqs]}
        eyebrow="Frequently Asked Questions"
        heading={
          <>
            FAQs About Selling Your Woodland Forrest, Tuscaloosa House Fast for{" "}
            <span className="text-teal">Cash</span>
          </>
        }
        description="Tap any question to see a detailed answer about selling your Woodland Forrest, Tuscaloosa house for cash."
        defaultOpenId="how-fast"
        includeSchema={false}
        showNarLink={false}
        footerText={`Don't See Your Question? Ask Joe — ${PHONE}`}
      />
      <FinalCTA
        eyebrow="Ready to Sell?"
        heading="Ready to See What You Could Get for Your Woodland Forrest House?"
        description="When you reach out to We Buy Tuscaloosa Homes, you'll get a clear, written cash offer for your Woodland Forrest house with no obligation to say yes and no pressure to decide on the spot."
        checklist={[
          "We buy houses in Woodland Forrest and across Tuscaloosa in any condition — updated, dated, or needing major repairs.",
          "You skip listings, showings, and agent commissions and choose a closing date that fits your timeline.",
          "You can use our comparison and calculator to weigh listing versus a cash sale before making a decision.",
        ]}
        subtext={'If you\'ve read this far and are wondering, "What would this look like for my house?" the next step is simple: share a few details and talk with Joe.'}
        primaryCtaLabel="Get My Free Woodland Forrest Cash Offer"
        secondaryCtaLabel={`${PHONE} — Call or Text`}
        consentText="No obligation, no fees. By contacting us you agree to receive communications from We Buy Tuscaloosa Homes."
      />
    </>
  );
}
