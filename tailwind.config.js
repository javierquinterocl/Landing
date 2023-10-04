/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      fontFamily: {
        "haken" : [ '"Hanken Grotesk"', 'sans-serif'],
        "poppins": ['"Poppins"', 'sans-serif'],
        "oswald": ['"Oswald"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

