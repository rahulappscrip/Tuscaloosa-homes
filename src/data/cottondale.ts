import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";
import { getSituationImage } from "./situationImages";

export const cottondaleHeroBenefits = [
  "Cash offer from a direct home buyer (no agents involved)",
  "No repairs, cleaning, or showings required",
  "No commissions and no hidden fees",
  "A closing date that fits your situation, often as fast as 7 days",
] as const;

export const cottondaleHeroStats = [
  { value: "Cash Offers", unit: "", label: "Within 24 Hours" },
  { value: "Close in 7 Days", unit: "", label: "Or on your timeline" },
  { value: "No Repairs · No Fees", unit: "", label: "Buy completely as-is" },
  { value: "Local Tuscaloosa Team", unit: "", label: "We know Cottondale" },
] as const;

export const cottondaleProcessSteps = [
  {
    num: 1,
    title: "Tell Us About Your Cottondale House",
    description:
      "You start by telling We Buy Tuscaloosa Homes basic information about your Cottondale property — the address, general condition, and your ideal timeline. You can call, text, or fill out a short form, and there's no obligation or pushy sales tactics.",
  },
  {
    num: 2,
    title: "Get a Fair, No-Obligation Cash Offer",
    description:
      "Our team reviews your house, looks at recent Cottondale and Tuscaloosa-area sales, and considers any work the property may need. As cash home buyers in Cottondale, we can make a straightforward cash offer without bank financing, showings, or repairs. You can take your time to decide, compare options, and ask questions.",
  },
  {
    num: 3,
    title: "Pick Your Closing Date and Get Paid",
    description:
      "If you like the offer, we move to closing with a trusted local title company. You choose the closing date — many sellers in Cottondale prefer a quick house sale in about 7 days, while others want a bit more time to move. On closing day, you sign the paperwork and get your funds, so you can move on with confidence.",
  },
] as const;

export const cottondaleComparisonColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  {
    key: "cash",
    header: "With We Buy Tuscaloosa Homes (Cash Sale)",
    highlight: true,
  },
  { key: "list", header: "Traditional Listing in Cottondale" },
];

export const cottondaleComparisonRows: ComparisonRowData[] = [
  {
    label: "Timeline to close",
    values: {
      cash: {
        text: "Often as fast as 7 days, or on your schedule",
        positive: true,
      },
      list: {
        text: "Typically 30–60+ days, depending on buyer and financing",
      },
    },
  },
  {
    label: "Repairs and cleaning",
    values: {
      cash: {
        text: "No repairs needed; sell as-is, skip deep cleaning and staging",
        positive: true,
      },
      list: { text: "Repairs, updates, and cleaning usually expected" },
    },
  },
  {
    label: "Showings and open houses",
    values: {
      cash: { text: "None; just one quick walk-through", positive: true },
      list: { text: "Multiple showings and open houses" },
    },
  },
  {
    label: "Commissions",
    values: {
      cash: { text: "No commissions", positive: true },
      list: { text: "Agent commissions typically paid at closing" },
    },
  },
  {
    label: "Closing costs",
    values: {
      cash: { text: "Often covered or reduced by the buyer", positive: true },
      list: { text: "Seller commonly pays a share of closing costs" },
    },
  },
  {
    label: "Certainty of sale",
    values: {
      cash: { text: "Direct cash offer from a local cash buyer", positive: true },
      list: { text: "Dependent on buyer financing and inspections" },
    },
  },
  {
    label: "Hassle and paperwork",
    values: {
      cash: { text: "Streamlined; we guide you step-by-step", positive: true },
      list: {
        text: "More complex; coordination with agents, buyers, and lenders",
      },
    },
  },
  {
    label: "Flexibility on move-out",
    values: {
      cash: { text: "You choose the date that fits your plan", positive: true },
      list: { text: "Negotiated with the buyer, less flexible" },
    },
  },
];

export const cottondaleSituations = [
  {
    id: "relocating",
    title: "Facing a Job Change or Relocation",
    description:
      "Maybe you landed a new job outside Tuscaloosa County and need to move quickly. Instead of juggling showings and repairs, you can get a cash offer on your Cottondale house, pick a closing date, and focus on your next chapter.",
    image: getSituationImage("relocating"),
  },
  {
    id: "inherited-probate",
    title: "Inherited a House in Cottondale",
    description:
      "If you inherited a property that needs work or you simply do not want to be a long-distance landlord, we can look at the house as-is. We'll factor repairs into the price and work with all decision-makers so the sale is smooth.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "foreclosure",
    title: "Behind on Payments or Dealing With Life Changes",
    description:
      "Job loss, medical bills, divorce, or other major life events can make a traditional sale feel overwhelming. A fast cash offer in Cottondale can simplify things by giving you one clear path forward without lenders, showings, or months of uncertainty.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "tired-landlord",
    title: "Landlords Ready to Sell a Rental",
    description:
      "If managing tenants, repairs, and vacancies has become too much, selling your Cottondale or Tuscaloosa rental to a direct home buyer can give you a clean exit. We can work with occupied or vacant properties.",
    image: getSituationImage("tired-landlord"),
  },
  {
    id: "major-repairs",
    title: "House Needs Major Repairs",
    description:
      "Many homeowners don't have the time or budget to fix roofing issues, foundation problems, outdated interiors, or other costly repairs. We buy Cottondale homes as-is, so you can skip the contractors and sell without investing more money into the property.",
    image: getSituationImage("major-repairs"),
  },
  {
    id: "facing-foreclosure",
    title: "Facing Foreclosure or Financial Pressure",
    description:
      "If you're behind on mortgage payments or trying to avoid foreclosure, time matters. A fast cash sale can help you move quickly, reduce financial stress, and avoid the lengthy process of listing your home on the open market.",
    image: getSituationImage("facing-foreclosure"),
  },
] as const;

