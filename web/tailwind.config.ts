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
        lg: {
          css: {
            a: {
              color: "#ce1127",
              "&:hover": {
                color: "#007a3d",
              },
              cursor: "pointer",
            },
            blockquote: {
              borderLeftWidth: "thick",
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
