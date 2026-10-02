import { createStore, onSettled } from "solid-js";

import { editorRef } from "../Editor";

export default function () {
	const [stats, setStats] = createStore({
		selection: "",
		characters: 0,
		words: 0,
	});

	onSettled(() => {
		editorRef.on("selectionUpdate", ({ editor }) => {
			const { from, to } = editor.state.selection;

			setStats(() => ({
				selection: editor.state.doc.textBetween(from, to, "\n"),
				characters: editor.storage.characterCount.characters(),
				words: editor.storage.characterCount.words(),
			}));
		});
	});

	return (
		<div class="dock dock-xs static">
			<div class="max-w-min">
				<span class="dock-label text-nowrap text-xs">
					{stats.words} words · {stats.characters} characters
					{stats.selection && ` (${stats.selection.length} selected)`}
				</span>
			</div>
		</div>
	);
}
