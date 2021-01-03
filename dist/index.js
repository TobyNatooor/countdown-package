/**
 * returns how much time there is until a specified date
 * @param theDate
 * @example
 * timeUntil('2022-12-28T20:20:20')
 */
export var timeUntil = function (theDate) {
    var dateInMiliSecs;
    var nowInMiliSecs;
    var timeUntilInMiliSecs;
    var timeObj;
    dateInMiliSecs = +new Date(theDate);
    nowInMiliSecs = +new Date();
    timeUntilInMiliSecs = dateInMiliSecs - nowInMiliSecs;
    timeObj = {
        'years': +Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) / 365),
        'weeks': +Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) / 7),
        'days': +Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60 / 24) % 365),
        'hours': +Math.floor((timeUntilInMiliSecs / 1000 / 60 / 60) % 24),
        'minutes': +Math.floor((timeUntilInMiliSecs / 1000 / 60) % 60),
        'seconds': +Math.floor((timeUntilInMiliSecs / 1000) % 60),
        'miliseconds': +Math.floor(timeUntilInMiliSecs % 1000),
        'done': false
    };
    timeObj.miliseconds < 0 ? timeObj.done = true : timeObj.done = false;
    return timeObj;
};
