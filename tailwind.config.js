/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0f14',
        'secondary': '#f9a825',
        'tertiary': '#c5e7f0',
        'neutrall': '#f3f2f2',
      },
    },
  },
  plugins: [],
}