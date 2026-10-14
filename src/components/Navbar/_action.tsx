import { useEditor } from "~/contexts/editor";
import { useLocale } from "~/contexts/locale";

export function Grammar() {
	return (
		<button class="btn btn-ghost btn-square text-lg" disabled>
			<span class="icon-spell-check" />
		</button>
	);
}

export function EditMode() {
	const { editor } = useEditor();

	function toggle(mode: boolean) {
		editor()!.setEditable(mode);
	}

	return (
		<label class="btn btn-ghost btn-square swap text-lg">
			<input
				type="checkbox"
				checked={editor()?.options.editable}
				onChange={(e) => toggle(e.target.checked)}
			/>
			<span class="swap-on icon-pen-line" />
			<span class="swap-off icon-pen-off" />
		</label>
	);
}

export function Locale() {
	const { lang, setLang } = useLocale();

	return (
		<select
			class="select select-ghost text-lg w-16"
			onChange={(e) => setLang(e.target.value)}
			value={lang()}
		>
			<option disabled selected>
				Language
			</option>
			<option value="en">🇺🇸</option>
			<option value="pl">🇵🇱</option>
		</select>
	);
}
