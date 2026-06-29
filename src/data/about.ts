export const aboutPageStats = [
  { value: "5.0", unit: "★", label: "Google rating · 103+ verified reviews" },
  { value: "$0", unit: "", label: "Fees charged to sellers" },
  { value: "7", unit: "days", label: "Minimum close time from accepted offer" },
  { value: "48", unit: "hrs", label: "Written offer delivered after walkthrough" },
] as const;

export const whySellersTrustContent = {
  eyebrow: "Why Sellers Trust Us",
  heading: "Why homeowners trust We Buy Tuscaloosa Homes",
  description:
    "Trust in a cash buyer comes down to one thing: do they do what they say? Here's how We Buy Tuscaloosa Homes compares to national brands and other local buyers on the things sellers care about most.",
  goodTitle: "We Buy Tuscaloosa Homes",
  goodItems: [
    "Joe answers his own phone — no call center, no assistant",
    "Locally owned and operated, not a franchise license",
    "Written, itemized offer with full math shown upfront",
    "Proof of funds provided on request before you sign anything",
    "Closes through a licensed Alabama title company every time",
    "No upfront fees — you are never asked to pay anything to receive a written offer",
    "No renegotiation after offer is accepted",
    "5.0 Google rating · 103+ reviews",
  ],
  considerTitle: 'Typical National "We Buy Houses" Brand',
  considerItems: [
    "Call center routes your inquiry to a regional operator",
    "Franchise model — local presence varies widely by location",
    "Verbal offers that may change after due diligence",
    "Proof of funds not always available or disclosed upfront",
    "Closing processes can vary by operator and market",
    "Fee structures and closing cost responsibilities vary widely by operator",
    "Renegotiation during inspection periods is common",
    "Brand rating may not reflect the local operator you're working with",
  ],
  considerNote: null,
} as const;

export const aboutWhoWeHelpRows = [
  {
    num: "01",
    title: "Facing foreclosure with a firm deadline",
    description:
      "A cash sale can close before the auction date and pay off your mortgage at closing — stopping foreclosure from affecting your credit record. The earlier you call, the more options remain available. Joe will tell you honestly if there's enough time and equity to make a sale work.",
  },
  {
    num: "02",
    title: "Inherited property full of belongings",
    description:
      "We regularly work with heirs, personal representatives, and estate attorneys to purchase inherited houses as-is. You can leave furniture, clothing, and anything you don't want behind — we handle clean-out after closing. No staged photos, no showings while you're sorting through years of family belongings.",
  },
  {
    num: "03",
    title: "Home needing major repairs you can't fund",
    description:
      "If your roof is failing, HVAC is out, the foundation has issues, or the home has accumulated years of deferred maintenance — Joe buys it as-is and handles all improvements after closing. You don't take on debt or live through a renovation to make the sale happen.",
  },
  {
    num: "04",
    title: "Tired landlord — student rentals or worn properties",
    description:
      "Landlords with student rentals near the University of Alabama or multi-tenant properties that have seen years of turnover and wear often reach a point where they want a clean exit. We buy tenant-occupied properties without requiring vacancy before closing — you hand over the keys at closing and you're done.",
  },
  {
    num: "05",
    title: "Divorce or major life transition",
    description:
      "When both parties need a clean financial settlement and a firm, predictable close date, a cash sale removes the variables that make an already stressful situation harder. Joe works respectfully with both sides and coordinates to your legal timeline — no surprises, no drawn-out negotiations.",
  },
  {
    num: "06",
    title: "Relocation or job-driven timeline",
    description:
      "When a career move or life change puts you on a tight schedule, waiting 60–90+ days on the MLS isn't an option. Joe closes on your date — as fast as 7 days from acceptance — and can coordinate paperwork remotely if you've already moved or need to move before closing.",
  },
] as const;

