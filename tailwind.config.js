const {
  FONT_SIZE_BODY,
  FONT_SIZE_HEADING1,
  FONT_SIZE_DISPLAY,
  FONT_SIZE_SMALL_HEADING2,
} = require("./src/styles/font-size");
const { SPACING_XS, SPACING_JUMP } = require("./src/styles/spacing");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        /* カラー（色） */
        white: "#ffffff",
        "gray-10": "#eeeeee",
        "gray-25": "#aaaaaa",
        "gray-50": "#707070",
        "gray-75": "#444444",
        black: "#222222",
        accent: "#0d87e0",
      },
      fontFamily: {
        body: ["apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        /* タイポグラフィ（フォントサイズ） */
        body: FONT_SIZE_BODY,
        display: FONT_SIZE_DISPLAY,
        heading1: FONT_SIZE_HEADING1,
        heading2: `calc(${FONT_SIZE_BODY}*1.5)` /* 24px - 27px */,
        heading3: `calc(${FONT_SIZE_BODY}*1.2)` /* 19.2px - 21.6px */,
        "small-heading2": FONT_SIZE_SMALL_HEADING2,
        "small-heading3": `calc(${FONT_SIZE_SMALL_HEADING2}*.86)` /* 12px - 23px */,
      },
      spacing: {
        /* スペース（余白・間隔） */
        "space-xs": SPACING_XS,
        "space-sm": `calc(${SPACING_XS})*1.5)` /* 30px - 45px */,
        "space-md": `calc(${SPACING_XS})*2)` /* 40px - 60px */,
        "space-lg": `calc(${SPACING_XS})*3)` /* 60px - 90px */,
        "space-xl": `calc(${SPACING_XS})*4)` /* 80px - 120px */,
        "space-jump": SPACING_JUMP,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
