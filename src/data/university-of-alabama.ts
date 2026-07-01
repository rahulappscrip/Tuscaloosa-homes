import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";
import { getSituationImage } from "./situationImages";

export const uaHeroBenefits = [
  "Fast response: share a few details today and get a cash offer quickly, often within about 24–48 hours of our walkthrough.",
  "As-is condition: student wear-and-tear, vacancies, or clutter are all okay — you don't have to fix or clean anything.",
  "Flexible timing: we work around leases, move-out dates, and your plans, whether you live in Tuscaloosa or out of state.",
] as const;

export const uaHeroStats = [
  { value: "Cash Offers", unit: "", label: "Within 24 Hours" },
  { value: "Close in 7 Days", unit: "", label: "Or on your timeline" },
  { value: "No Repairs · No Fees", unit: "", label: "Buy completely as-is" },
  {
    value: "Local Tuscaloosa Team",
    unit: "",
    label: "We know the University of Alabama area",
  },
] as const;

export const uaWhyCashBenefits = [
  "Fast, predictable timeline – Local buyers already know Tuscaloosa and the campus area, so they can review your property quickly and close in a straightforward timeframe that works for you.",
  "As-is condition — no student-turnover stress – You can sell house as-is Tuscaloosa without repainting after roommates, replacing damaged flooring, or doing a deep clean. You can leave behind old furniture or anything students left in closets and we'll handle it after closing.",
  "No showings or roommate disruptions – You avoid weeks of showings with students, roommates, or families coming through your home. A local cash buyer will typically do one short walkthrough or virtual tour and then make an offer.",
  "Fewer headaches and deal failures – Cash offers don't depend on bank financing, so there are fewer contingencies and less risk of the deal falling through at the last minute.",
  "Grounded in UA-area realities – A local buyer factors in real rental potential near campus, typical repair needs for student rentals, parking, and walkability to UA, instead of using a generic formula from another market.",
] as const;

export const uaUseCaseSituations = [
  {
    id: "student-rental",
    title: "Student Rental Headaches",
    description:
      "Cash sale best if you're done dealing with noise, damage, or constant roommate changes and don't want to fund major repairs. Listing better if the home is already renovated, you have responsible tenants, and you're willing to ride out one more lease cycle.",
    image: getSituationImage("student-rental"),
  },
  {
    id: "parent-seller",
    title: "Parents Who Bought for Their Student",
    description:
      "Cash sale best if you live out of town and don't want to become a long-distance landlord. Listing better if the property is in great shape, move-in ready, and you're comfortable waiting for the right buyer.",
    image: getSituationImage("parent-seller"),
  },
  {
    id: "out-of-town-owner",
    title: "Out-of-Town Owner of a UA-Area Rental",
    description:
      "Cash sale best if you're facing frequent repairs, long vacancies, or trouble finding trustworthy local help. Listing better if the home is updated, occupied by good tenants, and you don't mind the time and complexity of a traditional sale.",
    image: getSituationImage("out-of-town-owner"),
  },
  {
    id: "inherited",
    title: "Inherited UA-Area House",
    description:
      "Cash sale best if the house needs work, is full of belongings, or multiple heirs want to settle quickly. Listing better if the home is nearly market-ready and everyone agrees to invest in cleaning and repairs.",
    image: getSituationImage("inherited"),
  },
  {
    id: "foreclosure",
    title: "Behind on Payments or Facing Foreclosure",
    description:
      "Cash sale best if you need to move quickly, avoid further damage to your credit, and can't afford repairs or months of holding costs. Listing better if you have plenty of equity, the home is already show-ready, and you have enough time to sell traditionally.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "divorce",
    title: "Divorce or Major Life Change",
    description:
      "Cash sale best if you want a simple, predictable closing date and fewer showings while life is already stressful. Listing better if both parties agree on repairs, timing, and are comfortable waiting for a higher-price buyer.",
    image: getSituationImage("divorce"),
  },
] as const;

export const uaProcessSteps = [
  {
    num: 1,
    title: "Tell Us About Your UA-Area Property",
    description:
      "Share the address, basic condition, and whether it's rented to students or vacant. By phone, text, or a short online form.",
  },
  {
    num: 2,
    title: "We Review UA-Area Comps and See the House",
    description:
      "We look at recent Tuscaloosa sales and rental activity near UA, then schedule a quick walkthrough or virtual tour.",
  },
  {
    num: 3,
    title: "Get Your Straightforward Cash Offer",
    description:
      "A simple written cash offer that shows your price and any costs we are covering. No obligation, no pressure.",
  },
  {
    num: 4,
    title: "Choose Your Closing Date and Get Paid",
    description:
      "We work with a trusted local title company. You pick a date around move-out, semester timing, or your plans.",
  },
] as const;

