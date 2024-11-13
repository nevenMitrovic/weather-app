/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '481px',
        // => @media (min-width: 320px) { ... }
        md: '745px',
        // => @media (min-width: 744px) { ... }
        lg: '1025px',
        // => @media (min-width: 1024px) { ... }
        xl: '1441px',
        // => @media (min-width: 1440px) { ... }
        xxl: '1921px',
        // => @media (min-width: 1920px) { ... }
      },
      colors: {
        primary: '#FAB12F',
        secondary: '#FA812F',
        accent: '#FA4032',
        background: '#FEF3E2',
      },
    },
  },
  plugins: [],
}
