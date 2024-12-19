/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customRed: '#E55472',
        customBlack: '#010101',
        customGrayText: '#666666',
        customRose: '#e7ada8',
      },
      backgroundImage: {
        'custom-pattern': "url('src/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};