export const uaTestimonialSlides = [
  {
    kind: "text" as const,
    quote:
      "We had a house a few blocks from campus that was worn out from years of student renters. We didn't want to remodel or keep managing tenants. The local team walked us through the numbers, bought it as-is, and worked around our tenants' move-out date so no one was rushed.",
    signature: "Former UA Rental Owner",
    meta: "Made selling our student rental simple",
    initial: "U",
  },
  {
    kind: "text" as const,
    quote:
      "After our daughter graduated from UA, we kept her Tuscaloosa house as a rental for a couple of years. Managing it from several states away became stressful. We were able to sign everything electronically, and the local title company handled closing so we didn't have to fly back.",
    signature: "Out-of-State Parent-Seller",
    meta: "Easy remote sale from out of state",
    initial: "P",
  },
  {
    kind: "text" as const,
    quote:
      "Our house near the University of Alabama was in decent shape, and they actually explained how listing with an agent could give us a little more if we had time to wait. We still chose the cash offer because we needed to move quickly, but we liked that they were upfront about all our choices.",
    signature: "Local Homeowner",
    meta: "Honest about options, even when listing made sense",
    initial: "L",
  },
] as const;

export const uaComparisonColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  {
    key: "cash",
    header: "Cash Sale to We Buy Tuscaloosa Homes",
    highlight: true,
  },
  { key: "list", header: "List With an Agent in Tuscaloosa" },
  { key: "rental", header: "Keep as UA-Area Rental" },
];

export const uaComparisonRows: ComparisonRowData[] = [
  {
    label: "Timeline",
    values: {
      cash: {
        text: "Short, predictable; close in weeks once you approve the offer",
        positive: true,
      },
      list: {
        text: "Often months from listing to closing, especially if repairs are needed",
      },
      rental: {
        text: "Ongoing; income over years, but no clear \"end date\"",
      },
    },
  },
  {
    label: "Repairs & Updates",
    values: {
      cash: {
        text: "None required; we buy sell house as-is Tuscaloosa",
        positive: true,
      },
      list: {
        text: "Usually need repairs, paint, cleaning, and staging to compete",
      },
      rental: {
        text: "Ongoing repairs and turn costs between student tenants",
      },
    },
  },
  {
    label: "Showings & Access",
    values: {
      cash: { text: "One walkthrough or virtual visit", positive: true },
      list: {
        text: "Multiple showings and open houses, often during evenings/weekends",
      },
      rental: {
        text: "Repeated showings when re-renting; tenant access issues",
      },
    },
  },
  {
    label: "Fees & Commissions",
    values: {
      cash: {
        text: "No agent commission; typical closing costs often handled in offer structure",
        positive: true,
      },
      list: { text: "Agent commission plus normal seller closing costs" },
      rental: { text: "No commission, but ongoing expenses and vacancies" },
    },
  },
  {
    label: "Student Tenants",
    values: {
      cash: {
        text: "We can buy with tenants in place and take over leases",
        positive: true,
      },
      list: {
        text: "Showings may disturb tenants; some buyers avoid student rentals",
      },
      rental: {
        text: "Must manage noise, complaints, move-outs, collections",
      },
    },
  },
  {
    label: "Risk of Falling Through",
    values: {
      cash: { text: "Low; no bank financing contingencies", positive: true },
      list: {
        text: "Higher; buyer financing, appraisals, repairs can derail closing",
      },
      rental: {
        text: "Market and rental risk: vacancies, rent drops, property damage",
      },
    },
  },
  {
    label: "Your Time & Energy",
    values: {
      cash: {
        text: "Very low; simple process with local title company",
        positive: true,
      },
      list: {
        text: "High; coordinating repairs, cleaners, photos, showings",
      },
      rental: {
        text: "High; long-term management or property manager oversight",
      },
    },
  },
];

