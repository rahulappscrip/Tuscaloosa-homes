import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";
import { getSituationImage } from "./situationImages";

export const northportHeroSteps = [
  { num: 1, label: "Tell Joe About Your House" },
  { num: 2, label: "Get a Written Cash Offer" },
  { num: 3, label: "Choose Your Date & Get Paid" },
] as const;

export const northportHeroStats = [
  { value: "Cash Offers", unit: "", label: "Within 24 Hours" },
  { value: "Close in 7 Days", unit: "", label: "Or on your timeline" },
  { value: "No Repairs · No Fees", unit: "", label: "Buy completely as-is" },
  { value: "Local Tuscaloosa Team", unit: "", label: "We know Northport" },
] as const;

export const northportCashSaleGoodItems = [
  "Need to close quickly — foreclosure deadline, move date, or court date",
  "Can't or don't want to make repairs before selling",
  "Want to skip showings, open houses, and months of uncertainty",
  "Are managing a tenant-occupied, vacant, or inherited Northport property",
  "Value simplicity and certainty over squeezing out every last dollar",
] as const;

export const northportListingBetterItems = [
  "Have a fully updated, market-ready Northport house",
  "Have 60–90 days of flexibility and no urgent deadline",
  "Can comfortably handle repairs and staging costs upfront",
  "Want a single Northport buyer who might pay full retail price",
  "Want to maximize the gross price above all else",
] as const;

export const northportGiveGainDescription =
  'Instead of listing your house, waiting on showings, and hoping a financed buyer makes it to closing, you deal directly with one local buyer who can purchase your home as-is. For many people searching "sell my house fast Northport," that trade-off is worth it. Imagine a Northport homeowner who\'s fallen a couple of months behind on payments and can\'t afford repairs. Listing might mean weeks of uncertainty, more late fees, and a long to-do list. A local cash offer from We Buy Tuscaloosa Homes lets them "run the numbers" and decide if a quick, as-is sale is the calmer path.';

export const northportGiveGainRows = [
  {
    num: "01",
    title: "Less Focus on Top Dollar",
    description:
      "A cash offer is usually lower than a top-of-market list price, but it reflects the home's as-is condition and the fact that we pay typical closing costs.",
  },
  {
    num: "02",
    title: "No Repairs or Updates",
    description:
      "You can skip patching, painting, replacing flooring, or updating kitchens and baths just to please buyers.",
  },
  {
    num: "03",
    title: "No Showings or Open Houses",
    description:
      "You don't have strangers walking through your Northport home for weeks while you keep it \"show-ready.\"",
  },
  {
    num: "04",
    title: "Far Fewer Ways to Fall Through",
    description:
      "There's no buyer financing, no appraisal contingency, and no long repair negotiation.",
  },
  {
    num: "05",
    title: "No Cleaning Required",
    description:
      "You don't need to deep clean, declutter, or stage your home before selling. Leave unwanted belongings behind, and we'll buy the property in its current condition.",
  },
  {
    num: "06",
    title: "No Holding Costs",
    description:
      "Skip the extra expenses that come with waiting for a traditional sale, including mortgage payments, utilities, property taxes, insurance, and ongoing maintenance while your home sits on the market.",
  },
] as const;

export const northportSituations = [
  {
    id: "foreclosure",
    title: "Facing Foreclosure",
    description:
      "If you're behind on your mortgage and worried about a foreclosure sale date, a cash sale through an Alabama closing attorney can sometimes pay off the loan in time. The key is acting early enough in the process.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "inherited-probate",
    title: "Inherited Property or Probate",
    description:
      "If you've inherited a Northport house and don't want to be a long-distance landlord, we can often make an as-is cash offer and coordinate with the personal representative and Tuscaloosa County probate timeline.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "sell-as-is",
    title: "Too Many Repairs to List",
    description:
      "Maybe your Northport home needs roof work, HVAC, or foundation repairs you can't afford. Instead of pouring money into updates, you can sell the house as-is and let our team handle the work after closing.",
    image: getSituationImage("sell-as-is"),
  },
  {
    id: "tired-landlord",
    title: "Tired Landlord or Tenant Problems",
    description:
      "If you're a tired landlord Northport owner dealing with late rent, damages, or constant turnover, we can buy your rental property with or without tenants still in place.",
    image: getSituationImage("tired-landlord"),
  },
  {
    id: "divorce",
    title: "Divorce or Separation",
    description:
      "When two people need a clean, neutral way to turn a house into cash, a quick sale can prevent months of tension over showings and negotiations.",
    image: getSituationImage("divorce"),
  },
  {
    id: "relocating",
    title: "Relocation With a Hard Date",
    description:
      "Job change, military orders, or a move closer to family can all create a firm move-out deadline. A cash sale can line up your Northport closing with your next chapter.",
    image: getSituationImage("relocating"),
  },
] as const;

