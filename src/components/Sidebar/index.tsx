export default function (props: { controlId: string }) {
	return (
		<>
			<label for={props.controlId} class="drawer-overlay" />
			<ul class="menu bg-base-200 min-h-full w-80 p-4">
				<li>
					<a>Sidebar Item 1</a>
				</li>
				<li>
					<a>Sidebar Item 2</a>
				</li>
			</ul>
		</>
	);
}
