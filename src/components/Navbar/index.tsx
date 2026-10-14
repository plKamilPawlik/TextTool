import { Editable, Locale, Grammar } from "./_action";

export default function (props: { sidebarId: string }) {
	return (
		<div class="navbar w-full gap-2">
			<div class="xl:hidden">
				<label class="btn btn-ghost btn-square drawer-button text-xl" for={props.sidebarId}>
					<span class="icon-notebook" />
				</label>
			</div>
			<div class="flex flex-row flex-1 select-none">
				<h2 class="text-xl font-bold">TextTool</h2>
			</div>
			<div class="flex felx-row gap-2 items-center">
				<Grammar />
				<Editable />
				<Locale />
			</div>
		</div>
	);
}
