/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        'neon-blue': 'oklch(0.68 0.32 250)',
        'neon-red': 'oklch(0.62 0.28 25)',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        cyber: ['Exo 2', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'neon-blue': '0 0 35px rgba(100, 100, 255, 0.5), 0 0 70px rgba(100, 100, 255, 0.25)',
        'neon-blue-lg': '0 0 50px rgba(100, 100, 255, 0.7), 0 0 100px rgba(100, 100, 255, 0.4)',
        'neon-red': '0 0 35px rgba(255, 50, 80, 0.5), 0 0 70px rgba(255, 50, 80, 0.25)',
        'neon-red-lg': '0 0 50px rgba(255, 50, 80, 0.7), 0 0 100px rgba(255, 50, 80, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            filter: 'brightness(1)',
          },
          '50%': { 
            opacity: '0.85',
            filter: 'brightness(1.25)',
          },
        },
        'shimmer': {
          '0%, 100%': {
            opacity: '0.7',
            transform: 'scaleX(0.85)',
          },
          '50%': {
            opacity: '1',
            transform: 'scaleX(1)',
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
