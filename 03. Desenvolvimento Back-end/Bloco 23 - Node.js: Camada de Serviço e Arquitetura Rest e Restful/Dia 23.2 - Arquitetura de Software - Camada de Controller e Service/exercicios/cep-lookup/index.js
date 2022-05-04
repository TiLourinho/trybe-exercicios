const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
const cepController = require('./controller/cepController');
const errorMiddleware = require('./middlewares/error');

app.get('/ping', cepController.getPong);
app.get('/cep/:cep', rescue(cepController.getByCEP));
app.post('/cep', rescue(cepController.registerCEP));

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});