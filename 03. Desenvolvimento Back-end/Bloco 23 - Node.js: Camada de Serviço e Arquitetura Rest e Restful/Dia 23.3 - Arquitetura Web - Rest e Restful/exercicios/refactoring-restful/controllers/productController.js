const express = require('express');
const ProductModel = require('../models/productModel');
const { STATUS_OK, STATUS_NOT_FOUND, STATUS_CREATED, STATUS_NO_CONTENT } = require('../utils/statusCodes');

const router = express.Router();

router.get('/list-products', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(STATUS_OK).json(products);
});

router.get('/get-by-id/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    return res.status(STATUS_NOT_FOUND).json({ message: 'Produto não encontrado' });
  }

  res.status(STATUS_OK).json(product);
});

router.post('/add-product', async (req, res) => {
  const { name, brand } = req.body;

  if (name.lenght === 0 || !name || brand.length === 0 || !brand) {
    return res.status(STATUS_NOT_FOUND).json({ message: 'Informações inválidas' });
  }

  const newProduct = await ProductModel.add(name, brand);

  res.status(STATUS_CREATED).json(newProduct);
});

router.delete('/delete-product/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    return res.status(STATUS_NOT_FOUND).json({ message: 'Produto não encontrado' });
  }

  await ProductModel.exclude(req.params.id);
  res.status(STATUS_NO_CONTENT).json();
});

router.put('/update-product/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (name.lenght === 0 || !name || brand.length === 0 || !brand) {
    return res.status(STATUS_NOT_FOUND).json({ message: 'Informações do produto inválidas' });
  }

  const product = await ProductModel.getById(req.params.id);
  
  if (product === null) {
    return res.status(STATUS_NOT_FOUND).json({ message: 'Produto não encontrado' });
  }

  await ProductModel.update(req.params.id, name, brand);
  res.status(STATUS_OK).json({ name, brand });
});

module.exports = router;