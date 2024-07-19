/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      wide:	'0.03em',
      wider: '0.07em',
      widest:	'0.12em',
    },
    extend: {
      textUnderlineOffset: {
        12: '12px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  safelist: [
    // { pattern: /(flex|basis|grow|shrink|order|self|justify)-/ },
    // { pattern: /(grid|col|row|auto)-/ },

    { pattern: /(m|p)(x|y|l|r|b|t|s|e)?-/ },

    { pattern: /bg-/ },
    { pattern: /text-/ },
    { pattern: /font-/ },
    // { pattern: /italic/ },
    { pattern: /tracking-/ },
    { pattern: /leading-/ },
    // { pattern: /line-clamp-/ },
    // { pattern: /list-/ },
    { pattern: /decoration-/ },
    { pattern: /underline/ },
    // { pattern: /(uppercase|lowercase|capitalize|normal-case)/ },
    // { pattern: /indent/ },
    // { pattern: /align-/ },
    // { pattern: /whitespace-/ },
    // { pattern: /break-/ },
    // { pattern: /hyphens-/ },
    // { pattern: /content-/ },
    // { pattern: /rounded-/ },
    // { pattern: /border-/ },
    // { pattern: /divide-/ },
    // { pattern: /outline/ },
    // { pattern: /ring-/ },
    // { pattern: /shadow-/ },
    // { pattern: /opacity-/ },
    // { pattern: /mix-/ },
    // { pattern: /border-/ },
    // { pattern: /table-/ },
    // { pattern: /caption-/ },
    // { pattern: /prose/ },
  ]
}
