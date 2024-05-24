/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Kulim:['Kulim','sans-serif'],
        KulimL:['KulimL','sans-serif']
      },
      flexGrow: {
        '0.8': '0.8',
        'default': '1',
      },
    },
  },
  plugins: [],
}