export const cottondaleReputationItems = [
  "Google rating: 5.0 stars based on 103 reviews from Tuscaloosa-area sellers",
  "BBB status: A+ Accredited",
  "Local presence: Office based in Tuscaloosa, serving Cottondale and nearby communities",
] as const;

export const cottondaleSellerAppreciationItems = [
  "Clear, simple explanations of how we calculate your offer",
  "Respectful conversations during stressful situations",
  "Flexible closing dates and help coordinating the move",
] as const;

export const cottondaleFaqs = [
  {
    id: "how-it-works",
    question:
      "How does your cash home buying process work in Cottondale, AL?",
    answer:
      "Our cash home buying process has three simple steps. First, you tell We Buy Tuscaloosa Homes a few details about your Cottondale property so we can review the situation. Next, we present a no-obligation cash offer from our local cash home buyers. Finally, if you accept, we work with a local title company to handle paperwork and closing on the date that works best for you, so you can move on quickly.",
  },
  {
    id: "how-fast",
    question: "How fast can I sell my house for cash in Cottondale?",
    answer:
      "You can sell your house for cash as quickly as your closing partner can complete title work. We Buy Tuscaloosa Homes is a direct home buyer, so there is no waiting on bank financing or buyer contingencies. After you accept our cash offer, we work with a local title company in the Tuscaloosa area and schedule the closing date that fits your timeline, whether that is very fast or a little more flexible.",
  },
  {
    id: "repairs",
    question:
      "Do I need to make repairs or clean before I sell my Cottondale house to a cash buyer?",
    answer:
      "No. You do not need to make repairs or deep clean before selling. As local cash home buyers in the Cottondale and Tuscaloosa area, We Buy Tuscaloosa Homes will look at your house in its current condition and can buy it as-is with no repairs needed. You can skip staging, showings, and contractor bids, and just focus on taking the belongings that matter most to you before closing.",
  },
  {
    id: "offer-math",
    question: "How do you decide what my Cottondale house cash offer will be?",
    answer:
      "Your cash offer is based on your home's condition, the Cottondale market, and recent comparable sales. We Buy Tuscaloosa Homes looks at similar homes sold in the Tuscaloosa and Cottondale area, factors in any repairs or updates the property may need, and then calculates a fair cash price that works for a quick sale. There is no obligation, so you can review our offer and compare it with other options.",
  },
  {
    id: "fees",
    question:
      "Are there any fees, commissions, or closing costs when you buy my house?",
    answer:
      "No. You do not pay real estate commissions when we buy your house for cash. When you work with We Buy Tuscaloosa Homes as a direct home buyer, there is no listing agreement, no agent commission, and no hidden service fee. We structure our cash offers so you clearly see what you will receive at closing, and we can often help with typical closing costs so your net amount is simple to understand.",
  },
  {
    id: "market",
    question:
      "What is the Cottondale, AL housing market like if I need to sell fast?",
    answer:
      "The Cottondale market can support both traditional sales and fast cash sales, depending on your situation. Online data shows Cottondale-area homes move at different speeds, so if you need to sell quickly, a local cash buyer like We Buy Tuscaloosa Homes can be a strong option. You avoid showings, buyer financing delays, and contingencies and focus on getting a predictable cash offer for your property.",
  },
  {
    id: "as-is",
    question:
      "Can I sell my Cottondale house as-is if it needs a lot of work?",
    answer:
      "Yes. You can sell your Cottondale house as-is even if it needs major repairs. Many sellers in the Tuscaloosa area do not want to invest in big projects like roof, HVAC, or foundation work. We Buy Tuscaloosa Homes is a local cash home buyer that looks at the property's current condition and factors repairs into the offer, so you can move on without fixing anything first.",
  },
  {
    id: "legitimate",
    question: "How can I tell if a cash home buyer in Cottondale is legitimate?",
    answer:
      "A legitimate cash home buyer will be transparent, verifiable, and comfortable answering your questions. You can look for a clear website, local presence in the Tuscaloosa area, and online reviews from real sellers. A serious buyer like We Buy Tuscaloosa Homes will explain their process, walk you through the purchase agreement, and close with a reputable local title company so you feel confident in the transaction.",
  },
  {
    id: "fair-offer",
    question:
      "What happens if I get a cash offer for my Cottondale house and I am not sure if it is fair?",
    answer:
      "If you are not sure a cash offer is fair, you should compare it with local information before deciding. You can ask a Tuscaloosa-area real estate professional for a quick opinion, look at recent Cottondale sales online, and request a second cash offer from We Buy Tuscaloosa Homes. Seeing more than one written offer helps you understand your options and choose the solution that feels right for your situation.",
  },
  {
    id: "service-area",
    question:
      "Do you only buy houses in Cottondale, or across the Tuscaloosa area too?",
    answer:
      "We buy houses in Cottondale and across the broader Tuscaloosa area. We Buy Tuscaloosa Homes focuses on local owners who need a quick house sale in communities like Cottondale, Tuscaloosa, and nearby Alabama neighborhoods. If your property is in or around Tuscaloosa County and you want a local cash offer, you can reach out and we will let you know quickly if your house fits our buying criteria.",
  },
] as const;

