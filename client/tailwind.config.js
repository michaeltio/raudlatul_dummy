/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
        xxxs: "0.5rem",
        xxxxs: "0.45rem",
      },
      fontFamily: {
        ptserif: ["PT Serif", "serif"],
      },
    },
  },
  plugins: [],
};
