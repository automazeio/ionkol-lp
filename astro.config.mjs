// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ionkol.com",
  integrations: [
    tailwind({
      // applyBaseStyles: false,
    }),
    react(),
  ],

  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});
