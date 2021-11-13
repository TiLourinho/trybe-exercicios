// 1.
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

module.exports = sum;

// 2.
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

describe('Tests: myRemove function', () => {
  test('Check if myRemove([1, 2, 3, 4], 3) returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Check if myRemove([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Check if myRemove([1, 2, 3, 4], 5) returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// 3.
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
};

describe('Tests: myFizzBuzz function', () => {
  test('Check if myFizzBuzz(15) gets the expected return', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('Check if myFizzBuzz(9) gets the expected return', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('Check if myFizzBuzz(10) gets the expected return', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  test('Check if myFizzBuzz(7) gets the expected return', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  test('Check if myFizzBuzz("15") gets the expected return', () => {
    expect(myFizzBuzz("15")).toBe(false);
  });
});