import { Editor } from "@tiptap/core";
import { CharacterCount, Placeholder } from "@tiptap/extensions";
import { StarterKit } from "@tiptap/starter-kit";
import { createContext, createSignal, flush, ParentProps, useContext } from "solid-js";

import { createDebounce } from "~/hooks/debounce";

import { useNotes } from "./notes";

export const EditorContext = createContext<{
	editor(): Editor | undefined;
	mount(ref: HTMLElement): void;
	open(note?: Note): void;
}>();

export function EditorProvider(props: ParentProps<{ content?: string }>) {
	const { remove, save } = useNotes();

	const [editor, setEditor] = createSignal<Editor | undefined>(undefined, { equals: false });
	const [noteId, setNoteId] = createSignal<IDBValidKey | undefined>(undefined);

	const saveEdit = createDebounce((editor: Editor) => {
		const _id = noteId();

		if (editor.storage.characterCount.words()) {
			const content = editor.getHTML();
			const timestamp = Date.now();

			save({ _id, content, timestamp }).then(setNoteId);
		} else if (_id) {
			remove(_id);
		}
	}, 1000);

	function mount(ref: HTMLElement): void {
		const instance = new Editor({
			autofocus: true,
			content: props.content,
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

		setEditor(instance);
	}

	function open(note?: Note): void {
		flush(() => setNoteId(note?._id));
		editor()!.commands.setContent(note?.content || "");
	}

	return <EditorContext value={{ editor, mount, open }}>{props.children}</EditorContext>;
}

export function useEditor() {
	return useContext(EditorContext);
}
