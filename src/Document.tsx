import { HydrationScript } from "@solidjs/web";
import type { ParentProps } from "solid-js";

export default function Document(props: ParentProps) {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, viewport-fit=cover, initial-scale=1"
				/>
				<link rel="icon" type="image/x-icon" href="favicon.ico" />
				<title>TextTool</title>
				<HydrationScript />
			</head>
			<body>{props.children}</body>
		</html>
	);
}