export const northportProcessSteps = [
  {
    num: 1,
    title: "Reach Out & Share Property Basics",
    description:
      "Call (803) 784-7672 or fill out the short form with your Northport address, property type, and situation. This first conversation usually takes just a few minutes.",
  },
  {
    num: 2,
    title: "Quick Walkthrough & Clear Cash Offer",
    description:
      "A member of our cash home buyers Northport team meets you at the property for a quick, no-pressure walkthrough. We review recent Northport/Tuscaloosa sales and your home's as-is condition to prepare a straightforward cash offer.",
  },
  {
    num: 3,
    title: "Pick Your Closing Date & Close With an Attorney",
    description:
      "If the offer works for you, we open title with a local Alabama closing attorney. They handle the deed, pay off your mortgage and agreed liens, and you choose a closing date that fits your move.",
  },
] as const;

export const northportDetailedProcessSteps = [
  {
    num: 1,
    tag: "Contact Us",
    title: "Reach Out & Tell Us About Your Property",
    description:
      "Call (803) 784-7672 or complete our short form with your Northport property details. Tell us a little about your home and your situation—it only takes a few minutes, and there's no obligation.",
  },
  {
    num: 2,
    tag: "Schedule a Property Walkthrough",
    title: "We Visit Your Home",
    description:
      "We'll arrange a time that works for you to walk through the property. There's no need to clean, stage, or make repairs—we simply assess the home's current condition and answer any questions you have.",
  },
  {
    num: 3,
    tag: "Receive Your No-Obligation Cash Offer",
    title: "Review Your Offer",
    description:
      "After evaluating your property and recent local sales, we'll present a straightforward cash offer with no hidden fees or commissions. Take your time reviewing it—there's never any pressure to accept.",
  },
  {
    num: 4,
    tag: "Close & Get Paid",
    title: "Choose Your Closing Date",
    description:
      "If you accept the offer, we work with a local Alabama closing attorney to handle the paperwork, pay off any existing mortgage or liens, and close on the date that works best for you. You receive your funds as soon as the transaction is complete.",
  },
] as const;

export const northportTestimonialSlides = [
  {
    kind: "text" as const,
    quote:
      "We had an inherited house that needed more work than we could take on. Joe bought it as-is, let us leave unwanted furniture behind, and the closing process took a couple of weeks from start to closing.",
    signature: "Sandra & Roy M.",
    meta: "Northport, AL · Estate sale",
    initial: "S",
  },
] as const;

export const northportComparisonColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  {
    key: "joe",
    header: "With We Buy Tuscaloosa Homes — Cash Offer",
    highlight: true,
  },
  { key: "agent", header: "Traditional Listing — Northport, AL" },
];

export const northportComparisonRows: ComparisonRowData[] = [
  {
    label: "Repairs & Updates",
    values: {
      joe: { text: "None required; we buy as-is", positive: true },
      agent: { text: "Often needed before and after inspection" },
    },
  },
  {
    label: "Showings & Open Houses",
    values: {
      joe: { text: "No showings", positive: true },
      agent: { text: "Multiple showings, open houses, lockbox access" },
    },
  },
  {
    label: "Agent Commissions",
    values: {
      joe: { text: "None", positive: true },
      agent: { text: "Standard percentage charged at closing" },
    },
  },
  {
    label: "Closing Costs",
    values: {
      joe: { text: "We typically cover standard seller costs", positive: true },
      agent: { text: "Seller often pays a share of closing costs" },
    },
  },
  {
    label: "Holding Costs",
    values: {
      joe: { text: "Shorter timeline reduces ongoing bills", positive: true },
      agent: { text: "Keep paying mortgage, taxes, utilities monthly" },
    },
  },
  {
    label: "Closing Timeline",
    values: {
      joe: { text: "Often measured in weeks, not months", positive: true },
      agent: { text: "Depends on buyer financing and inspections" },
    },
  },
  {
    label: "Risk of Falling Through",
    values: {
      joe: { text: "Very low — no financing or appraisal", positive: true },
      agent: {
        text: "Higher — financing, appraisal, repairs, cold feet",
      },
    },
  },
];

