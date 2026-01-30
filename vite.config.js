import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Wajib sama persis dengan nama Repo GitHub (Huruf Besar/Kecil pengaruh!)
  base: "/Arif_Portofolio/", 
})