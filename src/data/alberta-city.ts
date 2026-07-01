import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";
import type { PricingFormulaRow } from "@/components/home-worth/PricingFormula";
import { getSituationImage } from "./situationImages";

export const albertaCityHeroBenefits = [
  "Written cash offer within 24 hours — no obligation",
  "Buy as-is in any condition — no repairs required",
  "No fees, no closing costs to you",
  "Close in 7 days or on your timeline",
  "Local Tuscaloosa team — not a national call center",
] as const;

export const albertaCityHeroStats = [
  { value: "Cash Offers", unit: "", label: "Within 24 Hours" },
  { value: "Close in 7 Days", unit: "", label: "Or on your timeline" },
  { value: "No Repairs · No Fees", unit: "", label: "Buy completely as-is" },
  { value: "Local Tuscaloosa Team", unit: "", label: "We know Alberta City" },
] as const;

export const albertaCityWhatIsGoodItems = [
  "Licensed Tuscaloosa Title Company — Every closing goes through a licensed local title company. Your transaction is legally clean and properly recorded.",
  "Written Offer — No Verbal Numbers — We put the offer in writing from day one. The number you see is the number you can plan around — no changes after you accept.",
  "You Set the Closing Date — Need 7 days? Need 60? You pick the date that works for your move, probate schedule, or divorce timeline.",
] as const;

export const albertaCityWhatIsConsiderItems = [
  "Alberta City is one of Tuscaloosa's most established west-side neighborhoods — a mix of longtime owner-occupied homes, rental properties, and inherited houses that don't always fit the profile of a traditional MLS listing. Many Alberta City sellers come to us because the property needs work, the situation is time-sensitive, or a traditional listing simply isn't practical.",
  "We buy houses in Alberta City in any condition — fire damage, mold, foundation issues, code violations, estate properties, and tenant-occupied rentals. We assess the property as-is, present a transparent written offer, and close through a licensed Tuscaloosa title company.",
] as const;

export const albertaCityComparisonColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  {
    key: "cash",
    header: "We Buy Tuscaloosa Homes (Cash sale · Alberta City)",
    highlight: true,
  },
  { key: "list", header: "Traditional Listing (Real estate agent)" },
];

export const albertaCityComparisonRows: ComparisonRowData[] = [
  {
    label: "Time to close",
    values: {
      cash: { text: "7–14 days", positive: true },
      list: { text: "60–90+ days" },
    },
  },
  {
    label: "Repairs required",
    values: {
      cash: { text: "None — we buy as-is", positive: true },
      list: { text: "Usually required to attract buyers" },
    },
  },
  {
    label: "Showings",
    values: {
      cash: { text: "None", positive: true },
      list: { text: "Multiple, often weeks of showings" },
    },
  },
  {
    label: "Agent commissions",
    values: {
      cash: { text: "None on our side", positive: true },
      list: { text: "Typically 5–6% of sale price" },
    },
  },
  {
    label: "Closing costs",
    values: {
      cash: { text: "We cover standard costs", positive: true },
      list: { text: "Seller typically pays 2–3%" },
    },
  },
  {
    label: "Deal certainty",
    values: {
      cash: { text: "Very high — no lender", positive: true },
      list: { text: "Buyer financing can fall through" },
    },
  },
  {
    label: "Sale price",
    values: {
      cash: { text: "Below full retail — reflects as-is" },
      list: { text: "Potentially higher for move-in ready homes" },
    },
  },
];

export const albertaCitySituations = [
  {
    id: "foreclosure",
    title: "Facing Foreclosure",
    description:
      "A cash sale can close before the sale date and stop the process entirely. The mortgage is paid off at closing. Call us as early as possible — the more time we have, the more options are available.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "inherited-probate",
    title: "Inherited Property",
    description:
      "We work directly with personal representatives and estate attorneys. We buy as-is — no cleanout, no repairs required. The estate gets a clean, fast resolution.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "divorce",
    title: "Divorce",
    description:
      "We work with both parties respectfully, align the closing with your legal timeline, and provide a guaranteed number both sides can plan around.",
    image: getSituationImage("divorce"),
  },
  {
    id: "tired-landlord",
    title: "Tired Landlord",
    description:
      "We buy tenant-occupied properties without requiring vacancy first. Month-to-month, fixed-term lease, or uncooperative tenants — you hand over the keys at closing.",
    image: getSituationImage("tired-landlord"),
  },
  {
    id: "major-repairs",
    title: "Major Repairs Needed",
    description:
      "Foundation, fire, mold, or water damage — financed buyers can't typically purchase these properties. We can. We price the as-is condition in from the start.",
    image: getSituationImage("major-repairs"),
  },
  {
    id: "relocation-vacant",
    title: "Relocation or Vacant Property",
    description:
      "When you've accepted a position elsewhere or a property sits vacant accumulating violations — we close on your schedule and coordinate everything remotely if needed.",
    image: getSituationImage("relocation-vacant"),
  },
] as const;

