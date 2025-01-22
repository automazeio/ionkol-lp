// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemapPlugin from '@astrojs/sitemap';

import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://ionkol.com',
  integrations: [tailwind({
    // applyBaseStyles: false,
  }), sitemapPlugin(), react()],

  output: "static",

  adapter: node({
    mode: "standalone",
  }),
});