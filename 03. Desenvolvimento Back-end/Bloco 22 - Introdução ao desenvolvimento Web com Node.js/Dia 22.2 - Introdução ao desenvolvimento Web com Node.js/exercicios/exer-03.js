const fs = require('fs').promises;

const getChar = async(id) => {
  const simpsonsAPI = './exercicios/simpsons.json';

  try {
    const character = await fs.readFile(simpsonsAPI, 'utf-8');
    const result = JSON.parse(character);
  
    const data = result.find(char => char.id === id);
    return console.log(`${data.id} - ${data.name}`);
  } catch(err) {
    console.log(`Id não encontrada\nError: ${err.message}`);
  }
}
getChar('3');
