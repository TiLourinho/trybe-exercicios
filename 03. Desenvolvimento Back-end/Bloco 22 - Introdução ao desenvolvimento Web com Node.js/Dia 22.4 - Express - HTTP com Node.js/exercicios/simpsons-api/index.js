const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());

const PORT = 3003;
const simpsonsAPI = './simpsons.json';

app.get('/simpsons', async (req, res) => {
  try {
    const data = await fs.readFile(simpsonsAPI, 'utf-8');
    
    res.status(200).send(data);
  } catch (error) {
    res.status(500).end();
  }
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const data = await fs.readFile(simpsonsAPI, 'utf-8');
    const result = JSON.parse(data);
  
    const character = result.find(char => char.id === id);
  
    if (!character) return res.status(404).json({ "message": "Character not found!" });
      return res.status(200).json(character);
  } catch (error) {
    res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;

  try {
    const data = await fs.readFile(simpsonsAPI, 'utf-8');
    const result = JSON.parse(data);
    const resultIDs = result.map(char => char.id);


    if (resultIDs.includes(id)) {
      return res.status(409).json({ "message": "id already exists!"});
    }
    result.push({ "id": `${id}`, "name": `${name}` });

    await fs.writeFile(simpsonsAPI, JSON.stringify(result));
    return res.status(204).end();
  } catch (error) {
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});