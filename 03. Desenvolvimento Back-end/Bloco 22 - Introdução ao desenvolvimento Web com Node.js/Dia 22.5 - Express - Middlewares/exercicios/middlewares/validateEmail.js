const { BAD_REQUEST } = require('../helpers/statusCode');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
  const check = regex.exec(email);

  if (!email || !check) {
    return res.status(BAD_REQUEST).json({ 'message': 'Invalid data!' });
  }

  next();
};

module.exports = validateEmail;