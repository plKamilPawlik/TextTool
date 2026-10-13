export function ButtonDelete(props: { delete(): void }) {
	return (
		<button class="btn btn-ghost btn-square btn-sm text-sm" onClick={() => props.delete()}>
			<span class="icon-trash" />
		</button>
	);
}
