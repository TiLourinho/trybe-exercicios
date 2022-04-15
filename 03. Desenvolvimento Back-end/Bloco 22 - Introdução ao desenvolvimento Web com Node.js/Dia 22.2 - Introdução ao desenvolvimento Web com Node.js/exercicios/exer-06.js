const fs = require('fs').promises;

const addChar = async() => {
  const simpsonFamily = './exercicios/simpsonFamily.json';

  const data = await fs.readFile(simpsonFamily, 'utf-8');
  const result = JSON.parse(data);

  result.push({ "id": "8", "name": "Nelson Muntz" });

  await fs.writeFile(simpsonFamily, JSON.stringify(result));

  const checkNewFile = await fs.readFile(simpsonFamily, 'utf-8');
  return console.log(checkNewFile);
}
addChar();