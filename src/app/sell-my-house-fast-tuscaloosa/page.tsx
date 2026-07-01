import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LocalMarket } from "@/components/LocalMarket";
import { MarketInsightsPanel } from "@/components/MarketInsightsPanel";
import { MeetJoe } from "@/components/MeetJoe";
import { ServiceArea } from "@/components/ServiceArea";
import { SellerSituations } from "@/components/SellerSituations";
import { StatsRibbon } from "@/components/StatsRibbon";
import { Testimonials } from "@/components/Testimonials";
import { TransparentPricing } from "@/components/TransparentPricing";
import {
  tuscaloosaComparisonColumns,
  tuscaloosaComparisonRows,
  tuscaloosaFaqs,
  tuscaloosaHeroBenefits,
  tuscaloosaHeroStats,
  tuscaloosaMarketFootnote,
  tuscaloosaMarketParagraphs,
  tuscaloosaMarketStats,
  tuscaloosaMeetJoeParagraphs,
  tuscaloosaPageSchema,
  tuscaloosaProcessSteps,
  tuscaloosaSituations,
  tuscaloosaTestimonialSlides,
  tuscaloosaWhoWeHelpItems,
  tuscaloosaWhyParagraphs,
  tuscaloosaWhyStats,
} from "@/data/tuscaloosa";

export const metadata: Metadata = {
  title: "Sell My House Fast in Tuscaloosa | Local Cash Home Buyers",
  description:
    "Need to sell your house fast in Tuscaloosa? We buy houses for cash, as-is, with no fees or repairs. Close in as little as 7–14 days and see if your offer is fair today.",
  keywords: ["sell my house fast tuscaloosa"],
  alternates: {
    canonical: "/sell-my-house-fast-tuscaloosa",
  },
};

const PHONE = "(803) 784-7672";