export const northportMarketParagraphs = [
  "The Northport housing market in 2026 is best described as steady but uneven, with some move-in-ready homes selling quickly while properties that need work can sit longer and go through multiple price cuts.",
  "Timing: How Long Might a Traditional Sale Take? — Because Northport sits just across the river from Tuscaloosa and the University of Alabama, demand often follows the school calendar. Buyer activity usually feels stronger in spring and early summer, then slows as football season and holidays stack up — especially for homes that still need repairs or updates. In recent years, many well-priced, updated Northport homes have gone under contract in a matter of weeks, while houses that need more work can sit on the market significantly longer. If you have a hard deadline — like a job relocation or court date — that uncertainty can be stressful.",
  "Condition vs Price: What Buyers Expect — Buyers looking in the Northport/Tuscaloosa corridor have plenty of options, from newer construction to older brick ranches. If your home feels dated, needs a new roof, or has deferred maintenance, many retail buyers expect either a lower price or repairs before closing.",
  "Why Cash Buyers Exist in Northport — Local cash buyers like We Buy Tuscaloosa Homes help fill the gap for properties that don't fit perfectly into the traditional listing lane. Investors, landlords, and families looking for projects all rely on as-is purchases to keep the housing ecosystem moving.",
  "For you as a seller, that means you have options: if your house is move-in ready and you have time, a traditional listing might make sense. If you need to sell quickly, don't want to fix anything, or feel overwhelmed, a local cash offer can give you a simpler path to the finish line.",
] as const;

export const northportWhereWeBuyAreas = [
  {
    header: "Historic & Riverfront",
    areas: [
      { name: "Historic Downtown Northport", primary: true },
      { name: "Black Warrior Riverfront", primary: false },
    ],
  },
  {
    header: "Established Neighborhoods",
    areas: [
      { name: "Queen City", primary: true },
      { name: "Capitol Park Area", primary: false },
    ],
  },
  {
    header: "Corridor & County",
    areas: [
      { name: "35475 Northport Corridor", primary: true },
      { name: "Cottondale, AL", primary: false },
      { name: "Tuscaloosa, AL", primary: false },
    ],
  },
] as const;

export const northportOutsideAreaItems = [
  "Tuscaloosa city neighborhoods near the river and university",
  "Nearby Tuscaloosa County communities such as Cottondale and similar areas",
  "Rural and semi-rural areas just outside the main Northport corridor",
] as const;

export const northportMeetJoeParagraphs = [
  "We Buy Tuscaloosa Homes is a small, local team of cash home buyers based in Tuscaloosa that buys houses directly from homeowners in Northport, AL. The company is led by Joe LeBlanc, Founder and Owner, who is personally involved in every transaction. As local cash home buyers, we focus on clear communication, simple contracts, and Alabama attorney-handled closings — not high-pressure tactics.",
  "We welcome vetting questions. We close with local attorneys, explain our offers in detail, and never charge upfront fees.",
] as const;

