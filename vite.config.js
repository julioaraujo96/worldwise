import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// Derive the directory path from import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
       resolve: {
       alias: {
         '@components': path.resolve(__dirname, 'src/components'),
         '@pages': path.resolve(__dirname, 'src/pages'),
       },
     },
})
