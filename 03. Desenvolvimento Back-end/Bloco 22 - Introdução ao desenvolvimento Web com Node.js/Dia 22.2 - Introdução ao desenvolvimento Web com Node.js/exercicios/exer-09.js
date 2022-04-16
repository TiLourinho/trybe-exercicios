const fizzBuzz = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return resolve('FizzBuzz');
    }

    if (num % 3 === 0) {
      return resolve('Fizz');
    }

    if (num % 5 === 0) {
      return resolve('Buzz');
    }

    reject(num);
  });
}
fizzBuzz(1).catch(console.error);
fizzBuzz(9).then(console.log);
fizzBuzz(10).then(console.log);
fizzBuzz(15).then(console.log);