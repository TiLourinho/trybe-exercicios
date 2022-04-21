const { UNAUTHORIZED } = require('../helpers/statusCode');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const regex = /[a-zA-Z0-9]{12}$/i;
  const check = regex.exec(authorization);

  if (!authorization || !check) {
    return res.status(UNAUTHORIZED).json({ 'message': 'Invalid token!' });
  }

  next();
};

module.exports = validateToken;
