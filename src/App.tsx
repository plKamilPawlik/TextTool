import "./App.css";
import Dock from "./components/Dock";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import { EditorProvider } from "./contexts/editor";
import { NotesProvider } from "./contexts/notes";

export default function () {
	const sidebarId = "app-sidebar";

	return (
		<NotesProvider>
			<EditorProvider>
				<div class="drawer h-dvh w-dvw">
					<input id={sidebarId} class="drawer-toggle" type="checkbox" />
					<div class="drawer-content flex flex-col overflow-hidden">
						<Navbar sidebarId={sidebarId} />
						<Toolbar />
						<Editor />
						<Dock />
					</div>
					<div class="drawer-side">
						<Sidebar sidebarId={sidebarId} />
					</div>
				</div>
			</EditorProvider>
		</NotesProvider>
	);
}
