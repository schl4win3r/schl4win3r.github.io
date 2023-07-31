/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    fontFamily: {
      sans: ['RedHatText', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
