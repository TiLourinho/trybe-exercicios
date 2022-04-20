const express = require('express');
const bodyParser = require('body-parser');
const recipesRouter = require('./recipesRouter');
const drinksRouter = require('./drinksRouter');

const app = express();
app.use(bodyParser.json());

app.get('/open', function(req, res) {
  res.send('Open!');
});

app.use('/recipes', recipesRouter);
app.use('/drinks', drinksRouter);

// app.all('*', function (req, res) {
//   return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
