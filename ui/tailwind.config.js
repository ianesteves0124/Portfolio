/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
    'app/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  plugins: [require('tailwindcss-animate'), require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif'
        ]
      }
    }
  }
};

export default config;
