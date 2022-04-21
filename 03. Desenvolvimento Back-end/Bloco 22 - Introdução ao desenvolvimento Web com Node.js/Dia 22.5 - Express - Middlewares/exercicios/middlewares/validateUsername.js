const { BAD_REQUEST } = require('../helpers/statusCode');

const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username || username <= 3) {
    return res.status(BAD_REQUEST).json({ 'message': 'Invalid data!' });
  }

  next();
};

module.exports = validateUsername;