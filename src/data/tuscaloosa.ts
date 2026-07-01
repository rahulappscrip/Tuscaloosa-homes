import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";
import { getSituationImage } from "./situationImages";

export const tuscaloosaHeroBenefits = [
  "Buy As-Is — No Repairs",
  "Zero Fees or Commissions",
  "Close in 7–14 Days",
  "No Obligation to Accept",
] as const;

export const tuscaloosaHeroStats = [
  { value: "Cash Offers", unit: "", label: "Within 24 Hours" },
  { value: "Close in 7 Days", unit: "", label: "Or on your timeline" },
  { value: "No Repairs · No Fees", unit: "", label: "Buy completely as-is" },
  { value: "Local Tuscaloosa Team", unit: "", label: "We know Tuscaloosa" },
] as const;

export const tuscaloosaWhyStats = [
  {
    value: "24",
    label: "Avg. Days on Market — Tuscaloosa County (Apr 2026)",
    accent: "teal" as const,
  },
  {
    value: "7–14",
    label: "Days to Close with a Cash Buyer",
    accent: "gold" as const,
  },
  {
    value: "$285K",
    label: "Median Sale Price — Tuscaloosa (May 2026)",
    accent: "teal" as const,
  },
  {
    value: "0%",
    label: "Agent Commissions when selling direct",
    accent: "gold" as const,
  },
] as const;

export const tuscaloosaWhyParagraphs = [
  "For many Tuscaloosa homeowners, a fast cash house sale trades a bit of potential top-dollar price for speed, certainty, and less stress. Instead of waiting on showings, inspections, and buyer financing, you work directly with cash home buyers Tuscaloosa sellers already use when they need a simple way out.",
  "With a local cash sale, you typically close faster — often in weeks instead of months — skip repairs entirely, and avoid agent commissions. A traditional listing can make sense if you have time and money for repairs. But if you're dealing with foreclosure pressure, an inherited house, a divorce sale, or a rental that's become a headache, the predictability of a cash offer is often more valuable.",
  "We buy houses for cash, as-is, in Tuscaloosa — close in as little as 7–14 days with no repairs, no fees, and no agent commissions. Whether you're dealing with an inherited property, falling behind on payments, or just tired of managing a rental, we make the process simple and pressure-free. You'll work directly with a local Tuscaloosa buyer, not a call center, and get a real, written offer based on your home's condition and recent nearby sales. There's no obligation to accept, and you choose the closing date that works best for you.",
  "Because We Buy Tuscaloosa Homes is local, we understand how properties near the University, older brick homes, and rental-heavy streets actually sell — not just what a national website estimates.",
] as const;

export const tuscaloosaTestimonialSlides = [
  {
    kind: "text" as const,
    quote:
      "I needed to sell my house fast in Tuscaloosa after a job transfer. Joe walked me through the numbers, gave me a clear cash offer, and let me pick a closing date that lined up with my move. I never had to list or do repairs.",
    signature: "Tuscaloosa Homeowner",
    meta: "Tuscaloosa, AL",
    initial: "T",
  },
  {
    kind: "text" as const,
    quote:
      "Being a landlord near campus had become too stressful. We were able to sell our rental as-is with tenants still in place, and the process was much smoother than I expected.",
    signature: "Local Landlord",
    meta: "Tuscaloosa, AL",
    initial: "L",
  },
  {
    kind: "text" as const,
    quote:
      "Handling an inherited property from out of state felt overwhelming. Working with a local buyer who understood Tuscaloosa and could coordinate everything with the closing attorney made it simple.",
    signature: "Out-of-State Owner",
    meta: "West Alabama",
    initial: "O",
  },
] as const;

export const tuscaloosaProcessSteps = [
  {
    num: 1,
    title: "Share Your Property",
    description:
      "Call (803) 784-7672 or fill out the short form with your address and situation. Takes less than 2 minutes.",
  },
  {
    num: 2,
    title: "Quick Walk-Through",
    description:
      "We schedule a short visit or virtual walk-through. No cleaning, staging, or repairs required — we buy as-is.",
  },
  {
    num: 3,
    title: "Get Your Cash Offer",
    description:
      "We explain your offer in plain language. No pressure. Take time to compare options before deciding.",
  },
  {
    num: 4,
    title: "Close & Get Paid",
    description:
      "You pick the closing date. A local Tuscaloosa attorney handles paperwork and funds are wired at closing.",
  },
] as const;

