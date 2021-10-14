let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

//2.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

console.log(sum);

//3.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let med = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

med = sum / numbers.length;
console.log(med);

//4.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let med = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

med = sum / numbers.length;

if (med > 20) {
  console.log("Valor maior que 20")
} else {
  console.log("Valor menor ou igual a 20")
}

//5.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let top = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > top) {
    top = numbers[i];
  }
}

console.log(top);

//6.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    odd += 1;
  }
}

console.log(odd);

//7.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let floor = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < floor) {
    floor = numbers[i];
  }
}

console.log (floor);

//8.
let array = [];

for (let i = 0; i <= 25; i += 1) {
  array.push(i)
}

console.log(array);

//9.
let array = [];

for (let i = 0; i <= 25; i += 1) {
  array.push(i);
  console.log(array[i] / 2);
}

//Bonus 1.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i1 = 1; i1 < numbers.length; i1 += 1) {
  for (let i2 = 0; i2 < i1; i2 += 1) {
    if (numbers[i1] < numbers[i2]) {
      let position = numbers[i1];
      numbers[i1] = numbers[i2];
      numbers[i2] = position;
    }
  }
}

console.log(numbers);

//Bonus 2.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i1 = 1; i1 < numbers.length; i1 += 1) {
  for (let i2 = 0; i2 < i1; i2 += 1) {
    if (numbers[i1] > numbers[i2]) {
      let position = numbers[i1];
      numbers[i1] = numbers[i2];
      numbers[i2] = position;
    }
  }
}

console.log(numbers);

//Bonus 3.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (i + 1 < numbers.length) {
    novoNumbers.push(numbers[i] * numbers[i + 1]);
  } else {
    novoNumbers.push(numbers[i] * 2);
  }
}

console.log(novoNumbers);