/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './icons/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
