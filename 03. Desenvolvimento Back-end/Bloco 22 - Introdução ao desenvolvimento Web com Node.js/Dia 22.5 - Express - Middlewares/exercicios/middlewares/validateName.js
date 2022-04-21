const { BAD_REQUEST } = require('../helpers/statusCode');

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name || name <= 5) {
    return res.status(BAD_REQUEST).json({ 'message': 'Invalid data!' });
  }

  next();
};

module.exports = validateName;