export const uaWhoWeHelpSituations = [
  {
    id: "out-of-town-parents",
    title: "Out-of-Town Parents",
    description:
      "You purchased a house or condo near UA for your child, and now they've graduated. A cash sale lets you wrap things up quickly without managing repairs or showings.",
    image: getSituationImage("out-of-town-parents"),
  },
  {
    id: "tired-landlord",
    title: "Local Landlords With Student Rentals",
    description:
      "You're a tired landlord Tuscaloosa who's ready to step back. We buy occupied or vacant properties and can take over leases.",
    image: getSituationImage("tired-landlord"),
  },
  {
    id: "foreclosure",
    title: "Owners Facing Foreclosure",
    description:
      "If you're trying to stop foreclosure Tuscaloosa, a direct sale can sometimes help you avoid a drawn-out process and move on with more control.",
    image: getSituationImage("foreclosure"),
  },
  {
    id: "divorce",
    title: "Owners in Divorce or Transition",
    description:
      "A straightforward cash sale can simplify things when you don't want months of showings, negotiations, and uncertainty.",
    image: getSituationImage("divorce"),
  },
  {
    id: "inherited-probate",
    title: "Inherited Property Owners",
    description:
      "You inherited a sell inherited house Tuscaloosa near the University of Alabama. We can buy as-is and work with the title company.",
    image: getSituationImage("inherited-probate"),
  },
  {
    id: "faculty-residents",
    title: "Faculty, Staff & Long-Time Residents",
    description:
      "You might own a home in Hillcrest, Northport, or other Tuscaloosa neighborhoods and want to downsize or relocate.",
    image: getSituationImage("faculty-residents"),
  },
] as const;

export const uaMarketStats = [
  {
    value: "$296.5K–$319K",
    label: "Median Home Price, Tuscaloosa / UA Area",
    accent: "teal" as const,
  },
  {
    value: "Premium",
    label: "UA-Area Pricing vs Citywide Average",
    accent: "navy" as const,
  },
  {
    value: "Cyclical",
    label: "Rent Demand Tied to Academic Calendar",
    accent: "teal" as const,
  },
] as const;

export const uaMarketParagraphs = [
  "The housing market around the University of Alabama in Tuscaloosa is competitive, with UA-area homes often commanding a premium when they're updated and student-ready — but older or heavily worn properties can sit longer or sell at a discount. Recent data shows a median home price around $296,500–$319,000 in the Tuscaloosa / UA area, which reflects strong demand but also higher expectations from buyers.",
  "UA-area pricing vs. citywide — Homes close to the University of Alabama tend to list and sell above broader Tuscaloosa averages when they're in good shape, with parking and layouts that work for students or young professionals.",
  "Condition matters more near campus — Buyers and renters often compare multiple similar properties online. Houses with dated kitchens, worn flooring, or student damage usually need significant updates to compete — or they fit best with a cash buyer.",
  "Days on market can stretch for fixer-uppers — Move-in-ready UA-area homes may go quickly, while properties that need work can sit or face price reductions before the right buyer appears.",
  "If your property is updated, clean, and easy to show, listing might bring top-dollar offers. If your house is older, tenant-worn, vacant, or inherited, a fair cash offer can be a better fit: fewer surprises, clearer timing, and no need to invest more money before you sell.",
] as const;

export const uaPricingParagraphs = [
  "When you sell a house near the University of Alabama for cash to We Buy Tuscaloosa Homes, you don't pay any agent commission, and there are no hidden fees added on at closing. In a traditional Alabama sale, sellers often pay several percent of the sale price in commissions and closing costs when they list with an agent.",
  "Agent Commissions — With a traditional listing, you usually pay a percentage of the sale price to your listing agent and sometimes additional fees. With us, there is no agent commission because we're the direct buyer.",
  "Repairs and Prep — Listing often requires repairs, updates, cleaning, and staging to get the house ready. With a cash sale, we buy as-is and factor needed work into the offer so you're not paying contractors upfront.",
  "Closing Costs — In a standard sale, Alabama sellers can expect to contribute to closing costs on top of commissions. In a direct cash sale, typical closing fees are often handled within the way the offer is structured so you know what, if anything, you'll pay.",
  "Holding Costs — While you wait to sell traditionally, you continue paying taxes, insurance, utilities, and possibly mortgage payments and turn costs between student tenants. A faster cash sale can reduce those ongoing expenses.",
  "The cash price we offer near UA may be lower than a top-of-market list price, but many sellers find that when they remove repairs, commissions, and months of holding costs, the net result is closer than they expected — and much less stressful. Every written offer clearly shows the amount you'll receive and how any costs are handled so you can compare it to what listing might net you.",
] as const;

