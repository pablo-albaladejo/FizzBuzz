module.exports = {
    run: (number) => {
        return Array(number);
    },
    isMulipleOf: (base, number) => {
        return number % base === 0;
    }
}