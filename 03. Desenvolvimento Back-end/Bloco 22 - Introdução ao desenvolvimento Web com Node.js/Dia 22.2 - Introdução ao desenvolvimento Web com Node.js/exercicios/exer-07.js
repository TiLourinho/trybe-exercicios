const fs = require('fs').promises;

const tradeChar = async() => {
  const simpsonFamily = './exercicios/simpsonFamily.json';

  const data = await fs.readFile(simpsonFamily, 'utf-8');
  const result = JSON.parse(data);

  const removeChar = result.filter(char => char.id !== '8');
  removeChar.push({ "id": "5", "name": "Maggie Simpson" });

  await fs.writeFile(simpsonFamily, JSON.stringify(removeChar));

  const checkNewFile = await fs.readFile(simpsonFamily, 'utf-8');
  return console.log(checkNewFile);
}
tradeChar();