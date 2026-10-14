import { Editor } from "@tiptap/core";
import { CharacterCount, Placeholder } from "@tiptap/extensions";
import { StarterKit } from "@tiptap/starter-kit";
import { createContext, createEffect, createSignal, ParentProps, useContext } from "solid-js";

import { createDebounce } from "~/hooks/debounce";

import { useNotes } from "./notes";

export const EditorContext = createContext<{
	editor(): Editor | null;
	mount(ref: HTMLElement): void;
}>();

export function EditorProvider(props: ParentProps) {
	let editorInstance!: Editor;

	const { draft, edit, remove } = useNotes();
	const [editor, setEditor] = createSignal<Editor | null>(null, { equals: false });

	const saveEdit = createDebounce((editor: Editor) => {
		if (editor.storage.characterCount.words()) {
			edit({ content: editor.getHTML(), timestamp: Date.now() });
		} else {
			remove(draft()._id);
		}
	}, 700);

	function mount(ref: HTMLElement): void {
		editorInstance = new Editor({
			autofocus: true,
			element: ref,
			extensions: [
				StarterKit,
				CharacterCount,
				Placeholder.configure({
					placeholder: "Write something...",
				}),
			],
			onTransaction({ editor }) {
				setEditor(editor);
			},
			onUpdate({ editor }) {
				saveEdit(editor);
			},
		});

		setEditor(editorInstance);
	}

	createEffect(
		() => draft().content,
		(content, previous) => {
			if (content !== previous) editorInstance.commands.setContent(content);
		},
	);

	return <EditorContext value={{ editor, mount }}>{props.children}</EditorContext>;
}

export function useEditor() {
	return useContext(EditorContext);
}
