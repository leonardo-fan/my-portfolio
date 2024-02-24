import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(rgba(0, 0, 0, 0) 1px, rgba(1, 1, 1, 1) 1px)',
      },
      backgroundSize: {
        'sm': '3px 3px',
      }
    },
  },
  plugins: [],
}
export default config
