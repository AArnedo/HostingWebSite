/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#2A77F7',
      'secondary': '#1243AA',
      'bg-sec': '#EF7F3C',
      'bg-secondary': '#D1EBFA',
      'blanco': '#FFFFFF',
      'negro': '#061D36',
      'rojo': '#dc2626'
    },
    fontFamily:{
      principal: ["Montserrat", 'sans-serif;']
    },
    extend: {},
  },
  plugins: [],
}

