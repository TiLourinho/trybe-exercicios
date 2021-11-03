//1.
let n = 5;
let linha = " ";

for (let i = 1; i <= n; i += 1) {
  linha += "*";
}
for (let j = 1; j <= n; j += 1) {
  console.log(linha);
}

//2.
let n = 5;
let linha = " ";

for (let i = 1; i <= n; i += 1) {
  linha += "*";
  console.log(linha);
}

//3.
let n = 5;
let simbolo = "*";
let linha = " ";
let posicao = n;

for (let i = 0; i <= n; i += 1) {
  for (let j = 0; j <= n; i += 1) {
    if (j < posicao) {
      linha += " ";
    } else {
      linha += simbolo;
    }
  }
  console.log(linha);
  linha = " ";
  posicao -= 1;
}

//4.
let n = 5;
let espaco = " ";
let posicao = n;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let i = 0; i <= meio; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    if (j > esquerda && j < direita) {
      espaco += "*";
    } else {
      espaco += " ";
    }
  }
  console.log(espaco);
  espaco = " ";
  esquerda -= 1;
  direita += 1;
}







