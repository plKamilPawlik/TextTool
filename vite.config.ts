import path from "path";

import solid from "@solidjs/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		solid({ start: true, diagnostics: true }),
		tailwindcss(),
		VitePWA({ registerType: "autoUpdate" }),
	],
	build: {
		target: "esnext",
		assetsInlineLimit: 0,
	},
	resolve: {
		alias: {
			"~": path.resolve("src"),
		},
	},
	server: {
		port: 3000,
	},
});
