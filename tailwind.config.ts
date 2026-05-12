import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d1114",
        deep: "#10171a",
        gameboy: "#b9d6a2",
        mint: "#d9f2c8",
        frost: "#eaf7ff",
        hospital: "#d9edf8",
        pixel: "#22312a"
      },
      boxShadow: {
        screen: "0 0 0 4px #22312a, inset 0 0 0 2px rgba(255,255,255,.28)",
        glow: "0 0 26px rgba(217, 242, 200, .35)"
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "ui-monospace", "SFMono-Regular", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
