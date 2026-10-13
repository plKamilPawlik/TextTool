declare interface Note extends Partial<NoteOptions> {
	_id?: IDBValidKey;
	timestamp: number;
	content: string;
}

declare interface NoteOptions {
	isPinned: boolean;
}
