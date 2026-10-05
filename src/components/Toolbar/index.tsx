import { Show } from "solid-js";

import { useEditor } from "~/contexts/editor";

import { ActionButton, CopyButton, PasteButton } from "./_button";
import { HorizontalDivider } from "./_divider";

export default function () {
	const { editor } = useEditor();

	async function copyToClipboard(): Promise<void> {
		const html = editor()!.getHTML();
		const text = editor()!.getText();

		const htmlBlob = new Blob([html], { type: "text/html" });
		const textBlob = new Blob([text], { type: "text/plain" });

		return navigator.clipboard.write([
			new ClipboardItem({
				"text/html": htmlBlob,
				"text/plain": textBlob,
			}),
		]);
	}

	async function pasteFromClipboard(): Promise<void> {
		const text = await navigator.clipboard.readText();

		editor()!.commands.insertContent(text);
		editor()!.commands.focus();
	}

	return (
		<Show when={editor()}>
			<div class="bg-base-200 border-t border-base-300">
				<div class="flex flex-nowrap gap-1 px-2 py-1 overflow-x-auto">
					{editor()!.isEmpty ? (
						<PasteButton onClick={() => pasteFromClipboard()} />
					) : (
						<CopyButton onClick={() => copyToClipboard()} />
					)}
					<HorizontalDivider />
					<ActionButton
						icon="icon-heading-1"
						isActive={editor()!.isActive("heading", { level: 1 })}
						onClick={() => editor()!.chain().focus().toggleHeading({ level: 1 }).run()}
					/>
					<ActionButton
						icon="icon-heading-2"
						isActive={editor()!.isActive("heading", { level: 2 })}
						onClick={() => editor()!.chain().focus().toggleHeading({ level: 2 }).run()}
					/>
					<ActionButton
						icon="icon-heading-3"
						isActive={editor()!.isActive("heading", { level: 3 })}
						onClick={() => editor()!.chain().focus().toggleHeading({ level: 3 }).run()}
					/>
					<ActionButton
						icon="icon-type"
						isActive={editor()!.isActive("paragraph")}
						onClick={() => editor()!.chain().focus().setParagraph().run()}
					/>
					<ActionButton
						icon="icon-remove-formatting"
						isActive={false}
						onClick={() => editor()!.chain().focus().unsetAllMarks().clearNodes().run()}
					/>
					<HorizontalDivider />
					<ActionButton
						icon="icon-bold"
						isActive={editor()!.isActive("bold")}
						onClick={() => editor()!.chain().focus().toggleBold().run()}
					/>
					<ActionButton
						icon="icon-italic"
						isActive={editor()!.isActive("italic")}
						onClick={() => editor()!.chain().focus().toggleItalic().run()}
					/>
					<ActionButton
						icon="icon-underline"
						isActive={editor()!.isActive("underline")}
						onClick={() => editor()!.chain().focus().toggleUnderline().run()}
					/>
					<ActionButton
						icon="icon-strikethrough"
						isActive={editor()!.isActive("strike")}
						onClick={() => editor()!.chain().focus().toggleStrike().run()}
					/>
					<HorizontalDivider />
					<ActionButton
						icon="icon-list-ordered"
						isActive={editor()!.isActive("orderedList")}
						onClick={() => editor()!.chain().focus().toggleOrderedList().run()}
					/>
					<ActionButton
						icon="icon-list"
						isActive={editor()!.isActive("bulletList")}
						onClick={() => editor()!.chain().focus().toggleBulletList().run()}
					/>
					<ActionButton
						icon="icon-text-quote"
						isActive={editor()!.isActive("blockquote")}
						onClick={() => editor()!.chain().focus().toggleBlockquote().run()}
					/>
				</div>
			</div>
		</Show>
	);
}
