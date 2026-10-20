import { Show } from "solid-js";

import { useEditor } from "~/contexts/editor";
import { useLocale } from "~/contexts/locale";

import { SpeedDial } from "./_dial";

export default function () {
	const { editor } = useEditor();
	const { t } = useLocale();

	const characters = () => editor()!.storage.characterCount.characters();
	const words = () => editor()!.storage.characterCount.words();

	const selection = () => {
		const { from, to } = editor()!.state.selection;
		return editor()!.state.doc.textBetween(from, to);
	};

	return (
		<Show when={editor()}>
			<div class="dock dock-xs static justify-between">
				<div class="dock-label max-w-max text-nowrap text-xs">
					{words()} {t("status.words")} · {characters()} {t("status.characters")}
					{selection() && ` (${t("status.selection", { count: selection().length })})`}
				</div>
				<div class="relative opacity-100">
					<SpeedDial />
				</div>
			</div>
		</Show>
	);
}
