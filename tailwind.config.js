/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#151d27',
        'bg-light': '#f5f5f5',
        'sp-60': '#FFFFFF',
        'sp-30': '#E80C3E',
        'sp-10': '#FF1100',
        'sp-white2': '#F5F5F5',
        'sp-gray': '#303030',
        'sp-gray2': '#A5A4A4',
        redalpha: 'rgba(226, 0, 255, 0.11)',
      },
      inset: {
        '2px': '4px',
      },
      transformOrigin: {
        test: '50% 100%',
      },
      spacing: {
        '35px': '35px',
      },
      height: {
        705: '705px',
        575: '575px',
      },
      width: {
        460: '460px',
        386: '386px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
