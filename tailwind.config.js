/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d3557',
          light: '#f1faee',
        },
        secondary: {
          DEFAULT: '#457b9d',
          light: '#a8dadc',
        },
        accent: '#e63946', // Adding a punchy accent for visibility
        navy: '#1d3557',
        steel: '#457b9d',
        mint: '#a8dadc',
        ghost: '#f1faee',
        background: {
          dark: '#0a192f',
          light: '#ffffff',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
