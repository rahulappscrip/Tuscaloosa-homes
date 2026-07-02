import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { IsItRightForYou } from "@/components/how-it-works/IsItRightForYou";
import { LocalMarket } from "@/components/LocalMarket";
import { MarketInsightsPanel } from "@/components/MarketInsightsPanel";
import { MeetJoe } from "@/components/MeetJoe";
import { ServiceArea } from "@/components/ServiceArea";
import { SellerSituations } from "@/components/SellerSituations";
import { StatsRibbon } from "@/components/StatsRibbon";
import { Testimonials } from "@/components/Testimonials";
import { TransparentPricing } from "@/components/TransparentPricing";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import {
  brookwoodCashProsItems,
  brookwoodDetailedProcessSteps,
  brookwoodFaqs,
  brookwoodHeroBenefits,
  brookwoodHeroStats,
  brookwoodListingConsItems,
  brookwoodMarketParagraphs,
  brookwoodMarketStats,
  brookwoodMeetJoeCredentials,
  brookwoodMeetJoeParagraphs,
  brookwoodNeighborhoodDetailBenefits,
  brookwoodPageSchema,
  brookwoodProcessSteps,
  brookwoodSituations,
  brookwoodTestimonialSlides,
  brookwoodThreeWayColumns,
  brookwoodThreeWayRows,
  brookwoodWhoWeHelpItems,
} from "@/data/brookwood";

export const metadata: Metadata = {
  title: "Sell My House Fast in Brookwood, AL | Cash Offer in 24 Hours",
  description:
    "Need to sell your house fast in Brookwood, AL? Get a fair cash offer in 24 hours, no repairs or fees, and close on your timeline. Sell as-is in Tuscaloosa County.",
  keywords: ["sell my house fast brookwood al"],
  alternates: {
    canonical: "/sell-my-house-fast-brookwood-al",
  },
};

const PHONE = "(803) 784-7672";

