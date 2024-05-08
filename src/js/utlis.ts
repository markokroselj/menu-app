export function getFormattedDate() {

    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;

}

export function getWeekNumber() {
    const today = new Date();

    const currentDay = today.getDate();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay();

    return Math.ceil((currentDay + dayOfWeek) / 7) - 2;
}

export function getDay(date: string) {
	const slovenianDays = [
		"Ponedeljek",
		"Torek",
		"Sreda",
		"Četrtek",
		"Petek",
		"Sobota",
		"Nedelja",
	];
	return slovenianDays[new Date(date).getDay() - 1];
}