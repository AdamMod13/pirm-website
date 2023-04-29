/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#561111',
          200: '#c44137',
          300: '#ef998e',
        },
        accent: {
          100: '#F5F5F5',
          200: '#929292',
        },
        text: {
          100: '#FFFFFF',
          200: '#e0e0e0',
        },
        bg: {
          100: '#1D1F21',
          200: '#2c2e30',
          300: '#444648',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}