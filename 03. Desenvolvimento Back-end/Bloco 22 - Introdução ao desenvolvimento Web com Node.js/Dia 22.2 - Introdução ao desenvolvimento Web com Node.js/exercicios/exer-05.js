const fs = require('fs').promises;

const createNewFile = async() => {
  const simpsonsAPI = './exercicios/simpsons.json';

  const data = await fs.readFile(simpsonsAPI, 'utf-8');
  const result = JSON.parse(data);

  const newFile = result.filter(item => parseInt(item.id) <= 4);
  
  await fs.writeFile('./exercicios/simpsonFamily.json', JSON.stringify(newFile));

  const checkNewFile = await fs.readFile('./exercicios/simpsonFamily.json', 'utf-8');
  return console.log(JSON.parse(checkNewFile));
}
createNewFile();