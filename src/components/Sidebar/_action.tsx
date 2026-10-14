export function DeleteNote(props: { delete(): void }) {
	return (
		<button class="btn btn-ghost btn-square btn-sm text-base" onClick={() => props.delete()}>
			<span class="icon-trash" />
		</button>
	);
}

export function ToggleBookmark() {
	return (
		<label class="btn btn-ghost btn-square btn-sm text-base swap">
			<input type="checkbox" />
			<span class="swap-on icon-bookmark" />
			<span class="swap-off icon-clock-fading" />
		</label>
	);
}
