import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhereWeBuy } from "@/components/how-it-works/WhereWeBuy";
import { LocalMarket } from "@/components/LocalMarket";
import { MarketInsightsPanel } from "@/components/MarketInsightsPanel";
import { MeetJoe } from "@/components/MeetJoe";
import { ServiceArea } from "@/components/ServiceArea";
import { SellerSituations } from "@/components/SellerSituations";
import { StatsRibbon } from "@/components/StatsRibbon";
import { Testimonials } from "@/components/Testimonials";
import { TransparentPricing } from "@/components/TransparentPricing";
import { situationImages } from "@/data/situationImages";
import {
  uaComparisonColumns,
  uaComparisonRows,
  uaFaqs,
  uaHeroBenefits,
  uaHeroStats,
  uaMarketParagraphs,
  uaMarketStats,
  uaMeetJoeParagraphs,
  uaPageSchema,
  uaPricingParagraphs,
  uaProcessSteps,
  uaServiceAreaParagraphs,
  uaTestimonialSlides,
  uaUseCaseSituations,
  uaWhoWeHelpSituations,
  uaWhyCashBenefits,
  uaWhereWeBuyAreas,
} from "@/data/university-of-alabama";

export const metadata: Metadata = {
  title: "Sell My House Fast Near University of Alabama | Cash in Tuscaloosa",
  description:
    "Want to sell a house near the University of Alabama fast? Get a fair cash offer in Tuscaloosa, as-is, no fees, and close on your timeline with We Buy Tuscaloosa Homes.",
  keywords: ["sell house near university of alabama"],
  alternates: {
    canonical: "/sell-house-near-university-of-alabama",
  },
};

const PHONE = "(803) 784-7672";

