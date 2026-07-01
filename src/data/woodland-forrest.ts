import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";
import type { PricingFormulaRow } from "@/components/home-worth/PricingFormula";
import { getSituationImage } from "./situationImages";

export const woodlandForrestHeroBenefits = [
  "Local cash home buyers in Tuscaloosa — not a national call center",
  "Sell your house as-is in Tuscaloosa — no repairs, no showings, no inspections to pass",
  "No agent commissions, no hidden fees, and typical closing costs covered for you",
  "You choose the date; we work with a local title company so closing feels simple and safe",
] as const;

export const woodlandForrestHeroStats = [
  { value: "$0", unit: "", label: "Commissions or Hidden Fees" },
  { value: "As-Is", unit: "", label: "Any Condition, No Repairs" },
  { value: "You Choose", unit: "", label: "Your Closing Date" },
  {
    value: "Local",
    unit: "",
    label: "Tuscaloosa Owner, Not a Franchise",
  },
] as const;

export const woodlandForrestCashProsItems = [
  "You skip repairs and showings. In Woodland Forrest, many homes are older and need updates. When you list, you may be asked to fix roofs, HVAC, or dated kitchens and then keep the house spotless for showings. With We Buy Tuscaloosa Homes, you sell house as-is in Tuscaloosa — no repair bids, no inspections to pass, and no strangers walking through your home.",
  "You get a clear, predictable timeline. A quick house sale Tuscaloosa through the MLS can still take weeks or months and fall through if financing fails. With a local cash buyer, you avoid lender delays and choose a closing date that fits around a foreclosure date, job start, or probate timeline.",
  "You avoid agent commissions and many selling costs. When you list, commissions and closing costs come out of your sale price. When you sell directly to us, there are no agent commissions or hidden fees, and typical closing costs are handled through the title company, so your net is easier to compare.",
  "You keep control and options. A cash offer doesn't mean you have to say yes. We encourage Woodland Forrest owners to compare net proceeds from listing vs cash — using our comparison section and calculator — so you can decide what truly serves your situation.",
] as const;

export const woodlandForrestListingConsItems = [
  "Repairs and staging required",
  "Agent commissions plus closing costs",
  "Buyer sets closing date",
  "Multiple showings and open houses",
  "Deals can fall through on financing or appraisal",
] as const;

export const woodlandForrestComparisonColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  {
    key: "cash",
    header: "Sell to We Buy Tuscaloosa Homes",
    highlight: true,
  },
  { key: "list", header: "List With Agent in Tuscaloosa" },
  { key: "nothing", header: "Do Nothing / Wait" },
];

export const woodlandForrestComparisonRows: ComparisonRowData[] = [
  {
    label: "Timeline",
    values: {
      cash: {
        text: "Often closes in a short, agreed timeframe with no lender delays",
        positive: true,
      },
      list: {
        text: "Days on market plus buyer financing can stretch to months",
      },
      nothing: {
        text: "No sale; risk of issues getting worse over time",
        negative: true,
      },
    },
  },
  {
    label: "Repairs",
    values: {
      cash: {
        text: "Sell house as-is; we handle repairs after closing",
        positive: true,
      },
      list: {
        text: "Buyers may demand repairs or credits; loan conditions may require fixes",
      },
      nothing: {
        text: "Repairs pile up and can become more expensive later",
        negative: true,
      },
    },
  },
  {
    label: "Showings",
    values: {
      cash: { text: "One brief visit with our team only", positive: true },
      list: {
        text: "Multiple showings, open houses, and last-minute appointments",
      },
      nothing: { text: "None, but also no progress toward selling" },
    },
  },
  {
    label: "Fees & Commissions",
    values: {
      cash: {
        text: "No agent commissions or hidden fees; closing costs through title company",
        positive: true,
      },
      list: {
        text: "Agent commissions and typical seller closing costs deducted from sale price",
      },
      nothing: {
        text: "No fees now, but taxes, insurance, and maintenance continue",
        negative: true,
      },
    },
  },
  {
    label: "Certainty",
    values: {
      cash: {
        text: "High once you accept written offer; fewer ways for deal to fall through",
        positive: true,
      },
      list: {
        text: "Offers can fall apart over financing, appraisals, and inspection negotiations",
      },
      nothing: { text: "Ongoing uncertainty about when or if you'll sell" },
    },
  },
  {
    label: "Who's Buying",
    values: {
      cash: {
        text: "Local cash home buyer focused on quick, as-is purchase",
        positive: true,
      },
      list: { text: "Retail buyers who expect move-in-ready condition" },
      nothing: { text: "No buyer in place" },
    },
  },
];

