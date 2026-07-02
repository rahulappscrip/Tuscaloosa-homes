import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";
import type { PricingFormulaRow } from "@/components/home-worth/PricingFormula";
import { getSituationImage } from "./situationImages";

export const vanceHeroBenefits = [
  "Fast cash offer for your Vance home",
  "No repairs, cleaning, or agent commissions",
  "You choose the closing date that works for you",
] as const;

export const vanceCashProsItems = [
  "Close in as little as 7 days",
  "No repairs or cleaning",
  "No agent commissions",
  "No buyer financing risk",
] as const;

export const vanceListingConsItems = [
  "30–60+ days on market",
  "Repairs and staging often needed",
  "Agent commission from sale price",
  "Deals can fall on financing",
] as const;

export const vanceThreeWayColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  {
    key: "cash",
    header: "Local Cash Buyer — We Buy Tuscaloosa Homes",
    highlight: true,
  },
  { key: "list", header: "Listing With an Agent" },
  { key: "fsbo", header: "FSBO" },
];

export const vanceThreeWayRows: ComparisonRowData[] = [
  {
    label: "Time to close",
    values: {
      cash: {
        text: "As little as 7 days, or later on your schedule",
        positive: true,
      },
      list: { text: "Typically 30–60+ days or more" },
      fsbo: { text: "Often similar to agent; can be longer" },
    },
  },
  {
    label: "Repairs & cleaning",
    values: {
      cash: { text: "None required; we buy as-is", positive: true },
      list: { text: "Usually needed to attract buyers" },
      fsbo: { text: "You handle repairs and cleaning" },
    },
  },
  {
    label: "Showings",
    values: {
      cash: { text: "None — one brief walk-through only", positive: true },
      list: { text: "Multiple showings and open houses" },
      fsbo: { text: "You schedule and host all showings" },
    },
  },
  {
    label: "Commissions",
    values: {
      cash: { text: "$0 in agent commissions", positive: true },
      list: { text: "Typically 5–6% from sale price" },
      fsbo: {
        text: "No listing commission, but buyer agents may expect a fee",
      },
    },
  },
  {
    label: "Closing costs",
    values: {
      cash: { text: "We typically cover most standard costs", positive: true },
      list: { text: "Seller often pays a portion" },
      fsbo: { text: "Negotiable; you handle details" },
    },
  },
  {
    label: "Offer certainty",
    values: {
      cash: { text: "High once you accept our cash offer", positive: true },
      list: { text: "Contingent on buyer financing & inspection" },
      fsbo: { text: "Depends on your buyer's financing" },
    },
  },
  {
    label: "Best for",
    values: {
      cash: { text: "Speed, convenience, as-is condition", positive: true },
      list: { text: "Top price if you have time & budget" },
      fsbo: { text: "Owners comfortable marketing & negotiating" },
    },
  },
];

export const vanceSituations = [
  {
    id: "foreclosure",
    title: "Behind on payments or facing foreclosure",
    description:
      "A fast cash sale can sometimes pay off your loan before a foreclosure date.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "behind-on-payments-life-changes",
    title: "Job loss or income change",
    description: "Selling quickly can give you a clean financial reset.",
    image: getSituationImage("behind-on-payments-life-changes"),
  },
  {
    id: "relocating",
    title: "Job relocation",
    description:
      "Waiting months for a traditional sale may not be realistic when you need to move quickly.",
    image: getSituationImage("relocating"),
  },
  {
    id: "divorce",
    title: "Divorce or separation",
    description:
      "A simple cash sale makes it easier for both parties to move forward.",
    image: getSituationImage("divorce"),
  },
  {
    id: "inherited-probate",
    title: "Inherited property",
    description:
      "We can buy it as-is, even if it's full of belongings and you're out of town.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "sell-as-is",
    title: "Major repairs or damage",
    description:
      "We handle repairs after closing; you don't fix anything first.",
    image: getSituationImage("sell-as-is"),
  },
] as const;

export const vanceProcessSteps = [
  {
    num: 1,
    title: "Tell Us About Your Vance Property",
    description:
      "Share your address, basic property details, and your preferred timeline by calling (803) 784-7672 or filling out our short online form. We'll ask a few questions to understand your situation—there's no obligation.",
  },
  {
    num: 2,
    title: "Schedule a Property Walkthrough",
    description:
      "We'll arrange a convenient time to visit your Vance property and assess its current condition. There's no need to clean, stage, or make repairs—we buy houses exactly as they are.",
  },
  {
    num: 3,
    title: "Receive Your No-Obligation Cash Offer",
    description:
      "After reviewing your home's condition and recent Vance and Tuscaloosa-area comparable sales, we'll prepare a fair written cash offer. We'll explain how we arrived at the price, and you can review it with no pressure to decide immediately.",
  },
  {
    num: 4,
    title: "Choose Your Closing Date & Get Paid",
    description:
      "If you accept the offer, we work with a local Alabama title company or closing attorney to handle the paperwork. You choose the closing date that fits your schedule, and receive your funds once the sale is complete.",
  },
] as const;

