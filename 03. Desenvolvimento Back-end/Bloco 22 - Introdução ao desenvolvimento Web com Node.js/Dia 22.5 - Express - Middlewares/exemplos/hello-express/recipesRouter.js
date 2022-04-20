const express = require('express');
const recipesRouter = express.Router();
const authMiddleware = require('./auth-middleware');

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (!price || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ "message": "Invalid data!" });
  }

  next();
}

recipesRouter.use(authMiddleware);

recipesRouter.get('/', function(req, res) {
  const recipesOrdered = recipes.sort((a, b) => a.name.localeCompare(b.name)); // Em order alfabética por nome

  res.status(200).json(recipesOrdered);
});

recipesRouter.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

recipesRouter.get('/search', function(req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter(recipe => recipe.name.includes(name)
    && recipe.price < parseInt(maxPrice)
    && recipe.price >= parseInt(minPrice));

  res.status(200).json(filteredRecipes);
});

recipesRouter.post('/', validatePrice, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.body;
  recipes.push({ id, name, price, waitTime, chef: username });

  res.status(201).json({ message: 'Recipe created successfully!'});
});

recipesRouter.put('/:id', validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

recipesRouter.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = recipesRouter;
