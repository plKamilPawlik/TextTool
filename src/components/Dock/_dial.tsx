import { useEditor } from "~/contexts/editor";
import { useLocale } from "~/contexts/locale";
import { useNotes } from "~/contexts/notes";

export function SpeedDial() {
	const { editor } = useEditor();
	const { draft, open, remove } = useNotes();
	const { t } = useLocale();

	function clearStyles(): void {
		editor()!.chain().selectAll().unsetAllMarks().clearNodes().run();
	}

	function copyPlainText(): void {
		navigator.clipboard.writeText(editor()!.getText());
	}

	function safeDelete(): void {
		if (confirm(t("notes.confirmDelete"))) {
			remove(draft()._id);
		}
	}

	return (
		<div class="fab absolute">
			<div class="btn btn-lg btn-circle btn-primary" role="button" tabindex={0}>
				<span class="icon-plus" />
			</div>

			<div class="btn btn-lg btn-circle btn-error fab-close" role="button">
				<span class="icon-x" />
			</div>

			<div class="tooltip tooltip-left" data-tip={t("dock.clearStyles")}>
				<button
					class="btn btn-lg btn-circle"
					aria-label={t("dock.clearStyles")}
					onClick={() => clearStyles()}
				>
					<span class="icon-broom-sparkles" />
				</button>
			</div>

			<div class="tooltip tooltip-left" data-tip={t("dock.copyPlainText")}>
				<button
					class="btn btn-lg btn-circle"
					aria-label={t("dock.copyPlainText")}
					onClick={() => copyPlainText()}
				>
					<span class="icon-copy" />
				</button>
			</div>

			<div class="tooltip tooltip-left" data-tip={t("dock.createNote")}>
				<button
					class="btn btn-lg btn-circle"
					aria-label={t("dock.createNote")}
					onClick={() => open({})}
				>
					<span class="icon-sticky-note-plus" />
				</button>
			</div>

			<div class="tooltip tooltip-left" data-tip={t("dock.deleteNote")}>
				<button
					class="btn btn-lg btn-circle"
					aria-label={t("dock.deleteNote")}
					onClick={() => safeDelete()}
				>
					<span class="icon-trash" />
				</button>
			</div>
		</div>
	);
}
