import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@comp": path.resolve(__dirname, "./src/components"),
      "@Pages": path.resolve(__dirname, "./src/Pages"),
      // "@super": path.resolve(__dirname, "./src/components/super-admin"),
      // "@admin": path.resolve(__dirname, "./src/components/adminpannel"),
    },
  },
  build: {
    outDir: "build",
  },
  plugins: [reactRefresh(), svgr()],
});
