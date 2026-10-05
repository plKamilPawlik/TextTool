import path from "path";

import solid from "@solidjs/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	base: "/TextTool/",
	build: {
		target: "esnext",
		assetsInlineLimit: 0,
	},
	plugins: [
		solid({ diagnostics: true, start: true }),
		tailwindcss(),
		VitePWA({ registerType: "autoUpdate" }),
	],
	resolve: {
		alias: {
			"~": path.resolve("src"),
		},
	},
	server: {
		port: 3000,
	},
});
