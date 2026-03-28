/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E293B', // Slate-800 (Light Mode Text - Softer)
          light: '#E2E8F0',   // Slate-200 (Dark Mode Text - Softer)
        },
        secondary: {
          DEFAULT: '#64748B', // Slate-500 (Light Mode Muted)
          light: '#94A3B8',   // Slate-400 (Dark Mode Muted)
        },
        accent: {
          DEFAULT: '#3B82F6', // Blue-500 (Professional Azure)
          light: '#60A5FA',   // Blue-400 (Soft Azure)
        },
        // Legacy Mappings (Redirected for stability)
        navy: '#1E293B',
        'navy-deep': '#0F172A', // Slate-900 (Softer Dark BG)
        steel: '#3B82F6', 
        mint: '#60A5FA',
        ghost: '#E2E8F0',
        background: {
          dark: '#0F172A',
          light: '#F8FAFC',
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
