import { For } from "solid-js";

import { useNotes } from "~/contexts/notes";

import { DeleteNote, ToggleBookmark } from "./_action";
import { DraftPreview } from "./_preview";

export function Drafts() {
	const { notes } = useNotes();

	return (
		<ul class="list overflow-auto p-2">
			<For each={notes()} keyed={(note) => note._id}>
				{(note) => (
					<li class="list-row gap-1">
						<div class="list-col-grow">
							<DraftPreview note={note()} />
						</div>
						<div class="flex flex-col gap-1">
							<ToggleBookmark note={note()} />
							<DeleteNote note={note()} />
						</div>
					</li>
				)}
			</For>
		</ul>
	);
}
