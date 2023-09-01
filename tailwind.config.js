/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "dark-bg":"var(--dark-bg)",
        "gold":" var(--gold)",
        "magneta":"var(--magenta)",
        "dark-magenta":"var(--dark-magenta)",
        "dark-blue":"var(--dark-blue)",
        "dark-gold":"var(--dark-gold)",
        "dark-font":"var(--dark-font)",
        "light-font":" var(--light-font)",

      }
    },
  },
  plugins: [],
};
