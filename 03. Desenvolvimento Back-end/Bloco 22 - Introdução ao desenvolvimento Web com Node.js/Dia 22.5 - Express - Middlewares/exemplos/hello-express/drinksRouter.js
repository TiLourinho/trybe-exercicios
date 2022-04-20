const express = require('express');
const drinksRouter = express.Router();
const authMiddleware = require('./auth-middleware');

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (!price || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ "message": "Invalid data!" });
  }

  next();
}

drinksRouter.use(authMiddleware);

drinksRouter.get('/', function(req, res) {
  const drinksOrdered = drinks.sort((a, b) => a.name.localeCompare(b.name)); // Em order alfabética por nome

  res.status(200).json(drinksOrdered);
});

drinksRouter.get('/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinksOrdered.find(drink => drink.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found'});

  res.status(200).json(drink);
});

drinksRouter.get('/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter(drink => drink.name.includes(name));

  res.status(200).json(filteredDrinks);
});

drinksRouter.post('/', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  
  res.status(201).json({ message: 'Recipe created successfully!'});
});

drinksRouter.put('/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks[recipeIndex] = { ...drinks[recipeIndex], name, price };

  res.status(204).end();
});

drinksRouter.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = drinksRouter;
