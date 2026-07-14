/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3EDE1',
        'paper-shadow': '#E4D9C4',
        'ink-red': '#B5342E',
        'deep-ink': '#2B211C',
        gold: '#C7912F',
      },
      fontFamily: {
        display: ['Anton', 'Archivo Black', 'sans-serif'],
        serif: ['Fraunces', 'Libre Baskerville', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // fluid headline scale
        hero: ['clamp(2.5rem, 8vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        display: ['clamp(2rem, 5vw, 3.25rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        subhead: ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.15' }],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(43, 33, 28, 0.45)',
        'card-hover': '0 28px 60px -28px rgba(43, 33, 28, 0.55)',
      },
      keyframes: {
        'stamp-in': {
          '0%': { transform: 'scale(1.6) rotate(-8deg)', opacity: '0' },
          '60%': { transform: 'scale(0.92) rotate(2deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        'stamp-in': 'stamp-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
