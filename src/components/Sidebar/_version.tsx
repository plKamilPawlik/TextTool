import { useApp } from "~/contexts/app";

export function Version() {
	const { version } = useApp();

	return (
		<div class="px-3 py-2">
			<p class="inline-flex gap-1 text-xs opacity-60">
				<span class="icon-info" /> TextTool v{version()}
			</p>
		</div>
	);
}
