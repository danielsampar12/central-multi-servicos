import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'header-text': '#00000099',
      'cms-green': '#ABFFDB',
      'cms-light-blue': '#41B2CC',
      'cms-blue': '#49B1F1',
    },
    letterSpacing: {
      'header': '0.1rem',
      'spaced': '0.14rem',
    },
    fontFamily: {
      'inter': 'var(--font-inter)',
      'europa': 'var(--font-europa-grotesk)',
    },
    extend: {
      backgroundColor: {
        'header-grey': '#E8E8E866',
        'dark-grey': '#333',
        'white': '#FFF',
      },
      textColor: {
        'white': '#FFF',
        'prod-p': 'rgba(255, 255, 255, 0.60)',
        'black': '#000',
      },
    },
  },
  plugins: [],
};
export default config;
