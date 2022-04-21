const express = require('express');
const postsRouter = express.Router();
const { NOT_FOUND, OK } = require('../helpers/statusCode');

const posts = [
  { id: 1, quote: 'This is the part where Cameron goes berserk.', author: 'Ferris Bueller' },
  { id: 2, quote: `Ferris Bueller, you're my hero!`, author: 'Cameron Frye' },
  { id: 3, quote: `Between grief and nothing... I'll take grief.`, author: 'Ed Rooney' },
  { id: 4, quote: `Pardon my french, but you're an asshole!`, author: 'Cameron Frye' },
  { id: 5, quote: 'Sooner or later, everybody goes kazoo.', author: 'Sloane Peterson' }
];

postsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundId = posts.find(item => item.id === parseInt(id));

  if (!foundId) {
    return res.status(NOT_FOUND).json({ message: 'Post not found' });
  }
  return res.status(OK).json({ message: `Post found! Author: ${foundId.author} - Quote: ${foundId.quote}` });
});

postsRouter.get('/', (_req, res) => {
  if (!posts) {
    res.status(OK).json({ posts: '[]' });
  }
  res.status(OK).json({ message: 'Quotes cadastrados', posts });
});

module.exports = postsRouter;