export const tuscaloosaSituations = [
  {
    id: "foreclosure",
    title: "Behind on Payments / Foreclosure",
    description:
      "A direct cash sale can often stop foreclosure Tuscaloosa homeowners fear by paying off the loan before a foreclosure sale. We move quickly when time matters.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "inherited-probate",
    title: "Inherited House in Tuscaloosa",
    description:
      "Handling an inherited house Tuscaloosa families have just received can be overwhelming. We can make a cash offer while you're still working with your attorney.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "divorce",
    title: "Divorce Sale in Tuscaloosa",
    description:
      "A fast, as-is cash sale can simplify splitting proceeds during a divorce sale Tuscaloosa couples face, avoiding months of showings while emotions are already high.",
    image: getSituationImage("divorce"),
  },
  {
    id: "tired-landlord",
    title: "Tired Landlord / Problem Rental",
    description:
      "Student rentals and long-term rentals near the University can turn into stress fast. We can buy with tenants in place — no need to bring the property to retail condition.",
    image: getSituationImage("tired-landlord"),
  },
  {
    id: "sell-as-is",
    title: "House That Needs Major Repairs",
    description:
      "Foundation issues, roof leaks, outdated kitchens — cash buyers expect these issues. We price in repairs and still buy as-is so you don't have to fix a long list.",
    image: getSituationImage("sell-as-is"),
  },
  {
    id: "relocating",
    title: "Relocating for Work or Life Changes",
    description:
      "If a job or family matter is pulling you away from Tuscaloosa on a tight schedule, a fast cash sale lets you move on without worrying about double mortgage payments.",
    image: getSituationImage("relocating"),
  },
] as const;

export const tuscaloosaWhoWeHelpItems = [
  "Owner-occupants in Tuscaloosa who are behind on payments, ready to downsize, or tired of constant upkeep.",
  "Out-of-state owners with a house in Tuscaloosa who want a simple way to sell without flying in for months of showings.",
  "Heirs and families with an inherited house Tuscaloosa courts are handling through probate and who don't want to become long-term landlords.",
  "Landlords with rental houses near campus who are done with late payments, turnovers, or property damage.",
  "Couples going through a divorce sale in Tuscaloosa looking for a straightforward way to sell and split proceeds.",
  "Owners of vacant, outdated, or problem properties that would need significant work to list on the open market.",
  "Sellers dealing with tax, code, or title issues who need a buyer willing to work through extra steps with a local attorney.",
] as const;

export const tuscaloosaComparisonColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  {
    key: "joe",
    header: "Cash Sale in Tuscaloosa — We Buy Tuscaloosa Homes",
    highlight: true,
  },
  { key: "agent", header: "Traditional Listing — With a Tuscaloosa Agent" },
];

export const tuscaloosaComparisonRows: ComparisonRowData[] = [
  {
    label: "Typical Timeline",
    values: {
      joe: {
        text: "Often a few weeks, depending on title and you",
        positive: true,
      },
      agent: { text: "Commonly 1–3+ months from listing to closing" },
    },
  },
  {
    label: "Repairs Before Sale",
    values: {
      joe: { text: "None required — sell as-is", positive: true },
      agent: { text: "Often recommended or required to attract buyers" },
    },
  },
  {
    label: "Showings & Open Houses",
    values: {
      joe: { text: "None — just one short walk-through", positive: true },
      agent: { text: "Multiple showings, open houses, last-minute visits" },
    },
  },
  {
    label: "Agent Commissions",
    values: {
      joe: { text: "No agent commissions when selling directly", positive: true },
      agent: { text: "Standard commissions paid at closing" },
    },
  },
  {
    label: "Closing Costs",
    values: {
      joe: { text: "Many cash buyers cover most standard costs", positive: true },
      agent: { text: "Seller typically pays a share of closing costs" },
    },
  },
  {
    label: "Financing Risk",
    values: {
      joe: { text: "No mortgage risk — funds are cash", positive: true },
      agent: { text: "Buyer's financing can fall through" },
    },
  },
  {
    label: "Selling With Tenants / Issues",
    values: {
      joe: { text: "Often possible, case by case", positive: true },
      agent: { text: "More complicated — may require vacancy or repairs" },
    },
  },
  {
    label: "Flexibility on Closing Date",
    values: {
      joe: { text: "You choose within a reasonable window", positive: true },
      agent: { text: "Tied to buyer's schedule and lender requirements" },
    },
  },
];

