import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";
import { getSituationImage } from "./situationImages";

export const brookwoodHeroBenefits = [
  "Buy As-Is — No Repairs",
  "Cash Offer Within 24 Hours",
  "Zero Fees or Commissions",
  "No Obligation to Accept",
] as const;

export const brookwoodHeroStats = [
  { value: "Cash Offers", unit: "", label: "Within 24 Hours" },
  { value: "Close in 7 Days", unit: "", label: "Or on your timeline" },
  { value: "No Repairs · No Fees", unit: "", label: "Buy completely as-is" },
  { value: "Local Tuscaloosa Team", unit: "", label: "We know Brookwood" },
] as const;

export const brookwoodCashProsItems = [
  "No money out of pocket for repairs",
  "Fast closing and less time worrying about the market",
  "Flexible move-out timing that works around your life",
  "No showings, no strangers in your home",
  "Fees and commissions: no agent commissions when selling directly",
] as const;

export const brookwoodListingConsItems = [
  "Sale price is usually lower than a fully updated listing",
  "You trade some potential upside for speed and certainty",
] as const;

export const brookwoodThreeWayColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  {
    key: "cash",
    header: "Cash Buyer — We Buy Tuscaloosa Homes",
    highlight: true,
  },
  { key: "list", header: "Listing With Agent" },
  { key: "nothing", header: "Doing Nothing" },
];

export const brookwoodThreeWayRows: ComparisonRowData[] = [
  {
    label: "Timeline",
    values: {
      cash: { text: "Fast close, as soon as title ready", positive: true },
      list: { text: "Often 2–4+ months on market" },
      nothing: { text: "Deadlines keep getting closer", negative: true },
    },
  },
  {
    label: "Repairs",
    values: {
      cash: { text: "None — we buy as-is", positive: true },
      list: { text: "Usually needed to attract buyers" },
      nothing: { text: "Problems and costs pile up", negative: true },
    },
  },
  {
    label: "Showings",
    values: {
      cash: { text: "No showings, no strangers", positive: true },
      list: { text: "Multiple showings & open houses" },
      nothing: { text: "Ongoing disruption", negative: true },
    },
  },
  {
    label: "Fees",
    values: {
      cash: {
        text: "No commissions; we cover closing costs",
        positive: true,
      },
      list: { text: "Agent commissions & seller costs" },
      nothing: { text: "Taxes, interest & upkeep continue", negative: true },
    },
  },
  {
    label: "Certainty",
    values: {
      cash: { text: "Very high once you accept", positive: true },
      list: { text: "Deals can fall through on financing" },
      nothing: { text: "Risk of foreclosure grows", negative: true },
    },
  },
  {
    label: "Clean-out",
    values: {
      cash: { text: "We handle leftover items", positive: true },
      list: { text: "Your responsibility" },
      nothing: { text: "You keep managing everything", negative: true },
    },
  },
];

export const brookwoodSituations = [
  {
    id: "foreclosure",
    title: "Facing Foreclosure",
    description:
      "If you're behind on payments and worried about a foreclosure date, a fast cash sale can sometimes help you avoid the auction by paying off the loan before it's too late. We coordinate with your timeline and encourage you to stay in touch with your lender and, if needed, an attorney.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "property-taxes",
    title: "Behind on Property Taxes",
    description:
      "Falling behind on taxes can put your Brookwood or Tuscaloosa house at risk of a tax sale. Selling quickly for cash can give you the funds to catch up and move on without more penalties.",
    image: getSituationImage("property-taxes"),
  },
  {
    id: "inherited-probate",
    title: "Inherited a Brookwood House",
    description:
      "If you've inherited a home in Brookwood, Vance, or Cottondale, you may be dealing with repairs, family decisions, and probate at the same time. We buy inherited homes as-is, handle clean-out, and can work with your attorney to time closing once the court allows the transfer.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "divorce",
    title: "Dealing With Divorce",
    description:
      "During a divorce, the last thing you want is months of showings and arguments about repairs. A direct cash sale can provide a clean, fast way to split equity and reduce conflict, while keeping the process private.",
    image: getSituationImage("divorce"),
  },
  {
    id: "tired-landlord",
    title: "Bad Tenants or Tired Landlord",
    description:
      "If you own rentals in Brookwood, Northport, or central Tuscaloosa and are tired of late payments, damage, or constant calls, we can buy your property even with tenants in place. After closing, we take over the headaches so you don't have to.",
    image: getSituationImage("tired-landlord"),
  },
  {
    id: "sell-as-is",
    title: "Major Repairs or Outdated House",
    description:
      "Roof issues, foundation cracks, old wiring, or decades-old finishes can make listing feel impossible. Instead of pouring money into a fixer-upper, many Brookwood and Tuscaloosa County owners choose a cash sale where we take on the work.",
    image: getSituationImage("sell-as-is"),
  },
] as const;

