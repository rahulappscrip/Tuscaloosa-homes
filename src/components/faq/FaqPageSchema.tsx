import { faqPageMainFaqs } from "@/data/faq-page";

const schemaFaqs = faqPageMainFaqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export function FaqPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "We Buy Tuscaloosa Homes",
        url: "https://webuytuscaloosahomes.com/",
        logo: "https://webuytuscaloosahomes.com/wp-content/uploads/logo.png",
        telephone: "(803) 784-7672",
        email: "joe@webuytuscaloosahomes.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1520 Stillwater Dr",
          addressLocality: "Tuscaloosa",
          addressRegion: "AL",
          postalCode: "35406",
        },
        areaServed: "Tuscaloosa, Alabama and West Alabama",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "103",
        },
        sameAs: ["https://maps.app.goo.gl/NkdfHYX1ww7PasLR9"],
      },
      {
        "@type": "Person",
        name: "Joe LeBlanc",
        jobTitle: "Founder, Owner, and CEO",
        url: "https://webuytuscaloosahomes.com/about/",
        worksFor: {
          "@type": "Organization",
          name: "We Buy Tuscaloosa Homes",
        },
      },
      {
        "@type": "HowTo",
        name: "How to Sell Your Tuscaloosa House for Cash",
        description:
          "The 4-step process to sell your Tuscaloosa home to We Buy Tuscaloosa Homes.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Call or fill out the form",
            text: "Share your address, basic condition, and preferred timeline. No paperwork or commitment required.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Quick walkthrough",
            text: "Joe visits the property — no cleaning, repairs, or staging needed. Usually 20–30 minutes.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Receive your written cash offer",
            text: "Within 48 hours, Joe delivers a written offer with full math breakdown. No obligation to accept.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Choose your closing date",
            text: "Accept and pick your date — as fast as 7 days or longer if you need time. Joe handles all paperwork.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: schemaFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://webuytuscaloosahomes.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "FAQ — Selling Your House in Tuscaloosa",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
