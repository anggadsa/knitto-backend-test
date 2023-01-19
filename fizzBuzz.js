const fizzBuzz = (num) => {
    const arr = []

    for(let i = 1; i <= num; i++) {
        if(i%5 == 0 && i%3 == 0) arr.push('FizzBuzz')
        else if (i%5 == 0) arr.push('Buzz')
        else if (i%3 == 0) arr.push('Fizz')
        else arr.push(i)
    }

    return arr
}

console.time(`Countdown Time`)
console.log(fizzBuzz(100))
console.timeEnd(`Countdown Time`)