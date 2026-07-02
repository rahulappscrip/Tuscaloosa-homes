import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";
import { getSituationImage } from "./situationImages";

export const hillcrestHeroBenefits = [
  "No repairs — sell your Hillcrest house exactly as it sits, even if it needs work.",
  "No commissions or hidden fees — what we offer is what you put in your pocket at closing.",
  "You choose the closing date — move on your schedule, not a buyer's or bank's.",
] as const;

export const hillcrestWhyStats = [
  { value: "7 Days", label: "Close in as little as", accent: "teal" as const },
  {
    value: "Direct",
    label: "Work with Joe, not a call center",
    accent: "teal" as const,
  },
  {
    value: "Local",
    label: "Hillcrest & Tuscaloosa market knowledge",
    accent: "gold" as const,
  },
] as const;

export const hillcrestWhyBenefits = [
  "Speed when you need it. You skip showings, financing delays, and long repair projects. We can often close in as little as 7 days, or later if you need more time.",
  "Simplicity, start to finish. You deal directly with Joe, not a big call center. We walk you through each step in plain language and handle the paperwork with a local title company.",
  "Local knowledge of Hillcrest and Tuscaloosa. We understand typical Hillcrest homes, school zones, and what buyers look for here, so our offers reflect real neighborhood demand.",
  "As-is purchase. Old roof, dated kitchen, flooring that has seen better days — we still buy it. You don't have to fix, clean, or stage the house first.",
  "Transparent, fair approach. We'll explain how we arrived at your number, encourage you to compare our offer with others, and never pressure you to say yes.",
] as const;

export const hillcrestSituations = [
  {
    id: "foreclosure",
    title: "Facing Foreclosure or Behind on Payments",
    description:
      "If you're worried about falling further behind, a direct Hillcrest cash sale can help you move before things escalate. We can work with the title company and your lender to pay off what's owed at closing if the numbers allow.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "inherited-probate",
    title: "Inherited a Hillcrest House",
    description:
      "Maybe you inherited a property near Hillcrest High and don't have the time or desire to fix it up. You can sell the house as-is, split proceeds with family, and avoid months of managing contractors.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "divorce",
    title: "Going Through a Divorce",
    description:
      "Selling a house during a divorce is stressful. A cash buyer can provide one clear offer so you and your spouse can decide how to divide the proceeds without showings or repair debates.",
    image: getSituationImage("divorce"),
  },
  {
    id: "relocating",
    title: "Relocating for Work or Life Changes",
    description:
      "If you need to move out of Tuscaloosa quickly, waiting months for a traditional sale may not fit. A Hillcrest cash offer can give you a firm closing date so you can plan your next chapter.",
    image: getSituationImage("relocating"),
  },
  {
    id: "tired-landlord",
    title: "Tired Landlord or Problem Tenants",
    description:
      "Owning rentals near Hillcrest schools can be rewarding, but tenant headaches add up. We can buy tenant-occupied houses, review your lease, and usually let you walk away without handling an eviction first.",
    image: getSituationImage("tired-landlord"),
  },
  {
    id: "major-repairs",
    title: "Major Repairs or Outdated Condition",
    description:
      "Roof leaks, foundation concerns, or a house that hasn't been updated in decades make it harder to sell the traditional way. We buy Hillcrest properties in almost any condition, so you don't have to spend more money before you sell.",
    image: getSituationImage("major-repairs"),
  },
] as const;

export const hillcrestProcessSteps = [
  {
    num: 1,
    title: "Tell Us About Your Hillcrest Property",
    description:
      "Share your address, basic details, and what's going on. You can call, text, or use the short form on this page. We'll ask a few simple questions about condition and timing so we understand your goals.",
  },
  {
    num: 2,
    title: "We Review and Present Your As-Is Cash Offer",
    description:
      "Joe looks at recent Hillcrest and Tuscaloosa sales, your home's size and layout, and its current condition. We put together a clear written cash offer for your house as-is and explain how we arrived at the number in plain language. You're encouraged to compare it with other options.",
  },
  {
    num: 3,
    title: "You Choose Your Closing Date and Get Paid",
    description:
      "If the offer works for you, you pick a closing window that fits your move — as soon as 7 days or later if you need more time. We work with a local title company, handle the paperwork, and you don't have to make repairs or clean out every item.",
  },
] as const;

