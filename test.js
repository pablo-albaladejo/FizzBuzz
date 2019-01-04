const expect = require('expect.js');
const fizzBuzz = require('./fizz-buzz.js');

const listSize = 100;

describe('isMulipleOf', () => {
    it('6 is multple of 3', () => {
        const result = fizzBuzz.isMulipleOf(3, 6);
        expect(result).to.equal(true);
    });

    it('7 is not multple of 3', () => {
        const result = fizzBuzz.isMulipleOf(3, 7);
        expect(result).to.equal(false);
    });

    it('10 is multiple of 5', () => {
        const result = fizzBuzz.isMulipleOf(5, 10);
        expect(result).to.equal(true);
    });

    it('11 is not multiple of 5', () => {
        const result = fizzBuzz.isMulipleOf(5, 11);
        expect(result).to.equal(false);
    });

    it('15 is multiple of 15', () => {
        const result = fizzBuzz.isMulipleOf(15, 15);
        expect(result).to.equal(true);
    });
})

describe('Fizz', () => {
    it('should return true to 3', () => {
        const result = fizzBuzz.isFizz(3);
        expect(result).to.equal(true);
    });

    it('should return false to 5', () => {
        const result = fizzBuzz.isFizz(5);
        expect(result).to.equal(false);
    });

    it('should return true to 6', () => {
        const result = fizzBuzz.isFizz(6);
        expect(result).to.equal(true);
    });
})

describe('Buzz', () => {
    it('should return false to 3', () => {
        const result = fizzBuzz.isBuzz(3);
        expect(result).to.equal(false);
    });

    it('should return true to 5', () => {
        const result = fizzBuzz.isBuzz(5);
        expect(result).to.equal(true);
    });

    it('should return true to 10', () => {
        const result = fizzBuzz.isBuzz(10);
        expect(result).to.equal(true);
    });
})

describe('FizzBuzz', () => {
    it('should return false to 3', () => {
        const result = fizzBuzz.isFizzBuzz(3);
        expect(result).to.equal(false);
    });

    it('should return false to 5', () => {
        const result = fizzBuzz.isFizzBuzz(5);
        expect(result).to.equal(false);
    });

    it('should return true to 15', () => {
        const result = fizzBuzz.isFizzBuzz(15);
        expect(result).to.equal(true);
    });
})

describe('All', () => {

    it('should return a list with proper size', () => {
        const list = fizzBuzz.run(listSize);
        expect(list.length).to.equal(listSize);
    });

    it('should have not empty values', () => {
        const list = fizzBuzz.run(listSize);
        const result = list.reduce((accum, val) => typeof val !== undefined && accum, true);
        expect(result).to.equal(true);
    });

});
