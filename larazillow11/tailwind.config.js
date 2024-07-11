/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './storage/framework/viewa/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

