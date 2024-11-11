import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mi-cv/', // Cambia 'nombre-del-repo' por el nombre real de tu repositorio
  plugins: [react()],
})
