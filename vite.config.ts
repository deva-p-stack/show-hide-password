import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base:'/show-hide-password/',
  plugins: [
    tailwindcss(),
  ],
})
