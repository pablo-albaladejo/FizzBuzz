const expect = require('expect.js');
const fizzBuzz = require('./fizz-buzz.js');

const listSize = 100;

describe('isMulipleOf', () => {
    it('6 is multiple of 3', () => {
        const result = fizzBuzz.isMulipleOf(3, 6);
        expect(result).to.equal(true);
    });

    it('7 is not multiple of 3', () => {
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

describe('getValue', () => {
    it('should return 1 to 1', () => {
        const result = fizzBuzz.getValue(1);
        expect(result).to.equal(1);
    });

    it('should return 2 to 2', () => {
        const result = fizzBuzz.getValue(2);
        expect(result).to.equal(2);
    });

    it('should return Fizz to 3', () => {
        const result = fizzBuzz.getValue(3);
        expect(result).to.equal('Fizz');
    });

    it('should return Buzz to 5', () => {
        const result = fizzBuzz.getValue(5);
        expect(result).to.equal('Buzz');
    });

    it('should return 11 to 11', () => {
        const result = fizzBuzz.getValue(11);
        expect(result).to.equal(11);
    });

    it('should return FizzBuzz to 15', () => {
        const result = fizzBuzz.getValue(15);
        expect(result).to.equal('FizzBuzz');
    });

    it('should return 17 to 17', () => {
        const result = fizzBuzz.getValue(17);
        expect(result).to.equal(17);
    });

    it('should return FizzBuzz to 30', () => {
        const result = fizzBuzz.getValue(30);
        expect(result).to.equal('FizzBuzz');
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

    it('should have proper values', () => {
        const result = fizzBuzz.run(listSize);
        
        expect(result[1]).to.equal(1);
        expect(result[2]).to.equal(2);
        expect(result[3]).to.equal('Fizz');
        expect(result[5]).to.equal('Buzz');
        expect(result[11]).to.equal(11);
        expect(result[15]).to.equal('FizzBuzz');
        expect(result[17]).to.equal(17);
        expect(result[24]).to.equal('Fizz');
        expect(result[25]).to.equal('Buzz');
        expect(result[30]).to.equal('FizzBuzz');
    });

});