export const aboutProcessSteps = [
  {
    tag: "Day 0 · 5 min",
    title: "Call or Fill Out the Form",
    description:
      "Tell Joe your address, your home's basic condition, and your ideal timeline. No paperwork, no commitment, no credit check.",
  },
  {
    tag: "Day 1–3 · No prep",
    title: "Quick Walkthrough",
    description:
      "Joe visits in person — no cleaning, no repairs, no staging needed. He assesses as-is condition to build an accurate, fair offer.",
  },
  {
    tag: "Within 48 hours",
    title: "Written Cash Offer",
    description:
      "Joe delivers a written offer showing his math: ARV, repair costs, holding costs, and his margin. You see every line. Zero pressure to accept.",
  },
  {
    tag: "As fast as 7 days",
    title: "You Choose the Close Date",
    description:
      "Pick the date — fast or flexible. Joe handles everything through a licensed Alabama title company and covers standard closing costs.",
  },
] as const;

export const aboutWhereWeBuyAreas = [
  {
    header: "Central & University",
    areas: [
      { name: "Central Tuscaloosa", primary: true },
      { name: "The Strip & Campus", primary: false },
      { name: "Alberta City", primary: true },
      { name: "Forest Lake", primary: false },
      { name: "Elmwood Park", primary: false },
      { name: "Historic District", primary: false },
    ],
  },
  {
    header: "South & East",
    areas: [
      { name: "Cottondale", primary: true },
      { name: "Woodland Forrest", primary: false },
      { name: "Skyland Blvd Area", primary: false },
      { name: "Hillcrest", primary: false },
      { name: "Fairwold", primary: false },
      { name: "South Tuscaloosa", primary: false },
    ],
  },
  {
    header: "North & Beyond",
    areas: [
      { name: "Northport", primary: true },
      { name: "Brookwood & Vance", primary: true },
      { name: "Lake Tuscaloosa", primary: false },
      { name: "Coaling · Gordo", primary: false },
      { name: "Moundville", primary: false },
      { name: "West Alabama", primary: false },
    ],
  },
] as const;

export const localVsNationalRows = [
  {
    local:
      "Joe knows Tuscaloosa neighborhood values — Alberta City, Northport, Forest Lake, Cottondale — and prices them correctly",
    national:
      "Often use automated valuation models that miss local context and hyper-local condition differences",
  },
  {
    local: "Joe can visit your property within 24–48 hours of your first call",
    national:
      "May require remote assessment or a longer wait for a local representative to visit",
  },
  {
    local:
      "Closes through established local title companies Joe has worked with for years",
    national:
      "Closing logistics are sometimes managed remotely, which can introduce delays",
  },
  {
    local:
      "Joe's personal reputation depends on doing right by Tuscaloosa sellers — he lives and works here",
    national:
      "Brand reputation is national; individual seller experiences don't always surface where they matter locally",
  },
  {
    local:
      "Willing to say when the market makes a traditional listing the smarter path for a specific property",
    national:
      "Incentive structure typically rewards buying, regardless of whether it's the seller's best option",
  },
] as const;

export const aboutTestimonialSlides = [
  {
    kind: "text" as const,
    quote:
      "Joe made everything so simple. We were on a tight timeline with our Tuscaloosa house and didn't have money for repairs. He walked us through the offer line by line, handled all the paperwork, and we closed right on schedule. Nothing hidden, no last-minute changes.",
    signature: "Marcus T.",
    meta: "Tuscaloosa, AL · Inherited property · Closed in 11 days",
    initial: "M",
    source: "Google Review",
  },
  {
    kind: "text" as const,
    quote:
      "I was nervous about selling to a cash buyer — I'd heard stories. Joe was the opposite of what I expected. He showed me how he calculated the offer, encouraged me to call a realtor and compare, and still gave me as much time as I needed. No pressure, ever.",
    signature: "Linda K.",
    meta: "Northport, AL · Facing foreclosure · Closed before auction date",
    initial: "L",
    source: "Google Review",
  },
  {
    kind: "text" as const,
    quote:
      "We had an inherited house that needed more work than we could handle. Joe bought it as-is, let us leave the furniture we couldn't move, and the whole process took less than two weeks from first call to closing. Would not have believed it if I hadn't been through it.",
    signature: "Sandra & Ray M.",
    meta: "Tuscaloosa, AL · Estate sale · Closed in 14 days",
    initial: "S",
    source: "Google Review",
  },
] as const;

