import { aboutWhereWeBuyAreas } from "@/data/about";

export type FaqContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "paragraph-link";
      before: string;
      linkLabel: string;
      linkHref: string;
    };

export type FaqCategoryFaq = {
  id: string;
  question: string;
  blocks: readonly FaqContentBlock[];
};

export type FaqCategory = {
  id: string;
  tabLabel: string;
  title: string;
  heading: string;
  intro: string;
  questionCount: number;
  faqs: readonly FaqCategoryFaq[];
};

export const faqPageHero = {
  eyebrow: "Tuscaloosa, AL · Honest Answers",
  description:
    "Straight answers to the questions Tuscaloosa sellers ask most — about the process, pricing, foreclosure, repairs, and how We Buy Tuscaloosa Homes works. Use the category buttons below to jump to what matters most to you.",
  badges: [
    "Written by Joe LeBlanc, Founder",
    "5.0 ★ · 103+ verified reviews",
    "BBB A+ Accredited",
    "Updated 2026",
  ],
} as const;

export const faqQuickAnswers = [
  {
    question: "How fast can I sell?",
    answer:
      "As little as 7 days from accepting a written offer. You choose the closing date — faster or slower depending on your needs.",
    highlight: "As little as 7 days",
  },
  {
    question: "Do I need to make repairs?",
    answer:
      "No. We buy Tuscaloosa homes as-is — any condition, any situation. No repairs, no cleaning, no staging required before we buy.",
    highlight: "No.",
  },
  {
    question: "Can I sell if I'm in foreclosure?",
    answer:
      "Yes, as long as there's enough time before the auction date. A cash sale pays off your mortgage at closing. Call early — options narrow as the date approaches.",
    highlight: "Yes",
  },
  {
    question: "Are there upfront fees to get an offer?",
    answer:
      "None. Getting a written cash offer from Joe is completely free with no obligation to accept. You can say no with no consequences.",
    highlight: "None.",
  },
  {
    question: "Who actually buys the house?",
    answer:
      "Joe LeBlanc — the founder — buys directly with his own funds. No call centers, no wholesaling, no third parties involved in the purchase.",
    highlight: "Joe LeBlanc",
  },
  {
    question: "How does Joe calculate the offer?",
    answer:
      "After-repair value from real Tuscaloosa comps, minus repair costs, minus ~10% holding costs, minus ~10% profit. Every line is shown in writing before you decide anything.",
    highlight: "minus ~10% holding costs, minus ~10% profit.",
  },
] as const;

export const faqProcessSteps = [
  {
    num: "Step 01",
    tag: "Day 0 · 5 min",
    title: "Call or fill out the form",
    description:
      "Share your address and a rough sense of condition and timeline. No paperwork, no credit check.",
  },
  {
    num: "Step 02",
    tag: "Day 1–3 · no prep",
    title: "Quick walkthrough",
    description:
      "Joe visits in person — no cleaning or repairs needed. Usually 20–30 minutes on-site.",
  },
  {
    num: "Step 03",
    tag: "Within 48 hours",
    title: "Written cash offer",
    description:
      "Joe delivers a written offer showing ARV, repair costs, holding costs, and his margin — every line explained.",
  },
  {
    num: "Step 04",
    tag: "As fast as 7 days",
    title: "You choose the close date",
    description:
      "Accept and pick your date. Joe handles all paperwork through a licensed Alabama title company.",
  },
] as const;

export const faqPricingComparisonRows = [
  {
    factor: "Time to close",
    cash: "7–21 days from offer accepted",
    agent: "Typically 30–90+ days",
    cashPositive: true,
  },
  {
    factor: "Repairs needed",
    cash: "None — we buy as-is",
    agent: "Usually expected by buyers",
    cashPositive: true,
  },
  {
    factor: "Sale price",
    cash: "Usually below retail — reflects as-is condition",
    agent: "Potentially higher gross",
    cashPositive: false,
  },
  {
    factor: "Selling costs",
    cash: "Transparent pricing; Joe covers standard closing costs",
    agent: "Agent fees plus seller closing costs",
    cashPositive: true,
  },
  {
    factor: "Certainty of close",
    cash: "High — no lender, no financing risk",
    agent: "Buyer can back out over appraisal or financing",
    cashPositive: true,
  },
] as const;

