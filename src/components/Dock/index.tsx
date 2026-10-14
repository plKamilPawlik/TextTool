import { Show } from "solid-js";

import { useEditor } from "~/contexts/editor";

import { SpeedDial } from "./_dial";

export default function () {
	const { editor } = useEditor();

	const characters = () => editor()!.storage.characterCount.characters();
	const words = () => editor()!.storage.characterCount.words();

	const selection = () => {
		const { from, to } = editor()!.state.selection;
		return editor()!.state.doc.textBetween(from, to, "\n");
	};

	return (
		<Show when={editor()}>
			<div class="dock dock-xs static">
				<div class="max-w-min select-none">
					<span class="dock-label text-nowrap text-xs">
						{words()} words · {characters()} characters
						{selection() && ` (${selection().length} selected)`}
					</span>
				</div>
				<div class="max-w-full relative">
					<SpeedDial />
				</div>
			</div>
		</Show>
	);
}
