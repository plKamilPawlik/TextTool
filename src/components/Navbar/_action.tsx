import { useEditor } from "~/contexts/editor";
import { useLocale } from "~/contexts/locale";
import { useTheme } from "~/contexts/theme";

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

export function GrammarCheck() {
	return (
		<button class="btn btn-ghost btn-square text-lg" disabled>
			<span class="icon-spell-check" />
		</button>
	);
}

export function LocaleController() {
	const { lang, setLocale, t } = useLocale();

	return (
		<select
			class="select select-ghost text-lg w-min"
			aria-label={t("locale.label")}
			onChange={(e) => setLocale(e.target.value)}
			value={lang()}
		>
			<option value="en">🇺🇸</option>
			<option value="pl">🇵🇱</option>
		</select>
	);
}

export function ThemeController() {
	const { theme, setTheme } = useTheme();

	function toggle(mode: boolean) {
		setTheme(mode ? "dark" : "light");
	}

	return (
		<label class="btn btn-ghost btn-square swap text-lg">
			<input
				type="checkbox"
				checked={theme() === "dark"}
				onChange={(e) => toggle(e.target.checked)}
			/>
			<span class="swap-on icon-moon" />
			<span class="swap-off icon-sun" />
		</label>
	);
}