export const northportFaqs = [
  {
    id: "how-it-works",
    question: "How does selling your house for cash in Northport, AL actually work?",
    answer:
      "Selling your house for cash in Northport, AL works in a few simple steps. First, you contact We Buy Tuscaloosa Homes and share basic details about your Northport property. Next, a local cash home buyer does a quick walkthrough to see the house as-is. Then you receive a clear cash offer with no obligation. If you accept, a local Alabama closing attorney prepares the paperwork, pays off any mortgage, and you choose a closing date that fits your timeline.",
  },
  {
    id: "how-fast",
    question: "How fast can I sell my house for cash in Northport?",
    answer:
      "You can often sell your house for cash in Northport much faster than a traditional listing. A local cash home buyer like We Buy Tuscaloosa Homes focuses on simple, as-is purchases, so you skip repairs, showings, and buyer financing delays. The exact timing depends on things like title, liens, and your move-out plans, but you pick the closing date that works for you, whether you need to move quickly or prefer a little extra time.",
  },
  {
    id: "fair-price",
    question:
      "Will I get a fair price if I sell my Northport house to a cash home buyer?",
    answer:
      "A cash offer from a local buyer like We Buy Tuscaloosa Homes is built around trade-offs. Cash prices are usually lower than a top-of-market listing, but you avoid repairs, showings, months of holding costs, and real estate commissions. A fair offer is based on your home's as-is value in Northport, minus estimated repairs and a reasonable margin. You should compare any cash offer with what you'd net after agent fees, repairs, and time before deciding.",
  },
  {
    id: "repairs",
    question:
      "Do I need to make repairs or clean before selling my house as-is in Northport?",
    answer:
      "No. A local cash home buyer such as We Buy Tuscaloosa Homes buys Northport houses as-is, so you do not need to repair, update, or deep-clean the property. You can leave behind unwanted furniture, old appliances, and clutter, and they handle it after closing. The offer already accounts for the home's current condition. This can save you significant time, stress, and out-of-pocket costs compared with fixing everything to list on the open market.",
  },
  {
    id: "foreclosure",
    question: "Can a cash sale stop a foreclosure on my Northport, AL home?",
    answer:
      "Yes. A cash sale in Northport, AL can sometimes stop a foreclosure if there is enough time before the auction and enough equity in the property. A local cash home buyer like We Buy Tuscaloosa Homes works with an Alabama closing attorney who uses the sale proceeds to pay off your loan and any agreed liens. You should also talk with your lender and, if possible, your own attorney to understand your exact deadlines and options.",
  },
  {
    id: "mortgage",
    question: "What happens to my existing mortgage when I sell my house for cash?",
    answer:
      "Your existing mortgage is paid off at closing. The Alabama closing attorney handling your cash sale requests an official payoff from your lender, then uses part of the sale proceeds to pay that balance directly. With a local cash home buyer like We Buy Tuscaloosa Homes, you do not have to pay the loan off in advance. After the payoff and any agreed costs, the remaining funds are wired or handed to you as your take-home amount.",
  },
  {
    id: "legitimate",
    question: "How can I tell if a cash home buyer in Northport is legitimate?",
    answer:
      "You can vet a Northport cash home buyer by using a simple checklist. First, look up their business name and read real reviews. Second, ask for written proof of funds. Third, confirm they close with a local Alabama closing attorney, not by sending money to them. Finally, read the contract for clear terms and no upfront fees or pressure. A trustworthy buyer will answer your questions openly.",
  },
  {
    id: "inherited",
    question:
      "Do you buy inherited houses or properties still in probate in Northport?",
    answer:
      "Yes. A local cash home buyer like We Buy Tuscaloosa Homes can often buy inherited houses in Northport, even if the estate is still going through Tuscaloosa County probate. The key is that the personal representative or executor has legal authority to sell. We can make an as-is cash offer and coordinate closing with your probate timeline. Because every estate is different, you should also confirm details with your probate or estate attorney.",
  },
  {
    id: "rentals",
    question:
      "Can I sell a Northport rental property with tenants still living in it?",
    answer:
      "Yes. You can often sell a Northport rental with tenants still in place to a local cash home buyer such as We Buy Tuscaloosa Homes. We regularly look at occupied rentals and then handle the lease or tenant transition after closing, so you do not have to evict first. Sharing copies of the lease, rent amount, and any tenant issues helps us structure a realistic offer and timeline that respects both you and your renters.",
  },
  {
    id: "fees",
    question:
      "Do you charge any fees or commissions to buy my house in Northport?",
    answer:
      "No. When a local cash home buyer like We Buy Tuscaloosa Homes purchases your Northport house, you do not pay real estate commissions. You also do not pay any upfront fees just to get an offer. At closing, a local Alabama attorney handles the paperwork, pays off your existing mortgage and any agreed costs, and you receive the remaining funds. Your offer and closing statement clearly show what you walk away with so there are no surprises.",
  },
  {
    id: "property-types",
    question: "What types of houses will you buy in Northport, AL?",
    answer:
      "A local cash home buyer like We Buy Tuscaloosa Homes buys many different property types in Northport, AL. That can include lived-in single-family houses, vacant homes, inherited properties, rentals with or without tenants, and homes that need cosmetic updates or major repairs. Age, style, and appearance are rarely dealbreakers. If you are unsure about your specific situation, you can describe the property, and we will quickly let you know if it is a fit.",
  },
] as const;

