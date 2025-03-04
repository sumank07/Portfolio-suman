import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: ' http://localhost:3001/sumank07/portfolio-suman.git ',  // Ensures relative paths for assets
});