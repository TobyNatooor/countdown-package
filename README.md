# Get time from now until specified date
```
npm install @tobynatooor/countdown
```
### How to use:
```js
// How to import
import timeUntil from '@tobynatooor/countdown'

// The function returns an object with how many years, days, hours, minutes, seconds and miliseconds there are until the specified date
console.log(timeUntil('2021-11-28T21:40:00'))       
                                                    // console :
                                                    // {
                                                    //   years: 1,
                                                    //   days: 124,
                                                    //   hours: 11,
                                                    //   minutes: 29,
                                                    //   seconds: 25,
                                                    //   miliseconds: 75,
                                                    //   done: false
                                                    // }

// Here's an easy way to make a countdown
setInterval(() => {
    let x = timeUntil('2021-11-28T21:40:00')
    console.log(`${x.years}:${x.days}:${x.hours}:${x.minutes}:${x.seconds}`) 
}, 1000);
                                                    // console : 
                                                    // 1:124:11:29:25
                                                    // 1:124:11:29:24
                                                    // 1:124:11:29:23
                                                    // 1:124:11:29:22
// 'done' is true if the specified date has already happened so you can make your countdown better by doing something like this :
let countdown = setInterval(() => {
    let x = timeUntil('2020-07-27T11:58:00')
    if (x.done) {
        clearInterval(countdown)
        console.log('The countdown is done!')
    } else {
        console.log(`${x.years}:${x.days}:${x.hours}:${x.minutes}:${x.seconds}`)
    }
}, 1000);
                                                    // console :
                                                    // 0:0:0:0:5
                                                    // 0:0:0:0:4
                                                    // 0:0:0:0:3
                                                    // 0:0:0:0:2
                                                    // 0:0:0:0:1
                                                    // The countdown is done!
```
