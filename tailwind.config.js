/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors:{
        'custom-green' : '#119484',
        'custom-drk-green' : '#0a6e5e',
      }
    },
  },
  plugins: [],
}

