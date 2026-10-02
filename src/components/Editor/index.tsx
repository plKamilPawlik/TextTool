import { Editor } from "@tiptap/core";
import { CharacterCount, Placeholder } from "@tiptap/extensions";
import { StarterKit } from "@tiptap/starter-kit";
import { onSettled } from "solid-js";

export let editorRef!: Editor;
export let elementRef!: HTMLDivElement;

export default function () {
	onSettled(() => {
		editorRef = new Editor({
			autofocus: true,
			element: elementRef,
			extensions: [
				StarterKit,
				CharacterCount,
				Placeholder.configure({
					placeholder: "Write something...",
				}),
			],
		});
	});

	return <div class="grow overflow-auto p-5" ref={elementRef} />;
}
