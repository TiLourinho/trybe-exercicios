const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');
const Book = require('./controllers/Book');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.createAuthor));

app.get('/books', rescue(Book.getAll));
app.get('/books/:id', rescue(Book.findById));
app.post('/books', rescue(Book.createBook));

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
