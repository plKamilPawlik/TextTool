import { Editor } from "@tiptap/core";
import { CharacterCount, Placeholder } from "@tiptap/extensions";
import { StarterKit } from "@tiptap/starter-kit";
import { createContext, createEffect, createSignal, ParentProps, useContext } from "solid-js";

import { createDebounce } from "~/hooks/debounce";

import { useLocale } from "./locale";
import { useNotes } from "./notes";

export const EditorContext = createContext<{
	editor(): Editor | null;
	mount(ref: HTMLElement): void;
}>();

export function EditorProvider(props: ParentProps) {
	let editorInstance!: Editor;
	let placeholderText!: string;

	const { draft, edit, remove } = useNotes();
	const { t } = useLocale();

	const [editor, setEditor] = createSignal<Editor | null>(null, { equals: false });

	const translation = () => t("editor.placeholder");
	const updateDraft = createDebounce((editor: Editor) => {
		if (editor.storage.characterCount.characters()) {
			edit({ content: editor.getHTML(), timestamp: Date.now() });
		} else {
			remove(draft()._id);
		}
	}, 700);

	function mount(ref: HTMLElement): void {
		editorInstance?.destroy();
		editorInstance = new Editor({
			autofocus: true,
			element: ref,
			extensions: [
				StarterKit,
				CharacterCount,
				Placeholder.configure({
					placeholder: () => placeholderText,
				}),
			],
			onTransaction({ editor }) {
				setEditor(editor);
			},
			onUpdate({ editor }) {
				updateDraft(editor);
			},
		});

		setEditor(editorInstance);
	}

	function setContent(note: Note, prev?: Note): void {
		if (note._id !== prev?._id) {
			editorInstance.commands.setContent(note.content);
		}
	}

	function setPlaceholder(text: string): void {
		placeholderText = text;
		editorInstance.view.dispatch(editorInstance.state.tr);
	}

	createEffect(draft, (note, prev) => setContent(note, prev));
	createEffect(translation, (text) => setPlaceholder(text));

	return <EditorContext value={{ editor, mount }}>{props.children}</EditorContext>;
}

export function useEditor() {
	return useContext(EditorContext);
}