export const faqMarketStats = [
  { value: "$271,050", label: "Median Tuscaloosa sale price, 2025–2026" },
  { value: "~33 days", label: "Typical days to pending on MLS" },
  { value: "7–21 days", label: "Typical close with We Buy Tuscaloosa Homes" },
  { value: "BBB A+", label: "We Buy Tuscaloosa Homes accreditation" },
] as const;

export const faqTopicTabs = [
  { id: "cat-process", label: "Process" },
  { id: "cat-pricing", label: "Pricing & Offers" },
  { id: "cat-foreclosure", label: "Foreclosure" },
  { id: "cat-repairs", label: "Repairs & Condition" },
  { id: "cat-situations", label: "Situations" },
  { id: "cat-market", label: "Tuscaloosa Market" },
  { id: "cat-areas", label: "Areas We Cover" },
  { id: "cat-trust", label: "Trust & Legitimacy" },
  { id: "cat-about", label: "About Joe" },
] as const;

export const faqCategories: readonly FaqCategory[] = [
  {
    id: "cat-process",
    tabLabel: "Process",
    title: "Process",
    heading: "How Does Selling Your Tuscaloosa House for Cash Work?",
    intro:
      "The process is four steps and designed to be simple. You stay in control at every point — there's no obligation until you sign a purchase contract at closing.",
    questionCount: 5,
    faqs: [
      {
        id: "process-speed",
        question: "How fast can I sell my house for cash in Tuscaloosa?",
        blocks: [
          {
            type: "paragraph",
            text: "You can close in as little as 7 days from accepting a written cash offer. The exact timeline depends on how quickly title work clears and the closing date you choose. There's no requirement to move faster than you need — longer timelines of 30, 45, or 60 days are equally available if you need time to arrange your move or sort through belongings.",
          },
          {
            type: "paragraph",
            text: "Most sellers close within 2–3 weeks once they decide to move forward.",
          },
        ],
      },
      {
        id: "process-documents",
        question: "What documents do I need to sell my house for cash in Tuscaloosa?",
        blocks: [
          {
            type: "paragraph",
            text: "You need almost nothing to start. Just your property address and a general sense of your home's condition and your ideal timeline.",
          },
          {
            type: "paragraph",
            text: "Documents that are helpful later in the process:",
          },
          {
            type: "list",
            items: [
              "Government-issued ID (driver's license or passport)",
              "Most recent mortgage statement (to confirm payoff balance)",
              "Property tax bill",
              "HOA information if applicable",
              "For inherited properties: probate paperwork or letters testamentary",
            ],
          },
          {
            type: "paragraph",
            text: "None of these are required upfront. Joe will tell you exactly what's needed once the offer is accepted.",
          },
        ],
      },
      {
        id: "process-change-mind",
        question: "Can I change my mind after I get a cash offer for my Tuscaloosa house?",
        blocks: [
          {
            type: "paragraph",
            text: "Yes. Getting a cash offer is completely free and comes with zero obligation. You can review the numbers, compare with a realtor estimate, think it over for as long as you need, and decline — with no pressure and no follow-up. There is no contract that binds you until you agree to a purchase agreement in writing, which only happens when you're ready to proceed.",
          },
        ],
      },
      {
        id: "process-title",
        question: "Do you use a title company or attorney for closings?",
        blocks: [
          {
            type: "paragraph",
            text: "Yes. Every closing goes through a licensed Alabama title company. The title company handles the deed, your mortgage payoff, and fund distribution — ensuring everything is done correctly and legally. Joe does not close deals \"at the kitchen table\" or outside of standard closing procedures. You always work with a neutral third party.",
          },
        ],
      },
      {
        id: "process-vs-agent",
        question: "Why use a cash home buyer in Tuscaloosa instead of listing with an agent?",
        blocks: [
          {
            type: "paragraph",
            text: "A cash buyer makes the most sense when speed, certainty, or property condition are the main concerns. A cash sale skips repairs, showings, inspections, appraisals, and lender approval — which are all variables that can delay or kill a traditional sale.",
          },
          {
            type: "paragraph",
            text: "A traditional listing may yield a higher gross sale price when your home is updated and you can wait 30–90+ days for the right buyer. The right path depends on what matters most to you. Joe encourages every seller to get a realtor estimate and compare the real net proceeds before deciding.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-pricing",
    tabLabel: "Pricing & Offers",
    title: "Pricing & Offers",
    heading: "How Do Cash Offers on Tuscaloosa Houses Compare to Market Value?",
    intro:
      "Cash offers are usually below retail — but the right comparison is what you keep after all selling costs, not just the headline numbers side by side.",
    questionCount: 4,
    faqs: [
      {
        id: "pricing-offer",
        question: "How do you decide how much to offer for my Tuscaloosa house?",
        blocks: [
          {
            type: "paragraph",
            text: "Joe calculates your offer using a transparent formula:",
          },
          {
            type: "list",
            items: [
              "After-Repair Value (ARV) — what your home would sell for fully updated, based on real recent Tuscaloosa comparable sales",
              "Minus repair costs — estimated during the walkthrough",
              "Minus holding and selling costs — approximately 10% of ARV",
              "Minus a disclosed profit margin — approximately 10%",
            ],
          },
          {
            type: "paragraph",
            text: "The result is your cash offer. Every line is shown in the written offer before you decide anything. Joe will walk through any part of the math with you.",
          },
        ],
      },
      {
        id: "pricing-fees",
        question: "Are there any upfront fees or costs when I get a cash offer?",
        blocks: [
          {
            type: "paragraph",
            text: "There are no upfront fees to receive a written cash offer from We Buy Tuscaloosa Homes. Getting an offer is free, with zero obligation to accept. Joe covers standard closing costs on every transaction. Before you accept any offer, Joe walks you through exactly what costs apply so there are no surprises after signing.",
          },
        ],
      },
      {
        id: "pricing-wait-fix",
        question: "Is it better to wait and fix my house or sell it as-is for cash in Tuscaloosa?",
        blocks: [
          {
            type: "paragraph",
            text: "It depends on your specific situation. Fixing and listing can yield a higher gross price — but you need to account for:",
          },
          {
            type: "list",
            items: [
              "The actual cost of repairs (often higher than estimated)",
              "Carrying costs during renovation and listing (mortgage, taxes, utilities)",
              "Risk that financed buyers back out over inspection issues or appraisal gaps",
            ],
          },
          {
            type: "paragraph",
            text: "If repairs are minor and you have several months of flexibility, listing often makes sense. If repairs are significant, your timeline is tight, or you can't fund repairs upfront, a cash sale frequently nets you a comparable — or better — outcome once you subtract all the costs from the listing path. Joe is happy to help you compare real numbers for your specific property.",
          },
        ],
      },
      {
        id: "pricing-negotiate",
        question: "Can I negotiate the cash offer for my Tuscaloosa house?",
        blocks: [
          {
            type: "paragraph",
            text: "Joe's offers are built on transparent math — but terms can sometimes be adjusted. Because every line of the offer is explained in writing, you can ask about any input: the ARV estimate, the repair cost estimate, or the assumed holding period. Joe explains his reasoning and, where the facts support it, can revisit specific numbers. The goal is a fair offer you understand, not a take-it-or-leave-it figure.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-foreclosure",
    tabLabel: "Foreclosure",
    title: "Foreclosure",
    heading: "Can You Help If I'm Behind on Payments or Facing Foreclosure in Tuscaloosa?",
    intro:
      "Yes — but timing is critical. The earlier you call, the more options remain available. A cash sale can close before the foreclosure auction date as long as there is sufficient time and equity.",
    questionCount: 3,
    faqs: [
      {
        id: "foreclosure-help",
        question:
          "Can you still buy my house if I'm behind on payments or in foreclosure in Tuscaloosa?",
        blocks: [
          {
            type: "paragraph",
            text: "Yes. As long as there is enough time before the foreclosure auction date and enough equity in the property to cover the mortgage payoff, a cash sale can work. Your existing mortgage is paid off from the sale proceeds at closing — Joe doesn't assume your debt or require you to be current before selling.",
          },
          {
            type: "paragraph",
            text: "Call as early as possible. Options narrow significantly as the auction date approaches, and some situations require coordination with your lender or an attorney. Joe will give you an honest read on whether a sale is feasible for your specific timeline at no cost or obligation.",
          },
        ],
      },
      {
        id: "foreclosure-time",
        question: "How much time do I need before foreclosure to sell my Tuscaloosa house for cash?",
        blocks: [
          {
            type: "paragraph",
            text: "There's no universal minimum — it depends on how much time is left before the auction date, the amount of equity in the property, and how quickly title can clear. As a general rule:",
          },
          {
            type: "list",
            items: [
              "3+ weeks before auction: Usually enough time to close a cash sale if equity supports it.",
              "1–2 weeks before auction: Tight but sometimes possible with an experienced title company. Call immediately.",
              "Less than a week: Very limited options. A bankruptcy attorney may be able to obtain a temporary stay, but a cash sale is unlikely to close in time.",
            ],
          },
          {
            type: "paragraph",
            text: "This is general guidance, not legal advice. Joe recommends consulting a local Alabama attorney if foreclosure is imminent.",
          },
        ],
      },
      {
        id: "foreclosure-credit",
        question: "Will selling my house before foreclosure hurt my credit?",
        blocks: [
          {
            type: "paragraph",
            text: "Selling your home before foreclosure is generally far better for your credit than letting the foreclosure proceed. A completed foreclosure typically stays on your credit report for seven years and significantly impacts your score and ability to buy again. A voluntary sale — including a cash sale — closes out the mortgage without a foreclosure notation.",
          },
          {
            type: "paragraph",
            text: "This is general information, not legal or financial advice. For questions specific to your credit situation, Joe recommends speaking with a HUD-approved housing counselor or a local attorney.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-repairs",
    tabLabel: "Repairs & Condition",
    title: "Repairs & Condition",
    heading: "Do I Need to Repair or Clean My House Before You Buy It?",
    intro:
      "No. We buy Tuscaloosa houses as-is — any condition. This is one of the main practical differences between selling to a cash buyer and listing on the MLS.",
    questionCount: 3,
    faqs: [
      {
        id: "repairs-clean",
        question: "Do I need to repair or clean my house before you buy it?",
        blocks: [
          {
            type: "paragraph",
            text: "No. We buy houses in any condition — you do not need to repair, clean, stage, or remove anything before selling. Joe factors the current as-is condition into his offer during the walkthrough. Homes with fire or water damage, mold, foundation issues, aging systems, and years of accumulated belongings are all situations we handle regularly.",
          },
          {
            type: "paragraph",
            text: "After closing, the property becomes ours — and everything remaining in it becomes our responsibility to manage.",
          },
        ],
      },
      {
        id: "repairs-structural",
        question: "Do you buy houses with major structural damage or code violations in Tuscaloosa?",
        blocks: [
          {
            type: "paragraph",
            text: "Yes, in most cases. Structural damage, active code violations, fire damage, water intrusion, mold, foundation issues, and similar problems don't disqualify a property from a cash sale. These factors affect the offer amount — Joe adjusts the repair cost estimate to account for whatever is found — but they rarely prevent a sale from happening.",
          },
          {
            type: "paragraph",
            text: "The main exceptions are properties with extreme title complications or situations where the cost to remediate genuinely exceeds the land value. Those are rare, and Joe will be straightforward with you if it applies.",
          },
        ],
      },
      {
        id: "repairs-belongings",
        question: "Can I leave belongings behind when I sell my Tuscaloosa house to you?",
        blocks: [
          {
            type: "paragraph",
            text: "Yes. You can leave furniture, appliances, clothing, tools, or anything else you don't want or can't move. We handle clean-out after closing. This is especially helpful for sellers dealing with inherited properties, downsizing, or situations where there simply isn't time or capacity to empty the house before closing.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-situations",
    tabLabel: "Situations",
    title: "Situations",
    heading: "Who We Help When You Need to Sell a House Fast in Tuscaloosa",
    intro: "We work with sellers in all kinds of situations. These are the ones we handle most often.",
    questionCount: 4,
    faqs: [
      {
        id: "situations-tenants",
        question: "Can I sell a rental in Tuscaloosa if I still have tenants living there?",
        blocks: [
          {
            type: "paragraph",
            text: "Yes. We buy tenant-occupied properties without requiring vacancy before closing. Tenant situations — lease agreements, security deposits, and any required notices — are handled as part of the closing process. Joe coordinates with a title company to ensure the transition is handled correctly under Alabama landlord-tenant law.",
          },
          {
            type: "paragraph",
            text: "Student rentals near the University of Alabama, long-term tenanted properties, and properties with difficult-to-remove tenants are all situations we've navigated before.",
          },
        ],
      },
      {
        id: "situations-inherited",
        question: "What if I inherited a house in Tuscaloosa and it needs a lot of work?",
        blocks: [
          {
            type: "paragraph",
            text: "We buy inherited and estate properties as-is regularly — and specifically designed our process with estate sellers in mind. You can leave furniture, clothing, belongings, and anything you don't want behind. Joe works directly with personal representatives, executors, and estate attorneys and can move on a probate timeline.",
          },
          {
            type: "paragraph",
            text: "There's no requirement to complete repairs, hold an estate sale, or clean the property before selling. The offer accounts for the current as-is condition, and clean-out happens after closing on our side.",
          },
        ],
      },
      {
        id: "situations-divorce",
        question: "Can you help if I need to sell my Tuscaloosa house during a divorce?",
        blocks: [
          {
            type: "paragraph",
            text: "Yes. A cash sale can simplify the property division aspect of a divorce significantly — one firm closing date, one clear proceeds amount, no showings or inspection disputes, and no timeline uncertainty from a financed buyer. Joe works respectfully with both parties and coordinates to align the closing date with your legal timeline. He can also work with your attorneys directly if needed.",
          },
        ],
      },
      {
        id: "situations-relocate",
        question: "Can you buy my Tuscaloosa house if I'm relocating and need to move before it sells?",
        blocks: [
          {
            type: "paragraph",
            text: "Yes. This is one of the clearest cases where a cash sale removes real stress. Joe can close on your schedule — fast if you've already relocated and need the financial closure, or timed to match your move-out date if you need to stay through closing. He can also coordinate paperwork remotely if you've moved before the closing date.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-market",
    tabLabel: "Tuscaloosa Market",
    title: "Tuscaloosa Market · 2026",
    heading: "Tuscaloosa Housing Market: What Homeowners Need to Know in 2026",
    intro:
      "Understanding the current Tuscaloosa market helps you decide which selling path makes sense for your specific property and timeline.",
    questionCount: 3,
    faqs: [
      {
        id: "market-2026",
        question: "What is the Tuscaloosa housing market like for sellers in 2026?",
        blocks: [
          {
            type: "paragraph",
            text: "Tuscaloosa's market is generally balanced in 2026. Updated, well-priced homes near the University of Alabama, in Northport, or in Forest Lake typically go pending in about 33 days at a median price around $271,050. That's a reasonable environment for sellers with market-ready homes and time to wait.",
          },
          {
            type: "paragraph",
            text: "Homes needing significant repairs or with urgent timelines tend to struggle on the open market — financed buyers often can't purchase properties with major defects, and price reductions become necessary. For these situations, a cash buyer can deliver a better net outcome in much less time.",
          },
          {
            type: "paragraph-link",
            before: "For current state-level data, see the ",
            linkLabel: "Alabama Association of Realtors market stats",
            linkHref: "https://www.alabamarealtors.com/market-stats",
          },
        ],
      },
      {
        id: "market-timing",
        question: "Is now a good time to sell my Tuscaloosa house for cash?",
        blocks: [
          {
            type: "paragraph",
            text: "The right time to sell is when your situation requires it. Cash buyers can close in any market — if your home needs repairs, you have a foreclosure date approaching, an inherited property to settle, or you simply need to move on, the current market conditions don't change what a cash sale offers: speed, certainty, and a guaranteed close date.",
          },
          {
            type: "paragraph",
            text: "If your home is updated and you have genuine timeline flexibility, getting a realtor estimate alongside a cash offer and comparing the real net proceeds is the best way to decide. Joe encourages this approach.",
          },
        ],
      },
      {
        id: "market-prices",
        question: "How do Tuscaloosa home prices affect what you can offer me?",
        blocks: [
          {
            type: "paragraph",
            text: "Joe's offers are based on real recent comparable sales in your specific Tuscaloosa neighborhood — not national averages. When local prices are higher, your ARV is higher, and your offer reflects that. When a neighborhood is softer or the property type is less in demand, the offer reflects that too. The math is transparent and tied directly to what homes in your area are actually selling for right now.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-areas",
    tabLabel: "Areas We Cover",
    title: "Areas We Cover",
    heading: "Do You Buy Houses in My Part of Tuscaloosa?",
    intro:
      "We buy houses across Tuscaloosa and West Alabama. If you're not sure whether your address is in our area, call Joe — he'll confirm quickly.",
    questionCount: 2,
    faqs: [
      {
        id: "areas-nearby",
        question: "Do you only buy houses in Tuscaloosa, or will you buy nearby too?",
        blocks: [
          {
            type: "paragraph",
            text: "We buy houses across Tuscaloosa and throughout West Alabama. Common areas include Northport, Alberta City, Cottondale, Brookwood, Vance, Forest Lake, Woodland Forrest, Coaling, Gordo, and Moundville, as well as smaller communities throughout Tuscaloosa County and neighboring counties. If you're unsure whether your property qualifies, call Joe at (803) 784-7672 — he'll confirm quickly and honestly.",
          },
        ],
      },
      {
        id: "areas-types",
        question: "What types of properties do you buy in Tuscaloosa?",
        blocks: [
          {
            type: "paragraph",
            text: "We buy most residential properties, including:",
          },
          {
            type: "list",
            items: [
              "Single-family homes — any age, any condition",
              "Small multifamily properties (2–4 units)",
              "Tenant-occupied rentals and student housing",
              "Inherited and estate properties",
              "Fire, water, and storm-damaged homes",
              "Vacant and code-violated properties",
              "Condos and townhouses",
            ],
          },
          {
            type: "paragraph",
            text: "If you're unsure whether your specific property type qualifies, just ask — the conversation is free and Joe will give you a straight answer.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-trust",
    tabLabel: "Trust & Legitimacy",
    title: "Trust & Legitimacy",
    heading: "How Do I Know a Cash Home Buyer in Tuscaloosa Is Legitimate?",
    intro:
      "This is one of the most important questions to ask — and Joe encourages every seller to verify before picking up the phone with anyone.",
    questionCount: 3,
    faqs: [
      {
        id: "trust-legitimate",
        question: "How do I know if a cash home buyer in Tuscaloosa is legitimate?",
        blocks: [
          {
            type: "paragraph",
            text: "Five things to look for before working with any cash buyer in Tuscaloosa:",
          },
          {
            type: "list",
            items: [
              "Local physical address — not a P.O. box or a virtual mailbox. We Buy Tuscaloosa Homes is at 1520 Stillwater Dr, Tuscaloosa, AL 35406.",
              "Confirmed DBA with Alabama Secretary of State — you can verify our registration in state business records.",
              "BBB accreditation — High Noon Home Buyers (our parent brand) has held a BBB A+ rating since 2018. Verify at bbb.org before calling.",
              "Written proof of funds — any legitimate buyer can show they have the cash available. Joe provides this on request.",
              "No upfront fees — you should never be asked to pay anything before a closing. Red flag if a buyer asks for a deposit or \"processing fee.\"",
            ],
          },
          {
            type: "paragraph",
            text: "Joe actively encourages sellers to check all of these before deciding to work with him.",
          },
        ],
      },
      {
        id: "trust-red-flags",
        question: "What red flags should I watch out for with cash home buyers?",
        blocks: [
          {
            type: "paragraph",
            text: "Common red flags with less reputable cash buyers:",
          },
          {
            type: "list",
            items: [
              "Verbal offers only — no written purchase agreement",
              "Pressure to sign quickly without time to review the contract",
              "Asking for upfront fees or a deposit before closing",
              "Can't provide a local address or proof of funds on request",
              "No verifiable reviews or BBB record",
              "Contract contains language about assigning the deal to a third party",
            ],
          },
          {
            type: "paragraph",
            text: "A reputable buyer will give you time, provide everything in writing, and never ask you to pay before closing.",
          },
        ],
      },
      {
        id: "trust-wholesale",
        question: "Does We Buy Tuscaloosa Homes wholesale or assign contracts?",
        blocks: [
          {
            type: "paragraph",
            text: "No. Joe buys properties directly with his own funds — he does not wholesale deals to other investors or assign your purchase contract to a third party. When you sell to We Buy Tuscaloosa Homes, you sell directly to Joe. The buyer on your closing paperwork is Joe LeBlanc or the entity he operates through — not an unknown third party you've never spoken with.",
          },
        ],
      },
    ],
  },
  {
    id: "cat-about",
    tabLabel: "About Joe",
    title: "About Joe & We Buy Tuscaloosa Homes",
    heading: "Who Is Behind We Buy Tuscaloosa Homes?",
    intro:
      "Joe LeBlanc owns and operates We Buy Tuscaloosa Homes — locally, directly, and personally on every deal.",
    questionCount: 3,
    faqs: [
      {
        id: "about-who",
        question: "Who is behind We Buy Tuscaloosa Homes?",
        blocks: [
          {
            type: "paragraph",
            text: "Joe LeBlanc is the Founder, Owner, and CEO. A University of South Carolina graduate with 10+ years of business and real estate experience, Joe personally handles every transaction from first call through closing. You speak directly with the decision-maker — not a call center, not a franchise representative.",
          },
          {
            type: "paragraph",
            text: "We Buy Tuscaloosa Homes operates under the High Noon Home Buyers family of brands, BBB A+ Accredited since 2018 with a 5.0 Google rating from 103+ verified reviews.",
          },
        ],
      },
      {
        id: "about-agent",
        question: "Are you a real estate agent, or do you buy houses directly?",
        blocks: [
          {
            type: "paragraph",
            text: "Joe is a direct cash buyer, not a licensed real estate agent or broker. We Buy Tuscaloosa Homes purchases properties directly with private funds — we don't list your home on the MLS, charge a listing commission, or represent buyers and sellers in agent-style transactions. When you sell to us, you sell directly to Joe.",
          },
        ],
      },
      {
        id: "about-ready",
        question: "What should I have ready before I call We Buy Tuscaloosa Homes?",
        blocks: [
          {
            type: "paragraph",
            text: "Nothing formal is required upfront. Just your property address and a general sense of your home's condition and your preferred timeline. Joe will ask a few follow-up questions and schedule a walkthrough at your convenience. No credit check, no paperwork, and no commitment of any kind before you review and accept a written offer.",
          },
        ],
      },
    ],
  },
];

export const faqPageMainFaqs = [
  {
    id: "main-speed",
    question: "How fast can I sell my house for cash in Tuscaloosa?",
    answer:
      "You can close in as little as 7 days from accepting a written cash offer. The timeline depends on title clearance and the date you choose. We can also work with longer timelines — 30, 45, or 60 days — if you need time to move.",
  },
  {
    id: "main-offer",
    question: "How do you decide how much to offer for my Tuscaloosa house?",
    answer:
      "Joe calculates your offer using the after-repair value of your home based on real recent Tuscaloosa comparable sales, then subtracts estimated repair costs, holding and selling costs of roughly 10%, and a disclosed profit margin of roughly 10%. The offer comes in writing with every line explained.",
  },
  {
    id: "main-fees",
    question: "Are there any upfront fees or costs when I get a cash offer?",
    answer:
      "There are no upfront fees to receive a cash offer from We Buy Tuscaloosa Homes. Getting a written offer is completely free with no obligation to accept. Joe covers standard closing costs on every transaction.",
  },
  {
    id: "main-foreclosure",
    question:
      "Can you still buy my house if I'm behind on payments or in foreclosure in Tuscaloosa?",
    answer:
      "Yes. A cash sale can close before the foreclosure auction date as long as there is sufficient time and equity. Your mortgage is paid off from proceeds at closing. Call as early as possible — the more time available, the more options remain open.",
  },
  {
    id: "main-repairs",
    question: "Do I need to repair or clean my house before you buy it?",
    answer:
      "No. We buy Tuscaloosa houses as-is in any condition — major repairs, fire or water damage, mold, foundation issues, heavy clutter, or years of deferred maintenance. You do not need to repair, clean, or stage anything before selling.",
  },
  {
    id: "main-tenants",
    question: "Can I sell a rental in Tuscaloosa if I still have tenants living there?",
    answer:
      "Yes. We buy tenant-occupied properties without requiring vacancy before closing. Joe handles tenant situations after closing. Student rentals near the University of Alabama and long-term tenanted properties are both common situations we work with.",
  },
  {
    id: "main-inherited",
    question: "What if I inherited a house in Tuscaloosa and it needs a lot of work?",
    answer:
      "We buy inherited and estate properties as-is regularly. You can leave furniture, belongings, and anything you don't want behind — we handle clean-out after closing. Joe works directly with personal representatives, executors, and estate attorneys.",
  },
  {
    id: "main-legitimate",
    question: "How do I know if a cash home buyer in Tuscaloosa is legitimate?",
    answer:
      "Look for a local business address, a confirmed DBA with the Alabama Secretary of State, a verifiable BBB accreditation, and a written offer with proof of funds available on request. We Buy Tuscaloosa Homes operates under High Noon Home Buyers — BBB A+ Accredited since 2018, 5.0 Google rating from 103+ reviews.",
  },
  {
    id: "main-change-mind",
    question: "Can I change my mind after I get a cash offer for my Tuscaloosa house?",
    answer:
      "Yes. Getting a cash offer is completely free with no obligation to accept. You can decline with no pressure, no follow-up, and no consequences. There is no contract that binds you until you agree to a purchase agreement in writing at closing.",
  },
  {
    id: "main-area",
    question: "Do you only buy houses in Tuscaloosa, or will you buy nearby too?",
    answer:
      "We buy houses across Tuscaloosa and West Alabama — including Northport, Alberta City, Cottondale, Brookwood, Vance, Forest Lake, Woodland Forrest, Coaling, Gordo, Moundville, and surrounding communities.",
  },
  {
    id: "main-documents",
    question: "What documents do I need to sell my house for cash in Tuscaloosa?",
    answer:
      "You only need your property address and a sense of its condition to start. Documents useful later include a government-issued ID, your most recent mortgage statement, property tax bill, and HOA information if applicable. For inherited properties, probate paperwork or letters testamentary are helpful but not required to begin the conversation.",
  },
  {
    id: "main-wait-fix",
    question: "Is it better to wait and fix my house or sell it as-is for cash in Tuscaloosa?",
    answer:
      "It depends on your situation. If repairs are minor and you have time, fixing and listing can yield a higher gross price. If repairs are major, you have a deadline, or the carrying costs of holding the property are high, selling as-is for cash often nets you a comparable or better outcome once you subtract repair costs, holding time, and selling expenses from the listing price.",
  },
  {
    id: "main-market",
    question: "What is the Tuscaloosa housing market like for sellers in 2026?",
    answer:
      "Tuscaloosa's market is generally balanced in 2026. Updated homes typically go pending in about 33 days at a median price around $271,050. Homes needing significant repairs or facing urgent timelines tend to struggle on the open market — which is where a cash buyer can be a better fit.",
  },
  {
    id: "main-about",
    question: "Who is behind We Buy Tuscaloosa Homes?",
    answer:
      "Joe LeBlanc is the Founder, Owner, and CEO — a University of South Carolina graduate with 10+ years of business experience. Joe personally handles every call, walkthrough, and offer. We Buy Tuscaloosa Homes operates under the High Noon Home Buyers family, BBB A+ Accredited since 2018.",
  },
] as const;

export const faqCtaBands = [
  {
    title: "Ready to see what your Tuscaloosa home would net?",
    subtitle: "Written offer within 48 hours. Zero obligation to accept.",
    primaryLabel: "Get My Written Offer →",
    secondaryLabel: "Call Joe — (803) 784-7672",
  },
  {
    title: "Still have questions? Joe will answer personally.",
    subtitle: "Call or fill out the short form — Joe responds same day.",
    primaryLabel: "Get My Free Cash Offer →",
    secondaryLabel: "Call Joe — (803) 784-7672",
  },
] as const;

export const faqJoeStrip =
  "Joe LeBlanc — Founder, Owner, and CEO. University of South Carolina graduate with 10+ years of business experience. Joe answers his own phone, visits properties personally, and handles every offer and closing. We Buy Tuscaloosa Homes operates under High Noon Home Buyers — BBB A+ Accredited since 2018, 5.0 Google rating from 103+ verified reviews.";

export const faqWhereWeBuyAreas = aboutWhereWeBuyAreas;
