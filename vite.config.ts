import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "popup.html"), // Popup UI
        background: resolve(__dirname, "src/background.ts"), // Background script
        content: resolve(__dirname, "src/content.ts"), // Content script
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
