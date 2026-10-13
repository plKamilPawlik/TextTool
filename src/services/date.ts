export function daysAgo(days: number, fromDate = new Date()): Date {
	fromDate.setDate(fromDate.getDate() - days);
	fromDate.setHours(0, 0, 0, 0);

	return fromDate;
}
