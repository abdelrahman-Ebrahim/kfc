import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3454B4",
        shadeBlack: "#171718",
        shadeGray: "#434549",
        borderColor: "#D0D5DD",
        blurColor: "#FFFFFF33",
      },
      backgroundImage: {
        "violet-gradient":
          "linear-gradient(26.57deg, #53389E 8.33%, #6941C6 91.67%)",
        miniGrid: "url(/auth/miniGridBg.svg)",
        iconGradient: `
        linear-gradient(180deg, #FFFFFF 0%, #D0D5DD 100%)
      `,
        gridMdBackground: "url(/auth/gridMdBackground.svg)",
      },
      boxShadow: {
        "icon-shadow":
          "0px 1.5px 3px 0px #1018280F, 0px 1.5px 4.5px 0px #1018281A",
        "navbar-shadow":
          "0px 1px 2px 0px #1018280D, 0px -2px 0px 0px #1018280D inset, 0px 0px 0px 1px #1018280D inset",
        "card-shadow": "0px 1px 2px 0px #1018280D",
      },
      backdropBlur: {
        // Custom blur level
        "7.5": "7.5px",
      },
      fontFamily: {
        notoSans: ["NotoSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
