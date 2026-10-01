import { Editor } from "@tiptap/core";
import { Placeholder } from "@tiptap/extensions";
import { StarterKit } from "@tiptap/starter-kit";
import { onSettled } from "solid-js";

import "./index.css";

export default function Notepad() {
	let editor!: HTMLDivElement;

	onSettled(() => {
		new Editor({
			element: editor,
			editorProps: {
				attributes: {
					class: "m-5 prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl focus:outline-none",
				},
			},
			extensions: [
				StarterKit,
				Placeholder.configure({
					placeholder: "Write something...",
				}),
			],
		});
	});

	return <div ref={editor} />;
}
