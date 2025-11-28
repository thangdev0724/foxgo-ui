import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (source: string, filename: string) => {
          // Don't add to files in styles folder to avoid circular imports
          if (filename.includes('styles')) return source
          return `@use "${path.resolve(dirname, 'src/styles/variables').replace(/\\/g, '/')}" as *;\n${source}`
        },
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'FoxgoUI',
      formats: ['es', 'umd'],
      fileName: (format) => `foxgo-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'primevue', '@primevue/themes'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          primevue: 'PrimeVue',
          '@primevue/themes': 'PrimeVueThemes',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.includes('style.css')) return 'foxgo-ui.css'
          return assetInfo.names?.[0] || 'asset'
        },
      },
    },
    cssCodeSplit: false,
  },
})
