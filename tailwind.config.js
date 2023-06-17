/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'luckiest-guy': ['Luckiest Guy', 'cursive'],
        'merriweather': ['Merriweather', 'sans-serif']
      },
      colors: {
        customPurple: '#8338ec',
        customBlue: '#3a86ff',
        customPink: '#ff006e',
        customOrange: '#fb5607',
        customYellow: '#ffbe0b'

      }
    },
  },
  plugins: [],
};