export default function UniversityOfAlabamaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(uaPageSchema),
        }}
      />
      <Hero
        eyebrow="Tuscaloosa · University of Alabama Area"
        heading={
          <>
            Sell My House Fast Near the{" "}
            <span className="text-teal">University of Alabama</span> in
            Tuscaloosa
          </>
        }
        description="If you need to sell my house fast near University of Alabama in Tuscaloosa, We Buy Tuscaloosa Homes can give you a straightforward cash offer and let you pick a closing date that fits your schedule. As local cash home buyers in Tuscaloosa, we buy houses and small rentals near campus in any condition, as-is, with no repairs, no commissions, and no hidden fees."
        benefits={uaHeroBenefits}
        showJoeCard={false}
      />
      <StatsRibbon stats={uaHeroStats} />
      <LocalMarket
        sectionId="why-cash"
        eyebrow="Why a Local Buyer?"
        heading="Why Sell a House Near the University of Alabama to a Local Cash Buyer?"
        paragraphs={[
          "Selling a house near the University of Alabama to a local cash home buyer in Tuscaloosa can be the simplest path when you want speed and certainty more than squeezing out every last dollar. A local buyer understands UA-area demand, lease cycles, and typical student-rental wear better than out-of-town investors or big national brands.",
          "Here's why a local cash sale often makes sense for UA-area homes:",
          "Owning a house near a major university can be stressful — constant turnover, noise, parking, or students who are hard on the property. Our team focuses specifically on homes near the University of Alabama, so we understand the unique rental cycles, parent-buyer dynamics, and campus-area challenges.",
        ]}
        benefits={uaWhyCashBenefits}
        stats={[]}
        imageSrc={situationImages["tired-landlord"]}
        imageAlt="Student rental home near the University of Alabama in Tuscaloosa"
        footnote="When you talk with We Buy Tuscaloosa Homes, you're talking with neighbors who know the difference between a quiet Northport street and a high-turnover student block near campus — and we build that understanding into every cash offer."
        showResourceLinks={false}
        showSidebarCta={false}
      />
      <SellerSituations
        layout="situations"
        sectionId="use-cases"
        sectionClassName="bg-hero-surface py-10"
        eyebrow="Is It the Right Move?"
        heading="Is Selling My House Near the University of Alabama for Cash the Best Option?"
        description="Selling for cash near the University of Alabama is usually best when you value speed and certainty more than maximizing the absolute top sale price. In some situations, listing with an agent can still make sense — especially if your UA-area house is updated, vacant, and easy to show."
        situations={uaUseCaseSituations}
        footerText="Whatever your situation, We Buy Tuscaloosa Homes will walk you through your options honestly — even if we ultimately recommend listing or keeping it as a rental instead of selling to us."
        ctaHref="#contact"
      />
      <HowItWorks
        sectionId="how-it-works"
        eyebrow="Simple Process"
        heading="How Does Selling a House Near the University of Alabama for Cash Work?"
        description="Selling a house near the University of Alabama for cash with We Buy Tuscaloosa Homes is a simple, four-step process designed for both owner-occupied homes and student rentals. You share some basics, we review and visit the property, you receive a clear cash offer, and then you choose the closing date."
        steps={uaProcessSteps}
      />
      <Testimonials
        display="carousel"
        eyebrow="What Sellers Say"
        heading="What Do Tuscaloosa Sellers Near the University of Alabama Say?"
        description="Tuscaloosa sellers near the University of Alabama consistently say they appreciated clear communication, no surprise fees, and closings that went exactly as promised. Many owned student rentals, parent-purchased homes, or older UA-area houses and wanted a simple way out without more repairs."
        slides={uaTestimonialSlides}
      />
      <ComparisonTable
        id="compare"
        eyebrow="Compare Your Options"
        heading="How Does a Cash Offer Near the University of Alabama Compare to Listing or Renting?"
        description="For many owners, a cash offer near the University of Alabama is the simplest way to move on, while listing or keeping the property as a rental can sometimes produce a higher top-line price but with more time, work, and risk. The best choice depends on your goals, your property's condition, and how much hassle you're willing to take on."
        columns={uaComparisonColumns}
        rows={uaComparisonRows}
        footnote="This overview is general, but it shows why many UA-area owners who want less stress choose a cash sale."
        showCta={true}
        ctaLabel="See What a Cash Offer Looks Like for You"
        ctaHref="#contact"
      />
      <TransparentPricing
        eyebrow="Net Proceeds Calculator"
        heading={
          <>
            Compare Cash vs Listing vs Renting Near{" "}
            <em className="text-teal italic">UA</em>
          </>
        }
        description="Plug in your estimated value, repairs, rent, and mortgage balance using the calculator below to see side-by-side net proceeds for a cash sale, listing, and renting. These are rough estimates for illustration — call Joe for a real conversation about your numbers."
        ctaLabel={`See What a Cash Offer Looks Like for You — ${PHONE}`}
        ctaHref="#contact"
      />
      <SellerSituations
        layout="situations"
        sectionId="who-we-help"
        sectionClassName="bg-hero-surface py-10"
        eyebrow="Who We Help"
        heading="Who We Help Near the University of Alabama in Tuscaloosa"
        description="We work with a wide range of homeowners and landlords in and around the University of Alabama area. If your situation involves a UA-area house or rental and you want a simpler way forward, We Buy Tuscaloosa Homes is set up to help."
        situations={uaWhoWeHelpSituations}
        footerText="If you see yourself in any of these groups — or your situation is a little different — you're welcome to reach out. We'll listen first, then help you figure out whether a cash sale makes sense."
        ctaHref="#contact"
      />
      <MarketInsightsPanel
        sectionId="market"
        eyebrow="2026 Market Snapshot"
        heading={
          <>
            Tuscaloosa &amp; University of Alabama Housing Market: What Sellers
            Need to Know in <span className="text-teal">2026</span>
          </>
        }
        paragraphs={uaMarketParagraphs}
        stats={uaMarketStats}
        ctaHref="#contact"
        ctaLabel="Ask How Today's UA Market Affects Your Offer"
      />
      <MeetJoe
        eyebrow="Local & Founder-Led"
        heading="Local Tuscaloosa Team Focused on Homes Near the University of Alabama"
        roleLabel="Founder, Owner & CEO — We Buy Tuscaloosa Homes"
        paragraphs={uaMeetJoeParagraphs}
        ctaLabel={`Ask Joe About Your UA-Area Property — ${PHONE}`}
      />
      <MarketInsightsPanel
        sectionId="pricing"
        className="bg-hero-surface"
        eyebrow="No Hidden Costs"
        heading="What Does It Cost to Sell a House Near the University of Alabama for Cash?"
        paragraphs={uaPricingParagraphs}
        stats={[]}
        showCta={true}
        ctaHref="#contact"
        ctaLabel="Request a Transparent Cash Offer Breakdown"
      />
      <WhereWeBuy
        eyebrow="Service Area"
        heading="Areas Near the University of Alabama and Across Tuscaloosa We Buy Houses In"
        description="We buy houses throughout the University of Alabama area and across greater Tuscaloosa — not just a few streets next to campus."
        areas={uaWhereWeBuyAreas}
        footnote="If your property is in or around Tuscaloosa County, there's a good chance we can make you a cash offer."
      />
      <MarketInsightsPanel
        sectionId="service-areas"
        eyebrow="Neighborhood Detail"
        heading="UA-Area Neighborhoods and Tuscaloosa Communities We Buy In"
        paragraphs={uaServiceAreaParagraphs}
        stats={[]}
        showCta={true}
        ctaHref="#contact"
        ctaLabel="Check If We Buy Houses In Your Part of Tuscaloosa"
      />
      <ServiceArea ctaHref="#contact" />
      <FAQ
        faqs={[...uaFaqs]}
        eyebrow="Frequently Asked Questions"
        heading={
          <>
            Frequently Asked Questions About Selling a House Near the{" "}
            <span className="text-teal">University of Alabama</span>
          </>
        }
        description="Selling fast for cash raises a lot of understandable questions. These answers focus on how the process usually works near UA in Tuscaloosa."
        defaultOpenId="how-fast"
        includeSchema={false}
        showNarLink={false}
        footerText={`Didn't See Your Question? Ask Us Directly — ${PHONE}`}
      />
      <FinalCTA
        eyebrow="Ready to Sell?"
        heading="Ready to Sell Your House Near the University of Alabama for Cash?"
        description="When you're ready to sell my house fast near University of Alabama in Tuscaloosa, We Buy Tuscaloosa Homes will give you a clear, no-pressure cash offer and let you choose the timeline that works for you. Share a few details about your UA-area house or rental, and we'll review the property, walk you through the numbers, and answer any questions before you decide."
        checklist={[
          "No repairs or cleaning – Sell as-is, even if it's student-worn, vacant, or full of belongings.",
          "No commissions or hidden fees – Direct buyer, not an agent; your offer explains exactly what you'll walk away with.",
          "Local, UA-focused team – Talk directly with Joe and a small Tuscaloosa team that understands campus-area properties.",
        ]}
        subtext="Fill out the short form or call/text below, and we'll take it from there — at your pace, not ours."
        primaryCtaLabel="Get My Free Cash Offer Near UA"
        secondaryCtaLabel={`${PHONE} — Call or Text`}
      />
    </>
  );
}
