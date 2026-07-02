import { getSituationImage } from "./situationImages";

export const homeWorthPageStats = [
  { value: "$271", unit: "K", label: "Median Tuscaloosa sale price (2026)" },
  { value: "~33", unit: "days", label: "Avg. days to pending (listed homes)" },
  { value: "24", unit: "hrs", label: "Joe's written offer turnaround" },
  { value: "5.0", unit: "★", label: "103+ Google reviews" },
] as const;

export const homeWorthFaqs = [
  {
    id: "how-find-worth",
    question: "How do I find out what my home is worth in Tuscaloosa, AL?",
    answer:
      "You can find out what your Tuscaloosa home is worth by requesting a free, written cash offer from We Buy Tuscaloosa Homes. Joe reviews recent local sales, your home's condition, and current market trends, then delivers a no-obligation written figure within 48 hours of a quick walkthrough — no repairs or cleaning needed. You can also use the estimator at the top of this page for a ballpark range.",
  },
  {
    id: "factors",
    question: "What factors affect my home value in Tuscaloosa?",
    answer:
      "Home value in Tuscaloosa is shaped by location and neighborhood, property size and layout, current condition and needed repairs, recent comparable sales in your area, and how quickly you need to sell. Homes near the University of Alabama, north of the river, or in updated condition typically command higher prices than dated or damaged properties in more rural corridors.",
  },
  {
    id: "appraisal-needed",
    question: "Do I need an appraisal before selling my house in Tuscaloosa?",
    answer:
      "No. If you're selling to a cash buyer like We Buy Tuscaloosa Homes, no appraisal is required. Cash buyers don't use lender financing, so there's no bank-ordered appraisal. Joe reviews comparable sales and property condition directly to arrive at your offer — faster, simpler, and with no cost to you.",
  },
  {
    id: "how-fast-cash",
    question: "How fast can I sell my house for cash in Tuscaloosa?",
    answer:
      "Once you accept a cash offer from We Buy Tuscaloosa Homes, you can close in as little as 7 days. The timeline depends on how quickly title work clears and the closing date you choose. Longer timelines — 30, 45, or 60 days — are also available if you need time to arrange your move.",
  },
  {
    id: "sell-as-is",
    question: "Can I sell my Tuscaloosa house as-is if it needs repairs?",
    answer:
      "Yes. We Buy Tuscaloosa Homes purchases houses as-is in any condition — fire damage, mold, foundation issues, outdated systems, heavy clutter, or years of deferred maintenance. You do not need to make repairs, clean, or stage anything before selling.",
  },
  {
    id: "fees-commissions",
    question: "Are there any fees or commissions when I accept a cash offer?",
    answer:
      "No. We charge zero agent commissions and zero buyer fees. Joe covers standard closing costs on every transaction. The offer you accept is the amount deposited at closing, minus any existing mortgage balance or liens paid through the title company.",
  },
  {
    id: "negotiable",
    question: "Is your cash offer for my Tuscaloosa home negotiable?",
    answer:
      "Our offers are based on transparent math — after-repair value, repair costs, holding costs, and a reasonable margin — but terms can sometimes be adjusted. Joe explains every line of the offer so you can evaluate it, ask questions, and decide without pressure. There is no expiration deadline forcing a hasty decision.",
  },
  {
    id: "service-area",
    question: "Do you only buy houses in Tuscaloosa, or nearby areas too?",
    answer:
      "We buy houses across Tuscaloosa and West Alabama — including Northport, Alberta City, Cottondale, Brookwood, Vance, Forest Lake, Woodland Forrest, Coaling, Gordo, Moundville, and surrounding communities. Call Joe at (803) 784-7672 to confirm your specific address is in our area.",
  },
  {
    id: "foreclosure",
    question: "What happens if I am facing foreclosure on my Tuscaloosa home?",
    answer:
      "A cash sale can close before a foreclosure sale date as long as there is sufficient time and equity. Contact Joe as early as possible — the more time available, the more options remain open. Your mortgage is paid off from proceeds at closing, stopping the foreclosure process.",
  },
  {
    id: "inherited",
    question:
      "Can I sell an inherited house in Tuscaloosa without clearing everything out?",
    answer:
      "Yes. We Buy Tuscaloosa Homes regularly purchases inherited and estate properties as-is. You can leave furniture, belongings, and anything you don't want — we handle everything after closing. We work directly with personal representatives, executors, and estate attorneys.",
  },
  {
    id: "cash-vs-agent",
    question:
      "How is working with a Tuscaloosa cash home buyer different from using an agent?",
    answer:
      "A cash buyer purchases your home directly — no showings, no repairs, no commissions, and no lender delays. With an agent, you'd typically repair and stage the home, host multiple showings, wait on buyer financing, and pay commissions. A cash sale trades some price for speed, certainty, and simplicity. Joe encourages you to compare both options before deciding.",
  },
  {
    id: "market-timing",
    question:
      "Does the current Tuscaloosa housing market make this a good time to sell?",
    answer:
      "In 2026, Tuscaloosa's median sale price is around $271,050 and updated homes typically go pending in about 33 days. If your home is move-in ready, the market supports a traditional listing. If it needs repairs or you have a deadline, a cash buyer can often deliver a cleaner outcome — faster and without the risk of a financed buyer backing out.",
  },
] as const;