export const albertaCityProcessSteps = [
  {
    num: 1,
    title: "Tell Us About Your Property",
    description:
      "Call (803) 784-7672 or submit your property information online. Share the basics, including the home's condition, occupancy, and your ideal timeline. There's no obligation, and no inspection is required at this stage.",
  },
  {
    num: 2,
    title: "Schedule a Property Walkthrough",
    description:
      "We'll arrange a convenient time to visit your Alberta City property. There's no need to clean, stage, or make repairs—we simply evaluate the home in its current condition and answer any questions you have.",
  },
  {
    num: 3,
    title: "Receive Your Written Cash Offer",
    description:
      "After reviewing your home's condition and recent Alberta City comparable sales, we'll present a fair, transparent cash offer—typically within 24 hours. You'll have time to review it with no pressure or obligation.",
  },
  {
    num: 4,
    title: "Choose Your Closing Date & Get Paid",
    description:
      "If you accept the offer, we coordinate with a licensed Tuscaloosa title company to handle the paperwork and closing. You choose the closing date, and receive your payment by wire transfer or cashier's check.",
  },
] as const;

export const albertaCityPricingRows: PricingFormulaRow[] = [
  {
    id: "arv",
    operator: "ARV",
    operatorVariant: "arv",
    title: "After-Repair Value",
    description:
      "What your home would sell for fully renovated, based on real recent comparable sales in Alberta City and the Tuscaloosa west side.",
  },
  {
    id: "repairs",
    operator: "−",
    operatorVariant: "minus",
    title: "Repair Costs",
    description:
      "What it will cost us to bring the property to market-ready condition — roof, HVAC, foundation, cosmetic updates, and safety issues.",
  },
  {
    id: "holding",
    operator: "−",
    operatorVariant: "minus",
    title: "Holding & Selling Costs",
    description:
      "Property taxes, insurance, utilities, and selling costs while we own and improve the property — approximately 10%.",
  },
  {
    id: "margin",
    operator: "−",
    operatorVariant: "minus",
    title: "Fair Profit Margin",
    description:
      "Disclosed upfront — approximately 10%. Consistent across every deal. Without a margin we can't operate, but we keep it transparent.",
  },
  {
    id: "offer",
    operator: "=",
    operatorVariant: "equals",
    title: "Your Cash Offer",
    description:
      "The number in the offer is the number you receive. We walk through every line if you want to see it.",
  },
];

export const albertaCityPricingFormulaSteps = albertaCityPricingRows.map(
  ({ id, operator, operatorVariant, title, description }) => ({
    id,
    operator,
    operatorVariant,
    title,
    description,
  }),
);

export const albertaCityMarketStats = [
  { value: "$269K", label: "Tuscaloosa median sale price as of mid-2025" },
  {
    value: "42",
    label: "Average days on market for MLS listings",
    accent: "navy" as const,
  },
  { value: "2.7", label: "Months of inventory in Tuscaloosa" },
] as const;

export const albertaCityMarketParagraphs = [
  "Alberta City sits on Tuscaloosa's west side, bordered by the Black Warrior River and University Boulevard. It's a neighborhood with deep roots — longtime homeowners, families who've held properties for generations, and a housing stock that ranges from well-maintained bungalows to properties that have seen better days.",
  "Alberta City properties typically sell at or below the city median depending on condition and specific block. For sellers with updated, market-ready homes in good locations, the traditional MLS can still work well.",
  "For sellers dealing with deferred maintenance, estate complications, code issues, or time pressure — the traditional path adds cost and uncertainty rather than value. A cash offer gives you a firm number, a firm date, and no variables.",
] as const;

export const albertaCityWhoWeHelpGoodItems = [
  "Homeowners behind on mortgage payments facing foreclosure",
  "Heirs and personal representatives selling an inherited Alberta City property",
  "Couples dividing assets through divorce who need a fast, clean sale",
  "Tired landlords done with tenant management and repair cycles",
] as const;

export const albertaCityWhoWeHelpConsiderItems = [
  "Owners of vacant, code-violated, or condemned properties",
  "Out-of-town owners managing an Alberta City property remotely",
  "Sellers with homes needing major repairs that don't qualify for conventional financing",
  "Anyone who needs certainty over a specific timeline rather than the highest possible price",
] as const;

export const albertaCityMeetJoeParagraphs = [
  "As Founder and CEO, Joe LeBlanc oversees the entire operations of We Buy Tuscaloosa Homes. A graduate of the University of South Carolina, Joe has well over a decade of high-level business expertise and superior customer service experience.",
  "A natural problem solver, he has built a reputation for helping property owners across Tuscaloosa overcome some of the most difficult situations in real estate. When you reach out, there's a good chance you'll speak with Joe directly — he is involved in every transaction, reviewing offers and making sure every seller fully understands their options before making a decision.",
  "No call centers, no middlemen. Just a straightforward conversation with someone who knows Tuscaloosa real estate and takes the time to get the deal right.",
] as const;

