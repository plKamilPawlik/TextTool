import { createContext, createSignal, ParentProps, useContext } from "solid-js";

export const NotesContext = createContext<{
	notes(): Note[];
	save(note: Note): number;
}>();

export function NotesProvider(props: ParentProps<{ notes?: Note[] }>) {
	const [notes, setNotes] = createSignal<Note[]>(props.notes || []);

	function save(note: Note): number {
		if (typeof note._id !== "number") note._id = Math.random();

		setNotes((notes) => [note, ...notes.filter(({ _id }) => _id !== note._id)]);

		return note._id;
	}

	return <NotesContext value={{ notes, save }}>{props.children}</NotesContext>;
}

export function useNotes() {
	return useContext(NotesContext);
}
