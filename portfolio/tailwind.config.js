/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#050505',
        panel: '#121212',
        panel2: '#181818',
        signal: '#ff2d55',
        signalglow: '#ff5470',
        muted: '#9ca3af',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, rgba(255,45,85,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(255,45,85,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255,45,85,0.35)',
        'glow-sm': '0 0 20px rgba(255,45,85,0.25)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        scan: 'scan 3s linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
