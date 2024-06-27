/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      backgroundColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        dark1: "var(--bg-dark1)",
        dark2: "var(--bg-dark2)",
      },
      borderColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
    },

    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
  darkMode: "class",
};
