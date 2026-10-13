import "./App.css";
import Dock from "./components/Dock";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import { EditorProvider } from "./contexts/editor";
import { LocaleProvider } from "./contexts/locale";
import { NotesProvider } from "./contexts/notes";

export default function () {
	const sidebarId = "app-sidebar";

	return (
		<LocaleProvider>
			<NotesProvider>
				<EditorProvider>
					<div class="h-dvh w-dvw drawer xl:drawer-open">
						<input id={sidebarId} class="drawer-toggle" type="checkbox" />
						<div class="drawer-content overflow-hidden">
							<main class="flex flex-col h-full">
								<Navbar sidebarId={sidebarId} />
								<Toolbar />
								<Editor />
								<Dock />
							</main>
						</div>
						<div class="drawer-side overflow-hidden">
							<Sidebar sidebarId={sidebarId} />
						</div>
					</div>
				</EditorProvider>
			</NotesProvider>
		</LocaleProvider>
	);
}
