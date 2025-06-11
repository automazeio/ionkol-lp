import { createDirectus, rest } from "@directus/sdk";

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
  is_featured: string;
};

type Schema = {
  articles: Article[];
};

const directus = createDirectus<Schema>("https://cms.ionkol.com").with(rest());

export default directus;
