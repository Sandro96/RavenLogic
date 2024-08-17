/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '0',
        screens: {
          '2xl': '1280px', 
        },
      },
      colors: {
        'primary-color': '#1C3EDD',
        'primary-color-v': '#1B254D',
        'bg-color': '#202020',
        'bg-color-v': '#0A0A0A',
        'secondary-color': '#FFC948',
        'secondary-color-v': '#FFF859',
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
