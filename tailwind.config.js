/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "custom-lg": "1400px",
        "custom-lg-max": { max: "1400px" },
        "extra-small": { max: "640px" },
      },
      fontFamily: {
        sans: ["Gill Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
