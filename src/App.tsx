import "./App.css";
import Dock from "./components/Dock";
import Editor from "./components/Editor";

export default function () {
	return (
		<div class="grid w-dvw h-dvh">
			<div class="flex flex-col overflow-hidden">
				<Editor />
				<Dock />
			</div>
		</div>
	);
}
