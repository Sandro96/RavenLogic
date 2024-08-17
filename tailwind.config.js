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
        'primary-color-light': '#1C9FDD',
        'bg-color': '#121c38',
        'secondary-color': '#FFC948',
        'secondary-color-light': '#FFF859',
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 0 3px #000',
      },
    },
  },
  plugins: [],
}
