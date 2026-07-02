import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { SimpleProcessPanel } from "@/components/SimpleProcessPanel";
import { CtaBand } from "@/components/how-it-works/CtaBand";
import { IsItRightForYou } from "@/components/how-it-works/IsItRightForYou";
import { MarketInsightsPanel } from "@/components/MarketInsightsPanel";
import { MeetJoe } from "@/components/MeetJoe";
import { ServiceArea } from "@/components/ServiceArea";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SellerSituations } from "@/components/SellerSituations";
import { StatsRibbon } from "@/components/StatsRibbon";
import { Testimonials } from "@/components/Testimonials";
import { TransparentPricing } from "@/components/TransparentPricing";
import {
  northportCashSaleGoodItems,
  northportComparisonColumns,
  northportComparisonRows,
  northportDetailedProcessSteps,
  northportFaqs,
  northportGiveGainDescription,
  northportGiveGainRows,
  northportHeroStats,
  northportHeroSteps,
  northportListingBetterItems,
  northportMarketParagraphs,
  northportMeetJoeParagraphs,
  northportOutsideAreaItems,
  northportPageSchema,
  northportProcessSteps,
  northportSituations,
  northportTestimonialSlides,
} from "@/data/northport";

export const metadata: Metadata = {
  title: "Sell Your House Fast in Northport, AL for Cash | We Buy Tuscaloosa Homes",
  description:
    "We buy houses in Northport, AL as-is for cash. Skip repairs, fees, and showings. Get a no-pressure cash offer from a local Tuscaloosa buyer at We Buy Tuscaloosa Homes.",
  keywords: ["we buy houses northport al"],
  alternates: {
    canonical: "/we-buy-houses-northport-al",
  },
};

const PHONE = "(803) 784-7672";