export default function BrookwoodPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brookwoodPageSchema),
        }}
      />
      <Hero
        eyebrow="Brookwood, AL · Tuscaloosa County · Local Cash Buyer"
        heading={
          <>
            Sell My House Fast in{" "}
            <span className="text-teal">Brookwood, AL</span> – Cash Offer for
            Your Tuscaloosa County Home
          </>
        }
        description="If you need to sell your house fast in Brookwood, AL, you can get a fair cash offer within 24 hours and pick your closing date. No repairs, no fees, no commissions — sell as-is on your schedule."
        benefits={brookwoodHeroBenefits}
        showJoeCard={false}
      />
      <StatsRibbon stats={brookwoodHeroStats} />
      <IsItRightForYou
        variant="trust-compare"
        eyebrow="Why Brookwood Homeowners Choose Cash Buyers"
        heading="Why Brookwood Homeowners Choose Cash Buyers Over Listing"
        description={
          'For many Brookwood homeowners, selling as-is for cash is faster and less stressful than listing with an agent. Cash home buyers Tuscaloosa work especially well when your house needs major repairs you can\'t or don\'t want to tackle, you\'re facing deadlines like foreclosure, divorce, or a job transfer, you\'ve inherited a property and don\'t want to be a long-distance landlord, or you value a simple, private sale in a small town like Brookwood. Selling house as-is in Tuscaloosa County means you skip contractors, inspections, and "show-ready" stress. You get a clear number and a clear closing date instead.'
        }
        goodTitle="Pros of Selling As-Is for Cash"
        goodItems={brookwoodCashProsItems}
        considerTitle="Compared to Fixing and Listing"
        considerItems={brookwoodListingConsItems}
        considerNote={null}
        showIntroBand={false}
        showFooter={false}
        footnote={
          <>
            <strong>When Listing Might Be Better:</strong> If your Brookwood
            house is updated, in great shape, and you&apos;re not in a hurry,
            listing with a local agent can sometimes put more money in your
            pocket. Our job as local cash home buyers in Tuscaloosa County is to
            be honest about that trade-off so you can make the best call.
          </>
        }
      />
      <ComparisonTable
        id="compare-options"
        eyebrow="Cash Buyer vs Listing vs Doing Nothing"
        heading="Compare Your Brookwood Selling Options Side by Side"
        description="Use this comparison to see how a cash sale to We Buy Tuscaloosa Homes stacks up against listing with an agent — or waiting and doing nothing."
        columns={brookwoodThreeWayColumns}
        rows={brookwoodThreeWayRows}
        showCta={true}
        ctaLabel={`See If a Cash Offer Fits Your Brookwood Situation`}
        ctaHref="tel:8037847672"
      />
      <SellerSituations
        layout="situations"
        sectionId="situations"
        eyebrow="Situations We Help With"
        heading="Situations Where We Help Brookwood and Tuscaloosa County Homeowners"
        description="Life in Brookwood and across Tuscaloosa County doesn't always go to plan. We step in when you need a clear, fast way out of a stressful housing situation."
        situations={brookwoodSituations}
        footerText="Whenever you see your situation in any of these, you don't have to navigate it alone."
        ctaHref="#contact"
      />
      <HowItWorks
        sectionId="how-it-works"
        eyebrow="Simple Process"
        heading="How Does Selling Your Brookwood House for Cash Work?"
        description="Selling your Brookwood house for cash takes three simple steps. Most Brookwood sellers choose this path because it's simple: reach out, review the offer, close when you're ready."
        steps={brookwoodProcessSteps}
        footnote={null}
        className="bg-hero-surface"
      />
      <Testimonials
        display="carousel"
        eyebrow="What Sellers Say"
        heading="What Brookwood and Tuscaloosa County Sellers Say"
        description="We're a local buyer focused on Brookwood and nearby Tuscaloosa County communities, and the best proof comes from neighbors who've already sold."
        slides={brookwoodTestimonialSlides}
      />
      <LocalMarket
        sectionId="who-qualifies"
        eyebrow="Who Qualifies"
        heading="How Selling to a Brookwood Cash Buyer Compares to Listing With an Agent"
        paragraphs={[
          "Selling to a Brookwood cash buyer is usually faster, simpler, and more certain, while listing with an agent can sometimes deliver a higher price if your home is updated and you have time. In Brookwood and the rest of Tuscaloosa County, older homes or properties needing a lot of work often come out ahead with a cash sale, because you skip big repair bills and months of waiting.",
        ]}
        benefitsTitle="Homeowners we work with"
        benefits={brookwoodWhoWeHelpItems}
        showBenefitsOutro={false}
        stats={[]}
        imageSrc="/assets/joe.png"
        imageAlt="Joe LeBlanc, local Brookwood and Tuscaloosa County cash home buyer"
        showResourceLinks={false}
        showSidebarCta={false}
      />
      <HowItWorks
        sectionId="process-detail"
        eyebrow="Step by Step"
        heading="Our Brookwood Cash Offer Process, Step by Step"
        description="Here's a closer look at what happens from your first call to closing day when you sell your Brookwood house fast for cash."
        steps={brookwoodDetailedProcessSteps}
        className="bg-hero-surface"
      />
      <MarketInsightsPanel
        sectionId="market"
        eyebrow="2026 Market Data"
        heading={
          <>
            Brookwood &amp; Tuscaloosa County Market: What Home Sellers Need to
            Know in <span className="text-teal">2026</span>
          </>
        }
        paragraphs={brookwoodMarketParagraphs}
        stats={brookwoodMarketStats}
        ctaHref="#contact"
        ctaLabel="Ask Us How the Market Affects Your Brookwood Home"
      />
      <WhyChooseUs
        sectionId="area-detail"
        headingId="area-detail-heading"
        className="bg-hero-surface"
        eyebrow="Neighborhood Detail"
        heading="What to Expect When Selling in Brookwood and Nearby Towns"
        description={`If you're searching "sell my house fast near me" anywhere around Brookwood, there's a good chance we can help. Brookwood is our focus, but we buy houses across much of Tuscaloosa County. Not sure if we cover your exact neighborhood? Call Joe — if you're in Brookwood or Tuscaloosa County, we almost certainly do.`}
        benefits={brookwoodNeighborhoodDetailBenefits}
        media="image"
        imageSrc="/assets/tuscaloosa-map.jpg"
        imageAlt="Map of Brookwood and nearby Tuscaloosa County communities we buy houses in"
        imageCaption="Brookwood and nearby Tuscaloosa County areas where we buy houses for cash."
        showFooterCards={false}
        ctaHref="#contact"
        ctaLabel="Check If We Buy Houses in Your Brookwood Area"
      />
      <ServiceArea ctaHref="#contact" />
      <TransparentPricing
        eyebrow="Pricing Transparency"
        heading={
          <>
            How We Decide on a Fair Cash Offer for Your{" "}
            <em className="text-teal italic">Brookwood House</em>
          </>
        }
        description="We base your Brookwood cash offer on three main factors: after-repair value using recent Tuscaloosa County sales, repair and upgrade costs, and holding and selling costs — plus a reasonable profit margin. We explain this in plain numbers so you can decide whether it feels right. ARV – repairs – costs = your fair cash offer. We never charge commissions or junk fees."
        ctaLabel={`Request a Transparent Brookwood Cash Offer — ${PHONE}`}
        ctaHref="tel:8037847672"
      />
      <MeetJoe
        eyebrow="Your Local Brookwood & Tuscaloosa County Home-Buying Team"
        heading="Meet Your Local Brookwood & Tuscaloosa County Home‑Buying Team"
        roleLabel="Founder, Owner & CEO — We Buy Tuscaloosa Homes"
        paragraphs={brookwoodMeetJoeParagraphs}
        credentials={brookwoodMeetJoeCredentials}
        ctaLabel={`Call Joe — ${PHONE}`}
      />
      <FAQ
        faqs={[...brookwoodFaqs]}
        eyebrow="Questions & Answers"
        heading={
          <>
            Brookwood &amp; Tuscaloosa County Cash Home Buyer{" "}
            <span className="text-teal">FAQs</span>
          </>
        }
        description={
          'Common questions Brookwood and Tuscaloosa County homeowners ask when they\'re thinking, "I need to sell my house fast in Brookwood, AL."'
        }
        defaultOpenId="how-fast"
        includeSchema={false}
        showNarLink={false}
        footerText={`Still Have Questions About Selling in Brookwood? Call ${PHONE}`}
      />
      <FinalCTA
        eyebrow="Ready to Sell?"
        heading="Ready to Sell Your Brookwood House Fast for Cash?"
        description="If you're ready to sell my house fast Brookwood AL, We Buy Tuscaloosa Homes can give you a fair cash offer within 24 hours, buy your house as-is, and let you choose your closing day. There's no obligation, no commissions, and no pressure to say yes."
        checklist={[
          "As-is sale: No repairs, cleaning, or showings required.",
          "Fast answers: A real local buyer contacts you, usually within one business day.",
          "Flexible timeline: Fast closing or extra time if you need it.",
          "Local team: Brookwood and Tuscaloosa County buyers you can actually talk to.",
        ]}
        subtext="No obligation · No fees · No repairs · Close on your schedule"
        primaryCtaLabel="Get My Brookwood Cash Offer Now"
        secondaryCtaLabel={`${PHONE} — Call or Text`}
      />
    </>
  );
}
