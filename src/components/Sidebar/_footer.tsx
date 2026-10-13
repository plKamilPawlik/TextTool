import { useEditor } from "~/contexts/editor";

export function Footer(props: { closeSidebar(): void }) {
	const { open } = useEditor();

	function openNote(): void {
		props.closeSidebar();
		open();
	}

	return (
		<div class="dock dock-xs static bg-base-200 xl:bg-base-100">
			<button class="btn btn-neutral btn-wide flex-row" onClick={() => openNote()}>
				<span class="icon-plus" /> New Note
			</button>
		</div>
	);
}
