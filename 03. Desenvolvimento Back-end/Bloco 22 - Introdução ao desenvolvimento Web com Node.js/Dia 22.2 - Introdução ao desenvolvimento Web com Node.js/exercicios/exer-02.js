const fs = require('fs').promises;

const readAPI = async() => {
  const simpsonsAPI = './exercicios/simpsons.json';

  try {
    const file = await fs.readFile(simpsonsAPI, 'utf-8');
    const result = JSON.parse(file);
    
    console.log('Arquivo lido com sucesso!\n');

    return result.forEach(item => {
      console.log(`${item.id} - ${item.name}`)
    });
  } catch(err) {
    console.log(`Erro ao ler o arquivo!\n${err.message}`)
  }
}
readAPI();
