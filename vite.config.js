import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Update this base path to match your GitHub repository name
  // If your repo is "merry-christmas-yana", change it to '/merry-christmas-yana/'
  // If deploying to root domain, use '/' instead
  base: '/Merry-Christmas-Yana/',
})

