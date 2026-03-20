// Impor fallback font default dari Tailwind
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan ini mencakup semua file proyek Anda
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' adalah nama font default di Tailwind
        // Kita tambahkan 'Poppins' di depannya
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};