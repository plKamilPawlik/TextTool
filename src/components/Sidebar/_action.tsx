import { useLocale } from "~/contexts/locale";
import { useNotes } from "~/contexts/notes";

export function DeleteNote(props: { note: Note }) {
	const { remove } = useNotes();
	const { t } = useLocale();

	function safeRemove(): void {
		if (confirm(t("notes.confirmDelete"))) {
			remove(props.note._id);
		}
	}

	return (
		<button
			class="btn btn-ghost btn-square btn-sm text-base"
			aria-label={t("dock.deleteNote")}
			onClick={() => safeRemove()}
		>
			<span class="icon-trash" />
		</button>
	);
}

export function ToggleBookmark(props: { note: Note }) {
	const { update } = useNotes();

	function toggle(mode: boolean) {
		update(props.note._id, { bookmark: mode });
	}

	return (
		<label class="btn btn-ghost btn-square btn-sm text-base swap">
			<input
				type="checkbox"
				checked={props.note.bookmark}
				onChange={(e) => toggle(e.target.checked)}
			/>
			<span class="swap-on icon-bookmark" />
			<span class="swap-off icon-clock-fading" />
		</label>
	);
}
