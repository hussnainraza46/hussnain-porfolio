import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Momo Trust Sans", "sans-serif"],
        nurito: [ "Nunito", "sans-serif"]
      },
      colors: {
        primary: "#06b6d4", // cyan
        dark: "#0f172a", // dark blue/gray
      },
    },
  },
  plugins: [react(),
     tailwindcss()
  ],
})
