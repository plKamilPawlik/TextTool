import { For } from "solid-js";

import { useEditor } from "~/contexts/editor";
import { useNotes } from "~/contexts/notes";

import { Preview } from "./_preview";

export default function (props: { sidebarId: string }) {
	const { open } = useEditor();
	const { notes } = useNotes();

	return (
		<>
			<label for={props.sidebarId} class="drawer-overlay" />
			<div class="bg-base-200 grid h-full w-80">
				<div class="flex flex-col gap-2 p-4 overflow-hidden">
					<ul class="list flex-col-reverse overflow-auto">
						<For each={notes()} keyed={(note) => note._id}>
							{(note) => <Preview note={note()} open={() => open(note())} />}
						</For>
					</ul>
					<button class="btn btn-neutral mt-auto">
						<span class="icon-plus" /> New Note
					</button>
				</div>
			</div>
		</>
	);
}
