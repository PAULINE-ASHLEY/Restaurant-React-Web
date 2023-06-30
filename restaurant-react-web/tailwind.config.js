/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      roboto: ['roboto', 'ui-sans-serif', 'system-ui'],
      spectral: ['spectral', 'san-serif'],
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      whitesmoke: '#f2f5f7',
    },
    screens: {
      sm: '512px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '300px': '300px',
      },
    },
  },
  plugins: [],
};
