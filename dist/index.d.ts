/**
 * returns how much time there is until a specified date
 * @param theDate
 * @example
 * timeUntil('2022-12-28T20:20:20')
 */
interface Obj {
    years: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    miliseconds: number;
    done: boolean;
}
export declare const timeUntil: (theDate: string) => Obj;
export {};