export const vanceMarketParagraphs = [
  "Homes in many parts of Alabama are taking time to sell with traditional listings. A cash sale in Vance can close much faster once a clear title is confirmed. That difference matters if you're on a deadline.",
  "Some homes selling quickly when they're move-in ready and priced aggressively.",
  "Other properties sitting longer due to needed repairs, higher interest rates, or buyer caution.",
  "Sellers offering concessions like closing-cost help or price reductions to attract offers.",
  "A cash buyer is less affected by daily market swings because there's no mortgage approval or appraisal contingency. You get a defined timeline instead of wondering how long your home will sit.",
] as const;

export const vanceMeetJoeParagraphs = [
  "I'm Joe LeBlanc, a local home buyer who helps Vance and Tuscaloosa-area homeowners sell quickly and simply. My focus with We Buy Tuscaloosa Homes is to give you a straightforward cash-sale option that feels honest, transparent, and low-pressure.",
  "When you contact us about selling your Vance house fast, you're not getting a national call center. You'll speak with a small local team, and often with me directly. What matters most to me is that you clearly understand your options and never feel rushed into a sale that isn't right for you.",
] as const;

export const vanceMeetJoeCredentials = [
  "Listen to what's going on with your property and timeline",
  "Explain how our cash offer is calculated in plain language",
  "Answer every question before you decide whether to move forward",
  "Never pressure you to accept an offer that doesn't feel right",
] as const;

export const vancePricingRows: PricingFormulaRow[] = [
  {
    id: "arv",
    operator: "ARV",
    operatorVariant: "arv",
    title: "After-Repair Value",
    description:
      "What similar homes in Vance or Tuscaloosa are selling for once they're updated and in good condition.",
  },
  {
    id: "repairs",
    operator: "−",
    operatorVariant: "minus",
    title: "Repairs & Updates",
    description:
      "What it will likely cost us to fix issues and get the house ready for resale or rental.",
  },
  {
    id: "holding",
    operator: "−",
    operatorVariant: "minus",
    title: "Holding & Closing Costs",
    description:
      "Taxes, insurance, utilities, and closing fees we'll pay while we own the property.",
  },
  {
    id: "margin",
    operator: "−",
    operatorVariant: "minus",
    title: "Reasonable Margin",
    description:
      "A fair profit so we can stay in business and keep buying houses in Vance.",
  },
  {
    id: "offer",
    operator: "=",
    operatorVariant: "equals",
    title: "Your Cash Offer",
    description: "Your as-is amount.",
  },
];

export const vancePricingFormulaSteps = vancePricingRows.map(
  ({ id, operator, operatorVariant, title, description }) => ({
    id,
    operator,
    operatorVariant,
    title,
    description,
  }),
);

export const vanceWhatToExpectSteps = [
  {
    num: "01",
    title: "Before the Visit",
    description:
      "After you contact us about your Vance house, we'll ask a few basic questions and schedule a short in-person or virtual walk-through at a time that works for you. There's no need to deep-clean or hide every box; we just need to get a clear sense of the property.",
  },
  {
    num: "02",
    title: "During the Visit",
    description:
      "A small local team member will walk through the house, take notes and a few photos, and ask any follow-up questions about repairs or updates. Most visits take around 30–45 minutes. We're there to understand the home, not to judge how you live.",
  },
  {
    num: "03",
    title: "After the Visit and at Closing",
    description:
      "Once we've finished our review, we'll prepare your cash offer for your Vance property, explain how we calculated it, and give you time to decide. If you accept, we work with a trusted local title company or attorney to prepare documents and schedule closing. On closing day, you'll sign a small stack of papers, hand over the keys, and receive your funds by wire or cashier's check.",
  },
] as const;

export const vanceWhatToExpectFootnote =
  "At every stage, we keep things simple, explain what's coming next, and make it clear that you can say no if the timing or numbers aren't right for you.";

