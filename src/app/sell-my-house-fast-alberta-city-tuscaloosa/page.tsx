import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { IsItRightForYou } from "@/components/how-it-works/IsItRightForYou";
import { TransparentPricing } from "@/components/TransparentPricing";
import { MarketInsightsPanel } from "@/components/MarketInsightsPanel";
import { MeetJoe } from "@/components/MeetJoe";
import { ServiceArea } from "@/components/ServiceArea";
import { SellerSituations } from "@/components/SellerSituations";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { StatsRibbon } from "@/components/StatsRibbon";
import {
  albertaCityComparisonColumns,
  albertaCityComparisonRows,
  albertaCityFaqs,
  albertaCityHeroBenefits,
  albertaCityHeroStats,
  albertaCityMarketParagraphs,
  albertaCityMarketStats,
  albertaCityMeetJoeCredentials,
  albertaCityMeetJoeParagraphs,
  albertaCityPageSchema,
  albertaCityPricingFormulaSteps,
  albertaCityProcessSteps,
  albertaCityLocalResources,
  albertaCitySituations,
  albertaCityWhatIsConsiderItems,
  albertaCityWhatIsGoodItems,
  albertaCityWhoWeHelpConsiderItems,
  albertaCityWhoWeHelpGoodItems,
} from "@/data/alberta-city";

export const metadata: Metadata = {
  title: "Sell My House Fast in Alberta City, Tuscaloosa | We Buy Tuscaloosa Homes",
  description:
    "We buy houses for cash in Alberta City, Tuscaloosa as-is. Written offer within 24 hours, close in as little as 7 days. No repairs, no fees, no waiting.",
  keywords: [
    "sell my house fast alberta city tuscaloosa",
    "we buy houses alberta city",
    "cash home buyers alberta city tuscaloosa",
    "sell house as-is alberta city",
  ],
  alternates: {
    canonical: "/sell-my-house-fast-alberta-city-tuscaloosa",
  },
};

const PHONE = "(803) 784-7672";

