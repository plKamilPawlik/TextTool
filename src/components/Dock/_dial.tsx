export function SpeedDial() {
	return (
		<div class="fab absolute">
			<div class="btn btn-lg btn-circle btn-primary" role="button" tabindex={0}>
				<span class="icon-plus" />
			</div>

			<div class="btn btn-lg btn-circle btn-error fab-close" role="button">
				<span class="icon-x" />
			</div>

			<div class="tooltip tooltip-left" data-tip="Clear all styles">
				<button class="btn btn-lg btn-circle">
					<span class="icon-broom-sparkles" />
				</button>
			</div>

			<div class="tooltip tooltip-left" data-tip="Copy as plain text">
				<button class="btn btn-lg btn-circle">
					<span class="icon-copy" />
				</button>
			</div>

			<div class="tooltip tooltip-left" data-tip="Create new note">
				<button class="btn btn-lg btn-circle">
					<span class="icon-sticky-note-plus" />
				</button>
			</div>

			<div class="tooltip tooltip-left" data-tip="Delete note">
				<button class="btn btn-lg btn-circle">
					<span class="icon-trash" />
				</button>
			</div>
		</div>
	);
}
