/**
 * returns how much time there is until a specified date
 * @param theDate
 * @example 
 * timeUntil('2022-12-28T20:20:20')
 */

interface Obj {
    years: number,
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    miliseconds: number,
    done: boolean
}

export const timeUntil = (theDate: string) => {

    let dateInMiliSecs: number
    let nowInMiliSecs: number
    let timeUntilInMiliSecs: number
    let obj: Obj

    dateInMiliSecs = +new Date(theDate)
    nowInMiliSecs = +new Date()
    timeUntilInMiliSecs = dateInMiliSecs - nowInMiliSecs

    obj = {
        'years': + Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) / 365),
        'weeks': + Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) / 7),
        'days': + Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) % 365),
        'hours': + Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60) % 24),
        'minutes': + Math.floor((timeUntilInMiliSecs / 1000 / 60) % 60),
        'seconds': + Math.floor((timeUntilInMiliSecs / 1000) % 60),
        'miliseconds': + Math.floor(timeUntilInMiliSecs % 1000),
        'done': false
    }

    obj.miliseconds < 0 ? obj.done = true : obj.done = false

    return obj
}

