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
      animation: {
        notification: 'notification 1s ease-in-out',
      },
      keyframes: {
        notification: {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.5)' },
        }
      },
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