export const cottondalePageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does your cash home buying process work in Cottondale, AL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our cash home buying process has three steps. You share some details about your Cottondale house, We Buy Tuscaloosa Homes makes a no-obligation cash offer, and then a local title company handles the paperwork so you can close on the date that works for you.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can I sell my house for cash in Cottondale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can sell your house for cash as quickly as the title work is finished. We Buy Tuscaloosa Homes is a direct home buyer, so there is no bank financing delay. Once you accept our offer, we work with a local title company to schedule the closing date that fits your timeline.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to make repairs or clean before I sell my Cottondale house to a cash buyer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You do not need to make repairs or deep clean before selling. We Buy Tuscaloosa Homes buys Cottondale houses as-is, so you can skip staging, showings, and contractor work and simply take the belongings that matter most before closing.",
        },
      },
      {
        "@type": "Question",
        name: "How do you decide what my Cottondale house cash offer will be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your cash offer is based on your home's condition, the Cottondale market, and recent comparable sales. We Buy Tuscaloosa Homes reviews local sales, needed repairs, and your timeline, then calculates a fair cash price with no obligation to accept.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any fees, commissions, or closing costs when you buy my house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You do not pay real estate commissions when We Buy Tuscaloosa Homes buys your house for cash. As a direct home buyer, we avoid listing fees and hidden service charges, and we structure offers so your net amount at closing is easy to understand.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Cottondale, AL housing market like if I need to sell fast?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Cottondale market supports both traditional listings and fast cash sales. If you need to sell quickly, a local cash buyer like We Buy Tuscaloosa Homes can help you avoid showings, financing delays, and contingencies by giving you a predictable cash offer.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sell my Cottondale house as-is if it needs a lot of work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can sell your Cottondale house as-is even if it needs major repairs. We Buy Tuscaloosa Homes is a local cash home buyer and will factor needed work into your offer so you can move on without fixing anything first.",
        },
      },
      {
        "@type": "Question",
        name: "How can I tell if a cash home buyer in Cottondale is legitimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A legitimate cash home buyer will be transparent and easy to verify. Look for a clear website, local Tuscaloosa presence, and reviews. Serious buyers like We Buy Tuscaloosa Homes explain their process and close through a reputable local title company.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I get a cash offer for my Cottondale house and I am not sure if it is fair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you are not sure a cash offer is fair, compare it with local info. Check recent Cottondale sales, talk with a Tuscaloosa agent, and request a second written offer from We Buy Tuscaloosa Homes so you can choose what feels right.",
        },
      },
      {
        "@type": "Question",
        name: "Do you only buy houses in Cottondale, or across the Tuscaloosa area too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We buy houses in Cottondale and across the broader Tuscaloosa area. We Buy Tuscaloosa Homes focuses on local sellers in Cottondale, Tuscaloosa, and nearby Alabama neighborhoods and can quickly let you know if your property fits our buying criteria.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "We Buy Tuscaloosa Homes",
    url: "https://www.webuytuscaloosahomes.com/",
    telephone: "+18037847672",
    description:
      "We buy houses in Tuscaloosa, AL for cash, as-is, with a fast close; locally owned and operated.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1520 Stillwater Dr",
      addressLocality: "Tuscaloosa",
      addressRegion: "AL",
      postalCode: "35406",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "Cottondale" },
    serviceArea: { "@type": "GeoCircle", geoRadius: "50000" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe LeBlanc",
    jobTitle: "Founder, Owner, and CEO",
    description:
      "Joe LeBlanc is the founder and owner of We Buy Tuscaloosa Homes, locally based in Tuscaloosa. He personally handles every transaction and is known for honesty and empathy with sellers.",
    url: "https://webuytuscaloosahomes.com/about",
    worksFor: {
      "@type": "LocalBusiness",
      name: "We Buy Tuscaloosa Homes",
      url: "https://www.webuytuscaloosahomes.com/",
    },
    founder: {
      "@type": "Organization",
      name: "We Buy Tuscaloosa Homes",
      url: "https://www.webuytuscaloosahomes.com/",
    },
  },
] as const;
