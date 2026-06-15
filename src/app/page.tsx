import { BusinessSchema } from "@/components/BusinessSchema";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LocalMarket } from "@/components/LocalMarket";
import { MeetJoe } from "@/components/MeetJoe";
import { ServiceArea } from "@/components/ServiceArea";
import { SellerSituations } from "@/components/SellerSituations";
import { StatsRibbon } from "@/components/StatsRibbon";
import { Testimonials } from "@/components/Testimonials";
import { TransparentPricing } from "@/components/TransparentPricing";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <BusinessSchema />
      <Hero />
      <StatsRibbon />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <ComparisonTable />
      <SellerSituations />
      <LocalMarket />
      <ServiceArea />
      <MeetJoe />
      <TransparentPricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
