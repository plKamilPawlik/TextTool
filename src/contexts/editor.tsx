import { Editor } from "@tiptap/core";
import { CharacterCount, Placeholder } from "@tiptap/extensions";
import { StarterKit } from "@tiptap/starter-kit";
import { createContext, createSignal, onCleanup, ParentProps, useContext } from "solid-js";

export const EditorContext = createContext<{
	editor(): Editor | undefined;
	mount(ref: HTMLElement): void;
}>();

export function EditorProvider(props: ParentProps<{ content?: string }>) {
	const [editor, setEditor] = createSignal<Editor | undefined>(undefined, { equals: false });

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
		});

		setEditor(() => instance);
		onCleanup(() => instance.destroy());
	}

	return <EditorContext value={{ editor, mount }}>{props.children}</EditorContext>;
}

export function useEditor() {
	return useContext(EditorContext);
}
