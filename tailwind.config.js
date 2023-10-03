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
        // Define your custom fonts here
        // For example:
        // 'custom-font': ['Font Family Name', 'sans'],
      },
      colors: {
        'CW-textGray':'#6B7280',
        'CW-primary':'#0B253E'
        // Define custom colors here
        // For example:
        // 'text-gray': '#D2D82C',
      },
    },
  },
  plugins: [],
};
