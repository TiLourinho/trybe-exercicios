const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');
const teamsRouter = require('./routes/teams');
const routError = require('./middlewares/handleError');
const validateToken = require('./middlewares/validateToken');
const { PORT, API } = require('./helpers/constants');
const { OK, NOT_FOUND } = require('./helpers/statusCode');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/btc/price', validateToken, async (_req, res) => {
  const result = await axios.get(API);

  res.status(OK).json(result.data);
});

app.use('/user', userRouter);
app.use('/posts', postsRouter);
app.use('/teams', teamsRouter);

app.use('*', (_req, _res, next) => {
  next({ statusCode: `${NOT_FOUND}`, message: 'Opsss, route not found!' });
});
app.use(routError);

app.listen(PORT, () => {
  console.log(`Aplicação sendo ouvida na porta ${PORT}`);
});
