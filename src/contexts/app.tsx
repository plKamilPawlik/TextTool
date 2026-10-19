import { createContext, ParentProps, useContext } from "solid-js";

import { EditorProvider } from "./editor";
import { LocaleProvider } from "./locale";
import { NotesProvider } from "./notes";
import { ThemeProvider } from "./theme";

export const AppContext = createContext<{ version(): string }>();

export function AppProvider(props: ParentProps<{ version: string }>) {
	return (
		<AppContext value={{ version: () => props.version }}>
			<ThemeProvider>
				<LocaleProvider>
					<NotesProvider>
						<EditorProvider>{props.children}</EditorProvider>
					</NotesProvider>
				</LocaleProvider>
			</ThemeProvider>
		</AppContext>
	);
}

export function useApp() {
	return useContext(AppContext);
}
