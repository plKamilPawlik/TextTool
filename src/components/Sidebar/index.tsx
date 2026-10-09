import { For, Show } from "solid-js";

import { useEditor } from "~/contexts/editor";
import { useNotes } from "~/contexts/notes";

export default function (props: { sidebarId: string }) {
	const { editor, open } = useEditor();
	const { notes } = useNotes();

	return (
		<Show when={editor()}>
			<label for={props.sidebarId} class="drawer-overlay" />
			<div class="bg-base-200 flex flex-col gap-2 p-4 w-80 h-full">
				<ul class="list overflow-auto">
					<For each={notes()}>
						{(note) => (
							<li
								class="list-row hover:bg-base-300 hover:cursor-pointer"
								role="button"
								onClick={() => open(note)}
							>
								<div class="list-col-grow">
									<p class="font-semibold line-clamp-1" innerHTML={note.content} />
								</div>
								<div class="list-col-wrap">
									<time class="text-xs">{new Date(note.timestamp).toDateString()}</time>
								</div>
							</li>
						)}
					</For>
				</ul>
				<button class="btn btn-neutral mt-auto" onClick={() => open()}>
					<span class="icon-plus" /> New Note
				</button>
			</div>
		</Show>
	);
}
