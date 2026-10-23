/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F52",
          navyDark: "#061334",
          navyLight: "#132D6E",
          royal: "#1648A0",
          royalLight: "#2563EB",
          royalSoft: "#EEF4FF",
          gold: "#F5B82E",
          goldLight: "#FDE68A",
          goldDark: "#C78E10",
          goldDeep: "#9A6A04",
          lightBg: "#F6F8FC",
          cardBg: "#FFFFFF",
          borderMuted: "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif']
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #061334 0%, #0B1F52 50%, #1648A0 100%)',
        'navy-radial': 'radial-gradient(circle at top right, #1648A0 0%, #0B1F52 60%, #061334 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FCE082 0%, #F5B82E 50%, #C78E10 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(246, 248, 252, 0.9) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(245, 184, 46, 0.35)',
        'navy-glow': '0 20px 40px -15px rgba(11, 31, 82, 0.3)',
        'premium-card': '0 10px 30px -10px rgba(11, 31, 82, 0.08), 0 2px 6px -2px rgba(11, 31, 82, 0.04)',
        'premium-hover': '0 20px 40px -10px rgba(11, 31, 82, 0.15), 0 4px 12px -2px rgba(11, 31, 82, 0.08)',
      }
    },
  },
  plugins: [],
}
