/** @type {import('tailwindcss').Config} */

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
  plugins: [
    // Custom scrollbar implementation to replace tailwindcss-scrollbar
    function({ addUtilities }) {
      const scrollbarUtilities = {
        '.scrollbar': {
          'scrollbar-width': 'auto',
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-none': {
          'scrollbar-width': 'none',
        },
        '.scrollbar-w-0\\.5::-webkit-scrollbar': {
          'width': '0.5px',
        },
        '.scrollbar-w-1\\.5::-webkit-scrollbar': {
          'width': '1.5px',
        },
        '.scrollbar-w-2\\.5::-webkit-scrollbar': {
          'width': '2.5px',
        },
        '.scrollbar-w-3\\.5::-webkit-scrollbar': {
          'width': '3.5px',
        },
        '.scrollbar::-webkit-scrollbar': {
          'width': '8px',
          'height': '8px',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          'width': '4px',
          'height': '4px',
        },
        '.scrollbar-none::-webkit-scrollbar': {
          'display': 'none',
        },
      };
      
      addUtilities(scrollbarUtilities, ['responsive']);
    }
  ],
}