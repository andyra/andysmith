/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./constants.js"
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite"
      },
      colors: {
        ground: "var(--ground)",
        "ground-accent": "var(--ground-accent)",
        "ground-accent2": "var(--ground-accent2)",
        primary: "var(--primary)",
        accent: "var(--accent)"
      },
      fontFamily: {
        base: [
          // "'Be Vietnam Pro Variable'",
          // "'Maison Neue'",
          // "'Gratimo Grotesk'",
          "'Gratimo Classic'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "'Noto Sans'",
          "sans-serif"
        ]
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0, -4px)" },
          "50%": { transform: "translate(0, 4px)" },
          "100%": { transform: "translate(0, -4px)" }
        }
      }
    },
    // Overrides
    fontSize: {
      "2xs": ["0.75rem", { lineHeight: "1rem" }],
      xs: ["0.875rem", { lineHeight: "1.25rem" }],
      sm: ["1rem", { lineHeight: "1.5rem" }],
      base: ["1.25rem", { lineHeight: "1.75rem" }],
      lg: ["1.5rem", { lineHeight: "2.25rem" }],
      xl: ["1.875rem", { lineHeight: "2.5rem" }],
      "2xl": ["2.25rem", { lineHeight: "2.75rem" }],
      "3xl": ["3rem", { lineHeight: "1" }],
      "4xl": ["3.75rem", { lineHeight: "1" }],
      "5xl": ["4.5rem", { lineHeight: "1" }],
      "6xl": ["6rem", { lineHeight: "1" }],
      "7xl": ["8rem", { lineHeight: "1" }]
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "800px",
      lg: "960px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px"
    },
    spacing: {
      0: "0",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
      80: "80px",
      88: "88px",
      96: "96px",
      128: "128px",
      160: "160px",
      192: "192px",
      224: "224px",
      256: "256px",
      288: "288px",
      320: "320px",
      352: "352px",
      384: "384px",
      384: "384px",
      416: "416px",
      448: "448px",
      480: "480px",
      512: "512px",
      em: "1em",
      "3/4em": "0.75em",
      "1/2em": "0.5em",
      "1/4em": "0.25em"
    }
  },
  plugins: []
};
