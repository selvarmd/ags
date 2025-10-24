import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "index.html", // copy index.html
          dest: ".",         // into dist folder
          rename: "404.html" // rename it
        }
      ]
    })
  ],
  base: "/ags/",
    server: {
    port: 3000,    // Optional
    open: true     // Optional
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
