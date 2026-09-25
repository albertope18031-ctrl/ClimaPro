/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nueva Paleta Oficial Obsidian Volt Industrial
        base: {
          dark: '#0B0F17',     // Obsidian Carbon - Fondo Base
        },
        surface: {
          card: '#141B28',     // Slate Titanio - Superficie / Cards
          input: '#0F1622',    // Fondo de inputs y selects
          border: '#232D42',   // Borde biselado titanio
          hover: '#1B2436',
        },
        volt: {
          primary: '#FF6B00',  // Industrial Volt Orange (sustituye al #00A3FF)
          hover: '#E65D00',
          light: '#FFF0E5',
        },
        solar: {
          secondary: '#FFA336', // Ámbar Solar
          dark: '#D97A0A',
        },
        frost: {
          sky: '#38BDF8',      // Micro-Acento Frío (únicamente copos de nieve)
        },
        neutral: {
          light: '#F9FAFB',    // Fondos Claros / Gris industrial neutro
        },
        success: {
          whatsapp: '#22C55E', // WhatsApp / Éxito
          hover: '#16A34A',
        },
        brand: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FFA336',      // Ámbar Solar
          500: '#FF6B00',      // Industrial Volt Orange
          600: '#E65D00',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
