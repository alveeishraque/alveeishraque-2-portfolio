/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: '821px',
      },
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        mute: 'var(--mute)',
        line: 'var(--line)',
        hover: 'var(--hover)',
        card: 'var(--card)',
        side: 'var(--side)',
        tag: 'var(--tag)',
        tagfg: 'var(--tagfg)',
        accent: 'var(--accent)',
        'accent-t': 'var(--accent-t)',
        coral: 'var(--coral-bg)',
        'coral-fg': 'var(--coral-fg)',
      },
      boxShadow: {
        card: 'var(--shadow)',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          '-apple-system',
          '"Segoe UI"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}
