export const sellerSituations = [
  {
    id: "foreclosure",
    footerLabel: "Facing Foreclosure",
    title: "Facing Foreclosure or Behind on Payments",
    description:
      "If you're behind on your mortgage or have a foreclosure date coming up, a quick cash sale can help you avoid months of stress and protect remaining equity. With Alabama foreclosure timelines tightening, a buyer who can close in about 7–21 days can be the difference between a sale and losing the home.",
    image: "/assets/Foreclosure.webp",
  },
  {
    id: "inherited-probate",
    footerLabel: "Inherited / Probate",
    title: "Inherited or Probate Property",
    description:
      "If you've inherited a house in Tuscaloosa you don't want to keep, repairs, taxes, and trips to the property add up fast. Joe can buy inherited and probate houses as-is and work with a local title company or attorney to handle the paperwork.",
    image: "/assets/Inherited.webp",
  },
  {
    id: "divorce",
    footerLabel: "Divorce",
    title: "Divorce or Separation",
    description:
      "A cash offer can help both parties reach a faster resolution without a long sale process in the middle of everything else. Joe keeps the process simple, private, and on your timeline.",
    image: "/assets/Divorce.webp",
  },
  {
    id: "tired-landlord",
    footerLabel: "Tired Landlord",
    title: "Tired Landlords and Rental Owners",
    description:
      "If you own rentals in or around Tuscaloosa and are tired of chasing rent, handling repairs, or dealing with problem tenants, Joe can often buy with tenants in place and let you exit quietly.",
    image: "/assets/Tenants.webp",
  },
  {
    id: "fire-damage",
    footerLabel: "Fire Damage",
    title: "Fire-Damaged Homes",
    description:
      "From recent fire damage to long-term smoke issues, Joe buys houses that may not be ready for a traditional listing — without asking you to restore the property first.",
    image: "/assets/Repairs.webp",
  },
  {
    id: "water-damage",
    footerLabel: "Water Damage",
    title: "Water-Damaged Properties",
    description:
      "Leaks, flooding, and water intrusion can scare off traditional buyers. Joe factors repair needs into a clear cash offer so you can move on without funding fixes upfront.",
    image: "/assets/Repairs.webp",
  },
  {
    id: "mold-structural",
    footerLabel: "Mold / Structural",
    title: "Mold, Structural, or Code Issues",
    description:
      "Homes with mold, foundation concerns, or code violations can sit on the market for months. Joe purchases properties in a wide range of conditions across Tuscaloosa and nearby areas.",
    image: "/assets/Repairs.webp",
  },
  {
    id: "behind-on-taxes",
    footerLabel: "Behind on Taxes",
    title: "Homeowners Behind on Taxes",
    description:
      "When property taxes are piling up, selling to a local cash buyer can stop the cycle and turn the property into cash instead of another bill.",
    image: "/assets/Foreclosure.webp",
  },
  {
    id: "bankruptcy",
    footerLabel: "Bankruptcy",
    title: "Selling During Bankruptcy",
    description:
      "If bankruptcy or financial hardship is part of your story, a direct cash sale can simplify one major asset and help you move forward with a clearer plan.",
    image: "/assets/Repairs.webp",
  },
  {
    id: "relocating",
    footerLabel: "Relocating",
    title: "Relocating for Work or Life Changes",
    description:
      "If you're moving out of Tuscaloosa and don't have months to wait, a local cash buyer can shorten your timeline, remove uncertainty, and let you focus on what's next.",
    image: "/assets/Speed.webp",
  },
  {
    id: "sell-as-is",
    footerLabel: "Sell As-Is",
    title: "Sell Your House As-Is",
    description:
      "No repairs, no cleaning, no staging. Joe buys homes in their current condition and handles the work after closing — a straightforward option when you want simplicity.",
    image: "/assets/Repairs.webp",
  },
  {
    id: "cash-home-buyers",
    footerLabel: "Cash Home Buyers",
    title: "Working With a Local Cash Home Buyer",
    description:
      "Traditional listings in Tuscaloosa often take weeks of showings and buyer financing. A local cash offer trades some price for speed and certainty — with no commissions or hidden fees.",
    image: "/assets/Speed.webp",
  },
] as const;

export function situationHref(id: (typeof sellerSituations)[number]["id"]) {
  return `#${id}`;
}
