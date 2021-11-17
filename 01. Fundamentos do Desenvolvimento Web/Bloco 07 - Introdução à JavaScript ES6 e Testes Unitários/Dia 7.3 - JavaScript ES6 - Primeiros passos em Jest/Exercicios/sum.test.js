// 1.
const sum = require('./sum.js')

describe('Testing sum function', () => {
  test('Check if sum(4, 5) returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Check if sum(0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Check if sum(4, "5") throws an error message', () => {
    expect(() => { sum(4, "5") }).toThrow();
  });

  test('Check if sum(4, "5") throws "parameters must be numbers" error message', () => {
    expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
  });
});
