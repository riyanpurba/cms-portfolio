import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/organisms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        merriweather: ["Merriweather", 'sans-serif', ...defaultTheme.fontFamily.sans],
        raleway: ["Raleway", 'sans-serif', ...defaultTheme.fontFamily.sans],
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
