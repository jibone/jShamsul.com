import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

/** @type {import("tailwindcss/types").Config } */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            a: {
              color: "#ec4899",
              "&:hover": {
                color: "#db2777",
              },
            },
          },
        },
      }),
      colors: {
        primary: colors.pink,
        gray: colors.gray,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