export const woodlandForrestSituations = [
  {
    id: "foreclosure",
    title: "Facing Foreclosure or Behind on Payments",
    description:
      "If you need to stop foreclosure Tuscaloosa or are a few payments behind, listing may take longer than you have. A cash sale can help you avoid a foreclosure on your record and close before a scheduled sale date.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "inherited-probate",
    title: "Inherited a Woodland Forrest House",
    description:
      "Maybe you inherited a parent's Woodland Forrest home that needs updates, clean-out, and probate paperwork. Instead of sinking money into a property you don't want to keep, you can sell house without repairs in Woodland Forrest and let us handle the clean-out after closing.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "divorce",
    title: "Going Through Divorce",
    description:
      "Divorce often means needing a fair, quick solution both sides can agree on. A cash offer in Tuscaloosa gives you a simple number to split without months of showings and negotiations.",
    image: getSituationImage("divorce"),
  },
  {
    id: "tired-landlord",
    title: "Tired Landlord or Problem Tenants",
    description:
      "If you're a tired landlord Tuscaloosa with late payments, damages, or lease headaches, you can sell a tenant-occupied property directly to us. We review the leases and take over the problem so you can move on.",
    image: getSituationImage("tired-landlord"),
  },
  {
    id: "major-repairs",
    title: "Major Repairs or Storm Damage",
    description:
      "Some Woodland Forrest houses need roof replacements, foundation work, or full updates to compete on the MLS. Rather than borrowing or saving for big repairs, you can sell as-is and let us take on the project.",
    image: getSituationImage("major-repairs"),
  },
  {
    id: "relocating",
    title: "Relocating on a Deadline",
    description:
      "New job, new school district, or moving closer to family — sometimes you just need a quick house sale Tuscaloosa so you can focus on what's next instead of juggling showings from out of town.",
    image: getSituationImage("relocating"),
  },
] as const;

export const woodlandForrestProcessSteps = [
  {
    num: 1,
    title: "Tell Us About the Property",
    description:
      "Call (803) 784-7672 or fill out the short form with your Woodland Forrest address, basic condition, and timeline. We confirm that your home is in our service area and answer any initial questions about a quick house sale Tuscaloosa.",
  },
  {
    num: 2,
    title: "We Schedule a Local Walk-Through",
    description:
      "Joe or a team member meets you at the house (or does a virtual walk-through if needed). Because we focus on Woodland Forrest and nearby Tuscaloosa neighborhoods, we already understand typical home styles, age, and repair patterns in your streets.",
  },
  {
    num: 3,
    title: "You Receive a Written Cash Offer",
    description:
      "After the visit, we review recent Tuscaloosa sales, estimated repairs, and selling costs, then present a clear, written as-is offer. There are no agent commissions or hidden fees, and we're happy to walk you line-by-line through how we arrived at the number.",
  },
  {
    num: 4,
    title: "You Choose the Closing Date",
    description:
      "If you accept, we work with a trusted local title company to handle paperwork and schedule closing on the day that works for you — whether that's as soon as reasonably possible or a few weeks out so you have time to move. You're free to ask questions or decide not to move forward at any point before signing.",
  },
] as const;

export const woodlandForrestDetailedProcessSteps = [
  {
    num: 1,
    title: "Initial Conversation",
    description:
      "You call, text, or submit your information online. Joe asks a few basic questions about your Woodland Forrest property, listens to what's driving your move, and explains how a local cash sale works. You can have a friend or family member on the call if that helps you feel more comfortable.",
  },
  {
    num: 2,
    title: "Property Visit",
    description:
      "We schedule a time to see the house in person (or virtually). You're welcome to have someone with you, and there's no need to clean or hide problems. We're simply there to understand condition, not to judge.",
  },
  {
    num: 3,
    title: "Offer Review",
    description:
      "After the visit, Joe prepares a written cash offer and walks you through it in plain language. You can ask as many questions as you like, compare it to other options, or take time to think it over. You're not locked into anything until you sign.",
  },
] as const;

