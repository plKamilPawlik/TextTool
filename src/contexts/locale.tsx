import { createContext, createEffect, createSignal, ParentProps, useContext } from "solid-js";

import type { TranslationKey, TranslationLang } from "~/i18n";
import { supports, transform, translate } from "~/i18n";

export const LocaleContext = createContext<{
	lang(): TranslationLang;
	setLocale(lang: string): TranslationLang;
	t(key: TranslationKey, value?: Record<string, unknown>): string;
}>();

export function LocaleProvider(props: ParentProps) {
	const [lang, setLang] = createSignal<TranslationLang>(fromStore());

	function fromStore(): TranslationLang {
		const lang = localStorage.getItem("lang");
		return lang && supports(lang) ? lang : "en";
	}

	function setLocale(lang: string): TranslationLang {
		return setLang((prev) => (supports(lang) ? lang : prev));
	}

	function t(key: TranslationKey, value?: Record<string, unknown>): string {
		return transform(translate(lang(), key), value);
	}

	createEffect(lang, (lang) => {
		const documentRoot = document.querySelector("html")!;
		documentRoot.setAttribute("lang", lang);
		localStorage.setItem("lang", lang);
	});

	return <LocaleContext value={{ lang, setLocale, t }}>{props.children}</LocaleContext>;
}

export function useLocale() {
	return useContext(LocaleContext);
}
