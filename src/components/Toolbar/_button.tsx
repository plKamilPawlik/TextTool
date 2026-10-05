export function ActionButton(props: { icon: string; isActive: boolean; onClick(): void }) {
	return (
		<button
			class={["btn btn-sm btn-square text-base", { "btn-active": props.isActive }]}
			onClick={() => props.onClick()}
		>
			<span class={props.icon} />
		</button>
	);
}

export function CopyButton(props: { onClick(): Promise<void> }) {
	return (
		<button class="btn btn-primary btn-sm w-20" onClick={() => props.onClick()}>
			<span class="icon-clipboard-plus" />
			<span>Copy</span>
		</button>
	);
}

export function PasteButton(props: { onClick(): Promise<void> }) {
	return (
		<button class="btn btn-neutral btn-sm w-20" onClick={() => props.onClick()}>
			<span class="icon-clipboard-paste" />
			<span>Paste</span>
		</button>
	);
}
