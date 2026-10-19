import { HydrationScript } from "@solidjs/web";
import type { ParentProps } from "solid-js";

export default function Document(props: ParentProps) {
	const description = "Write, format, and keep your notes in one place.";
	const viewport = "width=device-width, viewport-fit=cover, initial-scale=1";

	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="description" content={description} />
				<meta name="viewport" content={viewport} />

				<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
				<meta name="theme-color" content="#1d232a" media="(prefers-color-scheme: dark)" />

				<link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180" />
				<link rel="icon" href="favicon.ico" type="image/x-icon" sizes="48x48" />
				<link rel="icon" href="favicon.svg" type="image/svg+xml" sizes="any" />
				<link rel="manifest" href="manifest.webmanifest" />

				<title>TextTool</title>

				<HydrationScript />
			</head>
			<body>{props.children}</body>
		</html>
	);
}
