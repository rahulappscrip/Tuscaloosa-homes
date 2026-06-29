import type {
  ComparisonColumnData,
  ComparisonRowData,
} from "@/components/ComparisonTable";

export const homepageComparisonColumns: ComparisonColumnData[] = [
  { key: "label", header: "Criteria" },
  { key: "joe", header: "Sell to Joe (Local Cash Buyer)", highlight: true },
  { key: "agent", header: "List With an Agent" },
  { key: "other", header: "Sell to Other Investors" },
];

export const homepageComparisonRows: ComparisonRowData[] = [
  {
    label: "Time to close",
    values: {
      joe: { text: "7–21 days, on your schedule", positive: true },
      agent: { text: "Often 30–60+ days from listing to closing" },
      other: { text: "Varies; some still rely on loans" },
    },
  },
  {
    label: "Repairs & cleaning",
    values: {
      joe: { text: "None — sell as-is", positive: true },
      agent: { text: "Often need repairs and deep cleaning" },
      other: { text: "Many buy as-is, but terms vary" },
    },
  },
  {
    label: "Showings",
    values: {
      joe: { text: "None — one quick visit", positive: true },
      agent: { text: "Multiple showings and open houses" },
      other: { text: "Usually minimal, but unclear process" },
    },
  },
  {
    label: "Commissions",
    values: {
      joe: { text: "0% commission", positive: true },
      agent: { text: "Typically 5–6% of sale price" },
      other: { text: "Usually 0%, but some charge fees" },
    },
  },
  {
    label: "Closing costs",
    values: {
      joe: { text: "Joe pays standard closing costs", positive: true },
      agent: { text: "Seller often pays a portion" },
      other: { text: "Depends on the buyer" },
    },
  },
  {
    label: "Certainty of closing",
    values: {
      joe: { text: "High — cash, no financing", positive: true },
      agent: { text: "Subject to financing & appraisal risk" },
      other: { text: "Varies; some wholesale/assign" },
    },
  },
  {
    label: "Who you deal with",
    values: {
      joe: {
        text: "Directly with Joe, local Tuscaloosa buyer",
        positive: true,
      },
      agent: { text: "Listing agent, buyer's agent & third parties" },
      other: { text: "Could be local or a national call center" },
    },
  },
  {
    label: "Stress level",
    values: {
      joe: { text: "Low — simple, no-pressure steps", positive: true },
      agent: { text: "Higher — longer timeline, more moving parts" },
      other: { text: "Varies widely by company" },
    },
  },
];
