import { openDB } from "idb";

export const DB_NAME = "text-tool";
export const DB_VERSION = 1;

export const db$ = openDB(DB_NAME, DB_VERSION, {
	upgrade(db) {
		const notes = db.createObjectStore("notes", { keyPath: "_id", autoIncrement: true });
		notes.createIndex("by-date", "timestamp");
	},
});

export async function getNotes(): Promise<Note[]> {
	return (await db$).getAll("notes");
}

export async function saveNote(note: Note): Promise<IDBValidKey> {
	if (!Number.isSafeInteger(note._id)) delete note._id;
	return (await db$).put("notes", note);
}

export async function removeNote(id: IDBValidKey): Promise<void> {
	return (await db$).delete("notes", id);
}

export async function removeNotes(olderThan: Date): Promise<void> {
	const tx = (await db$).transaction("notes", "readwrite");
	const index = tx.store.index("by-date");

	const range = IDBKeyRange.upperBound(olderThan.getTime());

	for await (const cursor of index.iterate(range)) {
		if (!cursor.value.isPinned) await cursor.delete();
	}

	await tx.done;
}
