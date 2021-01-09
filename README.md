# Get time from now until specified date
```
npm install @tobynatooor/countdown
```
### How to use:
```js
// How to import
import { timeUntil } from '@tobynatooor/countdown'

// The function returns an object with how many years, days, hours, minutes, seconds and miliseconds there are until the specified date
console.log(timeUntil('2021-11-28T21:40:00'))    
                                    // console:
                                    // {
                                    //   years: 1,
                                    //   weeks: 103,
                                    //   days: 724,
                                    //   hours: 17382,
                                    //   minutes: 1042954,
                                    //   seconds: 62577273,
                                    //   miliseconds: 62577273983,
                                    //   done: false
                                    // }

// Here's an easy way to make a countdown
setInterval(() => {
    let x = timeUntil('2022-12-28T20:20:20')
    console.log(`${x.years}:${x.days % 365}:${x.hours % 24}:${x.minutes % 60}:${x.seconds % 60}`)
}, 1000)
                                // console : 
                                // 1:359:6:30:47
                                // 1:359:6:30:46
                                // 1:359:6:30:45
                                // 1:359:6:30:44
                                // 1:359:6:30:43
                                // 1:359:6:30:42
                                // ...

// 'done' is true if the specified date has already happened to make it easy if something should happen when the the countdown is done, like this:
let countdown = setInterval(() => {
    let x = timeUntil('2021-01-01T00:00:00')
    if (x.done) {
        clearInterval(countdown)
        console.log('The countdown is done!')
    } else {
        console.log(`${x.years}:${x.days % 365}:${x.hours % 24}:${x.minutes % 60}:${x.seconds % 60}`)
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
