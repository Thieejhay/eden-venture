/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.075em',
        widestt: '0.2em'
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif']
      },
      fontSize: {
        xxs: '0.5em'
      },
      width: {
        96: '30rem'
      }
    },
  },
  plugins: [],
}
