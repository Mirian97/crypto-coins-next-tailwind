/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx,html,css}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1440px'
    }
  },
  plugins: []
}
