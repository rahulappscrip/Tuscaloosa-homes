export const howItWorksPageStats = [
  { value: "24", unit: "hrs", label: "Written offer turnaround" },
  { value: "7", unit: "days", label: "Fastest close time" },
  { value: "$0", unit: "", label: "Fees or commissions" },
  { value: "5.0", unit: "★", label: "103+ Google reviews" },
] as const;

export const howItWorksHeroSteps = [
  { num: 1, label: "Tell Joe About Your House" },
  { num: 2, label: "Get a Written Cash Offer" },
  { num: 3, label: "Choose Your Date & Get Paid" },
] as const;

export const processTimelineSteps = [
  {
    num: 1,
    timing: "Day 0 — Takes 5 minutes",
    title: "Tell Joe About Your Tuscaloosa House",
    paragraphs: [
      "Call or text Joe at (803) 784-7672, or fill out the short form with your property address and basic situation. You don't need paperwork, photos, or a prepared answer — just your address and a couple of details about what's going on.",
      "Joe or a team member follows up the same day, usually within a few hours, to ask a few quick questions about the property's condition, your timeline, and what outcome matters most to you.",
    ],
    details: [
      "No need to prepare documents or photos upfront",
      "No obligation to proceed after making contact",
      "Joe answers personally — not a call center",
      "Works for any situation: foreclosure, inherited, divorce, landlord exit, repairs needed",
    ],
    callout: null,
  },
  {
    num: 2,
    timing: "Day 1–3 — No cleaning required",
    title: "Quick Walkthrough & Written Cash Offer",
    paragraphs: [
      "Joe schedules a quick visit to see the house — typically 20–30 minutes. You don't need to clean, repair, or stage anything before he arrives. He's seen every condition: fire damage, mold, outdated kitchens, full of belongings, tenants still in place. None of it disqualifies the sale.",
      "After the walkthrough, Joe uses recent Tuscaloosa comparable sales and realistic repair cost estimates to build your offer. Within 24 hours of the visit, you receive a written cash offer with a full breakdown of how he arrived at the number.",
    ],
    details: [
      "One visit — no repeated showings or open houses",
      "Written offer, not a verbal number that changes later",
      "Joe explains every line: ARV, repair costs, his margin",
      "No pressure to accept — take time to compare with other options",
      "Offer is valid without expiration pressure",
    ],
    callout: {
      strong: "Virtual walkthroughs available.",
      text: " If you're out of state or managing an inherited property remotely, Joe can evaluate via photos, video call, or a virtual tour. You don't have to travel to Tuscaloosa to get a cash offer.",
    },
  },
  {
    num: 3,
    timing: "Day 3–7+ — You set the date",
    title: "Accept, Choose Your Closing Date, and Get Paid",
    paragraphs: [
      "If the offer works for you, Joe sends a simple purchase agreement for your review. Once signed, he opens title with a trusted local Alabama title company. The title company handles lien searches, deed preparation, and closing documents.",
      "You choose the closing date — as fast as 7 days if you need to move quickly, or 30, 45, or 60 days if you need time to arrange your next move. On closing day, you sign the final documents at the title company (or via a mobile notary if needed). Your existing mortgage and any liens are paid off from the proceeds, and you receive the remaining cash by wire or check.",
    ],
    details: [
      "You set the closing date — fast or flexible",
      "Licensed Alabama title company on every closing",
      "Joe pays standard closing costs — no deductions at the table",
      "Cash delivered by wire transfer or cashier's check",
      "Post-closing occupancy available if you need a few extra days to move",
    ],
    callout: {
      strong: "Post-closing occupancy.",
      text: " In many cases, if you need a few days or weeks after closing to finish moving, Joe can arrange a short-term post-closing occupancy agreement. This is discussed and documented before closing — no surprises.",
    },
  },
] as const;

export const ctaBands = [
  {
    title: "Ready to start? It takes about 5 minutes.",
    subtitle: "Written offer within 24 hours. No obligation, no pressure.",
    primaryLabel: "Get My Free Cash Offer →",
    secondaryLabel: "Call (803) 784-7672",
  },
  {
    title: "Not sure what your house would sell for in cash?",
    subtitle:
      "Get a written offer with a full breakdown — no pressure to accept.",
    primaryLabel: "Get My Free Cash Offer →",
    secondaryLabel: "Call Joe Directly",
  },
] as const;

