/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-in-out',
        },
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

