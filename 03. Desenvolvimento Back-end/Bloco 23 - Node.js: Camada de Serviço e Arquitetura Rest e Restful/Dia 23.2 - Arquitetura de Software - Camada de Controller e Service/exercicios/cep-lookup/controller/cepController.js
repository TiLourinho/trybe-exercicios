const cepService = require('../services/cepService');
const Joi = require('joi');

const getPong = (_req, res) => {
  const pong = cepService.getPong();

  return res.status(200).json(pong);
};

const getByCEP = async (req, res, next) => {
  const { cep } = req.params;
  const data = await cepService.getByCEP(cep);

  if (data.error) {
    return next(data.error);
  }

  return res.status(200).json(data);
};

const registerCEP = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const regex = /\d{5}-\d{3}/;
  const validateString = Joi.string().not().empty().required();

  const schema = Joi.object().keys({
    cep: Joi.string().regex(regex).required(),
    logradouro: validateString,
    bairro: validateString,
    localidade: validateString,
    uf: validateString.length(2),
  }).validate(req.body);

  if (schema.error) {
    return next(schema.error);
  }

  const newCEP = await cepService.registerCEP(cep, logradouro, bairro, localidade, uf);

  if (newCEP.error) {
    return next(newCEP.error);
  }

  return res.status(201).json(newCEP);
}

module.exports = {
  getPong,
  getByCEP,
  registerCEP
};