export const hillcrestTestimonialSlides = [
  {
    kind: "text" as const,
    quote:
      "I was ready to downsize after years near Hillcrest schools but didn't want to renovate before selling. Joe made it easy — one walk-through, a clear offer, and we closed on my schedule without a dollar in repairs.",
    signature: "Hillcrest homeowner, downsizing",
    meta: "Hillcrest, Tuscaloosa",
    initial: "H",
  },
  {
    kind: "text" as const,
    quote:
      "My rental near Hillcrest High had become more stress than it was worth. Joe bought it tenant-occupied, handled everything, and I walked away with no commissions and no headaches.",
    signature: "Tired landlord, Hillcrest area",
    meta: "Hillcrest, Tuscaloosa",
    initial: "T",
  },
  {
    kind: "text" as const,
    quote:
      "We inherited an older Hillcrest house and lived out of town. The idea of handling repairs and showings from hundreds of miles away was overwhelming. Selling for cash let us close cleanly without flying back and forth.",
    signature: "Inherited property, Tuscaloosa",
    meta: "Hillcrest area",
    initial: "I",
  },
  {
    kind: "text" as const,
    quote:
      "Joe explained every part of the offer and why the number was what it was. I appreciated that he encouraged me to compare — it made me feel confident I was making the right choice, not being rushed.",
    signature: "Hillcrest homeowner, relocation",
    meta: "Hillcrest, Tuscaloosa",
    initial: "R",
  },
] as const;

export const hillcrestComparisonColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  {
    key: "cash",
    header: "Selling to We Buy Tuscaloosa Homes",
    highlight: true,
  },
  { key: "list", header: "Listing With an Agent" },
];

export const hillcrestComparisonRows: ComparisonRowData[] = [
  {
    label: "Speed to close",
    values: {
      cash: {
        text: "Close in as little as 7 days or on your schedule",
        positive: true,
      },
      list: { text: "Often 1–3+ months from listing to closing" },
    },
  },
  {
    label: "Repairs and cleaning",
    values: {
      cash: {
        text: "No repairs or deep cleaning required; sell as-is",
        positive: true,
      },
      list: { text: "Usually need to repair, update, and stage" },
    },
  },
  {
    label: "Showings and open houses",
    values: {
      cash: {
        text: "No showings; one brief walk-through with our team",
        positive: true,
      },
      list: {
        text: "Multiple showings, open houses, last-minute visits",
      },
    },
  },
  {
    label: "Commissions",
    values: {
      cash: {
        text: "No real estate commissions deducted from your offer",
        positive: true,
      },
      list: { text: "Standard commissions paid from your sale proceeds" },
    },
  },
  {
    label: "Closing costs",
    values: {
      cash: { text: "We typically cover standard closing costs", positive: true },
      list: { text: "Sellers usually pay their share of closing costs" },
    },
  },
  {
    label: "Certainty of closing",
    values: {
      cash: {
        text: "Cash buyers don't rely on bank financing; fewer surprises",
        positive: true,
      },
      list: {
        text: "Buyer financing, inspections, appraisals can cause delays",
      },
    },
  },
  {
    label: "Condition of the house",
    values: {
      cash: {
        text: "We buy Hillcrest houses in almost any condition",
        positive: true,
      },
      list: { text: "Retail buyers prefer updated, move-in-ready homes" },
    },
  },
  {
    label: "Effort from you",
    values: {
      cash: {
        text: "Simple; we handle paperwork with a local title company",
        positive: true,
      },
      list: {
        text: "You coordinate repairs, showings, negotiations, and more",
      },
    },
  },
];

export const hillcrestMarketParagraphs = [
  "In Hillcrest Tuscaloosa, homes are currently seeing solid demand, but days on market and pricing can vary depending on condition and how updated the house is.",
  "Prices & Typical Hillcrest Homes — Hillcrest is known for everyday family homes — many of them brick houses built in past decades near Hillcrest High School and nearby streets. Well-maintained properties sell at solid values, while houses needing major updates often sell for less or take longer to move.",
  "Buyer Expectations in Hillcrest — Many buyers in Hillcrest are families looking for school access and a convenient commute. They often prefer modern kitchens, refreshed bathrooms, and move-in-ready condition. Older or more dated homes can be tougher to sell for top dollar without investing in upgrades first.",
  "Condition vs. Time on Market — Well-priced, move-in-ready homes can move faster; properties that need work may sit while buyers compare renovation costs. If you're on a specific timeline, that extra waiting time can add months of utilities, taxes, and upkeep.",
  "Where a Cash Buyer Fits — If your Hillcrest house is already updated and you're not in a rush, listing may give you the best shot at a higher price. If your house needs work, you're dealing with a difficult situation, or you value speed and certainty, a local cash offer can be a better fit.",
] as const;

