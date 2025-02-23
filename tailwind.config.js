/** @type {import('tailwindcss').Config} */


import tailwindcssScrollbar from 'tailwindcss-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontfamily: {
        'sans': ['inter', 'sans-serif']
      }
    },
  },
plugins: [tailwindcssScrollbar],
}