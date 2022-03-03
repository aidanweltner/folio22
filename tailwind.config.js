module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  safelist: [
    'hamburgers', 'is-active',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          100: '#fcfbfa',
          200: '#f7f5f2',
          300: '#f0ebe4',
          400: '#e0dace',
          500: '#bfb4a3',
          600: '#968a75',
          700: '#695f4d',
          800: '#474030',
          900: '#2b2718',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