export const uaServiceAreaParagraphs = [
  "We buy houses throughout the University of Alabama area and across greater Tuscaloosa — not just a few streets next to campus. If your property is in or around Tuscaloosa County, there's a good chance we can make you a cash offer.",
  "Near-Campus and University Area — University Area / near campus and streets within a short drive or walk to UA. We buy single-family homes, duplexes, small multifamily properties, and student rentals. These properties often have strong rental potential but can be challenging to keep up with between semesters. We can buy them with or without tenants and in any condition.",
  "Central and East Tuscaloosa — Forest Lake, Alberta City, and Cottondale. Many of these homes have served both students and families over the years. Whether your property needs cosmetic updates or more major repairs, we can look at buying it as-is.",
  "North of the River / Northport — Northport and surrounding neighborhoods. These areas are popular with commuters and people connected to UA who prefer a bit more space. If you have a rental or family home there and want a straightforward sale, we're interested.",
  "South and Other Tuscaloosa Neighborhoods — Hillcrest and other south Tuscaloosa communities, plus additional Tuscaloosa County pockets near major routes and employers. We're open to houses across the wider Tuscaloosa area. Even if your neighborhood isn't listed here by name, you're welcome to reach out.",
  "If you're searching for \"sell house near me\" in Tuscaloosa and your property is anywhere in or around the UA area, start by telling us your address and situation — we'll quickly let you know if we can buy.",
] as const;

export const uaWhereWeBuyAreas = [
  {
    header: "Near Campus",
    areas: [
      { name: "University Area / near campus", primary: true },
      { name: "Walking distance to UA", primary: true },
    ],
  },
  {
    header: "Central & East",
    areas: [
      { name: "Forest Lake", primary: false },
      { name: "Alberta City", primary: false },
      { name: "Cottondale", primary: false },
    ],
  },
  {
    header: "North & South",
    areas: [
      { name: "Northport", primary: false },
      { name: "Hillcrest", primary: false },
      { name: "Greater Tuscaloosa County", primary: false },
    ],
  },
] as const;

export const uaMeetJoeParagraphs = [
  "We Buy Tuscaloosa Homes is a local, founder-led home-buying company — not a national franchise or anonymous call center. When you contact us about a house near the University of Alabama, you're talking directly with Joe LeBlanc, the owner, or a small local team that lives and works in Tuscaloosa.",
  "We focus our time on UA-area houses and Tuscaloosa neighborhoods because we know how different a student rental on a busy street is from a quiet Hillcrest family home. That local focus helps us understand real UA-area repair costs and rental demand, make transparent written cash offers, and coordinate closings through a trusted Tuscaloosa title company.",
  "We're committed to honest, no-pressure conversations. If we think you'll do better listing with an agent or holding the property as a rental, we'll tell you that and explain why, instead of pushing you into a deal that doesn't fit.",
] as const;

