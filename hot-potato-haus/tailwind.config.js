/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5ECD7',
        'cream-dark': '#EDD9B4',
        brown: {
          50:  '#fdf6ee',
          100: '#f5e6cc',
          200: '#e8c89a',
          300: '#d9a166',
          400: '#c97f3b',
          500: '#b86520',
          600: '#924e18',
          700: '#6d3812',
          800: '#4a250c',
          900: '#3D1C02',
          950: '#2a1200',
        },
        amber: {
          potato: '#D4A017',
        },
        rust: {
          DEFAULT: '#C4572A',
          dark: '#8B1A1A',
          light: '#D4724A',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #F5ECD7 0%, #EDD9B4 50%, #D4A017 100%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(61,28,2,0.3) 0%, rgba(61,28,2,0.7) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
