/** @type {import('tailwindcss').Config} */
import { green, blue, red } from 'tailwindcss/colors';

export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    colors: {
      success: green,
      primary: blue,
      danger: red,
    },
    container: {
      screens: {
        ssm:'440px',
        sm: '640px',
        md: '768px',
      //  lg: '1024px',
        xl: '1024px',
        '2xl': '1536px',
      },
    }
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
];