export const uaFaqs = [
  {
    id: "how-fast",
    question:
      "How fast can I sell my house near the University of Alabama for cash?",
    answer:
      "You can sell your house near the University of Alabama for cash in a short timeframe, often in just a few weeks or less, depending on title and your schedule. A local cash home buyer in Tuscaloosa will usually review your property details, make a quick offer, and then let you choose a closing date. If you have student tenants or need to wait for a move-out date, they can time closing around that, so you are not forced into a single deadline.",
  },
  {
    id: "repairs",
    question:
      "Do I need to make repairs or clean out my UA-area house before you buy it?",
    answer:
      "No. You can sell your UA-area house as-is without doing repairs or deep cleaning first. A local cash home buyer in Tuscaloosa will factor the property's condition and any needed work into the offer, including wear and tear from student renters. You can leave behind unwanted furniture or belongings, and they will handle trash-out and updates after closing. There are no later repair deductions added on, so you know where you stand before you decide.",
  },
  {
    id: "offer-math",
    question:
      "How do you decide what my house near the University of Alabama is worth?",
    answer:
      "Your house near the University of Alabama is valued by looking at recent Tuscaloosa sales, the home's condition, and its rental potential near campus. A local cash home buyer will review similar nearby houses or student rentals, estimate a realistic market value, then subtract repair and update costs. They also consider things like parking, layout for roommates, and distance to UA. The goal is to give you a clear cash number that reflects today's local market without hidden math.",
  },
  {
    id: "fair-offer",
    question: "How can I tell if a cash offer for my Tuscaloosa house is fair?",
    answer:
      "You can tell if a cash offer for your Tuscaloosa house is fair by comparing it to recent local sales and what you would net from a traditional sale. Look at similar homes that sold nearby, then subtract what you would spend on repairs, commissions, closing costs, and months of holding the property. A local cash home buyer in Tuscaloosa should be willing to walk you through their numbers and compare their offer to what listing might realistically leave in your pocket.",
  },
  {
    id: "legitimate",
    question: "How do I know your home-buying company in Tuscaloosa is legitimate?",
    answer:
      "You can check if a home-buying company in Tuscaloosa is legitimate by verifying their local presence, reputation, and how they handle closing. Look for a real Tuscaloosa address and phone number, online reviews, and clear information about who runs the company. Ask who the title company or closing attorney will be and insist on a written offer and contract. A trustworthy local cash home buyer will answer your questions, provide documents, and never pressure you to sign on the spot.",
  },
  {
    id: "tenants",
    question:
      "Can I sell a student rental near the University of Alabama if there are tenants still in place?",
    answer:
      "Yes. You can sell a student rental near the University of Alabama even if tenants are still living there. A local cash home buyer in Tuscaloosa is used to buying occupied rentals and will review your leases, rent amounts, and move-out dates. In many cases, they can honor existing leases or work out timing so you do not have to evict anyone first. That lets you sell without disrupting your student tenants or waiting for semesters to end.",
  },
  {
    id: "out-of-town",
    question:
      "What if I live out of town and own a house near the University of Alabama?",
    answer:
      "You can sell a house near the University of Alabama even if you live out of town or out of state. A local cash home buyer in Tuscaloosa can handle most steps by phone, email, and electronic signatures, and a local title company manages the paperwork and closing. You usually do not need to travel back for showings or signings, which is especially helpful for parents or investors who no longer want to manage a UA-area property from a distance.",
  },
  {
    id: "closing-costs",
    question:
      "What are typical closing costs for home sellers in Alabama, and how are they different with a cash sale?",
    answer:
      "In a traditional Alabama sale, sellers often pay several percent of the price in commissions and closing costs, but a direct cash sale usually looks very different. When you list with an agent, you pay commission plus various fees and repairs. With a local cash home buyer in Tuscaloosa, there are no agent commissions, and typical closing fees are often covered or clearly spelled out in the offer. That way you know your approximate walk-away amount before you say yes.",
  },
  {
    id: "semester-timing",
    question:
      "Can I sell my house near UA between semesters or during the school year?",
    answer:
      "Yes. You can sell your house near UA at any time of year, whether it is between semesters or during the school year. A local cash home buyer in Tuscaloosa will look at your current leases and move-out dates, then plan closing around what works for you and your tenants. Some owners prefer to sell between semesters, but there is no rule that you must wait. The goal is to make timing fit your situation, not the other way around.",
  },
  {
    id: "property-types",
    question:
      "What types of properties near the University of Alabama will you buy?",
    answer:
      "A local cash home buyer near the University of Alabama will look at almost any residential property type. That includes single-family houses, small multifamily buildings, condos, townhomes, and student rentals close to campus, plus older or fixer-upper homes around Tuscaloosa. Condition is flexible, so properties with dated finishes, deferred maintenance, or heavy student wear can still qualify. If it is a residential house or small rental near UA, it is very likely worth a conversation.",
  },
  {
    id: "after-request",
    question:
      "What happens after I request a cash offer for my Tuscaloosa house?",
    answer:
      "After you request a cash offer for your Tuscaloosa house, the next steps are simple and low-pressure. A local cash home buyer will review your basic property details, then set up a quick walkthrough or virtual visit to see the home or student rental. From there, they prepare a straightforward written offer that shows your cash amount and any costs. If you like it, a local title company schedules closing; if you do not, you can simply decline and move on.",
  },
] as const;

