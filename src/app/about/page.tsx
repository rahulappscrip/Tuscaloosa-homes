import type { Metadata } from "next";
import Link from "next/link";
import { AboutBreadcrumb } from "@/components/about/AboutBreadcrumb";
import { AboutPageSchema } from "@/components/about/AboutPageSchema";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MeetJoe } from "@/components/MeetJoe";
import { StatsRibbon } from "@/components/StatsRibbon";
import { Testimonials } from "@/components/Testimonials";
import { SellerSituations } from "@/components/SellerSituations";
import { CtaBand } from "@/components/how-it-works/CtaBand";
import { IsItRightForYou } from "@/components/how-it-works/IsItRightForYou";
import { WhereWeBuy } from "@/components/how-it-works/WhereWeBuy";
import {
  aboutCtaBands,
  aboutFaqs,
  aboutHeroContent,
  aboutMeetJoeContent,
  aboutPageStats,
  aboutProcessSteps,
  aboutTestimonialSlides,
  aboutWhereWeBuyAreas,
  localVsNationalRows,
  whyLocalMattersContent,
  whySellersTrustContent,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About We Buy Tuscaloosa Homes | Local Cash Buyers",
  description:
    "Learn who's behind We Buy Tuscaloosa Homes, how Joe LeBlanc helps locals sell fast for cash, and why homeowners trust our local team. No fees, no repairs, close in 7 days.",
  alternates: {
    canonical: "/about",
  },
};

const PHONE = "(803) 784-7672";
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/NkdfHYX1ww7PasLR9";

export default function AboutPage() {
  return (
    <>
      <AboutPageSchema />
      <AboutBreadcrumb />
      <Hero
        eyebrow={aboutHeroContent.eyebrow}
        heading={
          <>
            We buy <span className="text-teal">Tuscaloosa</span> homes — with
            Joe personally on every deal.
          </>
        }
        description={aboutHeroContent.description}
        benefits={aboutHeroContent.badges}
      />
      <StatsRibbon stats={aboutPageStats} />
      <IsItRightForYou
        eyebrow={whySellersTrustContent.eyebrow}
        heading={whySellersTrustContent.heading}
        description={whySellersTrustContent.description}
        goodTitle={whySellersTrustContent.goodTitle}
        goodItems={whySellersTrustContent.goodItems}
        considerTitle={whySellersTrustContent.considerTitle}
        considerItems={whySellersTrustContent.considerItems}
        considerNote={whySellersTrustContent.considerNote}
      />
      <CtaBand {...aboutCtaBands[0]} />
      <SellerSituations
        eyebrow="Who We Help"
        heading="Who we help when we buy homes in Tuscaloosa"
        description="We work with Tuscaloosa homeowners in all kinds of situations — but these are the scenarios we handle most often, and where a cash sale tends to make the clearest sense."
      />
      <HowItWorks
        heading="How our Tuscaloosa home-buying process works"
        description="Four steps from first call to cash in hand. You control the pace at every stage, and you can step back at any point — no obligation until you sign a purchase contract."
        steps={aboutProcessSteps.map((step, index) => ({
          num: index + 1,
          title: step.title,
          description: step.description,
        }))}
        footnote="Joe encourages you to compare his offer with a realtor's estimate. A confident decision is better for everyone — including him."
      />
      <MeetJoe
        eyebrow={aboutMeetJoeContent.eyebrow}
        heading={aboutMeetJoeContent.heading}
        roleLabel={aboutMeetJoeContent.roleLabel}
        paragraphs={aboutMeetJoeContent.paragraphs}
        credentials={[...aboutMeetJoeContent.cardCredentials]}
        facts={[
          { value: "7 days", label: "Fastest close" },
          { value: "48 hrs", label: "Written offer turnaround" },
          { value: "5.0 ★", label: "Google rating (103+)" },
          { value: "BBB A+", label: "Accredited since 2018" },
        ]}
      />
      <Testimonials
        slides={aboutTestimonialSlides}
        eyebrow="What Sellers Say"
        heading="What Tuscaloosa homeowners say about working with us"
        description={
          <>
            5.0 out of 5.0 · 103+ verified Google reviews · BBB A+ Accredited
            under High Noon Home Buyers. Read our reviews at{" "}
            <Link
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal transition-colors hover:text-teal-dark"
            >
              Google Business Profile
            </Link>
            .
          </>
        }
      />
      <CtaBand {...aboutCtaBands[1]} />
      <IsItRightForYou
        headingId="local-matters-heading"
        eyebrow={whyLocalMattersContent.eyebrow}
        heading={whyLocalMattersContent.heading}
        description={whyLocalMattersContent.description}
        goodTitle={whyLocalMattersContent.localHeader}
        goodItems={localVsNationalRows.map((row) => row.local)}
        considerTitle={whyLocalMattersContent.nationalHeader}
        considerItems={localVsNationalRows.map((row) => row.national)}
        considerNote={null}
        showFooter={false}
        footnote={
          <>
            {whyLocalMattersContent.footnote.split(
              whyLocalMattersContent.footnoteLink.label,
            )[0]}
            <Link
              href={whyLocalMattersContent.footnoteLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal transition-colors hover:text-teal-dark"
            >
              {whyLocalMattersContent.footnoteLink.label}
            </Link>
            {whyLocalMattersContent.footnote.split(
              whyLocalMattersContent.footnoteLink.label,
            )[1]}
          </>
        }
      />
      <WhereWeBuy
        eyebrow="Where We Buy"
        heading="Where we buy homes in Tuscaloosa and nearby"
        description="We buy houses across Tuscaloosa and West Alabama. If you're in any of these areas — or nearby — call Joe to confirm your address is in our service area."
        areas={aboutWhereWeBuyAreas}
        footnote="Not listed? Call Joe at (803) 784-7672 — if we don't buy there, we'll say so and point you in the right direction."
      />
      <FAQ
        faqs={[...aboutFaqs]}
        eyebrow="FAQ"
        heading="About We Buy Tuscaloosa Homes — frequently asked questions"
        description=""
        defaultOpenId="legitimate"
        includeSchema={false}
        showNarLink={false}
        footerText={`Have a question not listed here? Ask Joe directly — ${PHONE}`}
      />
      <FinalCTA
        eyebrow="We Buy Tuscaloosa Homes"
        heading={
          <>
            Ready to talk with Joe about selling your{" "}
            <span className="text-teal">Tuscaloosa home?</span>
          </>
        }
        description="Call or fill out the short form. Joe will respond personally, schedule a quick walkthrough at your convenience, and deliver a written cash offer within 48 hours — with the full math shown. No obligation to accept. No pressure. Ever."
        checklist={[
          "Joe answers his own phone",
          "Written offer within 48 hours",
          "No repairs, no showings, no listing delays",
          "Close in 7 days or on your schedule",
          "Zero obligation to accept",
        ]}
        subtext=""
        primaryCtaLabel="Get My Free Cash Offer"
        secondaryCtaLabel={`Call Joe — ${PHONE}`}
        consentText="By contacting us you agree to receive transactional communications from We Buy Tuscaloosa Homes via SMS, calls, and email about your property inquiry. Reply STOP to opt out. Your info is never sold."
      />
    </>
  );
}
