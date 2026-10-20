import { useLocale } from "~/contexts/locale";
import { useNotes } from "~/contexts/notes";

export function Footer() {
	const { open } = useNotes();
	const { t } = useLocale();

	return (
		<div class="dock dock-xs static">
			<div class="max-w-full opacity-100">
				<button class="btn btn-neutral btn-wide flex-row text-base" onClick={() => open({})}>
					<span class="icon-plus" /> {t("notes.new")}
				</button>
			</div>
		</div>
	);
}
