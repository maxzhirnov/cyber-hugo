module.exports = {
  safelist: [
    'geek-stripes-bg',
    // Typography classes
    'prose-cyan', 'prose-fuchsia', 'prose-lime', 'prose-blue', 
    'prose-yellow', 'prose-orange', 'prose-rose', 'prose-violet', 'prose-emerald',
    
    // Border colors
    'border-cyan-400', 'border-fuchsia-400', 'border-lime-400', 'border-yellow-400',
    
    // Text colors
    'text-cyan-300', 'text-fuchsia-300', 'text-lime-300', 'text-yellow-300',
    
    // Shadow classes
    'shadow-[0_0_8px_#00ffe7_inset]', 'shadow-[0_0_8px_#ff00cc_inset]',
    'shadow-[0_0_12px_#00ffe7_inset]', 'shadow-[0_0_16px_#00ffe7_inset]',
    'shadow-[0_0_20px_#00ffe7_inset]', 'shadow-[0_0_40px_#00ffe7_inset]',
    
    // Background classes
    'bg-gray-900/90', 'bg-gray-800/90', 'bg-gray-900/80', 'bg-gray-800/80'
  ],
  content: [
    "./themes/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
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