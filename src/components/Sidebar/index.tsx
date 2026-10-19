import { createEffect } from "solid-js";

import { useNotes } from "~/contexts/notes";

import { Drafts } from "./_drafts";
import { Footer } from "./_footer";
import { Version } from "./_version";

export default function (props: { sidebarId: string }) {
	let sidebarToggle!: HTMLInputElement;

	const { draft } = useNotes();

	createEffect(draft, () => {
		// automatically close the sidebar when a draft is selected
		sidebarToggle = document.getElementById(props.sidebarId) as HTMLInputElement;
		sidebarToggle.checked = false;
	});

	return (
		<>
			<label for={props.sidebarId} class="drawer-overlay" />
			<aside class="grid w-80 h-full bg-base-200 border-base-300 border-r">
				<div class="flex flex-col overflow-hidden">
					<Version />
					<Drafts />
					<Footer />
				</div>
			</aside>
		</>
	);
}
