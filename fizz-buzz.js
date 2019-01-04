const isMulipleOf = (base, number) => {
    return number % base === 0;
}

const isFizz = (number) => isMulipleOf(3, number)
const isBuzz = (number) => isMulipleOf(5, number)
const isFizzBuzz = (number) => isFizz(number) && isBuzz(number)

const getValue = (number) => {
    if (isFizzBuzz(number)) return 'FizzBuzz'
    if (isFizz(number)) return 'Fizz'
    if (isBuzz(number)) return 'Buzz'
    return number
}

const run = (number) => {
    let list = [];
    for (i = 0; i < number; i++) {
        list[i] = i + 1;
    };
    return list;
}

module.exports = {
    isFizz,
    isBuzz,
    isFizzBuzz,
    getValue,
    run,
    isMulipleOf,
}