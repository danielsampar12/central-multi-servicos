import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'smmax': { max: '640px' },
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lgmax': { max: '1120px' },
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
        'light-grey': '#E8E8E8',
        'dark-grey': '#333',
        'white': '#FFF',
      },
      textColor: {
        'white': '#FFF',
        'prod-p': 'rgba(255, 255, 255, 0.60)',
        'black': '#000',
        'dark-grey': '#333',
      },
    },
  },
  plugins: [],
};
export default config;
