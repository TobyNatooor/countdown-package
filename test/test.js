
import { timeUntil } from '../dist/index.js'

// let countdown = setInterval(() => {
//     let x = timeUntil('2021-01-01T00:00:00')
//     if (x.done) {
//         clearInterval(countdown)
//         console.log('The countdown is done!')
//     } else {
//         console.log(`${x.years}:${x.days % 365}:${x.hours % 24}:${x.minutes % 60}:${x.seconds % 60}`)
//     }
// }, 1000);

console.log(timeUntil("2021-01-01T00:00:00"))

