// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemapPlugin from '@astrojs/sitemap';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://ionkol.com',
  integrations: [
    tailwind({
      // applyBaseStyles: false,
    }),
    sitemapPlugin()
  ],

  output: "static",

  adapter: node({
    mode: "standalone",
  }),
});
