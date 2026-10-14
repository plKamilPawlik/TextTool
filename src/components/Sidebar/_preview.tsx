import { useLocale } from "~/contexts/locale";
import { useNotes } from "~/contexts/notes";

export function DraftPreview(props: { note: Note }) {
	const { lang } = useLocale();
	const { open } = useNotes();

	function formatDate(timestamp: number): string {
		return new Intl.DateTimeFormat(lang(), {
			weekday: "short",
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		}).format(timestamp);
	}

	return (
		<div
			class="hover:cursor-pointer hover:opacity-60"
			role="button"
			tabindex={0}
			onClick={() => open(props.note)}
		>
			<div class="h-24 flex flex-col gap-1">
				<p class="line-clamp-1 font-semibold" innerHTML={props.note.content} />
				<p class="line-clamp-2 font-extralight" innerHTML={props.note.content} />
				<p class="line-clamp-1 text-neutral-500 text-xs mt-auto">
					<time>{formatDate(props.note.timestamp)}</time>
				</p>
			</div>
		</div>
	);
}
