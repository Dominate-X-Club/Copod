import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      colors: {
        bg: 'black',
        main: 'white',
        mainAccent: '#ffc800',
      },
      borderRadius: {
        base: '0px'
      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(256,256,256,1)',
        'base-black': '4px 4px 0 rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config