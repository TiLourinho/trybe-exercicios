// Parte 1
// 01.

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
    console.log(ifScope + ' o que estou fazendo aqui ? :O');
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// 02.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
let newArr = [13, 3, 4, 10, 7, 2];

const arrOrder = (arr) => {
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[i] < arr[j]) {
        let position = arr[i];
        arr[i] = arr[j]
        arr[j] = position;
      }
    }
  }
}
arrOrder(newArr);
console.log(newArr);

console.log(`Os números ${newArr} se encontram ordenados de forma crescente!`);

// 02. Bônus

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compareNumbers = (a, b) => a - b;
const orderOddsAndEvens = () => {
  oddsAndEvens.join();
  oddsAndEvens.sort();
  oddsAndEvens.sort(compareNumbers);
}
orderOddsAndEvens(oddsAndEvens);
console.log(oddsAndEvens);

// Parte 02
// 01.

const fatorial = (n) => {
  let res = 1;

  for (let i = 2; i <= n; i += 1) {
    res *= i;
  }
  return res;
}
fatorial(8);

// 02.

const longestWord = (phrase) => {
  let arr = phrase.split(' ');
  let length = 0;
  let res = '';

  for (const word of arr) {
    if (word.length > length) {
      length = word.length;
      res = word;
    }
  }
  return res;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
