//1.

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2.

let a = 12;
let b = 6;

if (a > b) {
  console.log("O maior número é o a");
} else {
  console.log("O maior número é o b");
}

//3.

let a = 5;
let b = 7;
let c = 10;

if (a > b && a > c) {
  console.log("O maior dos 3 números é a");
} else if (b > a && b > c) {
  console.log("O maior dos 3 números é b");
} else {
  console.log("O maior dos 3 números é c");
}

//4.

const num = 0;

if (num > 0) {
  console.log("A constante num é positiva");
} else if (num < 0) {
  console.log("A constante num é negativa");
} else {
  console.log("A constante num é 0");
}

//5.

const a = 75;
const b = 60;
const c = 45;

if (a + b + c === 180) {
  console.log("true");
} else if (a < 0 || b < 0 || c < 0) {
  console.log("Error");
} else {
  console.log("false");
}

//6.

let peca = "PEÃO";

switch (peca.toLowerCase()) {
  case "peão":
    console.log("Para frente por uma casa");
    break;
  case "torre":
    console.log("Ilimitado para frente e para os lados")
    break;
  case "bispo":
    console.log("Ilimitado para as diagonais");
    break;
  case "cavalo":
    console.log("Movimento em forma de L");
    break;
  case "rei":
    console.log("Todas as direções por uma casa");
    break;
  case "rainha":
    console.log("Ilimitado para todas as direções");
    break;
  default:
    console.log("Erro!");
}

//7.

let nota = 80;

if (nota < 0 || nota > 100) {
  console.log("Erro!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//8.

const a = 10;
const b = 15;
const c = 20;

if ((a % 2) === 0 || (b % 2) === 0 || (c % 2) === 0) {
  console.log("true");
} else {
  console.log("false");
}

//9.

const a = 10;
const b = 15;
const c = 20;

if ((a % 2) === 1 || (b % 2) === 1 || (c % 2) === 1) {
  console.log("true");
} else {
  console.log("false");
}

//10.

const custo = 15;
const venda = 20;
let custoTotal = custo + (custo * 0.2);
let lucro = venda - custoTotal;

if (custo < 0 || venda < 0) {
  console.log("Erro!");
} else {
  console.log(lucro * 1000);
}

//11.

const salarioBruto = 8000;
let salarioBase;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * 0.11);
} else {
  salarioBase = salarioBruto - 570,88;
}

let salarioLiquido;

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioLiquido;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13);
} else {
  salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
}

console.log("Seu salário líquido é de: " + "R$" + salarioLiquido)