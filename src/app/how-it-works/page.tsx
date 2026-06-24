import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { LocalMarket } from "@/components/LocalMarket";
import { MeetJoe } from "@/components/MeetJoe";
import { StatsRibbon } from "@/components/StatsRibbon";
import { Testimonials } from "@/components/Testimonials";
import { SellerSituations } from "@/components/SellerSituations";
import { CtaBand } from "@/components/how-it-works/CtaBand";
import { HowItWorksBreadcrumb } from "@/components/how-it-works/HowItWorksBreadcrumb";
import { HowItWorksPageSchema } from "@/components/how-it-works/HowItWorksPageSchema";
import { IsItRightForYou } from "@/components/how-it-works/IsItRightForYou";
import { ProcessTimeline } from "@/components/how-it-works/ProcessTimeline";
import { WhereWeBuy } from "@/components/how-it-works/WhereWeBuy";
import {
  ctaBands,
  howItWorksFaqs,
  howItWorksHeroSteps,
  howItWorksPageStats,
  howItWorksTestimonialSlides,
} from "@/data/how-it-works";

export const metadata: Metadata = {
  title: "Sell My House Fast for Cash in Tuscaloosa | How It Works",
  description:
    "See exactly how to sell your Tuscaloosa house fast for cash — no repairs, fees, or showings. Step-by-step process, timelines, and what to expect at every stage.",
  alternates: {
    canonical: "/how-it-works",
  },
};

const PHONE = "(803) 784-7672";

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksPageSchema />
      <HowItWorksBreadcrumb />
      <Hero
        eyebrow="How to Sell Your House Fast for Cash in Tuscaloosa, AL"
        heading={
          <>
            Sell Your Tuscaloosa House Fast for Cash in{" "}
            <span className="text-teal">3 Simple Steps</span>
          </>
        }
        description="No repairs. No commissions. No showings. Here&apos;s exactly what happens from first contact to cash in hand — and how fast it can move."
        steps={howItWorksHeroSteps}
      />
      <StatsRibbon stats={howItWorksPageStats} />
      <ProcessTimeline />
      <CtaBand {...ctaBands[0]} />
      <IsItRightForYou />
      <Testimonials
        slides={howItWorksTestimonialSlides}
        eyebrow="What Sellers Say"
        heading="Tuscaloosa sellers who went through our simple process"
      />
      <LocalMarket
        heading={
          <>
            Tuscaloosa market: what home sellers need to know in{" "}
            <span className="text-teal">2026</span>
          </>
        }
        paragraphs={[
          "In 2026, the Tuscaloosa market has more competition among sellers than buyers in many price ranges — meaning listed homes can sit longer, especially those needing work or in less-updated condition. Buyers are also more likely to negotiate repairs and concessions after inspection.",
          "A traditional listing often looks like: clean and repair the house, hire an agent, host showings for weeks, negotiate after inspection, then wait for the buyer's lender to approve the loan. That path makes sense if your home is in great shape and you have time.",
          "When you work with a local cash buyer like Joe, you skip all of that. No repairs, no showings, no lender — just a clear offer and a closing date you control. For sellers who need to move on a specific timeline, the trade-off in price is often worth the trade-off in speed and certainty.",
        ]}
        benefits={null}
        stats={[
          {
            value: "$271,050",
            label: "Median Tuscaloosa sale price",
            accent: "teal",
          },
          {
            value: "~33 days",
            label: "Typical days to go pending on MLS",
            accent: "gold",
          },
          {
            value: "7–21 days",
            label: "Typical close with a cash buyer",
            accent: "teal",
          },
          {
            value: "5–6%",
            label: "Typical agent commission in AL",
            accent: "gold",
          },
        ]}
        footnote="Market data sourced from Alabama Center for Real Estate (ACRE) Tuscaloosa area reports, 2025–2026."
        showResourceLinks={false}
        ctaHref="#contact"
      />
      <WhereWeBuy />
      <CtaBand {...ctaBands[1]} />
      <MeetJoe
        eyebrow="The Local Team"
        heading="Meet Joe and the local team behind your cash offer"
        roleLabel="Founder & CEO, We Buy Tuscaloosa Homes"
        paragraphs={[
          "Joe is the founder and CEO of We Buy Tuscaloosa Homes — a local, founder-led cash home buying company serving Tuscaloosa and West Alabama. He is involved in every transaction personally, from the first call through closing.",
          "Joe leads the High Noon Home Buyers family of brands, which has helped scores of homeowners across Alabama sell houses as-is for cash. His approach has always been the same: listen first, explain the numbers clearly, and never pressure anyone into a decision that isn't right for them.",
          "When you call, you'll speak with Joe or a small team member he trusts — not a call center or a national franchise rep. The goal is a clear, honest cash offer and advice you'd be comfortable sharing with a friend or family member.",
        ]}
        facts={[
          { value: "7 days", label: "Fastest close" },
          { value: "$0", label: "Commission to you" },
          { value: "24 hrs", label: "Offer turnaround" },
          { value: "5.0 ★", label: "Google rating (103+)" },
        ]}
        credentials={[
          "University of South Carolina Graduate · 10+ Years Real Estate & Business Experience",
          "BBB A+ Accredited · 5.0 Google Rating from 103+ Verified Reviews",
        ]}
      />
      <SellerSituations
        layout="pricing"
        sectionId="offer-math"
        sectionClassName="bg-white py-10"
        ctaHref="#contact"
      />
      <FAQ
        faqs={[...howItWorksFaqs]}
        eyebrow="FAQ"
        heading={
          <>
            Tuscaloosa cash home sale —{" "}
            <span className="text-teal">frequently asked questions</span>
          </>
        }
        description=""
        defaultOpenId="process"
        includeSchema={false}
        showNarLink={false}
      />
      <FinalCTA
        eyebrow="We Buy Tuscaloosa Homes"
        heading={
          <>
            Ready to see how our{" "}
            <span className="text-teal">Tuscaloosa cash offer</span> would work
            for you?
          </>
        }
        description="Fill out the short form or call Joe directly. You'll have a written offer with a full breakdown within 24 hours — and you're not obligated to accept."
        checklist={[
          "No repairs or cleaning before you sell",
          "No agent commissions or fees",
          "No obligation to accept the offer",
          "Close in 7 days or on your timeline",
        ]}
        subtext=""
        primaryCtaLabel="Get My Free Cash Offer"
        secondaryCtaLabel={`Call Joe — ${PHONE}`}
        consentText="By submitting you agree to receive SMS, calls, and emails about your property inquiry from We Buy Tuscaloosa Homes. Reply STOP to opt out. Your info is never sold."
      />
    </>
  );
}