export const isItRightContent = {
  goodTitle: "A cash sale likely makes sense if you...",
  goodItems: [
    "Need to close quickly — foreclosure date, court deadline, job relocation, or estate settlement",
    "Have a property that needs significant repairs you can't or don't want to fund",
    "Want to avoid showings, open houses, and months of uncertainty",
    "Are managing a tenant-occupied or inherited property from out of town",
    "Need a guaranteed close without the risk of a buyer's financing falling through",
    "Value simplicity and certainty more than squeezing the last dollar",
    "Are a tired landlord ready to exit the rental without eviction delays",
  ],
  considerTitle: "A traditional listing might be better if you...",
  considerItems: [
    "Have a fully updated, market-ready home in excellent condition",
    "Have 60–90 days of flexibility and no urgent deadline",
    "Can comfortably fund repairs and staging costs upfront",
    "Are in a high-demand Tuscaloosa neighborhood with multiple buyer offers likely",
    "Want to maximize the gross sale price above all other factors",
  ],
  considerNote:
    "If you're not sure which applies, Joe will give you an honest cash offer and encourage you to compare it with an agent's estimate. There's no cost to getting a number.",
} as const;

export const whereWeBuyAreas = [
  {
    header: "Central & University Area",
    areas: [
      { name: "Central Tuscaloosa", primary: true },
      { name: "The Strip & Campus area", primary: false },
      { name: "Forest Lake", primary: false },
      { name: "Elmwood Park", primary: false },
      { name: "Historic District", primary: false },
      { name: "Alberta City", primary: true },
      { name: "Indian Hills", primary: false },
    ],
  },
  {
    header: "South & East Tuscaloosa",
    areas: [
      { name: "Woodland Forrest", primary: true },
      { name: "Cottondale", primary: true },
      { name: "Skyland Boulevard Area", primary: false },
      { name: "Hillcrest", primary: false },
      { name: "Fairwold", primary: false },
      { name: "South Tuscaloosa", primary: false },
    ],
  },
  {
    header: "North of the River & Beyond",
    areas: [
      { name: "Northport", primary: true },
      { name: "Lake Tuscaloosa", primary: false },
      { name: "Brookwood", primary: true },
      { name: "Vance", primary: true },
      { name: "Coaling", primary: false },
      { name: "Gordo", primary: false },
      { name: "Moundville", primary: false },
    ],
  },
] as const;

export const howItWorksFaqs = [
  {
    id: "process",
    question:
      "How does your process work to sell my house fast for cash in Tuscaloosa?",
    answer:
      "You contact Joe, he visits the property for a quick walkthrough — no repairs or cleaning needed — then presents a clear written cash offer within 24 hours. If you accept, you choose the closing date. We handle paperwork with a licensed Alabama title company and you receive your cash at closing, often within 7 days of accepting the offer.",
  },
  {
    id: "how-fast",
    question: "How fast can I sell my house for cash in Tuscaloosa?",
    answer:
      "Once you accept our offer, we can close in as little as 7 days. The timeline depends on how quickly title work clears and the closing date you choose. We can also work with longer timelines — 30, 45, or 60 days — if you need time to move or coordinate with an estate.",
  },
  {
    id: "repairs",
    question: "Do I need to make repairs or clean before you buy my house?",
    answer:
      "No. We buy Tuscaloosa houses as-is in any condition — you don't need to repair, clean, stage, or remove anything. Leave what you don't want — furniture, belongings, debris, appliances. We handle everything after closing.",
  },
  {
    id: "fees",
    question:
      "Are there any fees or commissions when I sell to a cash home buyer?",
    answer:
      "None. We charge no agent commissions and no buyer fees. We cover standard closing costs. The offer you accept is the amount deposited at closing, minus any existing mortgage or lien payoffs handled through the title company.",
  },
  {
    id: "fair-price",
    question: "How do I know the cash offer on my Tuscaloosa house is fair?",
    answer:
      "Joe explains every line of the offer — the after-repair value based on real comparable sales, estimated repair costs, holding costs, and his profit margin. You can compare this against a traditional agent estimate and decide which trade-off makes more sense for your situation. There's no pressure to accept.",
  },
  {
    id: "foreclosure",
    question:
      "Can I sell my house fast in Tuscaloosa if I'm facing foreclosure?",
    answer:
      "Yes. A cash sale can close before a foreclosure sale date as long as there is enough time and sufficient equity to cover what's owed. Contact Joe as early as possible — the earlier we start, the more options remain available. Your mortgage is paid off from the proceeds at closing.",
  },
  {
    id: "tenants",
    question: "Will you buy my Tuscaloosa house if it has tenants?",
    answer:
      "Yes. We buy tenant-occupied properties and rentals without requiring vacancy first. We understand Tuscaloosa's rental market — including properties near the University of Alabama — and structure the transaction around the existing lease situation. You don't need to evict before selling.",
  },
  {
    id: "inherited",
    question: "Do you buy inherited houses or probate estates in Tuscaloosa?",
    answer:
      "Yes. We regularly purchase inherited and probate properties in Tuscaloosa. We work directly with personal representatives, executors, and estate attorneys. No repairs or cleanout are required before closing — and we can coordinate virtually for out-of-state heirs.",
  },
  {
    id: "areas",
    question: "What areas around Tuscaloosa do you buy houses in?",
    answer:
      "We buy across Tuscaloosa and West Alabama — including Central Tuscaloosa, Northport, Cottondale, Brookwood, Vance, Forest Lake, Alberta City, Coaling, Gordo, and Moundville. If you're unsure whether your property is in our area, call Joe and he'll confirm quickly.",
  },
  {
    id: "obligation",
    question: "Am I obligated to accept an offer if I contact Joe?",
    answer:
      "No. Getting a cash offer from Joe is completely free with no obligation whatsoever. You can review the numbers, compare with other options, and decline with zero consequence. There are no upfront fees, no pressure, and no timeline you're locked into.",
  },
  {
    id: "post-closing",
    question: "Can I stay in my Tuscaloosa house after closing?",
    answer:
      "In many cases yes. If you need a few days or weeks after closing to finish moving, Joe can often arrange a post-closing occupancy agreement. This is discussed and documented before closing so there are no surprises on either side.",
  },
] as const;

