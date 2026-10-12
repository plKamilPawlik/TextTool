import { onSettled } from "solid-js";

import { Footer } from "./_footer";
import { Preview } from "./_preview";

export default function (props: { sidebarId: string }) {
	let checkbox!: HTMLInputElement;

	function closeSidebar(): void {
		checkbox.checked = false;
	}

	onSettled(() => {
		checkbox = document.getElementById(props.sidebarId) as HTMLInputElement;
	});

	return (
		<>
			<label for={props.sidebarId} class="drawer-overlay" />
			<aside class="grid bg-base-200 w-80 h-full">
				<div class="flex flex-col overflow-hidden justify-between">
					<Preview closeSidebar={closeSidebar} />
					<Footer closeSidebar={closeSidebar} />
				</div>
			</aside>
		</>
	);
}
