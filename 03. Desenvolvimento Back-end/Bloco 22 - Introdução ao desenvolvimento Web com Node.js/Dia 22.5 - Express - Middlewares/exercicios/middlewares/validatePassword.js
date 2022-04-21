const { BAD_REQUEST } = require('../helpers/statusCode');

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 4 || password.length > 8 || typeof password !== 'number') {
    return res.status(BAD_REQUEST).json({ 'message': 'Invalid data!' });
  }

  next();
};

module.exports = validatePassword;