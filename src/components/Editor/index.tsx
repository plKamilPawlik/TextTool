import { useEditor } from "~/contexts/editor";

export default function () {
	const { mount } = useEditor();
	return <div class="grow overflow-auto p-2" ref={(el) => mount(el)} />;
}
