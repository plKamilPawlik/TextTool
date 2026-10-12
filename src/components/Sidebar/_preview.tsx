export function Preview(props: { note: Note; open(): void }) {
	return (
		<li
			class="list-row hover:bg-base-300 hover:cursor-pointer"
			role="button"
			onClick={() => props.open()}
		>
			<div class="list-col-grow line-clamp-2">
				<p class="font-semibold" innerHTML={props.note.content} />
			</div>
			<div class="list-col-wrap line-clamp-1">
				<p class="font-light text-xs">
					<time>{new Date(props.note.timestamp).toDateString()}</time>
				</p>
			</div>
		</li>
	);
}
