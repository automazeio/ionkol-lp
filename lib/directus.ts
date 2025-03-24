import { createDirectus, rest } from "@directus/sdk";

export type PriceCard = {
  id: number;
  name: string;
  price_yearly: number;
  price_monthly: number;
  price_monthly_annual: string;
  cta_text: string;
  description: string[];
  subheader: string;
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  description: string;
  body: string;
  thumbnail: string;
  category: "101" | "research" | "updates";
  post_type?: string;
  location?: string;
  interest?: string;
  created_at?: string;
};

type Schema = {
  priceCards: PriceCard[];
  articles: Article[];
};

const directus = createDirectus<Schema>("https://cms.ionkol.com").with(rest());

export default directus;
