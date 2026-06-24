export const sellerSituations = [
  {
    id: "foreclosure",
    footerLabel: "Facing Foreclosure",
    title: "Facing foreclosure or behind on payments",
    description:
      "A quick home sale for cash can help you avoid a completed foreclosure, protect remaining equity, and move on with a clean slate.",
    image: "/assets/Foreclosure.webp",
  },
  {
    id: "inherited-probate",
    footerLabel: "Inherited / Probate",
    title: "Inherited or probate property owners",
    description:
      "If you've inherited a house you don't want to fix up, Joe can buy it as-is and work with a local title company or attorney to handle the paperwork.",
    image: "/assets/Inherited.webp",
  },
  {
    id: "divorce",
    footerLabel: "Divorce",
    title: "People going through divorce or separation",
    description:
      "When you need to move on without a long sale process, a fast cash offer can help both parties reach a faster resolution.",
    image: "/assets/Divorce.webp",
  },
  {
    id: "tired-landlord",
    footerLabel: "Tired Landlord",
    title: "Tired landlords and rental owners",
    description:
      "If managing tenants in Tuscaloosa or nearby Alabama communities has become a burden, Joe can buy with tenants in place and let you exit quietly.",
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
    title: "Relocating for work or life changes",
    description:
      "If you're moving out of Tuscaloosa and don't have months to wait, we buy Tuscaloosa homes fast so you can stay on schedule.",
    image: "/assets/Speed.webp",
  },
  {
    id: "sell-as-is",
    footerLabel: "Sell As-Is",
    title: "Owners of houses needing major repairs",
    description:
      "From fire or water damage to long-deferred maintenance, we buy Tuscaloosa homes that aren't ready for a traditional listing — as-is, no repairs needed.",
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
