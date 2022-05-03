const connection = require('./connection');

const getByBookId = async (bookId) => {
  const query = 'SELECT * FROM model_example.books WHERE book_id=?;';
  const [books] = await connection.execute(query, [bookId]);

  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    authorId: book_id,
  }));
};

const findById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?';
  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return {
    id,
    title,
    bookId: book_id,
  };
};

const getAll = async (bookData) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;'
  );

  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    bookId: book_id,
  }));
};

const createBook = async (title, bookId) => {
  connection.execute(
    'INSERT INTO model_example.books (title, book_id) VALUES (?, ?)',
    [title, bookId],
  );
};

module.exports = {
  getAll,
  getByBookId,
  findById,
  createBook
};
