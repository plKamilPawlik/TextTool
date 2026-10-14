import { openDB } from "idb";

export const DB_NAME = "text-tool";
export const DB_VERSION = 1;

export const db$ = openDB(DB_NAME, DB_VERSION, {
	upgrade(db) {
		const notes = db.createObjectStore("notes", { keyPath: "_id" });
		notes.createIndex("by-date", "timestamp");
	},
});
