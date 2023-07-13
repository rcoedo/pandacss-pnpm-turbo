import panda from "@pandacss/dev/postcss";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

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
