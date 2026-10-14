import { en } from "./lang/en";
import { pl } from "./lang/pl";

export const translations = { en, pl };

export type TranslationKey = keyof typeof en;
export type TranslationLang = keyof typeof translations;
export type Translation = Record<TranslationKey, string>;

export function supports(lang: string): lang is TranslationLang {
	return Object.keys(translations).includes(lang);
}

export function translate(locale: TranslationLang, key: TranslationKey) {
	return translations[locale][key];
}

export function transform(message: string, values: Record<string, unknown> = {}): string {
	let result = message;

	for (const [key, value] of Object.entries(values)) {
		result = result.replaceAll(`{${key}}`, () => String(value));
	}

	return result;
}
