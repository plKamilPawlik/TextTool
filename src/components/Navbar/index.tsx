export default function (props: { controlId: string }) {
	return (
		<div class="navbar w-full gap-2">
			<div class="flex-none">
				<label for={props.controlId} class="btn btn-square btn-ghost drawer-button text-xl">
					<span class="icon-notebook" />
				</label>
			</div>
			<div class="grow">
				<h2 class="text-xl font-bold">TextTool</h2>
			</div>
		</div>
	);
}
