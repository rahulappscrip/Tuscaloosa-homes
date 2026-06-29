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
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does your process work to sell my house fast for cash in Tuscaloosa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You contact Joe, he visits the property for a quick walkthrough — no repairs or cleaning needed — then presents a clear written cash offer within 24 hours. If you accept, you choose the closing date. We handle paperwork with a licensed Alabama title company and you receive your cash at closing, often within 7 days.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can I sell my house for cash in Tuscaloosa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Once you accept our offer, we can close in as little as 7 days. The timeline depends on how quickly title work clears and the date you choose. We can also work with longer timelines — 30, 45, or 60 days — if you need time to move.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to make repairs or clean before you buy my house?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. We buy Tuscaloosa houses as-is, in any condition. You don't need to repair, clean, stage, or remove anything. Leave what you don't want — we handle everything after closing.",
            },
          },
          {
            "@type": "Question",
            name: "Are there any fees or commissions when I sell my Tuscaloosa house to a cash home buyer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "None. We charge no agent commissions and no buyer fees. We cover standard closing costs. The offer you accept is the amount deposited at closing, minus any existing mortgage balance or liens paid through the title company.",
            },
          },
          {
            "@type": "Question",
            name: "How do I know a cash offer on my Tuscaloosa house is fair?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Joe explains every line of the offer — after-repair value, estimated repair costs, holding costs, and profit margin. You can compare this to a traditional agent estimate and decide what trade-off makes sense for your situation. There is no pressure to accept.",
            },
          },
          {
            "@type": "Question",
            name: "Can I sell my house fast in Tuscaloosa if I'm facing foreclosure or a court date?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A cash sale can close before a foreclosure sale date as long as there is enough time and equity. Contact Joe as early as possible — the more time available, the more options remain. The mortgage is paid off at closing from the proceeds.",
            },
          },
          {
            "@type": "Question",
            name: "Will you still buy my Tuscaloosa house if it has tenants or is a rental property?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We buy tenant-occupied properties and rentals without requiring vacancy first. We understand Tuscaloosa's rental market — including properties near the University of Alabama — and structure the transaction around the lease situation.",
            },
          },
          {
            "@type": "Question",
            name: "Do you buy inherited houses or estates in Tuscaloosa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We regularly purchase inherited and probate properties in Tuscaloosa. We work directly with personal representatives, executors, and estate attorneys. No repairs or cleanout required before closing.",
            },
          },
          {
            "@type": "Question",
            name: "What areas around Tuscaloosa do cash home buyers usually buy houses in?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We buy houses across Tuscaloosa and West Alabama — including Central Tuscaloosa, Northport, Cottondale, Brookwood, Forest Lake, Indian Hills, Coaling, Gordo, Moundville, and surrounding communities.",
            },
          },
          {
            "@type": "Question",
            name: "Am I obligated to accept a cash offer if I contact a Tuscaloosa cash home buyer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Getting a cash offer from Joe is completely free and comes with no obligation. You can review the numbers, compare with other options, and decline with no consequence. There are no upfront fees and no pressure.",
            },
          },
          {
            "@type": "Question",
            name: "Can I stay in my Tuscaloosa house for a short time after closing with a cash buyer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In many cases yes. If you need a few days or weeks after closing to finish moving, Joe can often arrange a post-closing occupancy agreement. This is discussed during the offer stage so there are no surprises at closing.",
            },
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
