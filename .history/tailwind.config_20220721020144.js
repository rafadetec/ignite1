/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {   
    extend: {
      backgroundImage: {
        blur: 'url(./src/assets/blur-background.png)' //forma de colocar uma imagem de fundo 
      },
      fontFamily:{
        sans: 'Roboto, sans-sarif',
      },
      colors:{
        gray: {
          300: '#8257e6',
          500: '#00875F',
          700: '#015F43',
        },
        blue:{
          500: '#81D8F7'
        },
        orange:{
          500: '#FBA94C',
        }, 
        red:{
          500:'#F75A68',
        },
        gray:{
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
         
    },
  },
  plugins: [],
}
