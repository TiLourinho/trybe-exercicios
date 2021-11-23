// 1.
const numbers = [2, 3, 4, 6, 8, 12, 24];

console.log(numbers.reduce((acc, number) => {
  if (number % 2 === 0) {
    return number + acc;
  }
  return acc;
}));

// 2.
const quote = ['So', 'long', 'and', 'thanks', 'for', 'all', 'the', 'fish'];

const actual = quote.reduce((acc, word) => {
  return `${acc} ${word}`;
});
console.log(actual);

// 3.
const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' }
];

const playersObject = players.reduce((acc, player) => {
  acc[player.fullName] = player.email;
  return acc;
}, {});
console.log(playersObject);