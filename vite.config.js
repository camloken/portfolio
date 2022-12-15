import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  // build:{
  //   outDir: "./build",
  //   sourcemap: true,
  //   emptyOutDir: true,
  //   rollupOptions: {
  //     entryFileNames: "assets/[name].js",
  //     chunkFileNames: "assets/[name].js",
  //     assetFileNames: "assets/[name].[ext]",
  //   }
  // }
})
