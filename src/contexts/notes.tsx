import { createContext, createSignal, onSettled, ParentProps, useContext } from "solid-js";

import { daysAgo } from "~/services/date";
import { getNotes, removeNote, removeNotes, saveNote } from "~/services/idb";

export const NotesContext = createContext<{
	notes(): Note[];
	refresh(): Promise<Note[]>;
	remove(id: IDBValidKey): Promise<Note[]>;
	save(note: Note): Promise<IDBValidKey>;
}>();

export function NotesProvider(props: ParentProps) {
	const [notes, setNotes] = createSignal<Note[]>([]);

	async function refresh(): Promise<Note[]> {
		return getNotes().then((notes) =>
			setNotes(notes.sort((a, b) => b.timestamp - a.timestamp)),
		);
	}

	async function remove(id: IDBValidKey): Promise<Note[]> {
		return removeNote(id).then(refresh);
	}

	async function save(note: Note): Promise<IDBValidKey> {
		const id = await saveNote(note);
		return refresh().then(() => id);
	}

	onSettled(() => void removeNotes(daysAgo(7)).then(refresh));

	return <NotesContext value={{ notes, refresh, remove, save }}>{props.children}</NotesContext>;
}

export function useNotes() {
	return useContext(NotesContext);
}
