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
         customBlack: "#1D1D1F",
         customWhite: "#F5F5F7",
         link: "#0066CC"
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
     backgroundImage: {
      "hero": "url(/images/hero.png)",
      "iphone15": "url(/images/iphone_15.png)",
      "iphone15pro": "url(/images/iphone_15pro.png)",
      "watch": "url(/images/apple_watch.png)",
      "macbookPro": "url(/images/macbook_pro.png)",
      "iPad": "url(/images/ipad.png)",
      "airPodPro": "url(/images/airpods_pro.png)",
      "card": "url(/images/card.png)",
      "tradeIn": "url(/images/trade_in.png)",
     },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config