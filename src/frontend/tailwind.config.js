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
        'neon-blue': '#6B6BFF',
        'neon-red': '#FF3250',
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