export const albertaCityMeetJoeCredentials = [
  "University of South Carolina Graduate · 10+ Years Real Estate Experience",
] as const;

export const albertaCityFaqs = [
  {
    id: "code-violations",
    question:
      "Can I sell my house in Alberta City if it has code violations or liens?",
    answer:
      "Yes. Code enforcement liens and unpaid fines are resolved at closing from the sale proceeds through the title company. They don't prevent a cash sale — they get paid off at the closing table. We research all encumbrances before presenting our offer so you know your exact net proceeds upfront.",
  },
  {
    id: "cleanout",
    question: "Do I need to clean out the house before selling?",
    answer:
      "No. Leave anything you don't want — furniture, belongings, debris. We handle everything after closing. Take what you want, leave the rest.",
  },
  {
    id: "probate",
    question: "What if I'm still in the middle of probate?",
    answer:
      "Once the personal representative is appointed by the Tuscaloosa County Probate Court, they have authority to sell the property. We work directly with personal representatives and estate attorneys and are experienced with Alabama probate sale requirements.",
  },
  {
    id: "foreclosure",
    question: "Can you close before my foreclosure sale date?",
    answer:
      "In most cases yes, as long as there is sufficient equity and enough time to complete title work. Call us immediately — the earlier we can start, the more options remain available.",
  },
  {
    id: "mortgage",
    question: "What if I have a mortgage — can I still sell?",
    answer:
      "Yes. The outstanding mortgage balance is paid off from the sale proceeds at closing through the title company, exactly as in any real estate transaction. You receive whatever equity remains after payoff.",
  },
  {
    id: "negotiable",
    question: "Is your offer negotiable?",
    answer:
      "Our offers are based on transparent math but terms can sometimes be adjusted — closing date, items left at the property, and occasionally price if new information comes to light. We explain the numbers so you can evaluate them yourself.",
  },
  {
    id: "legitimate",
    question: "How do I know you're a legitimate buyer?",
    answer:
      "We close every transaction through a licensed Tuscaloosa title company and provide written proof of funds on request. We never ask for upfront fees or deposits before closing.",
  },
  {
    id: "vs-agent",
    question: "How is selling to you different from listing with an agent?",
    answer:
      "A cash sale to us is faster and requires no repairs or showings — but the offer will be below full retail market value because we take on the repair work and risk. A traditional listing can net more if your home is in good condition and you have time. We'll tell you honestly which path makes more sense for your specific property.",
  },
] as const;

export const albertaCityResourceRows = [
  {
    num: "01",
    title: "City of Tuscaloosa — Building & Inspection Services",
    description:
      "Permits, code enforcement records, and inspection history for properties within Tuscaloosa city limits. Confirm any open violations before closing. tuscaloosa.com/government/departments/inspections",
  },
  {
    num: "02",
    title: "Tuscaloosa County Probate Court",
    description:
      "Where estate and probate filings are administered. The personal representative's authority to sell an inherited property flows from an order issued here. tuscaloosacounty.com/probate",
  },
  {
    num: "03",
    title: "Tuscaloosa County Revenue Commissioner",
    description:
      "Property tax records, ownership history, and assessment data for all Tuscaloosa County properties including Alberta City. tuscaloosacounty.com/revenue",
  },
  {
    num: "04",
    title: "Alabama State Bar Lawyer Referral Service",
    description:
      "Find a licensed Alabama real estate attorney for probate complications, lien disputes, title questions, or contract review before closing. alabar.org/public/lrs/",
  },
  {
    num: "05",
    title: "HUD Housing Counseling — Free Foreclosure Assistance",
    description:
      "HUD-approved housing counselors provide free guidance on foreclosure prevention, loan modification, and understanding your options before a sale. hud.gov/counseling",
  },
] as const;

export const albertaCityLocalResources = albertaCityResourceRows.map(
  ({ num, title, description }) => ({
    num,
    title,
    description,
  }),
);

export const albertaCityPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "We Buy Tuscaloosa Homes",
    url: "https://webuytuscaloosahomes.com/",
    telephone: "(803) 784-7672",
    areaServed: "Tuscaloosa, Alabama",
    description:
      "Local cash home buyers serving Tuscaloosa, Alabama and surrounding areas including Alberta City.",
    founder: { "@type": "Person", name: "Joe LeBlanc" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: albertaCityFaqs.map((faq) => ({
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
        name: "Locations",
        item: "https://webuytuscaloosahomes.com/locations/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Alberta City",
      },
    ],
  },
] as const;
