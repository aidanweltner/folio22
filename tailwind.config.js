module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  safelist: [
    'hamburgers', 'is-active',
    'bg-lime-500', 'bg-amber-500', 'bg-red-500'
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
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.coffee[800]'),
            '--tw-prose-headings': theme('colors.coffee[900]'),
            '--tw-prose-lead': theme('colors.coffee[700]'),
            '--tw-prose-links': theme('colors.coffee[900]'),
            '--tw-prose-bold': theme('colors.coffee[900]'),
            '--tw-prose-counters': theme('colors.coffee[600]'),
            '--tw-prose-bullets': theme('colors.coffee[400]'),
            '--tw-prose-hr': theme('colors.coffee[300]'),
            '--tw-prose-quotes': theme('colors.coffee[900]'),
            '--tw-prose-quote-borders': theme('colors.coffee[300]'),
            '--tw-prose-captions': theme('colors.coffee[700]'),
            '--tw-prose-code': theme('colors.coffee[900]'),
            '--tw-prose-pre-code': theme('colors.coffee[100]'),
            '--tw-prose-pre-bg': theme('colors.coffee[900]'),
            '--tw-prose-th-borders': theme('colors.coffee[300]'),
            '--tw-prose-td-borders': theme('colors.coffee[200]'),
            '--tw-prose-invert-body': theme('colors.coffee[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.coffee[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.coffee[400]'),
            '--tw-prose-invert-bullets': theme('colors.coffee[600]'),
            '--tw-prose-invert-hr': theme('colors.coffee[700]'),
            '--tw-prose-invert-quotes': theme('colors.coffee[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.coffee[700]'),
            '--tw-prose-invert-captions': theme('colors.coffee[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.coffee[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.coffee[600]'),
            '--tw-prose-invert-td-borders': theme('colors.coffee[700]'),
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
