import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-green": "#00C853",
        "brand-green-hover": "#00E060",
        "brand-green-muted": "rgba(0, 200, 83, 0.1)",
        surface: "#18181B",
        background: "#09090B",
        border: "#27272A"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px"
      },
      boxShadow: {
        "glow-green": "0 0 20px rgba(0, 200, 83, 0.35)",
        "card-hover": "0 10px 30px -10px rgba(0, 200, 83, 0.1)",
        "input-focus": "0 0 0 2px rgba(0, 200, 83, 0.25)"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideUp: "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 35s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
