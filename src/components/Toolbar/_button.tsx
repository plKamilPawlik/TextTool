import { useLocale } from "~/contexts/locale";

export function ActionButton(props: { icon: string; isActive: boolean; onClick(): void }) {
	return (
		<button
			class={["btn btn-ghost btn-square text-base", { "btn-active": props.isActive }]}
			onClick={() => props.onClick()}
		>
			<span class={props.icon} />
		</button>
	);
}

export function CopyButton(props: { onClick(): Promise<void> }) {
	const { t } = useLocale();

	return (
		<button class="btn btn-primary justify-start w-24" onClick={() => props.onClick()}>
			<span class="icon-clipboard-plus" />
			<span>{t("toolbar.copy")}</span>
		</button>
	);
}

export function PasteButton(props: { onClick(): Promise<void> }) {
	const { t } = useLocale();

	return (
		<button class="btn btn-neutral justify-start w-24" onClick={() => props.onClick()}>
			<span class="icon-clipboard-paste" />
			<span>{t("toolbar.paste")}</span>
		</button>
	);
}
