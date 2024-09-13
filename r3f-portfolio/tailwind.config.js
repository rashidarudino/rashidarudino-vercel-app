/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths according to your file types
    './public/index.html', // Include HTML files if they are in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
