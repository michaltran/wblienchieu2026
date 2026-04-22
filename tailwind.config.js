/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E73BE', // Main Brand Color
          foreground: '#FFFFFF',
          50: '#F0F9FF', // Lightest
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#1E73BE', // Match DEFAULT
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        secondary: {
          DEFAULT: '#F0F9FF', // Very light blue for backgrounds
          foreground: '#1E73BE',
        },
        muted: {
          DEFAULT: '#64748B',
          foreground: '#FFFFFF',
        },
        border: '#E2E8F0',
      },
      borderRadius: {
        'lg': '16px',
        'md': '12px',
        'sm': '8px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
