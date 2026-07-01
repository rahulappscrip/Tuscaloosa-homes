import type { Metadata } from "next";
import Link from "next/link";
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
import { Testimonials } from "@/components/Testimonials";
import { TransparentPricing } from "@/components/TransparentPricing";
import {
  hillcrestComparisonColumns,
  hillcrestComparisonRows,
  hillcrestCoverageParagraphs,
  hillcrestFaqs,
  hillcrestHeroBenefits,
  hillcrestMarketParagraphs,
  hillcrestMeetJoeCredentials,
  hillcrestMeetJoeParagraphs,
  hillcrestPageSchema,
  hillcrestPricingFormulaSteps,
  hillcrestProcessSteps,
  hillcrestSituations,
  hillcrestTestimonialSlides,
  hillcrestWhyBenefits,
  hillcrestWhyStats,
} from "@/data/hillcrest";

export const metadata: Metadata = {
  title: "Sell Your House Fast in Hillcrest Tuscaloosa | Local Cash Buyers",
  description:
    "We buy houses in Hillcrest Tuscaloosa as-is for cash. No repairs, no commissions, close in as little as 7 days. Get your local cash offer today.",
  keywords: ["we buy houses in hillcrest tuscaloosa al"],
  alternates: {
    canonical: "/we-buy-houses-in-hillcrest-tuscaloosa-al",
  },
};

const PHONE = "(803) 784-7672";