export const tuscaloosaMarketStats = [
  {
    value: "$285K",
    label: "Median Sale Price (Tuscaloosa, May 2026 · ACRE/UA)",
    accent: "teal" as const,
  },
  {
    value: "33",
    label: "Avg. Days on Market (Tuscaloosa, Zillow 2026)",
    accent: "navy" as const,
  },
  {
    value: "7–14",
    label: "Days to Close — We Buy Tuscaloosa Homes",
    accent: "teal" as const,
  },
] as const;

export const tuscaloosaMarketParagraphs = [
  "Right now, the Tuscaloosa housing market shows solid prices with days-on-market still measured in weeks — a mix that affects how quickly you can sell and whether a cash offer or listing makes more sense.",
  "Median sold price (Tuscaloosa County, May 2026): about $285,000 — slightly down from April and down 0.9% year-over-year.",
  "Recent peak (April 2026): median sold price around $297,500, up 8.2% year-over-year at that time.",
  "Average days on market: recent data shows homes spending roughly 24–33 days depending on month and sub-area.",
  "Median listing price in the city of Tuscaloosa: around $299,900.",
  "When prices are holding but days-on-market stretch out, many sellers can still get solid offers by listing — but only if they're willing to handle repairs, showings, and the possibility of buyers backing out. A fast cash sale trades a bit of potential price for speed, simplicity, and guaranteed timing.",
] as const;

export const tuscaloosaMarketFootnote =
  "Sources: ACRE/Culverhouse UA · Realtor.com · Zillow";

export const tuscaloosaMeetJoeParagraphs = [
  "We Buy Tuscaloosa Homes is a founder-led, local business. Joe LeBlanc is personally involved in every transaction — you're not dealing with a distant call center or a national franchise that passes your file to an anonymous team.",
  "We understand the Tuscaloosa market: older brick homes, student rental dynamics near the University of Alabama, the West Alabama property landscape, and the realistic timelines that local title and closing attorneys work with. We use that knowledge to make offers that are straightforward, fair, and backed by a local buyer who closes with real cash.",
  "Whether you're facing foreclosure, dealing with an inherited property, going through a divorce, or simply done with a rental — Joe will talk through your situation honestly and let you know what's realistic, with no pressure to accept any offer.",
] as const;

