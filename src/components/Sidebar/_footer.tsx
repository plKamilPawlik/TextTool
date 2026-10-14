import { useNotes } from "~/contexts/notes";

export function Footer() {
	const { open } = useNotes();

	return (
		<div class="dock dock-xs static bg-base-200 xl:bg-base-100">
			<button class="btn btn-neutral btn-wide flex-row text-base" onClick={() => open({})}>
				<span class="icon-plus" /> New Note
			</button>
		</div>
	);
}
