import { createContext, createEffect, createSignal, ParentProps, useContext } from "solid-js";

export const ThemeContext = createContext<{
	theme(): string;
	setTheme(theme: string): string;
}>();

export function ThemeProvider(props: ParentProps) {
	const [theme, setTheme] = createSignal<string>(fromStore());

	function fromStore(): string {
		const theme = localStorage.getItem("theme");
		return theme || "light";
	}

	createEffect(theme, (theme) => {
		const documentRoot = document.querySelector("html")!;
		documentRoot.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	});

	return <ThemeContext value={{ theme, setTheme }}>{props.children}</ThemeContext>;
}

export function useTheme() {
	return useContext(ThemeContext);
}
