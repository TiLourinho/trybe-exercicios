const express = require('express');
const postsRouter = express.Router();
const { POSTS } = require('../helpers/constants');
const { NOT_FOUND, OK } = require('../helpers/statusCode');

postsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundId = POSTS.find(item => item.id === parseInt(id));

  if (!foundId) {
    return res.status(NOT_FOUND).json({ message: 'Post not found' });
  }
  return res.status(OK).json({ message: `Post found! Author: ${foundId.author} - Quote: ${foundId.quote}` });
});

postsRouter.get('/', (_req, res) => {
  if (!POSTS) {
    res.status(OK).json({ posts: '[]' });
  }
  res.status(OK).json({ message: 'Quotes cadastrados', POSTS });
});

module.exports = postsRouter;