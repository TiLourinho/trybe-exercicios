const express = require('express');
const userRouter = express.Router();
const validateUsername = require('../middlewares/validateUsername');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const { OK, CREATED, BAD_REQUEST } = require('../helpers/statusCode');

userRouter.post('/register', validateUsername, validateEmail, validatePassword, (_req, res) => {
  res.status(CREATED).json({ 'message': 'User created!'});
});

userRouter.post('/login', validateEmail, validatePassword, (_req, res) => {
  // const token = Math.random().toString(36).substring(5); // Gerador de token

  try {
    res.status(OK).json({ token: '86567349784e' });
  } catch (err) {
    res.status(BAD_REQUEST).json({ 'message': 'Email or Password is incorrect!' });
  }
});

module.exports = userRouter;
