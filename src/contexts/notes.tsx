import { createContext, createSignal, onSettled, ParentProps, useContext } from "solid-js";

import { getNotes, removeNote, saveNote } from "~/services/idb";

export const NotesContext = createContext<{
	notes(): Note[];
	refresh(): Promise<Note[]>;
	remove(note: Note): Promise<Note[]>;
	save(note: Note): Promise<IDBValidKey>;
}>();

export function NotesProvider(props: ParentProps) {
	const [notes, setNotes] = createSignal<Note[]>([]);

	async function refresh(): Promise<Note[]> {
		return getNotes().then(setNotes);
	}

	async function remove(note: Note): Promise<Note[]> {
		return removeNote(note._id!).then(refresh);
	}

	async function save(note: Note): Promise<IDBValidKey> {
		const id = await saveNote(note);
		return refresh().then(() => id);
	}

	onSettled(() => void refresh());

	return <NotesContext value={{ notes, refresh, remove, save }}>{props.children}</NotesContext>;
}

export function useNotes() {
	return useContext(NotesContext);
}
