export class EmptyNote implements Note {
	constructor(
		readonly _id = crypto.randomUUID(),
		readonly content = "",
		readonly timestamp = Date.now(),
	) {}
}