export const valuationMethods = [
  {
    title: "Online estimates (Zillow, Redfin)",
    pros: "Instant, free, good starting point",
    cons: "Often inaccurate for as-is or unique homes; doesn't reflect your timeline",
  },
  {
    title: "Realtor comparative market analysis (CMA)",
    pros: "Uses local comps; accounts for condition with an agent visit",
    cons: "Geared toward listing price; doesn't include commission and carrying costs",
  },
  {
    title: "Paid appraisal",
    pros: "Formal valuation for lenders or legal purposes",
    cons: "Costs $400–$600+; reflects retail value, not fast as-is cash sale",
  },
  {
    title: "Joe's written cash offer",
    pros: "Free, local, as-is; shows net proceeds with no fees; close in 7+ days",
    cons: "Cash offers are typically below top retail list price — trade speed and certainty for price",
  },
] as const;

export const homeWorthCtaBand = {
  title: "Want to know what your Tuscaloosa home is really worth?",
  subtitle:
    "Skip the guesswork. Joe will walk through your property and send a written cash offer within 24 hours — free, no obligation.",
  primaryLabel: "Get My Free Home Value Estimate",
  secondaryLabel: "Call Joe — (803) 784-7672",
} as const;

export const homeWorthValueRangeColumns = [
  { key: "label", header: "Condition" },
  { key: "mls", header: "Typical MLS Sale Range" },
  { key: "cash", header: "Typical Cash Offer Range", highlight: true },
  { key: "path", header: "Best Path" },
] as const;

export const homeWorthValueRangeRows = [
  {
    label: "Updated / move-in ready",
    values: {
      mls: { text: "$240,000 – $320,000+" },
      cash: { text: "$195,000 – $265,000" },
      path: { text: "Realtor (if time allows)" },
    },
  },
  {
    label: "Good — minor cosmetic work",
    values: {
      mls: { text: "$200,000 – $270,000" },
      cash: { text: "$160,000 – $220,000" },
      path: { text: "Either path" },
    },
  },
  {
    label: "Average — some repairs needed",
    values: {
      mls: { text: "$155,000 – $220,000" },
      cash: { text: "$130,000 – $185,000", emphasize: true },
      path: { text: "Cash often cleaner" },
    },
  },
  {
    label: "Needs significant repairs",
    values: {
      mls: { text: "$90,000 – $160,000 (if it sells)" },
      cash: { text: "$85,000 – $140,000", emphasize: true },
      path: { text: "Cash usually better" },
    },
  },
  {
    label: "Major damage / distressed",
    values: {
      mls: { text: "Very limited buyer pool" },
      cash: { text: "Assessed individually", emphasize: true },
      path: { text: "Cash is often the only path" },
    },
  },
] as const;

