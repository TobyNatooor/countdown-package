
export const timeUntil = (countdownDate: string) => {
    let dateInMiliSecs: number
    if (Array.isArray(countdownDate)) {
        dateInMiliSecs = +new Date(
            countdownDate[0],
            (countdownDate[1] - 1),
            countdownDate[2],
            countdownDate[3],
            countdownDate[4],
            countdownDate[5],
            countdownDate[6])
    } else {
        dateInMiliSecs = +new Date(countdownDate);
    }

    let nowInMiliSecs = +new Date()
    let timeUntilInMiliSecs: number = dateInMiliSecs - nowInMiliSecs
    let o = {
        'years': + Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60 / 24 / 365)),
        'days': + Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) % 365),
        'hours': + Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60) % 24),
        'minutes': + Math.floor((timeUntilInMiliSecs / 1000 / 60) % 60),
        'seconds': + Math.floor((timeUntilInMiliSecs / 1000) % 60),
        'miliseconds': + Math.floor(timeUntilInMiliSecs % 1000),
        'done': false
    }
    if (o.miliseconds < 0) o.done = true;
    return o
}