export const woodlandForrestWhatToExpectSteps =
  woodlandForrestDetailedProcessSteps.map((step) => ({
    num: String(step.num).padStart(2, "0"),
    title: step.title,
    description: step.description,
  }));

export const woodlandForrestWhatToExpectFootnote =
  "Throughout the process, you can pause to ask questions, involve trusted family members, and make sure each step lines up with your goals.";

export const woodlandForrestTestimonialSlides = [
  {
    kind: "text" as const,
    quote:
      "I was nervous about calling a cash home buyer in Tuscaloosa, but Joe walked me through every step and never pushed. My Woodland Forrest house needed a lot of repairs, and being able to sell as-is and close on my schedule was a huge relief.",
    signature: "Woodland Forrest homeowner, sold as-is",
    meta: "Woodland Forrest, Tuscaloosa",
    initial: "W",
  },
  {
    kind: "text" as const,
    quote:
      "We were juggling work, kids, and a move out of state. Listing and keeping the house show-ready wasn't realistic. Joe gave us a clear number, explained how he got there, and the quick house sale in Tuscaloosa let us focus on the new job instead of constant showings.",
    signature: "Tuscaloosa homeowner, relocation sale",
    meta: "Tuscaloosa, AL",
    initial: "T",
  },
  {
    kind: "text" as const,
    quote:
      "Our rental in East Tuscaloosa had become a headache with late payments and damage. Selling directly to We Buy Tuscaloosa Homes meant no repairs, no commissions, and no awkward tenant conversations — we just showed the property once and closed.",
    signature: "Tired landlord, East Tuscaloosa",
    meta: "East Tuscaloosa, AL",
    initial: "E",
  },
  {
    kind: "text" as const,
    quote:
      "I inherited my parents' Woodland Forrest home and felt overwhelmed by clean-out and updates. Joe met me at the house, listened to the story behind it, and made a cash offer that made sense without me putting in a dollar of work. The whole thing felt respectful and fair.",
    signature: "Woodland Forrest inherited property",
    meta: "Woodland Forrest, Tuscaloosa",
    initial: "I",
  },
] as const;

export const woodlandForrestMarketParagraphs = [
  "In 2026, the broader Tuscaloosa housing market is steady, but not every Woodland Forrest house sells quickly on the open market, especially if it needs updates or repairs.",
  "Move-in-ready homes often sell faster and closer to full market value.",
  "Homes needing significant repairs, clean-out, or updates may sit longer and attract lower offers.",
  "A cash buyer can be a practical option if you're short on time, cash for repairs, or patience for showings and negotiations.",
  "A cash sale isn't right for everyone in Woodland Forrest, but it can be the least stressful choice if you're up against a deadline, low on repair funds, or just ready to move on without more projects.",
] as const;

export const woodlandForrestPricingRows: PricingFormulaRow[] = [
  {
    id: "arv",
    operator: "ARV",
    operatorVariant: "arv",
    title: "After-Repair Value",
    description:
      "What it would sell for fixed up — we look at what similar updated homes in Woodland Forrest and nearby Tuscaloosa neighborhoods are selling for once they're fixed up.",
  },
  {
    id: "repairs",
    operator: "−",
    operatorVariant: "minus",
    title: "Repairs & Updates",
    description:
      "We estimate what it would realistically cost to bring your house up to that level — roof, HVAC, flooring, paint, clean-out, and anything else a typical buyer would expect.",
  },
  {
    id: "holding",
    operator: "−",
    operatorVariant: "minus",
    title: "Selling & Holding Costs",
    description:
      "We factor in things like taxes, insurance, utilities while we own the home, plus closing costs and any resale expenses.",
  },
  {
    id: "margin",
    operator: "−",
    operatorVariant: "minus",
    title: "Reasonable Profit",
    description:
      "Finally, we include a fair profit margin so it makes sense for us to take on the project and risk.",
  },
  {
    id: "offer",
    operator: "=",
    operatorVariant: "equals",
    title: "Your Cash Offer",
    description:
      "Your as-is amount — we encourage you to ask exactly how we arrived at your number and to compare it to listing. Our job is to make the math clear so you can decide what feels fair.",
  },
];