export default function HillcrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hillcrestPageSchema),
        }}
      />
      <Hero
        eyebrow="Hillcrest · Tuscaloosa, Alabama"
        heading={
          <>
            We Buy Houses in{" "}
            <span className="text-teal">Hillcrest Tuscaloosa</span> for Cash
          </>
        }
        description="We buy houses in Hillcrest Tuscaloosa, Alabama for cash so you can sell quickly, as-is, without repairs or commissions."
        secondaryDescription="You can sell your Hillcrest house directly to We Buy Tuscaloosa Homes, work one-on-one with local owner Joe LeBlanc, and choose a closing date that works for you — often in as little as 7 days."
        benefits={hillcrestHeroBenefits}
        showJoeCard={false}
      />
      <LocalMarket
        sectionId="why-hillcrest"
        eyebrow="Why Hillcrest Sellers Choose Us"
        heading="Why Hillcrest Homeowners Sell to Our Local Cash Home Buyers"
        paragraphs={[
          "Hillcrest homeowners choose We Buy Tuscaloosa Homes because we make it simple to sell quickly for cash, as-is, with a local buyer you can actually talk to.",
        ]}
        benefits={hillcrestWhyBenefits}
        showBenefitsOutro={false}
        stats={hillcrestWhyStats}
        showResourceLinks={false}
        showSidebarCta={false}
        footerNote={
          <>
            See how our Hillcrest cash offers work — talk directly with Joe, no
            obligation, no pressure.{" "}
            <Link href="/how-it-works" className="font-semibold text-teal">
              How It Works →
            </Link>
          </>
        }
      />
      <SellerSituations
        layout="situations"
        sectionId="situations"
        eyebrow="Who We Help"
        heading="Situations Where We Buy Houses in Hillcrest Tuscaloosa"
        description="We buy houses in Hillcrest Tuscaloosa from owners in many different situations, even when things feel complicated."
        situations={hillcrestSituations}
        footerText="If your situation isn't listed here but you own a house in or near Hillcrest, you can still reach out. Joe will listen to what's going on and let you know if a cash sale is a good fit or if another route might serve you better."
        ctaHref="#contact"
      />
      <HowItWorks
        sectionId="how-it-works"
        eyebrow="Simple Process"
        heading="How Does Our Hillcrest Cash Home Buying Process Work?"
        description="Selling your Hillcrest house to We Buy Tuscaloosa Homes takes just three simple steps: tell us about the property, review your cash offer, and choose your closing date."
        steps={hillcrestProcessSteps}
        footnote="Start with step one — share a few details about your Hillcrest property and we'll reach out with next steps."
        className="bg-hero-surface"
      />
      <Testimonials
        display="carousel"
        eyebrow="What Sellers Say"
        heading="What Hillcrest and Tuscaloosa Homeowners Say About Selling for Cash"
        description="Hillcrest and Tuscaloosa sellers tell us they felt relieved, respected, and surprised by how straightforward it was to sell their house for cash."
        slides={hillcrestTestimonialSlides}
      />
      <ComparisonTable
        id="compare"
        eyebrow="Compare Your Options"
        heading="How Does Selling Your Hillcrest House for Cash Compare to Listing With an Agent?"
        description="If you need maximum speed and certainty, a Hillcrest cash sale can make more sense; if your house is move-in ready and you have time, listing with an agent can sometimes net more money."
        columns={hillcrestComparisonColumns}
        rows={hillcrestComparisonRows}
        closingText="A cash offer will usually be lower than a top-of-market retail price, but you also avoid repairs, commissions, extra months of utilities, and an uncertain timeline. The right choice depends on your house and priorities."
        showCta={true}
        ctaLabel="Check If a Hillcrest Cash Offer Makes Sense for You"
        ctaHref="#contact"
      />
      <MarketInsightsPanel
        sectionId="market"
        eyebrow="2026 Market Snapshot"
        heading={
          <>
            Hillcrest Tuscaloosa Market: What Homeowners Need to Know in{" "}
            <span className="text-teal">2026</span>
          </>
        }
        paragraphs={hillcrestMarketParagraphs}
        stats={[]}
        ctaHref="#contact"
        ctaLabel="Ask Us How Today's Hillcrest Market Affects Your Home"
      />
      <ServiceArea ctaHref="#contact" />
      <MeetJoe
        eyebrow="Local & Founder-Led"
        heading="Meet Joe LeBlanc – Your Local Hillcrest Cash Home Buyer"
        roleLabel="Founder, Owner — We Buy Tuscaloosa Homes"
        paragraphs={hillcrestMeetJoeParagraphs}
        credentials={hillcrestMeetJoeCredentials}
        ctaLabel={`Talk with Joe About Your Hillcrest House — ${PHONE}`}
      />
      <TransparentPricing
        eyebrow="Transparent Offer Math"
        heading={
          <>
            How We Calculate a Fair Cash Offer for Your{" "}
            <em className="text-teal italic">Hillcrest House</em>
          </>
        }
        description="We base your Hillcrest cash offer on three main pieces of information: local after-repair value, estimated repairs, and the costs and risk we take on so you can sell as-is."
        formulaSteps={hillcrestPricingFormulaSteps}
        ctaLabel="Request Your Personalized Hillcrest Cash Offer Breakdown"
        ctaHref="#contact"
      />

      <MarketInsightsPanel
        sectionId="coverage"
        eyebrow="Coverage Confirmation"
        heading="Do We Buy Houses in Your Part of Hillcrest?"
        paragraphs={hillcrestCoverageParagraphs}
        stats={[]}
        ctaHref="#contact"
        ctaLabel="Check If We Buy on Your Hillcrest Street"
      />
            <FAQ
        faqs={[...hillcrestFaqs]}
        eyebrow="Frequently Asked Questions"
        heading={
          <>
            Hillcrest Cash Home Buyer{" "}
            <span className="text-teal">FAQ</span>
          </>
        }
        description="Tap any question below to expand the answer about selling your Hillcrest house for cash."
        defaultOpenId="legitimate"
        includeSchema={false}
        showNarLink={false}
        footerText={`Still Have Questions? Ask Joe — ${PHONE}`}
      />
      <FinalCTA
        eyebrow="Ready to Sell?"
        heading="Ready to Get a Cash Offer for Your Hillcrest Tuscaloosa House?"
        description="If you're ready to explore a cash offer for your Hillcrest Tuscaloosa house, here's what happens next when you reach out to We Buy Tuscaloosa Homes."
        checklist={[
          "You share a few details. Call, text, or use the form to tell Joe about your Hillcrest property and timing.",
          "You receive a no-obligation cash offer. We review local sales and your house's condition, then present a clear, written as-is cash offer.",
          "You choose if and when to close. If it works for you, you pick the closing date and we handle the paperwork with a local title company.",
        ]}
        subtext="No commissions, no repair demands, and no obligation to say yes. You stay in control of the decision the whole time."
        primaryCtaLabel="Get My Free Hillcrest Cash Offer"
        secondaryCtaLabel={`${PHONE} — Call or Text`}
        consentText="By contacting us you agree to receive communications from We Buy Tuscaloosa Homes. No obligation."
      />
    </>
  );
}
