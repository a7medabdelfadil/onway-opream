/* eslint-disable @typescript-eslint/no-require-imports */
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "rgba(var(--primary))",
        primary2: "rgba(var(--primary2))",
        navLinks: "rgba(var(--navLinks))",
        primaryHover: "rgba(var(--primary-hover))", 
        primary2Hover: "rgba(var(--primary2-hover))", 
        bgPrimary: "rgba(var(--bg-primary))",
        bgSecondary: "rgba(var(--bg-secondary))",
        bgThird: "rgba(var(--bg-third))",
        bgFourth: "var(--bg-fourth)",
        bgInput: "rgba(var(--bg-input))",
        bgPowderBlue: "rgba(var(--bg-powder-blue))",
        bgGray: "rgba(var(--bg-gray))",
        textPrimary: "rgba(var(--text-primary))",
        textSecondary: "rgba(var(--text-secondary))",
        textMuted: "rgba(var(--text-muted))",
        error: "rgba(var(--error))",
        softRed: "rgba(var(--soft-red))",
        softRedHover: "rgba(var(--soft-red-hover))",
        success: "rgba(var(--success))",
        limeGreen: "rgba(var(--limeGreen))",
        info: "rgba(var(--info))",
        warning: "rgba(var(--warning))",
        lavender: "rgba(var(--lavender))",
        comment: "rgba(var(--comment))",
        borderPrimary: "rgba(var(--border-primary))",
        borderSecondary: "rgba(var(--border-secondary))",
        blackOrWhite: "rgba(var(--black-or-white))",
        whiteOrBlack: "rgba(var(--white-or-black))",
        thead: "rgba(var(--thead))",
        chat: "rgba(var(--chat))",
        lightGray: "rgba(var(--light-gray))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primaryCN: {
          DEFAULT: "#566df2",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#f5f6fa",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
} satisfies Config;