export const homeWorthValueRangeFootnote =
  "Ranges are illustrative, not appraisals. Actual values vary by specific location, size, lot, and current comparable sales. Source: ACRE Tuscaloosa area reports, 2025–2026.";

export const homeWorthValueRangeCta = {
  title: "Find out exactly where your home falls",
  description:
    "Joe uses actual Tuscaloosa comps — not a national algorithm — to calculate your real number.",
  primaryLabel: "Get My Written Cash Offer →",
  primaryHref: "#contact",
  secondaryLabel: "Call Joe Directly",
  secondaryHref: "tel:8037847672",
} as const;

export const homeWorthHousingMarketStats = [
  {
    value: "$271,050",
    label: "Median Tuscaloosa sale price, 2025–2026",
  },
  {
    value: "~33 days",
    label: "Typical days to go pending on MLS",
  },
  {
    value: "7–21 days",
    label: "Typical close with a local cash buyer",
  },
  {
    value: "5–6%",
    label: "Typical agent commission in Alabama",
  },
] as const;

export const homeWorthHousingMarketColumns = [
  "Tuscaloosa's housing market is generally balanced in 2026. Updated, well-priced homes near the University of Alabama, the medical corridor, or in Northport often sell near asking price in about a month. That's a solid environment for sellers with market-ready homes who can wait.",
  "For sellers with properties that need work, or those facing foreclosure, divorce timelines, inherited estates, or relocation deadlines — the 33-day average doesn't help when you can't afford to fund repairs and wait for a financed buyer whose loan might fall through. A cash offer removes all of those variables.",
] as const;

export const homeWorthProcessSteps = [
  {
    num: 1,
    tag: "Day 0 — 5 minutes",
    title: "Tell Joe About Your Property",
    description:
      "Call (803) 784-7672 or fill out the short form. Share your address, basic condition, and your ideal timeline. No paperwork required upfront.",
  },
  {
    num: 2,
    tag: "Day 1–3 — No prep needed",
    title: "Quick Walkthrough",
    description:
      "Joe visits the property — no cleaning or repairs needed. He assesses as-is condition to build an accurate, fair offer. Usually 20–30 minutes.",
  },
  {
    num: 3,
    tag: "Within 48 hours",
    title: "Receive Written Cash Offer",
    description:
      "Joe delivers a written offer with a full breakdown — ARV, repair costs, his margin. You see every line. No pressure to accept.",
  },
  {
    num: 4,
    tag: "As fast as 7 days",
    title: "Choose Your Closing Date",
    description:
      "Pick the date — fast or flexible. Joe handles all paperwork through a licensed Alabama title company and covers standard closing costs.",
  },
] as const;

export const homeWorthProcessFootnote =
  "Getting a cash offer costs nothing and obligates you to nothing. Joe encourages you to compare it with a realtor's estimate before deciding.";

export const homeWorthWhoJoeHelpsSituations = [
  {
    id: "sell-as-is",
    title: "Can't afford repairs",
    description:
      "If your home needs a new roof, HVAC, foundation work, or anything else you can't fund upfront, Joe buys as-is and handles everything after closing. You don't take on debt or live through a renovation to sell.",
    image: getSituationImage("sell-as-is"),
  },
  {
    id: "foreclosure",
    title: "Facing foreclosure",
    description:
      "A cash sale can close before the foreclosure date, paying off your mortgage and stopping the process. Call as early as possible — the more time available, the more options remain open.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "inherited-probate",
    title: "Inherited property",
    description:
      "We regularly purchase estate and probate properties as-is. Leave what you don't want behind — we handle clean-out after closing. Joe works directly with personal representatives and estate attorneys.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "tired-landlord",
    title: "Tired landlord",
    description:
      "Student rentals near campus, long-term tenant wear, or an exit you've been putting off — we buy tenant-occupied properties without requiring vacancy first. You hand over the keys at closing.",
    image: getSituationImage("tired-landlord"),
  },
  {
    id: "divorce",
    title: "Divorce or life change",
    description:
      "When both parties need a clean financial break and a firm close date, a cash sale removes the uncertainty of a financed buyer falling through. Joe works with both sides respectfully and aligns to your legal timeline.",
    image: getSituationImage("divorce"),
  },
  {
    id: "relocating",
    title: "Relocating quickly",
    description:
      "When a job or life change puts you on a tight move schedule, waiting 60–90 days on the market isn't an option. Joe closes on your date and can coordinate everything remotely if needed.",
    image: getSituationImage("relocating"),
  },
] as const;

