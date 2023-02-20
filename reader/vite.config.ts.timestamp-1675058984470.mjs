// vite.config.ts
import { defineConfig } from "file:///Users/ted/Documents/docent/node_modules/.pnpm/vite@3.1.8_terser@5.16.1/node_modules/vite/dist/node/index.js";
import path from "node:path";
import react from "file:///Users/ted/Documents/docent/node_modules/.pnpm/@vitejs+plugin-react@2.1.0_vite@3.1.8/node_modules/@vitejs/plugin-react/dist/index.mjs";
import legacy from "file:///Users/ted/Documents/docent/node_modules/.pnpm/vite-plugin-legacy-no-module@2.4.1_terser@5.16.1+vite@3.1.8/node_modules/vite-plugin-legacy-no-module/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/ted/Documents/docent/reader";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    port: 8080
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: true
            }
          ]
        ]
      }
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
      renderModernChunks: false
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdGVkL0RvY3VtZW50cy9kb2NlbnQvcmVhZGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdGVkL0RvY3VtZW50cy9kb2NlbnQvcmVhZGVyL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90ZWQvRG9jdW1lbnRzL2RvY2VudC9yZWFkZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IGxlZ2FjeSBmcm9tICd2aXRlLXBsdWdpbi1sZWdhY3ktbm8tbW9kdWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJylcbiAgICB9XG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDgwODBcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KHtcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAnYmFiZWwtcGx1Z2luLXN0eWxlZC1jb21wb25lbnRzJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgICAgICAgICAgIGZpbGVOYW1lOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSksXG4gICAgbGVnYWN5KHtcbiAgICAgIHRhcmdldHM6IFsnZGVmYXVsdHMnLCAnbm90IElFIDExJ10sXG4gICAgICByZW5kZXJNb2Rlcm5DaHVua3M6IGZhbHNlXG4gICAgfSlcbiAgXVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1IsU0FBUyxvQkFBb0I7QUFDclQsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFIbkIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxjQUNFLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQSxZQUNaO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsWUFBWSxXQUFXO0FBQUEsTUFDakMsb0JBQW9CO0FBQUEsSUFDdEIsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
