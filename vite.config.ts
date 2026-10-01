import solid from "@solidjs/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [solid({ start: true, diagnostics: true }), tailwindcss()],
	build: {
		target: "esnext",
		assetsInlineLimit: 0,
	},
	server: {
		port: 3000,
	},
});
