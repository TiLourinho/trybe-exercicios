const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
