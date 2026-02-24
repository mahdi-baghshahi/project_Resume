/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jet': 'hsl(0, 0%, 22%)',
        'onyx': 'hsl(240, 1%, 17%)',
        'eerie-black-1': 'hsl(240, 2%, 13%)',
        'eerie-black-2': 'hsl(240, 2%, 12%)',
        'smoky-black': 'hsl(0, 0%, 7%)',
        'white-1': 'hsl(0, 0%, 100%)',
        'white-2': 'hsl(0, 0%, 98%)',
        'cyan-blue': 'hsl(210, 100%, 66%)',
        'purple-blue': 'hsl(250, 100%, 71%)',
        'light-gray': 'hsl(0, 0%, 84%)',
        'light-gray-70': 'hsla(0, 0%, 84%, 0.7)',
        'bittersweet-shimmer': 'hsl(0, 43%, 51%)',
      },
      fontFamily: {
        'vazir': ['Vazir', 'sans-serif'],
      },
      fontSize: {
        'fs-1': ['24px', '1'],
        'fs-2': ['18px', '1'],
        'fs-3': ['17px', '1'],
        'fs-4': ['16px', '1'],
        'fs-5': ['15px', '1'],
        'fs-6': ['14px', '1'],
        'fs-7': ['13px', '1'],
        'fs-8': ['11px', '1'],
      },
      fontWeight: {
        'fw-300': 300,
        'fw-400': 400,
        'fw-500': 500,
        'fw-600': 600,
      },
      boxShadow: {
        'shadow-1': '-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
        'shadow-2': '0 16px 30px hsla(0, 0%, 0%, 0.25)',
        'shadow-3': '0 16px 40px hsla(0, 0%, 0%, 0.25)',
        'shadow-4': '0 25px 50px hsla(0, 0%, 0%, 0.15)',
        'shadow-5': '0 24px 80px hsla(0, 0%, 0%, 0.25)',
      },
      transitionDuration: {
        'transition-1': '250ms',
        'transition-2': '500ms',
      },
    },
  },
  plugins: [],
}

