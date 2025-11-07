import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/hussnain-porfolio/', // 👈 IMPORTANT: must match your repo name exactly
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Momo Trust Sans", "sans-serif"],
        nurito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#06b6d4", // cyan
        dark: "#0f172a", // dark blue/gray
      },
    },
  },
})