// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path as needed
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards', // Slower fade-in animation
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(0)', // Keep the original position
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)', // Keep the original position
          },
        },
      },
    },
  },
  plugins: [],
};
