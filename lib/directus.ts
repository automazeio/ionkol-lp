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
};

type Schema = {
  priceCards: PriceCard[];
  articles: Article[];
};

const directus = createDirectus<Schema>(
  "http://directus_8055-fcgocs848w8ssgwc84gk8scs.88.198.20.118.sslip.io"
).with(rest());

export default directus;
