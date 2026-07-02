/** Canonical situation card images — same id = same image on every location page. */
export const situationImages = {
  foreclosure: "/assets/behind_on_payment___foreclosure_.webp",
  "inherited-probate": "/assets/inherited_house_in_tuscaloosa.webp",
  divorce: "/assets/divcorce_sales_in_tuscaloosa__.webp",
  "tired-landlord": "/assets/tired_landlord_.webp",
  "sell-as-is": "/assets/house_that_needs_major_repair.webp",
  relocating: "/assets/relocation_for_work_.webp",
  "property-taxes": "/assets/behind_on_property_taxes_.webp",
  "behind-on-payments-life-changes":
    "/assets/behind_on_payments_or_dealing.webp",
  "parent-seller": "/assets/_parents_who_bought_for_their_student.webp",
  "out-of-town-parents": "/assets/out_of_town_parents.webp",
} as const;

export type SituationImageKey = keyof typeof situationImages;

const situationImageAliases: Record<string, SituationImageKey> = {
  "facing-foreclosure": "foreclosure",
  "behind-on-taxes": "foreclosure",
  inherited: "inherited-probate",
  "major-repairs": "sell-as-is",
  "relocation-vacant": "relocating",
  "out-of-town-owner": "relocating",
  "student-rental": "tired-landlord",
  "faculty-residents": "relocating",
  "cash-home-buyers": "relocating",
  "fire-damage": "sell-as-is",
  "water-damage": "sell-as-is",
  "mold-structural": "sell-as-is",
  bankruptcy: "sell-as-is",
};

export function getSituationImage(id: string): string {
  const key = situationImageAliases[id] ?? id;
  return (
    situationImages[key as SituationImageKey] ?? situationImages["sell-as-is"]
  );
}