export const northportPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does selling your house for cash in Northport, AL actually work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Selling your house for cash in Northport, AL works in a few steps. You contact We Buy Tuscaloosa Homes, we walk the property, then give you a clear cash offer. If you accept, a local closing attorney handles paperwork and payoff, and you choose the closing date.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can I sell my house for cash in Northport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can often sell your house for cash in Northport much faster than a traditional listing. A local cash home buyer such as We Buy Tuscaloosa Homes skips repairs and financing delays, and you choose the closing date that fits your situation.",
        },
      },
      {
        "@type": "Question",
        name: "Will I get a fair price if I sell my Northport house to a cash home buyer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A cash offer from a local buyer like We Buy Tuscaloosa Homes is built around trade-offs. The price is usually below top listing price but can be fair once you factor in repairs, agent commissions, holding costs, and time. Always compare your net, not just the headline price.",
        },
      },
      {
        "@type": "Question",
        name: "Do you charge any fees or commissions to buy my house in Northport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. When a local cash home buyer like We Buy Tuscaloosa Homes purchases your Northport house, you do not pay real estate commissions. You also do not pay any upfront fees just to get an offer. At closing, a local Alabama attorney handles the paperwork, pays off your existing mortgage and any agreed costs, and you receive the remaining funds. Your offer and closing statement clearly show what you walk away with so there are no surprises.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to make repairs or clean before selling my house as-is in Northport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We Buy Tuscaloosa Homes buys Northport houses as-is, so you do not need to make repairs or deep-clean. You can leave unwanted items, and the offer already reflects the home's current condition, saving you time, stress, and out-of-pocket repair costs.",
        },
      },
      {
        "@type": "Question",
        name: "Can a cash sale stop a foreclosure on my Northport, AL home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A cash sale in Northport, AL can sometimes stop foreclosure if there is enough time before the auction and enough equity in the property. A local cash home buyer like We Buy Tuscaloosa Homes works with an Alabama closing attorney who uses the sale proceeds to pay off your loan and any agreed liens. You should also talk with your lender and, if possible, your own attorney to understand your exact deadlines and options.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to my existing mortgage when I sell my house for cash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your mortgage is paid off at closing. The Alabama closing attorney handles a payoff request from your lender and uses your cash sale proceeds to pay it directly. With a buyer like We Buy Tuscaloosa Homes, you do not pay the loan off first; you receive the remaining funds after payoff and agreed costs.",
        },
      },
      {
        "@type": "Question",
        name: "How can I tell if a cash home buyer in Northport is legitimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can vet a Northport cash home buyer by checking reviews, asking for proof of funds, confirming they use a local Alabama closing attorney, and reading a clear contract with no upfront fees or pressure. A buyer like We Buy Tuscaloosa Homes should answer every question openly.",
        },
      },
      {
        "@type": "Question",
        name: "Do you buy inherited houses or properties still in probate in Northport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We Buy Tuscaloosa Homes can often buy inherited houses in Northport, even during Tuscaloosa County probate, as long as the personal representative is allowed to sell. We make an as-is cash offer and time closing around probate, but you should confirm specifics with your attorney.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sell a Northport rental property with tenants still living in it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can usually sell a Northport rental with tenants still living there to a buyer like We Buy Tuscaloosa Homes. We review the lease, rent, and tenant situation, then handle the transition after closing so you do not have to evict before you sell.",
        },
      },
      {
        "@type": "Question",
        name: "What types of houses will you buy in Northport, AL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We Buy Tuscaloosa Homes buys many kinds of houses in Northport, AL, including lived-in homes, vacant properties, inherited houses, and rentals, even if they need major repairs. Age and appearance are rarely dealbreakers; share your address and details and we will tell you quickly if it is a fit.",
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
      "We Buy Tuscaloosa Homes is a locally owned cash home buyer serving Tuscaloosa, AL and surrounding West Alabama, offering as-is cash offers with no repairs, no closing costs, and closes in as little as 7 days; led by Joe LeBlanc.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1520 Stillwater Dr",
      addressLocality: "Tuscaloosa",
      addressRegion: "AL",
      postalCode: "35406",
      addressCountry: "US",
    },
    foundingDate: "2026",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe LeBlanc",
    jobTitle: "Founder, Owner, and CEO",
    description:
      "Joe LeBlanc is the Founder, Owner, and CEO of We Buy Tuscaloosa Homes (Tuscaloosa Cash Home Buyers LLC). He personally handles every transaction and is known for honesty and patience in helping sellers navigate stressful situations.",
    url: "https://webuytuscaloosahomes.com/about",
    worksFor: { "@type": "Organization", name: "We Buy Tuscaloosa Homes" },
  },
] as const;
