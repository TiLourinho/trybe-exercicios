// 1.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// a.
function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr));
};

// console.log(flatten());

// b.
// function flatten(acc, curr) {
//   return acc.concat(curr);
// };

// console.log(arrays.reduce(flatten));

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2.

function reduceNames() {
  const names = books.reduce((acc, curr, index, array) => {
    if (index === array.length - 1) return `${acc} ${curr.author.name}.`;
    return `${acc} ${curr.author.name},`;
  }, '');
  return names.trim();
};

// 3.

function averageAge() {
  const check = books.reduce((acc, item) => {
    return acc + (item.releaseYear - item.author.birthYear)
  }, 0);
  return check / books.length;
};
console.log(averageAge());

// 4.

function longestNamedBook() {
  const longestName = books.reduce((acc, book) => {
    if (acc.name < book.name) return book;
    return acc
  });
  return longestName.name;
};
console.log(longestNamedBook());