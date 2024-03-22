/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b0b0b',
          opacity: '#0b0b0bd4',
          ligth: '#727272',
          300: '#2c2c2c',
          400: '#171717',
        },
        secondary: {
          DEFAULT: '#686868',
          opacity: '#686868d4',
          ligth: '#838383',
          300: '#555555',
          400: '#3d3d3d',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