export default function TuscaloosaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tuscaloosaPageSchema),
        }}
      />
      <Hero
        eyebrow="Tuscaloosa, Alabama · Local Cash Buyer"
        heading={
          <>
            Sell My House Fast in{" "}
            <span className="text-teal">Tuscaloosa, Alabama</span> for a Fair
            Cash Offer
          </>
        }
        description="We buy houses for cash, as-is, in Tuscaloosa — close in as little as 7–14 days with no repairs, no fees, and no agent commissions. Whether you're dealing with an inherited property, falling behind on payments, or just tired of managing a rental, we make the process simple and pressure-free. You'll work directly with a local Tuscaloosa buyer, not a call center, and get a real, written offer based on your home's condition and recent nearby sales. There's no obligation to accept, and you choose the closing date that works best for you."
        benefits={tuscaloosaHeroBenefits}
        showJoeCard={false}
      />
      <StatsRibbon stats={tuscaloosaHeroStats} />
      <LocalMarket
        sectionId="why-sell"
        eyebrow="Why Sell to a Local Cash Buyer?"
        heading="Why Tuscaloosa Homeowners Choose a Fast Cash House Sale"
        paragraphs={tuscaloosaWhyParagraphs}
        benefits={null}
        stats={tuscaloosaWhyStats}
        footnote="BBB Accredited Business — We Buy Tuscaloosa Homes · Joe LeBlanc, Founder"
        showResourceLinks={false}
        showSidebarCta={false}
      />
      <Testimonials
        display="carousel"
        eyebrow="Reviews"
        heading="What Tuscaloosa Homeowners Say About Selling to Joe"
        description="Local sellers use our cash-offer process to avoid showings, fix-ups, and months of uncertainty."
        slides={tuscaloosaTestimonialSlides}
      />
      <HowItWorks
        eyebrow="Simple 3-Step Process"
        heading="How Selling Your Tuscaloosa Home for Cash Works"
        description="To sell my house fast in Tuscaloosa for cash, you share a few details, get a fair offer, and choose a closing date that works for you. No listings, no repairs, no waiting."
        steps={tuscaloosaProcessSteps}
      />
      <SellerSituations
        layout="situations"
        sectionId="situations"
        eyebrow="Situations We Buy In"
        heading={
          <>
            Where We Buy Houses Fast in{" "}
            <em className="text-teal italic">Tuscaloosa</em>
          </>
        }
        description="Many sellers wonder if their situation is &quot;too complicated.&quot; In reality, we help with a wide range of real-life challenges in Tuscaloosa and nearby areas."
        situations={tuscaloosaSituations}
        footerText="If your situation isn't listed here, you're not an exception — it just means we haven't met yet."
        ctaHref="#contact"
      />
      <LocalMarket
        sectionId="who-qualifies"
        eyebrow="Who Qualifies"
        heading="Who We Help When You Need to Sell a House Fast in Tuscaloosa"
        paragraphs={[
          "We work with almost any homeowner in Tuscaloosa who needs a fast, as-is sale, including:",
        ]}
        benefitsTitle="Homeowners we work with"
        benefits={tuscaloosaWhoWeHelpItems}
        showBenefitsOutro={false}
        stats={[]}
        imageSrc="/assets/Tuscaloosa-page-another-image.webp"
        imageAlt="Joe LeBlanc, local Tuscaloosa cash home buyer"
        showResourceLinks={false}
        showSidebarCta={false}
      />
      <ComparisonTable
        id="compare"
        eyebrow="Cash Offer vs. Listing"
        heading="Cash Home Buyers in Tuscaloosa vs. Listing With an Agent"
        description="In Tuscaloosa, you can either list with an agent and wait for the right buyer, or sell directly to cash home buyers Tuscaloosa sellers use when they need to move quickly."
        columns={tuscaloosaComparisonColumns}
        rows={tuscaloosaComparisonRows}
        closingText="A traditional listing can work well if your house is updated and you have time. A cash sale makes more sense when speed, certainty, and simplicity matter most."
        showCta={true}
        ctaLabel={`Compare Your Tuscaloosa Options With Us — ${PHONE}`}
        ctaHref="tel:8037847672"
      />
      <MarketInsightsPanel
        sectionId="market"
        eyebrow="2026 Data"
        heading={
          <>
            Tuscaloosa Home-Selling Market: What Sellers Need to Know in{" "}
            <span className="text-teal">2026</span>
          </>
        }
        paragraphs={tuscaloosaMarketParagraphs}
        stats={tuscaloosaMarketStats}
        footnote={tuscaloosaMarketFootnote}
        ctaHref="#offer-form"
      />
      <ServiceArea ctaHref="#contact" />
      <MeetJoe
        eyebrow="Your Local Tuscaloosa Cash Buyer"
        heading="Meet Joe LeBlanc, Your Local Tuscaloosa Home Buyer"
        roleLabel="Founder / Owner, We Buy Tuscaloosa Homes"
        paragraphs={tuscaloosaMeetJoeParagraphs}
        ctaLabel={`Call Joe — ${PHONE}`}
      />
      <TransparentPricing
        eyebrow="Pricing Transparency"
        heading={
          <>
            How We Decide on Your{" "}
            <em className="text-teal italic">Cash Offer in Tuscaloosa</em>
          </>
        }
        description="Cash buyers typically base offers on estimated after-repair value (ARV) minus repair costs, holding costs, and a reasonable profit margin. We explain this in plain numbers so you can decide whether it feels right."
        ctaLabel={`Get My Real Cash Offer — ${PHONE}`}
        ctaHref="tel:8037847672"
      />
      <FAQ
        faqs={[...tuscaloosaFaqs]}
        eyebrow="Questions & Answers"
        heading={
          <>
            Tuscaloosa Cash Home Buyer —{" "}
            <span className="text-teal">FAQ</span>
          </>
        }
        description="Common questions Tuscaloosa homeowners ask when considering a fast cash sale. Each answer starts with a direct, clear response you can rely on."
        defaultOpenId="how-fast"
        includeSchema={false}
        showNarLink={false}
        footerText={`Still have questions about how to sell my house fast in Tuscaloosa? Call Joe directly at ${PHONE}.`}
      />
      <FinalCTA
        eyebrow="Ready to Sell?"
        heading="Ready to Get a Cash Offer? We Buy Tuscaloosa Homes Fast."
        description="If you're ready to sell my house fast in Tuscaloosa, We Buy Tuscaloosa Homes can give you a local, fair cash offer, buy your house as-is, and help you close on your schedule with no commissions or hidden fees."
        checklist={[
          "Fast answers: A real local buyer reviews your info and contacts you, usually within one business day.",
          "Straightforward numbers: We explain how we arrived at your cash offer so you can judge whether it's fair.",
          "No-pressure decision: You're free to compare options and only move forward if it makes sense.",
        ]}
        subtext="No obligation · No fees · No repairs · Close on your schedule"
        primaryCtaLabel="Get My Free Tuscaloosa Cash Offer"
        secondaryCtaLabel={`Call ${PHONE}`}
      />
    </>
  );
}
