export function HowItWorksPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "We Buy Tuscaloosa Homes",
        url: "https://webuytuscaloosahomes.com/",
        telephone: "(803) 784-7672",
        email: "joe@webuytuscaloosahomes.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1301 McFarland Blvd N, Suite 200",
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
        founder: { "@type": "Person", name: "Joe LeBlanc" },
        sameAs: ["https://maps.app.goo.gl/NkdfHYX1ww7PasLR9"],
      },
      {
        "@type": "HowTo",
        name: "How to Sell Your House Fast for Cash in Tuscaloosa",
        description:
          "The exact 3-step process to sell your Tuscaloosa house for cash — no repairs, no commissions, close in as little as 7 days.",
        totalTime: "P7D",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Tell Joe About Your House",
            text: "Call, text, or fill out the short form with your Tuscaloosa property address and basic details. Joe or a team member typically follows up the same day.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Get a Written Cash Offer",
            text: "Joe schedules a quick walkthrough — no cleaning or repairs needed. After the visit, he presents a clear written cash offer, often within 24 hours, with a full explanation of how he arrived at the number.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Choose Your Closing Date and Get Paid",
            text: "If you accept, you pick the closing date — as fast as 7 days or longer if you need time. Joe works with a trusted Alabama title company, pays standard closing costs, and you receive your cash at closing.",
          },
        ],
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
            name: "How It Works",
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