export const howItWorksTestimonialSlides = [
  {
    kind: "text" as const,
    quote:
      "Joe made everything so simple. We were on a tight timeline with our Tuscaloosa house and didn't have money for repairs. He walked us through the offer, handled the paperwork with the title company, and we closed right on schedule.",
    signature: "Marcus T.",
    meta: "Tuscaloosa, AL · Inherited property",
    initial: "M",
  },
  {
    kind: "text" as const,
    quote:
      "I was nervous about selling to a cash buyer, but Joe explained every step and never pushed us. We ended up with a fair offer, no closing costs, and no last-minute surprises. It felt like working with a neighbor, not a corporation.",
    signature: "Linda K.",
    meta: "Northport, AL · Facing foreclosure",
    initial: "L",
  },
  {
    kind: "text" as const,
    quote:
      "We had an inherited house that needed more work than we could take on. Joe bought it as-is, let us leave unwanted furniture, and the whole process took a couple of weeks from first call to closing.",
    signature: "Sandra & Ray M.",
    meta: "Tuscaloosa, AL · Estate sale",
    initial: "S",
  },
] as const;

export const transparentPricingRows = [
  {
    id: "arv",
    operator: "ARV",
    operatorVariant: "arv" as const,
    title: "After-Repair Value",
    description:
      "What your Tuscaloosa home would sell for in fully repaired, market-ready condition — based on real recent comparable sales in your neighborhood.",
  },
  {
    id: "repairs",
    operator: "−",
    operatorVariant: "minus" as const,
    title: "Repair Costs",
    description:
      "The realistic cost to bring the property to market-ready condition — roof, HVAC, flooring, paint, structural, or any safety issues Joe identifies during the walkthrough.",
  },
  {
    id: "holding",
    operator: "−",
    operatorVariant: "minus" as const,
    title: "Holding & Selling Costs",
    description:
      "Taxes, insurance, utilities, and selling costs Joe carries while he owns and repairs the property — approximately 10% of ARV.",
  },
  {
    id: "margin",
    operator: "−",
    operatorVariant: "minus" as const,
    title: "Profit Margin",
    description:
      "A fair, consistent profit disclosed upfront — approximately 10%. Joe explains this on every offer. Without a margin, the business can't operate — but it's always transparent.",
  },
  {
    id: "offer",
    operator: "=",
    operatorVariant: "equals" as const,
    title: "Your Cash Offer",
    description:
      "The number you receive at closing. No commissions, no fees, no surprise deductions. Joe covers standard closing costs.",
  },
] as const;

export const transparentPricingIncludes = [
  "0% commission — you're selling directly, not through an agent",
  "Standard closing costs paid by Joe, not you",
  "No fees to receive or review an offer",
  "Written breakdown so you see every line before committing",
] as const;

export const transparentPricingFormula = {
  lines: [
    "After-Repair Value",
    "− Repair Costs",
    "− Holding & Selling Costs (~10%)",
    "− Profit Margin (~10%)",
  ],
  result: "Your Cash Offer",
  note: "Joe walks through every line of the offer. You see what he's paying for repairs, what the ARV is based on, and what his margin is — before you decide anything. Compare it with an agent's estimate and choose what's right for you.",
  ctaLabel: "Get My Offer Breakdown →",
} as const;

export const howItWorksPricingFormulaSteps = transparentPricingRows.map(
  ({ id, operator, operatorVariant, title, description }) => ({
    id,
    operator,
    operatorVariant,
    title,
    description,
  }),
);
