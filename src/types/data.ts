export type MenuData = {
    weeks: Week[];
}

export type Week = {
    fromToDate:  string;
    menuInAWeek: { [key: string]: string[] };
}
