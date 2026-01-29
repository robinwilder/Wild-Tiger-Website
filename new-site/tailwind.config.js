/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (Black & White Scheme)
        'wild-tiger-orange': '#000000',  // Black accent
        'deep-tech-blue': '#1A1A1A',     // Dark gray/charcoal
        'electric-cyan': '#4A4A4A',      // Medium gray

        // Neutral Colors
        'charcoal': '#000000',           // Pure black
        'slate-gray': '#6B6B6B',         // Medium gray
        'cool-gray': '#D1D5DB',          // Light gray
        'off-white': '#F9FAFB',          // Off-white

        // Semantic Colors (grayscale)
        'success-green': '#404040',      // Dark gray
        'warning-yellow': '#808080',     // Medium gray
        'error-red': '#2D2D2D',          // Dark gray
        'info-blue': '#505050',          // Gray
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'h1-desktop': '3.5rem',
        'h1-mobile': '2.5rem',
        'h2-desktop': '2.5rem',
        'h2-mobile': '2rem',
        'h3-desktop': '2rem',
        'h3-mobile': '1.75rem',
        'h4': '1.5rem',
        'h5': '1.25rem',
        'body-large': '1.125rem',
        'body': '1rem',
        'small': '0.875rem',
        'xsmall': '0.75rem',
      },
      spacing: {
        'section-sm': '3rem',
        'section-md': '4rem',
        'section-lg': '6rem',
        'section-xl': '8rem',
      },
    },
  },
  plugins: [],
}
