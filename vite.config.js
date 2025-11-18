import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: false,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
    build: {
      minify: "terser",
      terserOptions: {
        // Optional: Configure terser options here
        format: {
          comments: false, // Example: remove all comments
        },
        compress: {
          drop_console: true, // Example: remove console.log statements
        },
      },
    },
    target: "es2018",
  },
});
