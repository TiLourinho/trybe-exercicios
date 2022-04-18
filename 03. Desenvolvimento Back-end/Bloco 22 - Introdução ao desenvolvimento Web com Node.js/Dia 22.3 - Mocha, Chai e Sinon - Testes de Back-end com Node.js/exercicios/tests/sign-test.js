const { expect } = require('chai');
const signalNumber = require('../sign');

describe('Exercise 1 - A function that takes a number as a parameter and returns a string as a response\n', () => {
  describe(`When number is greater than 0 returns 'positive'`, () => {
    it('The answer is a string', () => {
      const answer = signalNumber(5);

      expect(answer).to.be.a('string');
    });

    it(`The answer is 'positive'\n`, () => {
      const answer = signalNumber(5);

      expect(answer).to.be.equals('positive')
    });
  });

  describe(`When number is smaller than 0 returns 'negative'`, () => {
    it('The answer is a string', () => {
      const answer = signalNumber(-5);

      expect(answer).to.be.a('string');
    });

    it(`The answer is 'negative'\n`, () => {
      const answer = signalNumber(-5);

      expect(answer).to.be.equals('negative')
    });
  });
  
  describe(`When number is equal to 0 returns 'neutral'`, () => {
    it('The answer is a string', () => {
      const answer = signalNumber(0);

      expect(answer).to.be.a('string');
    });

    it(`The answer is 'neutral'\n`, () => {
      const answer = signalNumber(0);

      expect(answer).to.be.equals('neutral')
    });
  });

  describe(`When parameter is not a number`, () => {
    it('The answer is a string', () => {
      const answer = signalNumber('Number');

      expect(answer).to.be.a('string');
    });

    it(`The answer is 'It must be a number'`, () => {
      const answer = signalNumber('Number');

      expect(answer).to.be.equals('It must be a number');
    });
  });
});
