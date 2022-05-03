const express = require('express');
const { validateFirstName, validateLastName, validateEmail, validatePassword } = require('../middlewares/validateUser');
const { createUser, getUsers, findById, updateUser } = require('../models/user');

const userRouter = express.Router();

userRouter.post('/', validateFirstName, validateLastName, validateEmail, validatePassword, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userData = await createUser(firstName, lastName, email, password);
  
  return res.status(201).json(userData);
});

userRouter.get('/', async (_req, res) => {
  const allUsers = await getUsers();

  if (!allUsers) return res.status(200).json(user);

  return res.status(200).json(allUsers);
});

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await findById(id);

  if (!user) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }

  return res.status(200).json(user);
});

userRouter.put('/:id', validateFirstName, validateLastName, validateEmail, validatePassword, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const updatedUser = await updateUser(id, firstName, lastName, email, password);

  if(!updatedUser) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }

  const response = { id, firstName, lastName, email };

  return res.status(200).json(response);
});

module.exports = userRouter;