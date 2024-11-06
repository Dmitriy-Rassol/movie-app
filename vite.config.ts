import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // если используете Vue
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@stores": resolve(__dirname, "./src/stores"),
    },
  },
  server: {
    host: true,
  },
});