export default function NorthportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(northportPageSchema),
        }}
      />
      <Hero
        eyebrow="How to Sell Your House Fast for Cash in Northport, AL"
        heading={
          <>
            Sell Your Northport House Fast For Cash In{" "}
            <span className="text-teal">3 Simple Steps</span>
          </>
        }
        description="No repairs. No commissions. No showings. We Buy Tuscaloosa Homes buys houses in Northport, AL as-is, on your timeline — here's exactly what happens from first contact to cash in hand."
        steps={northportHeroSteps}
        showBenefits={false}
        showJoeCard={true}
      />
      <StatsRibbon stats={northportHeroStats} />
      <IsItRightForYou
        variant="trust-compare"
        eyebrow="Why Sell For Cash?"
        heading="Is Selling Your Northport House for Cash the Right Move?"
        description="Selling to cash home buyers Northport like We Buy Tuscaloosa Homes trades a potentially higher top-line price for speed, certainty, and simplicity. Here's an honest look at when it makes the most sense — and when a traditional listing might serve you better."
        goodTitle="A cash sale likely makes sense if you…"
        goodItems={northportCashSaleGoodItems}
        considerTitle="A traditional listing might serve you better if you…"
        considerItems={northportListingBetterItems}
        considerNote={null}
        showIntroBand={false}
        showFooter={false}
        footnote={
          <>
            Not sure which applies?{" "}
            <a href="tel:8037847672" className="font-semibold text-teal">
              Call Joe for an honest opinion
            </a>{" "}
            — no obligation, no pressure.
          </>
        }
      />
      <WhyChooseUs
        sectionId="what-you-gain"
        className="bg-hero-surface"
        eyebrow="What You Gain"
        heading={
          <>
            What You Give Up vs{" "}
            <em className="text-teal italic">What You Gain</em>
          </>
        }
        description={northportGiveGainDescription}
        benefits={northportGiveGainRows}
        media="image"
        imageSrc="/assets/we_buy_houses_northport_al.webp"
        imageAlt="We buy houses Northport AL — foreclosure notice and keys for homeowners behind on payments"
        imageTitle="We buy houses Northport AL — sell my house fast Northport"
        imageCaption="A local cash offer lets you run the numbers and decide if a quick, as-is sale is the calmer path."
        showFooterCards={false}
        ctaHref="#offer-form"
        ctaLabel="See What a Northport Cash Offer Could Look Like"
      />
      <SellerSituations
        layout="situations"
        sectionId="situations"
        eyebrow="Situations We Help With"
        heading={
          <>
            Situations Where Selling Your Northport House for Cash{" "}
            <em className="text-teal italic">Makes Sense</em>
          </>
        }
        description="Selling to a local cash buyer is not just for one type of homeowner. In Northport and the wider Tuscaloosa County area, it can make sense in several real-world situations."
        situations={northportSituations}
        footerText="In any of these situations, we'll talk through your options — including listing with an agent if that might leave you better off."
        ctaHref="#contact"
      />
      <SimpleProcessPanel
        sectionId="how-it-works"
        eyebrow="Simple Process"
        heading="How Does Selling Your House for Cash in Northport, AL Work?"
        description="Selling your house for cash in Northport, AL works in three simple steps: you reach out, we walk the property, and a local Alabama closing attorney helps you close and get paid. There's no obligation at any step."
        steps={northportProcessSteps}
        footnote="No obligation at any step — walk away anytime if it's not the right fit."
        ctaHref="#offer-form"
        ctaLabel="Start Your Northport Cash Offer →"
      />
      <Testimonials
        display="carousel"
        eyebrow="What Sellers Say"
        heading="Northport & Tuscaloosa Sellers Who Went Through Our Simple Process"
        description="5.0 out of 5.0 average rating from 103+ reviews. We buy Tuscaloosa homes every month — here's what sellers are saying about working with us."
        slides={northportTestimonialSlides}
      />
      <ComparisonTable
        id="compare"
        eyebrow="Compare Your Options"
        heading="Cash Offer vs Listing Your House in Northport, AL: What You Really Keep"
        description={
          'A traditional listing can sometimes bring a higher top-line price, but you\'ll usually factor in repairs, months of mortgage and utility payments, and standard agent fees. With a cash sale to We Buy Tuscaloosa Homes, your price may be lower, but you avoid most of those costs and close in weeks instead of wondering "how long will it take to sell my house fast Northport?"'
        }
        columns={northportComparisonColumns}
        rows={northportComparisonRows}
        footnote="Use this as a framework, not a promise. Every situation is different, and your exact numbers will depend on your house and your goals."
        showCta={true}
        ctaLabel={`Estimate My Net — Then Call ${PHONE}`}
        ctaHref="tel:8037847672"
      />
      <TransparentPricing
        eyebrow="Estimate Your Net"
        heading={
          <>
            Estimate Your Net in{" "}
            <em className="text-teal italic">Minutes</em>
          </>
        }
        description="Plug in a few numbers to see your estimated net from listing versus a cash sale, side by side."
        ctaLabel={`Get My Real Cash Offer — ${PHONE}`}
        ctaHref="tel:8037847672"
      />
      <HowItWorks
        sectionId="process-detail"
        eyebrow="Step by Step"
        heading="How Does Selling Your House for Cash in Northport, AL Work?"
        description="Selling your house for cash in Northport is straightforward. From your first conversation to closing day, we guide you through four simple steps designed to make selling your home fast, transparent, and stress-free—with no obligation at any point."
        steps={northportDetailedProcessSteps}
        className="bg-hero-surface"
      />
      <MarketInsightsPanel
        sectionId="market"
        eyebrow="2026 Market Snapshot"
        heading={
          <>
            Northport, AL Housing Market: What Sellers Need to Know in{" "}
            <span className="text-teal">2026</span>
          </>
        }
        paragraphs={northportMarketParagraphs}
        stats={[]}
        ctaHref="#offer-form"
        ctaLabel="Talk Through Your Northport Goals With Us"
      />
      <ServiceArea ctaHref="#contact" />
      <MeetJoe
        eyebrow="Who's Behind This?"
        heading="Who's Behind We Buy Tuscaloosa Homes in Northport, AL?"
        roleLabel="Founder & Owner, We Buy Tuscaloosa Homes"
        paragraphs={northportMeetJoeParagraphs}
        facts={[
          { value: "7 days", label: "Fastest close" },
          { value: "$0", label: "Commission to homeowners" },
          { value: "24 hrs", label: "Offer turnaround" },
          { value: "5.0 ★", label: "Google rating, 103+ reviews" },
        ]}
        ctaLabel={`Talk Directly With Joe — Skip the Call Center`}
      />
      <IsItRightForYou
        eyebrow="Service Area Detail"
        heading="Do We Buy Houses Outside Northport, AL?"
        description={
          'Yes. Our primary focus is buying houses in Northport, AL, but We Buy Tuscaloosa Homes also buys in other parts of Tuscaloosa and nearby Tuscaloosa County communities. If you\'re searching "we buy houses near me" and your address isn\'t technically in Northport city limits, we still may be able to help. We regularly look at properties in:'
        }
        goodTitle="Areas we also buy in"
        goodItems={northportOutsideAreaItems}
        considerTitle="Not sure if you're covered?"
        considerItems={[
          "If you're unsure whether your area is covered, the fastest way to find out is to share your address and a quick note about the property. We'll let you know quickly if we can make you a cash offer or point you in a better direction.",
        ]}
        considerNote={null}
        showIntroBand={true}
        showFooter={false}
      />
      <CtaBand
        title="Not sure what your house would sell for in cash?"
        subtitle="Get a written offer with a full breakdown — no pressure to accept."
        primaryLabel="Get My Free Cash Offer →"
        secondaryLabel={`Call ${PHONE}`}
      />
      <FAQ
        faqs={[...northportFaqs]}
        eyebrow="Frequently Asked Questions"
        heading={
          <>
            Northport, AL Cash Home Buyer —{" "}
            <span className="text-teal">FAQs</span>
          </>
        }
        description="Below are answers to the questions Northport homeowners ask most often about selling to a local cash buyer."
        defaultOpenId="how-it-works"
        showNarLink={false}
        footerText={`Didn't see your question? Ask Joe — ${PHONE}`}
      />
      <FinalCTA
        eyebrow="Ready to See Your Offer?"
        heading="Ready to See Your Northport Cash Offer?"
        description="If you're ready to see what a cash offer for your Northport house could look like, We Buy Tuscaloosa Homes will give you a straightforward, no-obligation number from a local buyer. We buy houses in Northport, AL and across Tuscaloosa County in any condition — and you pick the closing date."
        checklist={[
          "You call (803) 784-7672 or submit the short form with your property details.",
          "We have a quick conversation and, if you'd like, schedule a brief walkthrough.",
          "You receive a clear cash offer with no pressure and no upfront fees.",
          "You choose whether to accept, ask questions, or walk away — it's your decision.",
        ]}
        subtext="You don't have to be sure a cash sale is right for you before you contact us. Many Northport homeowners reach out just to compare options and understand how a local buyer like us might help."
        primaryCtaLabel="Get My Free Northport Cash Offer"
        secondaryCtaLabel={`${PHONE} — Call or Text`}
      />
    </>
  );
}
