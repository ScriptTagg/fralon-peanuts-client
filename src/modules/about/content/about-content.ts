export type Reason = {
  id: number;
  title: string;
  description: string;
};

export type Reasons = {
  intro: string;
  reasons: Reason[];
};

export interface Review {
  id: number;
  message: string;
  reviewer: string;
  role: string;
}

export const about = {
  intro:
    "We are more than just a peanut brand, we’re a purpose-driven team with a passion for quality, community, and impact. Everything we do is guided by a clear vision, a meaningful mission, and values that shape every decision we make. Here's what fuels our journey and defines who we are:",
  identity: {
    vision:
      "To become Africa’s most loved peanut brand—celebrated for quality, nutrition, and community impact. We envision a future where every household enjoys wholesome, flavorful peanut products made with integrity and care.",
    values:
      "We never compromise on taste, freshness, or ingredients. Every product is made to meet the highest standards.We believe in building strong, lasting relationships rooted in trust and respect. We embrace creativity in developing exciting new flavors and formats to delight our customers.",
    mission:
      "To craft high-quality peanut products that nourish lives, support local farmers, and celebrate authentic flavor. Through sustainable sourcing, honest production, and innovation, we aim to bring joy to every bite while empowering the communities we serve.",
  },
};

export const whyUs: Reasons = {
  intro:
    "At Fralon Peanuts, we go beyond just selling peanut products—we deliver a wholesome experience rooted in quality, nutrition, and community. Here's why our customers keep coming back:",
  reasons: [
    {
      id: 1,
      title: "100% Natural",
      description:
        "We source only the best-grade peanuts, ensuring every product is rich in flavor, nutrition, and freshness—no compromises.",
    },
    {
      id: 2,
      title: "Naturally Nutritious",
      description:
        "No additives or preservatives. Our products are packed with plant-based protein, fiber, and essential nutrients your body craves.",
    },
    {
      id: 3,
      title: "Locally Made",
      description:
        "Rooted in tradition, inspired by innovation. Our products reflect the rich Kenyan heritage and meet world-class standards.",
    },
    {
      id: 4,
      title: "Sustainable and Responsible",
      description: "We support eco-friendly farming, responsible sourcing, and giving back to our communities.",
    },
  ],
};

export const reviews: Review[] = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, obcaecati. Accusamus voluptatem ipsa dolore neque odio corrupti facere iusto totam libero soluta maxime mo",
    reviewer: "Pablo Escobar",
    role: "Manager, Medelin",
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, obcaecati. Accusamus voluptatem ipsa dolore neque odio corrupti facere iusto totam libero soluta maxime mo",
    reviewer: "Al Capone",
    role: "Manager, Chicago",
  },
  {
    id: 3,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, obcaecati. Accusamus voluptatem ipsa dolore neque odio corrupti facere iusto totam libero soluta maxime mo",
    reviewer: "Tony Soprano",
    role: "Manager, Sisily",
  },
  {
    id: 4,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, obcaecati. Accusamus voluptatem ipsa dolore neque odio corrupti facere iusto totam libero soluta maxime mo",
    reviewer: "Joe Colombo",
    role: "Manager, Gambino",
  },
];
