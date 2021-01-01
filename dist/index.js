export var timeUntil = function (countdownDate) {
    var dateInMiliSecs;
    var nowInMiliSecs;
    var timeUntilInMiliSecs;
    var timeObj;
    dateInMiliSecs = +new Date(countdownDate);
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
