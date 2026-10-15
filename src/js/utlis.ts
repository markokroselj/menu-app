import type { Week } from "../types/data";

export function getFormattedDate() {

    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;

}

function isTodayInRange(fromToDateStr: string) {
  const currentYear = new Date().getFullYear();
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  
  const dateRangeRegex = /(\w+)\s(\d{1,2})\.?\s?(\d{1,2})\.?\s-\s(\w+)\s(\d{1,2})\.?\s?(\d{1,2})\.?/;
  const match = fromToDateStr.match(dateRangeRegex);

  if (!match) {
    throw new Error("Invalid date range format");
  }

  const [, , start, , end] = match;


  function parseDate(dateStr: string) {
    const [day, month] = dateStr.split('.').map(Number);
    return new Date(currentYear, month - 1, day);
  }

  const startDate = parseDate(start);
  const endDate = parseDate(end);

  return today >= startDate && today <= endDate;
}

export function getWeekNumber(weeks: Week[]): number {
  for(let i = 0; i < weeks.length; i++)if(isTodayInRange(weeks[i].fromToDate))return i;
  return 0;
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
