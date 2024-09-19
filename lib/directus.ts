import { createDirectus, rest } from "@directus/sdk";

type PriceCard = {
  id: number;
  name: string;
  price_yearly: number;
  price_monthly: number;
  cta_text: string;
  description: string[];
  subheader: string;
};

type Schema = {
  priceCards: PriceCard[];
};

const directus = createDirectus<Schema>(
  "http://directus_8055-fcgocs848w8ssgwc84gk8scs.88.198.20.118.sslip.io",
).with(rest());

export default directus;
