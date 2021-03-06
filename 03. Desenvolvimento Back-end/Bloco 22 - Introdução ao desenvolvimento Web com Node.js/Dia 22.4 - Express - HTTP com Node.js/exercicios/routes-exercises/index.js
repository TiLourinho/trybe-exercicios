const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3002;

app.get('/ping', (req, res) => {
  res.json({ "message": "pong" });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ "message": `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ "message": `Hello, ${name}!`});
    return res.status(401).json({ "message": "Unauthorized" });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
