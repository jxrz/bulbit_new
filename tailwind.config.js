/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#19669a",
          dark: "#14517a",
          light: "#1f80c2",
        },
        secondary: {
          DEFAULT: "#e8d2a8",
          light: "#f3e8d2",
          dark: "#d1b47c",
        },
        background: "#f7f6f8",
        surface: "#ffffff",
        text: {
          DEFAULT: "#334155",
          dark: "#0f172a",
          light: "#64748b",
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "sans-serif"],
      },
      boxShadow: {
        soft: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
      }
    },
  },
  plugins: [],
};
