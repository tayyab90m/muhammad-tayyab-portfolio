/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        // Theme tokens live as RGB triplets in index.css so light/dark can swap them
        // while Tailwind opacity modifiers (e.g. border-line/15) keep working.
        colors: {
          paper: "rgb(var(--paper) / <alpha-value>)",
          surface: "rgb(var(--surface) / <alpha-value>)",
          ink: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--muted) / <alpha-value>)",
          line: "rgb(var(--line) / <alpha-value>)",
          accent: "rgb(var(--accent) / <alpha-value>)",
          "on-accent": "rgb(var(--on-accent) / <alpha-value>)",
        },
        fontFamily: {
          display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
          sans: ["Inter", "system-ui", "sans-serif"],
        },
      },
    },
    plugins: [],
  }
