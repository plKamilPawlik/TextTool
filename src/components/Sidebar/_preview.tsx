import { For } from "solid-js";

import { useEditor } from "~/contexts/editor";
import { useNotes } from "~/contexts/notes";

export function PreviewList(props: { closeSidebar(): void }) {
	const { open } = useEditor();
	const { notes, remove } = useNotes();

	function openNote(note: Note): void {
		props.closeSidebar();
		open(note);
	}

	function safeRemove(note: Note) {
		if (confirm("Are you sure you want to delete this note?")) {
			remove(note._id!).then(() => open());
		}
	}

	return (
		<ul class="list overflow-auto p-2">
			<For each={notes()} keyed={(note) => note._id}>
				{(note) => (
					<li class="list-row">
						<div class="list-col-grow">
							<PreviewNote note={note()} open={() => openNote(note())} />
						</div>
						<div>
							<ButtonDelete delete={() => safeRemove(note())} />
						</div>
					</li>
				)}
			</For>
		</ul>
	);
}

export function PreviewNote(props: { note: Note; open(): void }) {
	return (
		<div
			class="hover:cursor-pointer hover:opacity-60"
			role="button"
			tabindex={0}
			onClick={() => props.open()}
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

export function ButtonDelete(props: { delete(): void }) {
	return (
		<button class="btn btn-ghost btn-square btn-sm text-sm" onClick={() => props.delete()}>
			<span class="icon-trash" />
		</button>
	);
}
