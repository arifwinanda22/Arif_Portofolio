import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Arif_Portofolio/' // ← HARUS sesuai dengan nama repo GitHub Anda
});
