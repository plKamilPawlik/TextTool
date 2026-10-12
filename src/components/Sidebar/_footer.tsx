import { useEditor } from "~/contexts/editor";

export function Footer(props: { closeSidebar(): void }) {
	const { open } = useEditor();

	function openNote(): void {
		props.closeSidebar();
		open();
	}

	return (
		<div class="dock sticky bottom-0 bg-base-200 mt-auto">
			<button class="btn btn-neutral btn-wide flex-row" onClick={() => openNote()}>
				<span class="icon-plus" /> New Note
			</button>
		</div>
	);
}