export const aboutFaqs = [
  {
    id: "legitimate",
    question: "How do I know you're a legitimate cash home buyer in Tuscaloosa?",
    answer:
      "We Buy Tuscaloosa Homes operates under the High Noon Home Buyers family with a 5.0 Google rating from 103+ reviews. We close every transaction through a licensed Alabama title company, provide written proof of funds on request, and charge zero upfront fees before closing. Joe LeBlanc handles every deal personally — call him at (803) 784-7672 and he'll answer.",
  },
  {
    id: "who-owns",
    question: "Who owns and runs We Buy Tuscaloosa Homes?",
    answer:
      "Joe LeBlanc is the Founder, Owner, and CEO. A University of South Carolina graduate with 10+ years of business experience, Joe personally handles every transaction from first call through closing. You speak directly with the decision-maker — not a call center, not a regional franchise operator.",
  },
  {
    id: "vs-national",
    question:
      'How is We Buy Tuscaloosa Homes different from big national "we buy houses" brands?',
    answer:
      "We're locally owned and founder-led, not a franchise. Joe personally reviews your property, makes the offer, and stays involved through closing. National brands route sellers through call centers and regional operators whose quality and accountability vary. Joe gives you his direct number and responds himself.",
  },
  {
    id: "talk-to-joe",
    question: "Will I talk directly with Joe, or someone else, when I call?",
    answer:
      "You'll talk directly with Joe. He answers his own phone, visits properties personally, and handles every offer and closing himself. There is no assistant, no sales team, and no call center routing your call to whoever is available.",
  },
  {
    id: "decide-not-to-sell",
    question:
      "What happens if I reach out but decide not to sell my Tuscaloosa house to you?",
    answer:
      "Nothing. Getting a cash offer is completely free with no obligation. Joe will give you a fair number, explain exactly how he calculated it, and encourage you to compare it with other offers or a realtor estimate. If you decide not to sell to us, there's no aggressive follow-up and no pressure of any kind.",
  },
  {
    id: "agent-or-investor",
    question: "Are you a real estate agent or an investor?",
    answer:
      "Joe is a direct cash buyer, not an agent or a wholesaler. We Buy Tuscaloosa Homes purchases properties with our own funds — we do not list your home on the MLS, collect a commission, or assign your contract to a third-party buyer. When you sell to us, you sell directly to Joe.",
  },
  {
    id: "service-area",
    question: "Do you only buy houses in Tuscaloosa city, or nearby areas too?",
    answer:
      "We buy houses across Tuscaloosa and West Alabama — including Northport, Alberta City, Cottondale, Brookwood, Vance, Forest Lake, Woodland Forrest, Coaling, Gordo, Moundville, and surrounding communities. Call Joe at (803) 784-7672 to confirm your specific address is in our area.",
  },
  {
    id: "repairs-stuff",
    question: "Can you still help if my house needs a lot of repairs or is full of stuff?",
    answer:
      "Yes. We buy houses as-is in any condition — fire damage, mold, foundation issues, heavy clutter, years of deferred maintenance. You don't need to clean, repair, or stage anything before selling. Leave what you don't want behind and we handle it after closing.",
  },
  {
    id: "why-started",
    question: "Why did you start buying houses for cash in Tuscaloosa?",
    answer:
      "Joe started We Buy Tuscaloosa Homes because he saw how stressful and complicated selling a house could be for owners in difficult situations — foreclosure, inherited properties, divorces, rental properties that had run their course. His goal was to offer a local, honest, and straightforward alternative to a process that often felt designed for anyone but the seller.",
  },
  {
    id: "before-call",
    question: "What should I have ready before I call We Buy Tuscaloosa Homes?",
    answer:
      "Nothing. Just your address and a general sense of your home's condition and ideal timeline. Joe will ask a few quick questions, then schedule a walkthrough at your convenience. No paperwork, no credit check, no commitment required upfront.",
  },
] as const;