export const tuscaloosaFaqs = [
  {
    id: "how-fast",
    question: "How fast can I sell my house for cash in Tuscaloosa?",
    answer:
      "In many cases, you can sell to a cash home buyer in Tuscaloosa in just a couple of weeks. A local cash buyer can often move much faster than a traditional sale because there is no mortgage approval or repair process. The exact timing depends on title work and your schedule, so closing can often be set around when you are ready to move.",
  },
  {
    id: "cash-vs-agent",
    question:
      "Is it better to sell my house fast for cash or list with an agent in Tuscaloosa?",
    answer:
      "Neither option is always better — it depends on your goals in Tuscaloosa. A cash home buyer can offer speed, certainty, and no repairs, but the price is usually below full retail. Listing with an agent can bring a higher price, yet you may face repairs, showings, commissions, and a longer wait. The right choice comes down to your timeline, property condition, and stress level.",
  },
  {
    id: "offer-math",
    question:
      "How do you decide what my Tuscaloosa house is worth for a cash offer?",
    answer:
      "Cash buyers usually base your Tuscaloosa offer on after-repair value, condition, and repair costs. A local cash home buyer looks at recent Tuscaloosa sales, estimates what your house could sell for after repairs, then subtracts the cost of those repairs, holding costs, and a profit margin. That math creates a cash price that works without you fixing anything first.",
  },
  {
    id: "foreclosure",
    question:
      "Can I sell my house fast in Tuscaloosa if I'm facing foreclosure?",
    answer:
      "Yes. Many homeowners in foreclosure can still sell fast to a cash buyer in Tuscaloosa. If your lender has not completed the foreclosure sale, a local cash home buyer may be able to close quickly enough to pay off the loan. You should also stay in close contact with your lender and consider speaking with a HUD-approved housing counselor or attorney for advice on your specific rights.",
  },
  {
    id: "repairs",
    question:
      "Will you still buy my Tuscaloosa house if it needs a lot of repairs?",
    answer:
      "Yes. Cash home buyers in Tuscaloosa regularly buy houses that need major repairs. They purchase properties as-is, so you do not have to fix foundation issues, roof problems, outdated kitchens, or general wear and tear before selling. The cost of repairs is simply factored into the cash offer so you can sell without investing more money into the property.",
  },
  {
    id: "fees",
    question:
      "Do I have to pay any fees or commissions when I sell my house fast for cash?",
    answer:
      "No. When you sell directly to a cash home buyer, you typically avoid real estate commissions. In a direct cash sale, there is no listing agent, so the usual percentage-based commission is not charged. Many cash buyers also cover most standard closing costs, which lets you focus on the bottom-line amount you will receive at closing.",
  },
  {
    id: "inherited",
    question:
      "Can I sell an inherited house in Tuscaloosa without fixing it up first?",
    answer:
      "Yes. Inherited houses in Tuscaloosa are often sold as-is to a cash buyer. A local cash home buyer can usually make an offer even if the property still needs cleaning, updates, or repairs. You should follow any probate or legal steps your attorney recommends, but you do not have to wait until everything is perfect before requesting a cash offer.",
  },
  {
    id: "property-types",
    question: "What types of properties do you buy in Tuscaloosa?",
    answer:
      "Most cash home buyers in Tuscaloosa focus on residential properties. That usually includes single-family houses, townhomes, condos, and small multi-unit rentals within the Tuscaloosa, Alabama area. Some buyers will also consider mobile homes or duplexes. If your property is residential and you want a fast, as-is sale, it likely fits what a local cash buyer is looking for.",
  },
  {
    id: "post-closing",
    question:
      "What happens if I need to stay in my house for a little while after closing?",
    answer:
      "In many cases, you can work out timing or short post-closing occupancy with a cash buyer. Some cash home buyers will set a later closing date so you have time to move, or agree in writing to let you stay briefly after closing. Any arrangement should be clearly spelled out in your agreement so expectations are set for both sides.",
  },
  {
    id: "credit-impact",
    question:
      "Will a fast cash sale hurt my credit as much as a foreclosure?",
    answer:
      "No. A completed foreclosure usually has a more serious impact on credit than selling your house for cash. A fast sale to a cash home buyer is still a property sale, not a foreclosure judgment. Every situation is different, so it is wise to speak with a HUD-approved housing counselor or credit professional about how a sale would show on your specific credit reports.",
  },
  {
    id: "rentals",
    question:
      "Do you buy rental properties or houses with tenants in Tuscaloosa?",
    answer:
      "Yes. Many cash home buyers in Tuscaloosa will buy rental houses that already have tenants. Investors often prefer occupied rentals, including student or single-family rentals, as long as the numbers make sense. The buyer will usually work directly with the tenants under Alabama law, so you may not need to remove them before selling.",
  },
  {
    id: "obligation",
    question: "Am I obligated to accept a cash offer on my Tuscaloosa house?",
    answer:
      "No. You are never obligated to accept a cash offer on your Tuscaloosa house. Reputable cash home buyers expect you to review their offer, compare it with other options, and only move forward if it fits your situation. Getting an offer is free and comes with no commitment to sign anything.",
  },
] as const;

