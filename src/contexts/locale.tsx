import { createContext, createEffect, createSignal, ParentProps, useContext } from "solid-js";

export const LocaleContext = createContext<{
	lang(): string;
	setLang(lang: string): string;
}>();

export function LocaleProvider(props: ParentProps) {
	const [lang, setLang] = createSignal(localStorage.getItem("lang") || "en");

	createEffect(lang, (lang) => {
		document.querySelector("html")!.setAttribute("lang", lang);
		localStorage.setItem("lang", lang);
	});

	return <LocaleContext value={{ lang, setLang }}>{props.children}</LocaleContext>;
}

export function useLocale() {
	return useContext(LocaleContext);
}
