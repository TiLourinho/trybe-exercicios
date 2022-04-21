const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user');
const axios = require('axios');
const validateToken = require('./middlewares/validateToken');
const { OK } = require('./helpers/statusCode');

const PORT = 3000;
const API = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/btc/price', validateToken, async (_req, res) => {
  const result = await axios.get(API);

  res.status(OK).json(result.data);
});

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Aplicação sendo ouvida na porta ${PORT}`);
});