export const brookwoodProcessSteps = [
  {
    num: 1,
    title: "Reach Out for Offer",
    description:
      "Call (803) 784-7672 or fill out a quick form with your Brookwood address, beds/baths, basic condition, and ideal timeline. No obligation and no credit check.",
  },
  {
    num: 2,
    title: "Review Your Cash Offer",
    description:
      "We take a look at your house (short walkthrough or photos), compare recent Tuscaloosa County sales, estimate repairs, then present a clear cash offer. No commissions and no hidden fees.",
  },
  {
    num: 3,
    title: "Close on Your Timeline",
    description:
      "If you accept, we coordinate closing on a date you choose. A local title company handles the paperwork. You don't have to fix anything, clean out every room, or host showings.",
  },
  {
    num: 4,
    title: "Get Paid",
    description:
      "Sign the closing documents and receive your funds shortly after. It's an easy way to sell house as-is Tuscaloosa wide without wondering what's coming next.",
  },
] as const;

export const brookwoodDetailedProcessSteps = [
  {
    num: 1,
    title: "Share Your Property Details",
    description:
      "You call (803) 784-7672 or fill out the short form with your Brookwood or Tuscaloosa County address, beds and baths, general condition, and why you're thinking of selling. There's no cost and no obligation.",
  },
  {
    num: 2,
    title: "We Review Your House and Run the Numbers",
    description:
      "We'll schedule a quick walkthrough or ask for a few photos — no full staging or repeated showings. Behind the scenes, we look at recent Tuscaloosa County sales for similar homes, your home's current condition and needed updates, and reasonable repair and holding cost estimates. ",
  },
  {
    num: 3,
    title: "You Decide What to Do",
    description:
      "We explain how we arrived at the number and answer your questions. You can compare our offer with others, talk to family, or sleep on it. If it doesn't feel right, you walk away with no pressure and no follow-up calls.",
  },
  {
    num: 4,
    title: "Fast Closing on Your Schedule",
    description:
      "When you say yes, we send a simple contract and work with a local Tuscaloosa County title company to prepare closing. You pick the date — whether you want fast closing or a little extra time — and receive your funds shortly after signing. No bait-and-switch, no last-minute junk fees.",
  },
] as const;

export const brookwoodTestimonialSlides = [
  {
    kind: "text" as const,
    quote:
      "The offer matched what was explained upfront. There were no surprise fees at closing, and the team stayed in touch from first call to keys handed over.",
    signature: "Brookwood, AL Homeowner",
    meta: "Brookwood, AL",
    initial: "B",
  },
  {
    kind: "text" as const,
    quote:
      "I was searching for 'sell my house fast near Brookwood' and wondering if a cash buyer was really any different. They found that the offer was fair, transparent, and there was no pressure.",
    signature: "Tuscaloosa, AL Seller",
    meta: "Tuscaloosa, AL",
    initial: "T",
  },
  {
    kind: "text" as const,
    quote:
      "When you reach out, you'll talk with the same local team that helped these Brookwood-area owners, not a random call center. That made all the difference.",
    signature: "Vance, AL Homeowner",
    meta: "Vance, AL",
    initial: "V",
  },
] as const;

export const brookwoodWhoWeHelpItems = [
  "Owner-occupants in Brookwood who are behind on payments, ready to downsize, or tired of constant upkeep.",
  "Out-of-state owners with a house in Brookwood who want a simple way to sell without flying in for months of showings.",
  "Heirs and families with an inherited house Tuscaloosa County courts are handling through probate.",
  "Landlords with rental houses in Brookwood, Northport, or central Tuscaloosa who are done with late payments, turnovers, or property damage.",
  "Couples going through a divorce sale in Tuscaloosa County looking for a straightforward way to sell and split proceeds.",
  "Owners of vacant, outdated, or problem properties that would need significant work to list on the open market.",
  "Sellers dealing with tax, code, or title issues who need a buyer willing to work through extra steps with a local closing attorney.",
] as const;

export const brookwoodMarketStats = [
  {
    value: "$285K",
    label: "Median Sale Price (Tuscaloosa, May 2026 · ACRE/UA)",
    accent: "teal" as const,
  },
  {
    value: "28.8%",
    label: "All-Cash Home Buyers (U.S., March 2026 · Redfin)",
    accent: "navy" as const,
  },
  {
    value: "24hr",
    label: "Cash Offer Turnaround — We Buy Tuscaloosa Homes",
    accent: "teal" as const,
  },
] as const;

