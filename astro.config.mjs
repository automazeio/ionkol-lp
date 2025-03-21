// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ionkol.com",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [
    tailwind({
      // applyBaseStyles: false,
    }),
    react(),
  ],

  output: "static",

  adapter: node({
    mode: "standalone",
  }),
});