export default function AlbertaCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(albertaCityPageSchema),
        }}
      />
      <Hero
        eyebrow="Cash Home Buyers · Alberta City · Tuscaloosa, AL"
        heading={
          <>
            Sell My House Fast in{" "}
            <span className="text-teal">Alberta City, Tuscaloosa</span> for Cash
          </>
        }
        description="We buy houses in Alberta City as-is for cash — no repairs, no waiting. Get a written offer within 24 hours and close in as little as 7 days."
        secondaryDescription="From older homes to rental properties and houses that need significant repairs, we've helped homeowners throughout Alberta City sell quickly without the uncertainty of the traditional market. Our goal is to provide a fair cash offer, a transparent process, and a closing date that works for you."
        benefits={albertaCityHeroBenefits}
        showJoeCard={false}
      />
      <StatsRibbon stats={albertaCityHeroStats} />
      <IsItRightForYou
        variant="trust-compare"
        eyebrow="Understanding the Process"
        heading="What does selling your house for cash in Alberta City actually mean?"
        description="Selling your house for cash means selling directly to a local buyer — no bank financing, no appraisal contingencies, and no months of showings. You accept a written offer, pick a closing date, and walk away with cash."
        goodTitle="What you can expect"
        goodItems={albertaCityWhatIsGoodItems}
        considerTitle="Alberta City sellers we help"
        considerItems={albertaCityWhatIsConsiderItems}
        considerNote={null}
        showIntroBand={false}
        showFooter={false}
      />
      <ComparisonTable
        id="compare"
        eyebrow="Cash vs. Listing"
        heading="Why sell your Alberta City house for cash instead of listing?"
        description="The Tuscaloosa market averages 42 days on the MLS for market-ready homes. If your Alberta City property needs repairs or is tied to an estate or foreclosure timeline, a traditional listing adds cost and uncertainty you may not be able to absorb."
        columns={albertaCityComparisonColumns}
        rows={albertaCityComparisonRows}
        closingText="A cash sale makes the most sense when speed, certainty, and simplicity matter more than squeezing the last dollar out of a traditional listing. If your Alberta City home is in great shape and you have 2–3 months of flexibility, a traditional listing may serve you better — we'll tell you that honestly."
        showCta={true}
        ctaLabel="Get My Cash Offer →"
        ctaHref="#contact"
      />
      <SellerSituations
        layout="situations"
        sectionId="situations"
        sectionClassName="bg-white py-10"
        eyebrow="Every Situation"
        heading="We buy Alberta City houses in every situation"
        description="Whether you're facing foreclosure, dealing with an inherited property, or simply need to move fast — there's a path forward."
        situations={albertaCitySituations}
        footerText={null}
        ctaHref="#contact"
      />
      <HowItWorks
        sectionId="how-it-works"
        eyebrow="Simple Process"
        heading="How do you sell your Alberta City house for cash?"
        description="Four steps — and you control the timeline."
        steps={albertaCityProcessSteps}
        footnote={null}
        className="bg-hero-surface"
      />
      <TransparentPricing
        eyebrow="Transparent Pricing"
        heading="How do we calculate your Alberta City cash offer?"
        description="We use the same formula on every house. No hidden variables, no surprise deductions at closing."
        formulaSteps={albertaCityPricingFormulaSteps}
        ctaLabel="Get My Cash Offer →"
        ctaHref="#contact"
      />
      <MarketInsightsPanel
        sectionId="market"
        eyebrow="2025 Market Context"
        heading="What Alberta City sellers need to know about the Tuscaloosa market"
        paragraphs={[...albertaCityMarketParagraphs]}
        stats={[...albertaCityMarketStats]}
        ctaHref="#contact"
        ctaLabel="Get My Cash Offer →"
      />
      <IsItRightForYou
        eyebrow="Who We Work With"
        heading="Who we typically buy houses from in Alberta City"
        description="We're a good fit for sellers who value speed and certainty over maximum price."
        goodTitle="Common seller profiles"
        goodItems={albertaCityWhoWeHelpGoodItems}
        considerTitle="When a cash sale fits best"
        considerItems={albertaCityWhoWeHelpConsiderItems}
        considerNote={null}
        showIntroBand={true}
        showFooter={false}
      />
      <MeetJoe
        eyebrow="About the Founder"
        heading="Meet Joe LeBlanc — Founder and CEO of We Buy Tuscaloosa Homes"
        roleLabel="Founder & CEO — We Buy Tuscaloosa Homes"
        paragraphs={albertaCityMeetJoeParagraphs}
        credentials={albertaCityMeetJoeCredentials}
        showCta={false}
      />
      <WhyChooseUs
        sectionId="local-resources"
        headingId="local-resources-heading"
        className="bg-hero-surface"
        eyebrow="Local Resources"
        heading="Local resources for Alberta City and Tuscaloosa homeowners"
        description="These offices can help with documentation, records, and guidance — independent of any decision to sell."
        benefits={albertaCityLocalResources}
        media="image"
        imageSrc="/assets/sell_my_house_fast_alberta_city_tuscaloosa.webp"
        imageAlt="Map and local resources for homeowners in Alberta City and Tuscaloosa, Alabama"
        imageTitle="Local resources for Alberta City and Tuscaloosa homeowners"
        imageCaption="Local city and county offices that can help Alberta City and Tuscaloosa homeowners with records and guidance."
        showFooterCards={false}
      />
      <ServiceArea ctaHref="#contact" />
      <FAQ
        faqs={[...albertaCityFaqs]}
        eyebrow="FAQ"
        heading="Common questions about selling your Alberta City house for cash"
        description=""
        defaultOpenId="code-violations"
        showNarLink={false}
        footerText={`Still have questions? Call ${PHONE}`}
      />
      <FinalCTA
        eyebrow="We Buy Tuscaloosa Homes"
        heading="Ready to get your Alberta City cash offer?"
        description="No repairs. No fees. No obligation. Written offer within 24 hours, close in as little as 7 days. You set the closing date — we handle everything else."
        checklist={[
          "Written cash offer within 24 hours — no obligation",
          "Buy as-is in any condition — no repairs required",
          "Close in 7 days or on your timeline",
        ]}
        primaryCtaLabel="Get My Cash Offer →"
        secondaryCtaLabel={`Call ${PHONE}`}
        consentText="By submitting, you agree to receive transactional communications from We Buy Tuscaloosa Homes via SMS, calls, and email related to your property inquiry. Reply STOP to opt out. Your info is never sold."
      />
    </>
  );
}
