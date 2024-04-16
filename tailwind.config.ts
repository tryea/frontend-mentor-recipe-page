import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        young_serif: ["var(--font-young_serif)"],
        outfit: ["var(--font-outfit)"],
      },
      colors: {
        dark_charcoal: "#312E2C",
        wenge_brown: "#5F564D",
        dark_raspberry: "#7A284E",
        snow: "#FFF7FB",
        white_coffee: "#E3DDD7",
        brandy_red: "#854632",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
