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

const getValue = (number) => {
    if (isMulipleOf(number, 15)) {
        return 'FizzBuzz'
    } else if (isMulipleOf(number, 3)) {
        return 'Fizz'
    } else if (isMulipleOf(number, 5)) {
        return 'Buzz'
    } else {
        return number;
    }
}

module.exports = {
    getValue,
    run,
    isMulipleOf,
}