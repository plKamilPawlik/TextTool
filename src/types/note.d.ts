declare interface Note extends Partial<NoteOptions> {
	_id?: IDBValidKey;
	content: string;
	timestamp: number;
}

declare interface NoteOptions {
	isPinned: boolean;
}
