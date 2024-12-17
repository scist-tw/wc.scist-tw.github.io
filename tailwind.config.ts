import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        blackMango: ["var(--font-black-mango)", "sans-serif"],
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "2%, 64%": { transform: "translate(2px, 0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px, 0) skew(0deg)" },
          "62%": { transform: "translate(0, 0) skew(5deg)" },
        },
        fadeInUp: {
          "0%": { opacity: `${0}`, transform: "translateY(20px)" },
          "100%": { opacity: `${1}`, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: `${0}`, transform: "translateY(20px)" },
          "100%": { opacity: `${1}`, transform: "translateY(0)" },
        },
        bounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-10px)" },
          "60%": { transform: "translateY(-5px)" },
        },
        trail: {
          "0%": { opacity: "0.8", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(80px)" },
        },
      },
      animation: {
        glitch: "glitch 1s linear infinite",
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        slideIn: "slideIn 0.8s ease-out forwards",
        bounce: "bounce 2s infinite",
        trail: "trail 1.5s steps(5, start) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
