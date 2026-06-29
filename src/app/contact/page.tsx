import type { Metadata } from "next";
import { ContactBreadcrumb } from "@/components/contact/ContactBreadcrumb";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | We Buy Tuscaloosa Homes",
  description:
    "Contact Joe LeBlanc directly for a free, no-obligation cash offer on your Tuscaloosa home. Call (803) 784-7672, email, or submit the form — no call center, no pressure.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactBreadcrumb />
      <ContactSection />
    </>
  );
}
