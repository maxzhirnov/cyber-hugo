module.exports = {
  safelist: [
    'prose-cyan',
    'prose-fuchsia',
    'prose-lime',
    'prose-blue',
    'prose-yellow',
    'prose-orange',
    'prose-rose',
    'prose-violet',
    'prose-emerald',
  ],
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        vt323: ['VT323', 'monospace'],
        'share-tech': ['Share Tech Mono', 'monospace'],
      },
      typography: ({ theme }) => ({
        cyan: {
          css: {
            '--tw-prose-body': '#00ffe7',
            '--tw-prose-headings': '#00ffe7',
            '--tw-prose-links': '#ff00cc',
            '--tw-prose-bold': '#00ffe7',
            '--tw-prose-code': '#39ff14',
            '--tw-prose-pre-code': '#39ff14',
            '--tw-prose-pre-bg': '#0a0a12',
          }
        },
        fuchsia: {
          css: {
            '--tw-prose-body': '#ff00cc',
            '--tw-prose-headings': '#ff00cc',
            '--tw-prose-links': '#00ffe7',
            '--tw-prose-bold': '#ff00cc',
            '--tw-prose-code': '#39ff14',
            '--tw-prose-pre-code': '#39ff14',
            '--tw-prose-pre-bg': '#0a0a12',
          }
        },
        lime: {
          css: {
            '--tw-prose-body': '#39ff14',
            '--tw-prose-headings': '#39ff14',
            '--tw-prose-links': '#00ffe7',
            '--tw-prose-bold': '#39ff14',
            '--tw-prose-code': '#ff00cc',
            '--tw-prose-pre-code': '#ff00cc',
            '--tw-prose-pre-bg': '#0a0a12',
          }
        },
        blue: {
          css: {
            '--tw-prose-body': '#00bfff',
            '--tw-prose-headings': '#00bfff',
            '--tw-prose-links': '#ff00cc',
            '--tw-prose-bold': '#00bfff',
            '--tw-prose-code': '#39ff14',
            '--tw-prose-pre-code': '#39ff14',
            '--tw-prose-pre-bg': '#0a0a12',
          }
        },
        yellow: {
          css: {
            '--tw-prose-body': '#fff600',
            '--tw-prose-headings': '#fff600',
            '--tw-prose-links': '#00ffe7',
            '--tw-prose-bold': '#fff600',
            '--tw-prose-code': '#ff00cc',
            '--tw-prose-pre-code': '#ff00cc',
            '--tw-prose-pre-bg': '#0a0a12',
          }
        },
        orange: {
          css: {
            '--tw-prose-body': '#ff8800',
            '--tw-prose-headings': '#ff8800',
            '--tw-prose-links': '#00ffe7',
            '--tw-prose-bold': '#ff8800',
            '--tw-prose-code': '#39ff14',
            '--tw-prose-pre-code': '#39ff14',
            '--tw-prose-pre-bg': '#0a0a12',
          }
        },
        rose: {
          css: {
            '--tw-prose-body': '#ff007a',
            '--tw-prose-headings': '#ff007a',
            '--tw-prose-links': '#00ffe7',
            '--tw-prose-bold': '#ff007a',
            '--tw-prose-code': '#39ff14',
            '--tw-prose-pre-code': '#39ff14',
            '--tw-prose-pre-bg': '#0a0a12',
          }
        },
        violet: {
          css: {
            '--tw-prose-body': '#a259ff',
            '--tw-prose-headings': '#a259ff',
            '--tw-prose-links': '#00ffe7',
            '--tw-prose-bold': '#a259ff',
            '--tw-prose-code': '#39ff14',
            '--tw-prose-pre-code': '#39ff14',
            '--tw-prose-pre-bg': '#0a0a12',
          }
        },
        emerald: {
          css: {
            '--tw-prose-body': '#00ffae',
            '--tw-prose-headings': '#00ffae',
            '--tw-prose-links': '#ff00cc',
            '--tw-prose-bold': '#00ffae',
            '--tw-prose-code': '#ff00cc',
            '--tw-prose-pre-code': '#ff00cc',
            '--tw-prose-pre-bg': '#0a0a12',
          }
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ]
}
