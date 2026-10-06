import { For, Show } from "solid-js";

import { useEditor } from "~/contexts/editor";
import { useNotes } from "~/contexts/notes";

export default function (props: { controlId: string }) {
	const { editor, open } = useEditor();
	const { notes } = useNotes();

	function getNoteTitle(note: Note): string {
		const tmp = document.createElement("div");
		tmp.innerHTML = note.content;
		return tmp.textContent || "Temporary Note";
	}

	return (
		<Show when={editor()}>
			<label for={props.controlId} class="drawer-overlay" />
			<ul class="menu bg-base-200 p-4 w-80 h-full">
				<For each={notes()}>
					{(note) => (
						<li>
							<a class="line-clamp-1" role="button" onClick={() => open(note)}>
								{getNoteTitle(note)}
							</a>
						</li>
					)}
				</For>
			</ul>
		</Show>
	);
}
