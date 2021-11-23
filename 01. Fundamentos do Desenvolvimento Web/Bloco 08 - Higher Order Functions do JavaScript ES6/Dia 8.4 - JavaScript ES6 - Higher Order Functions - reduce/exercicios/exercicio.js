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

// 5.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
};

// 6.

// a.
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notes = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function sumNotes(acc, note) {
  return acc + note;
};

function calcAverage(index) {
  const sum = notes[index].reduce(sumNotes, 0);

  return sum / notes[index].length;
};

function studentAverage() {
  return students.reduce((acc, student, index) => {
    const object = {
      name: student,
      avarage: calcAverage(index),
    };
    acc.push(object);
    return acc;
  }, []);
};
console.log(studentAverage());

// b.
function studentAverage() {
  const nameAndAverage = students.map((student, index) => ({
    name: student,
    average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),
  }));
  return nameAndAverage;
}