export const woodlandForrestPricingFormulaSteps =
  woodlandForrestPricingRows.map(
    ({ id, operator, operatorVariant, title, description }) => ({
      id,
      operator,
      operatorVariant,
      title,
      description,
    }),
  );

export const woodlandForrestMeetJoeParagraphs = [
  "I'm Joe LeBlanc, a local Tuscaloosa home buyer, and my team focuses on helping Woodland Forrest homeowners sell quickly and safely.",
  "We Buy Tuscaloosa Homes is a locally owned, founder-led company — not a national franchise. I live and work in the Tuscaloosa area, and I'm personally involved in every deal, from the first conversation to closing at the title company. When you call, you're talking to the person who will actually see your Woodland Forrest house and help you weigh your options.",
  "As local cash home buyers in Tuscaloosa, our reputation matters. We want every homeowner — even those who choose a different route — to feel they were treated with honesty and respect.",
] as const;

export const woodlandForrestMeetJoeCredentials = [
  "Use a neutral local title company to handle all funds and paperwork",
  "Provide a clear, written contract with plain-language terms",
  "Never ask you to pay upfront fees or sign anything you don't understand",
  "Encourage you to read the contract, ask questions, and compare our offer",
] as const;

export const woodlandForrestFaqs = [
  {
    id: "how-fast",
    question:
      "How fast can I sell my house in Woodland Forrest, Tuscaloosa for cash?",
    answer:
      "You can usually sell in a short timeframe, and you choose the closing date. As a local cash home buyer in Woodland Forrest, Tuscaloosa, we skip listings, showings, and lender delays, so the process stays simple. Once you accept a written offer, we work with a local title company to schedule closing on the day that works best for you, whether that is soon or a bit later.",
  },
  {
    id: "repairs",
    question:
      "Do I need to make repairs or clean out my Woodland Forrest house before you buy it?",
    answer:
      "No. You do not need to make repairs or clean out the house before we buy it. As a local cash home buyer in Tuscaloosa, we purchase Woodland Forrest homes as-is, whether they have outdated kitchens, roof issues, or years of clutter. You can leave behind items you do not want, and we handle clean-out and repairs after closing, so you can focus on your next move instead of projects.",
  },
  {
    id: "fees",
    question:
      "Are there any fees or commissions when I sell my Woodland Forrest house to you?",
    answer:
      "No. You do not pay real estate commissions or hidden fees when you sell directly to a local cash home buyer. The price we agree on for your Woodland Forrest house is the amount you should expect at closing, minus any existing mortgage or liens. We do not charge a separate listing fee, and typical selling costs are handled through the local title company, so your net is simple to understand.",
  },
  {
    id: "offer-math",
    question:
      "How do you decide what cash offer to make on my Woodland Forrest house?",
    answer:
      "We base your cash offer on local Tuscaloosa sales, needed repairs, costs, and a reasonable profit. As a local cash home buyer, we look at recent Woodland Forrest and Tuscaloosa comparables, estimate repairs and selling expenses, then back those out from the after-repair value. The result is your as-is offer. You are encouraged to ask how we arrived at the number so every part feels clear.",
  },
  {
    id: "legitimate",
    question:
      "How do I know your cash offer for my house is legitimate and not a scam?",
    answer:
      "You can confirm a cash offer is legitimate by checking proof of funds, the contract, and how the closing is handled. A local cash home buyer should provide real proof of funds, use a neutral Tuscaloosa title company, and give you a written agreement without upfront fees or confusing clauses. You can also look at local reviews and ask any questions before signing so you feel comfortable.",
  },
  {
    id: "list-instead",
    question:
      "Will I get more money if I fix up my Woodland Forrest house and list with an agent instead?",
    answer:
      "Sometimes you may walk away with more by fixing the house and listing, and sometimes you will not. In Woodland Forrest, updated homes in strong demand segments can sell higher on the open market, but you must pay for repairs, agent commissions, and extra holding costs. A local cash home buyer offers a simpler, as-is option. Comparing your potential net from each route is the fairest way to decide.",
  },
  {
    id: "foreclosure",
    question:
      "Can you still buy my Woodland Forrest house if I'm behind on payments or facing foreclosure?",
    answer:
      "Yes. A local cash home buyer can often purchase a Woodland Forrest house even if you are behind on payments or facing foreclosure. Timing is important, so we review your loan status, any scheduled sale dates, and your goals, then see if a quick cash sale fits. We work with a local title company, and you should also talk with legal or financial professionals about your options.",
  },
  {
    id: "tenants",
    question:
      "Can I sell my Woodland Forrest rental to you if there are tenants living in it?",
    answer:
      "Yes. You can usually sell a tenant-occupied Woodland Forrest property to a local cash home buyer. We routinely look at rentals in Tuscaloosa and review the current lease, rent amount, and situation with your tenants. You do not have to evict anyone before talking with us. We can discuss options that respect the lease and help you move on from being a tired landlord if that is your goal.",
  },
  {
    id: "probate",
    question:
      "What happens if my Woodland Forrest house is inherited or still in probate?",
    answer:
      "You can often receive a cash offer on an inherited Woodland Forrest house even while probate is in progress. As a local cash home buyer in Tuscaloosa, we regularly talk with families and their attorneys to understand where things stand. In many cases, paperwork must be complete before closing, but we can discuss the property now, make an offer, and plan a timeline that lines up with the court process.",
  },
  {
    id: "obligation",
    question: "Am I obligated to accept your cash offer if I ask for one?",
    answer:
      "No. Requesting a cash offer does not obligate you to say yes. When you talk with a local cash home buyer in Tuscaloosa, you are free to review the offer, compare it to others, or decide not to sell at all. We expect you to think it over and ask questions. Our job is to explain your options clearly, not to pressure you into a decision that does not feel right.",
  },
  {
    id: "service-area",
    question: "Do you only buy in Woodland Forrest or all of Tuscaloosa?",
    answer:
      "We focus on Woodland Forrest but also buy houses across the broader Tuscaloosa area. Woodland Forrest is a key part of our service area, and as a local cash home buyer we regularly look at homes in nearby South and East Tuscaloosa and other surrounding pockets. If you are unsure whether your address qualifies, simply share your location and we will quickly let you know if we can make an offer.",
  },
] as const;

