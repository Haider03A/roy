/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,js}",
    "./*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '26px',
        lg: '36px'
      }
    },
    extend: {},
  },
  plugins: [],
}