export const hillcrestCoverageParagraphs = [
  "Yes — in most cases, if you're in Hillcrest or close by in the 35405 area, We Buy Tuscaloosa Homes can look at buying your house for cash.",
  "We focus this page on Hillcrest because many sellers search by neighborhood name, but our actual buying area covers much of Hillcrest and nearby parts of south and east Tuscaloosa. Whether you're near Hillcrest High School, along busier corridors, or tucked into a side street, we're open to talking.",
  "Your exact street name matters less than the basic details of your property. If you're on the edge of Hillcrest or just outside it, you can still reach out — we'll let you know quickly if your address is in our current buying area.",
  "The easiest way to check is to share your address through the form or give Joe a quick call or text. He'll confirm coverage and let you know what a cash offer path could look like for you.",
] as const;

export const hillcrestPricingFormulaSteps = [
  {
    id: "arv",
    operator: "ARV",
    operatorVariant: "arv" as const,
    title: "After-Repair Value (ARV)",
    description:
      "ARV is what your house could reasonably sell for in Hillcrest once it's fixed up and ready for the open market. Joe looks at recent sales of similar homes in Hillcrest and nearby parts of Tuscaloosa to estimate that number.",
  },
  {
    id: "repairs",
    operator: "−",
    operatorVariant: "minus" as const,
    title: "Repairs and Cleanup",
    description:
      "We consider the work needed to bring your house up to that level — things like roof, HVAC, interior updates, and basic cleanup. Because we buy as-is, we build those costs into our side of the math, so you don't have to spend that money yourself.",
  },
  {
    id: "holding",
    operator: "−",
    operatorVariant: "minus" as const,
    title: "Holding Costs and a Reasonable Profit",
    description:
      "We also factor in property taxes, utilities, insurance, and the risk of owning the property while we fix and resell it. Like any business, we need some profit for taking on that risk. Joe will walk you through how he looked at your property and answer any questions about the number.",
  },
] as const;

export const hillcrestMeetJoeParagraphs = [
  "Joe LeBlanc is a local cash home buyer who helps Hillcrest Tuscaloosa homeowners sell quickly, simply, and on their terms.",
  "Joe founded We Buy Tuscaloosa Homes as a small, local company focused on straightforward cash offers, not high-pressure sales tactics. He talks directly with Hillcrest sellers, listens first, and then walks through options — including when a traditional sale might be better for you.",
  "When you reach out, you're not dealing with a national franchise or distant call center. You're talking with Joe, a local owner who lives and works in the Tuscaloosa area and cares about his reputation here.",
] as const;

export const hillcrestMeetJoeCredentials = [
  "Clear written contract with plain-language terms — no confusing clauses",
  "No upfront fees — ever",
  "Closing handled by a neutral local title company",
  "We encourage you to compare our offer and ask every question before you decide",
] as const;

