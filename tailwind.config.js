/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        minecraft: {
          grass: '#7CB342',
          dirt: '#8D6E63',
          stone: '#616161',
          wood: '#8D6E63',
          water: '#2196F3',
          sky: '#87CEEB',
          dark: '#1A1A1A',
          emerald: '#50C878',
          diamond: '#B9F2FF',
          gold: '#FFD700',
          redstone: '#FF0000',
        }
      },
      fontFamily: {
        minecraft: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(80, 200, 120, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(80, 200, 120, 0.8)' },
        }
      },
      backgroundImage: {
        'minecraft-gradient': 'linear-gradient(135deg, #87CEEB 0%, #7CB342 50%, #8D6E63 100%)',
        'grass-pattern': 'repeating-linear-gradient(90deg, #7CB342 0%, #689F38 2px, #7CB342 4px)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
