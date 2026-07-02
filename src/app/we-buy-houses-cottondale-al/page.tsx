import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { SimpleProcessPanel } from "@/components/SimpleProcessPanel";
import { StatsRibbon } from "@/components/StatsRibbon";
import { IsItRightForYou } from "@/components/how-it-works/IsItRightForYou";
import { SellerSituations } from "@/components/SellerSituations";
import { ServiceArea } from "@/components/ServiceArea";
import {
  cottondaleComparisonColumns,
  cottondaleComparisonRows,
  cottondaleFaqs,
  cottondaleHeroBenefits,
  cottondaleHeroStats,
  cottondalePageSchema,
  cottondaleProcessSteps,
  cottondaleReputationItems,
  cottondaleSellerAppreciationItems,
  cottondaleSituations,
} from "@/data/cottondale";

export const metadata: Metadata = {
  title: "We Buy Houses in Cottondale, AL | Local Cash Home Buyers",
  description:
    "We buy houses in Cottondale, AL for cash, as-is, with no fees and a closing as fast as 7 days. Get a free, no-obligation cash offer from a local Tuscaloosa home buyer.",
  keywords: ["we buy houses cottondale al"],
  alternates: {
    canonical: "/we-buy-houses-cottondale-al",
  },
};

const PHONE = "(803) 784-7672";

export default function CottondalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cottondalePageSchema),
        }}
      />
      <Hero
        eyebrow="Cottondale, AL · Tuscaloosa Area"
        heading={
          <>
            We Buy Houses in <span className="text-teal">Cottondale, AL</span>{" "}
            for Cash, As-Is
          </>
        }
        description="If you need to sell fast, we buy houses in Cottondale, AL for cash, as-is, on the timeline that works for you. At We Buy Tuscaloosa Homes, you deal directly with a local owner, not a national call center, and you can choose a closing date as soon as 7 days without making repairs or paying commissions."
        secondaryDescription="From long-time family homes to rental properties and fixer-uppers, we've helped homeowners throughout the Cottondale area sell quickly without the traditional stress. Our local approach means you'll receive a fair cash offer and a process tailored to your timeline—not someone else's."
        benefits={cottondaleHeroBenefits}
        showJoeCard={false}
      />
      <StatsRibbon stats={cottondaleHeroStats} />
      <SimpleProcessPanel
        sectionId="how-it-works"
        eyebrow="Simple Process"
        heading="How Our Cash Home Buying Process Works in Cottondale, AL"
        description="Our process to buy houses in Cottondale, AL is simple and built for speed. You share a few details about your property, we review it as local cash home buyers, and you choose the closing date that works for you."
        steps={cottondaleProcessSteps}
        footnote="If you want a quick house sale in Cottondale with fewer steps and less stress, this three-step process is designed for you."
        ctaHref="#contact"
        ctaLabel="Start Step 1 – Share Your Property Details"
      />
      <ComparisonTable
        id="compare"
        eyebrow="Compare Your Options"
        heading="Selling to We Buy Tuscaloosa Homes vs. a Traditional Cottondale Listing"
        description="Selling your Cottondale house for cash can be faster and simpler than a traditional listing, depending on your priorities. Use the comparison below to see how working with We Buy Tuscaloosa Homes stacks up against listing with an agent when you need to sell my house fast in Cottondale."
        columns={cottondaleComparisonColumns}
        rows={cottondaleComparisonRows}
        closingText="If your top concern is speed, simplicity, and certainty, working with a local cash home buyer like We Buy Tuscaloosa Homes can be the better fit than a traditional listing."
        showCta={true}
        ctaLabel="See Your Cash Option for Your Cottondale House"
        ctaHref="#contact"
      />
      <SellerSituations
        layout="situations"
        sectionId="who-we-help"
        eyebrow="Who We Help"
        heading="Homeowners We Help in Cottondale and the Tuscaloosa Area"
        description="We help Cottondale and Tuscaloosa-area homeowners who need a fast, predictable sale without the usual stress. If you recognise yourself in any of these situations, a local cash offer could be a good fit."
        situations={cottondaleSituations}
        footerText="If you need to sell without an agent in Cottondale and want to know whether a cash buyer is the right fit, We Buy Tuscaloosa Homes is happy to talk through your options."
        ctaHref="#contact"
      />
      <IsItRightForYou
        variant="trust-compare"
        eyebrow="Local Trust"
        heading="Why Cottondale Sellers Trust We Buy Tuscaloosa Homes"
        description="We Buy Tuscaloosa Homes is a local company with a strong reputation for honest, straightforward cash offers. You deal directly with owner Joe LeBlanc, not a call center, and you can see what other sellers in the Tuscaloosa area say about working with us."
        goodTitle="Verified Local Reputation"
        goodItems={cottondaleReputationItems}
        considerTitle="What Local Sellers Appreciate Most"
        considerItems={cottondaleSellerAppreciationItems}
        considerNote={null}
        showIntroBand={false}
        showFooter={false}
        footnote={
          <>
            When you are choosing a cash home buyer in Cottondale, look for a
            clear local presence, real reviews, and closings handled by
            reputable local title companies — all of which We Buy Tuscaloosa
            Homes provides.{" "}
            <a href="#reviews" className="font-semibold text-teal">
              Read seller reviews
            </a>
          </>
        }
      />
      <ServiceArea ctaHref="#contact" />
      <FAQ
        faqs={[...cottondaleFaqs]}
        eyebrow="Frequently Asked Questions"
        heading={
          <>
            Frequently Asked Questions About Selling Your Cottondale House for{" "}
            <span className="text-teal">Cash</span>
          </>
        }
        description="Below are answers to common questions Cottondale and Tuscaloosa-area homeowners ask when they look for we buy houses in Cottondale, AL services."
        defaultOpenId="how-it-works"
        showNarLink={false}
        footerText={`Ask Us a Question About Your Cottondale House — ${PHONE}`}
      />
      <FinalCTA
        eyebrow="Ready to Sell?"
        heading="Get Your Free Cash Offer for Your Cottondale, AL House"
        description="You can sell your house fast in Cottondale, AL without repairs, showings, or commissions. We Buy Tuscaloosa Homes is a local, owner-operated cash home buyer that gives you a clear offer and a closing date that fits your life."
        checklist={[
          "Local expertise: A cash offer from a buyer who knows Cottondale and the Tuscaloosa market",
          "As-is sale: No repairs needed, no cleaning or staging required",
          "Flexible closing: Choose a date that works for you — often in as little as 7 days",
        ]}
        subtext="If you are ready to see your options, take the first step toward a quick house sale in Cottondale today."
        primaryCtaLabel="Get Your Free Cottondale Cash Offer"
        secondaryCtaLabel={`${PHONE} — Call or Text`}
      />
    </>
  );
}