export const hillcrestFaqs = [
  {
    id: "legitimate",
    question: "Are cash house buyers in Hillcrest Tuscaloosa legitimate?",
    answer:
      "Yes. Many cash house buyers serving Hillcrest Tuscaloosa are legitimate investors who really do buy houses in any condition. A trustworthy local cash buyer will give you a clear written purchase contract, explain the terms, and never ask for upfront fees. You can always request proof they have funds available and check online reviews before you sign so you feel confident moving forward.",
  },
  {
    id: "closing-costs",
    question:
      "How much are closing costs for a home seller in Alabama if I sell for cash?",
    answer:
      "Often, very little. When you sell to a local cash buyer in Alabama, it is common for the buyer to cover most or all standard closing costs so your net closely matches the offer price. With a traditional agent sale, sellers usually pay closing costs on top of commissions. With a direct cash sale, you avoid commissions and much of the usual paperwork, which can simplify your Hillcrest Tuscaloosa transaction.",
  },
  {
    id: "how-fast",
    question: "How fast can I sell my house in Hillcrest Tuscaloosa for cash?",
    answer:
      "Faster than a traditional listing. When you work with a local cash buyer in Hillcrest Tuscaloosa, you skip showings, financing delays, and most repairs, which can shorten the overall timeline. Once you agree on a price and sign the contract, the closing date is flexible, so you can choose a quicker date if you need to move soon or a later date if you want extra time to plan your next step.",
  },
  {
    id: "repairs",
    question:
      "Do I need to make repairs or clean out my Hillcrest house before you buy it?",
    answer:
      "No. A Hillcrest Tuscaloosa cash buyer will typically purchase your house as-is, so you do not need to repair, repaint, or fully clean it first. You can leave behind old furniture, clutter, or items you do not want to move, and the buyer will handle the cleanup and repairs after closing. That lets you focus on your next chapter instead of fixing every little issue.",
  },
  {
    id: "offer-math",
    question: "How do you decide what my Hillcrest house is worth?",
    answer:
      "A Hillcrest cash offer is usually based on recent sales of similar homes in Tuscaloosa, your property's size and layout, and its current condition. The buyer also factors in needed repairs, holding costs, and a reasonable profit. A good local cash buyer will walk you through those pieces in plain language so you understand how they arrived at the number for your Hillcrest house.",
  },
  {
    id: "foreclosure",
    question:
      "Can I still sell my Hillcrest house for cash if I'm facing foreclosure or behind on payments?",
    answer:
      "Yes. Many Hillcrest homeowners who are behind on payments or facing foreclosure choose a cash buyer to avoid a drawn-out process. A local investor can often work with your lender and the title company to pay off the balance at closing, as long as the numbers still work. Reaching out early usually gives you more options and time to review the offer before any foreclosure deadlines.",
  },
  {
    id: "net-more",
    question:
      "Will I net more money if I list with an agent instead of selling my Hillcrest house for cash?",
    answer:
      "Often, yes. If your Hillcrest house is move-in ready and you have time for showings, repairs, and buyer financing, listing with an agent can sometimes bring a higher sale price. A cash sale usually trades some price for speed, convenience, and certainty, since you skip commissions, most closing costs, and repair headaches. Comparing an agent's estimated net sheet with a written cash offer is the best way to see which option fits your goals.",
  },
  {
    id: "rentals",
    question: "Do you buy rental properties or houses with tenants in Hillcrest?",
    answer:
      "Yes. Many local cash buyers are comfortable purchasing occupied rental properties in Hillcrest Tuscaloosa. They can review your lease, coordinate with tenants respectfully, and often keep good renters in place after closing. As the landlord, you generally do not need to handle an eviction first unless there are serious issues. This can help you exit a stressful rental situation without a long vacancy period.",
  },
  {
    id: "property-types",
    question: "What types of houses do you buy in Hillcrest Tuscaloosa?",
    answer:
      "Mostly everyday Hillcrest homes. Local cash buyers in Hillcrest Tuscaloosa usually focus on single-family houses and small rentals, including older brick homes, townhomes, and properties that need cosmetic or major repairs. They are less worried about dated kitchens, worn flooring, or clutter than a traditional buyer would be. If you own a typical residential property in or near Hillcrest, it will probably fit within a local investor's buying criteria.",
  },
  {
    id: "no-obligation",
    question:
      "Can I get a cash offer for my Hillcrest house with no obligation to accept it?",
    answer:
      "Yes. Reputable cash home buyers in Hillcrest Tuscaloosa will provide a free, written cash offer that you can review without any obligation. You are welcome to compare it with other investors or an agent's estimate before deciding. If the numbers or timing are not right, you can simply decline and keep exploring your options without pressure or fees.",
  },
  {
    id: "service-area",
    question: "Do you only buy houses in Hillcrest, or all of Tuscaloosa?",
    answer:
      "Usually both. This page focuses on Hillcrest because many sellers search by neighborhood, but We Buy Tuscaloosa Homes also buys houses across much of Tuscaloosa and nearby pockets. If your property is close to Hillcrest or elsewhere in the Tuscaloosa area, you can still reach out with your address so Joe can quickly confirm whether it is in the current buying area.",
  },
  {
    id: "market",
    question: "What is the Hillcrest housing market like right now?",
    answer:
      "It's active, but condition matters. Recent Hillcrest and 35405 data show steady buyer interest, with well-presented homes moving faster than properties that need repairs. If you have time and a house in great shape, listing can work well; if you need to sell a property that needs work or you're on a tight timeline, a Hillcrest cash offer may be more practical.",
  },
] as const;

export const hillcrestPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hillcrestFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "We Buy Tuscaloosa Homes",
    url: "https://www.webuytuscaloosahomes.com/",
    telephone: "+18037847672",
    description:
      "We Buy Tuscaloosa Homes buys Tuscaloosa homes for cash, as-is, with no repairs, no commissions, and no closing costs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1520 Stillwater Dr",
      addressLocality: "Tuscaloosa",
      addressRegion: "AL",
      postalCode: "35406",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: "Hillcrest Tuscaloosa" },
    serviceArea: { "@type": "GeoCircle", geoRadius: "50000" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe LeBlanc",
    jobTitle: "Founder, Owner",
    description:
      "Joe LeBlanc is founder and owner of We Buy Tuscaloosa Homes. A Tuscaloosa based cash home buyer.",
    url: "https://webuytuscaloosahomes.com/about",
    worksFor: {
      "@type": "LocalBusiness",
      name: "We Buy Tuscaloosa Homes",
      url: "https://www.webuytuscaloosahomes.com/",
    },
  },
] as const;
