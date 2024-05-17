import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // background: "#000434",
        background: "#222831",
        foreground: "#EEEEEE",
        primary: {
          DEFAULT: "#222831",
          foreground: "#EEEEEE",
        },
        secondary: {
          DEFAULT: "#393E46",
          foreground: "#EEEEEE",
        },     
        accent: {
          DEFAULT: "#00575b",
          foreground: "#EEEEEE",
        },
        card: {
          DEFAULT: "#EEEEEE",
          foreground: "#222831",
        },
        navbar: {
          // DEFAULT: "#ff9300",
          DEFAULT: "#00ADB5",
          // foreground: "#000434",
          foreground: "#EEEEEE",
        },
        trans:{
          DEFAULT: "#ffffff00"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config