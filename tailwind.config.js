export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#0a0a0b', graphite: '#141417', steel: '#1d1d22', ember: '#ff6a1a' },
    fontFamily: { display: ['Sora', 'system-ui', 'sans-serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
}
