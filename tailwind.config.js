/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '390px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1440px',
      },
      colors: {
        'background-primary': '#FFFFFF',
        'background-secondary': '#EFF5FF',
        'text-primary': '#58595B',
        'grey-200': '#F7F8FA',
        'grey-300': '#ECEEF1',
        'grey-400': '#D1D1D1',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      keyframes: {
        loader: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        loader: 'loader 1.2s infinite linear',
      },
    },
  },
  plugins: [],
};
