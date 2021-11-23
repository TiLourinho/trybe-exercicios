const { cervejas } = require('./dados');
// HoF REDUCE
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// O reduce é uma função muito poderosa, que permite que a gente combine todo o resultado da aplicação da função passada como parâmetro nos elementos do array
// em um único resultado.

const numeros = [2, 5, 9, 15, 89, 0, 135, 3, 110];

// Apresentar a soma de todos os números do Array numeros

// Com for tradicional:
let accumulatorFor = numeros[0];
for (let i = 1; i < numeros.length; i += 1) {
  accumulatorFor = accumulatorFor + numeros[i];
};
console.log('accumulatorFor:', accumulatorFor);

// Com reduce
const soma = numeros.reduce((accSoma, numero) => (accSoma += numero), 0);
console.log('Soma dos números:', soma);

// Apresentar o maior número do vetor com reduce
const maiorNumero = numeros.reduce((accMaiorNumero, numero) => {
  if (accMaiorNumero < numero) return numero;
  return accMaiorNumero;
});
console.log('O maior número do vetor é:', maiorNumero);

// Verificar quantas vezes cada nome se repete no array de nomes usando o reduce
// Exibir no formato {Alexandre: 1, Adriana: 3, Matheus: 2......}
const nomes = [
  'Alexandre',
  'Adriana',
  'Matheus',
  'Adriana',
  'Marlene',
  'João',
  'Matheus',
  'João',
  'Adriana',
];

const nomesRepetidos = nomes.reduce((accNomes, nome) => {
  if (Object.keys(accNomes).includes(nome)) {
    accNomes[nome]++;
  } else {
    accNomes[nome] = 1;
  }
  return accNomes;
}, {});
console.log(nomesRepetidos);

// Calcular o total de cervejas em estoque
const totalDeCervejasEmEstoque = cervejas.reduce((estoque,cerveja) =>
  estoque += cerveja.estoque, 0);
console.log('O total de cervejas em estoque é: ', totalDeCervejasEmEstoque);

// Verificar qual é a cerveja mais cara em estoque exibindo suas informações no log
const cervejaMaisCara = cervejas.reduce((cervejaMaisCara,cerveja) =>
  (cervejaMaisCara.valor < cerveja.valor) ? cerveja : cervejaMaisCara 
  // if(cervejaMaisCara.valor < cerveja.valor) return cerveja
  // return cervejaMaisCara;
);
console.log('A cerveja mais cara em estoque é:', cervejaMaisCara);
