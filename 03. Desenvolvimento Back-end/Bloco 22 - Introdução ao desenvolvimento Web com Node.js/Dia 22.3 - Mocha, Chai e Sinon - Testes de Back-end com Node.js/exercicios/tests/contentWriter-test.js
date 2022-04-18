const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const contentWriter = require('../contentWriter');

describe(`Exercise 2 - A function that will write content to a specific file getting two parameters and returning 'Ok'\n`, () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  })

  it(`The answer is a 'string'`, () => {
    const answer = contentWriter('test.txt', 'Go go go!');

    expect(answer).to.be.a('string');
  });

  it(`The answer is 'Ok'`, () => {
    const answer = contentWriter('test.txt', 'Go go go!');

    expect(answer).to.be.equals('Ok');
  });
});