export const homeWorthWhoJoeHelpsContent = {
  eyebrow: "Who We Help",
  description:
    "We buy houses across Tuscaloosa in every situation — here are the sellers we work with most often.",
  footerText:
    "Don't see your situation listed? Call Joe anyway — if a cash sale makes sense, he'll tell you. If it doesn't, he'll say that too.",
} as const;

export const homeWorthTestimonialSlides = [
  {
    kind: "video" as const,
    quote:
      "I was referred to Joe and his team by a mutual friend, and I was really floored by the amazing help and care that I received from them. Within 30 minutes they had the situation handled. I can't tell you enough about them. When you know things are right, you feel it.",
    signature: "Ms. Juanita",
    meta: "Tuscaloosa homeowner",
    youtubeId: "Ee1N4-K1rFQ",
  },
  {
    kind: "text" as const,
    quote:
      "We had no idea what our inherited house was actually worth until Joe walked through it. He showed us the comps, explained the repair costs, and gave us a written number we could trust — not a Zestimate that didn't account for anything.",
    signature: "Marcus T.",
    meta: "Tuscaloosa, AL · Inherited property",
    initial: "M",
  },
  {
    kind: "text" as const,
    quote:
      "Joe's offer wasn't the highest number we'd heard — but it was the only one that showed us the math. Once we factored in commissions and repairs, his cash offer was actually the best net outcome for us.",
    signature: "Linda K.",
    meta: "Northport, AL · Needed to sell as-is",
    initial: "L",
  },
  {
    kind: "text" as const,
    quote:
      "I called three places for a value estimate. Joe was the only one who came out, looked at the actual condition, and put it in writing within 48 hours. No pressure, no games — just a real number I could plan around.",
    signature: "Sandra & Ray M.",
    meta: "Tuscaloosa, AL · Relocating for work",
    initial: "S",
  },
] as const;

export const homeWorthTestimonialsContent = {
  eyebrow: "Social Proof",
  heading: "What Tuscaloosa homeowners say about getting a cash offer from Joe",
  description:
    "5.0 out of 5.0 average rating from 103+ verified Google reviews. Here's what sellers say after seeing their real home value and closing on Joe's timeline.",
} as const;

export const homeWorthPricingRows = [
  {
    id: "arv",
    operator: "ARV",
    operatorVariant: "arv" as const,
    title: "After-Repair Value (ARV)",
    description:
      "What your Tuscaloosa home would sell for fully repaired and updated — based on real recent comparable sales in your neighborhood, not an online estimate.",
  },
  {
    id: "repairs",
    operator: "−",
    operatorVariant: "minus" as const,
    title: "Repair Costs",
    description:
      "The realistic cost to bring your property to market-ready condition — roof, HVAC, foundation, flooring, paint, or anything Joe identifies during the walkthrough.",
  },
  {
    id: "holding",
    operator: "−",
    operatorVariant: "minus" as const,
    title: "Holding & Selling Costs",
    description:
      "Property taxes, insurance, utilities, and selling costs Joe carries while he owns and repairs the home — approximately 10% of ARV.",
  },
  {
    id: "margin",
    operator: "−",
    operatorVariant: "minus" as const,
    title: "Reasonable Profit Margin",
    description:
      "Disclosed upfront — approximately 10%. Without a margin Joe can't operate, but it's always transparent and explained on every offer.",
  },
  {
    id: "offer",
    operator: "=",
    operatorVariant: "equals" as const,
    title: "Your Cash Offer",
    description:
      "The number in the written offer is the number deposited at closing. No surprise deductions, no commissions, and Joe covers standard closing costs.",
  },
] as const;

