
export default countdownDate => {
    let chosenDate
    if (Array.isArray(countdownDate)) chosenDate = new Date(countdownDate[0], (countdownDate[1] - 1), countdownDate[2], countdownDate[3], countdownDate[4], countdownDate[5], countdownDate[6]);
    else chosenDate = new Date(countdownDate);

    let currentTime = new Date();
    let difference = parseInt(chosenDate.getTime() - currentTime.getTime())
    let o = {
        'years': parseInt((difference / 1000 / 60 / 60 / 24 / 365).toFixed()),
        'days': (difference / 1000 / 60 / 60 / 24).toFixed() % 365,
        'hours': (difference / 1000 / 60 / 60).toFixed() % 24,
        'minutes': (difference / 1000 / 60).toFixed() % 60,
        'seconds': (difference / 1000).toFixed() % 60,
        'miliseconds': difference % 1000,
        'done': false
    }
    if (o.miliseconds < 0) o.done = true;
    return o
}
