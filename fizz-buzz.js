module.exports = {
    run: (number) => {
        let list = [];
        for (i = 0; i < number; i++) {
            list[i] = i + 1;
        };
        return list;
    },
    isMulipleOf: (base, number) => {
        return number % base === 0;
    }
}