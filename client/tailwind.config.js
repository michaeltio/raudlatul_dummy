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
        "2xs": "0.625rem",
        "3xs": "0.5rem",
        "4xs": "0.45rem",
      },
      fontFamily: {
        ptserif: ["PT Serif", "serif"],
      },
    },
  },
  plugins: [],
};