export const brookwoodMarketParagraphs = [
  "In 2026, many Tuscaloosa County sellers are seeing strong demand for move-in-ready homes while properties needing work take longer and cost more to fix. Here's what that means for Brookwood sellers.",
  "May 2026 median sales price in the Tuscaloosa area was about $285,000, slightly down from April and down 0.9% year-over-year.",
  "Recent peak (April 2026): median sold price around $297,500, up 8.2% year-over-year at that time.",
  "Well-kept homes near major employers and schools move fastest. Houses in Brookwood, Vance, and other small communities that need big repairs often sit longer unless priced aggressively.",
  "Higher contractor and material costs mean many owners don't recoup every dollar they put into major updates — one reason more sellers are considering as-is cash offers.",
  "About 28.8% of U.S. homebuyers paid all cash in March 2026, so choosing a cash buyer is a mainstream, well-established path.",
  "Data sources: ACRE/Culverhouse UA · Realtor.com · Tuscaloosa County Tax Assessor · Tuscaloosa Public GIS",
] as const;

export const brookwoodNeighborhoodDetailBenefits = [
  {
    num: "01",
    title: "Brookwood, AL",
    description:
      "Brookwood homeowners often balance small-town life with commutes into Tuscaloosa or nearby plants. Many houses here are older and may need updates or repairs. We buy Brookwood properties in almost any condition, whether you're dealing with repairs, an inherited house, or a fast move.",
  },
  {
    num: "02",
    title: "Vance, AL",
    description:
      "In Vance and nearby communities, we often work with owners who need to move quickly for work or family changes. If your Vance house needs updates or you simply don't want months of showings, we can make a cash offer and let you choose a closing date that fits your plans.",
  },
  {
    num: "03",
    title: "Cottondale, AL",
    description:
      "Cottondale has a mix of starter homes and older properties that could use a refresh. If your Cottondale house needs work and you don't want to take on big contractor projects, we'll buy it as-is for cash, so you can move on without fixing everything first.",
  },
  {
    num: "04",
    title: "Northport, AL",
    description:
      "In Northport, we buy everything from long-term family homes to rentals with tenants in place. If you're tired of late rent, repairs, or being a landlord, a direct cash sale can help you exit without waiting for leases to end.",
  },
  {
    num: "05",
    title: "Tuscaloosa (city)",
    description:
      "Many Tuscaloosa sellers reach out when timing matters — job changes, school schedules, or unexpected expenses. We buy houses in the city as-is, so you can avoid open houses and months on the market.",
  },
] as const;

export const brookwoodMeetJoeParagraphs = [
  "When you contact We Buy Tuscaloosa Homes about selling your Brookwood house, you're talking to Joe LeBlanc and a small local team, not a national franchise. Joe is the Founder, Owner, and CEO and personally stays involved in every deal. He's helped many Alabama homeowners sell as-is for cash while keeping the process respectful and straightforward.",
  "When you reach out, you'll speak directly with a local cash home buyer in Tuscaloosa County who understands Brookwood, surrounding towns, and the kinds of situations sellers face here.",
] as const;

export const brookwoodMeetJoeCredentials = [
  "Transparency: We explain how we arrive at your offer.",
  "Respect: No pushy sales tactics, ever.",
  "Local focus: We specialise in Brookwood and Tuscaloosa County homes.",
] as const;

