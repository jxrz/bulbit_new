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
          DEFAULT: "#9b3323",
          dark: "#6f2217",
          light: "#c64b33",
        },
        secondary: {
          DEFAULT: "#dcc29a",
          light: "#f3e7ce",
          dark: "#b7925d",
        },
        background: "#140f0d",
        surface: "#efe2cd",
        text: {
          DEFAULT: "#4d382d",
          dark: "#211510",
          light: "#8a7160",
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 40px -22px rgba(0, 0, 0, 0.65)",
      }
    },
  },
  plugins: [],
};
