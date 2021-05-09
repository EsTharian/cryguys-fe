module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          dark: '#F59E0B'
        },
        secondary: {
          DEFAULT: '#6B7280'
        },
        cardBg: {
          DEFAULT: '#d2dfeb',
          dark: '#374151'
        },
        bodyBg: {
          dark: '#1F2937'
        },
        body: {
          dark: '#FFF'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
