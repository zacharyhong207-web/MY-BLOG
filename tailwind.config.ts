import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Text", "system-ui", "sans-serif"],
        display: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Menlo", "monospace"],
      },
      boxShadow: {
        "apple-glass": "inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 20px 40px -15px rgba(0, 0, 0, 0.5)",
        "glass-inner": "inset 0 1px 0 0 rgba(255, 255, 255, 0.12)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
