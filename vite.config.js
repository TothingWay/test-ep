import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// element-plus 按需引入样式
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      useSource: true,
    }),
  ],
});