export const uaPageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can I sell my house near the University of Alabama for cash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can sell your house near the University of Alabama for cash in a short timeframe, often in just a few weeks or less, depending on title and your schedule. A local cash home buyer in Tuscaloosa will review your details, make an offer, and you will choose a closing date.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to make repairs or clean out my UA-area house before you buy it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You can sell your UA-area house as-is without doing repairs or deep cleaning first. A local cash home buyer in Tuscaloosa will factor the property's condition and any needed work into the offer, including wear and tear from student renters. You can leave behind unwanted furniture or belongings, and they will handle trash-out and updates after closing. There are no later repair deductions added on, so you know where you stand before you decide.",
        },
      },
      {
        "@type": "Question",
        name: "How do you decide what my house near the University of Alabama is worth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your house near the University of Alabama is valued by looking at recent Tuscaloosa sales, the home's condition, its rental potential near campus. A local cash home buyer will review similar nearby houses or student rentals, estimate a realistic market value, then subtract repair and update costs. They also consider things like parking, layout for roommates, and distance to UA. The goal is to give you a clear cash number that reflects today's local market without hidden math.",
        },
      },
      {
        "@type": "Question",
        name: "How can I tell if a cash offer for my Tuscaloosa house is fair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can tell if a cash offer for your Tuscaloosa house is fair by comparing it to recent local sales and what you would net from a traditional sale. Look at similar homes that sold nearby, then subtract what you would spend on repairs, commissions, closing costs, and months of holding the property. A local cash home buyer should clearly explain their numbers so you can compare options.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know your home-buying company in Tuscaloosa is legitimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can verify a home-buying company in Tuscaloosa by checking for a real local address and phone, reading reviews, and confirming they close through a reputable title company or attorney. A legitimate local cash buyer will give written offers and answer questions without pressure.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sell my house near UA between semesters or during the school year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can sell your house near UA at any time of year. A local cash home buyer in Tuscaloosa will review your leases and move-out dates and work around them, so you do not have to wait for a specific semester break to move forward.",
        },
      },
      {
        "@type": "Question",
        name: "What if I live out of town and own a house near the University of Alabama?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can sell a house near the University of Alabama even if you live out of town. A local cash home buyer in Tuscaloosa can handle details by phone, email, and electronic signatures so you normally do not have to travel for showings or closing.",
        },
      },
      {
        "@type": "Question",
        name: "What are typical closing costs for home sellers in Alabama, and how are they different with a cash sale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In a traditional Alabama sale, sellers often pay several percent of the price in commissions and closing costs. With a local cash home buyer in Tuscaloosa, there are no agent commissions, and typical closing fees are often covered or clearly explained in the written offer.",
        },
      },
      {
        "@type": "Question",
        name: "What types of properties near the University of Alabama will you buy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A local cash home buyer near the University of Alabama will look at almost any residential property type. That includes single-family houses, small multifamily buildings, condos, townhomes, and student rentals close to campus, plus older or fixer-upper homes around Tuscaloosa. Condition is flexible, so properties with dated finishes, deferred maintenance, or heavy student wear can still qualify. If it is a residential house or small rental near UA, it is very likely worth a conversation.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after I request a cash offer for my Tuscaloosa house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After you request a cash offer for your Tuscaloosa house, the next steps are simple and low-pressure. A local cash home buyer will review your basic property details, then set up a quick walkthrough or virtual visit to see the home or student rental. From there, they prepare a straightforward written offer that shows your cash amount and any costs. If you like it, a local title company schedules closing; if not, you can decline with no obligation.",
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
    address: {
      "@type": "PostalAddress",
      streetAddress: "1520 Stillwater Dr",
      addressLocality: "Tuscaloosa",
      addressRegion: "AL",
      postalCode: "35406",
      addressCountry: "US",
    },
    areaServed: { "@type": "Country", name: "United States" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "15:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joe LeBlanc",
    jobTitle: "Founder, Owner, and CEO",
    worksFor: {
      "@type": "LocalBusiness",
      name: "We Buy Tuscaloosa Homes",
      url: "https://www.webuytuscaloosahomes.com/",
    },
    founder: {
      "@type": "LocalBusiness",
      name: "We Buy Tuscaloosa Homes",
      url: "https://www.webuytuscaloosahomes.com/",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Sell a House Near the University of Alabama for Cash",
    description:
      "How to approach a cash sale near UA with a local Tuscaloosa buyer in simple steps.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Tell us about your UA-area property",
        text: "Share the address, basic condition, and whether it's rented to students or vacant.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "We review UA-area comps and see the house",
        text: "Our local team reviews recent Tuscaloosa sales and schedules a quick walkthrough or virtual tour.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get your straightforward cash offer",
        text: "We present a simple written cash offer showing your price and any costs covered.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Choose your closing date and get paid",
        text: "We work with a local title company in Tuscaloosa, and you pick a date that works around your move-out plans.",
      },
    ],
  },
] as const;
