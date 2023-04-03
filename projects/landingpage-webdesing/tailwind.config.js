/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#706FE5',
        secondary: '#EAEAFC',
        terceary: '#1E1F4B',
        fourth: '#2E3E5C',
        footer: '#2E3E5C'
      }
    }
  },
  plugins: []
}
