import { db$ } from ".";

export async function getNotes(): Promise<Note[]> {
	return (await db$).getAll("notes");
}

export async function setNote(note: Note): Promise<IDBValidKey> {
	return (await db$).put("notes", note);
}

export async function deleteNote(id: IDBValidKey): Promise<void> {
	return (await db$).delete("notes", id);
}

export async function deleteNotes(olderThan: Date): Promise<void> {
	const tx = (await db$).transaction("notes", "readwrite");
	const index = tx.store.index("by-date");

	const range = IDBKeyRange.upperBound(olderThan.getTime());

	for await (const cursor of index.iterate(range)) {
		if (!cursor.value.bookmark) await cursor.delete();
	}

	await tx.done;
}

export async function updateNote(id: IDBValidKey, changes: Partial<Note>): Promise<void> {
	const tx = (await db$).transaction("notes", "readwrite");
	const note = await tx.store.get(id);

	if (!note) return tx.done;

	await tx.store.put({ ...note, ...changes, _id: id });
	await tx.done;
}
