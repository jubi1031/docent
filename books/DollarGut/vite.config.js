import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import legacy from 'vite-plugin-legacy-no-module'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8081
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: true
            }
          ]
        ]
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
      renderModernChunks: false
    })
  ]
})
