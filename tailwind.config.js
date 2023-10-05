/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'custom-font': ['Font Family Name', 'sans'],
      },
      colors: {
        'CW-textGray':'#6B7280',
        'CW-primary':'#0B253E',
        'CW-theme':'#00A0D2'
      },
    },
  },
  plugins: [],
};