export const brookwoodFaqs = [
  {
    id: "how-fast",
    question: "How fast can I sell my house for cash in Brookwood, AL?",
    answer:
      "You can sell in a short timeframe once you accept a cash home buyer's offer. With a local cash home buyer, there is no waiting on bank financing, repairs, or multiple showings, so closing can usually be scheduled as soon as the title work is ready. If you need more time, you can often choose a later closing date that fits your Brookwood move.",
  },
  {
    id: "repairs",
    question:
      "Do I need to make repairs before selling my Brookwood house as-is?",
    answer:
      "No. You do not need to make repairs to sell your Brookwood house as-is to a cash home buyer. Cash buyers purchase houses in many conditions, from outdated finishes to major repair needs, and they handle the work after closing. This can save you time, stress, and upfront money compared with fixing everything to list on the market in Tuscaloosa County.",
  },
  {
    id: "fair-offer",
    question:
      "How do I know if a cash offer on my Tuscaloosa County house is fair?",
    answer:
      "A fair cash offer is based on clear math that you can see. A cash home buyer should start from an estimated after-repair value using recent Tuscaloosa County sales, subtract repair costs, then subtract reasonable expenses and profit. Ask each buyer to walk you through these numbers, compare a few offers, and be cautious of hidden fees or pressure to sign immediately.",
  },
  {
    id: "foreclosure",
    question:
      "Can selling my Brookwood home for cash help me avoid foreclosure?",
    answer:
      "Yes. A fast cash sale can sometimes help you avoid foreclosure if it closes before the auction date. By working with a cash home buyer in Tuscaloosa County, you can convert your equity to cash and pay off the loan more quickly than a traditional listing. Timing is critical, so contact your lender and a local buyer early. This is general information, not legal advice.",
  },
  {
    id: "as-is-vs-fix",
    question:
      "What's the difference between selling my house as-is and fixing it up first?",
    answer:
      "Selling as-is trades a higher potential price for speed and less hassle. When you sell as-is to a cash home buyer, you skip repairs, showings, and contractor headaches, but the price is usually lower. Fixing your house first and listing it can bring more in some cases, yet it takes time, money, and energy, which many Brookwood and Tuscaloosa County owners would rather avoid.",
  },
  {
    id: "fees",
    question:
      "Are there any fees or commissions when I sell my Brookwood house to you?",
    answer:
      "No. A true cash home buyer does not charge you commissions or surprise fees. In a typical Brookwood or Tuscaloosa County cash sale, the buyer covers normal closing costs and does not add real estate commissions on top. You receive the agreed purchase price at closing, minus your existing mortgage or liens, without paying out of pocket to sell.",
  },
  {
    id: "any-condition",
    question:
      "Do cash home buyers really purchase houses in any condition in Brookwood and Tuscaloosa County?",
    answer:
      "Yes. Cash home buyers regularly purchase houses in a wide range of conditions in Brookwood and across Tuscaloosa County. That can include outdated interiors, old roofs, foundation issues, water damage, or properties that have been vacant. The buyer factors repairs into the offer and handles the work after closing, so you can sell without fixing or cleaning everything first.",
  },
  {
    id: "inherited-probate",
    question:
      "Can I sell an inherited Brookwood house if it still needs to go through probate?",
    answer:
      "In many cases you can start the sale process during or after probate, with the right approvals. Cash home buyers familiar with Tuscaloosa County can often work alongside your attorney and heirs, then schedule closing once the probate court allows the transfer. Because probate rules are legal matters, you should always follow your attorney's guidance.",
  },
  {
    id: "rentals",
    question: "Do you buy rental properties with tenants in place in Brookwood?",
    answer:
      "Yes. Many cash home buyers will purchase Brookwood rental properties even if tenants are still in place. They are used to working with Tuscaloosa County landlords, including situations with late rent or difficult tenants. The buyer takes over the lease or handles notices after closing, so you can sell the property and move on without waiting for the unit to be vacant first.",
  },
  {
    id: "info-needed",
    question:
      "What information do I need to give to get a cash offer on my Brookwood house?",
    answer:
      "You only need a few basic details to get a starting cash offer. A cash home buyer will usually ask for the Brookwood property address, number of bedrooms and bathrooms, general condition, any major issues you know about, and your ideal timeline. You do not have to provide full disclosures or professional photos just to start the conversation and see what your options are.",
  },
  {
    id: "service-area",
    question:
      "Do you only buy houses in Brookwood, or all over Tuscaloosa County?",
    answer:
      "Most cash home buyers that focus on Brookwood also buy throughout Tuscaloosa County. If you have a house in Brookwood, Tuscaloosa, Vance, Cottondale, Northport, or a nearby small community, you can usually still request a cash offer. Even if your exact town is not listed on a website, it is worth asking, since many local buyers serve a wide area around Brookwood.",
  },
  {
    id: "credit",
    question: "Will selling my house fast for cash hurt my credit score?",
    answer:
      "Selling your house for cash itself does not typically hurt your credit score. Issues like missed mortgage payments, collections, or foreclosure are what affect credit. Most cash home buyers do not pull your credit just to make an offer, but you should talk with a financial professional about your specific situation.",
  },
] as const;

export const brookwoodPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "We Buy Tuscaloosa Homes",
    url: "https://www.webuytuscaloosahomes.com/",
    telephone: "(803) 784-7672",
    email: "joe@webuytuscaloosahomes.com",
    description:
      "Cash offer delivered within 48 hours of property walkthrough. BBB A+ accredited.",
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
      name: "Tuscaloosa",
    },
    founder: {
      "@type": "Person",
      name: "Joe LeBlanc",
      jobTitle: "Founder, Owner, and CEO",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Does Selling Your Brookwood House for Cash Work?",
    description: "Selling your Brookwood house for cash takes three simple steps.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Reach Out for Offer",
        text: "Contact us via the form or phone to start the cash offer process. We collect basic property details and your preferred move date to begin the process.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Review Your Cash Offer",
        text: "We present a cash offer based on the property condition and local market. You can ask questions, compare offers, and decide whether to proceed.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Close on Your Timeline",
        text: "If you accept, we coordinate closing on a date you choose. There are no repairs, no fees, and no obligation to accept the offer.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe LeBlanc",
    jobTitle: "Founder, Owner, and CEO",
    description:
      "Joe LeBlanc is the Founder/CEO of We Buy Tuscaloosa Homes. He personally handles every transaction.",
    url: "https://webuytuscaloosahomes.com/about",
    worksFor: {
      "@type": "Organization",
      name: "We Buy Tuscaloosa Homes",
    },
  },
] as const;
