// Este array simula uma coleção em um banco de dados não-relacional.

const db = [
  {
    id: 123,
    name: "Xuxa",
    favoriteFood: "algodão doce",
    greeting: "Oi galerinha!",
  },
  {
    id: 321,
    name: "João Corça",
    favoriteFood: "churrasco",
    greeting: "Salve!",
  },
  {
    id: 404,
    name: "Faustina O'Missing",
    favoriteFood: null,
    greeting: "Oi.",
  },
];

// Esta variável abaixo, juntamente com as duas funções, hackTheDb() e restartDb() permitem controlar a simulação de uma falha.

// shouldFail = false deixa os dados sem falha;
// shouldFail = true deixa os dados com falha;
let shouldFail = false;

function hackTheDb() {
  shouldFail = true;
}

function restartDb() {
  shouldFail = false;
}

// A função findOne simula uma pesquisa no banco de dados.

function findOne(filter, callback) {
  setTimeout(() => {
    if (shouldFail) {
      return callback(new Error("Falha no acesso ao banco de dados!"), null);
    }

    const queryResult = db.find(filter);

    callback(null, queryResult);
  }, 300);
}

// A função createPresentationMessage possibilita a montagem de uma string a partir da pessoa usuária recuperada do "banco de dados".

function createPresentationMessage(filter, callback) {
  findOne(filter, (err, result) => {
    if (err) {
      return callback(err, null);
    }

    const { greeting, name, favoriteFood } = result;

    const greetingString = `${greeting} Meu nome é ${name} e minha comida favorita é ${favoriteFood}.`;

    callback(null, greetingString);
  });
}

module.exports = {
  createPresentationMessage,
  hackTheDb,
  restartDb,
};