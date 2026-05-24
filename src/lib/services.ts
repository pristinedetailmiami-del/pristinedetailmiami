import full from "@/assets/pristine/full.jpg";
import int2 from "@/assets/pristine/int2.jpg";
import ext2 from "@/assets/pristine/ext2.jpg";
import addons from "@/assets/pristine/addons.jpg";
import correction from "@/assets/pristine/correction.jpg";
import coating from "@/assets/pristine/coating.jpg";

export type Service = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  sedanPrice: number;
  suvPrice: number;
  duration: string;
  image: string;
  includes: string[];
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "full",
    name: "Pristine Full Detail",
    tagline: "Interior + Exterior",
    description:
      "The complete restoration. Hand wash, decontamination, clay bar, ceramic sealant — paired with steam-cleaned interior and leather conditioning.",
    sedanPrice: 250,
    suvPrice: 280,
    duration: "4–5 hrs",
    image: full,
    featured: true,
    includes: [
      "Scratch-free hand wash",
      "Iron decontamination & clay bar",
      "2–4 month ceramic sealant",
      "Full interior steam cleaning",
      "Leather & vinyl conditioning",
      "Odor neutralizing treatment",
    ],
  },
  {
    id: "interior",
    name: "Pristine Interior",
    tagline: "Deep clean inside",
    description:
      "Vacuum, steam, and crevice cleaning. Leather and vinyl get conditioned and UV-protected. Odors neutralized at the source.",
    sedanPrice: 150,
    suvPrice: 180,
    duration: "2–3 hrs",
    image: int2,
    includes: [
      "Full vacuum & detail",
      "Steam clean all surfaces",
      "Leather conditioning",
      "UV protectant dressing",
      "Odor neutralizer",
    ],
  },
  {
    id: "exterior",
    name: "Pristine Exterior",
    tagline: "Glossy paint protection",
    description:
      "Safe scratch-free wash, iron decontamination, light clay, and a ceramic sealant that lasts 2–4 months.",
    sedanPrice: 120,
    suvPrice: 140,
    duration: "1.5–2 hrs",
    image: ext2,
    includes: [
      "Scratch-free hand wash",
      "Wheel & tire cleaning",
      "Iron decontamination",
      "Light clay bar treatment",
      "2–4 month ceramic sealant",
    ],
  },
  {
    id: "correction",
    name: "Paint Correction",
    tagline: "Remove swirls & defects",
    description:
      "Machine polishing to eliminate swirls, scratches, and oxidation. Restores depth, gloss, and clarity to your paint.",
    sedanPrice: 300,
    suvPrice: 350,
    duration: "6–10 hrs",
    image: correction,
    includes: [
      "Multi-stage paint inspection",
      "Compound & polish stages",
      "Swirl & scratch removal",
      "Oxidation removal",
      "Mirror-gloss finish",
    ],
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    tagline: "3–5 year protection",
    description:
      "A durable hydrophobic layer that enhances gloss, repels water, and shields against UV, contaminants, and harsh weather.",
    sedanPrice: 350,
    suvPrice: 400,
    duration: "1 day",
    image: coating,
    includes: [
      "Paint prep & decontamination",
      "Single-layer ceramic application",
      "Hydrophobic finish",
      "UV & chemical protection",
      "3–5 year lifetime",
    ],
  },
  {
    id: "addons",
    name: "Extras & Add-Ons",
    tagline: "À la carte upgrades",
    description:
      "Carpet shampoo, pet hair removal, engine bay detail, headlight restoration — add anything to any package.",
    sedanPrice: 40,
    suvPrice: 160,
    duration: "Varies",
    image: addons,
    includes: [
      "Carpet & seat shampoo · $80",
      "Pet hair removal · $60",
      "Sap & tar removal · $50",
      "Engine bay detail · $40",
      "Trim dressing · $40",
      "Headlight restoration · $160",
    ],
  },
];
