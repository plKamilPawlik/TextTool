export function daysAgo(days: number, fromDate = new Date()): Date {
	fromDate.setDate(fromDate.getDate() - days);
	fromDate.setHours(0, 0, 0, 0);

	return fromDate;
}

export function hoursAgo(hours: number, fromDate = new Date()): Date {
	fromDate.setHours(fromDate.getHours() - hours);
	fromDate.setMinutes(0, 0, 0);

	return fromDate;
}

export function minutesAgo(minutes: number, fromDate = new Date()): Date {
	fromDate.setMinutes(fromDate.getMinutes() - minutes);
	fromDate.setSeconds(0, 0);

	return fromDate;
}
