import { useNotes } from "~/contexts/notes";

export function DraftPreview(props: { note: Note }) {
	const { open } = useNotes();

	function openDraft(note: Note): void {
		open(note);
	}

	return (
		<div
			class="hover:cursor-pointer hover:opacity-60"
			role="button"
			tabindex={0}
			onClick={() => openDraft(props.note)}
		>
			<div class="h-24 flex flex-col gap-1">
				<p class="line-clamp-1 font-semibold" innerHTML={props.note.content} />
				<p class="line-clamp-2 font-extralight" innerHTML={props.note.content} />
				<p class="line-clamp-1 text-neutral-500 text-xs mt-auto">
					<time>{new Date(props.note.timestamp).toDateString()}</time>
				</p>
			</div>
		</div>
	);
}
