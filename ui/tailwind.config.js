/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
    'app/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  plugins: [require('tailwindcss-animate'), require('daisyui')]
};

export default config;
