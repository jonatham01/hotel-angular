/** @type {import('tailwindcss').Config} */
import { green, blue, red } from 'tailwindcss/colors';

export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        success: green,
        primary: blue,
        danger: red,
      },
      container: {
        screens: {
          ssm: '440px',
          sm: '640px',
          md: '768px',
          xl: '1024px',
          '2xl': '1536px',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
