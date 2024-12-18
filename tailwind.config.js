/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Obejmuje wszystkie istotne pliki
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Dodaj niestandardową czcionkę
      },
      colors: {
        customBlack: '#010101',
        customGrayText: '#666666'// Twój kolor
      },
    },
  },
  plugins: [],
};

