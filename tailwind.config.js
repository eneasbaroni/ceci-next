/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cc-violet': '#968ab9',
        'cc-pink': 'rgb(253,173,173)',
      },
      fontFamily: {
        moneta: ['var(--font-moneta)'],
      },
      screens: {
        notebook: { max: '1280px' },
        tablet: { max: '1024px' },
        mobile: { max: '768px' },
      },
    },
  },
  plugins: [],
}
