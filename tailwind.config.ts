import type { Config } from 'tailwindcss';

import { COLORS } from './src/constants/colors.constant';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: COLORS,
      padding: {
        layout: '1.2rem',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '333ms',
      },
    },
  },
  plugins: [],
};
export default config;
