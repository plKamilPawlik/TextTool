export default function (props: { controlId: string }) {
	return (
		<div class="navbar w-full">
			<div class="flex-none">
				<label for={props.controlId} class="btn btn-square btn-ghost drawer-button text-xl">
					<span class="icon-notebook" />
				</label>
			</div>
			<div class="flex-1">
				<span class="text-xl font-bold">TextTool</span>
			</div>
		</div>
	);
}
