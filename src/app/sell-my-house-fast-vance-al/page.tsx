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
import { TransparentPricing } from "@/components/TransparentPricing";
import { WhatToExpectPanel } from "@/components/WhatToExpectPanel";
import {
  vanceCashProsItems,
  vanceFaqs,
  vanceHeroBenefits,
  vanceListingConsItems,
  vanceMarketParagraphs,
  vanceMeetJoeCredentials,
  vanceMeetJoeParagraphs,
  vancePageSchema,
  vancePricingFormulaSteps,
  vanceProcessSteps,
  vanceSituations,
  vanceThreeWayColumns,
  vanceThreeWayRows,
  vanceWhatToExpectFootnote,
  vanceWhatToExpectSteps,
} from "@/data/vance";

export const metadata: Metadata = {
  title: "Sell My House Fast in Vance, AL | Cash Offer, No Repairs",
  description:
    "Need to sell your house fast in Vance, AL? Get a no-obligation cash offer, no repairs or fees, and close on your timeline with We Buy Tuscaloosa Homes.",
  keywords: ["sell my house fast vance al"],
  alternates: {
    canonical: "/sell-my-house-fast-vance-al",
  },
};

const PHONE = "(803) 784-7672";

export default function VancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vancePageSchema),
        }}
      />
      <Hero
        eyebrow="Vance, Alabama · Tuscaloosa County"
        heading={
          <>
            Sell My House Fast in <span className="text-teal">Vance, AL</span>{" "}
            for a Fair Cash Offer
          </>
        }
        description="If you need to sell your house fast in Vance, AL, We Buy Tuscaloosa Homes can buy it for cash and close on your timeline. We buy Vance houses as-is in any condition, so you skip repairs, showings, and buyer financing headaches."
        secondaryDescription="Whether you're relocating for work, behind on payments, dealing with an inherited property, or just ready to move on from a house that's become a burden — as a local Tuscaloosa-area cash buyer we understand how the Vance market works and use a simple process: tell us about your property, get a fair cash offer, and pick your closing date."
        benefits={vanceHeroBenefits}
        showJoeCard={false}
      />
      <IsItRightForYou
        variant="trust-compare"
        eyebrow="Why Choose a Cash Buyer?"
        heading="Why a Local Cash Buyer Is the Fastest Way to Sell in Vance"
        description="In Vance, the fastest way to sell your house is usually to work with a reputable local cash buyer who can close around your schedule. Here's how your options compare:"
        goodTitle="Cash Buyer"
        goodItems={vanceCashProsItems}
        considerTitle="List With Agent"
        considerItems={vanceListingConsItems}
        considerNote={null}
        showIntroBand={false}
        showFooter={false}
        footnote={
          <>
            You&apos;ll usually come out ahead with a cash sale when you need to
            move in weeks not months, the house needs repairs, you&apos;re
            behind on payments, or you&apos;ve inherited a property in Vance and
            don&apos;t want to manage it long-distance.
          </>
        }
      />
      <ComparisonTable
        id="compare-options"
        eyebrow="Compare Your Options"
        heading="How Selling to a Cash Buyer in Vance Compares to an Agent or FSBO"
        description="A fast home sale Vance cash deal is usually best if you prioritise speed and certainty, while an agent or FSBO can sometimes get a higher price if you have time and are willing to do repairs and showings."
        columns={vanceThreeWayColumns}
        rows={vanceThreeWayRows}
        closingText='For most Vance homeowners who say "I just want to sell quickly without a lot of hassle," the cash-buyer column is the best fit.'
        showCta={true}
        ctaLabel="Compare Your Vance Selling Options with a Free Cash Offer"
        ctaHref="#contact"
      />
      <SellerSituations
        layout="situations"
        sectionId="situations"
        eyebrow="Who We Help"
        heading="Who We Help When You Need to Sell Fast in Vance"
        description="Many different kinds of Vance homeowners end up searching for ways to sell fast. We work with people in all sorts of situations and walk them through a simple, respectful process."
        situations={vanceSituations}
        footerText="Whatever your situation, our goal is to give you straightforward options, not pressure. If your situation isn't listed here but you own a house in or near Vance, you can still reach out."
        ctaHref="#contact"
      />
      <HowItWorks
        sectionId="how-it-works"
        eyebrow="Simple Process"
        heading="How Does Selling My House Fast in Vance Work?"
        description="Selling your house fast in Vance is a simple 4-step process with We Buy Tuscaloosa Homes."
        steps={vanceProcessSteps}
        footnote="Throughout the process, there's no obligation and no pressure. If you decide not to move forward, that's okay."
        className="bg-hero-surface"
      />
      <MarketInsightsPanel
        sectionId="market"
        eyebrow="2026 Market Context"
        heading={
          <>
            Vance, AL Housing Market: What Sellers Need to Know in{" "}
            <span className="text-teal">2026</span>
          </>
        }
        paragraphs={vanceMarketParagraphs}
        stats={[]}
        ctaHref="#contact"
        ctaLabel="See What a Cash Offer Looks Like in Today's Vance Market"
      />
      <ServiceArea
        ctaHref="#contact"
        mapImageAlt="Map showing Vance, AL and nearby Tuscaloosa-area towns where we buy houses for cash"
        mapImageTitle="Sell my house fast Vance AL — service area"
      />
      <MeetJoe
        eyebrow="Local & Founder-Led"
        heading="Meet Your Local Vance-Area Home-Buying Team"
        roleLabel="Owner & Founder — We Buy Tuscaloosa Homes"
        paragraphs={vanceMeetJoeParagraphs}
        credentials={vanceMeetJoeCredentials}
        ctaLabel={`Contact Joe About Your Vance Property — ${PHONE}`}
        imageAlt="Joe LeBlanc, local cash home buyer for sell my house fast Vance AL"
        imageTitle="Sell my house fast Vance AL — meet Joe"
      />
      <TransparentPricing
        eyebrow="Transparent Offer Math"
        heading={
          <>
            How We Make a Fair Cash Offer on Your{" "}
            <em className="text-teal italic">Vance House</em>
          </>
        }
        description="We base our cash offers in Vance on your home's after-repair value, estimated repairs, and a small business margin. That way, you can see how we get from what your house could sell for fixed-up to a cash offer that works for both of us. Our goal is to make a fair cash offer in Vance that we can explain line by line."
        formulaSteps={vancePricingFormulaSteps}
        ctaLabel="Request a Transparent Cash Offer Breakdown"
        ctaHref="#contact"
      />
 
      <WhatToExpectPanel
        sectionId="what-to-expect"
        eyebrow="What to Expect"
        heading="What to Expect When We Buy Your House in Vance"
        description="Here's what actually happens when you sell to us in Vance, step by step."
        steps={vanceWhatToExpectSteps}
        footnote={vanceWhatToExpectFootnote}
        showCta={true}
        ctaHref="#contact"
        ctaLabel="Schedule a Quick Walk-Through in Vance"
      />
           <FAQ
        faqs={[...vanceFaqs]}
        eyebrow="Frequently Asked Questions"
        heading={
          <>
            Sell My House Fast in Vance, AL —{" "}
            <span className="text-teal">FAQs</span>
          </>
        }
        description="Tap any question to find clear answers about selling your Vance house fast for cash."
        defaultOpenId="how-fast"
        showNarLink={false}
        footerText={`Still Have Questions? Ask Joe — ${PHONE}`}
      />
      <FinalCTA
        eyebrow="Ready to Sell?"
        heading="Ready to Get a Cash Offer for Your Vance House?"
        description="Tell us about your Vance house and we'll send you a no-obligation cash offer. You won't be asked to make repairs, clean out the property, or pay agent commissions."
        checklist={[
          "A simple, as-is cash sale on your timeline",
          "No fees or commissions taken out of your proceeds",
          "A local buyer you can speak with directly if you have questions",
        ]}
        subtext="Use the short form or call (803) 784-7672 if you'd rather talk it through. You'll hear back quickly with a clear offer and can decide, with no pressure, whether selling your Vance house fast for cash is the right move."
        primaryCtaLabel="Get My Free Cash Offer in Vance"
        secondaryCtaLabel={`${PHONE} — Call or Text`}
        consentText="No obligation, no fees. By contacting us you agree to receive communications from We Buy Tuscaloosa Homes."
        imageAlt="Joe LeBlanc, Vance AL cash home buyer — sell my house fast Vance AL"
        imageTitle="Sell my house fast Vance AL — get your offer"
      />
    </>
  );
}
