const { BAD_REQUEST } = require('../helpers/statusCode');

const validateInitials = (req, res, next) => {
  const { initials } = req.body;
  
  if (!initials || initials > 3) {
    return res.status(BAD_REQUEST).json({ 'message': 'Invalid data!' });
  }

  next();
};

module.exports = validateInitials;