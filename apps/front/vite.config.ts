import { defineConfig } from "vite";
import panda from "@pandacss/dev/postcss";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [panda],
    },
  },
  optimizeDeps: {
    exclude: ["@mono/mono-panda"],
  },
});
