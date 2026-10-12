import { useEditor } from "~/contexts/editor";

export default function () {
	const { mount } = useEditor();
	return <div class="flex-1 overflow-auto p-2" ref={(el) => mount(el)} />;
}
