/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mint-green': '#00FFC5', // Replace with your desired mint green color code
        'coral-pink': '#FF6B6B',
      },
      width: {
        '50': '50%',
        '70': '70%',
        '90': '90%',
        '95': '95%'
      },
    },
  },
  plugins: [],
}
