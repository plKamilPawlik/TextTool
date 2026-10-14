import { createContext, createSignal, onSettled, ParentProps, useContext } from "solid-js";

import * as $notes from "~/database/--notes";
import { daysAgo, minutesAgo } from "~/utils/date";
import { EmptyNote } from "~/utils/note";

export const NotesContext = createContext<{
	draft(): Note;
	notes(): Note[];
	edit(note: Partial<Note>): Promise<Note[]>;
	open(note: Partial<Note>): Promise<Note>;
	refresh(): Promise<Note[]>;
	remove(id: IDBValidKey): Promise<Note[]>;
	update(id: IDBValidKey, changes: Partial<Note>): Promise<Note[]>;
}>();

export function NotesProvider(props: ParentProps) {
	const [draft, setDraft] = createSignal<Note>(new EmptyNote());
	const [notes, setNotes] = createSignal<Note[]>([]);

	async function edit(note: Partial<Note>): Promise<Note[]> {
		const change = { ...draft(), ...note };
		await $notes.setNote(change).then(() => setDraft(change));
		return refresh();
	}

	async function open(note: Partial<Note>): Promise<Note> {
		return Promise.resolve(setDraft({ ...new EmptyNote(), ...note }));
	}

	async function refresh(): Promise<Note[]> {
		const notes = await $notes.getNotes();
		notes.sort((a, b) => b.timestamp - a.timestamp);
		return setNotes(notes);
	}

	async function remove(id: IDBValidKey): Promise<Note[]> {
		return $notes.deleteNote(id).then(refresh);
	}

	async function update(id: IDBValidKey, changes: Partial<Note>): Promise<Note[]> {
		return $notes.updateNote(id, changes).then(refresh);
	}

	onSettled(() => {
		$notes
			.deleteNotes(daysAgo(7))
			.then(refresh)
			.then((notes) => {
				if (notes[0].timestamp >= minutesAgo(2).getTime()) {
					setDraft(notes[0]);
				}
			});
	});

	return (
		<NotesContext value={{ draft, notes, edit, open, refresh, remove, update }}>
			{props.children}
		</NotesContext>
	);
}

export function useNotes() {
	return useContext(NotesContext);
}
