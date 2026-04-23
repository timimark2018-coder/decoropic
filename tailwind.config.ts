import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#16211f",
          gold: "#ae9260",
          "gold-soft": "#c6ad7f",
          "gold-deep": "#8c744a",
          sand: "#f3ede4",
          mist: "#edf0ea",
          beige: "#e6dccd",
          line: "#d9d2c6",
          pine: "#1c3833",
          "pine-dark": "#112824",
          ivory: "#f7f3ec"
        }
      },
      boxShadow: {
        card: "0 24px 60px rgba(20, 32, 29, 0.08)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      spacing: {
        section: "7.5rem",
        "section-lg": "10rem",
        breathe: "12.5rem"
      },
      maxWidth: {
        "container-wide": "1200px",
        "container-narrow": "760px"
      },
      fontSize: {
        "eyebrow-lg": [
          "0.875rem",
          { lineHeight: "1.2", letterSpacing: "0.2em", fontWeight: "600" }
        ],
        megatitle: [
          "3rem",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "800" }
        ],
        quote: [
          "2.25rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "400" }
        ],
        hero: [
          "5.25rem",
          { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "900" }
        ],
        "hero-xl": [
          "7.5rem",
          { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "900" }
        ],
        display: [
          "10rem",
          { lineHeight: "0.95", letterSpacing: "-0.05em", fontWeight: "900" }
        ]
      }
    }
  },
  plugins: []
};

export default config;
