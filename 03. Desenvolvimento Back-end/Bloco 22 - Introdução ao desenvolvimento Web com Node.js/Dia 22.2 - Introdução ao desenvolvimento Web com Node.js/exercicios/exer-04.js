const fs = require('fs').promises;

const removeChars = async() => {
  const simpsonsAPI = './exercicios/simpsons.json';

  try {
    const data = await fs.readFile(simpsonsAPI, 'utf-8');
    const result = JSON.parse(data);

    const charsRemoved = result.filter(char => char.id !== '6' && char.id !== '10');

    await fs.writeFile(simpsonsAPI, JSON.stringify(charsRemoved));
    return console.log(`Remoção sucedida!`);
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
}
removeChars();