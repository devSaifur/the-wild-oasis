/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      secondary: ['Sono', 'monospace'],
    },
    extend: {
      colors: {
        'gray-0': 'rgb(var(--color-gray-0) / <alpha-value>)',
        'backdrop-primary': 'rgb(var(--backdrop-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
