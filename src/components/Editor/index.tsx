import { useEditor } from "~/contexts/editor";

export default function () {
	const { mount } = useEditor();
	return <div class="grow overflow-auto" ref={(el) => mount(el)} />;
}
