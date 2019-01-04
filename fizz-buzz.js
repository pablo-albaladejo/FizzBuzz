const run = (number) => {
    let list = [];
    for (i = 0; i < number; i++) {
        list[i] = i + 1;
    };
    return list;
}

const isMulipleOf = (base, number) => {
    return number % base === 0;
}

const isFizz = (number) => isMulipleOf(number, 3)
const isBuzz = (number) => isMulipleOf(number, 5)
const isFizzBuzz = (number) => isFizz(number) && isBuzz(number)

module.exports = {
    isFizz,
    isBuzz,
    isFizzBuzz,
    run,
    isMulipleOf,
}