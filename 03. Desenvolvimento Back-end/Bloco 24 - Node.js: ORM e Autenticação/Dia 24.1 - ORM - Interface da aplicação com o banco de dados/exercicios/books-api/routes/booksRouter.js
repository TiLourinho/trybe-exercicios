const booksRouter = require('express').Router();

const BookController = require('../controllers/BookController');

booksRouter.get('/books', BookController.getAll);
booksRouter.get('/books/:id', BookController.getById);
booksRouter.post('/books', BookController.create);
booksRouter.put('/books/:id', BookController.update);
booksRouter.delete('/books/:id', BookController.remove);

module.exports = booksRouter;