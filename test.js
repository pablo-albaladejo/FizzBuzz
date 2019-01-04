const expect = require('expect.js');
const fizzBuzz = require('./fizz-buzz.js');

const listSize = 100;

describe('FizzBuzz', () => {

    beforeEach(() => {

    });

    it('should return a list with proper size', () => {
        const list = fizzBuzz.run(listSize);
        expect(list.length).to.equal(listSize);
    });
    
    it('6 is multple of 3', () => {
        const result = fizzBuzz.isMulipleOf(3,6);
        expect(result).to.equal(true);
    });

    it('7 is not multple of 3', () => {
        const result = fizzBuzz.isMulipleOf(3,7);
        expect(result).to.equal(false);
    });

    it('10 is multiple of 5', () => {
      const result = fizzBuzz.isMulipleOf(5,10);
      expect(result).to.equal(true);
    });

    it('11 is not multiple of 5', () => {
      const result = fizzBuzz.isMulipleOf(5, 11);
      expect(result).to.equal(false);
    });

    it('15 is multiple of 15', () => {
      const result = fizzBuzz.isMulipleOf(15,15);
      expect(result).to.equal(true);
    });        

});
