module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#995DFF',
          500: '#8257E6'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}