import { onSettled } from "solid-js";

import { Footer } from "./_footer";
import { PreviewList } from "./_preview";

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
			<aside class="grid w-80 h-full bg-base-200 border-base-300 border-r">
				<div class="flex flex-col overflow-hidden justify-between">
					<PreviewList closeSidebar={closeSidebar} />
					<Footer closeSidebar={closeSidebar} />
				</div>
			</aside>
		</>
	);
}
