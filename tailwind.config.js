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
      },
      borderColor: {
        primary: "var(--color-primary)",
      },
    },

    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
