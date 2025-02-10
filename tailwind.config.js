/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms', // Example of a 2-second duration
      },
      width: {
        88 : '22rem', // Add custom width between 80 and 96
      },
      fontSize: {
        'whyTitle': ['1.875rem', '1.679rem' ]
      },
      fontFamily: {
        darkerGrotesque: ['Darker Grotesque', 'serif'],
        roboto: ['Roboto', 'serif'],
        ebgaramond: ['EB Garamond', 'serif']
      },
      colors: {
        primary: '#E2E2FF',
        secondary: '#524CF2',
        darkestMain: '#0B0D28',
        customBlue: {
          light: '#F7F7F8',
          DEFAULT: '#CBCBFF',
          dark: '#0B0D28',
        },
        customGray: {
          light: '#F3F4F6',
          DEFAULT: '#9CA3AF',
          dark: '#4B5563',
        },
      },
    },
  },
  plugins: [],
}