/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        jamsil: ["TheJamsil5", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 커스텀 색상 팔레트
        "quack-yellow": "#F5C622",
        "quack-white": "#EFEEDF",
        "quack-icon-bg": "#D8A82D",
        "quack-box-bg": "#BC8B38",
        "quack-illustration": "#9C6D38",
        "quack-gray": "#A8A7A1",
        "quack-black": "#070706",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
      },
      fontSize: ({ theme }) => ({
        // Headline
        "headline-large": [
          "80px",
          {
            lineHeight: "100px",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "headline-mobile": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "headline-medium": [
          "64px",
          {
            lineHeight: "80px",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "headline-small": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "headline-small-mobile": [
          "24px",
          {
            lineHeight: "30px",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],

        // Body
        "body-x-large": [
          "40px",
          {
            lineHeight: "100%",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "body-large": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.regular"),
          },
        ],
        "body-small": [
          "18px",
          {
            lineHeight: "24px",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.regular"),
          },
        ],
        "body-small-modile": [
          "12px",
          {
            lineHeight: "14px",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.medium"),
          },
        ],

        // Label
        "label-large": [
          "32px",
          {
            lineHeight: "100%",
            letterSpacing: "1px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "label-large-mobile": [
          "20px",
          {
            lineHeight: "100%",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "label-large-semi": [
          "30px",
          {
            lineHeight: "100%",
            letterSpacing: "1px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "label-medium": [
          "24px",
          {
            lineHeight: "100%",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "label-medium-semi": [
          "24px",
          {
            lineHeight: "31.99px",
            letterSpacing: "-0.02em",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "label-medium-mobile": [
          "16px",
          {
            lineHeight: "100%",
            letterSpacing: "1px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "label-small": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.medium"),
          },
        ],
        "label-small-mobile": [
          "12px",
          {
            lineHeight: "100%",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
        "label-x-small-mobile": [
          "10px",
          {
            lineHeight: "100%",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],

        // Footer
        "quack-footer": [
          "16px",
          {
            lineHeight: "119%",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.regular"),
          },
        ],
        "quack-footer-mobile": [
          "8px",
          {
            lineHeight: "119%",
            letterSpacing: "0px",
            fontWeight: theme("fontWeight.bold"),
          },
        ],
      }),
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
