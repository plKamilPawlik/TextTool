import { openDB } from "idb";

export const DB_NAME = "text-tool";
export const DB_VERSION = 1;

export const db$ = openDB(DB_NAME, DB_VERSION, {
	upgrade(db) {
		const notes = db.createObjectStore("notes", { keyPath: "_id", autoIncrement: true });
		notes.createIndex("by-date", "timestamp");
	},
});

export async function getNotes() {
	return (await db$).getAll("notes");
}

export async function saveNote(note: Note) {
	if (!Number.isSafeInteger(note._id)) delete note._id;
	return (await db$).put("notes", note);
}

export async function removeNote(id: IDBValidKey) {
	return (await db$).delete("notes", id);
}
