const { BAD_REQUEST } = require('../helpers/statusCode');

const validateCountry = (req, res, next) => {
  const { country } = req.body;

  if (!country || country <= 3) {
    return res.status(BAD_REQUEST).json({ 'message': 'Invalid data!' });
  }

  next();
};

module.exports = validateCountry;