export const tuscaloosaPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "We Buy Tuscaloosa Homes",
    url: "https://www.webuytuscaloosahomes.com/",
    telephone: "(803) 784-7672",
    email: "joe@webuytuscaloosahomes.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1520 Stillwater Dr",
      addressLocality: "Tuscaloosa",
      addressRegion: "AL",
      postalCode: "35406",
      addressCountry: "US",
    },
    areaServed: "Tuscaloosa, AL",
    founder: {
      "@type": "Person",
      name: "Joe LeBlanc",
      jobTitle: "Founder / Owner",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can I sell my house for cash in Tuscaloosa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In many cases, you can sell to a cash home buyer in Tuscaloosa in just a couple of weeks. A local cash buyer can often move much faster than a traditional sale because there is no mortgage approval or repair process. The exact timing depends on title work and your schedule, so closing can often be set around when you are ready to move.",
        },
      },
      {
        "@type": "Question",
        name: "Is it better to sell my house fast for cash or list with an agent in Tuscaloosa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Neither option is always better; it depends on your goals in Tuscaloosa. A cash home buyer can offer speed, certainty, and no repairs, but the price is usually below full retail. Listing with an agent can bring a higher price, yet you may face repairs, showings, commissions, and a longer wait.",
        },
      },
      {
        "@type": "Question",
        name: "How do you decide what my Tuscaloosa house is worth for a cash offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cash buyers usually base your Tuscaloosa offer on after-repair value, condition, and repair costs. A local cash home buyer looks at recent Tuscaloosa sales, estimates what your house could sell for after repairs, then subtracts the cost of those repairs, holding costs, and a profit margin.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sell my house fast in Tuscaloosa if I'm facing foreclosure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many homeowners in foreclosure can still sell fast to a cash buyer in Tuscaloosa. If your lender has not completed the foreclosure sale, a local cash home buyer may be able to close quickly enough to pay off the loan.",
        },
      },
      {
        "@type": "Question",
        name: "Will you still buy my Tuscaloosa house if it needs a lot of repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cash home buyers in Tuscaloosa regularly buy houses that need major repairs. They purchase properties as-is, so you do not have to fix foundation issues, roof problems, outdated kitchens, or general wear and tear before selling.",
        },
      },
      {
        "@type": "Question",
        name: "Do I have to pay any fees or commissions when I sell my house fast for cash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. When you sell directly to a cash home buyer, you typically avoid real estate commissions. In a direct cash sale, there is no listing agent, so the usual percentage-based commission is not charged.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sell an inherited house in Tuscaloosa without fixing it up first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Inherited houses in Tuscaloosa are often sold as-is to a cash buyer. A local cash home buyer can usually make an offer even if the property still needs cleaning, updates, or repairs.",
        },
      },
      {
        "@type": "Question",
        name: "What types of properties do you buy in Tuscaloosa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most cash home buyers in Tuscaloosa focus on residential properties including single-family houses, townhomes, condos, and small multi-unit rentals within the Tuscaloosa, Alabama area.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I need to stay in my house for a little while after closing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In many cases, you can work out timing or short post-closing occupancy with a cash buyer. Some cash home buyers will set a later closing date so you have time to move, or agree in writing to let you stay briefly after closing.",
        },
      },
      {
        "@type": "Question",
        name: "Am I obligated to accept a cash offer on my Tuscaloosa house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You are never obligated to accept a cash offer on your Tuscaloosa house. Reputable cash home buyers expect you to review their offer, compare it with other options, and only move forward if it fits your situation.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Sell Your House Fast in Tuscaloosa, Alabama",
    description:
      "A simple 3-step process to sell your house fast for cash in Tuscaloosa with We Buy Tuscaloosa Homes.",
    step: [
      {
        "@type": "HowToStep",
        position: "1",
        name: "Share Your Property Details",
        text: "Call (803) 784-7672 or fill out the short form with your address, basic property info, and situation.",
      },
      {
        "@type": "HowToStep",
        position: "2",
        name: "Quick Walk-Through",
        text: "We schedule a quick visit or virtual walk-through to confirm condition. No cleaning, repairs, or staging needed.",
      },
      {
        "@type": "HowToStep",
        position: "3",
        name: "Get Your Cash Offer and Close",
        text: "We explain your cash offer in plain language. You pick a closing date and get funds at closing through a local attorney.",
      },
    ],
  },
] as const;
