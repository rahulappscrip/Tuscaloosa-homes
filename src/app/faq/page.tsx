import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { SellerSituations } from "@/components/SellerSituations";
import { FaqBreadcrumb } from "@/components/faq/FaqBreadcrumb";
import { FaqPageSchema } from "@/components/faq/FaqPageSchema";
import { FaqTopicExplorer } from "@/components/faq/FaqTopicExplorer";

export const metadata: Metadata = {
  title: "Sell House FAQ in Tuscaloosa, AL | Honest Cash Answers",
  description:
    "FAQ about selling your house in Tuscaloosa. Clear answers on cash offers, foreclosure, repairs, and timing — plus how We Buy Tuscaloosa Homes works.",
  alternates: {
    canonical: "/faq",
  },
};

const PHONE = "(803) 784-7672";

export default function FaqPage() {
  return (
    <>
      <FaqPageSchema />
      <FaqBreadcrumb />
      <Hero
        eyebrow="Tuscaloosa, AL · Honest Answers"
        heading={
          <>
            FAQ About Selling Your House In{" "}
            <span className="text-teal">Tuscaloosa For Cash</span>
          </>
        }
        description="Straight answers to the questions Tuscaloosa sellers ask most — about the process, pricing, foreclosure, repairs, and how We Buy Tuscaloosa Homes works. Use the category buttons below to jump to what matters most to you."
        benefits={[
          "Written by Joe LeBlanc, Founder",
          "5.0 ★ · 103+ verified reviews",
          "Updated 2026",
        ]}
      />
      <SellerSituations />
      <FaqTopicExplorer />
      <FinalCTA
        eyebrow="We Buy Tuscaloosa Homes"
        heading={
          <>
            Still have questions?{" "}
            <span className="text-teal">Call Joe directly.</span>
          </>
        }
        description="Joe answers his own phone, visits properties personally, and delivers a written offer within 48 hours of a walkthrough. Free, no pressure, no obligation to accept."
        checklist={[
          "Talk directly with Joe — not a call center",
          "Written offer with full breakdown",
          "No repairs or showings required",
          "Close in 7 days or on your timeline",
        ]}
        subtext=""
        primaryCtaLabel="Get My Free Cash Offer"
        secondaryCtaLabel={`Call Joe — ${PHONE}`}
        consentText="By contacting us you agree to receive transactional communications from We Buy Tuscaloosa Homes via SMS, calls, and email about your property inquiry. Reply STOP to opt out. Your info is never sold."
      />
    </>
  );
}
