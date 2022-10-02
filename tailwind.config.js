/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        poppins: 'poppins',
        corben: 'corben'
      }
    }
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      defaultFlavour: 'mocha'
    })
  ]
}