export const homeWorthPricingFormula = {
  lines: [
    "After-Repair Value (ARV)",
    "− Repair Costs",
    "− Holding & Selling Costs (~10%)",
    "− Profit Margin (~10%)",
  ],
  result: "Your Cash Offer",
  note: "Joe walks through every line before you decide anything. No pressure, no obligation, no upfront fees — just a real number you can compare with any other option.",
  ctaLabel: "Get My Written Offer →",
} as const;

export const homeWorthPricingIncludes = [
  "0% commission — you're selling directly, not through an agent",
  "Standard closing costs paid by Joe, not you",
  "No fees to receive or review an offer",
  "Written breakdown so you see every line before committing",
] as const;

export const homeWorthPropertyTypes = [
  {
    id: "single-family",
    title: "Single-Family Homes",
    description:
      "Owner-occupied, vacant, or inherited — any condition, any age. The most common property we buy across Tuscaloosa.",
    icon: "home" as const,
  },
  {
    id: "rental-student",
    title: "Rental & Student Properties",
    description:
      "Tenant-occupied or vacant rentals near the University of Alabama and across the city. No vacancy required before closing.",
    icon: "rental" as const,
  },
  {
    id: "multifamily",
    title: "Small Multifamily (2–4 units)",
    description:
      "Duplexes, triplexes, and small apartment buildings — with or without current tenants.",
    icon: "multifamily" as const,
  },
  {
    id: "damage",
    title: "Fire, Water & Storm Damage",
    description:
      "Properties with major structural or safety issues that don't qualify for conventional financing. We buy as-is.",
    icon: "damage" as const,
  },
  {
    id: "inherited-estate",
    title: "Inherited & Estate Properties",
    description:
      "We work with personal representatives, executors, and estate attorneys. No cleanout required — leave anything you don't want.",
    icon: "estate" as const,
  },
  {
    id: "vacant-code",
    title: "Vacant & Code-Violated Properties",
    description:
      "Vacant homes accumulating code violations, delinquent taxes, or complaints. A cash sale ends the carrying costs cleanly.",
    icon: "vacant" as const,
  },
] as const;

export const homeWorthWhatWeBuyContent = {
  eyebrow: "What We Buy",
  description:
    "We buy residential properties across Tuscaloosa and West Alabama in any condition and situation.",
  footerText:
    "Not sure if your property qualifies? Call Joe — he'll tell you quickly and honestly.",
  ctaLabel: "Get My Free Home Value Estimate →",
} as const;

export const homeWorthMeetTheBuyerContent = {
  eyebrow: "Meet the Buyer",
  heading: "Meet We Buy Tuscaloosa Homes — and the founder behind your offer",
  name: "Joe LeBlanc",
  roleLabel: "Founder & CEO",
  imageSrc: "/assets/joe.png",
  imageAlt: "Joe LeBlanc, founder of We Buy Tuscaloosa Homes",
  paragraphs: [
    "Joe LeBlanc is the Founder and CEO of We Buy Tuscaloosa Homes — a local, founder-led cash home buying company serving Tuscaloosa and West Alabama. Joe is personally involved in every transaction, from the first call through closing. You speak directly with the decision-maker, not a call center or national franchise representative.",
    "A graduate of the University of South Carolina with over a decade of business and real estate experience, Joe's approach is straightforward: explain the numbers in plain language, give you time to compare your options, and never pressure anyone into a decision that isn't right for them. He'll tell you honestly if a realtor listing is the better path for your specific property.",
    "We Buy Tuscaloosa Homes operates under the High Noon Home Buyers family of brands, which has helped scores of homeowners across Alabama sell houses as-is for cash.",
  ],
  credentials: [
    "University of South Carolina Graduate",
    "10+ Years Real Estate Experience",
    "5.0 ★ · 103+ Reviews",
  ],
} as const;