export const whyLocalMattersContent = {
  eyebrow: "Why Local Matters · 2026",
  heading: "Why a local Tuscaloosa cash buyer matters in 2026",
  description:
    "Tuscaloosa's housing market — shaped by the University of Alabama, the medical corridor, and a steady base of employer-driven demand — is different from any other Alabama city. A buyer who actually knows the market can price more accurately and close faster. Here's what local ownership means in practice.",
  localHeader: "We Buy Tuscaloosa Homes — Local",
  nationalHeader: "National / Out-of-Market Buyers",
  footnote:
    "For current Tuscaloosa market stats, the Alabama Association of Realtors publishes quarterly reports. Median sale prices in 2026 are running around $271,050 — Joe uses the same data but explains it in plain terms.",
  footnoteLink: {
    label: "Alabama Association of Realtors",
    href: "https://www.alabamarealtors.com/market-stats",
  },
} as const;

export const aboutMeetJoeContent = {
  eyebrow: "Meet Joe LeBlanc",
  heading: "Meet Joe LeBlanc and the We Buy Tuscaloosa Homes team",
  roleLabel: "Founder, Owner & CEO",
  cardCredentials: [
    "University of South Carolina Graduate",
    "10+ Years Business Experience",
    "5.0 ★ · 103+ Google Reviews",
    "Handles Every Deal Personally",
  ],
  paragraphs: [
    "Joe LeBlanc is the Founder, Owner, and CEO of We Buy Tuscaloosa Homes — and he is the team. There's no sales staff, no call center, and no investors you'll never meet. When you call (803) 784-7672, you're talking to the person who will buy your house, walk through your property, and sign the closing documents.",
    "A graduate of the University of South Carolina with over a decade of business and real estate experience, Joe leads the High Noon Home Buyers family of brands in the Tuscaloosa market. He personally reviews every property, builds every offer, and stays in contact through closing. No hand-offs. No surprises.",
    "Joe's approach is direct: he shows you the full math on his offer, encourages you to compare it with what a realtor would net you after fees and repairs, and gives you time to decide. He'll tell you honestly if a traditional listing is likely to serve you better — because a satisfied seller who makes a well-informed decision is more valuable to him than a closed deal with a seller who regrets it.",
    "We Buy Tuscaloosa Homes operates from 1520 Stillwater Dr, Tuscaloosa, AL 35406. Call, text, or fill out the form and Joe will respond personally.",
  ],
  blockquote:
    "My goal has never been to buy as many houses as possible. It's to help people who are in a difficult situation find a real, local option — and to be honest when that option isn't me.",
} as const;

export const aboutHeroContent = {
  eyebrow: "About Us · Tuscaloosa, Alabama",
  description:
    "We Buy Tuscaloosa Homes is a local, founder-led cash home buying company. Joe LeBlanc personally handles every call, every walkthrough, and every offer — no call centers, no franchise operators, no pressure.",
  badges: [
    "5.0 ★ · 103+ Reviews",
    "Close in 7 Days",
    "Locally Owned",
  ],
  joeQuote:
    "I started this company because selling a house shouldn't add more stress to an already hard situation. Call me directly — I'll give you a fair number and honest advice, even if that means recommending a realtor.",
  joeCredentials: [
    "University of South Carolina Graduate",
    "10+ Years Business Experience",
    "High Noon Home Buyers Family",
    "Personal — not a call center or franchise",
  ],
} as const;

export const aboutCtaBands = [
  {
    title: "Want to verify we're the real deal before you call?",
    subtitle:
      "Ask Joe for written proof of funds or read our Google reviews. We encourage it.",
    primaryLabel: "Get My Free Cash Offer →",
    secondaryLabel: "Call Joe Directly",
  },
  {
    title: "Ready to talk with Joe about your Tuscaloosa home?",
    subtitle:
      "Written offer within 48 hours. No repairs, no fees, no obligation to accept.",
    primaryLabel: "Get My Free Cash Offer →",
    secondaryLabel: "Call (803) 784-7672",
  },
] as const;
