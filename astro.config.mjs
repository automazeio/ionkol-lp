import { defineConfig } from "astro/config";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ionkol.com",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  i18n: {
    locales: ["en", "ms", "ja", "ko", "zh"],
    defaultLocale: "en",
  },
  integrations: [
    tailwind({
      // applyBaseStyles: false,
    }),
    react(),
  ],

  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        strategy: ["url", "cookie", "preferredLanguage", "basicLocale"],
      }),
    ],
  },
  output: "server",
  adapter: node({ mode: "standalone" }),
});
