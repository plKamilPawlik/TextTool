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
		<NotesProvider
			notes={[
				{
					_id: 1,
					content: "<p>Note 1</p>",
					timestamp: new Date("2026-10-01").getTime(),
				},
				{
					_id: 2,
					content: "<p>Note 2</p>",
					timestamp: new Date("2026-10-02").getTime(),
				},
				{
					_id: 3,
					content: "<p>Note 3</p>",
					timestamp: new Date("2026-10-03").getTime(),
				},
			]}
		>
			<EditorProvider>
				<div class="drawer h-dvh w-dvw">
					<input id={sidebarId} class="drawer-toggle" type="checkbox" />
					<div class="drawer-content flex flex-col overflow-hidden">
						<Navbar controlId={sidebarId} />
						<Toolbar />
						<Editor />
						<Dock />
					</div>
					<div class="drawer-side">
						<Sidebar controlId={sidebarId} />
					</div>
				</div>
			</EditorProvider>
		</NotesProvider>
	);
}
