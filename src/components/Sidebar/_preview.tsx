import { For } from "solid-js";

import { useEditor } from "~/contexts/editor";
import { useNotes } from "~/contexts/notes";

export function Preview(props: { closeSidebar(): void }) {
	const { open } = useEditor();
	const { notes, remove } = useNotes();

	function openNote(note: Note): void {
		props.closeSidebar();
		open(note);
	}

	function safeRemove(note: Note) {
		if (confirm("Are you sure you want to delete this note?")) {
			remove(note);
		}
	}

	return (
		<ul class="list p-2">
			<For each={notes()} keyed={(note) => note._id}>
				{(note) => (
					<li class="list-row">
						<div
							class="list-col-grow hover:cursor-pointer hover:opacity-60"
							role="button"
							tabindex={0}
							onClick={() => openNote(note())}
						>
							<p class="line-clamp-2 font-semibold" innerHTML={note().content} />
							<p class="line-clamp-1 text-neutral-500 text-xs">
								<time>{new Date(note().timestamp).toDateString()}</time>
							</p>
						</div>
						<div>
							<button
								class="btn btn-ghost btn-square btn-sm text-sm"
								onClick={() => safeRemove(note())}
							>
								<span class="icon-trash" />
							</button>
						</div>
					</li>
				)}
			</For>
		</ul>
	);
}
