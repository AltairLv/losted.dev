import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        OriginalDark: "#100F0F",
        OriginalLight: "#F5F5F5",
        BorderLight: "#FFFFFF20",
        BorderDark: "#100F0F20",
      },
      animation: {
        swing: "swing 20s infinite linear",
      },
      keyframes: {
        swing: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(20deg)",
          },
          "75%": {
            transform: "rotate(-12deg)",
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
export default config;
