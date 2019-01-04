const expect = require('expect.js');
const fizzBuzz = require('./fizz-buzz.js');

const listSize = 100;

describe('FizzBuzz', () => {

    beforeEach(() => {

    });

    it('should return a list with proper size', () => {
        const list = fizzBuzz(listSize);
        expect(list.length).to.equal(listSize);
    });

});
