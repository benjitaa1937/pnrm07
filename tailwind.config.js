/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1D4ED8',
        },
        secondary: {
          DEFAULT: '#10B981',
          light: '#6EE7B7',
          dark: '#047857',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FDE68A',
          dark: '#B45309',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}