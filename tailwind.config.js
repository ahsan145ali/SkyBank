/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'large': '40dvh',
        'med': '45dvh',
        'small': '60dvh'
      }
    },
  },
  plugins: [],
  prefix: 'tw-',
}