
interface TimeLeft {
    years: number,
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    miliseconds: number,
    done: boolean
}

/**
 * returns how much time there is until a specified date
 * @param theDate
 * @example 
 * timeUntil('2022-12-28T20:20:20')
 */
export const timeUntil = (theDate: string): TimeLeft => {

    let dateInMiliSecs: number
    let nowInMiliSecs: number
    let timeUntilInMiliSecs: number
    let timeLeft: TimeLeft
    let daysTillWeekOne: number

    dateInMiliSecs = +new Date(theDate)
    nowInMiliSecs = +new Date()
    timeUntilInMiliSecs = dateInMiliSecs - nowInMiliSecs

    daysTillWeekOne = +new Date(theDate).getFullYear() - 1960
    daysTillWeekOne += Math.floor(daysTillWeekOne / 4)
    daysTillWeekOne = (daysTillWeekOne + 5) % 7
    daysTillWeekOne = 7 - daysTillWeekOne

    const makeObj = (floorOrCeil: any, rmDays: number) => {
        timeLeft = {
            'years': + floorOrCeil((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) / 365),
            'weeks': + floorOrCeil(((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) + rmDays) / 7),
            'days': + floorOrCeil(timeUntilInMiliSecs / 1000 / 60 / 60 / 24),
            'hours': + floorOrCeil(timeUntilInMiliSecs / 1000 / 60 / 60),
            'minutes': + floorOrCeil(timeUntilInMiliSecs / 1000 / 60),
            'seconds': + floorOrCeil(timeUntilInMiliSecs / 1000),
            'miliseconds': + floorOrCeil(timeUntilInMiliSecs),
            'done': false
        }
        timeLeft.miliseconds < 0 ? timeLeft.done = true : timeLeft.done = false
        return timeLeft
    }

    if (timeUntilInMiliSecs > 0) {
        return makeObj(Math.floor, -daysTillWeekOne)
    } else {
        return makeObj(Math.ceil, daysTillWeekOne)
    }

}