export const vanceFaqs = [
  {
    id: "how-fast",
    question: "How can I sell my house fast in Vance, AL?",
    answer:
      "The fastest way to sell your house in Vance is to work with a local cash home buyer who can purchase your property as-is. That lets you skip listings, showings, repairs, and buyer financing delays. You could also list with an agent at an aggressive price or try for-sale-by-owner, but those usually take longer in the Vance, Alabama market. A local cash buyer focused on Vance gives you speed, certainty, and a simple path from first call to closing.",
  },
  {
    id: "no-repairs",
    question:
      "What is the fastest way to sell a house in Vance without making repairs?",
    answer:
      "The fastest way to sell a house in Vance without repairs is to sell directly to a local cash home buyer who purchases properties as-is. With a cash buyer, you do not have to fix anything, clean out the house, stage it, or wait on inspections and appraisals. That can shorten the process significantly compared to listing with an agent. In Vance, an as-is cash sale is usually the best fit when the property needs work or you are on a tight timeline.",
  },
  {
    id: "timeline",
    question:
      "How long does it take to sell my house fast in Vance if I sell for cash?",
    answer:
      "Selling for cash in Vance typically lets you close much faster than a traditional listing. A local cash home buyer can often move from first conversation to closing in a short period, because there are no mortgage approvals, open houses, or repair negotiations. The exact timing depends on things like title work, any liens, and your preferred move-out date. Compared to Alabama listings that may sit on the market, a Vance cash sale focuses on speed and certainty.",
  },
  {
    id: "as-is",
    question: "Can I sell my Vance house as-is without fixing anything?",
    answer:
      "Yes. You can sell your Vance house as-is to a local cash home buyer without making any repairs. Cash buyers regularly purchase properties in all kinds of condition, including homes that need major updates, clean-outs, or even significant structural work. You do not have to paint, replace flooring, or handle contractor bids. In many cases you can leave behind unwanted items, and the buyer will take care of repairs and cleanup after closing.",
  },
  {
    id: "fair-offer",
    question: "How do I know if a cash offer for my Vance house is fair?",
    answer:
      "A fair cash offer in Vance is usually based on your home's after-repair value, estimated repairs, holding costs, and a reasonable profit margin for the buyer. You can ask any local cash home buyer to explain how they arrived at their number. A trustworthy buyer will walk you through the math, answer questions, and never pressure you to accept if the offer does not feel right.",
  },
  {
    id: "behind-payments",
    question:
      "Can you still buy my house in Vance if I'm behind on payments or facing foreclosure?",
    answer:
      "If you are behind on your mortgage in Vance, a local cash home buyer may still be able to purchase your house before a foreclosure sale. They can work with a local title company to pay off what you owe from the sale proceeds at closing. The key is to reach out early, so there is enough time to review your situation and any deadlines from the lender. You should also speak with your lender or a qualified professional about all your options.",
  },
  {
    id: "fees",
    question:
      "What fees or commissions do I pay when selling my Vance house to a cash buyer?",
    answer:
      "With a direct cash home buyer, you typically do not pay real estate agent commissions to sell your Vance house. Because there is no listing agent involved, you avoid the traditional percentage-based commission that comes out of the sale price. Many local cash buyers also cover most or all standard closing costs, so your expenses are limited to things like existing mortgages, liens, or property taxes.",
  },
  {
    id: "trust",
    question: "How can I trust a house-buying company in Vance?",
    answer:
      "You can trust a house-buying company in Vance by checking independent proof that they operate locally and treat sellers fairly. Look for online reviews, a clear website, and use of a reputable local title company or closing attorney. Ask how they calculate offers and whether they will explain the numbers in writing. A solid Vance cash home buyer will answer your questions, give you time to decide, and never pressure you to sign anything on the spot.",
  },
  {
    id: "service-area",
    question: "Do you only buy houses in Vance, or also nearby areas?",
    answer:
      "Most local cash home buyers focus on Vance but also purchase houses in nearby Tuscaloosa-area towns. That often includes places like Tuscaloosa, Northport, Cottondale, and other surrounding communities, as long as the property fits their buying criteria. If your house is just outside Vance, it is still worth asking.",
  },
  {
    id: "cash-vs-agent",
    question:
      "What's the difference between selling my Vance house for cash and listing with an agent?",
    answer:
      "Selling your Vance house for cash trades some potential sale price for speed and certainty, while listing with an agent focuses on getting top dollar. A local cash home buyer can purchase as-is, with no showings, repairs, or buyer financing risk. An agent lists your house on the open market, which can take longer and usually involves cleaning, updates, and commissions.",
  },
  {
    id: "stay-after",
    question:
      "Can I stay in my Vance house for a little while after closing with a cash buyer?",
    answer:
      "Sometimes, a local cash home buyer in Vance can offer flexible move-out options, but it depends on your agreement. In some situations, sellers arrange to stay briefly after closing through a written occupancy or rent-back arrangement with clear dates. The best approach is to discuss your timing needs upfront so the buyer can tell you what is possible before you decide to move forward.",
  },
  {
    id: "property-types",
    question: "What types of properties do cash buyers purchase around Vance?",
    answer:
      "Local cash home buyers around Vance typically purchase a wide range of residential properties. That can include single-family houses, small rental homes, townhomes, and sometimes manufactured or mobile homes, depending on their criteria. They are often comfortable with properties that are dated, vacant, tenant-occupied, or needing repairs.",
  },
] as const;

export const vancePageSchema = [
    {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "We Buy Tuscaloosa Homes",
    url: "https://www.webuytuscaloosahomes.com/",
    telephone: "+18037847672",
    description:
      "We buy houses in Tuscaloosa, AL in any condition for a fair cash offer. Close in 7 days or on your schedule.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1520 Stillwater Dr",
      addressLocality: "Tuscaloosa",
      addressRegion: "AL",
      postalCode: "35406",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Vance",
    },
    serviceArea: { "@type": "GeoCircle", geoRadius: "50000" },
  },
];
