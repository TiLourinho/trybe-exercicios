//Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1.

console.log("Bem-vinda, " + info.personagem);

//2.

info['recorrente'] = 'Sim';

console.log(info);

//3.

for(let key in info) {
  console.log(key);
};

//4.

for(let key in info) {
  console.log(info[key]);
};

//5.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Colors Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for(let key in info) {
  if (key === 'recorrente' && info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
    console.log('Ambos recorrentes')
  } else {
    console.log(info[key], "e", info2[key]);
  }
}




//Funções

//1.

function verifyPalindrome(string) {

  let cap = string.toLowerCase();
  let length = cap.length;
  let mid = Math.floor(length / 2);

  for (let i = 0; i < mid; i += 1){
    if (cap[i] != cap[length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(verifyPalindrome('Arara'));

//2.

function highestIndex(array) {

  let highest = 0;

  for(let i in array) {
    if (array[i] > array[highest]) {
      highest = i;
    }
  }
  return highest;
}

console.log('O maior índice é: ' + highestIndex([2, 3, 6, 7, 10, 1]));

//3.

function lowestIndex(array) {

  let lowest = 0;

  for(let i in array) {
    if (array[i] < array[lowest]) {
      lowest = i;
    }
  }
  return lowest;
}

console.log('O menor índice é: ' + lowestIndex([2, 4, 6, 7, 10, 0, -3]));

//4.

function longestIndex(array) {

  let longest = array[0];

  for(let i in array) {
    if (longest.length < array[i].length) {
      longest = array[i];
    }
  }
  return longest;
}

console.log('O índice mais longo é: ' + longestIndex(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5.

function mostRepeatedNumber(arr) {

  let repeatedNumbers = [];

  for(let i in arr) {
    if (arr[0] === arr[i]) {
      repeatedNumbers.push(arr[i]);
    } 
    
  }

  console.log(repeatedNumbers);
}

mostRepeatedNumber([2, 3, 2, 5, 8, 2, 3]);

//Mentoria Invertida

// 1. Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer
// essa função deve receber dois parâmetros: base e altura
// e retornar um objeto no formato: 
// { area: 0, perimetro: 0 }
// perimetro = (2*base) + (2*altura)
// area = base * altura

function quadrilateral(base, height) {

  const perimeter = (base * 2) + (height * 2);
  const area = base * height;
  let result = {
    area: area,
    perimeter: perimeter,
  }

  return result;
}

console.log(quadrilateral(4, 2));

// 2. Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares 
// e ímpares no formato: 
// { pares: 0,
// impares: 0 }

let integerNumbers = [2, 5, 7, 8, 10, 13, 15];

function evenOdd(arr) {

  let even = 0;
  let odd = 0;

  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }

  let result = {
    pares: even,
    impares: odd
  }

  return result
}

console.log(evenOdd([2, 5, 7, 8, 10, 13, 15]));

// 3. Crie uma função que receba uma string word e outra string ending. 
// Verifique se a string ending é o final da string word . Considere que a string ending 
// sempre será menor que a string word. 
//  
// Valor de teste: 'trybe' e 'be'.
// Valor esperado no retorno da função: true
//  
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
//  
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false
//  
//  
// USAR O SPLIT: 

function verify(word, ending) {

  let str = word.split("");
  let final = ending.split("");

  if (ending[0] === word[word.length - 2] && ending[1] === word[word.length - 1]) {
    return true;
  } else {
    return false;
  }
}

console.log(verify("Tiago", "go"));