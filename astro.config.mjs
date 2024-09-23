// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://ionkol.com',
  integrations: [
    tailwind({
      // applyBaseStyles: false,
    }),
  ],

  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});
