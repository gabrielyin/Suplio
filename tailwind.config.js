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
        mukta: ['Mukta', 'sans-serif']
      },
      colors: {
        'background': '#F5F9F3',
        'jade': {
          50: '#eefff6',
          100: '#d7ffeb',
          200: '#b2ffd9',
          300: '#76ffbc',
          400: '#33f598',
          500: '#09de78',
          600: '#00b25d',
          700: '#04914f',
          800: '#0a7141',
          900: '#0a5d38',
          950: '#00341d',
        },
        'regal-blue': {
          50: '#eef8ff',
          100: '#dcf1ff',
          200: '#b2e5ff',
          300: '#6dd2ff',
          400: '#20bbff',
          500: '#00a3ff',
          600: '#0081df',
          700: '#0066b4',
          800: '#005794',
          900: '#003e6a',
          950: '#002d51',
        },
        'charade': {
          50: '#f3f6f8',
          100: '#e1e6ec',
          200: '#c6d0db',
          300: '#9eafc2',
          400: '#6f85a1',
          500: '#546a86',
          600: '#485972',
          700: '#3f4b5f',
          800: '#394151',
          900: '#2b303b',
          950: '#1f232d',
        },
      }
    },
  },
  plugins: [],
}
