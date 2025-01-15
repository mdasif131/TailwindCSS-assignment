/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        fontPlus: ['"Plus Jakarta Sans", serif'],
      },
      screens: {
        mobile: '300px',
      },
    },
  },
  plugins: [],
};
