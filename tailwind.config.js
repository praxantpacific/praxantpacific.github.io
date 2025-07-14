// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateGlow: {
          '0%': { transform: 'rotate(0deg)', opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'rotate(360deg)', opacity: '1' },
        },
      },
      animation: {
        'rotate-glow': 'rotateGlow 6s linear infinite',
      },
    },
  },
  plugins: [],
}
