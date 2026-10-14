import { useLocale } from "~/contexts/locale";

export function SpeedDial() {
	const { t } = useLocale();

	return (
		<div class="fab absolute">
			<div class="btn btn-lg btn-circle btn-primary" role="button" tabindex={0}>
				<span class="icon-plus" />
			</div>

			<div class="btn btn-lg btn-circle btn-error fab-close" role="button">
				<span class="icon-x" />
			</div>

			<div class="tooltip tooltip-left" data-tip={t("dock.clearStyles")}>
				<button class="btn btn-lg btn-circle" aria-label={t("dock.clearStyles")}>
					<span class="icon-broom-sparkles" />
				</button>
			</div>

			<div class="tooltip tooltip-left" data-tip={t("dock.copyPlainText")}>
				<button class="btn btn-lg btn-circle" aria-label={t("dock.copyPlainText")}>
					<span class="icon-copy" />
				</button>
			</div>

			<div class="tooltip tooltip-left" data-tip={t("dock.createNote")}>
				<button class="btn btn-lg btn-circle" aria-label={t("dock.createNote")}>
					<span class="icon-sticky-note-plus" />
				</button>
			</div>

			<div class="tooltip tooltip-left" data-tip={t("dock.deleteNote")}>
				<button class="btn btn-lg btn-circle" aria-label={t("dock.deleteNote")}>
					<span class="icon-trash" />
				</button>
			</div>
		</div>
	);
}