export const woodlandForrestPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: woodlandForrestFaqs.map((faq) => ({
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
      "Sell your Tuscaloosa, AL home fast for a fair cash offer, as-is, with no fees, no repairs, no closing costs. Close in 7 days or on your schedule.",
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
      name: "Woodland Forrest, Tuscaloosa",
    },
    serviceArea: { "@type": "GeoCircle", geoRadius: "50000" },
    foundingDate: "2026",
    sameAs: ["https://www.linkedin.com/company/we-buy-tuscaloosa-homes"],
    brand: "We Buy Tuscaloosa Homes",
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "From First Call to Closing Day in Woodland Forrest: What to Expect",
    description:
      "This four step process explains how you sell for cash in Woodland Forrest, Tuscaloosa.",
    step: woodlandForrestProcessSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe LeBlanc",
    jobTitle: "Founder, Owner, and CEO",
    description:
      "Joe LeBlanc is the Founder, Owner, and CEO of We Buy Tuscaloosa Homes; he personally handles every deal.",
    url: "https://webuytuscaloosahomes.com/about",
    worksFor: {
      "@type": "LocalBusiness",
      name: "We Buy Tuscaloosa Homes",
      url: "https://webuytuscaloosahomes.com",
    },
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
        name: "Woodland Forrest",
        item: "https://webuytuscaloosahomes.com/sell-my-house-fast-woodland-forrest-tuscaloosa",
      },
    ],
  },
];
