/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'sidebar': '#0f1123',
        'sidebar-text': '#9fa8c7',
        'yellow': '#e7a722',
        'background': '#f3f1f5',
        'light-green': '#e1f1e0',
        'light-red': '#f4dada',
        'light-blue': '#dcecf1',
        'light-yellow':'#f8ba39',
        'dark-yellow': '#b68318',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
