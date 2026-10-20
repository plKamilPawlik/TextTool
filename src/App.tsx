import "./App.css";
import { version } from "../package.json";
import Dock from "./components/Dock";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import { AppProvider } from "./contexts/app";

export default function () {
	const sidebarId = "app-sidebar";

	return (
		<AppProvider version={version}>
			<div class="h-dvh w-dvw fixed drawer xl:drawer-open">
				<input id={sidebarId} class="drawer-toggle" type="checkbox" />
				<div class="drawer-content overflow-hidden">
					<main class="flex flex-col h-full bg-base-100">
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
		</AppProvider>
	);
}
