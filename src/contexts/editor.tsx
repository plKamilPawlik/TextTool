import { Editor } from "@tiptap/core";
import { CharacterCount, Placeholder } from "@tiptap/extensions";
import { StarterKit } from "@tiptap/starter-kit";
import {
	createContext,
	createSignal,
	flush,
	onCleanup,
	ParentProps,
	useContext,
} from "solid-js";

import { useNotes } from "./notes";

export const EditorContext = createContext<{
	editor(): Editor | undefined;
	mount(ref: HTMLElement): void;
	open(note?: Note): void;
}>();

export function EditorProvider(props: ParentProps<{ content?: string }>) {
	const { save } = useNotes();

	const [editor, setEditor] = createSignal<Editor | undefined>(undefined, { equals: false });
	const [noteId, setNoteId] = createSignal<number | undefined>(undefined);

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
				setNoteId(save({ _id: noteId(), content: editor.getHTML(), timestamp: Date.now() }));
			},
		});

		setEditor(() => instance);
		onCleanup(() => instance.destroy());
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
