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
    extend: {
      gridTemplateRows: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  plugins: [],
}

