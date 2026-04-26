/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  colors: {
    background: '#F8FAFC', // light neutral (instead of dark blue)
    
    surface: {
      DEFAULT: '#FFFFFF',
      dim: '#F1F5F9',     // subtle gray
      bright: '#FFFFFF',
      card: '#FFFFFF',
    },

    primary: {
      DEFAULT: '#2563EB',   // strong blue (was light in dark mode)
      container: '#DBEAFE', // soft blue bg
      on: '#FFFFFF',        // text on primary
    },

    secondary: {
      DEFAULT: '#06B6D4',
      container: '#CFFAFE',
      on: '#003640',
    },

    accent: {
      blue: '#2563EB',
      cyan: '#06B6D4',
    },

    text: {
      primary: '#0F172A',  // near black
      secondary: '#475569',
      muted: '#94A3B8',
    },

    border: '#E2E8F0',
  },

  fontFamily: {
    heading: ['"Space Grotesk"', 'sans-serif'],
    body: ['Inter', 'sans-serif'],
  },

  borderRadius: {
    xl: '1.5rem',
  },

  backgroundImage: {
    'brand-gradient': 'linear-gradient(to right, #2563eb, #06b6d4)',
  },
  boxShadow: {
    'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
  },
},
  },
  plugins: [],
};

