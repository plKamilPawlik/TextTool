import { onCleanup } from "solid-js";

export type Timer = ReturnType<typeof setTimeout>;

export function createDebounce<A extends unknown[]>(fn: (...args: A) => unknown, delay = 300) {
	let timer!: Timer;

	onCleanup(() => clearTimeout(timer));

	return function (...args: A) {
		clearTimeout(timer);
		timer = setTimeout(() => fn(...args), delay);
	};
}
