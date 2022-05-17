const express = require('express');

const booksRouter = require('./routes/booksRouter');

const app = express();
app.use(express.json());

app.use(booksRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));