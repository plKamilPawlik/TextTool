import { useEditor } from "~/contexts/editor";

export default function (props: { sidebarId: string }) {
	const { open } = useEditor();

	return (
		<div class="navbar w-full gap-2">
			<div>
				<label class="btn btn-ghost btn-square drawer-button text-xl" for={props.sidebarId}>
					<span class="icon-notebook" />
				</label>
			</div>
			<div class="grow">
				<h2 class="text-xl font-bold">TextTool</h2>
			</div>
			<div>
				<button class="btn btn-ghost btn-square text-xl" onClick={() => open()}>
					<span class="icon-plus" />
				</button>
			</div>
		</div>
	);
}
