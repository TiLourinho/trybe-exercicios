const BookService = require('../services/BookService');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();

    return res.status(200).json(books);
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(book);
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BookService.create(title, author, pageQuantity);

    return res.status(201).json(book);
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const book = await BookService.update({ title, author, pageQuantity }, id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json({ message: 'Book updated!'});
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({ message: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.remove(id);

    return res.status(204).end();
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};